---
title: Create a Gauge in Angular Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the angular-fusioncharts component.
heading: Create a Gauge in Angular Using FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **Angular** component which provides bindings for **FusionCharts**. The `angular-fusioncharts` component allows you to easily add rich and interactive charts to any **Angular** project.

In this page, we'll see how to install FusionCharts and render a chart using the `angular-fusionCharts` component.

> Since, **Angular2** and onward do not support the direct `<script>` tags, `angular-fusioncharts` can only be used via `npm`.

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

## Create your First gauge

Gauges are powerful tools that can showcase information using a radial scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range  | Color  | Hex Code |
| ------ | ------ | -------- |
| 0-50   | Red    | #F2726F  |
| 50-75  | Yellow | #FFC533  |
| 75-100 | Green  | #62B58F  |

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Nordstrom's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  // Chart Data
  "colorRange": {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
}
```

In the above JSON:

- Create the `chart` object to define the elements of the gauge.

- Create the `colorRange` object to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

- Set the `code` attribute to specify the hex color of respective ranges.

- Create the `dials` object to represent the customer satisfaction score.

- Create the `dial` object under `dials` object to set the value of customer satisfaction score.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Gauge

To render the gauge follow the steps below:

**Step 1:** In 'app.module.ts` include the necessary files and add the dependency.

- Import **angular-fusioncharts** in the root `@NgModule`.

- Import FusionCharts library in the root `@NgModule`.

- Import the gauge type.

- Include the FusionCharts theme file to apply the style to the gauge.

- Pass the `fusioncharts` library, gauge module and the theme.

The consolidated code is shown below:

```javascript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Widgets from "fusioncharts/fusioncharts.widgets";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**Step 2:** Add data to the angular `app.component.ts`

Set the JSON data within the `AppComponent` class as shown below:

> The code below is same for Angular older and latest versions.

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
        caption: "Nordstrom's Customer Satisfaction Score for 2017",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "%",
        theme: "fusion",
        showToolTip: "0"
      },
      // Gauge Data
      colorRange: {
        color: [
          {
            minValue: "0",
            maxValue: "50",
            code: "#F2726F"
          },
          {
            minValue: "50",
            maxValue: "75",
            code: "#FFC533"
          },
          {
            minValue: "75",
            maxValue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "81"
          }
        ]
      }
    }; // end of this.dataSource
  } // end of constructor
} // end of class AppComponent
```

**Step 3:** Now use fusioncharts component in `app.component.html`

Create the container to render the gauge and set the following:

- Gauge `width and height`

- Gauge type as `angulargauge`. Each gauge type is represented with a unique alias. For Angualar Gauge, the alias is `angulargauge`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

- The data source.

```html
<h1>
  {{title}}
</h1>
<fusioncharts
  width="450"
  height="250"
  type="AngularGauge"
  [dataSource]="dataSource"
>
</fusioncharts>
```

That's it! Your first gauge using `angular-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
