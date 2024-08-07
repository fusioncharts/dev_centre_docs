---
title: Build Interactive Charts in ReactJS with FusionCharts (Step-by-Step Guide)
description: Want to create stunning and interactive charts in your ReactJS applications?  Learn how to easily integrate FusionCharts with clear step-by-step instructions. Explore various chart types and get started visualizing your data today!
heading: Create a Chart in React using FusionCharts
author: sowmya
---

## Introduction

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards. We have built a simple and lightweight React component that provides bindings for FusionCharts. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any React project.

On this page, you'll see how to install FusionCharts and render a chart using the `react-fusionCharts` component.

## Setting up a React project

Before starting a React project, it's essential to create a setup that streamlines the whole project-making process. One of the best ways to set up the development environment for **charts in Reactjs** is by using create-react-app. Find more about it [here](https://create-react-app.dev/docs/getting-started).

After understanding all about using the react app, the next step is to initiate the process. Here are the steps on how you can do it.

Open the terminal, go ahead and enter:

```javascript
npx create-react-app first-fusioncharts-project
cd first-fusioncharts-project
npm start
```

`first-fusioncharts-project` is the working directory where React Boilerplate will be installed along with all the utilities and dependencies.

<div class="info-box">
The working directory should contain a `package.json`. If the package is not present, you can create it using the `npm init -y` command.
<div>
Now, open [http://localhost:3000/](http://localhost:3000/) to see your React app.

## Installation and including dependencies

Install the react-fusioncharts and fusioncharts modules using the following command:

```javascript
npm install fusioncharts react-fusioncharts --save
```

After installing the fusioncharts components, you can replace the code in App.js file with the code shown in the steps below to create your first chart. Import all the required dependencies to get started.

```javascript
// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
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

Now that the data is ready, let's work on the styling, positioning and giving your **chart in reactjs** a context.

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
      caption: "Countries With Most Oil Reserves [2017-18]",    //Set the chart caption
      subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
      xAxisName: "Country",           //Set the x-axis name
      yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
      numberSuffix: "K",
      theme: "fusion"                 //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData
  }
};
```

> The 'type' attribute in the chartConfigs object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](/chart-guide/list-of-charts).

## Render the chart

Get ready to render your first chart finally. Use this consolidated code shown below:

```
// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
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

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Countries With Most Oil Reserves [2017-18]",
      //Set the chart subcaption
      subCaption: "In MMbbl = One Million barrels",
      //Set the x-axis name
      xAxisName: "Country",
      //Set the y-axis name
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {
  render() {
    return (<ReactFC {...chartConfigs} />);
  }
}

export default App;
```

## See your chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `react-fusioncharts` is ready.

## Enhance Your Charts in Reactjs with FusionCharts

FusionCharts emerges as the ultimate solution for developers searching to harness the power of data visualization in ReactJS applications. Its seamless integration with React through the react-fusion charts component empowers developers to create stunning and interactive **charts in Reactjs** effortlessly. With unparalleled customization options, export capabilities, and seamless integration, FusionCharts is your go-to platform for transforming simple data comparable charts.

_Don't miss out on the opportunity to transform your data into actionable insights with FusionCharts. Explore FusionCharts now and take your data visualization to new heights!_

## Transform Your React Projects with FusionCharts

Ready to add interactive charts to your React projects? Get started with FusionCharts today! Visit our website to explore our documentation, tutorials, and examples. Unleash the power of data visualization in your applications.

_Get started with FusionCharts._

## FAQs
<details>
<summary> <h3> Can I customize the appearance of FusionCharts in my React project?</h3></summary>
<br>
Yes, you can customize various aspects of <strong>charts in reactjs<strong> with FusionCharts, such as colors, fonts, tooltips, and animations, to match the design of your react application. Refer to our documentation for detailed customization options.
</details>

<details>
<summary> <h3> Can I export FusionCharts as images or PDFs from my React application?</h3></summary>
<br>
FusionCharts provides built-in support for exporting charts as images (PNG, JPEG) or PDF documents directly from the browser. You can enable export functionality with a few simple configurations.
</details>

<details>
<summary> <h3> How do I troubleshoot JavaScript errors with FusionCharts?</h3></summary>
<br>
Check your browser console for exact error messages if you encounter JavaScript errors while using FusionCharts. For common issues and solutions, refer to our troubleshooting guide.
</details>

<details>
<summary> <h3> Can I integrate FusionCharts with state management libraries like Redux in React?</h3></summary>
<br>
Yes, you can integrate FusionCharts with state management libraries like Redux to manage the state of your **charts in reactjs** within a React application. Check out our documentation for examples and best practices.
</details>

