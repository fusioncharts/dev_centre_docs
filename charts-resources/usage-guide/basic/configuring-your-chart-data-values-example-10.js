{
    type: 'pie2d',
    renderAt: 'chart-container',
    
    width: '450',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Age group of website customers",
            "subCaption": "Last year",
            //Data value background properties 
            "valueBgColor": "#99ccff",
            "valueBgAlpha": "30",
            "valueBgHoverAlpha": "60",
            "valueFontSize": "13",
            //Theme
            "theme": "fusion"
        },
        "data": [{
            "label": "Teenage",
            "value": "1250400"
        }, {
            "label": "Adult",
            "value": "1463300"
        }, {
            "label": "Middle-age",
            "value": "1050700"
        }, {
            "label": "Senior Citizen",
            "value": "491000"
        }]
    }
}
