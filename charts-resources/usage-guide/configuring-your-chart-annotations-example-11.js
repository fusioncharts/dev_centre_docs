{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenue by store managers",
            "subCaption": "Last quarter",
            "xAxisName": "Managers",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fint",
            "LabelPadding": "50"
        },
        "annotations": {
            "groups": [{
                "id": "user-images",
                "items": [{
                    "id": "jennifer-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/round-1.png",
                    "x": "$xaxis.label.0.x - 24",
                    "y": "$xaxis.label.0.y - 48"
                }, {
                    "id": "tom-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/round-3.png",
                    "x": "$xaxis.label.1.x - 24",
                    "y": "$xaxis.label.1.y - 48"
                }, {
                    "id": "Milton-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/round-4.png",
                    "x": "$xaxis.label.2.x - 24",
                    "y": "$xaxis.label.2.y - 48"
                }, {
                    "id": "Brian-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/round-5.png",
                    "x": "$xaxis.label.3.x - 24",
                    "y": "$xaxis.label.3.y - 48"
                }, {
                    "id": "Lynda-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/round-2.png",
                    "x": "$xaxis.label.4.x - 24",
                    "y": "$xaxis.label.4.y - 48"
                }]
            }]
        },
        "data": [{
            "label": "Jennifer",
            "value": "92000"
        }, {
            "label": "Tom",
            "value": "87000"
        }, {
            "label": "Milton",
            "value": "83000"
        }, {
            "label": "Brian",
            "value": "66000"
        }, {
            "label": "Lynda",
            "value": "58000"
        }]
    }
}
