---
title: Create a Chart in Angular Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the angular-fusioncharts component.
heading: Create a Chart in Angular Using FusionCharts
author: sowmya
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight Angular component which provides bindings for FusionCharts. The `angular-fusioncharts` component allows you to easily add rich and interactive charts to any Angular project.

On this page, we'll see how to install FusionCharts and render a chart using the `angular-fusionCharts` component.

> The instructions shown here are for **Angular2** and above. For **Angular v1.7** and below, refer to the [AngularJS](https://www.fusioncharts.com/dev/getting-started/angular/angularjs/your-first-chart-using-angularjs) guide.

## Prerequisite

You need to have a Angular project setup before proceeding any further. If not, you can follow the below steps to initiate the project.

Angular requires Node.js and NPM installed in your machine. Please check it by running `node -v` and `npm -v` respectively. To get Node.js, go to the [official website](https://nodejs.org/en/).

One of the best ways to set up the development environment is using `angular-cli`. Find more about it [here](https://angular.io/guide/setup-local). Install the `angular-cli` with the following command

```javascript
npm install -g @angular/cli
```

Open the terminal, go ahead and enter:

```javascript
ng new first-fusioncharts-project
cd first-fusioncharts-project
ng serve --open
```

- Angular requires Node.js and NPM installed your machine. Please check it by running `node -v` and `npm -v` respectively. If either of them returns command not found, then please go to [Node.js](https://nodejs.org/) website to install it properly.

`first-fusioncharts-project` is the working directory where an Angular app will be installed along with all the utilities and dependencies.

Now, open [http://localhost:4200/](http://localhost:4200/) to see your Angular app.

## Installation and Including Dependencies

You can install the `fusioncharts` components by following any of the methods below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
    <li><a data-toggle='npm'>NPM</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<div>To install the <strong>FusionCharts</strong> Suite follow the steps below:</div>
<div>
    <ol>
        <li>Include the <strong>FusionCharts</strong> JavaScript files from CDN in your static <strong>HTML</strong> file.</li>
        <li>Include the theme file.</li>
    </ol>
</div>
<div>The code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Include the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Step 2 - Include the fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<div><strong>To install the <strong>FusionCharts</strong> Suite follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the <strong>FusionCharts</strong> JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</li>
        <li>Include the FusionCharts theme file to apply style to the charts.</li>
    </ol>
</div>
<div>The code that goes into your static <strong>HTML</strong> file is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Include the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Include the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab npm-tab'>
<div><strong>Create a project folder using the following command:</strong></div>
<pre><code class="language-bash">
$ mkdir projectName
$ cd projectName
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

Install the angular-fusioncharts and fusioncharts modules by the following command

```javascript
npm install fusioncharts angular-fusioncharts --save
```

After installing the fusioncharts components, you can replace the code in `src/app/app.module.ts` file with the consolidated code shown below to create your first chart. Import all the required dependencies in `@NgModule` to get started.

```javascript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along x-axis and 'No. of oil reserves' as **data values** along y-axis. Let us prepare the data for a single-series chart.

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
// Chart Configuration
const dataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
    subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
    xAxisName: "Country", //Set the x-axis name
    yAxisName: "Reserves (MMbbl)", //Set the y-axis name
    numberSuffix: "K",
    theme: "fusion" //Set the theme for your chart
  },
  // Chart Data - from step 2
  data: chartData
};
```

> The `type` attribute in the chartConfigs object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

## Render the chart

Get ready to render your first chart finally with the steps below:

Specify the chart data within the AppComponent class in `src/app/app.component.ts` file in your root project folder.

```javascript
// STEP 1- To import the dependencies
import { Component } from "@angular/core";
// STEP 2- Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
      { "label": "Q1" },
      { "label": "Q2" },
      { "label": "Q3" },
      { "label": "Q4" }
    ]
  }
]
// STEP 3- Construct the dataset comprising multiple series
const dataset = [
  {
    "seriesname": "Previous Year",
    "data": [
      { "value": "12000" },
      { "value": "10500" },
      { "value": "23500" },
      { "value": "16000" }
    ]
  },
  {
    "seriesname": "Current Year",
    "data": [
      { "value": "24400" },
      { "value": "29800" },
      { "value": "20800" },
      { "value": "26800" }
    ]
  }
]

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"

})


export class AppComponent {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      "chart": {
        "theme": "fusion",
        "caption": "Comparison of Quarterly Revenue",
        "xAxisname": "Quarter",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "plotFillAlpha": "80",
        "divLineIsDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1"
      },
      "categories": categories,
      "dataset": dataset,

    }; // end of this.dataSource
  } // end of constructor
} // end of class AppComponent
```

Now using the fusioncharts component create the chart container in `app.component.html` and set the `width`, `height`, `type` attributes as shown.

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

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `angular-fusioncharts` is ready.
