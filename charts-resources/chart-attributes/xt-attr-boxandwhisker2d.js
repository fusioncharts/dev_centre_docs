{
    type: 'boxandwhisker2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Distribution of annual salaries",
            "subcaption": "By Gender",
            "xAxisName": "Pay Grades",
            "YAxisName": "Salaries (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00",
            "bgColor": "#ffffff",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "showAlternateHGridColor": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendPosition": "right",
            "showValues": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        "categories": [{
            "category": [{
                "label": "Grade 1"
            }, {
                "label": "Grade 2"
            }, {
                "label": "Grade 3"
            }]
        }],
        "dataset": [{
            "seriesname": "Male",
            "lowerboxcolor": "#0075c2",
            "upperboxcolor": "#1aaf5d",
            "data": [{
                "value": "2400,2000,2500,2800,3500,4000, 3700, 3750, 3880, 5000,5500,7500,8000,8200, 8400, 8500, 8550, 8800, 8700, 9000, 14000"
            }, {
                "value": "7500,9000,12000,13000,14000,16500,17000, 18000, 19000, 19500"
            }, {
                "value": "15000,19000,25000,32000,50000,65000"
            }]
        }, {
            "seriesname": "Female",
            "lowerboxcolor": "#f45b00",
            "upperboxcolor": "#f2c500",
            "data": [{
                "value": "1900,2100,2300,2350,2400,2550,3000,3500,4000, 6000, 6500, 9000"
            }, {
                "value": "7000,8000,8300,8700,9500,11000,15000, 17000, 21000"
            }, {
                "value": "24000,32000,35000,37000,39000, 58000"
            }]
        }]
    }
}
