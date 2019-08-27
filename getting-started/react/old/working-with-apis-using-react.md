---
title: Working with APIs | FusionCharts
description: This article talks about the APIs using React.
heading: Working with APIs
---

The FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart.

To call APIs, a chart object is required. To get the chart object for a React-FC component, pass a callback through the `onRender` attribute.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

**Step 1:** Write a callback

* As a separate function:

```JavaScript
var chartRenderCallback  = function (chart) {
	[Code goes here]
}
```

OR

* As a component class method:

```JavaScript
chartRenderCallback (chart) {
	[Code goes here]
}
```

**Step 2:** Pass the callback as a prop to which the chart object will be returned on rendering.

```JavaScript
<ReactFC {...chartConfigs} onRender={chartRenderCallback} />
```

Let's take an example shown below, which will convert a Column 2D chart to a Pie 2D chart in 5 seconds.

```JavaScript
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import Pie2D from 'fusioncharts/viz/pie2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, Pie2D, FusionTheme);

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
    // Convert the chart to a 2D Pie chart after 5 secs.
    alterChart(chart) {
        setTimeout(() => {
            chart.chartType('pie2d');
        }, 5000);
    }

    render() {
        return ( <
            div >
            <
            ReactFC { ...chartConfigs
            }
            onRender = {
                alterChart
            }
            /> <
            /div>
        );
    }
}

ReactDOM.render( <
    Chart / > ,
    document.getElementById('root'),
);
```