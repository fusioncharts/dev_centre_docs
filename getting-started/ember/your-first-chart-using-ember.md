---
title: Your First Chart in Ember using FusionCharts | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts Ember component.
heading: Your First Chart in Ember using FusionCharts
---

The **ember-fusioncharts** component, provide bindings for FusionCharts JavaScript charting library. It lets you add interactive JavaScript charts and graphs to your web and mobile applications using EmberJS component.

In this page, we'll see how to install FusionCharts and render a chart using the `ember-fusionCharts` component.

## Installation

To install **FusionCharts** and the `ember-fusioncharts` component via `npm` follow the steps below:

**Step 1:** Install `fusioncharts` core library

```PowerShell
$ npm install fusioncharts --save
```

**Step 2:** Install `ember-fusioncharts`

You can install `ember-fusioncharts` component for any of the following CLI:

```PowerShell
$ ember install ember-fusioncharts

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

To render the chart using `ember-fusioncharts` component, follow the steps below:

**Step 1:** In `ember-cli-build.js` file include the necessary files and add the dependency.

* Include FusionCharts library to your `ember-cli-build.js` file

* Include `ember-fusioncharts` to your `ember-cli-build.js` file

* Include specific modules to your `ember-cli-build.js` file

* Include the FusionCharts theme file to apply the style to the charts

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

```
/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    let app = new EmberApp(defaults, {
    // Add options here
    });

    // Import fusioncharts library
    app.import('bower_components/fusioncharts/fusioncharts.js');
    app.import('bower_components/fusioncharts/fusioncharts.charts.js');
    app.import('bower_components/fusioncharts/themes/fusioncharts.theme.fusion.js');
    // Use `app.import` to import additional libraries/files
    return app.toTree();
};
```

**Step 2:** Create Component and specify the chart data in `chart-viewer.js` file

* Create a simple component (e.g. chart-viewer) to render your chart.

* Add data to `chart-viewer.js` file

* Set the chart `width` and `height`

* Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

* Set the data source

```
$ ember g component chart-viewer
```

```
import Component from '@ember/component';

const myDataSource = {
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

export default Component.extend({
    title: 'Ember FusionCharts Sample',
    width: 700,
    height: 400,
    type: 'column2d',
    dataFormat: 'json',
    dataSource: myDataSource
});
```

**Step 3:** Add data to `chart-viewer.hbs`

Add `fusioncharts` component to your `chart-viewer.hbs` template to render the chart:

```
<h1>{{ title }}</h1>

{{fusioncharts-xt
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource
}}
```

**Step 4:** Add data to `application.hbs`

Add `chart-viewer` component to your `application.hbs` template:

```
{{chart-viewer}}

{{outlet}}
```

That's it! Your first chart using `ember-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.