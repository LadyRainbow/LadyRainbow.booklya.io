const config = {
    file: 'index.html',
    placeholders: {
        menu: {
            copies: 1,
            file: 'blocks\\menu.html',
            placeholders: {}
        },
        header: {
            file: 'blocks\\header.html',
            placeholders: {}
        },
        popUp: {
            file: 'popUp\\popUp.html',
            placeholders: {
                popUpSortReview: {
                    file: 'popUp\\blocks\\popUpSortReview.html',
                    placeholders: {}
                },
                popUpSortProduct: {
                    file: 'popUp\\blocks\\popUpSortProduct.html',
                    placeholders: {}
                },
                popUpSuccess: {
                    file: 'popUp\\blocks\\popUpSuccess.html',
                    placeholders: {}
                },
                popUpSubcategories: {
                    file: 'popUp\\blocks\\popUpSubcategories.html',
                    placeholders: {}
                },
                popUpSelect: {
                    file: 'popUp\\blocks\\popUpSelect.html',
                    placeholders: {}
                },
                popUpReview: {
                    file: 'popUp\\blocks\\popUpReview.html',
                    placeholders: {}
                },
                popUpComment: {
                    file: 'popUp\\blocks\\popUpComment.html',
                    placeholders: {}
                },
                popUpCommentReply: {
                    file: 'popUp\\blocks\\popUpCommentReply.html',
                    placeholders: {}
                }
            }
        },
        pagesContent: {
            file: 'articles\\blocks\\articles.html',
            placeholders: {
                articlePreviewBlock: {
                    file: 'articles\\blocks\\articlePreviewBlock.html',
                    placeholders: {}
                }
            }
        }
    }
};
module.exports = config;
