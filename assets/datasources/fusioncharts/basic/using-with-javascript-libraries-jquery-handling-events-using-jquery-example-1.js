{
    type: 'column2d',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Visitors by Age Group",
            "subCaption": "Last year",
            "enableSmartLabels": "0",
            "startingAngle": "0",
            "showPercentValues": "1",
            "showPercentInTooltip": "0",
            "decimals": "1",
            "showHoverEffect": "1",
            "theme": "fusion",
            "legendItemFontSize": '10',
            "legendItemFontColor": '#666666',
            "useDataPlotColorForLabels": true
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
    },
    events: {
        'beforeRender': function(evt, args) {
            $(args.container).bind('fusionchartsdataplotclick', function(e, a) {
                $('#messageView').text("You selected " + a.toolText);
            });
        }
    }
}
