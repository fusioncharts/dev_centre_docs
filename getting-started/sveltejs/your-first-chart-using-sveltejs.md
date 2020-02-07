---
title: Create a Chart in SvelteJS Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the svelte-fusioncharts component.
heading: Create a Chart in SvelteJS Using FusionCharts
---

FusionCharts is a JavaScript charting library that lets you create interactive charts, gauges, maps, and dashboards using JavaScript. We have built a simple and lightweight SvelteJS directive, which provides bindings for `svelte-fusioncharts` and lets you add JavaScript charts in your Svelte application or project without any hassle.

In this page, you will see how to install FusionCharts and render a chart using the `svelte-fusioncharts` directive.

## Prerequisite

Before you begin, make sure your development environment includes `Node.js` and an `npm package manager`. SvelteJS requires Node.js version **10.9.0** or later. To download and install Node.js, please visit [nodejs.org](https://nodejs.org/).

You need to have a Svelte project set up before proceeding any further. If not, you can follow the steps mentioned below, to initiate the project.

Open a new terminal and execute the following command:

```javascript
npx degit sveltejs/template my-first-svelte-project
```

The above command creates a new project folder named `my-first-svelte-project`, and downloads the svelte default project template into that folder. Before running the project, we need to make sure that all needed development dependencies are being installed.

```javascript
cd my-first-svelte-project
npm install
```

Open the terminal and enter `npm run dev` to serve your app on `[localhost:5000](http://localhost:5000/)`.

## Installing and Including Dependencies

To install `fusioncharts` and the `svelte-fusioncharts` directive via npm follow the steps below:

Install `svelte-fusioncharts` and `fusioncharts` libraries with the following command:

```javascript
npm install svelte-fusioncharts fusioncharts --save
```

After installing the FusionCharts components, you can replace the code in `App.svelte` file with the code shown in the steps below to create your first chart. Import all the required dependencies in the &lt;script&gt; tag to get started.

```html
<script>
  //Import the Fusioncharts library
  import FusionCharts from "fusioncharts";

  //Import the chart modules
  import Charts from "fusioncharts/fusioncharts.charts";

  //Import the theme as fusion
  import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

  //Import the Svelte component
  import SvelteFC, { fcRoot } from "svelte-fusioncharts";

  // Always set FusionCharts as the first parameter
  fcRoot(FusionCharts, Charts, FusionTheme);
</script>
```

That completes the installation of FusionCharts and the `svelte-fusioncharts` directive.

## Preparing the Data

Let's create a chart showing the "Countries with Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

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

Since we are plotting a single dataset, let us create a column 2D chart with 'Countries' as data labels along X-axis and 'No. of Oil Reserves' as data values along Y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in JSON format. Include the data object in the &lt;script&gt; tag of `App.svelte` file. So the above data in the tabular form will look as follows:

```javascript
// Preparing the chart data
const chartData = [
  { label: "Venezuela", value: "290" },
  { label: "Saudi", value: "260" },
  { label: "Canada", value: "180" },
  { label: "Iran", value: "140" },
  { label: "Russia", value: "115" },
  { label: "UAE", value: "100" },
  { label: "US", value: "30" },
  { label: "China", value: "30" }
];
```

## Configure Your Chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

Store the chart configurations in a JSON object. In this JSON object:

```javascript
//Create your configuration object
const chartConfigs = {
  type: "column2d", //Select the chart type
  width: 600, //Set the width of the chart
  height: 400, //Set the height of the chart
  dataFormat: "json", //Set the input dataFormat to json
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]", //Set the caption to your chart
      subCaption: "In MMbbl = One Million Barrels", //Set a sub-caption to your chart
      xAxisName: "Country", //Assign a relevant name to your x-axis
      yAxisName: "Reserves (MMbbl)", //Assign a relevant name to your y-axis
      numberSuffix: "K",
      theme: "fusion" //Apply a theme to your chart
    },
    //Include chartData from STEP 2
    data: chartData
  }
};
```

## Render the Chart

Finally, get ready to render your first chart. Follow the steps mentioned below:

**Step 1**: In `App.svelte` include the necessary files and import the `fusioncharts` dependency.

Store the chart configurations in a JSON object.

The consolidated code is shown below:

```html
<script>
  import FusionCharts from "fusioncharts";
  import Charts from "fusioncharts/fusioncharts.charts";
  import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
  import SvelteFC, { fcRoot } from "svelte-fusioncharts";

  // Always set FusionCharts as the first parameter
  fcRoot(FusionCharts, Charts, FusionTheme);
  //STEP 2 : preparing the chart Data
  const chartData = [
    { label: "Venezuela", value: "290" },
    { label: "Saudi", value: "260" },
    { label: "Canada", value: "180" },
    { label: "Iran", value: "140" },
    { label: "Russia", value: "115" },
    { label: "UAE", value: "100" },
    { label: "US", value: "30" },
    { label: "China", value: "30" }
  ];

  //STEP 3: Create your configuration object
  const chartConfigs = {
    type: "column2d", //Select the chart type
    width: 600, //Set the width of the chart
    height: 400, //Set the height of the chart
    dataFormat: "json", //Set the input dataFormat to json
    dataSource: {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country", //Assign a relevant name to your x-axis
        yAxisName: "Reserves (MMbbl)", //Assign a relevant name to your y-axis
        numberSuffix: "K",
        theme: "fusion" //Apply a theme to your chart
      },
      //Include chartData from STEP 2
      data: chartData
    }
  };
</script>

<SvelteFC {...chartConfigs} />
```

**Step 2**: Export the **app** from `main.js`.

```javascript
import App from "./App.svelte";
var app = new App({
  target: document.body
});

export default app;
```

**Step 3**: Run `npm run dev` command in the terminal. Once the build is successful, open the `localhost` file to see your chart.

## See Your Chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `svelte-fusioncharts` is ready.
