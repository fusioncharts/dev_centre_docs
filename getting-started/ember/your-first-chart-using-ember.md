---
title: Create a Chart in Ember | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts Ember component.
heading: Create a Chart in Ember Using FusionCharts
author: sowmya
---

The **ember-fusioncharts** component, provide bindings for FusionCharts JavaScript charting library. It lets you add interactive JavaScript charts and graphs to your web and mobile applications using EmberJS component.

On this page, we'll see how to install FusionCharts and render a chart using the `ember-fusionCharts` component.

## Prerequisite

Before you begin, make sure your development environment includes `Node.js` and an `npm package manager`. Please check it by running node -v and npm -v respectively. To get Node.js, go to the [official website](https://nodejs.org/).

- Ember requires Node.js and NPM installed your machine. Please check it by running `node -v` and `npm -v` respectively. If either of them returns command not found, then please go to [Node.js](https://nodejs.org/) website to install it properly.
  Find more about `ember-cli` [here](https://guides.emberjs.com/release/getting-started/quick-start/). To initiate an Ember project through `ember-cli`, follow the steps mentioned below:

```javascript
npm install -g ember-cli
```

Get started and create a new application using the command `ember new`.

```javascript
ember new my-app
cd my-app
ember serve
```

`my-app` is the working directory where Ember Boilerplate will be installed along with all the utilities and dependencies.

Now, open http://localhost:4200 to see your Ember app.

## Installation and including dependencies

To install `FusionCharts` and the `ember-fusioncharts` component via npm follow the steps below:

```javascript
npm install ember-fusioncharts fusioncharts --save
```

Include the necessary files to add the `fusioncharts` dependencies in `ember-cli-build.js` file in the project root directory .

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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along x-axis and 'No. of oil reserves' as **data values** along y-axis. Let us prepare the data for a single-series chart.

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
const myDataSource = {
  // Chart Configuration
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
    subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
    xAxisName: "Country", //Set the x-axis name
    yAxisName: "Reserves (MMbbl)", //Set the y-axis name
    numberSuffix: "K",
    theme: "fusion" //Set the theme for your chart
  },
  // Chart Data - from step 2
  data: chartData
};
```

> The 'type' attribute in the chartConfigs object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](/chart-guide/list-of-charts).

## Render the chart

Get ready to render your first chart using `ember-fusioncharts` component finally with the steps below:

**Step 1**: Create a component and specify the chart data in `chart-viewer.js` file

```javascript
ember g component chart-viewer && ember generate component-class chart-viewer
```

Set the chart's `width`, `height`, `type` and the `dataSource` in `app/components/chart-viewer.js` file.

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

export default Component.extend({
  title: "Ember FusionCharts Sample",
  width: 600,
  height: 400,
  type: "column2d",
  dataFormat: "json",
  dataSource: myDataSource
});
```

**Step 2**: Add `fusioncharts` component to your `chart-viewer.hbs` template (present in `app/components` folder) to render the chart:

```javascript
<h1>{{ title }}</h1>;
{
  {
    fusioncharts - xt;
    width = width;
    height = height;
    type = type;
    dataFormat = dataFormat;
    dataSource = dataSource;
  }
}
```

**Step 3**: Add `chart-viewer` component to your `application.hbs` template (present in `app/templates` folder):

```javascript
{
  {
    chart - viewer;
  }
}
{
  {
    outlet;
  }
}
```

## See your chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly.

> If you are getting a **this.\$()** error on the page, check this [link](https://guides.emberjs.com/release/configuring-ember/optional-features/) and implement the `jquery-integration` to fix the error.

If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `ember-fusioncharts` is ready.
