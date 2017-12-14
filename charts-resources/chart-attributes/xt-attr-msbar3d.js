{
    type: 'msbar3d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2,#1aaf5d",
            "bgColor": "#ffffff",
            "legendBorderAlpha": "0",
            "legendBgAlpha": "0",
            "legendShadow": "0",
            "placevaluesInside": "1",
            "valueFontColor": "#ffffff",
            "alignCaptionWithCanvas": "1",
            "showHoverEffect": "1",
            "canvasBgColor": "#ffffff",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "divlineColor": "#999999",
            "divLineDashed": "1",
            "divLineDashLen": "1",
            "showAlternateHGridColor": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        "categories": [{
            "category": [{
                "label": "Bakersfield Central"
            }, {
                "label": "Garden Groove harbour"
            }, {
                "label": "Los Angeles Topanga"
            }, {
                "label": "Compton-Rancho Dom"
            }, {
                "label": "Daly City Serramonte"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "17000"
            }, {
                "value": "19500"
            }, {
                "value": "12500"
            }, {
                "value": "14500"
            }, {
                "value": "17500"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "19500"
            }, {
                "value": "11500"
            }]
        }]
    }
}
