---
title: Configuring your Chart using React | FusionCharts
description: This article focuses on different type of configurations possible using the react.
heading: Configuring your Chart using React
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure using the React `props` object and `react-fusioncharts` component to:

* [Update Chart Data]({% site.baseurl %}/getting-started/react/configure-your-chart-using-react#update-chart-data-1) (using React `Props` object)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/react/configure-your-chart-using-react#update-chart-attributes-2) (using React `Props` object)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chartData configure-charts-using-react-example-1.js json %}

To render the chart, follow the steps below:

1. Include **react**

2. Include `react-fusioncharts`

3. Include the `fusioncharts` library

4. Include the chart type

5. Include the FusionCharts theme file to apply the style to the charts

6. Add the chart and the theme as a dependency to the core

7. Store the chart configurations in a JSON object. In this JSON object:
    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels). 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of the `dataSource`.

8. Create a component to include `react-fusioncharts` component.

9. Write a **Math.random()** function to generate random number. You can also update the chart data using any other data.

10. Write a handler to update chart button.

11. Add `updateData()` function to randomly update the value of the chart.

12. Add the `render()` function to create a `button` tag.

13. Create the `DOM` element and pass the `react-fusioncharts` component directly to the **ReactDOM.render()** method.

The full code of the above sample is given below:

```
//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

//Including the chart type
import Column2D from 'fusioncharts/viz/column2d';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
    type: 'column2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
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
    };

//Your react component
class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = chartConfigs;
    this.updateData = this.updateData.bind(this);
  }

//This function generates random number.
  getRandomNumber() {
    var max = 290, min = 30;
    return Math.round(((max - min) * Math.random()) + min);
  }

  //Handler for update button.
  //Randomly updates the values of the chart.
  updateData() {
    var prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].value = this.getRandomNumber();
    prevDs.data[3].value = this.getRandomNumber();
    this.setState({
      dataSource: prevDs,
    });
  }

  //Create the button
  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <center><button className='btn btn-outline-secondary btn-sm' onClick={this.updateData}>Change Chart Data</button></center>
      </div>
    );
  }
}

//DOM element to pass the react-fusioncharts component directly to the ReactDOM.render() method.
ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);
```

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chartData configure-charts-using-react-example-2.js %}

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

To render the chart, follow the steps below:

1. Include **react**

2. Include `react-fusioncharts`

3. Include the `fusioncharts` library

4. Include the chart type

5. Include the FusionCharts theme file to apply the style to the charts

6. Add the chart and the theme as a dependency to the core

7. Store the chart configurations in a JSON object. In this JSON object:
    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels). 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of the `dataSource`.

8. Create a component to include `react-fusioncharts` component.

9. Call the **renderComplete()** function by FC-React component to return the rendered chart.

10. Write a handler to change the background (color) of the button.

11. Write a handler to change the caption alignment of the button.

12. Write a handler for the Reset button.

13. Add the `render()` function to create a buttons.

14. Create the `DOM` element and pass the `react-fusioncharts` component directly to the **ReactDOM.render()** method.

The full code of the above sample is given below:

```
//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

//Including the chart type
import Column2D from 'fusioncharts/viz/column2d';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
    type: 'column2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
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
};

//Your react component
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

    //Create buttons
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