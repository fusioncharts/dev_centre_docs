{
    type: 'angulargauge',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Estimated purchase conversion rate",
            "subcaption": "food.hsm.com vs cloth.hsm.com",
            "editMode": "1",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "theme": "fusion",
            "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
            "gaugeFillRatio": "15",
            "chartBottomMargin": "25",
            "valueFontSize": "18",
            "valueFontColor": "#ffffff"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }]
        },
        "dials": {
            "dial": [{
                "value": "70",
                "showValue": "1",
                "valueX": "250",
                "valueY": "240",
                "bgColor": "#0075c2",
                "tooltext": "food.hs.com : $value",
                "rearExtension": "15"
            }, {
                "value": "50",
                "showValue": "1",
                "valueX": "150",
                "valueY": "240",
                "bgColor": "#1aaf5d",
                "tooltext": "cloth.hsm.com : $value",
                "rearExtension": "15"
            }]
        }
    }
}
