---
title: Create a Chart in Ember | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts Ember component.
heading: Create a Chart in Ember Using FusionCharts
---

The **ember-fusioncharts** component, provide bindings for FusionCharts JavaScript charting library. It lets you add interactive JavaScript charts and graphs to your web and mobile applications using EmberJS component.

On this page, we'll see how to install FusionCharts and render a chart using the `ember-fusionCharts` component.

## Prerequisite

Before you begin, make sure your development environment includes `Node.js` and an `npm package manager`.

- Ember requires Node.js version **10.9.0** or later. To check your version, run `node -v` in a terminal/console window. To get Node.js, go to [nodejs.org](https://nodejs.org/).

- To download and install npm packages, you must have an npm package manager. run `npm -v` in a terminal/console window, to check if have the npm client installed.

Follow the steps mentioned [here](https://guides.emberjs.com/release/getting-started/quick-start/) to initiate the project using Ember CLI.

## Installation and including dependencies

To install `FusionCharts` and the `ember-fusioncharts` component via npm follow the steps below:

```javascript
npm install ember-fusioncharts fusioncharts --save
```

That completes the installation of `FusionCharts` and the `ember-fusioncharts` component.

## Preparing the data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as data labels along x-axis and 'No. of oil reserves' as data values along y-axis. Let us prepare the data for a single-series chart.

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
// Create the datasource
const dataSource = {
  // Chart Configuration
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subCaption: "In MMbbl = One Million barrels",
    xAxisName: "Country",
    yAxisName: "Reserves (MMbbl)",
    numberSuffix: "K",
    theme: "fusion"
  },
  // Chart Data - from step 2
  data: chartData
};
```

## Render the chart

Get ready to render your first chart using `ember-fusioncharts` component finally with the steps below:

**Step 1**: In `ember-cli-build.js` file include the necessary files and add the dependency.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be an asset to use in that environment.

```javascript
/ _eslint-env node_ /;
("use strict");
const EmberApp = require("ember-cli/lib/broccoli/ember-app");
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Import fusioncharts library
  app.import("node_modules/fusioncharts/fusioncharts.js");
  app.import("node_modules/fusioncharts/fusioncharts.charts.js");
  app.import("node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");

  // Use `app.import` to import additional libraries/files
  return app.toTree();
};
```

**Step 2**: Create a component and specify the chart data in `chart-viewer.js` file


```javascript
ember g component chart-viewer && ember generate component-class chart-viewer
```

Set the chart's `width`, `height`, `type` and the `dataSource` in `chart-viewer.js` file.

```javascript
import Component from "@ember/component";

// STEP 2 : Preparing the chart data
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

// STEP 3 : Set chart configurations
const myDataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subCaption: "In MMbbl = One Million barrels",
    xAxisName: "Country",
    yAxisName: "Reserves (MMbbl)",
    numberSuffix: "K",
    theme: "fusion"
  },
  // Chart Data
  data: chartData
};
```

**Step 3**: Add `fusioncharts` component to your `chart-viewer.hbs` template to render the chart:

```javascript
<h1>{{ title }}</h1>;
{{fusioncharts - xt
  width = width
  height = height
  type = type
  dataFormat = dataFormat
  dataSource = dataSource}}
```

**Step 4**: Add `chart-viewer` component to your `application.hbs` template:

```javascript
{{chart - viewer}}
{{outlet}}
```

## See your chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

If you are getting a **this.\$()** error on the page, check this [link](https://guides.emberjs.com/release/configuring-ember/optional-features/) and implement the `jquery-integration` to fix the error.

That's it! Your first chart using `ember-fusioncharts` is ready.
