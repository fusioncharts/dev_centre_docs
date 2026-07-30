---
title: Create a Chart in jQuery | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the jquery-fusioncharts component.
heading: Create a Chart in jQuery Using FusionCharts
---

## Introduction

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps, and dashboards.

The lightweight `jquery-fusioncharts` plugin provides jQuery bindings for FusionCharts, allowing you to render and manage FusionCharts using familiar jQuery syntax.

In this tutorial, you will learn how to:

- Create a JavaScript project using Vite
- Install FusionCharts, jQuery, and the jQuery-FusionCharts plugin
- Prepare chart data
- Configure a Column 2D chart
- Render the chart using jQuery

You can also include the required libraries using a CDN or locally downloaded files.

## Choose Your Installation Method

FusionCharts can be used with jQuery in three ways:
1. **npm + Vite (Recommended)** — For modern development workflows.
2. **CDN** — For quickly creating charts without a build tool.
3. **Local Files** — For projects that use downloaded JavaScript files.

## Option 1: Install Using npm (Recommended)

### Prerequisites
To install the required packages using npm, make sure Node.js and npm are installed on your system.

Check the installed versions by running:

```javascript
node -v
npm -v
```

If these commands do not return version numbers, install Node.js before continuing.

You can skip this prerequisite if you plan to load FusionCharts and jQuery directly from a CDN or local files.

### Create a JavaScript Project with Vite
Create a new vanilla JavaScript project using Vite:

```javascript
npm create vite@latest first-fusioncharts-jquery-project -- --template vanilla
```

Navigate to the project directory:

```javascript
cd first-fusioncharts-jquery-project
```

Install the project dependencies:

```javascript
npm install
```

Start the development server:

```javascript
npm run dev
```

Once the server starts, open the local URL displayed in the terminal, typically:

```javascript
http://localhost:5173
```

You should see the default Vite application, confirming that your project has been created successfully.

### Installation and including dependencies 
#### Install FusionCharts and jQuery
Install FusionCharts, jQuery, and the jQuery-FusionCharts plugin:

```javascript
npm install fusioncharts jquery jquery-fusioncharts
```

The `jquery-fusioncharts` package is the official jQuery wrapper for rendering and manipulating FusionCharts through jQuery syntax.

#### Include the Required Dependencies
Open `src/main.js` and replace its existing content with the following imports:

```javascript
// STEP 1 - Include the required dependencies

// Include jQuery
import $ from "jquery";

// Include the FusionCharts library
import FusionCharts from "fusioncharts";

// Include the charts module
import Charts from "fusioncharts/fusioncharts.charts";

// Include the Fusion theme
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Include the jQuery-FusionCharts plugin
import jQueryFusionCharts from "jquery-fusioncharts";
```

#### Register the Chart Module, Theme, and jQuery Plugin with FusionCharts
Next, register the chart module, theme, and jQuery plugin with FusionCharts:

```javascript
// Register the charts module with FusionCharts
Charts(FusionCharts);

// Register the Fusion theme with FusionCharts
FusionTheme(FusionCharts);

// Register the jQuery plugin with FusionCharts
jQueryFusionCharts(FusionCharts);
```

The complete dependency section should look like this:

```javascript
// STEP 1 - Include the required dependencies

import $ from "jquery";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import jQueryFusionCharts from "jquery-fusioncharts";

Charts(FusionCharts);
FusionTheme(FusionCharts);
jQueryFusionCharts(FusionCharts);
```

### Preparing the Chart Data
In this example, you will create a chart showing the countries with the largest oil reserves.

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

Because the example contains a single dataset, you can use a Column 2D chart. The countries appear as labels along the x-axis, while the oil reserve values appear along the y-axis.

FusionCharts accepts chart data in JSON format. Add the following array to `src/main.js`:


```javascript
// STEP 2 - Prepare the chart data

const chartData = [
  {
    label: "Venezuela",
    value: "290",
  },
  {
    label: "Saudi Arabia",
    value: "260",
  },
  {
    label: "Canada",
    value: "180",
  },
  {
    label: "Iran",
    value: "140",
  },
  {
    label: "Russia",
    value: "115",
  },
  {
    label: "UAE",
    value: "100",
  },
  {
    label: "United States",
    value: "30",
  },
  {
    label: "China",
    value: "30",
  },
];
```

### Configure the chart
Create a configuration object containing the chart type, dimensions, appearance, and data:

```javascript
// STEP 3 - Configure the chart

const chartConfigs = {
  type: "column2d",
  width: "700",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017–18]",
      subCaption: "In MMbbl = One Million Barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
    },
    data: chartData,
  },
};
```

The main configuration properties are:

- `type` specifies the chart type to render.
- `width` and height define the chart dimensions.
- `dataFormat` specifies the format of the chart data.
- `dataSource` contains the chart settings and data.
- `theme` applies the Fusion theme.

The value `column2d` instructs FusionCharts to render a Column 2D chart. You can replace it with another supported [chart alias](https://www.fusioncharts.com/dev/chart-guide/list-of-charts) to render a different chart type.

### Render the chart
#### Add the Chart Container
Open `index.html` and replace the default content inside the `<body>` element with:

```javascript
<body>
  <div id="chart-container">FusionCharts will render here</div>

  <script type="module" src="/src/main.js"></script>
</body>
```

The `chart-container` element provides the location where FusionCharts will render the chart.

#### Render the Chart Using jQuery’s Document-Ready Handler
Use jQuery’s document-ready handler to render the chart after the page has loaded:

```javascript
// STEP 4 - Render the chart

$(function () {
  $("#chart-container").insertFusionCharts(chartConfigs);
});
```

The `insertFusionCharts()` method creates the chart inside the selected HTML element using the supplied configuration.

### Complete `src/main.js` Code
Replace the contents of `src/main.js` with the following code:

```javascript
// STEP 1 - Include the required dependencies

import $ from "jquery";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import jQueryFusionCharts from "jquery-fusioncharts";

// Register the charts module, theme, and jQuery plugin
Charts(FusionCharts);
FusionTheme(FusionCharts);
jQueryFusionCharts(FusionCharts);

// STEP 2 - Prepare the chart data

const chartData = [
  {
    label: "Venezuela",
    value: "290",
  },
  {
    label: "Saudi Arabia",
    value: "260",
  },
  {
    label: "Canada",
    value: "180",
  },
  {
    label: "Iran",
    value: "140",
  },
  {
    label: "Russia",
    value: "115",
  },
  {
    label: "UAE",
    value: "100",
  },
  {
    label: "United States",
    value: "30",
  },
  {
    label: "China",
    value: "30",
  },
];

// STEP 3 - Configure the chart

const chartConfigs = {
  type: "column2d",
  width: "700",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017–18]",
      subCaption: "In MMbbl = One Million Barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
    },
    data: chartData,
  },
};

// STEP 4 - Render the chart

$(function () {
  $("#chart-container").insertFusionCharts(chartConfigs);
});
```

### Complete index.html Code
Your `index.html` file should look like this:

```javascript
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <title>FusionCharts jQuery Example</title>
  </head>

  <body>
    <div id="chart-container">FusionCharts will render here</div>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

## View the Chart

Start the Vite development server if it is not already running:

```javascript
npm run dev
```

Open the local URL shown in your terminal, typically:

```javascript
http://localhost:5173
```

You should now see a Column 2D chart displaying the oil reserves for each country.

{% embed_chart getting-started-your-first-chart.js %}

## Option 2: Include FusionCharts Using a CDN

You can also create the chart without npm or a build tool by loading the required libraries from a CDN.

Simply create an HTML file and include the required scripts from the CDN.

Add the following scripts inside the `<head>` element of your HTML file:

```javascript
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>FusionCharts jQuery Example</title>

  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- Include the FusionCharts library -->
  <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>

  <!-- Include the Fusion theme -->
  <script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

  <!-- Include the jQuery-FusionCharts plugin -->
  <script src="https://cdn.fusioncharts.com/jquery-fusioncharts/v2.0.1/jquery.fusioncharts.min.js"></script>
</head>
```

### Complete CDN Example

```javascript
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <title>FusionCharts jQuery Example</title>

    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <!-- Include the FusionCharts library -->
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>

    <!-- Include the Fusion theme -->
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>

    <!-- Include the jQuery-FusionCharts plugin -->
    <script src="https://cdn.fusioncharts.com/jquery-fusioncharts/v2.0.1/jquery.fusioncharts.min.js"></script>
  </head>

  <body>
    <div id="chart-container">FusionCharts will render here</div>

    <script>
      const chartData = [
        {
          label: "Venezuela",
          value: "290",
        },
        {
          label: "Saudi Arabia",
          value: "260",
        },
        {
          label: "Canada",
          value: "180",
        },
        {
          label: "Iran",
          value: "140",
        },
        {
          label: "Russia",
          value: "115",
        },
        {
          label: "UAE",
          value: "100",
        },
        {
          label: "United States",
          value: "30",
        },
        {
          label: "China",
          value: "30",
        },
      ];

      const chartConfigs = {
        type: "column2d",
        width: "700",
        height: "400",
        dataFormat: "json",
        dataSource: {
          chart: {
            caption: "Countries With Most Oil Reserves [2017–18]",
            subCaption: "In MMbbl = One Million Barrels",
            xAxisName: "Country",
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            theme: "fusion",
          },
          data: chartData,
        },
      };

      $(function () {
        $("#chart-container").insertFusionCharts(chartConfigs);
      });
    </script>
  </body>
</html>
```

{% embed_chart getting-started-your-first-chart.js %}

## Option 3: Include FusionCharts Using Local Files

This example assumes you have downloaded the required files and placed them in the following project structure:

```javascript
project-folder/
├── index.html
└── js/
    ├── jquery-3.7.1.min.js
    ├── fusioncharts.js
    ├── fusioncharts.theme.fusion.js
    └── jquery.fusioncharts.min.js
```

Use the following complete HTML file:

```javascript
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <title>FusionCharts jQuery Example</title>

    <!-- Include jQuery -->
    <script src="./js/jquery-3.7.1.min.js"></script>

    <!-- Include the FusionCharts library -->
    <script src="./js/fusioncharts.js"></script>

    <!-- Include the Fusion theme -->
    <script src="./js/fusioncharts.theme.fusion.js"></script>

    <!-- Include the jQuery-FusionCharts plugin -->
    <script src="./js/jquery.fusioncharts.min.js"></script>
  </head>

  <body>
    <div id="chart-container">FusionCharts will render here</div>

    <script>
      const chartData = [
        {
          label: "Venezuela",
          value: "290",
        },
        {
          label: "Saudi Arabia",
          value: "260",
        },
        {
          label: "Canada",
          value: "180",
        },
        {
          label: "Iran",
          value: "140",
        },
        {
          label: "Russia",
          value: "115",
        },
        {
          label: "UAE",
          value: "100",
        },
        {
          label: "United States",
          value: "30",
        },
        {
          label: "China",
          value: "30",
        },
      ];

      const chartConfigs = {
        type: "column2d",
        width: "700",
        height: "400",
        dataFormat: "json",
        dataSource: {
          chart: {
            caption: "Countries With Most Oil Reserves [2017–18]",
            subCaption: "In MMbbl = One Million Barrels",
            xAxisName: "Country",
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            theme: "fusion",
          },
          data: chartData,
        },
      };

      $(function () {
        $("#chart-container").insertFusionCharts(chartConfigs);
      });
    </script>
  </body>
</html>
```

Make sure the script files are loaded in this order:

1. jQuery
2. FusionCharts
3. Fusion theme
4. jQuery-FusionCharts plugin

The file paths in the `<script>` tags must match the actual locations of the downloaded files in your project.

## Troubleshooting

If your chart does not appear, open your browser’s developer tools and check the Console tab for the exact error message.

Also verify that:

- jQuery is loaded before the jQuery-FusionCharts plugin.
- The FusionCharts library and required chart modules are included.
- The Fusion theme is loaded before rendering the chart.
- The `chart-container` element exists in the HTML.
- The chart configuration contains valid JSON data.
- All npm packages were installed successfully.
- The Vite development server is running.

If you modify installed dependencies and the Vite application does not update correctly, stop the development server and run:

```javascript
npm run dev -- --force
```

If you are unable to resolve the issue, contact the [FusionCharts Support Team](mailto:support@fusioncharts.com).

That’s it! Your first chart using `jquery-fusioncharts` is ready.

## FAQs

### Can I customize FusionCharts in a jQuery application?
Yes. You can customize chart colors, fonts, labels, tooltips, legends, animations, themes, and other visual properties through the FusionCharts configuration object.

### Can I render different chart types using the jQuery plugin?
Yes. Change the `type` property in the chart configuration to a supported chart alias, such as `line`, `pie2d`, `bar2d`, or another FusionCharts chart type.

### Can I update chart data dynamically with jQuery?
Yes. You can use the jQuery-FusionCharts API and FusionCharts methods to update chart data and properties after the chart has been rendered.

### Can I export a chart from a jQuery application?
Yes. FusionCharts provides built-in export functionality for downloading charts in supported image and document formats.

### How do I troubleshoot a chart that is not rendering?
Check the browser console for errors and confirm that the required scripts are loaded in the correct order. You should also verify the chart container, configuration object, and supplied data.

### Does the jQuery-FusionCharts plugin work with Vite?
The plugin can be installed through npm and used in a Vite-based vanilla JavaScript project. Import and register FusionCharts, the chart module, the theme, and the jQuery plugin before rendering the chart.
