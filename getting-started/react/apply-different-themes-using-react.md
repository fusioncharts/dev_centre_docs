---
title: Apply Different Themes using React | FusionCharts
description: Apply Different Themes effortlessly in React with FusionCharts, optimizing your data visualization capabilities for web applications seamlessly.
heading: Apply Different Themes using React
---

## FusionCharts Suite XT ships with the following predefined themes:

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`

This article focuses on how you can apply different themes to the chart at runtime using React `props` object. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

The full code of the above sample is given below:

```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import ZuneTheme from 'fusioncharts/themes/fusioncharts.theme.zune';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import CarbonTheme from 'fusioncharts/themes/fusioncharts.theme.carbon';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme, CandyTheme, ZuneTheme, OceanTheme, CarbonTheme);

const chartConfigs = {
    type: 'column2d',
    width: '700',
    height: '400',
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
    }
};

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chart: {},
            currentVal: 'fusion'
        };

        this.renderComplete = this.renderComplete.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
    }

    renderComplete(chart) {
    this.setState({ chart });
    }

    // Handler for radio buttons to change chart theme.
    radioHandler(e) {
        this.state.chart.setChartAttribute('theme', e.currentTarget.value);
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
                <span>Choose a theme:</span>
                <div className="change-type">
                    <div>
                        <input type="radio" value="fusion" onChange={this.radioHandler} checked={this.state.currentVal === 'fusion'} />
                        <label>Fusion</label>
                    </div>
                    <div>
                        <input type="radio" value="gammel" onChange={this.radioHandler} checked={this.state.currentVal === 'gammel'} />
                        <label>Gammel</label>
                    </div>
                    <div>
                        <input type="radio" value="candy" onChange={this.radioHandler} checked={this.state.currentVal === 'candy'} />
                        <label>Candy</label>
                    </div>
                    <div>
                        <input type="radio" value="zune" onChange={this.radioHandler} checked={this.state.currentVal === 'zune'} />
                        <label>Zune</label>
                    </div>
                    <div>
                        <input type="radio" value="ocean" onChange={this.radioHandler} checked={this.state.currentVal === 'ocean'} />
                        <label>Ocean</label>
                    </div>
                    <div>
                        <input type="radio" value="carbon" onChange={this.radioHandler} checked={this.state.currentVal === 'carbon'} />
                      <label>Carbon</label>
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

2. Include the theme files for all the six themes.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Create a component to include `react-fusioncharts` component.

4. In the above sample:
	* Use the `renderComplete` event to render the charts at runtime.
	* Use `radioHander` for radio buttons to apply selected theme to the chart.

5. Add the `render()` function to create the **radio buttons** inside the `<div>`.

6. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.
