{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "theme": "fusion",
            "numberPrefix": "$",
            //Removing default gradient fill from columns
            "usePlotGradientColor": "1"
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
        beforeRender: function(e, a) {
            var appendBox = document.createElement("div"),
                revenueChart = e.sender;
            appendBox.innerHTML = '<input type="checkbox" id="dataplot-useGradient" checked="true">Use gradient fill for columns?</input>';
            a.container.appendChild(appendBox);

            var gradientCheckBox = document.getElementById('dataplot-useGradient');

            //Set event listener for radio button
            if (gradientCheckBox.addEventListener) {
                gradientCheckBox.addEventListener("click", changeGradient);
            }

            function changeGradient(evt, obj) {
                //Set gradient fill for chart using usePlotGradientColor attribute
                (gradientCheckBox.checked) ? revenueChart.setChartAttribute('usePlotGradientColor', 1) : revenueChart.setChartAttribute('usePlotGradientColor', 0);
            };
        }
    }
}
