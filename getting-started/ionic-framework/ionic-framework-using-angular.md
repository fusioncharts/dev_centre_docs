---
title: Ionic Angular | FusionCharts
description: This article outlines the steps to create your chart in ionic framework with Angular.
heading: Ionic Angular
---

FusionCharts is a JavaScript charting library that allows you to create interactive charts, gauges, maps, and dashboards in JavaScript. Ionic is an open source framework used for developing mobile applications. It provides tools and services for building Mobile UI with a native look and feel. Ionic framework needs native wrapper to be able to run on mobile devices. We have built a simple and lightweight Angular component, which provides bindings for FusionCharts in Ionic Framework. The `angular-fusioncharts` component allows you to easily add rich and interactive charts to any Ionic Framework Project.

On this page, we'll see how to install FusionCharts and render a chart using the `angular-fusioncharts` component in Ionic Framework.

## Prerequisite

You need to have Ionic installed before proceeding any further. If not, you can follow the steps below.

Ionic requires both `Node.js` and `NPM` to be installed in your machine. You can check it by running the following commands in the terminal:

```shell
node -v
npm -v
```

To get Node.js (if not installed), you can go to the [official website](https://nodejs.org/en/) and get it. Enter the following command to install ionic.

```shell
$ npm install -g ionic
```

Now that Ionic is installed, let's set up an **Ionic** project. Follow the steps mentioned below:

```shell
$ ionic start myApp tabs --type angular
$ cd myApp
```

Start the development server by the entering the following command:

```shell
$ ionic serve
```

Now, open [http://localhost:8100](http://localhost:8100) to see your Ionic app.

## Installing and Including Dependencies

Install `angular-fusioncharts` and fusioncharts modules by the following command:

```shell
$ npm install fusioncharts angular-fusioncharts
```

After the installation, enter the following command to create an angular component to use fusioncharts. It will create a new folder named as `chart` inside `MyApp` directory.

```shell
$ ionic generate component chart
```

Create a new file called `**chart.module.ts` in the **chart** folder and add the consolidated code shown below to this file. Import all the required dependencies in `@NgModule` to get started.

```javascript
// chart.module.ts
import { NgModule } from "@angular/core";
// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";
// Import FusionCharts library
import * as FusionCharts from "fusioncharts";

// Load FusionCharts Individual Charts
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ChartComponent } from "./chart.component";

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [ChartComponent],
  imports: [
    FusionChartsModule // Include in imports
  ],
  exports: [ChartComponent]
})
export class ChartModule {}
```

Open the `tab1.module.ts` file present inside the **tab1** folder and add the following code to it. The tab module will now import `**ChartModule**`.

```javascript
// tab1.module.ts
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ChartModule } from "../chart/chart.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChartModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
```

## Preparing the Data

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

Since we are plotting a single dataset, let us create a column 2D chart with `countries` as data labels along X-axis and `No. of oil reserves` as data values along Y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in **JSON** format. So the above data in the tabular form will take the structure given below:

```javascript
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

Now that the data is ready, let's work on the styling, positioning and giving your chart a context. Now, we add the chart attributes in the `chart.component.ts` file.

```javascript
const chartConfigs = {
  caption: "Countries With Most Oil Reserves [2017-18]", //caption of the chart
  subCaption: "In MMbbl = One Million barrels", //sub-caption of the chart
  xAxisName: "Country", //x-axis name of the chart
  yAxisName: "Reserves (MMbbl)", //y-axis name of the chart
  numberSuffix: "K",
  theme: "fusion" //applying a theme for the chart
};
```

Define the height, width, type attributes of the chart using the `fusioncharts` component in `chart.component.html` file. Refer to the code given below.

```html
<p>
  chart works!
</p>
<fusioncharts
  width="600"
  height="350"
  type="Column2D"
  dataFormat="JSON"
  [dataSource]="dataSource"
></fusioncharts>
```

The `type` attribute in the `chartConfigs` object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](/dev/chart-guide/list-of-charts).

## Render Your Chart

Now, get ready to render your first chart by following the steps below:

The `chartData` and the `chartConfigs` objects created above will now go into the `chart.component.ts` file. Its consolidated code is shown below:

```javascript
// chart.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chart-container",
  templateUrl: "chart.component.html",
  styleUrls: ["chart.component.scss"]
})
export class ChartComponent implements OnInit {
  dataSource: object;
  constructor() {
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
    const chartConfigs = {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    };
    this.dataSource = {
      chart: chartConfigs,
      data: chartData
    };
  }
  ngOnInit() {}
}
```

Define the chart-container component in the tab1.page.html file present in the tab1 folder. Refer to the code below:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      Tab One
    </ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <chart-container></chart-container>
</ion-content>
```

## See Your Chart

With all the code in place and the development server running, open [http://localhost:8100](http://localhost:8100) and you'll be able to see the chart, as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `angular-fusioncharts` in Ionic Framework is ready
