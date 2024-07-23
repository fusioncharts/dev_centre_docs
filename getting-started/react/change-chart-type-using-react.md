---
title: Change Chart Type at Runtime | FusionCharts
description: This article will showcase a sample to change the chart type at runtime.
heading: Change Chart Type at Runtime
---

## A chart configured to change the chart type, is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using React `props` object. The chart types used in the sample is:

* Column 2D
* Bar 2D
* Pie 2D

A chart configured to change the chart type, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

The full code of the above sample is given below:

```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
	type: 'column2d',
	width: 700,
	height: 400,
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
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {},
      currentVal: 'column2d'
    };

    this.renderComplete = this.renderComplete.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }

  renderComplete(chart) {
    this.setState({ chart });
  }

  // Handler for radio buttons to change chart type.
  radioHandler(e) {
    this.state.chart.chartType(e.currentTarget.value);
    this.setState({
      currentVal: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
        <br />
        <center>
          <span>Choose a chart type:</span>
          <div className="change-type">
            <div>
              <input
                type="radio"
                value="column2d"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'column2d'} />
              <label>Column 2D Chart</label>
            </div>
            <div>
              <input
                type="radio"
                value="bar2d"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'bar2d'} />
              <label>Bar 2D Chart</label>
            </div>
            <div>
              <input
                type="radio"
                value="pie2d"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'pie2d'} />
              <label>Pie 2D Chart</label>
            </div>
          </div>
        </center>
      </div>
    );
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
	* Use the `renderComplete` to render the charts at runtime.
	* Use the `radioHander` for radio buttons to change the chart type.

5. Add the `render()` function to create the **radio buttons** inside the `<div>`.

6. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.
