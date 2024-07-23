---
title: Slice Data Plot using API | FusionCharts
description: Slice Data Plot using API with FusionCharts using this comprehensive guide. Create visually appealing applications effortlessly. Visit our website now.
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offers a wide range of APIs that you can use for different stages in the ife cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using `ember-fusioncharts` component. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

## Setup `ember-cli-build.js`

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
    id: 'slice-chart',    
    width: 450,
    height: 250,
    type: 'pie2d',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Market Share of Web Servers",
            "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
            "showLegend": "1",
            "showPercentValues": "1",
            "legendPosition": "bottom",
            "useDataPlotColorForLabels": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Apache",
            "value": "32647479"
        }, {
            "label": "Microsoft",
            "value": "22100932"
        }, {
            "label": "Zeus",
            "value": "14376"
        }, {
            "label": "Other",
            "value": "18674221"
        }]
    },
    actions: {
        changeItem(value) {
            var val = parseInt(value);
            if(val < 0) {
                for (var i in dataSource.data) {
                    FusionCharts.items['slice-chart'].slicePlotItem(i, false)
                }
            }
            else {
                FusionCharts.items['slice-chart'].slicePlotItem(val, true);
            }
        }        
    }
});
```

In the above code:

1. Create a chart component to render the chart.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Add the `changeItem()` function to change the chart type at runtime.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
    id=id
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource}}

<div style="display: flex; position: absolute; bottom: 2px;">
    <div id="select-text">Choose an item:</div>
    <div class="change-type">
        <div id="radio1">
            <input name="item-selector" id="radioButton1" type="radio" checked="checked" value="-1" onchange={{ action 'changeItem' value='target.value'}}/>
            <label for="radioButton1">None</label>
        </div>
        <div id="radio2">
            <input name="item-selector" id="radioButton2" type="radio" value="0" onchange={{ action 'changeItem' value='target.value'}}/>
            <label for="radioButton2">Apache</label>
        </div>
        <div id="radio3">
            <input name="item-selector" id="radioButton3" type="radio" value="1" onchange={{ action 'changeItem' value='target.value'}}/>
            <label for="radioButton3">Microsoft</label>
        </div>
        <div id="radio4">
            <input name="item-selector" id="radioButton4" type="radio" value="2" onchange={{ action 'changeItem' value='target.value'}}/>
            <label for="radioButton4">Zeus</label>
        </div>
        <div id="radio5">
            <input name="item-selector" id="radioButton5" type="radio" value="3" onchange={{ action 'changeItem' value='target.value'}}/>
            <label for="radioButton5">Other</label>
        </div>
    </div>
</div>
```

In the above code:

1. Add the `fusioncharts` component to render the chart.

2. Add the **Radio Buttons** using `<input>` inside the `<div>`.
