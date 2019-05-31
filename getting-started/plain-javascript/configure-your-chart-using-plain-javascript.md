---
title: Configuring your Chart using Plain JS | FusionCharts
description: This article focuses on different type of configurations possible using the Plain JS.
heading: Configuring your Chart using Plain JS
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can:

- [Update Chart Data](/getting-started/plain-javascript/configure-your-chart-using-plain-javascript#update-chart-data)

- [Update Chart Attributes](/getting-started/plain-javascript/configure-your-chart-using-plain-javascript#update-chart-attributes)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chartData configure-charts-using-react-example-1.js json %}

The full code of the above sample is given below:

```javascript
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Add the chart and theme as dependency
FusionCharts.addDep(Charts);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
  type: "column2d",
  renderAt: "chart-container",
  width: "700",
  height: "400",
  dataFormat: "json",
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    },
    // Chart Data
    data: [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ]
  },
  events: {
    beforeRender: function(evt, args) {
      var controls = document.createElement("div"),
        chartRef = evt.sender;

      chartRef.getRandomNumber = function() {
        var max = 300,
          min = 50;
        return Math.round((max - min) * Math.random() + min);
      };
      updateData = function() {
        //clones data
        var data = Object.assign({}, chartRef.getJSONData());
        data.data[2].label = "Canada";
        data.data[2].value = chartRef.getRandomNumber();

        data.data[3].label = "Iran";
        data.data[3].value = chartRef.getRandomNumber();
        chartRef.setJSONData(data);
      };
      controls.innerHTML =
        '<button style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;" onClick="updateData()" >Update chart data</button>';
      controls.style.cssText = "text-align: center; width: 100%;";
      args.container.appendChild(controls);
    }
  }
}); // Render
chartInstance.render();
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `fusioncharts` library, etc.

2. Add the chart and theme as dependency.

3. Create an instance of the chart with chart options. In the JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height of the chart in pixels.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.

4. Generate random data to update the chart using **Math.random()**.

5. Add an event handler to update chart button.

6. Add the `updateData()` function to randomly update the value of the chart when the button is clicked.

7. Add the `innerHTML` to create the `button` inside the `<div>`.

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chartData configure-charts-using-react-example-2.js json %}

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
        // Chart Configuration
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
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
            var chartRef = evt.sender;

            chartRef.originalData = JSON.parse(JSON.stringify(chartRef.getJSONData()));

            chartRef.changeBackground = function() {
                var data = chartRef.getJSONData(); //copy of object
                data.chart.bgColor = '#efefef';
                chartRef.setJSONData(data);
            };

            // Resets all the chart data to it's initial verison
            chartRef.resetAttr = function() {
                chartRef.setJSONData(chartRef.originalData);
            };

            // Makes the caption text left aligned
            chartRef.makeCaptionLeft = function() {
                var data = chartRef.getJSONData();
                data.chart.captionAlignment = 'left';
                chartRef.setJSONData(data);
            };


            var btnContainer = document.createElement('div'),
                str;

            // buttons
            str = '<button id="bgColorBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Change Chart Background</button>&nbsp&nbsp';
            str += '<button id="captionAlignBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Make Caption Text Left-Aligned</button>&nbsp&nbsp';
            str += '<button id="resetAttrBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Reset Attributes</button>';

            btnContainer.style.cssText = "text-align: center; width: 100%; margin: 10px;";
            btnContainer.innerHTML = str;
            //button attachment
            args.container.parentNode.insertBefore(btnContainer, args.container.nextSibling);
        },

        "renderComplete": function(evt, args) {
            var chartRef = evt.sender,
                bgColorBtn = document.getElementById('bgColorBtn'),
                captionAlignBtn = document.getElementById('captionAlignBtn'),
                resetAttrBtn = document.getElementById('resetAttrBtn');

            bgColorBtn.onclick = chartRef.changeBackground;
            captionAlignBtn.onclick = chartRef.makeCaptionLeft;
            resetAttrBtn.onclick = chartRef.resetAttr;
        }
    }
});// Render
chartInstance.render();
```

1. Include the necessary libraries and components using `import`. For example, `fusioncharts` library, etc.

2. Add the chart and theme as dependency.

3. Create an instance of the chart with chart options. In the JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height of the chart in pixels.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.

4. `beforeRender` function is used to set the chart attributes.

   - `changeBackground` updated the background of the chart.
   - `makeCaptionLeft` sets the caption text to left aligned.
   - `resetAttr` resets the chart data to it's initial state.

5. `btnContainer` created the **button** inside the `<div>`. Set style to button using `innerHTML`.

6. Call the `renderComplete` function to return the rendered chart.
