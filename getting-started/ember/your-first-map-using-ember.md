---
title: Your First Map in Ember using FusionCharts | FusionCharts
description: This article outlines the steps to create your first map using the fusionCharts Ember component.
heading: Your First Map in Ember using FusionCharts
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

## Create your first map

In this section, we will create a visualization using the **World Map** showing the average annual population growth. 

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in the table below:


State|Entity Name|Value||
-|-|-|-
North America|NA|82||
South America|SA|2.04||
Asia|AS|1.78||
Europe|EU|40||
Africa|AF|2.58||
Australia|AU|1.30||

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format.

In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column.

However, when you convert the data into a format (JSON or XML) supported by FusionCharts, the entities are denoted by the `id` key in the `data` object.

For any map visualization, it is important to provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF` and not `AFR`.

We have a detailed [Map Specification Sheets ](https://www.fusioncharts.com/dev/maps/spec-sheets/world)for all the maps that can be rendered using FusionCharts, where you can find the correct `id` of the maps you want to create.

 In this example, we will use the JSON format as shown below:

```JSON

{
    // Map Configuration
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        ...
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
        }, …

]
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
    }, …

}

```

In the above JSON data: 

* Create the `chart` object to define the elements of the map.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify the `min` and `max` value within the `color` array under the `colorRange` array.

* Create the `data` array to define the id of the continents and their corresponding values along with configurations.

The `chart` object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have converted the tabular data to JSON format, let's learn how to render the map.

## Render the map

To render the map follow the steps below: