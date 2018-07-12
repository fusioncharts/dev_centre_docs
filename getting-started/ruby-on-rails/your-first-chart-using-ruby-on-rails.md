---
permalink: getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails.html
title: Your First Chart in Ruby using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the ruby-on-rails.
heading: Your First Chart in Ruby using FusionCharts
chartPresent: false
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. In this page, we'll see how to render charts using FusionCharts and Vue-FusionCharts plugin. We'll start with simple examples of creating a [chart]({% site.baseurl %}/using-with-javascript-libraries/vuejs/your-first-chart#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/using-with-javascript-libraries/vuejs/your-first-chart#create-your-first-gauge-7) and a [map]({% site.baseurl %}/using-with-javascript-libraries/vuejs/your-first-chart#create-your-first-map-10).

Before going through this article, please [install]({% site.baseurl %}/using-with-javascript-libraries/vuejs/installation '@@open-newtab') `vue-fusioncharts` plugin, if not already installed.

## Create your first chart

In this section, we will create a chart using `vue-fusioncharts`. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

To create charts, the `vue-fusioncharts` component can be passed as a part of another VueJs component.

Let's start with a simple example of "Monthly revenue" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

### The data for this chart is represented in a table below:

Month|Revenue|
-|-
January|$420,000|
February|$810,000|
March|$720,000|
April|$550,000|
May|$910,000|
June|$510,000|
July|$680,000|
August|$620,000|
September|$610,000|
October|$490,000|
November|$900,000|
December|$730,000|

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. For Vue, we recommend JSON format. The converted format will look as shown below:

> There are different formats of JSON for different groups of charts in FusionCharts - e.g., single-series (which you're seeing here), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Monthly revenue for last year",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Month",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "showLabel": "1",
        "showValue": "1",
        "theme": "fusion"
    },
    // Chart Data
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

### Create an instance of the chart

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart by passing VueJS component is given below:

```javascript
// Use the Vue.use() global method
Vue.use(VueFusionCharts);
const app = new Vue({
    el: '#app',
    data: {
        type: 'column2d', // The chart type
        width: '600', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            chart: {
                ...
            }
        }
    }
});
```

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 600x400 pixels using `width` and `height`.
* To specify the data format as JSON, we have set the `dataFormat` parameter to json. You can also provide the data in [XML format]({% site.baseurl %}/chart-guide/getting-started/using-xml-as-data-format '@@open-newtab'). 
* The JSON data is embedded as the value of the `dataSource` parameter.

The HTML template of the above sample is shown below:

```html
<div id="app">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
    </fusioncharts>
</div>
```

That's it! When you run this HTML page now, you should see a chart representing your data.

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a column 2D chart.

In the JavaScript code, execution of `var app = new Vue({ })` creates a new Vue instance called app. Depending on the chart type, only two properties of the Vue instance vary mandatorily:

* `app.type`: You must set it to the chart name you want to render. For a complete list of all charts and their types, refer to [Chart Gallery]({% site.baseurl %}/demos/chart-gallery#Gallary '@@open-newtab') and explore the desired type in detail.
* `app.dataSource`: Each chart has its own data schema that defines the chart configuration and the source of data. Thus, this object varies significantly depending of the type of chart.

Now, go on and explore other 95+ chart types that we've in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attribute]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## Create your first gauge

Gauges are powerful tools that can showcase using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple "Weekly Customer Satisfaction Index" gauge as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for his customer satisfaction score has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#e44a00|
50-75|Yellow|#f8bd19|
75-100|Green|#6baa01|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Scores above 75 mean good and is green.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. For Vue, we recommend JSON format. The converted format will look as shown below:

```javascript
{
    // Configuration
    "chart": {
        "caption": "Customer Satisfaction Score",
        "subcaption": "Last week",
        "lowerLimit": "0",
        "upperLimit": "100",
        "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
        "gaugeFillRatio": "15",
        "theme": "fint"
    },
    // Chart data
    "colorRange": {
        "color": [{
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
        }]
    },
    "dials": {
        "dial": [{
            "value": "67"
        }]
    }
}
```

### Create an instance of the gauge

In this step, we will create an instance of the chart type as **angulargauge**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart by passing VueJS component is given below:

```javascript
// Use the vue.use() global method
Vue.use(VueFusionCharts);
const app = new Vue({
    el: '#app',
    data: {
        type: 'angulargauge', // Chart type
        renderAt: 'chart-container', // Container
        width: '400', // Width of the chart
        height: '250', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
            chart: {
                ...
            }
        }
    }
});
```

The HTML template for the above sample is:

```html
<div id="app">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
    </fusioncharts>
</div>
```

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **USA**. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in a table below:

State|Entity Name|Revenue|
-|-|-
Alabama|AL|$75,873M|
Alaska|AK|$58,911M|
Arizona|AZ|$41,588M|
Arkansas|AR|$34,497M|
California|CA|$61,861M|
...|...|...|
...|...|...|
West Virginia|WV|$95,890M|
Wisconsin|WI|$42,382M|
Wyoning|WY|$78,835M|

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. For Vue, we recommend JSON format. The converted format will look as shown below:

```javascript
{
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
    }, {
        "id": "RI",
        "value": "4890"
    }, {
        "id": "WA",
        "value": "34927"
    }, {
        "id": "OR",
        "value": "65798"
    }, {
        "id": "CA",
        "value": "61861"
    }, {
        "id": "AK",
        "value": "58911"
    }, {
        "id": "ID",
        "value": "42662"
    }, {
        "id": "NV",
        "value": "78041"
    }, {
        "id": "AZ",
        "value": "41558"
    }, {
        "id": "MT",
        "value": "62942"
    }, {
        "id": "WY",
        "value": "78834"
    }, {
        "id": "UT",
        "value": "50512"
    }, {
        "id": "CO",
        "value": "73026"
    }, {
        "id": "NM",
        "value": "78865"
    }, {
        "id": "ND",
        "value": "50554"
    }, {
        "id": "SD",
        "value": "35922"
    }, {
        "id": "NE",
        "value": "43736"
    }, {
        "id": "KS",
        "value": "32681"
    }, {
        "id": "OK",
        "value": "79038"
    }, {
        "id": "TX",
        "value": "75425"
    }, {
        "id": "MN",
        "value": "43485"
    }, {
        "id": "IA",
        "value": "46515"
    }, {
        "id": "MO",
        "value": "63715"
    }, {
        "id": "AR",
        "value": "34497"
    }, {
        "id": "LA",
        "value": "70706"
    }, {
        "id": "WI",
        "value": "42382"
    }, {
        "id": "IL",
        "value": "73202"
    }, {
        "id": "KY",
        "value": "79118"
    }, {
        "id": "TN",
        "value": "44657"
    }, {
        "id": "MS",
        "value": "66205"
    }, {
        "id": "AL",
        "value": "75873"
    }, {
        "id": "GA",
        "value": "76895"
    }, {
        "id": "MI",
        "value": "67695"
    }, {
        "id": "IN",
        "value": "33592"
    }, {
        "id": "OH",
        "value": "32960"
    }, {
        "id": "PA",
        "value": "54346"
    }, {
        "id": "NY",
        "value": "42828"
    }, {
        "id": "VT",
        "value": "77411"
    }, {
        "id": "NH",
        "value": "51403"
    }, {
        "id": "ME",
        "value": "64636"
    }, {
        "id": "MA",
        "value": "51767"
    }, {
        "id": "CT",
        "value": "57353"
    }, {
        "id": "NJ",
        "value": "80788"
    }, {
        "id": "WV",
        "value": "95890"
    }, {
        "id": "VA",
        "value": "83140"
    }, {
        "id": "NC",
        "value": "97344"
    }, {
        "id": "SC",
        "value": "88234"
    }, {
        "id": "FL",
        "value": "88234"
    }]
}
```

### Create an instance of the map

In this step, we will create an instance of the map type as **usa**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart by passing VueJS component is given below:

```javascript
// USe the Vue.use() global method
Vue.use(VueFusionCharts);
const app = new Vue({
    el: '#app',
    data: {
        type: 'usa', // Map type
        renderAt: 'chart-container', // Container
        width: '600', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
            chart: {
                ...
            }
        }
    }
});
```

The HTML template for the above sample is:

```html
<div id="app">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
    </fusioncharts>
</div>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of usa. A list of states of USA, and their respective `id`, can be found at [here]({% site.baseurl %}/maps/spec-sheets/usa '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.