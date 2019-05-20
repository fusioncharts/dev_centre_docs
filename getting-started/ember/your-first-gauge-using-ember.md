---
title: Create a Gauge in Ember | FusionCharts
description: This article outlines the steps to create your first gauge using the fusionCharts Ember component.
heading: Create a Gauge in Ember Using Ember
---

The **ember-fusioncharts** component, provide bindings for FusionCharts JavaScript charting library. It lets you add interactive JavaScript charts and graphs to your web and mobile applications using EmberJS component.

In this page, we'll see how to install FusionCharts and render a chart using the `ember-fusionCharts` component.

## Installation

To install **FusionCharts** and the `ember-fusioncharts` component via `npm` follow the steps below:

**Step 1:** Install `fusioncharts` core library

```bash
$ npm install fusioncharts --save
```

**Step 2:** Install `ember-fusioncharts`

You can install `ember-fusioncharts` component for any of the following CLI:

```bash
$ ember install ember-fusioncharts
```

That completes the installation of **FusionCharts** and the `ember-fusioncharts` component.

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range  | Color  | Hex Code |
| ------ | ------ | -------- |
| 0-50   | Red    | #F2726F  |
| 50-75  | Yellow | #FFC533  |
| 75-100 | Green  | #62B58F  |

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Nordstrom's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  // Chart Data
  "colorRange": {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
}
```

In the above JSON:

- Create the `chart` object to define the elements of the gauge.

- Create the `colorRange` object to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

- Set the `code` attribute to specify the hex color of respective ranges.

- Create the `dials` object to represent the customer satisfaction score.

- Create the `dial` object under `dials` object to set the value of customer satisfaction score.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Gauge

To render the gauge using `ember-fusioncharts` component, follow the steps below:

**Step 1:** In `ember-cli-build.js` file include the necessary files and add the dependency.

- Include FusionCharts library to your `ember-cli-build.js` file.

- Include **FusionWidgets** to render a gauge.

- Include `ember-fusioncharts` to your `ember-cli-build.js` file.

- Include specific modules to your `ember-cli-build.js` file.

- Include the FusionCharts theme file to apply the style to the charts.

- Include the `ExcelExport` module to export chart data in XLSX format.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

```javascript
/* eslint-env node */
"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Import fusioncharts library
  app.import("node_modules/fusioncharts/fusioncharts.js");
  app.import("node_modules/fusioncharts/fusioncharts.widgets.js");
  app.import("node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
  app.import("node_modules/fusioncharts/features/excelexport");
  // Use `app.import` to import additional libraries/files
  return app.toTree();
};
```

**Step 2:** Create Component and specify the gauge data in `chart-viewer.js` file

- Create a simple component (e.g. chart-viewer) to render your gauge.

- Add data to `chart-viewer.js` file

- Set the gauge `width` and `height`

- Set the chart type as `angulargauge`. Each chart type is represented with a unique chart alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

- Set the data source

```bash
$ ember g component chart-viewer
```

```javascript
import Component from "@ember/component";

const myDataSource = {
  // Chart Configuration
  chart: {
    caption: "Nordstrom's Customer Satisfaction Score for 2017",
    lowerLimit: "0",
    upperLimit: "100",
    showValue: "1",
    numberSuffix: "%",
    theme: "fusion",
    showToolTip: "0"
  },
  // Chart Data
  colorRange: {
    color: [
      {
        minValue: "0",
        maxValue: "50",
        code: "#F2726F"
      },
      {
        minValue: "50",
        maxValue: "75",
        code: "#FFC533"
      },
      {
        minValue: "75",
        maxValue: "100",
        code: "#62B58F"
      }
    ]
  },
  dials: {
    dial: [
      {
        value: "81"
      }
    ]
  }
}; // end of this.dataSource

export default Component.extend({
  title: "Ember FusionCharts Sample",
  width: 450,
  height: 250,
  type: "angulargauge",
  dataFormat: "json",
  dataSource: myDataSource
});
```

**Step 3:** Add data to `chart-viewer.hbs`

Add `fusioncharts` component to your `chart-viewer.hbs` template to render the chart:

```html
<h1>{{ title }}</h1>

{{fusioncharts-xt width=width height=height type=type dataFormat=dataFormat
dataSource=dataSource }}
```

**Step 4:** Add data to `application.hbs`

Add `chart-viewer` component to your `application.hbs` template:

```html
{{chart-viewer}} {{outlet}}
```

That's it! Your first gauge using `ember-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
