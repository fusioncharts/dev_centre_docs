---
title: Special Events using Ember | FusionCharts
description: Explore the potential of Special Events with Ember using the FusionCharts Suite XT API. Delve into our comprehensive article to uncover more insights on Ember.
heading: Special Events using Ember
---

## A drag-able column chart is shown below:

FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically drag the column and see modified value as text using `ember-fusioncharts` component.

A drag-able column chart is shown below:

{% embed_chartData special-events-example-1.js json %}

### Setup `ember-cli-build.js`

In this step we will include all the necessary files and add the dependency to create the **Drag-able** chart. The code is given below:

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
    app.import('bower_components/fusioncharts/fusioncharts.powercharts.js');
    app.import('bower_components/fusioncharts/themes/fusioncharts.theme.fusion.js');    

    return app.toTree();
};
```

In the above code, include the necessary libraries and components using import. For example, `ember-fusioncharts`, `fusioncharts`, etc.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

### Add chart data to `chart-viewer.js`

Add the following code to `chart-viewer.js`:

```
import Component from '@ember/component';

export default Component.extend({    
    width: 700,
    height: 400,
    type: 'dragcolumn2d',
    dataFormat: 'json',
    dataSource: {
	    "chart": {
	        "caption": "Android and iOS Devices Sales Projections",
	        "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
	        "numberPrefix": "$",
	        "numberSuffix": "M",
	        "yaxismaxvalue": "200",
	        "theme": "fusion",
	        "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
	    },
	    "categories": [{
	        "category": [{
                "label": "2014",
                "fontItalic": "0"
            }, {
                "label": "2015",
                "fontItalic": "0"
            }, {
                "label": "2016",
                "fontItalic": "0"
            }, {
                "label": "2017 (Projected)"
            }, {
                "label": "2018 (Projected)"
            }]
	    }],
	    "dataset": [{
	        "seriesname": "Android Devices",
	        "data": [{
                "value": "73",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "80",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "97",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "110",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "180",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
        }, {
            "seriesname": "iOS Devices",
            "data": [{
                "value": "63.2",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "68",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "82",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "99",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "150",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
	    }]
	},    
    events: null,
    message: 'Drag any column for years 2017 or 2018 to see updated value along with the label',

    init() {
        this._super(...arguments);
        const self = this;
        this.set('events', {
            dataplotdragend: function (eventObj, dataObj) {
                self.set('message', dataObj.datasetName + ' is modified to $' + FusionCharts.formatNumber(dataObj.endValue.toFixed(2)) + 'M from $' + FusionCharts.formatNumber(dataObj.startValue.toFixed(2)) + 'M');
            }
        });
    }    
});
```

In the above code:

1. Create a chart component to render the chart.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Set the `message which gets displayed with the rendering of the chart.

4. Call the `init()` funtion for `dragPlotDragEnd` event to show a message with the dataset's initial value and final value of the dragged column.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource
    events=events
}}

<p style="padding: 10px; background: rgb(245, 242, 240);">{{ message }}</p>
```

In the above code, add the `fusioncharts` component to render the chart.
