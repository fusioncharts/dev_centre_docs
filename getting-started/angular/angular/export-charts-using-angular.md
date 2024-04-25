---
title: Exporting Charts | FusionCharts
description: Dive into our comprehensive article and learn how to export charts in various formats using the angular-fusioncharts component with FusionCharts Suite XT.
heading: Exporting Charts
---

FusionCharts Suite XT uses JavaScript to render charts in the browser using SVG and VML. A prominent feature of the suite is the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. This article focuses on how you can export charts using `angular-fusioncharts` component.

In this section we will discuss how to:

- [Export Charts as Image and PDF](/getting-started/angular/angular/export-charts-using-angular#export-charts-as-image-and-pdf)
- [Export Multiple Charts](/getting-started/angular/angular/export-charts-using-angular#export-multiple-charts)
- [Modes of Export](/getting-started/angular/angular/export-charts-using-angular#modes-of-export)
- [Export Chart Data in XLSX Format](/getting-started/angular/angular/export-charts-using-angular#export-chart-data-in-xlsx-format)

## Export Charts as Image and PDF

A server-side helper library enables export by conveting the SVG to the required format. You can also export VML as it is converted to SVG internally before exporting. During the export process, the data to be exported is first sent to the FusionCharts servers to be processed, finally generating the output in the required format.

When charts are exported on the client side, the entire exporting process is carried out using the user’s browser. The chart’s SVG is converted into the selected export format and download using the HTML5 `download` attribute.

> You must have an active internet connection for this feature to work.

To enable chart exporting, the `chart` level attribute `exportEnabled` is set to **1**. The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over this button to see the dropdown menu with export options, as shown in the image below:

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

From the menu rendered, select the required format. The chart is downloaded to your machine in the selected format.

A column 2D chart with export enabled is shown below. Click the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the required export format.

{% embed_chartData exporting-as-image-and-pdf-introduction-example-1.js json %}

In this step, we will import the `FusionCharts` module into the root `@NgModule` to create the **Column 2D** chart. The code is given below:

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

In the above code:

1. Include the necessary libraries and components using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Load FusionCharts, chart module and the `fusion` theme.

3. Add dependencies to `FusionChartsModule`.

> The `<fusioncharts></fusioncharts>` component is available for use in any component throughout your app.

### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```
// In app.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    dataSource: Object;
    chartConfig: Object;

    constructor() {
         this.chartConfig = {
            width: '700',
            height: '400',
            type: 'column2d',
            dataFormat: 'json',
        };

        this.dataSource = {
            "chart": {
              "caption": "Countries With Most Oil Reserves [2017-18]",
              "subCaption": "In MMbbl = One Million barrels",
              "xAxisName": "Country",
              "yAxisName": "Reserves (MMbbl)",
              "numberSuffix": "K",
              "theme": "fusion",
              "exportEnabled": "1"
            },
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
          };
    }
}
```

In the above code:

1. Add the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height of the chart in pixels.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.

3. Create a `fusioncharts` directive to render the chart.

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts
    [chartConfig]=chartConfig
    [dataSource]=dataSource >
</fusioncharts>
```

In the above code create a `fusioncharts` directive in a template.

## Export Multiple Charts

FusionCharts lets you export multiple charts in a single image at once, in different formats. In the sample given below, we have two charts-Column2D and Stacked Column2D chart.

<div  style="background-color: #ffffff;">
<p>{% embed_chart exporting-as-image-and-pdf-introduction-example-3.js %}</p>
<p>{% embed_chart exporting-as-image-and-pdf-introduction-example-4.js %}</p>
</div>

In this step, we will import the `FusionCharts` module into the root `@NgModule` to create the **Column 2D** chart. The code is given below:

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
import StackedColumn2d from "fusioncharts/viz/stackedcolumn2d";

// Load fusion theme
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(
  FusionCharts,
  Column2d,
  StackedColumn2d,
  FusionTheme
);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

In the above code:

1. Include the necessary libraries and components using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Load FusionCharts, chart module and the `fusion` theme.

3. Add dependencies to `FusionChartsModule`.

> The `<fusioncharts></fusioncharts>` component is available for use in any component throughout your app.

### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```javascript
// in app.component.ts
import { Component } from "@angular/core";
import * as FusionCharts from "fusioncharts";

@Component({
  selector: "app",
  templateUrl: "app.component.html"
})
export class Ex10 {
  dataSource = {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    },
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
  };

  stackedColumnData = {
    chart: {
      caption: "Yearly Energy Production Rate",
      subCaption: " Top 5 Developed Countries",
      numbersuffix: " TWh",
      showSum: "1",
      plotToolText:
        "$label produces <b>$dataValue</b> of energy from $seriesName",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "Canada"
          },
          {
            label: "China"
          },
          {
            label: "Russia"
          },
          {
            label: "Australia"
          },
          {
            label: "United States"
          },
          {
            label: "France"
          }
        ]
      }
    ],
    dataSet: [
      {
        seriesName: "Coal",
        data: [
          {
            value: "400"
          },
          {
            value: "830"
          },
          {
            value: "500"
          },
          {
            value: "420"
          },
          {
            value: "790"
          },
          {
            value: "380"
          }
        ]
      },
      {
        seriesName: "Hydro",
        data: [
          {
            value: "350"
          },
          {
            value: "620"
          },
          {
            value: "410"
          },
          {
            value: "370"
          },
          {
            value: "720"
          },
          {
            value: "310"
          }
        ]
      },
      {
        seriesName: "Nuclear",
        data: [
          {
            value: "210"
          },
          {
            value: "400"
          },
          {
            value: "450"
          },
          {
            value: "180"
          },
          {
            value: "570"
          },
          {
            value: "270"
          }
        ]
      },
      {
        seriesName: "Gas",
        data: [
          {
            value: "180"
          },
          {
            value: "330"
          },
          {
            value: "230"
          },
          {
            value: "160"
          },
          {
            value: "440"
          },
          {
            value: "350"
          }
        ]
      },
      {
        seriesName: "Oil",
        data: [
          {
            value: "60"
          },
          {
            value: "200"
          },
          {
            value: "200"
          },
          {
            value: "50"
          },
          {
            value: "230"
          },
          {
            value: "150"
          }
        ]
      }
    ]
  };

  exportChart(e) {
    FusionCharts.batchExport({
      exportFormat: "pdf"
    });
  }

  constructor() {}
}
```

In the above code:

1. Add the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height of the chart in pixels.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.

3. To export multiple charts as PDF, set the `batchExport` to PDF.

4. Create a container to render buttons in the chart.

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts
   width="700"
   height="400"
   type="column2D"
   [dataSource]="dataSource"
   >
</fusioncharts>

<fusioncharts
   width="700"
   height="400"
   type="stackedcolumn2d"
   dataFormat="json"
   [dataSource]="stackedColumnData">
</fusioncharts>

<div style="display: flex;justify-content: center">
    <button (click)="exportChart($event)" class="btn btn-primary">Export both Charts as a single PDF</button>
</div>
```

In the above code create a `fusioncharts` directive in a template.

## Modes of Export

FusionCharts Suite XT supports the following three modes of export:

- Server-side export
- Client-side export
- Auto-export

By default, charts are exported using the auto-export feature.

The `exportMode` attribute is used to switch between the different modes of export.

> Starting from version v3.12.1, the `exportMode` attribute **replaces** the `exportAtClientSide` attribute.

To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/configuring-the-export-feature) guide.

## Export Chart Data in XLSX Format

FusionCharts lets you export the rendered charts in JPG, PNG, SVG, and PDF formats. Starting v3.13.5, FusionCharts Suite XT introduces exporting chart data in the XLSX format (as an Excel spreadsheet).

To enable chart exporting, set the chart level attribute `exportEnabled` to **1**. The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over the button to see a dropdown menu with the export options, as shown in the image below:

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

To export chart data, select the **Export as XLSX** option. The XLSX file with the chart data gets downloaded to your machine.

A column 2D chart with export enabled is shown below. Click the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the **Export as XLSX** option to export the chart data.

{% embed_all exporting-as-image-and-pdf-introduction-example-2.js %}

> To export a chart in the XLSX format using server-side exporting, it is mandatory that the exporting server has the latest code, available in the FusionCharts package. Alternatively, you can also use the FusionCharts export link, `export.api3.fusioncharts.com`. For client-side exporting, the exporting chart data feature is supported only by modern browsers with canvas support (except Safari and IE9). You can still export your charts, without including the configurable data.

> To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/configuring-the-export-feature) guide.
