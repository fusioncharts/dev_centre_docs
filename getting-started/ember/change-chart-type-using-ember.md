---
title: Change Chart Type at Runtime | FusionCharts
description: Change Chart Type at Runtime with FusionCharts using this comprehensive guide. Create visually appealing applications effortlessly. Visit our website now.
heading: Change Chart Type at Runtime
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using `ember-fusioncharts` component. The chart types used in the sample is:

* Column 2D
* Bar 2D
* Pie 2D

## A chart configured to change the chart type, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

### Setup `ember-cli-build.js`

In this step we will include all the necessary files and add the dependency to create the chart. The code is given below:

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

export default Component.extend({    
    id: 'run-time-chart',    
    width: 700,
    height: 400,
    type: 'column2d',
    dataFormat: 'json',
    dataSource: {
	    // Chart configuration
	    "chart": {
	        "caption": "Countries With Most Oil Reserves [2017-18]",
	        "subCaption": "In MMbbl = One Million barrels",
	        "xAxisName": "Country",
	        "yAxisName": "Reserves (MMbbl)",
	        "numberSuffix": "K",
	        "theme": "fusion"
	    },
	    // Chart data
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
        changeChart(value) {
            FusionCharts.items['run-time-chart'].chartType(value);
        }        
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

3. Add the `changeChart()` function to change the chart type at runtime.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
    id=id
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource
}}    

<div id="config-container">
    <span id="select-text">Choose a dimension:</span>
    <div class="change-type">
    	<div id="radio1">
        	<input name="chart-selector" id="radioButton1" type="radio" value="column2d" checked="checked" onchange={{ action "changeChart" value="target.value" }}/>
        	<label for="radioButton1">Column 2D Chart</label>
      	</div>
      	<div id="radio2">
        	<input name="chart-selector" id="radioButton2" type="radio" value="bar2d" onchange={{ action "changeChart" value="target.value" }}/>
        	<label for="radioButton2">Bar 2D Chart</label>
      	</div>
      	<div id="radio3">
        	<input name="chart-selector" id="radioButton3" type="radio" value="line" onchange={{ action "changeChart" value="target.value" }}/>
        	<label for="radioButton3">Line Chart</label>
      	</div>
    </div>
</div>
```

In the above code:

1. Add the `fusioncharts` component to render the chart.

2. Add the **Radio Buttons** using `<input>` inside the `<div>`.
