---
title: Dynamically Add Chart Event Listener using Angular | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using angular.
heading: Dynamically Add Chart Event Listener using Angular
---

## A chart is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using `angular-fusioncharts` component.

A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

### Setup the Main Module

In this step, we will setup the main module to create the **Column 2D** chart. The code is given below:

```
// Setup needed in app.module.ts
import { NgModule,  enableProdMode } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Fusion)

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

1. Include necessary libraries and components using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

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
    templateUrl: './app.component.html',
})
export class AppComponent {
    dataSource: any;
    message: string;
    chartObj: any;
    handler: any;
    initMessage: any;
    iMsg: string;
    clickPlotMsg: string;
    attached: boolean;
    constructor(private zone: NgZone) {
        this.iMsg = 'Click on <b>Track Data Plot Clicks</b> button to listen to dataplotclick event';
        this.initMessage = this.iMsg;
        this.clickPlotMsg = 'Click on the plot to see the value along with the label';
        this.message = this.clickPlotMsg;
        this.attached = false;
        this.dataSource = {
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            "data": [{
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
        };
    }

    getMessage(dataObj) {
        return `You have clicked on plot <b style='font-weight:bold'>${dataObj.categoryLabel}</b> which has a value of <b style='font-weight:bold'>${dataObj.displayValue}</b>`
    }

    dataplotClickHandler(eventObj, dataObj) {
        this.zone.run(() => {
            this.message = this.getMessage(dataObj);
        });
    }

    initialized($event) {
        this.chartObj = $event.chart;
    }

    attachEvent() {
        this.handler = this.dataplotClickHandler.bind(this);
        this.initMessage = '';
        this.message = this.clickPlotMsg;
        this.attached = true;
        this.chartObj.addEventListener('dataplotClick', this.handler);
    }

    removeEvent() {
        this.initMessage = this.iMsg;
        this.message = this.clickPlotMsg;
        this.attached = false;
        this.chartObj.removeEventListener('dataplotClick', this.handler);
    }
}
```

In the above code:

1. Add the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. In the above sample:
	* Create the `getMessage` function for the message which gets displayed on clicking the data plots.
	* Add an event listener to enable the `dataplotClick` event.
	
### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- In app.component.html -->
<style>
    .btn.btn-outline-secondary.btn-sm:hover{
        color:white;
    }
    .btn.btn-outline-secondary.btn-sm:active{
        color:gray;
    }
    div>a{
        margin: 0px 10px;
    }
</style>

<div class="card shadow">
  <div class="card-body chart-wrapper">
    <div class="chart-wrapper-inner">
        <fusioncharts
          width="700" 
          height="400"
          type="column2d"
          [dataSource]=dataSource
          (initialized)="initialized($event)">
        </fusioncharts>

      <p style="padding:10px; background: #efefef" [innerHTML]="initMessage || message"></p>
      <p>
        <button class="btn btn-outline-secondary btn-sm" (click)="attachEvent()" [disabled]="attached">ADD/LISTEN TO DATAPLOTCLICK EVENT</button>
        <button class="btn btn-outline-secondary btn-sm" (click)="removeEvent()" [disabled]="!attached">REMOVE DATAPLOTCLICK EVENT</button>
      </p>
    </div>
  </div>
</div>
```

In the above code:

* Create a `fusioncharts` directive in a template.
* Create buttons to add/remove event listener.
