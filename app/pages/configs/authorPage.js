const config = {
    file: 'index.html',
    placeholders: {
        menu: {
            copies: 1,
            file: 'blocks\\menu.html',
            placeholders: {}
        },
        header: {
            copies: 1,
            file: 'blocks\\header.html',
            placeholders: {}
        },
        popUp: {
            file: 'popUp\\popUp.html',
            placeholders: {
                popUpSortProduct: {
                    file: 'popUp\\blocks\\popUpSortProduct.html',
                    placeholders: {}
                },
                popUpSortReview: {
                    file: 'popUp\\blocks\\popUpSortReview.html',
                    placeholders: {}
                },
                popUpSelect: {
                    file: 'popUp\\blocks\\popUpSelect.html',
                    placeholders: {}
                },
                popUpSubcategories: {
                    file: 'popUp\\blocks\\popUpSubcategories.html',
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
                },
                popUpSuccess: {
                    file: 'popUp\\blocks\\popUpSuccess.html',
                    placeholders: {}
                },
                popUpSuccessCheckin: {
                    file: 'popUp\\blocks\\popUpSuccessCheckin.html',
                    placeholders: {}
                }
            }
        },
        pagesContent: {
            file: 'author\\index.html',
            placeholders: {
                starRating: {
                    file: 'blocks\\starRating.html',
                    placeholders: {}
                }
            }
        },
        footer: {
            file: 'blocks\\footer.html',
            placeholders: {}
        },
    }
};
module.exports = config;
