{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fusion",
            //Hiding plot borders
            "showPlotBorder": "0"
        },
        "data": [{
            "label": "Q1",
            "value": "1950000"
        }, {
            "label": "Q2",
            "value": "1450000"
        }, {
            "label": "Q3",
            "value": "1730000"
        }, {
            "label": "Q4",
            "value": "2120000"
        }]
    },
    "events": {
        "beforeRender": function(e, a) {
            var appendBox = document.createElement("div"),
                revenueChart = e.sender;

            appendBox.innerHTML = '<input type="checkbox" id="dataplot-showBorder" checked="true">Show border for data plot (columns)?</input>';
            a.container.appendChild(appendBox);

            var showBorderCheckBox = document.getElementById('dataplot-showBorder');

            //Set event listener for radio button
            if (showBorderCheckBox.addEventListener) {
                showBorderCheckBox.addEventListener("click", changeBorder);
            }

            function changeBorder(evt, obj) {
                //Set gradient fill for chart using usePlotGradientColor attribute
                (showBorderCheckBox.checked) ? revenueChart.setChartAttribute('showPlotBorder', 1) : revenueChart.setChartAttribute('showPlotBorder', 0);
            };
        }
    }
}
