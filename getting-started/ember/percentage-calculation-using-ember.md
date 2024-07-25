---
title: Percentage Calculation | FusionCharts
description: Percentage Calculation in ember with FusionCharts using this comprehensive guide. Create visually appealing applications effortlessly. Visit our website now.
heading: Percentage Calculation
---

## A chart configured to calculate the percent, is shown below:

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, percentage calculation, and events.

This article focuses on how you can calculate the percentage of a data plot with respect to all the data plots using `ember-fusioncharts` component.

A chart configured to calculate the percent, is shown below:

{% embed_chartData percentage-calculation-example-1.js json %}

### Setup `ember-cli-build.js`

In this step we will include all the necessary files and add the dependency to create the **Column 2D** chart. The code is given below:

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

In the above code, include the necessary libraries and components using import. For example, `ember-fusioncharts`, `fusioncharts`, etc.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

### Add chart data to `chart-viewer.js`

Add the following code to `chart-viewer.js`:

```
import Component from '@ember/component';

var total = dataSource.data.reduce((p,c) => p + Number(c.value), 0);

export default Component.extend({    
    width: 700,
    height: 400,
    type: 'column2d',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
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
    },    
    events: null,
    message: 'Hover on the plot to see the percentage along with the label',

    init() {
        this._super(...arguments);
        const self = this;
        this.set('events', {
            dataplotRollOver: function (eventObj, dataObj) {
                var value = (dataObj.value / total * 100).toFixed(2);
                self.set('message', dataObj.categoryLabel + ' is ' + value +'% of top 8 oil reserve countries');
            },
            dataplotRollOut: function (eventObj, dataObj) {
                self.set('message', 'Hover on the plot to see the percentage along with the label');
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

3. Set the `message` which gets displayed with the rendering of the chart.

4. Call the `init()` funtion where: 
	* `dataplotrollover` event shows the percentage of the hovered plot.
	* `dataplotrollout` event resets the default message.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource
    events=events}}

<p>{{ message }}</p>
```

In the above code:

1. Add the `fusioncharts` component to render the chart.

2. Display the **message** using `<p>`.
