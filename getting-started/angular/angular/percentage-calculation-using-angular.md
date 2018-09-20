---
title: Percentage Calculation | FusionCharts
description: In this article a sample to calculate the percentage value of the data plot with respect to the total is created.
heading: Percentage Calculation
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, percentage calculation, and events.

This article focuses on how you can calculate the percentage of a data plot with respect to all the data plots using `angular-fusioncharts` component.

A chart configured to calculate the percent, is shown below:

{% embed_chartData percentage-calculation-example-1.js json %}

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
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)

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

1. Necessary libraries and components have been included using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Loaded FusionCharts, chart module and fusion theme.

3. Added dependencies to `FusionChartsModule`.

> The `<fusioncharts></fusioncharts>` component is available to be used by any component your app. We will render our first chart in the main `app.component`.

### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```
// In app.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    dataSource: Object;
    chartConfig: Object;

    constructor() {
         this.chartConfig = {
            width: '700',
            height: '400',
            type: 'column2d',
            dataFormat: 'json',
        };

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
        "events": {
		    "beforeRender": function(e, d) {
		        var message = "Hover on the plot to see the percentage along with the label";
		        var customDiv = document.createElement('p');
		        customDiv.innerText = message;
		        customDiv.style.padding = "10px";
		        customDiv.style.background = "rgb(245, 242, 240)";
		        customDiv.style.textAlign = "center";
		        e.data.container.appendChild(customDiv);

		        var total = 0;
		        e.sender.args.dataSource.data.forEach(function(dataObj) {
		            total += parseFloat(dataObj.value);
		        });


		        e.sender.addEventListener("dataplotrollover", function(rollEvent, rollData) {
		            var value = (rollData.value / total * 100).toFixed(2);
		            customDiv.innerHTML = '<b>' + rollData.categoryLabel + '</b> is <b>' + value + '%</b> of top 8 oil reserve countries';
		        });

		        e.sender.addEventListener("dataplotrollout", function(rollEvent, rollData) {
		            customDiv.innerText = message;
		        });
		    }
		}
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

3. `beforeRender()` event is used to create the CSS elements.

4. `dataplotrollover` and `dataplotrollout` event is called when the mouse pointer is rolled over the data plots.
	* `dataplotrollover` event shows the percentage of the hovered plot on the page.
	* `dataplotrollout` event resets the default message.
	* `renderComplete` event calculates and stores the total value of the chart data.

5. `customDiv.innerHTML` is added to display the message inside the `<div>`.