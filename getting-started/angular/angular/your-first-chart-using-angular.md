---
title: Create a Chart in Angular Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the angular-fusioncharts component.
heading: Create a Chart in Angular Using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight Angular component which provides bindings for FusionCharts. The `angular-fusioncharts` component allows you to easily add rich and interactive charts to any Angular project.

On this page, we'll see how to install FusionCharts and render a chart using the `angular-fusionCharts` component.

## Prerequisite

Before you begin, make sure your development environment includes `Node.js` and an `npm package manager`.

- Angular requires Node.js version 10.9.0 or later. To check your version, run `node -v` in a terminal/console window. To get Node.js, go to [nodejs.org](https://nodejs.org/).

- To download and install npm packages, you must have an npm package manager. run `npm -v` in a terminal/console window, to check that if have the npm client installed.

Follow the steps mentioned [here](https://angular.io/guide/setup-local) to initiate the project using Angular CLI.

## Installation and Including Dependencies

Install the angular-fusioncharts and fusioncharts modules by the following command

```javascript
npm install fusioncharts angular-fusioncharts --save
```

After installing the fusioncharts components, you can replace the code in `app.module.ts` file with the code shown in the steps below to create your first chart. Import all the required dependencies to get started.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

*//import { AppRoutingModule } from './app-routing.module';*
import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';

*// Import FusionCharts library and chart modules*
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

*// Pass the fusioncharts library and chart modules*
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
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

## Configure your Chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

```javascript
// Create the datasource
    this.dataSource = {

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

Understand more about your chart and its components [here](https://www.fusioncharts.com/dev/understanding-fusioncharts).

## Render the chart

Get ready to render your first chart finally with the steps below:

**Step 1**: In `app.module.ts` include the necessary files and import the fusioncharts dependency in `@NgModule`. The consolidated code is shown below:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';

*// Import FusionCharts library and chart modules*
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

*// Pass the fusioncharts library and chart modules*

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**Step 2**: Specify the chart data within the AppComponent class in `app.component.ts` file.

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
      *// Chart Data*
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
        }, {
          label: "Iran",
          value: "140"
        }, {
          label: "Russia",
          value: "115"
        }, {
          label: "UAE",
          value: "100"
        }, {
          label: "US",
          value: "30"
        }, {
          label: "China",
          value: "30"
        }
      ]
    }; *// end of this.dataSource*
  } *// end of constructor*
} *// end of class AppComponent*
```

**Step 3**: Now using the fusioncharts component create the chart container in `app.component.html` and set the `width`, `height`, `type` attributes as shown.

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

## See your Chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click here to get in touch with our support team.

That's it! Your first chart using `angular-fusioncharts` is ready.
