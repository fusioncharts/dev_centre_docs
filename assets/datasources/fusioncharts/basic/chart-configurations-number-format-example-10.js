{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Cart Checkout to Payment Time",
            "xAxisName": "Time",
            "yAxisName": "Duration",
            "yAxisMaxValue": "90",
            "labelDisplay": "rotate",
            "slantlabels": "1",
            "showValues": "1",

            //Attributes to configure scale                    
            "formatNumberScale": "1",
            //Set scale to 60 (60 seconds: 1 minute)
            "numberScaleValue": "60",
            //Set the scale unit to minutes
            "numberScaleUnit": " mins",
            //Since all data is provided in seconds, default scale is seconds
            "defaultNumberScale": " secs",
            //Theme
            "theme": "fusion"
        },
        "data": [{
            "label": "00:00",
            "value": "35"
        }, {
            "label": "02:00",
            "value": "45"
        }, {
            "label": "04:00",
            "value": "65"
        }, {
            "label": "06:00",
            "value": "49"
        }, {
            "label": "08:00",
            "value": "24"
        }, {
            "label": "10:00",
            "value": "40"
        }, {
            "label": "12:00",
            "value": "67"
        }, {
            "label": "14:00",
            "value": "72"
        }, {
            "label": "16:00",
            "value": "55"
        }, {
            "label": "18:00",
            "value": "62"
        }, {
            "label": "20:00",
            "value": "48"
        }, {
            "label": "22:00",
            "value": "32"
        }, {
            "label": "23:59",
            "value": "30"
        }]
    }
}
