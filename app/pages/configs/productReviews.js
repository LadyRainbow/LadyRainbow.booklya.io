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
                popUpSort: {
                    file: 'popUp\\blocks\\popUpSort.html',
                    placeholders: {}
                },
                popUpSelect: {
                    file: 'popUp\\blocks\\popUpSelect.html',
                    placeholders: {}
                },
                popUpSuccess: {
                    file: 'popUp\\blocks\\popUpSuccess.html',
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
            file: 'product\\blocks\\productTop.html',
            placeholders: {
                reviews: {
                    file: 'reviews\\index.html',
                    placeholders: {
                        starRating: {
                            file: 'blocks\\starRating.html',
                            placeholders: {}
                        }
                    }
                }
            }
        },
    }
};
module.exports = config;
