---
title: Adding Drill Down using React Native | FusionCharts
description: This article focuses on drill down charts.
heading: Adding Drill Down using React Native
---

With FusionCharts, you can create unlimited levels of drill-down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill-down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up or it can open in a new window or frame.

### Features of the FusionCharts JavaScript Class

* Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

* Clones all chart configuration settings from the parent chart to create the descendant charts

* Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink-21) function.

* Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

* Supports drill-down to an unlimited number of levels

## Create drill-down charts

As an example, we will consider a simple scenario of a parent chart with a single level of drill-down.

The parent chart is a column 2D chart showing yearly sales of the top three juice flavors, over the last one year. When you click on the data plot for a particular flavor, it drills down to show a pie 2D chart showing the quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chartData add-drill-down-using-react-example-1.js json %}

The full code of the above sample is given below:

```
//Including react
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class DrillDown extends Component {
  	constructor(props) {
    	super(props);
    	this.apiCaller = null;
    	this.state = {
			type: 'column2d',
			width: '100%',
			height: '100%',
			dataFormat: 'json',
			dataSource: {
			    "chart": {
			        "caption": "Sales of top 3 juice flavors last year",
			        "subcaption": "Click on a column to see details",
			        "xaxisname": "Flavor",
			        "yaxisname": "Amount (In USD)",
			        "numberprefix": "$",
			        "theme": "fusion",
			        "rotateValues": "0"
			    },
			    "data": [{
		            "label": "Apple",
		            "value": "810000",
		            "link": "newchart-xml-apple"
		        }, {
		            "label": "Cranberry",
		            "value": "620000",
		            "link": "newchart-xml-cranberry"
		        }, {
		            "label": "Grape",
		            "value": "350000",
		            "link": "newchart-xml-grape"
		        }],
			    "linkeddata": [{
	                "id": "apple",
	                "linkedchart": {
		                "chart": {
		                    "caption": "Apple Juice - Quarterly Sales",
		                    "subcaption": "Last year",
		                    "numberprefix": "$",
		                    "theme": "fusion",
		                    "rotateValues": "0",
		                    "plottooltext": "$label, $dataValue,  $percentValue"
		                },
		                "data": [{
		                    "label": "Q1",
		                    "value": "157000",
		                    "displayValue": "Q1, $157K"
		                }, {
		                    "label": "Q2",
		                    "value": "172000",
		                    "displayValue": "Q2, $172K"
		                }, {
		                    "label": "Q3",
		                    "value": "206000",
		                    "displayValue": "Q3, $206K"
		                }, {
		                    "label": "Q4",
		                    "value": "275000",
		                    "displayValue": "Q4, $275K"
		                }]
	                }
	            }, {
	                "id": "cranberry",
	                "linkedchart": {
		                "chart": {
		                    "caption": "Cranberry Juice - Quarterly Sales",
		                    "subcaption": "Last year",
		                    "numberprefix": "$",
		                    "theme": "fusion",
		                    "plottooltext": "$label, $dataValue,  $percentValue"
		                },
		                "data": [{
		                    "label": "Q1",
		                    "value": "102000",
		                    "displayValue": "Q1, $102K"
		                }, {
		                    "label": "Q2",
		                    "value": "142000",
		                    "displayValue": "Q2, $142K"
		                }, {
		                    "label": "Q3",
		                    "value": "187000",
		                    "displayValue": "Q3, $187K"
		                }, {
		                    "label": "Q4",
		                    "value": "189000",
		                    "displayValue": "Q4, $189K"
		                }]
	                }
	            }, {
	                "id": "grape",
	                "linkedchart": {
		                "chart": {
		                    "caption": "Grape Juice - Quarterly Sales",
		                    "subcaption": "Last year",
		                    "numberprefix": "$",
		                    "theme": "fusion",
		                    "rotateValues": "0",
		                    "plottooltext": "$label, $dataValue,  $percentValue"
		                },
		                "data": [{
		                    "label": "Q1",
		                    "value": "45000",
		                    "displayValue": "Q1, $45K"
		                }, {
		                    "label": "Q2",
		                    "value": "72000",
		                    "displayValue": "Q2, $72K"
		                }, {
		                    "label": "Q3",
		                    "value": "95000",
		                    "displayValue": "Q3, $95K"
		                }, {
		                    "label": "Q4",
		                    "value": "108000",
		                    "displayValue": "Q4, $108K"
		                }]
	                }
			    }]
			};
    		this.libraryPath = Platform.select({
      			// Specify fusioncharts.html file location
      			android: { uri: 'file:///android_asset/fusioncharts.html' },
      			ios: require('../assets/fusioncharts.html')
    		});
  		}

  		render() {
    		return (
      			<View style={styles.container}>
        		<Text style={styles.header}>A Chart with Drill-Down</Text>
        		<View style={styles.chartContainer}>
          		<FusionCharts
            	type={this.state.type}
            	width={this.state.width}
            	height={this.state.height}
            	dataFormat={this.state.dataFormat}
            	dataSource={this.state.dataSource}
            	libraryPath={this.libraryPath} // set the libraryPath property
            	onInitialized={caller => {
              		this.apiCaller = caller;
              		this.apiCaller(`window.chartObj.configureLink({
                		type: 'pie2d',
                		overlayButton: {
                  			message: 'Back',
                  			fontColor: '880000',
			                bgColor: 'FFEEEE',
			                borderColor: '660000',
                	}}, 0);`);
            	}}
          		/>
        		</View>
      			</View>
    		);
  		}
	}
}
```

Click [here](http://jsfiddle.net/fusioncharts/k7mn6j5s/) to edit the above chart.

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `react-native-fusioncharts`, `fusioncharts`, etc.

2. Define the chart configuration in a JSON.In the JSON object:
    * The chart type has been set to `column2d` for the first chart. For Column 2D chart, the alias is `column2d`. Once the data plots in the Column charts are clicked, the rendered chart is a Pie 2D chart (alias name: `pie2d`). Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.

3. Specify the location of `fusioncharts.html` for **Android** and **iOS**.