---
title: Your First Chart in Ember using FusionCharts | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts Ember component.
heading: Your First Chart in Ember using FusionCharts
---

The **ember-fusioncharts** component, provide bindings for FusionCharts JavaScript charting library. It lets you add interactive JavaScript charts and graphs to your web and mobile applications using EmberJS component.

In this page, we'll see how to install FusionCharts and render a chart using the `ember-fusionCharts` component.

## Installation

To install **FusionCharts** and the `ember-fusioncharts` component via `npm` follow the steps below:

**Step 1:** Install `ember-fusioncharts`

You can install `ember-fusioncharts` component for any of the following CLI:

**Modern Ember CLI**

```PowerShell
$ ember install ember-fusioncharts
```

**Earlier Ember CLI (and addon developers)**

```PowerShell
$ npm install ember-fusioncharts --save-dev
$ ember g ember-fusioncharts
```

**Step 2:** Install `fusioncharts` core library

```PowerShell
$ npm install fusioncharts --save
```

That completes the installation of **FusionCharts** and the `ember-fusioncharts` component.

## Create your first chart

Let's create a Column 2D chart using the `ember-fusioncharts` component showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart.js %}

The data for the above chart is shown in the table below:

Country|No. of Oil Reserves||
-|-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format as shown below:

```json
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

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example,  [single-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts. 

In the above JSON data: 

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the `data` array.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the chart

