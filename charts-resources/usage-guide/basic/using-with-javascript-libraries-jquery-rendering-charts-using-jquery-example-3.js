{
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Visitors by Age Group",
            "subCaption": "Last year",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "use3DLighting": "0",
            "showShadow": "0",
            "enableSmartLabels": "0",
            "startingAngle": "0",
            "showPercentValues": "1",
            "showPercentInTooltip": "0",
            "decimals": "1",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
            "showHoverEffect": "1",
            "legendBgColor": "#ffffff",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666",
            "useDataPlotColorForLabels": "true"
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

            var btnClone = $('<input/>')
                .attr({
                    'id': 'clone-button',
                    'type': 'button',
                    'value': 'Prepend clone'
                })
                .click(function() {
                    appendClone();
                    btnClone.remove();
                });

            container.parentNode.insertBefore(btnClone[0], container.nextSibling);

            var appendClone = function() {
                // Clone the chart to create a column chart representation of the same data
                $(container).cloneFusionCharts(function() {
                    // Append the cloned chart to the same chart container
                    $(container).prependFusionCharts(this[0]);
                }, {
                    'id': 'chart-clone-2',
                    'type': 'column2d',
                    'events': {}
                });
            };
        }
    }
}
