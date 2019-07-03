---
title: Create a Chart in Angular Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the angular-fusioncharts component.
heading: Create a Chart in Angular Using FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **Angular** component which provides bindings for **FusionCharts**. The `angular-fusioncharts` component allows you to easily add rich and interactive charts to any **Angular** project.

In this page, we'll see how to install FusionCharts and render a chart using the `angular-fusionCharts` component.

## Installation

To install **FusionCharts** and the `angular-fusioncharts` component via `npm` follow the steps below:

**Step 1:** Install `angular-fusioncharts`

```bash
$ npm install angular-fusioncharts --save
```

**Step 2:** Install fusioncharts core library

```bash
$ npm install fusioncharts --save
```

That completes the installation of **FusionCharts** and the `angular-fusioncharts` component.

## Create Your First Chart

Let's create a Column 2D chart using the `angular-fusioncharts` component showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart.js %}

To understand the chart components, click [here](/understanding-fusioncharts).

## Chart Data

The data to render the above chart is shown in the table below:

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

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
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
  "data": [
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
  ]
}
```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, such as [single-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts.

In the above JSON data:

- Create the `chart` object to define the elements of the chart.

- Set the `caption` and `subcaption` of the chart.

- Set the value of `xAxisName` attribute to **Country**(first column of the table).

- Set the value of `yAxisName` attribute to **Reserves**(second column of the table).

- In the `data` array, create objects for each row and specify the `label` attribute to represent the Country. For example, **Venezuela**.

- Similarly, specify the `value` attribute to set the value of Oil Reserves in respective countries. For example, **290K** for **Venezuela**.

- Set the `numberSuffix` attribute to set the unit of the values.

- Set the `theme` attribute to apply the predefines themes to the chart.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Chart

To render the chart follow the steps below:

**Step 1:** In `app.module.ts` include the necessary files and add the dependency.

- Import `angular-fusioncharts` in the root `@NgModule`.

- Import FusionCharts library in the root `@NgModule`.

- Import the chart type.

- Include the FusionCharts theme file to apply style to the charts.

- Pass the `fusioncharts` library and chart modules.

The consolidated code is shown below:

```javascript
// Setup needed in app.module.ts
import { NgModule, enableProdMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FusionChartsModule } from "angular-fusioncharts";

// Load FusionCharts
import FusionCharts from "fusioncharts/core";

// Load Charts module
import Column2d from "fusioncharts/viz/column2d";

// Load fusion theme
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Column2d, FusionTheme);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

To include the specific chart types, individually add the following files using `import`:

- PowerCharts - `fusioncharts/fusioncharts.powercharts`
- Widgets - `fusioncharts/fusioncharts.widgets`
- Gantt - `fusioncharts/fusioncharts.gantt`
- Treemap - `fusioncharts/fusioncharts.treemap`
- Zoomscatter - `fusioncharts/fusioncharts.zoomscatter`
- Zoomline - `fusioncharts/fusioncharts.zoomline`
- Overlapped Bar - `fusioncharts/fusioncharts.overlappedbar2d`
- Overlapped Column - `fusioncharts/fusioncharts.overlappedcolumn2d`

**Step 2:** Add data to the angular `app.component.ts`

Set the JSON data within the `AppComponent` class as shown below:

> The code given below is the same for both the latest and the older versions of Angular.

```javascript
import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
      },
      // Chart Data
      data: [
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
      ]
    }; // end of this.dataSource
  } // end of constructor
} // end of class AppComponent
```

**Step 3:** Now use `fusioncharts` component in `app.component.html`.

Create the chart container and set the following:

- Chart `width` and `height`

- Chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

- The data source.

```html
<h1>
  {{title}}
</h1>
<fusioncharts
  width="700"
  height="400"
  type="Column2d"
  [dataSource]="dataSource"
>
</fusioncharts>
```

That's it! Your first chart using `angular-fusioncharts` is ready.

## Problem Rendering the Chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
