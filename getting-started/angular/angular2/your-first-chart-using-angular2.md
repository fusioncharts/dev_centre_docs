---
title: Your First Chart in Angular2 using FusionCharts | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts Angular2 component.
heading: Your First Chart in Angular2 using FusionCharts
chartPresent: false
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. In this page, we'll see how to render charts using FusionCharts and angular-FusionCharts Component. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/angular/angular2/your-first-chart-using-angular2#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/angular/angular2/your-first-chart-using-angular2#create-your-first-gauge-7) and a [map]({% site.baseurl %}/getting-started/angular/angular2/your-first-chart-using-angular2#create-your-first-map-10).

Before going through this article, please [install]({% site.baseurl %}/getting-started/angular/angular2/install-using-angular2 '@@open-newtab') `angular-fusioncharts` plugin, if not already installed.

## Create your first chart

In this section, we will create a chart using `angular-fusioncharts` component. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

To create charts, the `angular-fusioncharts` component can be passed as a part of another angular component.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

### The data for this chart is represented in a table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

> There are different formats of JSON for different groups of charts in FusionCharts - e.g., single-series (which you're seeing here), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
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
}
```

In the above JSON we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels, data values. You can also set chart limits and extended properties. The list of functional attributes used in the above code are:

* `showLabels` sets the  configuration whether the x-axis labels will be displayed or not.
* `showValue` sets the configuration whether data values will be displayed along with the data plot on chart.
* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's JSON data and provided fusion (default theme) as the value of it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetics Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size etc. Since we are using the `fusion` theme to customize the chart's look and feel no cosmetic attributes are used in this sample. For a detailed list of cosmetic attributes click here.

For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Setup the main module

In this step, we will setup the main module to create the **column2d** chart. The code is given below:


```
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts'; // Charts

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FusionChartsModule.forRoot(FusionCharts, Charts),  
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

> &lt;fusioncharts&gt;&lt;/fusioncharts&gt; component is available to use in any component throughout your app.
> We will render our first chart in the main app.component.

### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```
import {Component} from '@angular/core';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    dataSource: Object;
    constructor() {
        this.dataSource = {
            chart: {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion",
            },
            // Chart Data
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
        }; // end of this.dataSource
    } // end of constructor
} // end of class AppComponent
```

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```html
<fusioncharts
    width="700"
    height="400"
    type="Column2d"
    [dataSource]="dataSource">
</fusioncharts>
```

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a column 2D chart.

Now, go on and explore other 95+ chart types that we've in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attribute]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## Create your first gauge

Gauges are powerful tools that can showcase using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Scores above 75 mean good and is green.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0"
    },
    // Chart Data
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "50",
            "code": "#F2726F"
        }, {
            "minValue": "50",
            "maxValue": "75",
            "code": "#FFC533"
        }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#62B58F"
        }]
    },
    "dials": {
        "dial": [{
            "value": "81"
        }]
    }
}
```

### Setup the main module

In this step, we will setup the main module to create the **angularGauge** chart. The code is given below:


```
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets; // Charts

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FusionChartsModule.forRoot(FusionCharts, Widgets), // Note this line  
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```
import {Component} from '@angular/core';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    dataSource: Object;
    constructor() {
        this.dataSource = {
            "caption": "Nordstorm's Customer Satisfaction Score for 2017",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showValue": "1",
            "numberSuffix": "%",
            "theme": "fusion",
            "showToolTip": "0"
        },
        // Chart Data
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#F2726F"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#FFC533"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#62B58F"
            }]
        },
        "dials": {
            "dial": [{
                "value": "81"
            }]
        }
    }; // end of this.dataSource
} // end of constructor
} // end of class AppComponent
```

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```html
<fusioncharts
    width="450"
    height="250"
    type="angularGauge"
    [dataSource]="dataSource">
</fusioncharts>
```

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **World**. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in a table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    //Map Configuration
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{ // Specific to slider
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    },
    // Source data as JSON --> id represents states of USA.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1",
        "link": "newchart-json-NAM"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1",
        "link": "newchart-json-SAM"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1",
        "link": "newchart-json-ASI"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1",
        "link": "newchart-json-EUP"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1",
        "link": "newchart-json-AFC"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1",
        "link": "newchart-json-AUS"
    }],
    "linkeddata": [{
        "id": "NAM",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - North America",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "paletteColors": "FFD74D",
                "theme": "hulk-light"
            },
            "data": [{
                "label": "1955",
                "value": "1.5078"
            }, {
                "label": "1960",
                "value": "1.5502"
            }, {
                "label": "1965",
                "value": "1.3121"
            }, {
                "label": "1970",
                "value": "0.8648"
            }, {
                "label": "1975",
                "value": "0.6402"
            }, {
                "label": "1980",
                "value": "0.62"
            }, {
                "label": "1985",
                "value": "0.6748"
            }, {
                "label": "1990",
                "value": "0.6882"
            }, {
                "label": "1995",
                "value": "0.6804"
            }, {
                "label": "2000",
                "value": "0.5627"
            }, {
                "label": "2005",
                "value": "0.5373"
            }, {
                "label": "2010",
                "value": "0.5536"
            }, {
                "label": "2015",
                "value": "0.4291"
            }]
        }
    }, {
        "id": "SAM",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - South America",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "paletteColors": "E65100",
                "theme": "hulk-light"
            },
            "data": [{
                "label": "1955",
                "value": "2.6275"
            }, {
                "label": "1960",
                "value": "2.6995"
            }, {
                "label": "1965",
                "value": "2.757"
            }, {
                "label": "1970",
                "value": "2.5376"
            }, {
                "label": "1975",
                "value": "2.3431"
            }, {
                "label": "1980",
                "value": "2.3261"
            }, {
                "label": "1985",
                "value": "2.2036"
            }, {
                "label": "1990",
                "value": "1.9611"
            }, {
                "label": "1995",
                "value": "1.7184"
            }, {
                "label": "2000",
                "value": "1.5965"
            }, {
                "label": "2005",
                "value": "1.4482"
            }, {
                "label": "2010",
                "value": "1.2031"
            }, {
                "label": "2015",
                "value": "1.0698"
            }]
        }
    }, {
        "id": "ASI",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Asia",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FB8C00",
            },
            "data": [{
                "label": "1955",
                "value": "1.9075"
            }, {
                "label": "1960",
                "value": "1.8842"
            }, {
                "label": "1965",
                "value": "2.1082"
            }, {
                "label": "1970",
                "value": "2.4554"
            }, {
                "label": "1975",
                "value": "2.3036"
            }, {
                "label": "1980",
                "value": "1.9889"
            }, {
                "label": "1985",
                "value": "1.9683"
            }, {
                "label": "1990",
                "value": "2.0176"
            }, {
                "label": "1995",
                "value": "1.6823"
            }, {
                "label": "2000",
                "value": "1.3682"
            }, {
                "label": "2005",
                "value": "1.2435"
            }, {
                "label": "2010",
                "value": "1.1661"
            }, {
                "label": "2015",
                "value": "1.0731"
            }]
        }
    }, {
        "id": "EUP",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Europe",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FFE0B2",
            },
            "data": [{
                "label": "1955",
                "value": "1.026"
            }, {
                "label": "1960",
                "value": "1.0652"
            }, {
                "label": "1965",
                "value": "0.9381"
            }, {
                "label": "1970",
                "value": "0.6925"
            }, {
                "label": "1975",
                "value": "0.54"
            }, {
                "label": "1980",
                "value": "0.4218"
            }, {
                "label": "1985",
                "value": "0.354"
            }, {
                "label": "1990",
                "value": "0.2971"
            }, {
                "label": "1995",
                "value": "0.0276"
            }, {
                "label": "2000",
                "value": "-0.1301"
            }, {
                "label": "2005",
                "value": "-0.1558"
            }, {
                "label": "2010",
                "value": "-0.0576"
            }, {
                "label": "2015",
                "value": "-0.0292"
            }]
        }
    }, {
        "id": "AFC",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Africa",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "E65100",
            },
            "data": [{
                "label": "1955",
                "value": "2.1242"
            }, {
                "label": "1960",
                "value": "2.338"
            }, {
                "label": "1965",
                "value": "2.5075"
            }, {
                "label": "1970",
                "value": "2.5947"
            }, {
                "label": "1975",
                "value": "2.7175"
            }, {
                "label": "1980",
                "value": "2.8398"
            }, {
                "label": "1985",
                "value": "2.8857"
            }, {
                "label": "1990",
                "value": "2.8243"
            }, {
                "label": "1995",
                "value": "2.6172"
            }, {
                "label": "2000",
                "value": "2.5072"
            }, {
                "label": "2005",
                "value": "2.4853"
            }, {
                "label": "2010",
                "value": "2.5593"
            }, {
                "label": "2015",
                "value": "2.6001"
            }]
        }
    }, {
        "id": "AUS",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Oceania",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FB8C00",
            },
            "data": [{
                "label": "1955",
                "value": "1.511"
            }, {
                "label": "1960",
                "value": "1.6045"
            }, {
                "label": "1965",
                "value": "1.5578"
            }, {
                "label": "1970",
                "value": "1.455"
            }, {
                "label": "1975",
                "value": "1.4727"
            }, {
                "label": "1980",
                "value": "1.2404"
            }, {
                "label": "1985",
                "value": "1.2398"
            }, {
                "label": "1990",
                "value": "1.1853"
            }, {
                "label": "1995",
                "value": "1.2006"
            }, {
                "label": "2000",
                "value": "1.1244"
            }, {
                "label": "2005",
                "value": "1.0724"
            }, {
                "label": "2010",
                "value": "1.1255"
            }, {
                "label": "2015",
                "value": "1.0397"
            }]
        }
    }]
}
```

### Setup the main module

In this step, we will setup the main module to create the **angularGauge** chart. The code is given below:


```
import {
    Component
} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    dataSource: Object;
    constructor() {
        this.dataSource = {
    //Map Configuration
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{ // Specific to slider
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    },
    // Source data as JSON --> id represents states of USA.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1",
        "link": "newchart-json-NAM"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1",
        "link": "newchart-json-SAM"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1",
        "link": "newchart-json-ASI"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1",
        "link": "newchart-json-EUP"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1",
        "link": "newchart-json-AFC"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1",
        "link": "newchart-json-AUS"
    }],
    "linkeddata": [{
        "id": "NAM",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - North America",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "paletteColors": "FFD74D",
                "theme": "hulk-light"
            },
            "data": [{
                "label": "1955",
                "value": "1.5078"
            }, {
                "label": "1960",
                "value": "1.5502"
            }, {
                "label": "1965",
                "value": "1.3121"
            }, {
                "label": "1970",
                "value": "0.8648"
            }, {
                "label": "1975",
                "value": "0.6402"
            }, {
                "label": "1980",
                "value": "0.62"
            }, {
                "label": "1985",
                "value": "0.6748"
            }, {
                "label": "1990",
                "value": "0.6882"
            }, {
                "label": "1995",
                "value": "0.6804"
            }, {
                "label": "2000",
                "value": "0.5627"
            }, {
                "label": "2005",
                "value": "0.5373"
            }, {
                "label": "2010",
                "value": "0.5536"
            }, {
                "label": "2015",
                "value": "0.4291"
            }]
        }
    }, {
        "id": "SAM",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - South America",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "paletteColors": "E65100",
                "theme": "hulk-light"
            },
            "data": [{
                "label": "1955",
                "value": "2.6275"
            }, {
                "label": "1960",
                "value": "2.6995"
            }, {
                "label": "1965",
                "value": "2.757"
            }, {
                "label": "1970",
                "value": "2.5376"
            }, {
                "label": "1975",
                "value": "2.3431"
            }, {
                "label": "1980",
                "value": "2.3261"
            }, {
                "label": "1985",
                "value": "2.2036"
            }, {
                "label": "1990",
                "value": "1.9611"
            }, {
                "label": "1995",
                "value": "1.7184"
            }, {
                "label": "2000",
                "value": "1.5965"
            }, {
                "label": "2005",
                "value": "1.4482"
            }, {
                "label": "2010",
                "value": "1.2031"
            }, {
                "label": "2015",
                "value": "1.0698"
            }]
        }
    }, {
        "id": "ASI",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Asia",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FB8C00",
            },
            "data": [{
                "label": "1955",
                "value": "1.9075"
            }, {
                "label": "1960",
                "value": "1.8842"
            }, {
                "label": "1965",
                "value": "2.1082"
            }, {
                "label": "1970",
                "value": "2.4554"
            }, {
                "label": "1975",
                "value": "2.3036"
            }, {
                "label": "1980",
                "value": "1.9889"
            }, {
                "label": "1985",
                "value": "1.9683"
            }, {
                "label": "1990",
                "value": "2.0176"
            }, {
                "label": "1995",
                "value": "1.6823"
            }, {
                "label": "2000",
                "value": "1.3682"
            }, {
                "label": "2005",
                "value": "1.2435"
            }, {
                "label": "2010",
                "value": "1.1661"
            }, {
                "label": "2015",
                "value": "1.0731"
            }]
        }
    }, {
        "id": "EUP",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Europe",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FFE0B2",
            },
            "data": [{
                "label": "1955",
                "value": "1.026"
            }, {
                "label": "1960",
                "value": "1.0652"
            }, {
                "label": "1965",
                "value": "0.9381"
            }, {
                "label": "1970",
                "value": "0.6925"
            }, {
                "label": "1975",
                "value": "0.54"
            }, {
                "label": "1980",
                "value": "0.4218"
            }, {
                "label": "1985",
                "value": "0.354"
            }, {
                "label": "1990",
                "value": "0.2971"
            }, {
                "label": "1995",
                "value": "0.0276"
            }, {
                "label": "2000",
                "value": "-0.1301"
            }, {
                "label": "2005",
                "value": "-0.1558"
            }, {
                "label": "2010",
                "value": "-0.0576"
            }, {
                "label": "2015",
                "value": "-0.0292"
            }]
        }
    }, {
        "id": "AFC",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Africa",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "E65100",
            },
            "data": [{
                "label": "1955",
                "value": "2.1242"
            }, {
                "label": "1960",
                "value": "2.338"
            }, {
                "label": "1965",
                "value": "2.5075"
            }, {
                "label": "1970",
                "value": "2.5947"
            }, {
                "label": "1975",
                "value": "2.7175"
            }, {
                "label": "1980",
                "value": "2.8398"
            }, {
                "label": "1985",
                "value": "2.8857"
            }, {
                "label": "1990",
                "value": "2.8243"
            }, {
                "label": "1995",
                "value": "2.6172"
            }, {
                "label": "2000",
                "value": "2.5072"
            }, {
                "label": "2005",
                "value": "2.4853"
            }, {
                "label": "2010",
                "value": "2.5593"
            }, {
                "label": "2015",
                "value": "2.6001"
            }]
        }
    }, {
        "id": "AUS",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Oceania",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FB8C00",
            },
            "data": [{
                "label": "1955",
                "value": "1.511"
            }, {
                "label": "1960",
                "value": "1.6045"
            }, {
                "label": "1965",
                "value": "1.5578"
            }, {
                "label": "1970",
                "value": "1.455"
            }, {
                "label": "1975",
                "value": "1.4727"
            }, {
                "label": "1980",
                "value": "1.2404"
            }, {
                "label": "1985",
                "value": "1.2398"
            }, {
                "label": "1990",
                "value": "1.1853"
            }, {
                "label": "1995",
                "value": "1.2006"
            }, {
                "label": "2000",
                "value": "1.1244"
            }, {
                "label": "2005",
                "value": "1.0724"
            }, {
                "label": "2010",
                "value": "1.1255"
            }, {
                "label": "2015",
                "value": "1.0397"
            }]
        }
    }]
}
```

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```html
<fusioncharts
    width="800"
    height="550"
    type="world"
    [dataSource]="dataSource">
</fusioncharts>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of usa. The respective `id`, can be found [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.