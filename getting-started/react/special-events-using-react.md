---
title: Special Events using React | FusionCharts
description: Special Events effortlessly in React with FusionCharts, optimizing your data visualization capabilities for web applications seamlessly.
heading: Special Events using React
---

FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically drag the column and see modified value as text using React `props` object.

## A drag-able column chart is shown below:

{% embed_chartData special-events-example-1.js json %}

The full code of the above sample is given below:

```
//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts';

//Including the chart type
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';

//Including react-fusioncharts component
import ReactFC from 'react-fusioncharts';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
	type: 'dragcolumn2d',
	width: 700,
	height: 400,
	dataFormat: 'json',
	dataSource: {
	    "chart": {
	        "caption": "Android and iOS Devices Sales Projections",
	        "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
	        "numberPrefix": "$",
	        "numberSuffix": "M",
	        "yaxismaxvalue": "200",
	        "theme": "fusion",
	        "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
	    },
	    "categories": [{
	        "category": [{
                "label": "2014",
                "fontItalic": "0"
            }, {
                "label": "2015",
                "fontItalic": "0"
            }, {
                "label": "2016",
                "fontItalic": "0"
            }, {
                "label": "2017 (Projected)"
            }, {
                "label": "2018 (Projected)"
            }]
	    }],
	    "dataset": [{
	        "seriesname": "Android Devices",
	        "data": [{
                "value": "73",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "80",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "97",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "110",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "180",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
        }, {
            "seriesname": "iOS Devices",
            "data": [{
                "value": "63.2",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "68",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "82",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "99",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "150",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
	    }]
	}
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Drag any column for years 2017 or 2018 to see updated value along with the label',
    };

    this.dataplotDragEnd = this.dataplotDragEnd.bind(this);
  }

  // Event callback handler for 'dataplotDragEnd' event.
  // Shows a message with the dateset, initial value and final value of the dragged column.
  dataplotDragEnd(eventObj, dataObj) {
    var prevValue = FusionCharts.formatNumber(dataObj.startValue.toFixed(2));
    var curValue = FusionCharts.formatNumber(dataObj.endValue.toFixed(2));
    var labelYear = this.state.chart.args.dataSource.categories[0].category[dataObj.dataIndex].label
    this.setState({
      message: [
        <strong>{eventObj.data.datasetName}</strong>,
        " is modified to ",
        <strong>{'$' + curValue + 'M'}</strong>,
        " from ",
        <strong>{'$' + prevValue + 'M'}</strong>,
        " for ",
        <strong>{labelYear}</strong>
      ]
    });
  }

  render () {
    return (
      <div>
        <ReactFC
          {...chartConfigs}
          fcEvent-dataplotDragEnd={this.dataplotDragEnd}
        />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>
          {this.state.message}
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Create a component to include `react-fusioncharts` component.

4. In the above sample:
	* Use an event callback handler for `dataPlotDragEnd` event.
	* Use the `dragPlotDragEnd` event to show a message with the dataset, initial value and final value of the dragged column.

5. Add the `render()` function to create **buttons** inside the `<div>`.

6. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.
