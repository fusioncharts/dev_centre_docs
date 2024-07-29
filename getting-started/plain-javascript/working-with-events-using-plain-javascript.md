---
title: Bind Event Listener | FusionCharts
description: Discover how to bind event listeners & execute specific actions using plain JavaScript for various interactions & updates on a chart. Click to learn more!
heading: Bind Event Listener
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

## Take a look at the Column 2D chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one data plot and see how the text (the data label and the value) rendered below the chart changes.

For example, if you roll the mouse pointer over the __Canada__ data plot, the following text is displayed below the chart:

**You are currently hovering over Canada whose value is 180**

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
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
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
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var controllers = document.createElement('div');
            controllers.innerHTML = "Hover on the plot to see the value along with the label";
            controllers.setAttribute('id', 'indicatorDiv');
            controllers.style.padding = "10px";
            controllers.style.background = "rgb(245, 242, 240)";
            controllers.style.textAlign = "center";
            controllers.style.fontFamily = ""
            args.container.appendChild(controllers);
        },

        "dataplotRollOver": function(evt, data) {
            var txt = "You are currently hovering over " + data.categoryLabel + " whose value is " + data.value;
               document.getElementById("indicatorDiv").innerHTML = txt;

        },
        "dataplotRollOut": function(evt, data) {
            document.getElementById("indicatorDiv").innerHTML = "Hover on the plot to see the value along with the label";
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

4. In the above sample:
    * Use the `dataplotRollOver` event which is triggered when the mouse pointer is rolled over a data plot.
    * Use the `dataplotRollOut` event which is triggered when the mouse pointer is rolled out of the data plot.

5. Create `<div>` element to display the message.
