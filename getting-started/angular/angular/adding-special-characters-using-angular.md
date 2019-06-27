---
title: Adding Special Characters | FusionCharts
description: This article outlines the steps to be executed for adding special characters to the data values of your chart.
heading: Adding Special Characters
---

FusionCharts offers multiple options to format numbers on the chart. You can configure number prefixes and suffixes, decimal places, and scale numbers based on a predefined scale. This article focuses on how you customize the prefix and suffix of the numbers on the chart using `angular-fusioncharts` component.

To customize the prefix and suffix of the numbers on the chart, use the following attributes:

* Specify the prefix for all the values on the chart using the `numberPrefix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberPrefix` and `xNumberPrefix` attributes.

* Specify the prefix for all the Y-axis values on the chart using the `yNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the prefix for all the X-axis values on the chart using the `xNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the suffix for all the values on the chart using the `numberSuffix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberSuffix` and `xNumberSuffix` attributes.

* Specify the suffix for all the Y-axis values on the chart using the `yNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

* Specify the suffix for all the X-axis values on the chart using the `xNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

A chart configured to customize the prefix of the numbers on the chart is shown below:

{% embed_chartData adding-special-character-example-1.js json %}

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

In the above code, you can see how to do the following:

1. Include the necessary libraries and components using `import`. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Load FusionCharts, `charts` module and the `fusion` theme.

3. Add dependencies to `FusionChartsModule`.

> The `<fusioncharts></fusioncharts>` component is available to be used by any component your app. We will render our first chart in the main `app.component`.

### Add Data to `app.component.ts`

Add the following code to `app.component.ts`:

```
// in app.component.ts
import {
    Component
} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "data": [{
                "label": "Jan",
                "value": "420000"
            }, {
                "label": "Feb",
                "value": "810000"
            }, {
                "label": "Mar",
                "value": "720000"
            }, {
                "label": "Apr",
                "value": "550000"
            }, {
                "label": "May",
                "value": "910000"
            }, {
                "label": "Jun",
                "value": "510000"
            }, {
                "label": "Jul",
                "value": "680000"
            }, {
                "label": "Aug",
                "value": "620000"
            }, {
                "label": "Sep",
                "value": "610000"
            }, {
                "label": "Oct",
                "value": "490000"
            }, {
                "label": "Nov",
                "value": "900000"
            }, {
                "label": "Dec",
                "value": "730000"
            }
        ]
    }
}
```

In the above code you can see how to do the following:

1. Add the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. In the `dataSource` object, add `numberPrefix` attribute in `chart` object. Set the `numberPrefix` to `$`.

### Add Data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts
    width={{width}}
    height={{height}}
    type={{type}}
    dataFormat={{dataFormat}}
    [dataSource]=dataSource >
</fusioncharts>
```

In the above code, create the `fusioncharts` directive in a template.