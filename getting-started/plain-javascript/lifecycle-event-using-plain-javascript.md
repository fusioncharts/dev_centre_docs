---
title: Lifecycle Events Using Plain JS | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart.
heading: Lifecycle Events Using Plain JS
---

Events are signals that let you execute specific actions - such as manipulate the DOM, send data to the server, etc., using JavaScript, in response to any interaction/update for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart.

A chart is shown below:

{% embed_chartData lifecycle-event-example-1.js json %}

The full code of the above sample is given below:

```
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Add the chart and the theme as dependencies
FusionCharts.addDep(Charts);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
    type: 'column2d',
    height: '400',
    width: '700',
    dataFormat: 'json',
    renderAt: 'chart-container',
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }],
    },
    "events": {
        "beforeRender": function(e, d) {
            var customDiv = document.createElement('p');
            customDiv.style.padding = "10px";
            customDiv.style.background = "rgb(245, 242, 240)";
            customDiv.style.textAlign = "center";
            customDiv.innerText = 'beforeDataUpdate, dataUpdated';
            customDiv.className = 'inner-container';
            e.data.container.appendChild(customDiv);
        },
        "drawComplete": function(e, d) {
            var p = e.sender.ref.parentNode;
            var ele = p.getElementsByClassName('inner-container');
            ele[0].innerText = ele[0].innerText + ', drawComplete';
        },
        "renderComplete": function(e, d) {
            var p = e.sender.ref.parentNode;
            var ele = p.getElementsByClassName('inner-container');
            ele[0].innerText = ele[0].innerText + ', renderComplete';
        }
    }
});// Render
chartInstance.render();
```

Render the above chart by following the steps given below:

1. Include the necessary libraries (such as the `fusioncharts` library) and components using `import`.

2. Add the chart and the theme as dependencies.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as `json`.
    * Embed the JSON data as the value of `dataSource`.

4. In the above sample:
	* Use the callback handler for `beforeDataUpdate` event.
	* Use the callback handler for `dataUpdated` event.
	* Use the callback handler for `drawComplete` event.
	* Use the callback handler for `renderComplete` event.

5. Create a `<div>` element to display the message.