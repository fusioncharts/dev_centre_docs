---
title: Lifecycle Events using Vue | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using vue.
heading: Lifecycle Events using Vue
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart using `vue-fusioncharts` component.

## A chart is shown below:

{% embed_chartData lifecycle-event-example-1.js json %}

The code to render a chart is given below:

```
//Including Vue
import Vue from 'vue';

// Include the vue-fusioncharts component
import VueFusionCharts from 'vue-fusioncharts';

//Include the FusionCharts library
import FusionCharts from 'fusioncharts';

//Include the chart type
import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Register VueFusionCharts component
Vue.use(VueFusionCharts);

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

var app = new Vue({
    el: '#app',
    data: {
        width: '700',
        height: '400',
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
        displayValue: '<b>Status: </b>'
    },
    methods: {
        // Binding Life Cycle events
        beforeDataUpdate: function() {
            let prevValue = this.displayValue;
            this.displayValue = prevValue + " beforeDataUpdate";
        },
        dataUpdated: function() {
            let prevValue = this.displayValue;
            this.displayValue = prevValue + ", dataUpdated";
        },
        drawComplete: function() {
            let prevValue = this.displayValue;
            this.displayValue = prevValue + ", drawComplete";
        },
        renderComplete: function() {
            let prevValue = this.displayValue;
            this.displayValue = prevValue + ", renderComplete";
        }
    }
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```HTML
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    @beforeDataUpdate="beforeDataUpdate"
    @dataUpdated="dataUpdated"
    @drawComplete="drawComplete"
    @renderComplete="renderComplete"
    ></fusioncharts>
    <div v-html="displayValue"></div>
</div>
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `vue-fusioncharts`, `fusioncharts`, etc.

2. Register `vue-fusioncharts` component.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. In the above sample:
    * `beforeDataUpdate` event is fired.
    * `dataUpdated` event is fired.
    * `drawComplete` event is fired.
    * `renderComplete` event is fired.

5. Create a `fusioncharts` directive in a template. 

6. Create a `<div>` to display the content related to the event applied to the chart.
