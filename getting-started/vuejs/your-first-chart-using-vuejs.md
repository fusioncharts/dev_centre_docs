---
title: Your First Chart in Vue using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the vue-fusioncharts component.
heading: Your First Chart in Vue using FusionCharts
chartPresent: false
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. In this page, we'll see how to render charts using FusionCharts and Vue-FusionCharts plugin. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/vuejs/your-first-chart-using-vuejs#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/vuejs/your-first-chart-using-vuejs#create-your-first-gauge-7) and a [map]({% site.baseurl %}/getting-started/vuejs/your-first-chart-using-vuejs#create-your-first-map-10).

Before going through this article, please [install]({% site.baseurl %}/getting-started/vuejs/install-using-vuejs '@@open-newtab') `vue-fusioncharts` plugin, if not already installed.

## Create your first chart

In this section, we will create a chart using `vue-fusioncharts`. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

To create charts, the `vue-fusioncharts` component can be passed as a part of another VueJs component.

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

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. For Vue, we recommend JSON format. The converted format will look as shown below:

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

For the detailed list of cosmetic attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

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
        width: '700', // Width of the chart
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

* `app.type`: You must set it to the chart type you want to render. For a complete list of all charts and their types, refer to [Chart Gallery]({% site.baseurl %}/demos/chart-gallery#Gallary '@@open-newtab') and explore the desired type in detail.
* `app.dataSource`: Each chart has its own data schema that defines the chart configuration and the source of data. Therefore, this object varies significantly, depending of the type of chart.

Now, go on and explore other 95+ chart types that we've in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attribute]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

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

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. For Vue, we recommend JSON format. The converted format will look as shown below:

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
        width: '450', // Width of the chart
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

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. For Vue, we recommend JSON format. The converted format will look as shown below:

```javascript
{
    // Map Configuration
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
        "color": [{
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
    // Source data as JSON --> id represents countries of world.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
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
        type: 'world', // Map type
        renderAt: 'chart-container', // Container
        width: '800', // Width of the chart
        height: '550', // Height of the chart
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

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of usa. The respective `id`, can be found [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.