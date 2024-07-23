---
title: Lifecycle Events using Plain JS | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart.
heading: Lifecycle Events using Plain JS
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart.

A chart is shown below:

{% embed_chartData lifecycle-event-example-1.js json %}

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

## The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `fusioncharts` library, etc.

2. Add the chart and theme as dependency. 

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. In the above sample:
	* Use the callback handler for `beforeDataUpdate` event.
	* Use the callback handler for `dataUpdated` event.
	* Use the callback handler for `drawComplete` event.
	* Use the callback handler for `renderComplete` event.

5. Create `<div>` element to display the message.
