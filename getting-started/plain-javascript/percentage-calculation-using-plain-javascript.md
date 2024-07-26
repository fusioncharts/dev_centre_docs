---
title: Percentage Calculation | FusionCharts
description: Know how to Percentage Calculation using plain JavaScript with FusionCharts. Take your data visualization capabilities a notch up seamlessly with us.
heading: Percentage Calculation
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, percentage calculation, and events.

This article focuses on how you can calculate the percentage of a data plot with respect to all the data plots.

## A chart configured to calculate the percent, is shown below:

{% embed_chartData percentage-calculation-example-1.js json %}

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

            var message = "Hover on the plot to see the percentage along with the label";
            var customDiv = document.createElement('p');
            customDiv.innerText = message;
            customDiv.style.padding = "10px";
            customDiv.style.background = "rgb(245, 242, 240)";
            customDiv.style.textAlign = "center";
            e.data.container.appendChild(customDiv);

            var total = 0;
            e.sender.args.dataSource.data.forEach(function(dataObj) {
                total += parseFloat(dataObj.value);
            });


            e.sender.addEventListener("dataplotrollover", function(rollEvent, rollData) {
                var value = (rollData.value / total * 100).toFixed(2);
                customDiv.innerHTML = '<b>' + rollData.categoryLabel + '</b> is <b>' + value + '%</b> of top 8 oil reserve countries';
            });

            e.sender.addEventListener("dataplotrollout", function(rollEvent, rollData) {
                customDiv.innerText = message;
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
	* `dataplotrollover` event shows the percentage of the hovered plot on the page.
	* `dataplotrollout` event resets the default message.
	* `renderComplete` event calculates and stores the total value of the chart data.

6. `addEventListener` is used to update the above listed events.
