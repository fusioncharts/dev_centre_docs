---
title: Special Events using Plain JS | FusionCharts
description: This article showcases a draggable column chart with special events.
heading: Special Events using Plain JS
---

FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically drag the column and see modified value as text.

A drag-able column chart is shown below:

{% embed_chartData special-events-example-1.js json %}

The full code of the above sample is given below:

```
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add the chart and theme as dependency
FusionCharts.addDep(Charts);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
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
});// Render
chartInstance.render();
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `fusioncharts` library, etc.

2. Add the chart and theme as dependency. 

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. Set the `message` which gets displayed with the rendering of the chart. 

5. In the above sample:
	* Use an **event listener** for `dataPlotDragEnd` event.
	* Use the `dragPlotDragEnd` event to show a message with the dataset, initial value and final value of the dragged column.

6. Create `<div>` element to display the message.