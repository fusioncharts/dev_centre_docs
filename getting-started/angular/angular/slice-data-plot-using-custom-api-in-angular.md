---
title: Slice Data Plot using API | FusionCharts
description: This article will showcase a sample to slice data plot of the pie chart using chart specific custom API .
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offers a wide range of APIs that you can use for different stages in the ife cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using `angular-fusioncharts` component. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

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
    selectedSlice = 'none';
    chart: any;
    constructor(private zone: NgZone) {
        this.dataSource = {
            "chart": {
                "caption": "Market Share of Web Servers",
                "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
                "showLegend": "1",
                "showPercentValues": "1",
                "legendPosition": "bottom",
                "useDataPlotColorForLabels": "1",
                "enablemultislicing": "0",
                "showlegend": "0",
                "theme": "fusion",
            },
            "data": [{
                "label": "Apache",
                "value": "32647479"
            }, {
                "label": "Microsoft",
                "value": "22100932"
            }, {
                "label": "Zeus",
                "value": "14376"
            }, {
                "label": "Other",
                "value": "18674221"
            }]
        };
    }

    // FusionCharts initialized listener to get the chart instance
    initialized($event) {
        this.chart = $event.chart; // saving chart instance 
    }

    // Change listener for radio buttons
    onRadioOptionChange(option) {
        this.selectedSlice = option;
        // For each data element , see if it is selected, if none then slice in all elements
        this.dataSource.data.forEach((d, index) => {
            if (option == 'none') {
                this.chart.slicePlotItem(index, false);
            } else if (option === d.label.toLowerCase()) {
                this.chart.slicePlotItem(index, true);
            }
        });
    }

    // Get data item label
    getLabel(index) {
        return this.dataSource.data[index].label;
    }

    // FusionCharts Component dataPlot click listener
    dataplotClick($event) {
        let dataIndex = $event.dataObj.dataIndex;
        let isSliced = $event.dataObj.isSliced;
        this.zone.run(() => {
            this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
        })
    }

    ngOnInit() {
        setTimeout(() => {
            SelectedSingleton.change(this.sampleCode['ex24'].title);
        })
    }
}
```

In the above code:

1. Add the the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Get the chart instance FusionCharts initialized listener.

4. `onRadioOptionChange` event is called for the radio buttons.

5. `getLabel` method is called to get the label for the data item.

6. FusionCharts Component `dataPlotClick` listener is called to slice the data when the button is clicked.

### Add Data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- Chart Component -->
<fusioncharts type='pie2d' width='600' height='400' [dataSource]='dataSource' (dataplotClick)='dataplotClick($event)' (initialized)='initialized($event)'>
</fusioncharts>
<div style="display: flex; justify-content: center; bottom: 2px;">
    <div class="change-type">
        <div id="radio1">
            <input name="slice-selecter" id="None" type="radio" [checked]="selectedSlice == 'none'" (change)="onRadioOptionChange('none')" />
            <label for="None">None</label>
        </div>
        <div id="radio2">
            <input name="slice-selecter" id="Apache" type="radio" [checked]="selectedSlice == 'apache'" (change)="onRadioOptionChange('apache')" />
            <label for="Apache">Apache</label>
        </div>
        <div id="radio3">
            <input name="slice-selecter" id="Microsoft" type="radio" [checked]="selectedSlice == 'microsoft'" (change)="onRadioOptionChange('microsoft')" />
            <label for="Microsoft">Microsoft</label>
        </div>
        <div id="radio4">
            <input name="slice-selecter" id="Zeus" type="radio" [checked]="selectedSlice == 'zeus'" (change)="onRadioOptionChange('zeus')" />
            <label for="Zeus">Zeus</label>
        </div>
        <div id="radio5">
            <input name="slice-selecter" id="Other" type="radio" [checked]="selectedSlice == 'other'" (change)="onRadioOptionChange('other')" />
            <label for="Other">Other</label>
        </div>
    </div>
</div>
```

In the above code:

* Create the `fusioncharts` directive in a template.

* Create Radio buttons for the chart using `<input>`.