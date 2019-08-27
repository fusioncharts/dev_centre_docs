---
title: Lifecycle Events using React | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using react props object.
heading: Lifecycle Events using React
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart using react `props` object.

A chart is shown below:

{% embed_chartData lifecycle-event-example-1.js json %}

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
  },
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message:
        "You will see a notifications here for the chart lifecycle events"
    };

    this.beforeDataUpdate = this.beforeDataUpdate.bind(this);
    this.dataUpdated = this.dataUpdated.bind(this);
    this.drawComplete = this.drawComplete.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  // Callback handler for event 'beforeDataUpdate'.
  beforeDataUpdate() {
    this.state.message = [<strong>Status: </strong>, " beforeDataUpdate"];
  }

  // Callback handler for event 'dataUpdated'.
  dataUpdated() {
    let newMessage = this.state.message.slice();
    newMessage.push(", dataUpdated");
    this.setState({
      message: newMessage
    });
  }

  // Callback handler for event 'drawComplete'.
  drawComplete() {
    let newMessage = this.state.message.slice();
    newMessage.push(", drawComplete");
    this.setState({
      message: newMessage
    });
  }

  // Callback handler for event 'renderComplete'.
  renderComplete() {
    let newMessage = this.state.message.slice();
    newMessage.push(", renderComplete");
    this.setState({
      message: newMessage
    });
  }

  render() {
    return (
      <div>
        <ReactFC
          {...chartConfigs}
          fcEvent-beforeDataUpdate={this.beforeDataUpdate}
          fcEvent-dataUpdated={this.dataUpdated}
          fcEvent-drawComplete={this.drawComplete}
          fcEvent-renderComplete={this.renderComplete}
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

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Create a component to include `react-fusioncharts` component.

4. In the above sample:
	* Use the callback handler for `beforeDataUpdate` event.
	* Use the callback handler for `dataUpdated` event.
	* Use the callback handler for `drawComplete` event.
	* Use the callback handler for `renderComplete` event.

5. Add the `render()` function to create the `button` inside the `<div>`.

6. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.