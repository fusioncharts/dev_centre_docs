{
    type: 'logmscolumn2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Daily Power Failure",
            "subCaption": "Last Week",
            "xAxisName": "Day",
            "yAxisName": "Duration",
            "showValues": "0",
            "formatNumberScale": "1",
            //60 minutes = 1 hour, 60 seconds = 1 minute
            "numberScaleValue": "60,60",
            //Converts seconds to Minutes, Hours
            "numberScaleUnit": " Min, Hrs",
            //Since all data is provided in seconds
            "defaultNumberScale": " Seconds",
            "scaleRecursively": "1",
            //Recurse for all provided units/values
            "maxScaleRecursion": "-1",
            //Character used to separate scale
            "scaleSeparator": " ",
            //Inverse Y axis
            "invertYAxis": "1",

            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Monday"
            }, {
                "label": "Tuesday"
            }, {
                "label": "Wednesday"
            }, {
                "label": "Thursday"
            }, {
                "label": "Friday"
            }, {
                "label": "Saturday"
            }, {
                "label": "Sunday"
            }]
        }],
        "dataset": [{
            "data": [{
                "value": "3540"
            }, {
                "value": "2257"
            }, {
                "value": "3145"
            }, {
                "value": "6643"
            }, {
                "value": "4520"
            }, {
                "value": "30"
            }, {
                "value": "465"
            }]
        }]
    }
}
