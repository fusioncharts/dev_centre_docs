---
title: Ionic React | FusionCharts
description: This article outlines the steps to create your chart in ionic framework with react.
heading: Ionic React
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. Ionic is an open source framework used for developing mobile applications. It provides tools and services for building Mobile UI with native look and feel. Ionic framework needs native wrapper to be able to run on mobile devices.We have built a simple and lightweight React component which provides bindings for FusionCharts in Ionic Framework. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any Ionic Framework Project.

On this page, we'll see how to install FusionCharts and render a chart using the `react-fusioncharts` component in Ionic Framework.

## Prerequisite

You need to have Ionic installed before proceeding any further. If not, you can follow the steps below.

Ionic requires Node.js and NPM installed in your machine. You can check it by running the following commands in the terminal:

```shell
node -v
npm -v
```

To get Node.js (if not installed), you can go to the [official website](https://nodejs.org/en/) and get it.

Enter the following command to install ionic.

```shell
\$ npm install -g ionic
```

Now that Ionic is installed, let's set up an **Ionic** project.Follow the steps below:

```shell
\$ ionic start myApp tabs --type react
cd myApp
```

Start the development server by the entering the following command:

```shell
\$ ionic serve
```

Now, open [http://localhost:8100](http://localhost:8100) to see your Ionic app.

## Installation and including dependencies

Install the `react-fusioncharts` and fusioncharts modules by the following command:

```shell
npm install fusioncharts react-fusioncharts --save
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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as data labels along x-axis and 'No. of oil reserves' as data values along y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in **JSON** format. So the above data in the tabular form will take the below shape.

```javascript
const dataSource = {
  data: [
    { label: "Venezuela", value: "290" },
    { label: "Saudi", value: "260" },
    { label: "Canada", value: "180" },
    { label: "Iran", value: "140" },
    { label: "Russia", value: "115" },
    { label: "UAE", value: "100" },
    { label: "US", value: "30" },
    { label: "China", value: "30" }
  ]
};
```

## Configure your Chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context. Now, we add the chart attributes like height, width, type in the App.tsx file.

```javascript
const dataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subCaption: "In MMbbl = One Million barrels",
    xAxisName: "Country",
    yAxisName: "Reserves (MMbbl)",
    numberSuffix: "K",
    theme: "fusion"
  }
};
const chartConfigs = {
  type: "column2d",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: dataSource
};
```

The type attribute in the chartConfigs object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

## Render your chart

Get ready to render your first chart finally with the steps below:

- Create the DOM element to pass the react-fusioncharts component.

```javascript
const App: React.FC = () => (
  <IonApp>
    <ReactFC {...chartConfigs} />
  </IonApp>
);
```

The `dataSource` and the `chartConfigs` objects created above will now go into the App.tsx file. Its consolidated code is shown below:

```javascript
import React from "react";
import { IonApp } from "@ionic/react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const dataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subCaption: "In MMbbl = One Million barrels",
    xAxisName: "Country",
    yAxisName: "Reserves (MMbbl)",
    numberSuffix: "K",
    theme: "fusion"
  },
  data: [
    { label: "Venezuela", value: "290" },
    { label: "Saudi", value: "260" },
    { label: "Canada", value: "180" },
    { label: "Iran", value: "140" },
    { label: "Russia", value: "115" },
    { label: "UAE", value: "100" },
    { label: "US", value: "30" },
    { label: "China", value: "30" }
  ]
};
const chartConfigs = {
  type: "column2d",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: dataSource
};
const App: React.FC = () => (
  <IonApp>
    <ReactFC {...chartConfigs} />
  </IonApp>
);

export default App;
```

## See your chart

With all the code in place and the development server running, open [http://localhost:8100](http://localhost:8100) and you'll be able to see the chart as below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using react-fusioncharts in Ionic Framework is ready.
