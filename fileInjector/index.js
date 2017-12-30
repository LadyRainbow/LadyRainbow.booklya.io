
'use strict';

const fs = require('fs');
const path = require('path');

const FIconfig = {
    basePath: `${path.resolve('../')}\\`
};

function requireUncached(module){
    delete require.cache[require.resolve(module)]
    return require(module)
}

const createFile = async (output, config) => {
    const content = await fileInjector(config);
    await writeFile(output, content);
}

const fileInjector = async (config) => {
    const path = `${FIconfig.basePath}\\${config.file}`;
    let fileContent;
    try {
        fileContent = await readFile(path);
        if (!(config.placeholders && Object.keys(config.placeholders).length)) {
            return fileContent;
        }

        const injectionsMap = parseContent(fileContent);
        for (let placeholderSubstring in injectionsMap) {
            const placeholder = injectionsMap[placeholderSubstring];
            if (placeholder in config.placeholders) {
                const subConfig = config.placeholders[placeholder];
                const result = await fileInjector(subConfig);
                const replacer = [];
                const copies = subConfig.copies ? Number(subConfig.copies) : 1;
                for (let i = 0; i < copies; i++) {
                    replacer.push(result);
                }
                fileContent = fileContent.replace(new RegExp(placeholderSubstring, 'g'), replacer.join(''));
            }
        }
    } catch (e) {
        throw new Error(`attempt to processing file: "${path}"`);
    }

    return fileContent;
}

const readFile = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) rej();
            res(data);
        });
    });
}

const scanDir = (dirPath) => {
    return new Promise((res, rej) => {
        fs.readdir(dirPath, 'utf8', (err, data) => {
            if (err) rej();
            res(data);
        });
    });
}

const writeFile = (path, content) => {
    return new Promise((res, rej) => {
        fs.writeFile(path, content, (err) => {
            if (err) rej();
            res();
        });
    });
}

const parseContent = (content) => {
    const regex = /\<\!-- FileInjector:(\w+) --\>/g;

    const injectionsMap = {};
    let match;
    while ((match = regex.exec(content)) != null) {
        const [matchedSubstring, placeholder] = match;
        injectionsMap[matchedSubstring] = placeholder;
    }
    return injectionsMap;
}

const processing = async (dirPath, templatesBasePath = false) => {
    if (templatesBasePath) {
        FIconfig.basePath = templatesBasePath;
    }
    const configsDirPath = `${dirPath}\\configs`;
    const outputDirPath = `${dirPath}\\output`;
    const configFiles = await scanDir(configsDirPath);
    // console.log(configFiles);

    for (let configFile of configFiles) {
        const filename = configFile.split('.').slice(0, -1).join('.');
        const outputFile = `${outputDirPath}\\${filename}.html`;
        configFile = `${configsDirPath}\\${configFile}`;
        const config = requireUncached(configFile);
        try {
            await createFile(outputFile, config);
        } catch (e) {
            console.log(`FILE_INJECTOR: error has been occured! Cannot compose file "${filename}"`);
            console.log({
                outputFile,
                configFile,
                basePath: FIconfig.basePath,
                errorMessage: e.message
            });
        }
    }

}

module.exports = processing;
