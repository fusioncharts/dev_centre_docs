---
title: Dynamically Add Chart Event Listener using Vue | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using vue.
heading: Dynamically Add Chart Event Listener using Vue
---

## The code to render a chart is given below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using `vue-fusioncharts` component.

A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

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

var handler = function (e) {
        this.message = `You have clicked plot <b>${e.data.categoryLabel}</b> whose value is <b>${e.data.displayValue}</b>.`
     },
    attached = false,
    defaultMessage = 'Click the below buttons to add an event dynamically to the chart.';

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
        listen: false,
        remove: true,
        message: defaultMessage
    },
    methods: {
        // attach event handler to 'dataPlotClick' event once
        attachHandler: function () {
            if (attached) return;
            attached = true;
            this.listen = true;
            this.remove = false;
            handler = handler.bind(this);
            this.message = 'Click on a plot to see the value along with the label'
            FusionCharts.addEventListener('dataPlotClick', handler);
        },
        // removes the event handler of 'dataPlotClick' when not required
        removeHandler: function () {
            attached = false;
            this.listen = false;
            this.remove = true;
            this.message = defaultMessage;
            FusionCharts.removeEventListener('dataPlotClick', handler);
        },
        // removes the event handler of 'dataPlotClick' when chart get disposed
        disposed: function () {
            FusionCharts.removeEventListener('dataPlotClick', handler);
        }
    }
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    @disposed="disposed"
    ></fusioncharts>
    <div v-html="message" ></div>
    <br>
    <div>
        <button v-bind:class="{disabled: listen}" @click="attachHandler">Add/Listen to dataplotclick event</button>
        <button v-bind:class="{disabled: remove}" @click="removeHandler">Remove dataplotclick event</button>
    </div>
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
	* Attach an event handler using `attachHandler` to `dataPlotClick` event.
	* Remove an event handler using `removeHandler` from `dataPlotClick` event when not required.
	* Remove an event handler `disposed` from `dataPlotClick` event when chart gets disposed.

5. Create a `fusioncharts` directive in a template. 

6. Create buttons in a template to:
	* Add/Listen to the `dataPlotClick` event
	* Remove `dataPlotClick` event
