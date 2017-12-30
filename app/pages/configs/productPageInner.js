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
                smProduct: {
                    file: 'blocks\\smProduct.html',
                    placeholders: {
                        starRating: {
                            file: 'blocks\\starRating.html',
                            placeholders: {}
                        }
                    }
                },
                starRating: {
                    file: 'blocks\\starRating.html',
                    placeholders: {}
                },
                characteristics: {
                    file: 'product\\blocks\\characteristics.html',
                    placeholders: {}
                },
                sections: {
                    file: 'product\\blocks\\sections.html',
                    placeholders: {}
                },
                otherEditions: {
                    file: 'product\\blocks\\otherEditions.html',
                    placeholders: {}
                },
                deliveryPay: {
                    file: 'product\\blocks\\deliveryPay.html',
                    placeholders: {}
                },
                description: {
                    file: 'product\\blocks\\description.html',
                    placeholders: {}
                },
                reviews: {
                    file: 'reviews\\index.html',
                    placeholders: {
                        starRating: {
                            file: 'blocks\\starRating.html',
                            placeholders: {}
                        },
                    }
                }
            }
        },
    }
};
module.exports = config;
