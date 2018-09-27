---
title: Add Annotations | FusionCharts
description: This article focuses on different type of configurations possible using the ember.
heading: Add Annotations
---

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

In this article we'll create a **Spline** chart and add annotations using `ember-fusioncharts` component. A spline chart using annotations to highlight a particular anchor along with text is shown below:

{% embed_chartData configure-charts-using-react-example-3.js json %}

### Setup `ember-cli-build.js`

In this step we will include all the necessary files and add the dependency to create the **Spline** chart. The code is given below:

```
/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
    let app = new EmberAddon(defaults, {
        // Add options here
    });

    // Import FusionCharts library
    app.import('bower_components/fusioncharts/fusioncharts.js');
    app.import('bower_components/fusioncharts/fusioncharts.charts.js');        
    app.import('bower_components/fusioncharts/themes/fusioncharts.theme.fusion.js');    

    return app.toTree();
};
```

In the above code necessary libraries and components have been included using import. For example, `ember-fusioncharts`, `fusioncharts`, etc.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

### Add chart data to `chart-viewer.js`

Add the following code to `chart-viewer.js`:

```
import Component from '@ember/component';

export default Component.extend({
    width: 700,
    height: 400,
    type: 'spline',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Average Monthly Temperature in Texas",
            "yAxisName": "Average Monthly Temperature",
            "anchorradius": "5",
            "plotToolText": "Average temperature in $label is <b>$dataValue</b>",
            "showHoverEffect": "1",
            "showvalues": "0",
            "numberSuffix": "°C",
            "theme": "fusion",
            "anchorBgColor": "#72D7B2",
            "paletteColors": "#72D7B2"
        },
        "annotations": {
            "groups": [{
                "id": "anchor-highlight",
                "items": [{
                    "id": "high-star",
                    "type": "circle",
                    "x": "$dataset.0.set.7.x",
                    "y": "$dataset.0.set.7.y",
                    "radius": "12",
                    "color": "#cc0000",
                    "border": "2",
                    "borderColor": "#0075c2"
                }, {
                    "id": "label",
                    "type": "text",
                    "text": "Hottest Month",
                    "fillcolor": "#0075c2",
                    "rotate": "90",
                    "x": "$dataset.0.set.7.x+75",
                    "y": "$dataset.0.set.7.y-2"
                }]
            }]
        },
        "data": [{
            "label": "Jan",
            "value": "1"
        }, {
            "label": "Feb",
            "value": "5"
        }, {
            "label": "Mar",
            "value": "10"
        }, {
            "label": "Apr",
            "value": "12"
        }, {
            "label": "May",
            "value": "14"
        }, {
            "label": "Jun",
            "value": "16"
        }, {
            "label": "Jul",
            "value": "20"
        }, {
            "label": "Aug",
            "value": "22"
        }, {
            "label": "Sep",
            "value": "20"
        }, {
            "label": "Oct",
            "value": "16"
        }, {
            "label": "Nov",
            "value": "7"
        }, {
            "label": "Dec",
            "value": "2"
        }]
    }
});
```

In the above code:

1. A chart component is created to render the chart.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `spline`. For Spline chart, the alias is `spline`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embedded as the value of the `dataSource`.
    * In the `dataSource`, an `annotations` object is created to specify the cosmetics and functionalities of the annotation.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource
}}
```

In the above code `fusioncharts` component is added to `chart-viewer.hbs` template to render the chart.