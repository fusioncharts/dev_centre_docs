{
    type: 'dragcolumn2d',
    height: '400',
    width: '700',
    dataFormat: 'json',
    renderAt: 'chart-container',
    dataSource: {
        "chart": {
            "caption": "Android and iOS Devices Sales Projections",
            "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
            "numberPrefix": "$",
            "numberSuffix": "M",
            "yaxismaxvalue": "200",
            "theme": "fusion",
            "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
        },
        "categories": [{
            "category": [{
                "label": "2014",
                "fontItalic": "0"
            }, {
                "label": "2015",
                "fontItalic": "0"
            }, {
                "label": "2016",
                "fontItalic": "0"
            }, {
                "label": "2017 (Projected)"
            }, {
                "label": "2018 (Projected)"
            }]
        }],
        "dataset": [{
            "seriesname": "Android Devices",
            "data": [{
                "value": "73",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "80",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "97",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "110",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "180",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
        }, {
            "seriesname": "iOS Devices",
            "data": [{
                "value": "63.2",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "68",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "82",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "99",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "150",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
        }]
    },
    "events": {
        "beforeRender": function(e, d) {
            var message = "Drag any column for years 2017 or 2018 to see updated value along with the label";
            var customDiv = document.createElement('p');
            customDiv.innerText = message;
            customDiv.style.padding = "10px";
            customDiv.style.background = "rgb(245, 242, 240)";
            customDiv.style.textAlign = "center";
            customDiv.style.fontFamily = ""
            e.data.container.appendChild(customDiv);

            e.sender.addEventListener("dataplotdragend", function(event, args) {
                var prev = FusionCharts.formatNumber(args.startValue.toFixed(2));
                var curr = FusionCharts.formatNumber(args.endValue.toFixed(2));
                var label = event.sender.args.dataSource.categories[0].category[args.dataIndex].label;
                var eventMessage = '<b>' + args.datasetName + '</b> dataset, its previous value was <b>' + prev + '</b> and its current value is <b>' + curr + '</b> for year ' +
                    '<b>' + label + '</b>';
                customDiv.innerHTML = eventMessage;
            });
        }
    }
}