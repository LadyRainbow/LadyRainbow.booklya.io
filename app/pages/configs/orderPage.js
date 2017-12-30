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
                delivery: {
                    file: 'order\\blocks\\delivery.html',
                    placeholders: {
                        address: {
                            file: 'order\\blocks\\address.html',
                            placeholders: {}
                        },
                        courierService: {
                            file: 'order\\blocks\\courierService.html',
                            placeholders: {
                                courierServiceDetails: {
                                    file: 'order\\blocks\\courierServiceDetails.html',
                                    placeholders: {
                                        address: {
                                            file: 'order\\blocks\\address.html',
                                            placeholders: {}
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                info: {
                    file: 'order\\blocks\\info.html',
                    placeholders: {}
                },
                pay: {
                    file: 'order\\blocks\\pay.html',
                    placeholders: {}
                }
            }
        }
    }
};
module.exports = config;
