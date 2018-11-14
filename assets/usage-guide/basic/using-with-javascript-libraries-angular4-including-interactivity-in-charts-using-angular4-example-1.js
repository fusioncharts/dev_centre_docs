{
    type: 'pie2d',
    renderAt: 'chart-container1',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store Categories",
            "subCaption": "Harry's SuperMart",
            "theme": "fusion",
            "showValues": "0"
        },
        "data": [{
            "label": "General",
            "value": "1060000"
        }, {
            "label": "Retail",
            "value": "1990000"
        }]
    },
    "events": {
        "beforeRender": function(evt, data) {
            var testRender = document.createElement('div');
            testRender.innerHTML = '<div id="chart-container1"></div><div id="chart-container2"></div>';
            data.container.appendChild(testRender);
            var storeCatColChart5 = new FusionCharts({
                        type: 'column2d',
                        renderAt: 'chart-container2',
                        width: '400',
                        height: '300',
                        dataFormat: 'json',
                        dataSource: {
                            "chart": {
                                "caption": "Store Categories",
                                "subCaption": "Harry's SuperMart",
                                "theme": "fusion"
                            },
                            "data": [{
                                "label": "Bakersfield Central",
                                "value": "880000"
                            }, {
                                "label": "Garden Groove Harbour",
                                "value": "730000"
                            }, {
                                "label": "Los Angeles Topanga",
                                "value": "590000"
                            }, {
                                "label": "Compton-Rancho Dom",
                                "value": "520000"
                            }, {
                                "label": "Daly City Serramonte",
                                "value": "330000"
                            }]
                        }
                    }).render();
        },
        "slicingStart": function (evt, data) {                
            if (data.dataIndex === 0) {
                if (!data.slicedState) {
                    var storeCatColChart1 = new FusionCharts({
                        type: 'column2d',
                        renderAt: 'chart-container2',
                        width: '400',
                        height: '300',
                        dataFormat: 'json',
                        dataSource: {
                            "chart": {
                                "caption": "Store Categories",
                                "subCaption": "Harry's SuperMart",
                                "theme": "fusion"
                            },
                            "data": [{
                                "label": "Garden Groove Harbour",
                                "value": "730000"
                            }, {
                                "label": "Daly City Serramonte",
                                "value": "330000"
                            }]
                        }
                    }).render();
                } else {
                    var storeCatColChart2 = new FusionCharts({
                        type: 'column2d',
                        renderAt: 'chart-container2',
                        width: '400',
                        height: '300',
                        dataFormat: 'json',
                        dataSource: {
                            "chart": {
                                "caption": "Store Categories",
                                "subCaption": "Harry's SuperMart",
                                "theme": "fusion"
                            },
                            "data": [{
                                "label": "Bakersfield Central",
                                "value": "880000"
                            }, {
                                "label": "Garden Groove Harbour",
                                "value": "730000"
                            }, {
                                "label": "Los Angeles Topanga",
                                "value": "590000"
                            }, {
                                "label": "Compton-Rancho Dom",
                                "value": "520000"
                            }, {
                                "label": "Daly City Serramonte",
                                "value": "330000"
                            }]
                        }
                    }).render();
                }
                } else {
                    if (!data.slicedState) {
                        var storeCatColChart3 = new FusionCharts({
                            type: 'column2d',
                            renderAt: 'chart-container2',
                            width: '400',
                            height: '300',
                            dataFormat: 'json',
                            dataSource: {
                                "chart": {
                                    "caption": "Store Categories",
                                        "subCaption": "Harry's SuperMart",
                                        "theme": "fusion"
                                },
                                    "data": [{
                                    "label": "Bakersfield Central",
                                        "value": "880000"
                                }, {
                                    "label": "Los Angeles Topanga",
                                        "value": "590000"
                                }, {
                                    "label": "Compton-Rancho Dom",
                                        "value": "520000"
                                }]
                            }
                        }).render();
                    } else {
                        var storeCatColChart4 = new FusionCharts({
                            type: 'column2d',
                            renderAt: 'chart-container2',
                            width: '400',
                            height: '300',
                            dataFormat: 'json',
                            dataSource: {
                                "chart": {
                                    "caption": "Store Categories",
                                        "subCaption": "Harry's SuperMart",
                                        "theme": "fusion"
                                },
                                    "data": [{
                                    "label": "Bakersfield Central",
                                        "value": "880000"
                                }, {
                                    "label": "Garden Groove Harbour",
                                        "value": "730000"
                                }, {
                                    "label": "Los Angeles Topanga",
                                        "value": "590000"
                                }, {
                                    "label": "Compton-Rancho Dom",
                                        "value": "520000"
                                }, {
                                    "label": "Daly City Serramonte",
                                        "value": "330000"
                                }]
                            }
                        }).render();
                    }
                }
            }
        }
    }