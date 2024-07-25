---
title: Percentage Calculation | FusionCharts
description: Percentage Calculation effortlessly in React with FusionCharts, optimizing your data visualization capabilities for web applications seamlessly.
heading: Percentage Calculation
---

## A chart configured to calculate the percent, is shown below:

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, percentage calculation, and events.

This article focuses on how you can calculate the percentage of a data plot with respect to all the data plots using React `props` object.

A chart configured to calculate the percent, is shown below:

{% embed_chartData percentage-calculation-example-1.js json %}

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
	type: 'column2d', // The chart type
	width: 700, // Width of the chart
	height: 400, // Height of the chart
	dataFormat: 'json', // Data type
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

//Your react component
class Chart extends Component {
 	constructor(props) {
    	super(props);

    	// Message Generator 
    	this.state = {
      		actualValue: 'Hover on the plot to see the percentage along with the label',
      		message: 'Hover on the plot to see the value along with the label'
		};

	    this.dataplotrollover = this.dataplotrollover.bind(this);
	    this.dataplotrollout = this.dataplotrollout.bind(this);
	    this.renderComplete = this.renderComplete.bind(this);
  	}

  	// Event callback handler for 'dataplotRollOver'.
  	// Shows the percentage of the hovered plot on the page.
  	dataplotrollover(eventObj, dataObj) {
    	const value = ((dataObj.value / this.state.total) * 100).toFixed(2);
		this.setState({
  			message: [
		        <strong>{dataObj.categoryLabel}</strong>,
		        " is ",
		        <strong>{value}</strong>,
		        "% of top 8 oil reserve countries"
  			]
		});
  	}

 	// Event callback handler for 'dataplotRollOut'.
  	// Resets to the default message.
  	dataplotrollout(eventObj, dataObj) {
    	this.setState({
      		message: this.state.actualValue
    	});
  	}

  	// Trigerred when chart is rendered.
  	// Calculates and stores the total value of the chart's data.
  	renderComplete(chart) {
    	const chartData = chart.getJSONData();
    	this.setState({
      		total: chartData.data.reduce((p, c) => p + Number(c.value), 0),
    	});
  	}

	render() {
    	return (
			<div>
			<ReactFC
			  {...chartConfigs}
			  onRender={this.renderComplete}
			  fcEvent-dataplotRollOver={this.dataplotrollover}
			  fcEvent-dataplotRollOut={this.dataplotrollout}
			/>
			<p style={{ padding: '10px', background: '#f5f2f0' }}>
			  {this.state.message}
			</p>
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
	* `dataplotrollover` event shows the percentage of the hovered plot on the page.
	* `dataplotrollout` event resets the default message.
	* `renderComplete` event calculates and stores the total value of the chart data.

5. Add the `render()` function to create the `button` inside the `<div>`.

6. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.
