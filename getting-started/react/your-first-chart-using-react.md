---
title: Build Interactive ReactJS Charts with FusionCharts
description: Want to create stunning, interactive charts in your ReactJS apps? Learn how to easily integrate FusionCharts with clear step-by-step instructions today!
heading: Create a Chart in React using FusionCharts
---

## Introduction

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps, and dashboards. The lightweight `react-fusioncharts` component provides React bindings for FusionCharts, making it easy to add rich and interactive data visualizations to React applications.

In this tutorial, you will create a React application with Vite, install FusionCharts, configure the required dependencies, and render a Column 2D chart using a functional React component.

## Create a React Project with Vite

Before adding FusionCharts, create a React project using Vite, a modern build tool that provides a fast development environment.

Open a terminal and run:

```javascript
npm create vite@latest first-fusioncharts-project -- --template react
```

When prompted to choose a linter, select your preferred option. ESLint is a suitable choice for most React projects.

Navigate to the project directory:

```javascript
cd first-fusioncharts-project
```

Install the project dependencies:

```javascript
npm install
```

Start the development server:

```javascript
npm run dev
```

`first-fusioncharts-project` is the working directory in which Vite creates the React project and its required files.

After the development server starts, open the local URL displayed in the terminal, typically:

```javascript
http://localhost:5173
```

You should see the default Vite and React application, confirming that the project has been created successfully.

## Install FusionCharts and React-FusionCharts

Install the `fusioncharts` and `react-fusioncharts` packages:

```javascript
npm install fusioncharts react-fusioncharts
```

After installing the packages, configure Vite and import the required FusionCharts dependencies.

## Configure Vite for React-FusionCharts

The `react-fusioncharts` package uses the CommonJS module format. In some Vite versions, this can cause a CommonJS and ES module interoperability issue that produces the following error:

```javascript
ReactFC.fcRoot is not a function
```

To prevent this issue, configure Vite to pre-bundle the `react-fusioncharts` and `fusioncharts` packages.

Open `vite.config.js` in the project root and replace its contents with:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-fusioncharts", "fusioncharts"],
  },
});
```

After updating the configuration, stop the development server by pressing `Ctrl + C`.

Clear Vite’s dependency cache:

```javascript
rm -rf node_modules/.vite
```

Then restart the development server and force Vite to rebuild the optimized dependencies:

```javascript
npm run dev -- --force
```

## Include the Required Dependencies

Open `src/App.jsx` and import the React-FusionCharts component, the FusionCharts library, the chart module, and the Fusion theme:

```javascript
// Step 1 - Include the required dependencies

// Include the React-FusionCharts component
import ReactFusionCharts from "react-fusioncharts";

// Include the FusionCharts library
import FusionCharts from "fusioncharts";

// Include the charts module
import Charts from "fusioncharts/fusioncharts.charts";

// Include the Fusion theme
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
```

To handle possible CommonJS and ES module interoperability differences, create a reference to the React-FusionCharts component using a defensive fallback:

```javascript
const ReactFC =
  ReactFusionCharts.default || ReactFusionCharts;
```

Next, register the charts module and theme with FusionCharts:

```javascript
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
```

The complete dependency section should look like this:

```javascript
// STEP 1 - Include the required dependencies

import ReactFusionCharts from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const ReactFC =
  ReactFusionCharts.default || ReactFusionCharts;

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
```

## Preparing the Chart Data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in the tabular form below.

| Country       | No. of Oil Reserves |
| ------------- | ------------------- |
| Venezuela     | 290K                |
| Saudi Arabia  | 260K                |
| Canada        | 180K                |
| Iran          | 140K                |
| Russia        | 115K                |
| UAE           | 100K                |
| United States | 30K                 |
| China         | 30K                 |

Because the chart displays a single dataset, you can use a Column 2D chart. The countries appear as labels along the x-axis, while their oil reserves appear as values along the y-axis.

FusionCharts accepts chart data in JSON format. Add the following array to `src/App.jsx`:

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

## Configure the chart

Create a configuration object that defines the chart type, dimensions, data format, chart properties, and data:

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
- `width` and `height` define the chart dimensions.
- `dataFormat` specifies the format of the supplied data.
- `dataSource` contains the chart settings and data.
- `theme` applies the Fusion theme.

The `column2d` value tells FusionCharts to render a Column 2D chart. You can replace it with another supported chart alias to render a different [chart type](/chart-guide/list-of-charts).

## Render the chart

Create a functional React component and pass the chart configuration to the ReactFC component:

```
// STEP 4 - Render the chart

function App() {
  return <ReactFC {...chartConfigs} />;
}

export default App;
```

## Complete src/App.jsx Code

Replace the contents of `src/App.jsx` with the following code:

```javascript
// STEP 1 - Include the required dependencies

import ReactFusionCharts from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const ReactFC =
  ReactFusionCharts.default || ReactFusionCharts;

// Register the charts module and theme with FusionCharts
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

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

// STEP 4 - Render the chart using a functional component

function App() {
  return <ReactFC {...chartConfigs} />;
}

export default App;
```

## View the chart

Ensure the development server is running:

```javascript
npm run dev
```

Open the local URL displayed in the terminal, typically:

```javascript
http://localhost:5173
```

You should now see the Column 2D chart showing the oil reserves for each country.

Your first React chart using FusionCharts is now ready.

{% embed_chart getting-started-your-first-chart.js %}

## Troubleshooting

If you encounter a JavaScript error while running the application, open your browser's developer tools and check the **Console** tab for the exact error message.

If you're using **Vite** and receive the following error:

```javascript
ReactFC.fcRoot is not a function
```

Make sure you have:

- Added the `optimizeDeps.include` configuration to your `vite.config.js` file.
- Configured the defensive import for `react-fusioncharts` as described in this tutorial.
- Cleared Vite's dependency cache and restarted the development server using:

```javascript
rm -rf node_modules/.vite
npm run dev -- --force
```


If you're unable to resolve the issue, please contact the FusionCharts [Support Team](mailto:support@fusioncharts.com).

That's it! Your first chart using `react-fusioncharts` is ready.

## Enhance Your React Applications with FusionCharts

FusionCharts makes it easy to build interactive, responsive, and visually appealing charts in React applications. With the lightweight **react-fusioncharts** component, you can seamlessly integrate over 100 chart types, maps, and specialized visualizations into your projects.

FusionCharts provides powerful features, including:

- Extensive chart customization.
- Interactive tooltips and drill-down capabilities.
- Built-in exporting to PNG, JPEG, SVG, and PDF.
- Responsive layouts.
- Cross-browser compatibility.
- Rich themes and styling options.

Whether you're building dashboards, business intelligence applications, or data-driven web apps, FusionCharts helps you transform raw data into meaningful visual insights.

Explore FusionCharts and discover how you can build beautiful data visualizations with minimal effort.

## Transform Your React Projects with FusionCharts

Ready to build interactive charts in your React applications?

Explore the FusionCharts documentation, examples, and API reference to learn more about creating powerful data visualizations.

**Next steps:**

- Browse all available chart types.
- Learn about chart customization options.
- Explore advanced features such as drill-down, real-time charts, annotations, exporting, and events.
- Build interactive dashboards for your React applications.

[Get started with FusionCharts today](https://resources.fusioncharts.com/download-free-trial/).


## FAQs

### Can I customize the appearance of FusionCharts in my React application?
Yes. FusionCharts provides extensive customization options, allowing you to modify colors, fonts, themes, labels, tooltips, legends, animations, and many other visual elements to match the design of your React application.

### Can I export FusionCharts as images or PDFs from my React application?
Yes. FusionCharts includes built-in export functionality that allows users to export charts as PNG, JPEG, SVG, or PDF files directly from the browser with minimal configuration.

### How do I troubleshoot JavaScript errors with FusionCharts?
Start by checking your browser's developer console for the exact error message.

If you're using Vite and encounter the error:

```javascript
ReactFC.fcRoot is not a function
```

Follow the Vite configuration steps described in this tutorial to resolve the CommonJS and ES module interoperability issue.

For additional help, refer to the [FusionCharts documentation](https://www.fusioncharts.com/dev/) or contact the [FusionCharts Support Team](mailto:support@fusioncharts.com).

### Can I integrate FusionCharts with state management libraries like Redux?
Yes. FusionCharts works seamlessly with React state management libraries such as Redux, Context API, Zustand, MobX, and others. You can dynamically update chart data and configuration based on your application's state.

### Is FusionCharts compatible with React 19 and Vite?
Yes. FusionCharts works with React 19 and Vite. If you're using newer versions of Vite, configure the `optimizeDeps.include` option as shown in this guide to ensure proper compatibility with the `react-fusioncharts` package.
