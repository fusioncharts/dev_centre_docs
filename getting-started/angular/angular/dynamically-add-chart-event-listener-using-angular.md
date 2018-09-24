---
title: Dynamically Add Chart Event Listener using Angular | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using angular.
heading: Dynamically Add Chart Event Listener using Angular
---

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

1. Necessary libraries and components have been included using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Loaded FusionCharts, chart module and fusion theme.

3. Added dependencies to `FusionChartsModule`.

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

1. The JSON data is added within the `AppComponent` class.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

3. In the above sample:
	* A `getMessage` function is created for the message which gets displayed when the data plots are clicked.
	* An event listener is added to enable the `dataplotClick` event on the data plot which the button is clicked.
	* An event listener is removed to disable the `dataPlotClick` event on the data plot which the button is clicked.

4. `customDiv.innerHTML` is added to display the message inside the `<div>`.

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- In app.component.html -->
<style >
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
          width="100%" 
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
	* A `fusioncharts` directive is created in a template.
	* Buttons are created to add/remove event listener to the data plots of the chart