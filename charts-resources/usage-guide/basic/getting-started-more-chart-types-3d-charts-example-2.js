{
    type: 'pie3d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Age profile of website visitors",
            "subCaption": "Last Year",
            "startingAngle": "120",
            "showLabels": "0",
            "showLegend": "1",
            "enableMultiSlicing": "0",
            "slicingDistance": "15",
            //To show the values in percentage
            "showPercentValues": "1",
            "showPercentInTooltip": "0",
            "plotTooltext": "Age group : $label<br>Total visit : $datavalue",
            "theme": "fusion"
        },
        "data": [{
            "label": "Teenage",
            "value": "1250400"
        }, {
            "label": "Adult",
            "value": "1463300"
        }, {
            "label": "Mid-age",
            "value": "1050700"
        }, {
            "label": "Senior",
            "value": "491000"
        }]
    }
}
