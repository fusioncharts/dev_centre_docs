---
title: Your First Chart in Vue using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the vue-fusioncharts component.
heading: Create a Chart in Vue using FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **Vue** component which provides bindings for **FusionCharts**. The `vue-fusioncharts` component allows you to easily add rich and interactive charts to any **Vue** project.

In this page, we'll see how to install FusionCharts and render a chart using the `vue-fusionCharts` component.

## Installation

Install **FusionCharts** and the `vue-fusioncharts` component using any of the following methods:

**Using local files:	**

1. Include [Vue ](https://vuejs.org/)core library.

2. Include the `vue-fusioncharts` component.

3. Include the **FusionCharts** JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).

4. Include the FusionCharts theme file to apply the style to the charts.

The consolidated code is shown below:

```

<head>
    <!-- Step 1 - Including vue  -->
    <script type="text/javascript" src="path/to/local/vue.js"></script>

    <!-- Step 2 - Including vue-fusioncharts component -->
    <script type="text/javascript" src="path/to/local/vue-fusioncharts.js"></script>
    <!-- Step 3 - Including the fusioncharts core library -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- Step 4 - Including the fusion theme -->
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>

```

**Using CDN:**

To install the FusionCharts package and the `vue-fusioncharts` component follow the steps below:

1. Include [Vue ](https://vuejs.org/)core library.

2. Include the `vue-fusioncharts` component.

3. Include the **FusionCharts** JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).

4. Include the FusionCharts theme file to apply the style to the charts.

```

<head>
    <!-- Step 1 - Including vue  -->
    <script type="text/javascript" src="https://unpkg.com/vue@2.3.3"></script>

    <!-- Step 2 - Including vue-fusioncharts component -->
    <script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js

"></script>
    <!-- Step 3 - Including the fusioncharts core library -->
    <script type="text/javascript" src="**http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js**

"></script>
    <!-- Step 4 - Including the fusion theme -->
    <script type="text/javascript" src="**http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.theme.fusion.js**"></script>
</head>

```

**Using npm**

To install FusionCharts and the `vue-fusioncharts` component via npm follow the steps below:

1. Install the `vue-fusioncharts` component

```

$ npm install vue-fusioncharts --save

```

2. Install `fusioncharts` package

```

$ npm install fusioncharts --save

```

That completes the installation of FusionCharts and the `vue-fusioncharts` component.

## Create your First Chart

Let's create a Column 2D chart using the `vue-fusioncharts` component showing the "Countries With Most Oil Reserves". 

FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

<Live chart> 

The data for the above chart is shown in the table below:


Country|No. of Oil Reserves||
-|-|-
Venezuela|290||
Saudi|260||
Canada|180||
Iran|140||
Russia|115||
UAE|100||
US|30||
China|30||



**Convert tabular data into JSON format**

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format as shown below:

<JSON DATA>

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example,  [single-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts.

In the above JSON data: 

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the `data` array.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the chart

To render the chart, follow the steps below:

1. Include the `vue` component

2. Include `vue-fusioncharts` component

3. Include `fusioncharts` core library

4. Include the chart type.

5. Include the FusionCharts theme file to apply the style to the charts

6. Register the **VueFusionCharts** component

7. Store the chart configurations in a JSON object. In this JSON object:

* Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

* Set the width and height (in pixels). 

* Set the `dataFormat` as JSON.

* Embed the json data as the value of the `dataSource`.

```

import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'

// Register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D)

var app = new Vue({
    el: '#app',
    data: {
        width: '700',
        height: '400',
        type: 'column2d',
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
      }
    }
});

Create an HTML template as shown below:

```

<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
</div>

```

Using CDN:

```

<head>
    <!-- Step 1 - Including vue  -->
    <script type="text/javascript" src="https://unpkg.com/vue@2.3.3"></script>

    <!-- Step 2 - Including vue-fusioncharts component -->
    <script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js

"></script>
    <!-- Step 3 - Including the fusioncharts core library -->
    <script type="text/javascript" src="**http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js**

"></script>
    <!-- Step 4 - Including the fusion theme -->
    <script type="text/javascript" src="**http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.theme.fusion.js**"></script>
</head>

<body>

    <div id="app">
        <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
        :events="events">
        </fusioncharts>
        <p>Display Value: {{displayValue}}</p>
    </div>
    
    <script>
        // Use VueFusionCharts component by calling the Vue.use() method:
        Vue.use(VueFusionCharts);
        
     var app = new Vue({

    el: '#app',

    data: {

        width: '100%',

        height: '400',

        type: 'column2d',

        dataFormat: 'json',

        dataSource:{
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
      }
    }
});

    }

});

    </script>
</body>

```

Using Local files:

    <head>
    <!-- Step 1 - Including vue  -->
    <script type="text/javascript" src="path/to/local/vue.js"></script>

    <!-- Step 2 - Including vue-fusioncharts component -->
    <script type="text/javascript" src="path/to/local/vue-fusioncharts.js"></script>
    <!-- Step 3 - Including the fusioncharts core library -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- Step 4 - Including the fusion theme -->
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>

<body>

    <div id="app">
        <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
        :events="events">
        </fusioncharts>
        <p>Display Value: {{displayValue}}</p>
    </div>
    
    <script>
        // Use VueFusionCharts component by calling the Vue.use() method:
        Vue.use(VueFusionCharts);
        
             var app = new Vue({

    el: '#app',

    data: {

        width: '100%',

        height: '400',

        type: 'column2d',

        dataFormat: 'json',

        dataSource:{
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
      }
    }
});

    }

});
    </script>
</body>

That's it! Your first chart using `vue-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.

