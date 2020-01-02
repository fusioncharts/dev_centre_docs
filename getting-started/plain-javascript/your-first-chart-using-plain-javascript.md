---
title: Create a Chart Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the plain javascript.
heading: Create a Chart Using FusionCharts
---

**FusionCharts Suite XT** — the industry's most comprehensive JavaScript charting solution — is all about easing the whole process of data visualization through charts.

On this page, we'll see how to install **FusionCharts** library and all the other dependencies on your system and render a chart using Plain JavaScript.

## Prerequisite

Before you begin, make sure your development environment includes `Node.js` and an `npm package manager`. You can skip this step and proceed on if you are including the dependencies from CDN or Local Files.

- jQuery requires Node.js version **10.9.0** or later. To check your version, run `node -v` in a terminal/console window. To get Node.js, go to [nodejs.org](https://nodejs.org/).

- To download and install npm packages, you must have an npm package manager. Run `npm -v` in a terminal/console window, to check that if have the npm client installed.

> Initialize npm, install webpack locally, and install the webpack-cli. Make sure you run `**npx webpack**` command in the terminal to ensure that the build is successful.

## Installation and including dependencies

You can install the fusioncharts components by following any of the methods below:

    		NPM

Create a project folder using the following command:

````mkdir projectName

Get inside the directory using the `**cd`** command as shown below:

``` cd projectName

Now, to install the `**fusioncharts**` package via npm run the command below:

``` npm install fusioncharts

After installing the fusioncharts components, you can replace the code in `index.js` file with the code shown in the steps below to create your first chart. Import all the required dependencies to get started.

````

_// Include the core fusioncharts file from core -_

import FusionCharts from 'fusioncharts/core';

_// Include the chart from viz folder_

import Column2D from 'fusioncharts/viz/column2d';

_// Include the fusion theme_

import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

_// Add the chart and theme as dependency_

_// E.g. FusionCharts.addDep(ChartType)_

FusionCharts.addDep(Column2D);

FusionCharts.addDep(FusionTheme);

```

		CDN

To install the FusionCharts Suite follow the steps below:

1. Include the FusionCharts JavaScript files from CDN.

2. Include the theme file.

The code is shown below:

```

<head>

    <!-- Step 1 - Include the fusioncharts core library -->

    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>

    <!-- Step 2 - Include the fusion theme -->

    <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

</head>

````

		Local Files

To install the FusionCharts Suite follow the steps below:

1. Include the FusionCharts JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

2. Include the FusionCharts theme file to apply **style** to the charts.

The code is shown below:

```javascript
<html>
    <head>
        <!-- Step 1 - Include the fusioncharts core library -->
        <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>

        <!-- Step 2 - Include the fusion theme -->
        <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    </head>
</html>
````

That completes the installation of `FusionCharts` Suite.

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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as `data labels` along the x-axis and 'No. of oil reserves' as `data values` along y-axis. Let us prepare the data for a single-series chart.

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
        // Chart Data - from step 2
        "data": chartData
    }
};
```

Understand more about your chart and its components[ here](https://www.fusioncharts.com/dev/understanding-fusioncharts).

## Render the chart

Get ready to render your first chart finally with the steps below:

NPM

The fusioncharts package for npm can be used in two different ways:

- FusionCharts ES module

- FusionCharts CJS module

The steps to render the chart for both the modules are shown below:

ES6

**Step 1**: In `index.js` include the necessary files and import the fusioncharts dependency. The consolidated code is shown below:

```

_// Include the core fusioncharts file from core -_

import FusionCharts from 'fusioncharts/core';

_// Include the chart from viz folder_

_// E.g. - import ChartType from fusioncharts/viz/[ChartType]_

import Column2D from 'fusioncharts/viz/column2d';

_// Include the fusion theme_

import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

_// Add the chart and theme as dependency_

_// E.g. FusionCharts.addDep(ChartType)_

FusionCharts.addDep(Column2D);

FusionCharts.addDep(FusionTheme);

_// Create an Instance with chart options_

var chartInstance = new FusionCharts({

type: 'Column2D',
width: '700',_ // Width of the chart_

height: '400',_ // Height of the chart_

dataFormat: 'json',_ // Data type_

renderAt:'chart-container',_ //Container where the chart will render_

dataSource: {

_// Chart Configuration_

"chart": {

"caption": "Countries With Most Oil Reserves [2017-18]",

"subCaption": "In MMbbl = One Million barrels",

"xAxisName": "Country",

"yAxisName": "Reserves (MMbbl)",

"numberSuffix": "K",

"theme": "fusion"

},

_// Chart Data_

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

});

_// Render_

chartInstance.render();

CJS

```

var FusionCharts = require('fusioncharts');

// Require charts from fusioncharts

var Charts = require('fusioncharts/fusioncharts.charts');

// Require theme from fusioncharts

var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Add charts and themes as dependency

Charts(FusionCharts);

FusionTheme(FusionCharts);

// Create an Instance with chart options

var chartInstance = new FusionCharts({

type: 'Column2D',

width: '700', // Width of the chart

height: '400', // Height of the chart

dataFormat: 'json', // Data type

renderAt:'chart-container', //Container where the chart will render

dataSource: {

// Chart Configuration

"chart": {

"caption": "Countries With Most Oil Reserves [2017-18]",

"subCaption": "In MMbbl = One Million barrels",

"xAxisName": "Country",

"yAxisName": "Reserves (MMbbl)",

"numberSuffix": "K",

"theme": "fusion"

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

});

// Render

chartInstance.render();

```

```

**Step 2**: Specify the chart container within the `index.html` file.

```

<!doctype html>

<html>

  <head>

    <title>Getting Started</title>

  </head>

  <body>

    <div id="chart-container">Fusioncharts will render here</div>

    <script src="main.js"></script>

  </body>

</html>

```

**Step 3**: Run `npx webpack` command in the terminal. Once the build is successful, open the `index.html` file to see your chart.

    	CDN

```

<html>

<head>

<title>My first chart using FusionCharts Suite XT</title>

<!-- Include fusioncharts core library -->

<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>

<!-- Include fusion theme -->

<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

<script type="text/javascript">

    FusionCharts.ready(function(){

    var fusioncharts = new FusionCharts({

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

    }

});

    fusioncharts.render();

    });

</script>

</head>

<body>

    <div id="chart-container">FusionCharts XT will load here!</div>

</body>

</html>

```

    	Local Files

```

<html>

<head>

<title>My first chart using FusionCharts Suite XT</title>

<!-- Include fusioncharts core library -->

<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>

<!-- Include fusion theme -->

<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>

<script type="text/javascript">

    FusionCharts.ready(function(){

    var fusioncharts = new FusionCharts({

    type: 'column2d',

    renderAt: 'chart-container',

    width: '700',

    height: '400',

    dataFormat: 'json',

    dataSource: {

        // Chart Configuration

        "chart": {

            "caption": "Countries with Most Oil Reserves [2017-18]",

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

});

    fusioncharts.render();

    });

</script>

</head>

<body>

    <div id="chart-container">FusionCharts XT will load here!</div>

</body>

</html>

```

## See your chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using Plain JavaScript is ready.
