---
title: Dynamically change Dimensions | FusionCharts
description: This article will showcase a sample to change the chart type at runtime.
heading: Dynamically change Dimensions
---

FusionCharts Suite XT lets you specify the dimensions of charts either in pixels or percentage values, relative to the containers. If the size is specified in pixels, then the dimensions of a chart remain constant, no matter the viewing device or screen size. However, if the dimensions are set as a percentage of the container, the chart converts that % value into pixels while rendering. When the container size changes, the chart is automatically resized accordingly.

After you initialize a chart, you can change the dimensions dynamically, through the JavaScript API `resizeTo()`.

Recreate the same chart you created earlier (as described in the Your first chart article), using the same data. To resize the chart dynamically, invoke the `resizeTo()` method, specifying the new width and height of your chart (in pixels). You can call this method anytime after the chart has finished rendering. The chart will be rendered using React `props` object.

A chart configured to dynamically change the dimensions of the chart, is shown below:

{% embed_chartData dynamically-change-dimensions-example-1.js json %}

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
  width: '700',
  height: '400',
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
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {},
      currentVal: 'medium'
    };

    this.renderComplete = this.renderComplete.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }

  renderComplete(chart) {
    this.setState({chart});
  }

  // Handler for radio buttons to change chart size.
  radioHandler(e) {
    switch(e.currentTarget.value) {
      case 'small':
        this.state.chart.resizeTo(400, 250);
        break;

      case 'medium':
        this.state.chart.resizeTo(600, 350);
        break;

      case 'large':
        this.state.chart.resizeTo(700, 400);
        break;
    }
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
          <span>Choose a dimension:</span>
          <div className="change-type">
            <div>
              <input
                type="radio"
                value="small"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'small'} />
              <label>400 x 250</label>
            </div>
            <div>
              <input
                type="radio"
                value="medium"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'medium'}
              />
              <label>600 x 350</label>
            </div>
            <div>
              <input
                type="radio"
                value="large"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'large'}
              />
              <label>700 x 400</label>
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
	* USe the `radioHander` to change the size of the chart.

5. Add the `render()` function to create the **radio buttons** inside the `<div>`.

6. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.