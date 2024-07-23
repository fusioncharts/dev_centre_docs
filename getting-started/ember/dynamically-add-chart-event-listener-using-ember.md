---
title: Dynamically Add Chart Event Listener using Ember | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using ember.
heading: Dynamically Add Chart Event Listener using Ember
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using `ember-fusioncharts` component.

A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

## Setup `ember-cli-build.js`

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
    message: 'Click the below buttons to add an event dynamically to a chart',
    buttonText: 'ADD/LISTEN TO DATAPLOTCLICK EVENT',
    actions: {
        addEvent() {
            const self = this;
            if(this.get('buttonText') === 'ADD/LISTEN TO DATAPLOTCLICK EVENT') {
                this.set('message', 'Click on the plot to see the value along with the label');
                this.set('buttonText', 'REMOVE DATAPLOTCLICK EVENT');                
                this.set('events', {
                    dataplotclick: function (eventObj, dataObj) {
                        self.set('message', 'You have clicked on plot ' + dataObj.categoryLabel + ' whose value is ' + dataObj.displayValue);
                    }
                });
            }
            else {
                this.set('message', 'Click the below buttons to add an event dynamically to a chart');
                this.set('buttonText', 'ADD/LISTEN TO DATAPLOTCLICK EVENT');
                this.set('events', {
                    dataplotclick: null
                });
            }
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

3. Set the `message` which gets displayed while rendering the chart.

4. Add the `addEventListener` to: 
	* Track plot clicks.
	* Track the clicks on the data plot.
	* Set the default message when data plot tracking is enabled.
	* Set the event listener for `dataPlotClick` event when the message is updated with the values of the data plot.
	* Set the  handler for **Reset** button. The **Reset** button resets the chart to default message and removes the event listener.

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

<div style="padding: 0px; background: rgb(255, 255, 255);" id="message">
    {{ message }}
</div>
<div style="display: flex; justify-content: center; margin: 0px">
    <button class="btn btn-outline-secondary btn-sm" id="track" {{ action 'addEvent' }}>{{ buttonText }}</button>    
</div>
```

In the above code:

1. Add the `fusioncharts` component to render the chart.

2. Add **Buttons** using `<button>` to update the chart to add/remove the chart event listener.
