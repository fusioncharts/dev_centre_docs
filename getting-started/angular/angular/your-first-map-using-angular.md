---
title: Create a Map in Angular using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first map using the angular-fusioncharts component.
heading: Create a Map in Angular using FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **Angular** component which provides bindings for **FusionCharts**. The `angular-fusioncharts` component allows you to easily add rich and interactive charts to any **Angular** project.

In this page, we'll see how to install FusionCharts and render a map using the `angular-fusionCharts` component.

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

## Create you First map

In this section, we will create a visualization using the **World Map** showing the average annual population growth.

{% embed_chart getting-started-your-first-map.js %}

## Map data

The data for the above map is represented in the table below:

| State         | Entity Name | Value |
| ------------- | ----------- | ----- |
| North America | NA          | 82    |
| South America | SA          | 2.04  |
| Asia          | AS          | 1.78  |
| Europe        | EU          | 40    |
| Africa        | AF          | 2.58  |
| Australia     | AU          | 1.30  |

In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column.

FusionCharts accepts data in **JSON** format in which the above entities are denoted by the `id` key in the `data` object.

For any map visualization, it is important to provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF` and not `AFR`.

We have a detailed [Map Specification Sheets](https://www.fusioncharts.com/dev/maps/spec-sheets/world) for all the maps that can be rendered using FusionCharts, where you can find the correct `id` of the maps you want to create.

Following code is the JSON representation of the above table with the required attributes to render the above map.

```JSON
{
    // Map Configuration
    "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1955-2015",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
    }]
}
```

In the above JSON data:

- Create the `chart` object to define the elements of the map.

- Create the `colorRange` array to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

- Create the `data` array to define the id of the continents and their corresponding values along with configurations. For example, the first object under `data` array contains the `id` and `value` of **North America** as **NA** and **.82** respectively.

The chart object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the map.

Now that you have the data in JSON format, let's learn how to render the map.

## Render the map

To render the chart follow the steps below:

**Step 1:** In `app.module.ts` include the necessary files and add the dependency.

- Import `angular-fusioncharts` in the root `@NgModule`.

- Import FusionCharts library in the root `@NgModule`.

- Import the map renderer file.

- Import the map type.

- Import the FusionCharts theme file to apply the style to the charts.

- Include the `ExcelExport` module to export chart data in XLSX format.

- Pass the `fusioncharts` library, map module, and the FusionTheme.

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
import * as FusionMaps from "fusioncharts/fusioncharts.maps";
import * as World from "fusionmaps/maps/fusioncharts.world";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Import the ExcelExport
import * as ExcelExport from "fusioncharts/features/excelexport";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(
  FusionCharts,
  FusionMaps,
  World,
  FusionTheme,
  ExcelExport
);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**Step 2**: Add data to the angular `app.component.ts`

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
        caption: "Average Annual Population Growth",
        subcaption: " 1955-2015",
        numbersuffix: "%",
        includevalueinlabels: "1",
        labelsepchar: ": ",
        entityFillHoverColor: "#FFF9C4",
        theme: "fusion"
      },
      // Aesthetics; ranges synced with the slider
      colorrange: {
        minvalue: "0",
        code: "#FFE0B2",
        gradient: "1",
        color: [
          {
            minvalue: "0.5",
            maxvalue: "1.0",
            color: "#FFD74D"
          },
          {
            minvalue: "1.0",
            maxvalue: "2.0",
            color: "#FB8C00"
          },
          {
            minvalue: "2.0",
            maxvalue: "3.0",
            color: "#E65100"
          }
        ]
      },
      // Source data as JSON --> id represents countries of world.
      data: [
        {
          id: "NA",
          value: ".82",
          showLabel: "1"
        },
        {
          id: "SA",
          value: "2.04",
          showLabel: "1"
        },
        {
          id: "AS",
          value: "1.78",
          showLabel: "1"
        },
        {
          id: "EU",
          value: ".40",
          showLabel: "1"
        },
        {
          id: "AF",
          value: "2.58",
          showLabel: "1"
        },
        {
          id: "AU",
          value: "1.30",
          showLabel: "1"
        }
      ]
    };
  }
}
```

**Step 3**: Now use fusioncharts component in `app.component.html`

Create the map container and set the following:

- Map `width` and `height`.

- The map type as `world`. Each map type is represented with a unique alias. For World map, the alias is `world`. Find the complete list of map types with their respective alias [here](https://www.fusioncharts.com/dev/map-guide/list-of-maps).

- The data source.

```HTML
<h1>
  {{title}}
</h1>
<fusioncharts
    width="800"
    height="550"
    type="world"
    [dataSource]="dataSource">
</fusioncharts>
```

That's it! Your first map using `angular-fusioncharts` is ready.

## Render other maps

To reduce the size of the package FusionCharts comes with only two maps, i.e., the World map and the USA map. However, FusionCharts provide 1600+ maps for you to explore. Download the map files separately if you want to save them locally.

Let's create a map of California to show the "Web visits for a particular month" as shown below:

{% embed_chart getting-started-your-first-map-california.js %}

To render the above map, first install `fusionmaps` package which contains all the map definition files as shown below:

```bash
$ npm install fusionmaps
```

After installing fusionmaps package, follow the steps to render the map:

**Step 1:** In `app.module.ts` include the necessary files and add the dependency.

- Import `angular-fusioncharts` in the root `@NgModule`.

- Import FusionCharts library in the root `@NgModule`.

- Import the map renderer file.

- Import the map type.

- Import the FusionCharts theme file to apply the style to the charts.

- Include the `ExcelExport` module to export chart data in XLSX format.

- Pass the `fusioncharts` library, map module, and the FusionTheme.

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
import * as FusionMaps from "fusioncharts/fusioncharts.maps";
import * as California from "fusionmaps/maps/fusioncharts.california";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Import the ExcelExport
import * as ExcelExport from "fusioncharts/features/excelexport";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(
  FusionCharts,
  FusionMaps,
  California,
  FusionTheme,
  ExcelExport
);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**Step 2**: Add data to the angular `app.component.ts`

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
        animation: "0",
        showbevel: "0",
        usehovercolor: "1",
        canvasbordercolor: "FFFFFF",
        bordercolor: "FFFFFF",
        showlegend: "1",
        legendposition: "BOTTOM",
        legendborderalpha: "0",
        legendbordercolor: "ffffff",
        legendallowdrag: "0",
        legendshadow: "0",
        caption: "Website Visits for the month of March 2018",
        connectorcolor: "000000",
        fillalpha: "80",
        hovercolor: "CCCCCC",
        showborder: 0,
        theme: "fusion"
      },
      colorrange: {
        minvalue: "0",
        startlabel: "Low",
        endlabel: "High",
        code: "e44a00",
        gradient: "1",
        color: [
          { maxvalue: "2500", code: "f8bd19" },
          { maxvalue: "5000", code: "6baa01" }
        ]
      },
      data: [
        { id: "001", value: 2834 },
        { id: "003", value: 3182 },
        { id: "005", value: 3280 },
        { id: "007", value: 911 },
        { id: "009", value: 292 },
        { id: "011", value: 530 },
        { id: "013", value: 2515 },
        { id: "015", value: 728 },
        { id: "017", value: 1974 },
        { id: "019", value: 848 },
        { id: "021", value: 3278 },
        { id: "023", value: 4463 },
        { id: "025", value: 1198 },
        { id: "027", value: 378 },
        { id: "029", value: 2610 },
        { id: "031", value: 1200 },
        { id: "033", value: 3820 },
        { id: "035", value: 940 },
        { id: "037", value: 3416 },
        { id: "039", value: 4004 },
        { id: "041", value: 1604 },
        { id: "043", value: 4011 },
        { id: "045", value: 3203 },
        { id: "047", value: 3775 },
        { id: "049", value: 2721 },
        { id: "051", value: 3417 },
        { id: "053", value: 1530 },
        { id: "055", value: 412 },
        { id: "057", value: 3434 },
        { id: "059", value: 1670 },
        { id: "061", value: 1274 },
        { id: "063", value: 4339 },
        { id: "065", value: 2073 },
        { id: "067", value: 1018 },
        { id: "069", value: 3967 },
        { id: "071", value: 3401 },
        { id: "073", value: 3307 },
        { id: "075", value: 1938 },
        { id: "077", value: 489 },
        { id: "079", value: 3207 },
        { id: "081", value: 2295 },
        { id: "083", value: 2747 },
        { id: "085", value: 1114 },
        { id: "087", value: 3400 },
        { id: "089", value: 784 },
        { id: "091", value: 1673 },
        { id: "093", value: 4274 },
        { id: "095", value: 4509 },
        { id: "097", value: 3862 },
        { id: "099", value: 1356 },
        { id: "101", value: 4126 },
        { id: "103", value: 1314 },
        { id: "105", value: 1807 },
        { id: "107", value: 4026 },
        { id: "109", value: 3456 },
        { id: "111", value: 1393 },
        { id: "113", value: 1500 },
        { id: "115", value: 2218 }
      ]
    };
  }
}
```

**Step 3**: Now use fusioncharts component in `app.component.html`.

Create the chart container and set the following:

- Chart `width` and `height`.

- The map type as `california`. Each map type is represented with a unique map alias. For California map, the alias is `california`. Find the complete list of map types with their respective alias [here](https://www.fusioncharts.com/dev/map-guide/list-of-maps).

- The data source.

```HTML
<h1>
  {{title}}
</h1>
<fusioncharts
    width="800"
    height="550"
    type="california"
    [dataSource]="dataSource">
</fusioncharts>
```

That's it! The **California** map is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
