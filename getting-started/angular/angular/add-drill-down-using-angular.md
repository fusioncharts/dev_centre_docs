---
title: Adding Drill Down Using Angular | FusionCharts
description: This article focuses on drill down charts.
heading: Adding Drill Down using Angular
---

With FusionCharts, you can create unlimited levels of drill down  with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill down  to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up, or it can open in a new window or frame.

### Features of the FusionCharts JavaScript Class

* Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

* Clones all chart configuration settings from the parent chart to create the descendant charts

* Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink) function

* Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

* Supports drill down to an unlimited number of levels

## Create Drill Down Charts 

As an example, we will consider a simple scenario of a parent chart with a single level of drill down .

The parent chart is a column 2D chart that shows yearly sales of the top three juice flavors over the last one year. When you click on the data plot for a particular flavor, it drills down to show a pie 2D chart of quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chartData add-drill down -using-angular-example-1.js json %}

### Set Up the Main Module

In this step, we will set up the main module to create the **Column 2d** chart. The code is given below:

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

> The `<fusioncharts></fusioncharts>` component is available to be used in any component throughout your app. We will render our first chart in the main `app.component`.

### Add Data to `app.component.ts`

Add the following code to `app.component.ts`:

```
// in app.component.ts
import {
    Component,
    NgZone
} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    chartInstance: any = {};

    // Callback to get chart instance
    initialized(e) {
        this.chartInstance = e.chart; // Save it for further use

        // Configure Drilldown attributes 
        // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
        this.chartInstance.configureLink({
            type: "pie2d",
            overlayButton: {
                message: 'close',
                fontColor: '880000',
                bgColor: 'FFEEEE',
                borderColor: '660000'
            }
        }, 0)
    }
    dataSource = {
        "chart": {
            "caption": "Top 3 Juice Flavors",
            "subcaption": "Last year",
            "xaxisname": "Flavor",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            "theme": "fusion",
            "rotateValues": "0"
        },
        "data": [{
                "label": "Apple",
                "value": "810000",
                "link": "newchart-xml-apple"
            },
            {
                "label": "Cranberry",
                "value": "620000",
                "link": "newchart-xml-cranberry"
            },
            {
                "label": "Grapes",
                "value": "350000",
                "link": "newchart-xml-grapes"
            }
        ],
        "linkeddata": [{
                "id": "apple",
                "linkedchart": {
                    "chart": {
                        "caption": "Apple Juice - Quarterly Sales",
                        "subcaption": "Last year",
                        "numberprefix": "$",
                        "theme": "fusion",
                        "rotateValues": "0",
                        "plottooltext": "$label, $dataValue,  $percentValue"
                    },
                    "data": [{
                        "label": "Q1",
                        "value": "157000"
                    }, {
                        "label": "Q2",
                        "value": "172000"
                    }, {
                        "label": "Q3",
                        "value": "206000"
                    }, {
                        "label": "Q4",
                        "value": "275000"
                    }]
                }
            },
            {
                "id": "cranberry",
                "linkedchart": {
                    "chart": {
                        "caption": "Cranberry Juice - Quarterly Sales",
                        "subcaption": "Last year",
                        "numberprefix": "$",
                        "theme": "fusion",
                        "plottooltext": "$label, $dataValue,  $percentValue"
                    },
                    "data": [{
                            "label": "Q1",
                            "value": "102000"
                        },
                        {
                            "label": "Q2",
                            "value": "142000"
                        },
                        {
                            "label": "Q3",
                            "value": "187000"
                        },
                        {
                            "label": "Q4",
                            "value": "189000"
                        }
                    ]
                }
            },
            {
                "id": "grapes",
                "linkedchart": {
                    "chart": {
                        "caption": "Grapes Juice - Quarterly Sales",
                        "subcaption": "Last year",
                        "numberprefix": "$",
                        "theme": "fusion",
                        "rotateValues": "0",
                        "plottooltext": "$label, $dataValue,  $percentValue"
                    },
                    "data": [{
                        "label": "Q1",
                        "value": "45000"
                    }, {
                        "label": "Q2",
                        "value": "72000"
                    }, {
                        "label": "Q3",
                        "value": "95000"
                    }, {
                        "label": "Q4",
                        "value": "108000"
                    }]
                }
            }
        ]
    };
    constructor(private zone: NgZone) {}
}
```
In the above code:

1. The JSON data is added within the `AppComponent` class.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d` for the first chart. For Column 2D chart, the alias is `column2d`. Once the data plots in the Column charts are clicked, the rendered chart is a Pie 2D chart (alias name: `pie2d`).Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * Create the JSON/XML data for the parent chart. This is called the parent data source.
    * Append the data string or the data URL for the descendant charts within the parent data source. If you append a data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

### Add Data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts
    type="column2d"
    width="700"
    height="400"
    dataFormat="json"
    [dataSource]="dataSource"
    (initialized)="initialized($event)"
></fusioncharts>
```

In the above code a `fusioncharts` directive is created in a template.
