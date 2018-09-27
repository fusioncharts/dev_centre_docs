---
title: Bind Event Listener | FusionCharts
description: This article talks about the Events using React.
heading: Bind Event Listener
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

Take a look at the Column 2D chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one data plot and see how the text (the data label and the value) rendered below the chart changes.

For example, if you roll the mouse pointer over the __Canada__ data plot, the following text is displayed below the chart:

**You are currently hovering over Canada whose calue is 180**

The full code of the above sample is given below:

```
//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts';

//Including the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

//Including react-fusioncharts component
import ReactFC from 'react-fusioncharts';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
    type: "column2d",
    width: 700,
    height: 400,
    dataFormat: "json",
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
      actualValue: "Hover on the plot to see the value along with the label",
      message: "Hover on the plot to see the value along with the label"
    };

    this.dataplotrollover = this.dataplotrollover.bind(this);
    this.dataplotrollout = this.dataplotrollout.bind(this);
  }

  // Event callback handler for 'dataplotRollOver'.
  // Shows the value of the hovered plot on the page.
  dataplotrollover(eventObj, dataObj) {
    this.setState({
      message: [
        "You are currently hovering over ",
        <strong>{dataObj.categoryLabel}</strong>,
        " whose value is ",
        <strong>{dataObj.displayValue}</strong>
      ]
    });
  }

  // Event callback handler for 'dataplotRollOut'.
  // Resets to the original message.
  dataplotrollout(eventObj, dataObj) {
    this.setState({
      message: this.state.actualValue
    });
  }

  render() {
    return (
      <div>
        <ReactFC
          {...chartConfigs}
          fcEvent-dataplotRollOver={this.dataplotrollover}
          fcEvent-dataplotRollOut={this.dataplotrollout}
        />
        <p style={{ padding: "10px", background: "#f5f2f0" }}>
          {this.state.message}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Chart />, document.getElementById("root"));
```

The above chart is rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embedded as the value of the `dataSource`.

3. Created a component to include `react-fusioncharts` component.

4. In the above sample:
    * Callback handler for `dataplotRollOver` event has been used which is triggered when the mouse pointer is rolled over a data plot.
    * Callback handler for `dataplotRollOut` event has been used which is triggered when the mouse pointer is rolled out of the data plot.

5. `render()` function is added to create the `button` inside the `<div>`.

6. A `DOM` element has been created and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.