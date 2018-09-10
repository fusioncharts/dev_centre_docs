---
title: Your First Chart in Angular using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the angular-fusioncharts component.
heading: Create a Chart in Angular using FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **Angular** component which provides bindings for **FusionCharts**. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any **Angular** project. 

In this page, we'll see how to install FusionCharts and render a chart using the `angular-fusionCharts` component.

> Since, **Angular2** and onward do not support the direct `<script>` inclusion of files, `angular-fusioncharts` can only be used via `npm`.

In this page, we'll see how to install FusionCharts and render a chart using the `angular-fusionCharts` component.

## Installation

To install **FusionCharts** and the `angular-fusioncharts` component via `npm` follow the steps below:

**Step 1:** Install angular-fusioncharts

```
$ npm install angular-fusioncharts --save
```

**Step 2:** Install fusioncharts core library

```
$ npm install fusioncharts --save
```

That completes the installation of **FusionCharts** and the `angular-fusioncharts` component.

## Create your first chart

Let's create a Column 2D chart using the `angular-fusioncharts` component showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart.js %}

The data for the above chart is shown in the table below:

Country|No. of Oil Reserves||
-|-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format as shown below:

```json
{
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
```

Note: Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example,  [single-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts. 

In the above JSON data: 

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the `data` array.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the chart

To render the chart follow the steps below:

**Step 1:** In `app.module.ts` include the necessary files and add the dependency. 

* Import `angular-fusioncharts` in the root `@NgModule`.

* Import FusionCharts library in the root `@NgModule`.

* Import the chart type.

* Include the FusionCharts theme file to apply the style to the charts.

* Pass the `fusioncharts` library and chart modules.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='angular4'>Angular 4 onwards</a></li>
    <li><a data-toggle='angular2'>Angular 2</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab angular4-tab active'>

<pre><code class="custom-hlc language-javascript">
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import fusioncharts core in the root
import FusionCharts from 'fusioncharts/core';

// Import chart type
import Column2D from 'fusioncharts/viz/column2d'; // Column2D chart

// Import the fusion theme

import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'
// Pass the fusioncharts library and chart modules

FusionChartsModule.fcRoot(FusionCharts, Column2D);
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, 
        FusionChartsModule 
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab angular2-tab'>
<div class='mt-20'>For angular version 2.x.x, we cannot use 'fusioncharts/core' as it uses dynamic imports, which is not compatible with older version typescripts used by Angular 2.</div>
<pre><code class="custom-hlc language-javascript">
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts'; // Change fusioncharts/core to fusioncharts and use `*` as  syntax
import*  as Charts from 'fusioncharts/fusioncharts.charts'; // Contains all the charts under FusionCharts XT , Read below for details

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

**Step 2:** Add data to the angular `app.component.ts`

Set the JSON data within the `AppComponent` class as shown below:

> The below code is same for Angular older and latest versions.

```
import {Component} from '@angular/core';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    dataSource: Object;
    constructor() {
        this.dataSource = {
            chart: {
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
        }; // end of this.dataSource
    } // end of constructor
} // end of class AppComponent
```

**Step 3:** Now use `fusioncharts` component in `app.component.html`.

Create the chart container and define the following:

* Chart `width` and `height`

* Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

* Set the data source.

```
<h1>
  {{title}}
</h1>

<fusioncharts
    width="700" //chart width
    height="400" //chart height
    type="Column2d" // chart type
    [dataSource]="dataSource">
</fusioncharts> 

```
That's it! Your first chart using react-fusioncharts is ready

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.