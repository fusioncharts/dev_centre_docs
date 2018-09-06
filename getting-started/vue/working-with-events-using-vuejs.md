---
title: Working with Events | FusionCharts
description: This article talks about the Events using VueJS.
heading: Working with Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

Take a look at the pie chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one pie slice and see how the text (the slice label and the no. of visitors) rendered below the chart changes.

For example, if you roll the mouse pointer over the __Senior__ slice, the following text is displayed is below the chart:
__Age group: Senior__
__No. of visitors: 491000__

To attach event listeners to FusionCharts, use `v-on` or `@` operator in the `vue-fusioncharts` component.

The event name string should be in **'fusioncharts[event name in lowercase]'** format. Example, to attach an event listener to `dataplotRollOver`, the string will be `fusionchartsdataplotrollover`.

Let's take an example below that tracks hover events on a data plot.

```JavaScript
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Pie2D from 'fusioncharts/viz/pie2d'

//import the theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Pie2D, FusionTheme)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/;

var app = new Vue({
    el: '#app',
    data: {
        width: '450',
        height: '350',
        type: 'pie2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of visitors by age group-FY2013-14",
                "subCaption": "Harry's SuperMart",
                "enableSmartLabels": "0",
                "showPercentValues": "1",
                "showTooltip": "0",
                "decimals": "1",
                "theme": "fusion"
            },
            "data": [{
                "label": "Teenage",
                "value": "1250400"
            }, {
                "label": "Adult",
                "value": "1463300"
            }, {
                "label": "Mid-age",
                "value": "1050700"
            }, {
                "label": "Senior",
                "value": "491000"
            }]
        },
    },
    methods: {
        // uses the data info of the event 'dataplotrollover' and represents it
        dataplotRollover: function (e) {
			this.displayValue = `You’re are currently hovering over ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`;
		}
    }
});
```

Refer to the code below where the code snippet for dataplotRollOver event has been specified.

```
dataplotRollover: function (e) {
	this.displayValue = `You’re are currently hovering over ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`;
}
```

In the above code `dataplotRollOver` event is triggered when the mouse pointer is rolled over a data plot.

The HTML template to render the above chart is:

```
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    @dataplotRollover="dataplotRollover"
    ></fusioncharts>
    <div v-html="displayValue"></div>
</div>
```