---
title: Your First Gauge in Ember using FusionCharts | FusionCharts
description: This article outlines the steps to create your first gauge using the fusionCharts Ember component.
heading: Your First Gauge in Ember using FusionCharts
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

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data. 

To start with, we'll build a simple angular gauge showcasing Nordstorm's Customer Satisfaction Score as shown below.

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample have been defined using the following range:

Range|Color|Hex Code||
-|-|-|-
0-50|Red|#F2726F||
50-75|Yellow|#FFC533||
75-100|Green|#62B58F||

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. In this example, we will use the JSON format as shown below:

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

In the above JSON: 

* Create the `chart` object to define the elements of the gauge.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify the `min` and `max` value within the `color` array under the `colorRange` array.

* Specify the hex code of the color within the `color` array.

* Create the `dials` array to represent the customer satisfaction score.

* Create the `dial` array under the `dials` array and set the value of the dial.

The `chart` object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have converted the tabular data to JSON format, let's learn how to render the gauge.

## Render the Gauge

To render the gauge follow the steps below: