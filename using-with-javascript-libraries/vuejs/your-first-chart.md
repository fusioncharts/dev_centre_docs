---
permalink: using-with-javascript-libraries/vuejs/your-first-chart.html
title: Your First Chart using VueJS | FusionCharts
description: This article outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the vue-fusioncharts component.
heading: Your First Chart
chartPresent: false
---

Before going through this article, please [install]({% site.baseurl %}/using-with-javascript-libraries/vuejs/installation '@@open-newtab') vue-fusioncharts plugin, if not already installed.

In this article, we will learn how to:

* Create your first chart using Vue-FusionCharts

* Create your first widget using Vue-FusionCharts

* Create your first map using Vue-FusionCharts

## Create your First Chart

In this section, we will create a **column 2D** chart using `vue-fusioncharts`.

We are making the following **assumptions** regarding the code in this section, as well as the subsequent sections:

* The dependencies are installed using CDN in the HTML.

* The plugin is referenced using the `Vue.use(VueFusionCharts)` global method in the JavaScript file.

To help you understand, the code is heavily commented.

### Preview

{% embed_chart getting-started-your-first-chart.js %}

### HTML

```
<html>
<head>
    <meta charset="utf-8">
    <title>Vue-FusionCharts</title>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"></script>
</head>
<body>
    <div id='app'>
        <!-- This div is controlled by the Vue instance. -->
        <!-- 
      The custom component "fusioncharts", defined in the plugin "Vue-FusionCharts", is used below. 
      Its attributes are bound to the data in the Vue instance by "v-bind".
      -->
        <fusioncharts v-bind:type="type" v-bind:width="width" v-bind:height="height" v-bind:dataFormat="dataFormat" v-bind:dataSource="dataSource">
        </fusioncharts>
    </div>
    <script src='app.js'></script>
</body>
</html>
```

### JavaScript

```
Vue.use(VueFusionCharts)

var app = new Vue({
    el: '#app',
    data: {
        type: 'column2d', // The chart type.
        width: '80%', // Width of the chart in %.
        height: '350', // Height of the chart in pixels.
        dataFormat: 'json', // The format of dataSource. Can also be 'xml'. 
        dataSource: { // Either in json (default), or in xml.
            "chart": { // Chart configuration starts.
                "caption": "Monthly revenue for last year", // Caption of the chart.
                "subCaption": "Harry's SuperMart", // Sub-caption.
                "xAxisName": "Month", // Name of the x-axis
                "yAxisName": "Revenues (In USD)", // Name of the y-axis
                "numberPrefix": "$", // The prefix for the values in the vertical axis.
            }, // Chart configuration ends.
            "data": [ // Chart data starts.
                // label => Names of entities plotted on the horizontal axis.
                // value => Corresponding values for the entities, plotted on vertical axis.
                {
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
            ] // Chart data ends.
        },
    },
});
```

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a column 2D chart. 

### Attributes of <fusioncharts></fusioncharts>

The attributes of the custom element/component `<fusioncharts></fusioncharts>` defines the visualization that will be rendered within the `<div id='app'></div>` element. 

The [v-bind](https://vuejs.org/v2/api/#v-bind '@@open-newtab') directive of Vue binds the attributes to the data provided in the Vue instance. More specifically, the values of the attributes are mapped to the keys in the `data: {…}` option of the relevant Vue instance.

The attributes used for illustration are:

Name|Type|Default Value|Description|
-|-|-|-
`type`|String|none|Name of the chart type to be rendered.|
`width`|String/Number|400|Width in pixels (for example, 640) or percent (for example, 50%).|
`height`|String/Number|400|Height in pixels (for example, 640) or percent (for example, 50%).|
`dataFormat`|String|JSON|The format of the data source for the intended visualization. Currently, FusionCharts accepts data in the JSON and XML formats. For general instructions on using XML, refer to Using XML as Data Format.|
`dataSource`|String/Object|none|Source of the chart data and the chart configuration. Currently, FusionCharts accepts data in the JSON and XML formats. For advanced instructions on dataSource, refer to Setting Data Source Using URL.|

For more information on these attributes refer to [Creating a Chart Object]({% site.baseurl %}fusioncharts#creating-a-chart-object-0 '@@open-newtab').

For all illustrations in this document, the [HTML]() acts as a boilerplate and remains unchanged. 

In the JavaScript code, execution of `var app = new Vue({ })` creates a new Vue instance called app. Depending on the chart type, only two properties of the Vue instance vary mandatorily:

* **`app.type`**: You must set it to the chart name you want to render. For a complete list of all charts and their types, refer to [Chart Gallery](https://www.fusioncharts.com/dev/demos/chart-gallery#Gallary) and explore the desired type in detail.

* **`app.dataSource`:** Each chart has its own data schema that defines the chart configuration and the source of data. Thus, this object varies significantly depending of the type of chart.

In the subsequent sections, only chart-specific changes made in the JavaScript code are discussed.

## Create your First Widget

Now, we will create an **Angular Gauge** as your first widget. Gauges are powerful tools that can showcase using a radial scale to display data, and a dial is used to indicate the value.

{% embed_chart getting-started-your-first-widget.js %}

As stated above, the HTML remains unchanged. Use the same HTML for creating the Angular Gauge.

Parts of the JavaScript code is reusable; only app.type and app.dataSource needs modification.

```
Vue.use(VueFusionCharts)

var app = new Vue({
    el: '#app',
    data: {
        type: 'angulargauge.', // The chart type changes
        width: '80%',
        height: '350',
        dataFormat: 'json',
        dataSource: // The configuration and data source changes
    },
});
```

To create the Angular Gauge:

* Reuse the [HTML]().

* In the JavaScript file:

    * Set the chart **type** to `angular gauge`, as shown in the snippet above.

    * Provide the appropriate JSON for `dataSource`: 

```
dataSource: {
    // Chart configuration
    "chart": {
        "caption": "Customer Satisfaction Score", // Caption of the gauge.
        "subcaption": "Last week", // Sub-caption
        "lowerLimit": "0", // Lower limit of the gauge's range
        "upperLimit": "100", // Upper limit of the gauge's range.
    },
    // The aesthetics of the gauge.
    "colorRange": {
        "color": [ // The minimum and maximum values covered by different color bands.
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }
        ],
    },
    // Dial Value for gauge 
    "dials": {
        "dial": [
            {
                "value": "67"
            } // The needle points to this value.
        ]
    }
}
```

For a **complete list of attributes** (the stuff within `dataSource`) and the **XML equivalent** of the JSON, refer to chart attribute page of [real-time angular](https://www.fusioncharts.com/dev/chart-attributes/?chart=angulargauge).

To get the **customization tips** for the chart, click [here](https://www.fusioncharts.com/dev/chart-guide/gauges-and-widgets/angular-gauge).

## Create your First Map

In this section, you will create a visualization using map of **USA**. 

{% embed_chart getting-started-your-first-map.js %}

To create the visualization:

* Reuse the [HTML]().

* In the JavaScript file:
    * Modify `app.type` and set it to `maps/usa`.
    * Modify `app.dataSource`. The appropriate JSON is:

```
dataSource: {

    // Configuration
    "chart": {
        "caption": "Annual Sales by State",
        "subcaption": "Last year",
        "entityFillHoverColor": "#cccccc",
        "numberScaleValue": "1,1000,1000",
        "numberScaleUnit": "K,M,B",
        "numberPrefix": "$",
        "showLabels": "1",
    },

    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "startlabel": "Low",
        "endlabel": "High",
        "code": "#e44a00",
        "gradient": "1",

        "color": [ // Specific to slider
            {
                "maxvalue": "56580",
                "displayvalue": "Average",
                "code": "#f8bd19"
            }, {
                "maxvalue": "100000",
                "code": "#6baa01"
            }
        ]
    },

    // Source data as JSON --> id represents states of USA.
    "data": [{
            "id": "HI",
            "value": "3189"
        }, {
            "id": "DC",
            "value": "2879"
        }, {
            "id": "MD",
            "value": "920"
        }, {
            "id": "DE",
            "value": "4607"
        },

        {
            "id": "RI",
            "value": "4890"
        }, {
            "id": "WA",
            "value": "34927"
        },

        {
            "id": "OR",
            "value": "65798"
        }, {
            "id": "CA",
            "value": "61861"
        },

        {
            "id": "AK",
            "value": "58911"
        }, {
            "id": "ID",
            "value": "42662"
        },

        {
            "id": "NV",
            "value": "78041"
        }, {
            "id": "AZ",
            "value": "41558"
        },

        {
            "id": "MT",
            "value": "62942"
        }, {
            "id": "WY",
            "value": "78834"
        },

        {
            "id": "UT",
            "value": "50512"
        }, {
            "id": "CO",
            "value": "73026"
        },

        {
            "id": "NM",
            "value": "78865"
        }, {
            "id": "ND",
            "value": "50554"
        },

        {
            "id": "SD",
            "value": "35922"
        }, {
            "id": "NE",
            "value": "43736"
        },

        {
            "id": "KS",
            "value": "32681"
        }, {
            "id": "OK",
            "value": "79038"
        },

        {
            "id": "TX",
            "value": "75425"
        }, {
            "id": "MN",
            "value": "43485"
        },

        {
            "id": "IA",
            "value": "46515"
        }, {
            "id": "MO",
            "value": "63715"
        },

        {
            "id": "AR",
            "value": "34497"
        }, {
            "id": "LA",
            "value": "70706"
        },

        {
            "id": "WI",
            "value": "42382"
        }, {
            "id": "IL",
            "value": "73202"
        },

        {
            "id": "KY",
            "value": "79118"
        }, {
            "id": "TN",
            "value": "44657"
        },

        {
            "id": "MS",
            "value": "66205"
        }, {
            "id": "AL",
            "value": "75873"
        },

        {
            "id": "GA",
            "value": "76895"
        }, {
            "id": "MI",
            "value": "67695"
        },

        {
            "id": "IN",
            "value": "33592"
        }, {
            "id": "OH",
            "value": "32960"
        },

        {
            "id": "PA",
            "value": "54346"
        }, {
            "id": "NY",
            "value": "42828"
        },

        {
            "id": "VT",
            "value": "77411"
        }, {
            "id": "NH",
            "value": "51403"
        },

        {
            "id": "ME",
            "value": "64636"
        }, {
            "id": "MA",
            "value": "51767"
        },

        {
            "id": "CT",
            "value": "57353"
        }, {
            "id": "NJ",
            "value": "80788"
        },

        {
            "id": "WV",
            "value": "95890"
        }, {
            "id": "VA",
            "value": "83140"
        },

        {
            "id": "NC",
            "value": "97344"
        }, {
            "id": "SC",
            "value": "88234"
        }, {
            "id": "FL",
            "value": "88234"
        }
    ]
}
```

A list of states of USA, and their respective `id`, can be found at[ here](https://www.fusioncharts.com/dev/maps/spec-sheets/usa).

For a **complete set of attributes** (the stuff within dataSource) and the **XML equivalent** of the JSON, refer [here](https://www.fusioncharts.com/dev/maps/attribute-reference).

Get the **customization tips** for the chart, refer to [Building Your First Map](https://www.fusioncharts.com/dev/chart-guide/getting-started/building-your-first-map).