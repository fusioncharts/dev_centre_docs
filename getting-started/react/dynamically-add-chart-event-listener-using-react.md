---
title: Dynamically Add Chart Event Listener using React | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using react.
heading: Dynamically Add Chart Event Listener using React
---

## A chart is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using React `props` object.

A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

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
	},
};

var defaultMessage = 'Click on the plot to see the value along with the label';

class Chart extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	      message: '',
	      enabled: false
	    }

	    this.trackPlotClick = this.trackPlotClick.bind(this);
	    this.resetChart = this.resetChart.bind(this);
	    this.dataPlotClick = this.dataPlotClick.bind(this);
	}

	// Handler for 'Track Data Plot Clicks' button.
	// 1. Adds an eventlistener for data plot cick on the chart
	// 2. Sets the default message when data plot click tracking is enabled
	trackPlotClick() {
    	FusionCharts.addEventListener('dataplotClick', this.dataPlotClick);
    	this.setState({
			message: defaultMessage,
			enabled: true
    	});
  	}

	// Event listener for dataplotclick event on chart. Update message with data plot values.
	dataPlotClick(eventObj, dataObj) {
    	this.setState({
			message: [
				'You have clicked on plot ',
				<strong>{dataObj.categoryLabel}</strong>,
				' whose value is ',
				<strong>{dataObj.displayValue}</strong>
			]
		});
	}

	// Handler for 'Reset' button.
	// Resets the chart to default message and removed the event listener.
	resetChart() {
	FusionCharts.removeEventListener('dataplotClick', this.dataPlotClick);
    	this.setState({
			message: '',
			enabled: false
    	});
  	}

  	render () {
    	return (
      	<div>
        	<ReactFC {...chartConfigs} />
        	<div style={{ padding: '5px' }} id="message">
          	{ this.state.message || 'Click the below buttons to add an event dynamically to a charts' }
        	</div>
        	<button
          	className='btn btn-outline-secondary btn-sm'
          	disabled={this.state.enabled}
          	onClick={this.trackPlotClick}
        	>
          	Add/ listen to data plot click event
        	</button>
        	<button
          	className='btn btn-outline-secondary btn-sm'
          	disabled={!this.state.enabled}
          	onClick={this.resetChart}
        	>
          	Remove data plot click event
        	</button>
      	</div>
    	)
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
	* Add a handler to track plot clicks.
	* Add an event listener is added for data plot click on the chart.
	* Set the default message is set when data plot tracking is enabled.
	* Add an event listener for `dataPlotClick` event when the message is updated with the values of the data plot.
	* Add a handler is added for the **Reset** button. The Reset button resets the chart to default message and removes the event listener.

5. Add the `render()` function to create **buttons** inside the `<div>`.

6. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.
