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
            "plottooltext": "&#60;div id='nameDiv'&#62;$label :&#60;/div&#62;{br}No. Of Visitors : &#60;b&#62;$dataValue&#60;/b&#62; of the total &#60;b&#62;$sum&#60;/b&#62; visitors{br}In Percentage : &#60;b&#62;$percentValue&#60;/b&#62;",
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
