---
title: Working with Events | FusionCharts
description: This article talks about the events using Angular.
heading: Working with Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

Take a look at the Column 2D chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one data plot and see how the text (the data label and the value) rendered below the chart changes.

For example, if you roll the mouse pointer over the **Canada** data plot, the following text is displayed below the chart:

**You are currently hovering over Canada whose value is 180**

### Setup the Main Module

In this step, we will setup the main module to create the **Column 2D** chart. The code is given below:

```javascript
// Setup needed in app.module.ts
import { NgModule, enableProdMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FusionChartsModule } from "angular-fusioncharts";

// Load FusionCharts
import * as FusionCharts from "fusioncharts";
// Load Charts module
import * as Charts from "fusioncharts/fusioncharts.charts";
// Load fusion theme
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

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

> The `<fusioncharts></fusioncharts>` component is available to be used by any component your app. We will render our first chart in the main `app.component`.

### Add Data to `app.component.ts`

Add the following code to `app.component.ts`:

```javascript
// In app.component.ts
import {
  Component,
  NgZone
} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  dataSource = {
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

  selectedLabel = "";
  selectedValue = "";

  update($event) {
    // Run inside angular context
    this.zone.run(() => {
      this.selectedLabel = $event.dataObj.categoryLabel;
      this.selectedValue = $event.dataObj.displayValue;
    })
  }
  constructor(private zone: NgZone) {}
}
```

In the above code:

1. Add the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height of the chart in pixels.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.

3. Set the `update` function inside the angular context to select the label and the value of the data plot at the time of mouse rollover.

### Add Data to `app.component.html`

Add the following code to `app.component.html`:

```html
<!-- in app.component.html-->
<div class="card shadow">
  <div class="card-body chart-wrapper">
    <div class="chart-wrapper-inner">
      <fusioncharts
        width="700"
        height="400"
        type="column2d"
        [dataSource]="dataSource"
        [events]="events"
        (dataplotRollOver)="update($event)"
      >
        <!-- Added event listener to attach update function from component -->
      </fusioncharts>
      <p style="font-size:20px;font-weight: 300;">
        You're are currently hovering over
        <u>{{selectedLabel || "______"}}</u> whose value is
        <u>{{selectedValue || "_______"}} </u>
      </p>
    </div>
  </div>
</div>
```

In the above code:

1. Create `fusioncharts` directive inside the template.
2. Add an event listener to attach the updated fusction from the component.
3. Add the content which will be displayed when the mouse pointer is rolled over the data plot.
