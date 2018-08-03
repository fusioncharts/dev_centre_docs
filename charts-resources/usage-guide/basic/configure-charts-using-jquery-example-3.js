{
    type: 'column2d',
    renderAt: 'chart-container',
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
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "legendItemFontSize": '10',
            "legendItemFontColor": '#666666',
            "theme": "fusion",
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
        'beforeRender': function(event, args) {
            var container = args.container;

            var btnTheme = $('<input/>')
                .attr({
                    'id': 'clone-button',
                    'type': 'button',
                    'value': 'Apply theme'
                })
                .click(function() {
                    applyTheme();
                    btnTheme.remove();
                });

            container.parentNode.insertBefore(btnTheme[0], container.nextSibling);

            var applyTheme = function() {
                // Use `FusionCharts` jQuery selector and apply theme to the chart
                $(':FusionCharts').attrFusionCharts({
                    "theme": "fusion"
                });
            };
        }
    }
}
