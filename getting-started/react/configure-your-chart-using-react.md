---
title: Configuring your Chart using React | FusionCharts
description: This article focuses on different type of configurations possible using the react.
heading: Configuring your Chart using React
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure using the React `props` object and `react-fusioncharts` component to:

* Update Chart Data (using React `Props` object)
* Update Chart Attributes (using React `Props` object)
* Add Annotations (using `react-fusioncharts` component)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chart configure-charts-using-react-example-1.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
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
```

The full code of the above sample is given below:

```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {/* see data tab */ },
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = chartConfigs;

    this.updateData = this.updateData.bind(this);
  }

  // This function generates random number.
  getRandomNumber() {
    var max = 290, min = 30;
    return Math.round(((max - min) * Math.random()) + min);
  }

  // Handler for update button.
  // Randomly updates the values of the chart.
  updateData() {
    var prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].value = this.getRandomNumber();
    prevDs.data[3].value = this.getRandomNumber();
    this.setState({
      dataSource: prevDs,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <center><button className='btn btn-outline-secondary btn-sm' onClick={this.updateData}>Change Chart Data</button></center>
      </div>
    );
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);

```

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chart configure-charts-using-react-example-2.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
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
```

The full code of the above sample is given below:

```
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
    type: 'column2d',
    width: 700,
    height: 400,
    dataFormat: 'json',
    dataSource: { /* see data tab */ },
};

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chart: {}
        }

        this.renderComplete = this.renderComplete.bind(this);
        this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
        this.changeCaptionTextAlignment = this.changeCaptionTextAlignment.bind(this);
        this.resetChart = this.resetChart.bind(this);
    }

    // Called by FC-React component to return the rendered chart
    renderComplete(chart) {
        this.state.chart = chart;
    }

    // Handler for 'Change Background' button.
    // Changes the chart background color.
    changeBackgroundColor() {
        this.state.chart.setChartAttribute('bgColor', '#efefef');
    }

    // Handler for 'Change CaptionAlignment' button.
    // Changes the caption alignment to left.
    changeCaptionTextAlignment() {
        this.state.chart.setChartAttribute('captionAlignment', 'left');
    }

    // Handler for 'Reset' button.
    // Resets the chart to the original version.
    resetChart() {
        this.state.chart.setChartAttribute('bgColor', null);
        this.state.chart.setChartAttribute('captionAlignment', null);
    }

    render() {
        return ( <
            div >
            <
            ReactFC { ...chartConfigs
            }
            onRender = {
                this.renderComplete
            }
            /> <
            center >
            <
            button className = 'btn btn-outline-secondary btn-sm'
            onClick = {
                this.changeBackgroundColor
            } > Change Background < /button> <
            button className = 'btn btn-outline-secondary btn-sm'
            onClick = {
                this.changeCaptionTextAlignment
            } > Change Caption Alignment < /button> <
            button className = 'btn btn-outline-secondary btn-sm'
            onClick = {
                this.resetChart
            } > Reset < /button> <
            /center> <
            /div>
        );
    }
}

ReactDOM.render( <
    Chart / > ,
    document.getElementById('root'),
);
```

## Add Annotations

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

A spline chart using annotations to highlight a particular anchor along with text is shown below:

{% embed_chart configure-charts-using-react-example-3.js %}

The JSON data to render the above chart is given below:

```
{
    "chart": {
        "caption": "Average Monthly Temperature in Texas",
        "yAxisName": "Average Monthly Temperature",
        "anchorradius": "5",
        "plotToolText": "Average temperature in $label is <b>$dataValue</b>",
        "showHoverEffect": "1",
        "showvalues": "0",
        "numberSuffix": "°C",
        "theme": "fusion",
        "anchorBgColor": "#72D7B2",
        "paletteColors": "#72D7B2"
    },
    "annotations": {
        "groups": [{
            "id": "anchor-highlight",
            "items": [{
                "id": "high-star",
                "type": "circle",
                "x": "$dataset.0.set.7.x",
                "y": "$dataset.0.set.7.y",
                "radius": "12",
                "color": "#cc0000",
                "border": "2",
                "borderColor": "#0075c2"
            }, {
                "id": "label",
                "type": "text",
                "text": "Hottest Month",
                "fillcolor": "#0075c2",
                "rotate": "90",
                "x": "$dataset.0.set.7.x+75",
                "y": "$dataset.0.set.7.y-2"
            }]
        }]
    },
    "data": [{
        "label": "Jan",
        "value": "1"
    }, {
        "label": "Feb",
        "value": "5"
    }, {
        "label": "Mar",
        "value": "10"
    }, {
        "label": "Apr",
        "value": "12"
    }, {
        "label": "May",
        "value": "14"
    }, {
        "label": "Jun",
        "value": "16"
    }, {
        "label": "Jul",
        "value": "20"
    }, {
        "label": "Aug",
        "value": "22"
    }, {
        "label": "Sep",
        "value": "20"
    }, {
        "label": "Oct",
        "value": "16"
    }, {
        "label": "Nov",
        "value": "7"
    }, {
        "label": "Dec",
        "value": "2"
    }]
},
```

The full code of the above sample is given below:

```
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import ReactFC from 'react-fusioncharts';
import FusionTime from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTime);

const chartConfigs = {
    type: 'spline',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Average Monthly Temperature in Texas",
            "yAxisName": "Average Monthly Temperature",
            "anchorradius": "5",
            "plotToolText": "Average temperature in $label is <b>$dataValue</b>",
            "showHoverEffect": "1",
            "showvalues": "0",
            "numberSuffix": "°C",
            "theme": "fusion",
            "anchorBgColor": "#72D7B2",
            "paletteColors": "#72D7B2"
        },
        "annotations": {
            "groups": [{
                "id": "anchor-highlight",
                "items": [{
                    "id": "high-star",
                    "type": "circle",
                    "x": "$dataset.0.set.7.x",
                    "y": "$dataset.0.set.7.y",
                    "radius": "12",
                    "color": "#cc0000",
                    "border": "2",
                    "borderColor": "#0075c2"
                }, {
                    "id": "label",
                    "type": "text",
                    "text": "Hottest Month",
                    "fillcolor": "#0075c2",
                    "rotate": "90",
                    "x": "$dataset.0.set.7.x+75",
                    "y": "$dataset.0.set.7.y-2"
                }]
            }]
        },
        "data": [{
            "label": "Jan",
            "value": "1"
        }, {
            "label": "Feb",
            "value": "5"
        }, {
            "label": "Mar",
            "value": "10"
        }, {
            "label": "Apr",
            "value": "12"
        }, {
            "label": "May",
            "value": "14"
        }, {
            "label": "Jun",
            "value": "16"
        }, {
            "label": "Jul",
            "value": "20"
        }, {
            "label": "Aug",
            "value": "22"
        }, {
            "label": "Sep",
            "value": "20"
        }, {
            "label": "Oct",
            "value": "16"
        }, {
            "label": "Nov",
            "value": "7"
        }, {
            "label": "Dec",
            "value": "2"
        }]
    },
};

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);

```