---
title: Change Chart Type at Runtime | FusionCharts
description: This article will showcase a sample to change the chart type at runtime.
heading: Change Chart Type at Runtime
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using `react-native-fusioncharts` component. The chart types used in the sample is:

* Column 2D
* Bar 2D
* Pie 2D

A chart configured to change the chart type, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

The full code of the above sample is given below:

```
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class ChartRunTime extends Component {
  constructor(props) {
    super(props);
    this.apiCaller = null;
    this.state = {
      type: 'column2d',
      width: '700',
      height: '400',
      dataFormat: 'json',
      chartType: '',
      dataSource: {
        type: "column2d", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
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
        }
      };
      this.libraryPath = Platform.select({
        // Specify fusioncharts.html file location
        android: { uri: 'file:///android_asset/fusioncharts.html' },
        ios: require('../assets/fusioncharts.html')
      });
    }

    changeType(type) {
      this.setState({ chartType: type }, () => {
        this.apiCaller(`window.chartObj.chartType('${type}')`);
      });
    }

    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.header}>Change chart type at runtime</Text>
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
              if (this.state.chartType === '')
                this.setState({ chartType: this.state.type });
            }}
          />
        </View>
        <Text style={styles.info}>Press button to change chart type</Text>
        <View style={styles.buttonContainer}>
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'column2d'
            }
            style={{ margin: 8 }}
            title="Column2D"
            onPress={() => this.changeType('column2d')}
          />
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'pie2d'
            }
            title="Pie2D"
            onPress={() => this.changeType('pie2d')}
          />
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'bar2d'
            }
            title="Bar2D"
            onPress={() => this.changeType('bar2d')}
          />
        </View>
      </View>
    );
  }
}
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-native-fusioncharts`, `fusioncharts`, etc.

2. Define the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Specify the location of `fusioncharts.html` for **Android** and **iOS**.

4. Create a function to update the chart type at runtime.

5. Add the `render()` function to create the **radio buttons**.