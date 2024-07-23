---
title: Special Events using Angular | FusionCharts
description: Discover leveraging Special Events in Angular with FusionCharts Suite XT API. Trigger actions during chart lifecycle stages for enhanced functionality.
heading: Special Events using Angular
---

## A drag-able column chart is shown below:

FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically drag the column and see modified value as text using `angular-fusioncharts` component.

A drag-able column chart is shown below:

{% embed_chartData special-events-example-1.js json %}

### Setup the Main Module

In this step, we will setup the main module to create the **Draggable Column 2D** chart. The code is given below:

```
// Setup needed in app.module.ts
import { NgModule, enableProdMode } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load PowerCharts module
import * as Powercharts from 'fusioncharts/fusioncharts.powercharts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Powercharts, FusionTheme);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FusionChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

In the above code:

1. Include the necessary libraries and components using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Load FusionCharts, chart module and fusion theme.

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
    datasetname: any;
    startvalue: any;
    finalvalue: any;
    message: any;

    // Format message
    getMessage(datasetname, startvalue, finalvalue, label) {
        return `<b style='font-weight:bold';>${datasetname}</b> dataset, its previous value was <b style='font-weight:bold'>${startvalue}</b> and its current value is <b style='font-weight:bold'>${finalvalue}</b> for year <b>${label} </b>`;
    }

    constructor(private zone: NgZone) {
        this.dataSource = {
            "chart": {
                "caption": "Android and iOS Devices Sales Projections",
                "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
                "numberPrefix": "$",
                "numberSuffix": "M",
                "yaxismaxvalue": "200",
                "theme": "fusion",
                "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            },
            "categories": [{
                "category": [{
                    "label": "2014",
                    "fontItalic": "0"
                }, {
                    "label": "2015",
                    "fontItalic": "0"
                }, {
                    "label": "2016",
                    "fontItalic": "0"
                }, {
                    "label": "2017 (Projected)"
                }, {
                    "label": "2018 (Projected)"
                }]
            }],
            "dataset": [{
                "seriesname": "Android Devices",
                "data": [{
                    "value": "73",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "80",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "97",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "110",
                    "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
                }, {
                    "value": "180",
                    "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
                }]
            }, {
                "seriesname": "iOS Devices",
                "data": [{
                    "value": "63.2",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "68",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "82",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "99",
                    "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
                }, {
                    "value": "150",
                    "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
                }]
            }]
        };
        this.message = "Drag any column for years 2017 or 2018 to see updated value along with the label";
    }
    dragStart($event) {
        let dataObj = $event.dataObj;
        this.datasetname = dataObj.datasetName;
        this.startvalue = dataObj.startValue;
    }
    dragEnd($event) {
        let dataObj = $event.dataObj;
        this.finalvalue = dataObj.endValue;
        let label = this.dataSource.categories[0].category[dataObj.dataIndex].label;
        this.zone.run(() => {
            this.message = this.getMessage(this.datasetname, this.startvalue.toFixed(2), this.finalvalue.toFixed(2), label);
        })
    }
}
```

In the above code:

1. Add the JSON data within the `AppComponent` class.

2. Create a `getMessage` function for the message which gets displayed on clicking the data plots.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. In the above sample:
    * Add an event listener to get the value when the drag will start.
    * Add an event listener to get the value when the drag will end.
    * Add the `getMessage` function to display the value of the dragged column.

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts
  type="dragcolumn2d"
  width="700"
  height="400"
  dataFormat="json"
  [dataSource]="dataSource"
  (dataplotDragStart)="dragStart($event)"
  (dataplotDragEnd)="dragEnd($event)">
</fusioncharts>
<p style="padding: 10px;background:#f5f2f0">{{message}}</p>
```

In the above code create a `fusioncharts` directive is created in a template.
