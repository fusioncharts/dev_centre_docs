---
title: Apply Different Themes using Angular | FusionCharts
description: This article will showcase how to apply different themes to the chart at runtime.
heading: Apply Different Themes using Angular
---

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

-  `fusion` (since v3.13.0)
-  `gammel` (since v3.13.0)
-  `candy` (since v3.13.0)
-  `zune`
-  `ocean`
-  `carbon`

This article focuses on how you can apply different themes to the chart at runtime using `angular-fusioncharts` component. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

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
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import * as Fint from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as Candy from 'fusioncharts/themes/fusioncharts.theme.candy';
import * as Gammel from 'fusioncharts/themes/fusioncharts.theme.gammel';
import * as Zune from 'fusioncharts/themes/fusioncharts.theme.zune';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Carbon from 'fusioncharts/themes/fusioncharts.theme.carbon';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  Ocean,
  Fint,
  Candy,
  Gammel,
  Zune,
  Carbon,
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

3. Add dependencies to `FusionChartsModule` for all the themes in FusionCharts Suite.

> The `<fusioncharts></fusioncharts>` component is available to be used by any component your app. We will render our first chart in the main `app.component`.

### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```
// in app.component.ts
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
    chartObj: any;
    theme: string = 'fusion';
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

    initialized($event){
        this.chartObj = $event.chart;
    }
    onSelectionChange(theme){
        this.theme = theme;
        this.chartObj.setChartAttribute('theme', this.theme);
    }
}
```

In the above code:

1. Add the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:

   -  Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   -  Set the width and height of the chart in pixels.
   -  Set the `dataFormat` as JSON.
   -  Embed the json data as the value of `dataSource`.

3. Save the chart instance in `chartObj`.

4. Create the `onSectionChange` chart instance to apply differnet themes at runtime.

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->

<fusioncharts width="700" height="400" type="column2d" [dataSource]=dataSource (initialized)="initialized($event)">
</fusioncharts>
<div style='display: flex; justify-content: center'>
    <span id="select-text">Choose a theme:</span>
    <div class="change-type">
        <div>
            <input type="radio" name='options' [value]="fusion" [checked]='theme === "fusion"' (change)="onSelectionChange('fusion')" />
            <label>Fusion</label>
        </div>
        <div>
            <input type="radio" name='options' [value]="gammel" [checked]='theme === "gammel"' (change)="onSelectionChange('gammel')" />
            <label>Gammel</label>
        </div>
        <div>
            <input type="radio" name='options' [value]="candy" [checked]='theme === "candy"' (change)="onSelectionChange('candy')" />
            <label>Candy</label>
        </div>
        <div>
            <input type="radio" name='options' [value]="zune" [checked]='theme === "zune"' (change)="onSelectionChange('zune')" />
            <label>Zune</label>
        </div>
        <div>
            <input type="radio" name='options' [value]="ocean" [checked]='theme === "ocean"' (change)="onSelectionChange('ocean')" />
            <label>Ocean</label>
        </div>
        <div>
            <input type="radio" name='options' [value]="carbon" [checked]='theme === "carbon"' (change)="onSelectionChange('carbon')" />
            <label>Carbon</label>
        </div>
    </div>
</div>
```

In the above code

-  Create the `fusioncharts` directive in a template.

-  Create the Radio buttons for **fusion**, **gammel**, **candy**, **zune**, **ocean** and **carbon** themes using `<input>`.
