---
title: Lifecycle Events using Angular | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using angular-fusioncharts component.
heading: Lifecycle Events using Angular
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart using `angular-fusioncharts` component.

A chart is shown below:

{% embed_chartData lifecycle-event-example-1.js json %}

### Set Up the Main Module

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

### Add Data to `app.component.ts`

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
  message = 'You will see notifications here for the chart lifecycle events';
  constructor(private zone: NgZone) {
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
  
  // Listener for beforeDataUpdate
  beforeDataUpdate($event){
    this.zone.run(() => {
      this.message = 'Status: beforeDataUpdate';
    });
  }

  // Listener for dataUpdated
  dataUpdated($event){
    this.zone.run(() => {
      this.message += ', dataUpdated';
    });
  }

  // Listener for drawComplete
  drawComplete($event){
    this.zone.run(() => {
      this.message += ', drawComplete';
    });
  }

  // Listener for renderComplete
  renderComplete($event){
    this.zone.run(() => {
      this.message += ', renderComplete';
    })
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

3. Use the following:
    * Event Listerer for `beforeDataUpdate` event.
    * Event Listerer for `dataUpdated` event.
    * Event Listerer for `drawComplete` event.
    * Event Listerer for `renderComplete` event.

### Add Data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->

<fusioncharts
  type='column2d'
  width='700'
  height='400'
  [dataSource]='dataSource'
  (beforeDataUpdate)="beforeDataUpdate($event)"
  (dataUpdated)="dataUpdated($event)"
  (drawComplete)="drawComplete($event)"
  (renderComplete)="renderComplete($event)">
</fusioncharts>
<p style="font-size:18px;font-weight: 300;padding:10px;background:#efefef">{{message}}</p>
```

In the above code create a `fusioncharts` directive in a template.