{
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Visitor Composition by Age Group",
            "subCaption": "Last year",
            "enableSmartLabels": "0",
            "startingAngle": "0",
            "showPercentValues": "1",
            "showPercentInTooltip": "0",
            "decimals": "1",
            //Dynamic tool-tip using HTML and macro variables
            "plottooltext": "<div id='nameDiv'>$label :</div>{br}No. Of Visitors : <b>$dataValue</b> of the total <b>$sum</b> visitors{br}In Percentage : <b>$percentValue</b>",
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
