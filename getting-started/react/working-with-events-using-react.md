---
title: Working with Events | FusionCharts
description: This article talks about the Events using React.
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

To attach event callbacks to a FusionCharts component, follow the pattern shown below:

**Step 1:** Write a callback

* As a separate function:

```JavaScript
var chartEventCallback  = function (eventObj, dataObj) {
	[Code goes here]
}
```

OR

* As a component class method:

```JavaScript
chartEventCallback (eventObj, dataObj) {
	[Code goes here]
}
```

**Step 2:** Attach the callback to an event through the React-FC component:

```JavaScript
<ReactFC {...chartConfigs} fcEvent-EVENTNAME={this.chartEventCallback} />
```

`EVENTNAME` is to be replaced by the event you want to track.

Let's take an example below that tracks hover events on a data plot.

```JavaScript
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import Pie2D from 'fusioncharts/viz/pie2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

const myDataSource = {
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
};

const chartConfigs = {
    type: 'pie2d',
    width: 450,
    height: 300,
    dataFormat: 'json',
    dataSource: myDataSource,
};

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actualValue: 'Hover on the plot to see the value along with the label',
        };

        this.showPlotValue = this.showPlotValue.bind(this);
    }

    // Event callback handler for 'dataplotRollOver'.
    // Shows the value of the hovered plot on the page.
    showPlotValue(eventObj, dataObj) {
        this.setState({
            actualValue: `You’re are currently hovering over ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`,
        });
    }

    render() {
        return ( 
            <div>
                <ReactFC { ...chartConfigs} fcEvent - dataplotRollOver = {this.showPlotValue} />
                <p style = {{ padding: '10px', background: '#f5f2f0' }} > {this.state.actualValue} </p>
            </div>
        );
    }
}

ReactDOM.render( <
    Chart / > ,
    document.getElementById('root'),
);
```

Refer to the code below where the code snippet for `dataplotRollOver` event has been specified.

```
render() {
    return ( 
        <div>
            <ReactFC { ...chartConfigs} fcEvent - dataplotRollOver = {this.showPlotValue} />
            <p style = {{ padding: '10px', background: '#f5f2f0' }} > {this.state.actualValue} </p>
        </div>
    );
}
```

In the above code:

* `dataplotRollOver` event is triggered when the mouse pointer is rolled over a data plot. 
* `showPlotValue` is the callback handler for the `dataplotRollOver` event which shows the value of the hovered plot on the page.

Click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollover-247) to get the detailed parameters of the event.