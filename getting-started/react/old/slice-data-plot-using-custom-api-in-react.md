---
title: Slice Data Plot using API | FusionCharts
description: This article will showcase a sample to slice data plot of the pie chart using chart specific custom API .
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offers a wide range of APIs that you can use for different stages in the ife cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using React `props` object. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

The full code of the above sample is given below:

```
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
    type: 'Pie2D',
    width: 450,
    height: 250,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Market Share of Web Servers",
            "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
            "showPercentValues": "1",
            "useDataPlotColorForLabels": "1",
            "enableMultiSlicing": "0",
            "theme": "fusion"
        },
        "data": [{
            "label": "Apache",
            "value": "32647479"
        }, {
            "label": "Microsoft",
            "value": "22100932"
        }, {
            "label": "Zeus",
            "value": "14376"
        }, {
            "label": "Other",
            "value": "18674221"
        }]
    }
};

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chart: {},
            currentVal: 'none'
        }
        this.renderComplete = this.renderComplete.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.sliceClicked = this.sliceClicked.bind(this);
    }

    renderComplete(chart) {
        this.setState({
            chart
        });
    }

    // Handler for radio buttons to slice data plot.
    radioHandler(e) {
        if (e.currentTarget.value === 'none') {
            this.state.chart.options.dataSource.data.map((data, index) => {
                this.state.chart.slicePlotItem(index, false);
            });
        } else {
            this.state.chart.slicePlotItem(e.currentTarget.value, true);
        }
        this.setState({
            currentVal: e.currentTarget.value
        });
    }

    // Event callback for 'dataplotClick'.
    // Makes the relevant radio active when a plot is clicked.
    sliceClicked(eventObj, dataObj) {
        this.setState({
            currentVal: eventObj.data.isSliced ? 'none' : eventObj.data.dataIndex
        });
    }

    render() {
        return (
            <div>
              <ReactFC
                {...chartConfigs}
                onRender={this.renderComplete}
                fcEvent-dataplotClick={this.sliceClicked}
              />
              <br />
              <center>
                <span>Slice out:</span>
                <div className="change-type">
                  <div>
                    <input
                      type="radio"
                      value="none"
                      onChange={this.radioHandler}
                      checked={this.state.currentVal === 'none'}
                    />
                    <label>None</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="0"
                      onChange={this.radioHandler}
                      checked={parseInt(this.state.currentVal) === 0}
                    />
                    <label>Apache</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="1"
                      onChange={this.radioHandler}
                      checked={parseInt(this.state.currentVal) === 1}
                    />
                    <label>Microsoft</label>
                  </div>
                  <div>
                    <input
                      type="radio" 
                      value="2"
                      onChange={this.radioHandler}
                      checked={parseInt(this.state.currentVal) === 2}
                    />
                    <label>Zeus</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="3"
                      onChange={this.radioHandler}
                      checked={parseInt(this.state.currentVal) === 3}
                    />
                    <label>Other</label>
                  </div>
                </div>
              </center>
            </div>
        )
    }
}

ReactDOM.render(
    <Chart / > ,
    document.getElementById('root'),
);
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Create a component to include `react-fusioncharts` component.

4. In the above sample:
    * `radioHandler` is used for the radio buttons to slice the data plots.
    * A callback event is called for `dataPlotClick`.
    * `sliceClicked` method sets the relevant radio active when a plot is clicked.

5. Add the `render()` function to create the **radio buttons** inside the `<div>`.

6. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.