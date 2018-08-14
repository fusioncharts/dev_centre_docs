{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '800',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Power Backup Used",
            "subcaption": "Last Week At Bakersfield Central",
            "xaxisname": "Time",
            "yaxisname": "Duration",
            "yAxisMaxValue": "100",
            "showValues": "1",
            "formatNumberScale": "1",
            //60 minutes = 1 hour, 60 seconds = 1 minute
            "numberScaleValue": "60",
            //Converts seconds to Minutes, Hours
            "numberScaleUnit": " Min",
            //Since all data is provided in seconds
            "defaultNumberScale": " Seconds",
            "scaleRecursively": "1",
            //Recurse for all provided units/values
            "maxScaleRecursion": "-1",
            //Character used to separate scale
            "scaleSeparator": " ",
            //Theme 
            "theme": "fusion"
        },
        "data": [{
            "label": "Sunday",
            "value": "7242"
        }, {
            "label": "Monday",
            "value": "5343"
        }, {
            "label": "Tuesday",
            "value": "4543"
        }, {
            "label": "Wednesday",
            "value": "6743"
        }, {
            "label": "Thrusday",
            "value": "5543"
        }, {
            "label": "Friday",
            "value": "8334"
        }, {
            "label": "Saturday",
            "value": "1543"
        }]
    }
}
