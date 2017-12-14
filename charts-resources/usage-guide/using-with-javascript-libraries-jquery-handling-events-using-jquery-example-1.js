{
    type: 'column2d',
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
            "legendBorderAlpha": '0',
            "legendShadow": '0',
            "theme": "fint",
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
