---
title: Configuring your Chart using Vue | FusionCharts
description: This article focuses on different type of configurations possible using Vue.
heading: Configuring your Chart using Vue
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `vue-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/vue/configure-your-chart-using-vuejs#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/vue/configure-your-chart-using-vuejs#update-chart-attributes-2)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chart configure-charts-using-angular-example-1.js %}

The code to render a chart is given below:

```
//Including Vue
import Vue from 'vue';

// Include the vue-fusioncharts component
import VueFusionCharts from 'vue-fusioncharts';

//Include the FusionCharts library
import FusionCharts from 'fusioncharts/core';

//Include the chart type
import Column2D from 'fusioncharts/viz/column2d'

// Register VueFusionCharts component
Vue.use(VueFusionCharts);

var app = new Vue({
    el: '#app',
    data: {
        type: 'column2d',
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
        }
    },
    events: {
        "beforeRender": function(evt, args) {
            var controls = document.createElement('div'),
                chartRef = evt.sender;

            chartRef.getRandomNumber = function() {
                var max = 300,
                    min = 50;
                return Math.round(((max - min) * Math.random()) + min);
            }
            updateData = function() {

                //clones data
                var data = Object.assign({}, chartRef.getJSONData());
                data.data[2].label = 'Canada';
                data.data[2].value = chartRef.getRandomNumber();

                data.data[3].label = 'Iran';
                data.data[3].value = chartRef.getRandomNumber();
                chartRef.setJSONData(data);
            };
            controls.innerHTML = '<button style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;" onClick="updateData()" >Update chart data</button>';
            controls.style.cssText = 'text-align: center; width: 100%;';
            args.container.appendChild(controls);
        }
    },
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```html
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
    <button @click="updateData">Click to Update Data</button>
</div>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `vue-fusioncharts`, `fusioncharts`, etc.

2. Registered `vue-fusioncharts` component.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

4. In the above sample, to update the chart we have generated random data using **Math.random()**.

5. `updateData()` function is added to randomly update the value of the chart when the button is clicked.

7. `controls.innerHTML` is added to create the `button` inside the `<div>`.

8. Create a `fusioncharts` directive in a template.

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chart configure-charts-using-vue-example-2.js %}

The JSON data to render the above chart is given below:

```
{
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
```

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

The code to render a chart is given below:

```
//Including Vue
import Vue from 'vue';

// Include the vue-fusioncharts component
import VueFusionCharts from 'vue-fusioncharts';

//Include the FusionCharts library
import FusionCharts from 'fusioncharts/core';

//Include the chart type
import Column2D from 'fusioncharts/viz/column2d'

// Register VueFusionCharts component
Vue.use(VueFusionCharts);

var app = new Vue({
    el: '#app',
    data: {
        width: '700',
        height: '400',
        type: 'column2d',
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
        }
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
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```html
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
    <button @click="changeBackground">Change Chart Background</button>
</div>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `vue-fusioncharts`, `fusioncharts`, etc.

2. Registered `vue-fusioncharts` component.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

4. An event is triggered to update the caption, subcaption alignment and the background of the chart.

5. An event is triggered to update the caption, subcaption alignment and the background of the chart.

    * To update the chart caption, sub-capion alignment.
    * To update the backgroing color.
    * Reset all the chart data to it's initial version.

6. A container is created to render buttons in the chart.

7. Created a `fusioncharts` directive in a template.