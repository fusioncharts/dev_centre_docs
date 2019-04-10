{
    type: 'realtimecolumn',
    renderAt: 'chart-container',
    width: '600',
    height: '210',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Bakersfield Central",
            "subCaption": "Footfalls",
            "showrealtimevalue": "1",
            "dataStreamURL": "/dummy-data.php",
            "paletteColors": "#008ee4,#9b59b6",
            "borderAlpha": "0",
            "yaxismaxvalue": "20",
            "numdisplaysets": "10",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "0",
            "canvasBorderAlpha": "20",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "bgAlpha": "0",
            "showValues": "0",
            "numbersuffix": " Customers",
            "showlabels": "1",
            "animation": "0",
            "showRealTimeValue": "0"
        },
        "categories": [{
            "category": [{

            }]
        }],
        "dataset": [{
            "seriesname": "Footfall",
            "alpha": "100"
        }]
    },
    events: {
        'beforeRender': function(evt, arg) {
            var controllers = document.createElement('div');
            controllers.setAttribute('id', 'tableCont-2');
            controllers.innerHTML = "<div id='errorView' style='width: 475px;border: 2px solid #666666;background-color:#9b545b;  color:#ffffff;display:none;padding: 3px;margin-left: 60px;margin-top: 10px;'></div>";
            //Display container div and write table
            arg.container.parentNode.insertBefore(controllers, arg.container.nextSibling);

        },
        'RealtimeUpdateError': function(event, parameter) {
            var dispBox = document.getElementById("errorView");
            dispBox.style.display = "block";
            dispBox.innerHTML = "Problem occurred while updating real-time data. The error status code is" + parameter.httpStatus;
        }
    }
}
