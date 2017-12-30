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
            file: 'main\\index.html',
            placeholders: {
                slider: {
                    file: 'main\\blocks\\slider.html',
                    placeholders: {}
                },
                promoCategories: {
                    file: 'main\\blocks\\promoCategories.html',
                    placeholders: {}
                },
                popCategories: {
                    file: 'main\\blocks\\popCategories.html',
                    placeholders: {}
                },
                smProduct: {
                    file: 'blocks\\smProduct.html',
                    placeholders: {
                        starRating: {
                            file: 'blocks\\starRating.html',
                            placeholders: {}
                        }
                    }
                },
                authorHitBlock: {
                    file: 'blocks\\authorHitBlock.html',
                    placeholders: {
                        starRating: {
                            file: 'blocks\\starRating.html',
                            placeholders: {}
                        }
                    }
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
