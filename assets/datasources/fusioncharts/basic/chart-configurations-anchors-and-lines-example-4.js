{
    type: 'line',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top Employees",
            "subcaption": "Last six months",
            "xAxisName": "Month",
            "yAxisName": "Rating",
            "yaxisminvalue": "0",
            "yaxismaxvalue": "10",
            "yAxisValuesPadding": "15",
            "valuePosition": "below",
            "numDivlines": "5",
            "lineAlpha": "100",
            // Anchors
            "anchorAlpha": "100",
            "anchorImageAlpha": "100",
            "anchorImageScale": "90",
            //Theme
            "theme": "fusion"
        },
        "data": [{
            "label": "July",
            "value": "7.8",
            "displayValue": "John, 7.8",
            "tooltext": "July : John, 7.8",
            "anchorImageUrl": "https://static.fusioncharts.com/sampledata/userimages/1.png"

        }, {
            "label": "August",
            "value": "6.9",
            "displayValue": "Mac, 6.9",
            "tooltext": "August : Mac, 6.9",
            "anchorImageUrl": "https://static.fusioncharts.com/sampledata/userimages/2.png"
        }, {
            "label": "September",
            "value": "8",
            "displayValue": "Phillips, 8",
            "tooltext": "September : Phillips, 8",
            "anchorImageUrl": "https://static.fusioncharts.com/sampledata/userimages/3.png"
        }, {
            "label": "October",
            "value": "7.5",
            "displayValue": "Terrin, 7.5",
            "tooltext": "October : Terrin, 7.5",
            "anchorImageUrl": "https://static.fusioncharts.com/sampledata/userimages/4.png"
        }, {
            "label": "November",
            "value": "7.7",
            "displayValue": "Tom, 7.7",
            "tooltext": "November : Tom, 7.7",
            "anchorImageUrl": "https://static.fusioncharts.com/sampledata/userimages/5.png"
        }, {
            "label": "December",
            "value": "6.7",
            "displayValue": "Martha, 6.7",
            "tooltext": "December : Martha, 6.7",
            "anchorImageUrl": "https://static.fusioncharts.com/sampledata/userimages/6.png"
        }]
    }
}
