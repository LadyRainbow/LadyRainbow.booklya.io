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
                popUpSubcategories: {
                    file: 'popUp\\blocks\\popUpSubcategories.html',
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
                popUpSuccessCheckIn: {
                    file: 'popUp\\blocks\\popUpSuccessCheckIn.html',
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
            file: 'order\\order.html',
            placeholders: {
                pay: {
                    file: 'order\\blocks\\pay.html',
                    placeholders: {}
                }
            }
        }
    }
};
module.exports = config;
