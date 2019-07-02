---
title: Slice Data Plot Using API | FusionCharts
description: This article will showcase a sample to slice data plot of the pie chart using chart specific custom API.
heading: Slice Data Plot Using API
---

FusionCharts Suite XT includes advanced features, including a wide range of APIs. You can use these in different stages in the life cycle of a chart to configure what should happen when you interact with the chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

In the sections below, you can see how to slice out the data plots of a Pie 2D chart using chart-specific custom API.

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

Render the above chart by following the steps given below:

1. Include the necessary libraries (such as the `fusioncharts` library) and components using `import`.

2. Add the chart and the theme as dependencies. 

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. Call the `beforeRender` event to slice the data plot of the chart.

5. Create radio buttons inside the `<div>` tags to choose the data plot you want to slice out.

6. Add functionalities to the radio buttons, to update the chart type at runtime.