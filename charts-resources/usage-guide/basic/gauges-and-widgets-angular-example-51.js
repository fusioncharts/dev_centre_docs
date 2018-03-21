{
    var cSatScoreChart = new FusionCharts({
                type: 'angulargauge',
                renderAt: 'chart-container',
                width: '400',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    "chart": {
                        "caption": "Customer Satisfaction Score",
                        "subcaption": "Last week",
                        "lowerLimit": "0",
                        "upperLimit": "100",
                        "showHoverEffect": "1",
                        "gaugeFillMix": "{dark-40},{light-40},{dark-20}",
                        "theme": "fint"
                    },
                    "colorRange": {
                        "color": [{
                                "minValue": "0",
                                "maxValue": "50",
                                "code": "#e44a00"
                            },
                            {
                                "minValue": "50",
                                "maxValue": "75",
                                "code": "#f8bd19"
                            },
                            {
                                "minValue": "75",
                                "maxValue": "100",
                                "code": "#6baa01"
                            }
                        ]
                    },
                    "dials": {
                        "dial": [{
                            "value": "67",
                            "bgHoverColor": "#cccccc",
                            "bgHoverAlpha": "80",
                            "BorderHoverColor": "#999999",
                            "BorderHoverAlpha": "80",
                            "BorderHoverThickness": "2",
                            "topWidth": "2",
                            "rearExtension": "15"
                        }]
                    }
                }
            }