---
title: Configuring Your Chart Using Angular | FusionCharts
description: This article focuses on different type of configurations possible using Angular.
heading: Configuring Your Chart Using Angular
---

FusionCharts Suite XT includes advanced features that let you add more context to your charts and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using the `angular-fusioncharts` component:

* [Update Chart Data](/getting-started/angular/angular/configure-your-chart-using-angular#update-chart-data)
* [Update Chart Attributes](/getting-started/angular/angular/configure-your-chart-using-angular#update-chart-attributes)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chartData configure-charts-using-angular-example-1.js json %}

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

1. Include the necessary libraries and componentsusing import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Load FusionCharts, chart module and the `fusion` theme.

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

export class AppComponent {

    type = "Column2D";
    width = "700";
    height = "400";
    dataFormat = "json";
    dataSource: any = {
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

    events: {
        "beforeRender": function(evt, args) {
            var controls = document.createElement('div'),
                chartRef = evt.sender;

            chartRef.getRandomNumber = function() {
                var max = 300,
                    min = 50;
                return Math.round(((max - min) * Math.random()) + min);
            }
            updateData = function() {

                //clones data
                var data = Object.assign({}, chartRef.getJSONData());
                data.data[2].label = 'Canada';
                data.data[2].value = chartRef.getRandomNumber();

                data.data[3].label = 'Iran';
                data.data[3].value = chartRef.getRandomNumber();
                chartRef.setJSONData(data);
            };
            controls.innerHTML = '<button style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;" onClick="updateData()" >Update chart data</button>';
            controls.style.cssText = 'text-align: center; width: 100%;';
            args.container.appendChild(controls);
        }
    }

    constructor() {

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

3. Generate random data, to update the chart using **Math.random()**.

4. Add the `updateData()` function to randomly update the value of the chart when the button is clicked.

5. Add `controls.innerHTML` to create the `button` inside the `<div>`.

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

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chartData configure-charts-using-react-example-2.js json %}

### Setup the Main Module

In this step, we will setup the main module to create the **Column 2d** chart. The code is given below:

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

1. Include the necessary libraries and components using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Load FusionCharts, chart module and the `fusion` theme.

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
    templateUrl: 'app.component.html',

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

    events: {
        "beforeRender": function(evt, args) {
            var chartRef = evt.sender;

            chartRef.originalData = JSON.parse(JSON.stringify(chartRef.getJSONData()));

            chartRef.changeBackground = function() {
                var data = chartRef.getJSONData(); //copy of object
                data.chart.bgColor = '#efefef';
                chartRef.setJSONData(data);
            };

            // Resets all the chart data to it's initial verison
            chartRef.resetAttr = function() {
                chartRef.setJSONData(chartRef.originalData);
            };

            // Makes the caption text left aligned
            chartRef.makeCaptionLeft = function() {
                var data = chartRef.getJSONData();
                data.chart.captionAlignment = 'left';
                chartRef.setJSONData(data);
            };


            var btnContainer = document.createElement('div'),
                str;

            // buttons 
            str = '<button id="bgColorBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Change Chart Background</button>&nbsp&nbsp';
            str += '<button id="captionAlignBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Make Caption Text Left-Aligned</button>&nbsp&nbsp';
            str += '<button id="resetAttrBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Reset Attributes</button>';

            btnContainer.style.cssText = "text-align: center; width: 100%; margin: 10px;";
            btnContainer.innerHTML = str;
            //button attachment
            args.container.parentNode.insertBefore(btnContainer, args.container.nextSibling);
        },

        "renderComplete": function(evt, args) {
            var chartRef = evt.sender,
                bgColorBtn = document.getElementById('bgColorBtn'),
                captionAlignBtn = document.getElementById('captionAlignBtn'),
                resetAttrBtn = document.getElementById('resetAttrBtn');

            bgColorBtn.onclick = chartRef.changeBackground;
            captionAlignBtn.onclick = chartRef.makeCaptionLeft;
            resetAttrBtn.onclick = chartRef.resetAttr;
        }
    }

    constructor() {
    }
}
```

In the above code:

1. Add the JSON data within the `AppComponent` class.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`..

3. Add an event to:
    * Update the chart caption, sub-capion alignment.
    * Update the background color.
    * Reset all the chart data to it's initial version.

4. Create a container to render buttons in the chart.

### Add Data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts
    width="700" 
    height="400"
    type="column2d"
    [dataSource]="dataSource" >
</fusioncharts>

<p><a class="btn btn-default" (click)="changeBackgroundColor()">Change chart background color</a>
    <a class="btn btn-default" (click)="changeCaptionTextAlignment()">Make Caption text left-aligned</a>
</p>
```

In the above code create a `fusioncharts` directive in a template.
