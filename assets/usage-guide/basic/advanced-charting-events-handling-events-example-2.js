{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue for FY2013-2014",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Quarter",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Q1",
            "value": "420000"
        }, {
            "label": "Q2",
            "value": "810000"
        }, {
            "label": "Q3",
            "value": "720000"
        }, {
            "label": "Q4",
            "value": "550000"
        }]
    },
    events: {
        'renderComplete': function(eventObj, eventArgs) {
            console.log(eventObj.eventType +
                " was raised by the chart whose ID is " +
                eventObj.sender.id);
        }
    }
}
