---
title: Change Chart Type at Runtime | FusionCharts
description: Learn to change chart type in Angular using FusionCharts with this guide. Enhance your data visualization capabilities efficiently. Try now!
heading: Change Chart Type at Runtime
---

## A chart configured to change the chart type, is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using `angular-fusioncharts` component. The chart types used in the sample is:

* Column 2D
* Bar 2D
* Pie 2D

A chart configured to change the chart type, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

### Setup the Main Module

In this step, we will setup the main module to create the **Column 2D** chart. The code is given below:

```
// Setup needed in app.module.ts
import { NgModule, enableProdMode } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load themes
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme
)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

In the above code:

1. Include the necessary libraries and components using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Load FusionCharts, chart module and the `fusion` theme.

3. Add dependencies to `FusionChartsModule`.

> The `<fusioncharts></fusioncharts>` component is available to be used by any component your app. We will render our first chart in the main `app.component`.

### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```
// In app.component.ts
import {
  Component,
  NgZone
} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    dataSource: any;
    chartObj:any;
    chart: any = 'column2d';

    constructor(private zone: NgZone) {
        this.dataSource = {
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion",
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

    initialized($event){
      this.chartObj = $event.chart; // saving chart instance
    }
  
    onSelectionChange(chart){
      this.chart = chart;
      this.chartObj.chartType(chart); // Changing chart type using chart instance
    }
}
```

In the above code:

1. Add the the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Save the chart instance in `chartObj`.

4. Create the `onSectionChange` chart instance to change the chart type at runtime.

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts width="700" height="400" type="column2d" [dataSource]=dataSource (initialized)="initialized($event)">
</fusioncharts>
<div style='display: flex; justify-content: center'>
    <span id="select-text">Select size:</span>
    <div class="change-type">
        <div>
            <input type="radio" name='options' [value]="'column2d'" [checked]='chart === "column2d"' (change)="onSelectionChange('column2d')" />
            <label>Column2d</label>
        </div>
        <div>
            <input type="radio" name='options' [value]="'bar2d'" [checked]='chart === "bar2d"' (change)="onSelectionChange('bar2d')" />
            <label>Bar2d</label>
        </div>
        <div>
            <input type="radio" name='options' [value]="'pie2d'" [checked]='chart === "pie2d"' (change)="onSelectionChange('pie2d')" />
            <label>Pie2d</label>
        </div>
    </div>
</div>
```

In the above code 

* Create the `fusioncharts` directive in a template.

* Create Radio buttons for **column2d**, **bar2d** and **pie2d** chart using `<input>`.
