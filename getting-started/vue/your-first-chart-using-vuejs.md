---
title: Create a Chart in Vue | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the vue-fusioncharts component.
heading: Create a Chart in Vue Using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight Vue component that provides bindings for FusionCharts. The `vue-fusioncharts` component allows you to easily add rich and interactive charts to any Vue project.

On this page, we'll see how to install FusionCharts and render a chart using the `vue-fusioncharts` component.

## Prerequisite

You can follow the below steps to initiate a vue project or else you can skip this step and proceed on by including the dependencies from CDN or Local Files.

One of the best ways to setup the development environment is through `vue-cli`. Find more about it [here](https://create-react-app.dev/docs/getting-started). Install vue globally in your local machine with npm using `vue-cli`

```javascript
npm install -g @vue/cli
```

Open the terminal, go ahead and enter:

```javascript
vue create first-fusioncharts-project
cd first-fusioncharts-project
npm run serve
```

`first-fusioncharts-project` is the working directory where Vue Boilerplate will be installed along with all the utilities and dependencies.

Now, open[ http://localhost:8080/](http://localhost:8000/) to see your Vue app.

## Installation and including dependencies

To install `fusionCharts` and the `vue-fusioncharts` components via npm follow the steps below.

```javascript
npm install fusioncharts vue-fusioncharts --save
```

After installing the fusioncharts components, you can replace the code in `src/App.vue` file with the code shown in the steps below to create your first chart. Import all the required dependencies to get started.

```javascript
// Include Dependencies
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);
```

## Preparing the data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in the tabular form below.

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along the x-axis and 'No. of oil reserves' as **data values** along the y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in JSON format. So the above data in the tabular form will take the below shape.

```javascript
// Preparing the chart data
const chartData = [
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
];
```

## Configure your chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

```javascript
// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",   //Set the chart caption
      subCaption: "In MMbbl = One Million barrels",            //Set the chart subcaption
      xAxisName: "Country",             //Set the x-axis name
      yAxisName: "Reserves (MMbbl)",    //Set the y-axis name
      numberSuffix: "K",
      theme: "fusion"                   //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData
  }
};
```

> The `type` attribute in the chartConfigs object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

## Render the chart

Get ready to render your first chart finally. Use this consolidated code shown below:

```
// STEP 1: to include the dependencies
<script>
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

// STEP 2: Prepare the data
const chartData = [
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
  ];

// STEP 3: Configure your chart
const dataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subcaption: "In MMbbl = One Million barrels",
    xaxisname: "Country",
    yaxisname: "Reserves (MMbbl)",
    numbersuffix: "K",
    theme: "fusion"
  },
  data: chartData
  };

export default {
  name: 'app',
  data() {
    return {
      "type": "column2d",
      "renderAt": "chart-container",
      "width": "550",
      "height": "350",
      "dataFormat": "json",
      dataSource
    }
  }
}
</script>

//STEP 4: Render the chart
<template>
  <div id="app">
    <div id="chart-container">
      <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataformat="dataFormat"
      :dataSource="dataSource"
      >
      </fusioncharts>
    </div>
  </div>
</template>
```

## See your chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `vue-fusioncharts` is ready.
