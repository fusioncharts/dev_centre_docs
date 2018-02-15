{
    type: 'msspline',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "subcaptionFontBold": "0",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitor",
            "showValues": "0",
            "paletteColors": "#0075c2,#1aaf5d",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showShadow": "0",
            "showAlternateHGridColor": "0",
            "showCanvasBorder": "0",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "canvasBgColor": "#ffffff",
            "logoURL": "http://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "exportEnabled": "1",
            "exportMode": "server"
        },
        "categories": [{
            "category": [{
                    "label": "Mon"
                },
                {
                    "label": "Tue"
                },
                {
                    "label": "Wed"
                },
                {
                    "vline": "true",
                    "lineposition": "0",
                    "color": "#6baa01",
                    "labelHAlign": "right",
                    "labelPosition": "0",
                    "label": "National holiday"
                },
                {
                    "label": "Thu"
                },
                {
                    "label": "Fri"
                },
                {
                    "label": "Sat"
                },
                {
                    "label": "Sun"
                }
            ]
        }],

        "dataset": [{
                "seriesname": "Bakersfield Central",
                "data": [{
                        "value": "15123"
                    },
                    {
                        "value": "14233"
                    },
                    {
                        "value": "25507"
                    },
                    {
                        "value": "9110"
                    },
                    {
                        "value": "15529"
                    },
                    {
                        "value": "20803"
                    },
                    {
                        "value": "19202"
                    }
                ]
            },
            {
                "seriesname": "Los Angeles Topanga",
                "data": [{
                        "value": "13400"
                    },
                    {
                        "value": "12800"
                    },
                    {
                        "value": "22800"
                    },
                    {
                        "value": "12400"
                    },
                    {
                        "value": "15800"
                    },
                    {
                        "value": "19800"
                    },
                    {
                        "value": "21800"
                    }
                ]
            }
        ]
    }
}