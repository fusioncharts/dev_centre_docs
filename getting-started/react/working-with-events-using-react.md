---
title: Working with Events | FusionCharts
description: This article talks about the Events using React.
heading: Working with Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

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
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const myDataSource = {
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
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
};

const chartConfigs = {
    type: 'column2d',
    width: 700,
    height: 400,
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
        return ( <
            div >
            <
            ReactFC { ...chartConfigs
            }
            fcEvent - dataplotRollOver = {
                this.showPlotValue
            }
            /> <
            p style = {
                {
                    padding: '10px',
                    background: '#f5f2f0'
                }
            } > {
                this.state.actualValue
            } < /p> <
            /div>
        );
    }
}

ReactDOM.render( <
    Chart / > ,
    document.getElementById('root'),
);
```

In the above code, `dataplotRollOver` event is triggered when the mouse pointer is rolled over a data plot. Click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollover-247) to get the detailed parameters of the event.