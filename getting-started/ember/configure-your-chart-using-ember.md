---
title: Configuring your Chart using React | FusionCharts
description: This article focuses on different type of configurations possible using the react.
heading: Configuring your Chart using React
---

FusionCharts Suite XT includes advanced features that let you add more context to your charts and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using the `ember-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/ember/configure-your-chart-using-ember#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/ember/configure-your-chart-using-ember#update-chart-attributes-5)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chartData configure-charts-using-angular-example-1.js json %}

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

In the above code necessary libraries and components have been included using import. For example, `ember-fusioncharts`, `fusioncharts`, etc.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

### Add chart data to `chart-viewer.js`

Add the following code to `chart-viewer.js`:

```
import Component from '@ember/component';

function getRandomNumber() {
    var max = 300, min = 50;
    return Math.round(((max - min) * Math.random()) + min);
}

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
    actions: {
        updateData() {
            const prevDs = Object.assign({}, this.get('dataSource'));            
            prevDs.data[2].value = getRandomNumber();            
            prevDs.data[3].value = getRandomNumber();
            this.set('dataSource', prevDs);
        }
    }
});
```

In the above code:

1. A chart component is created to render the chart.

2. To update the chart we have generated random data using **Math.random()**.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

4. `updateData()` function is added to randomly update the value of the chart when the button is clicked.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource}}

<button {{action "updateData"}}>CHANGE CHART DATA</button>
```

In the above code:

1. `fusioncharts` component is added to `chart-viewer.hbs` template to render the chart.

2. A **button** has been added using `<button>` which will update the data when clicked.