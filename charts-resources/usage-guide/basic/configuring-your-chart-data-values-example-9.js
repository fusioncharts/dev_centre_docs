{
    type: 'pie2d',
    renderAt: 'chart-container',
    
    width: '450',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fint",
            "caption": "Age group of website customers",
            "subCaption": "Last year",
            "numberPrefix": "$",
            //Changing border color for values
            "valueBorderColor": "#666666",
            //Changing border alpha
            "valueBorderAlpha": "100",
            //Changing border padding
            "valueBorderPadding": "5",
            //Changing border radius to enable rounded borders
            "valueBorderRadius": "6",
            //Changing border thickness
            "valueBorderThickness": "0.5",
            //Setting border style to dashed
            "valueBorderDashed": "1",
            //Setting border dash length
            "valueBorderDashLen": "4",
            //Setting gap between dash
            "valueBorderDashGap": "2",
            "valueFontSize": "11"

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
