---
title: Rendering different Charts | FusionCharts
description: This article outlines some of the popular charts and the way to render them with their respective data formats.
heading: Rendering Different Charts
---

In the [Getting Started](/getting-started/react-native/your-first-chart-using-react-native) section, we discussed how to build a single series chart using FusionCharts Suite XT. In this section, we will show you how to create different charts and maps using FusionCharts and React Native.

Note that some of the chart types and the maps use data structures that are different from the one you use in a single-series chart. We will highlight those in the sections below, as follows:

- [Multi-series Charts](/getting-started/react-native/rendering-different-charts-using-react-native#multi-series-charts)
- [Combination Charts](/getting-started/react-native/rendering-different-charts-using-react-native#combination-charts)
- [Real-time Chart](/getting-started/react-native/rendering-different-charts-using-react-native#real-time-charts)
- [Gauges](/getting-started/react-native/rendering-different-charts-using-react-native#gauges)
- [Maps](/getting-started/react-native/rendering-different-charts-using-react-native#maps)
- [Heatmap](/getting-started/react-native/rendering-different-charts-using-react-native#heat-map)
- [Gantt Chart](/getting-started/react-native/rendering-different-charts-using-react-native#gantt-chart)

## Multi-series Charts

A Multi-series chart is used to plot data for more than one series of data values. It is also used to analyze and compare data points grouped in sub-categories. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts can also help you plot the highs and lows of multiple datasets, so that you can easily compare them.

In a multi-series chart, we have two or more datasets plotted against the same X-axis (or Y-axis) value. Let us build a Multi-series Column 2D Chart.

{% embed_chart standard-charts-multi-series-charts-example-1.js %}

As you can see, a Multi-series Column 2D Chart has vertically aligned rectangular bars on one axis with discrete values shown on the other. The length of a column is proportionate to the value it represents.

To build the chart shown above, we will use the data presented in the following table:

| Quarter | Previous Year | Current Year |
| ------- | ------------- | ------------ |
| Q1      | 12000         | 24400        |
| Q2      | 10500         | 29800        |
| Q3      | 23500         | 20800        |
| Q4      | 16000         | 26000        |

In the above chart, we have plotted quarters with data values for the previous and the current years along the X-axis. To convert this to a data format that FusionCharts can use, you need the following two properties:

- `categories`
- `dataset`

The illustration below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy multiseries-data.json %}

As shown in the sample above, the chart compares the quarterly sales of a company for over two years. The data in the JSON format for the above chart looks as follows:

```json
// Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
      { "label": "Q1" },
      { "label": "Q2" },
      { "label": "Q3" },
      { "label": "Q4" }
    ]
  }
]
// Construct the dataset comprising multiple series
const dataset = [
  {
    "seriesname": "Previous Year",
    "data": [
      { "value": "12000" },
      { "value": "10500" },
      { "value": "23500" },
      { "value": "16000" }
    ]
  },
  {
    "seriesname": "Current Year",
    "data": [
      { "value": "24400" },
      { "value": "29800" },
      { "value": "20800" },
      { "value": "26800" }
    ]
  }
]
```

> The number of objects passed in the series should be the same as the number of labels.

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
export default class MultiSeriesColumn2D extends Component {
  constructor(props) {
    super(props);
    // STEP 2- Define the categories representing the labels on the X-axis
    const categories =  [
      {
        "category": [
          { "label": "Q1" },
          { "label": "Q2" },
          { "label": "Q3" },
          { "label": "Q4" }
        ]
      }
    ]
    //Construct the dataset comprising multiple series
    const dataset = [
      {
        "seriesname": "Previous Year",
        "data": [
          { "value": "12000" },
          { "value": "10500" },
          { "value": "23500" },
          { "value": "16000" }
        ]
      },
      {
        "seriesname": "Current Year",
        "data": [
          { "value": "24400" },
          { "value": "29800" },
          { "value": "20800" },
          { "value": "26800" }
        ]
      }
    ]
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "mscolumn2d",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "theme": "fusion",
          "caption": "Comparison of Quarterly Revenue",
          "xAxisname": "Quarter",
          "yAxisName": "Revenues (In USD)",
          "numberPrefix": "$",
          "plotFillAlpha": "80",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1"
        },
        "categories": categories,
        "dataset": dataset,
  
      }
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Multi-Series Column 2D Chart</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

> You can also create various charts belonging to the multi-series family in a similar way. We have over 15+ multi-series charts. You can find more about their types, components, configurations etc. [here](/chart-guide/standard-charts/multi-series-charts).

## Combination Charts

Similar to multi-series charts, combination charts also allow you to plot multiple datasets on the same chart. However, while in multi-series charts you need to use the same plot type for all datasets, in a combination chart you can use a different plot type for each dataset. For instance, you can show a column, a line, and an area plot on the same chart canvas.

Let us build a 2D Single Y-axis combination chart.

{% embed_chart standard-charts-combination-chart-example-1.js %}

As you can see in the 2D Single Y-axis combination chart above, a line, a column, and an area type plot share the same set of X and Y-axis. The line plot displays the projected monthly revenue of Harry’s SuperMart, while the column plot displays the actual revenue earned, and the area plot shows the monthly profit. To build the chart, we will use the data provided in the following table:

| Month     | Actual Revenue | Projected Revenue | Profit |
| --------- | -------------- | ----------------- | ------ |
| January   | 16000          | 15000             | 4000   |
| February  | 20000          | 16000             | 5000   |
| March     | 18000          | 17000             | 3000   |
| April     | 19000          | 18000             | 4000   |
| May       | 15000          | 19000             | 1000   |
| June      | 21000          | 19000             | 7000   |
| July      | 16000          | 19000             | 1000   |
| August    | 20000          | 19000             | 4000   |
| September | 17000          | 20000             | 1000   |
| October   | 25000          | 21000             | 8000   |
| November  | 19000          | 22000             | 2000   |
| Decemebr  | 23000          | 23000             | 7000   |

In the above chart, we have plotted monthly values for projected revenue, actual revenue, and profits made by Harry’s Supermart with monthly data values along the X-axis. To convert the data provided in the above table to a data format that FusionCharts can use, you need the following two properties:

- `categories`
- `dataset`

The diagram below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy combination-data.json %}

As shown in the sample above, the chart compares the monthly sales and profits of the Supermart. The data in the JSON format for the above chart looks as follows:

```json
// Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
        {"label": "Jan"},
        {"label": "Feb"},
        {"label": "Mar"},
        {"label": "Apr"},
        {"label": "May"},
        {"label": "Jun"},
        {"label": "Jul"},
        {"label": "Aug"},
        {"label": "Sep"},
        {"label": "Oct"},
        {"label": "Nov"},
        {"label": "Dec"}
    ]
  }
]
// Construct the dataset comprising multiple series
const dataset = [
  {
    "seriesname": "Actual Revenue",
    "renderAs": "column",
    "data": [
        {"value": "16000"},
        {"value": "20000"},
        {"value": "18000"},
        {"value": "19000"},
        {"value": "15000"},
        {"value": "21000"},
        {"value": "16000"},
        {"value": "20000"},
        {"value": "17000"},
        {"value": "25000"},
        {"value": "19000"},
        {"value": "23000"}
    ]
  },
  {
    "seriesname": "Projected Revenue",
    "renderAs": "line",
    "data": [
        {"value": "15000"},
        {"value": "16000"},
        {"value": "17000"},
        {"value": "18000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "20000"},
        {"value": "21000"},
        {"value": "22000"},
        {"value": "23000"}
    ]
  },
  {
    "seriesName": "Profit",
    "renderAs": "area",
    "data": [
        {"value": "4000"},
        {"value": "5000"},
        {"value": "3000"},
        {"value": "4000"},
        {"value": "1000"},
        {"value": "7000"},
        {"value": "1000"},
        {"value": "4000"},
        {"value": "1000"},
        {"value": "8000"},
        {"value": "2000"},
        {"value": "7000"}
    ]
}
]
```

> The number of objects passed in the series should be the same as the number of labels.

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
export default class Combination2D extends Component {
  constructor(props) {
    super(props);
    // STEP 2- Define the categories representing the labels on the X-axis
    const categories = [{
      "category": [{
          "label": "Jan"
        },
        {
          "label": "Feb"
        },
        {
          "label": "Mar"
        },
        {
          "label": "Apr"
        },
        {
          "label": "May"
        },
        {
          "label": "Jun"
        },
        {
          "label": "Jul"
        },
        {
          "label": "Aug"
        },
        {
          "label": "Sep"
        },
        {
          "label": "Oct"
        },
        {
          "label": "Nov"
        },
        {
          "label": "Dec"
        }
      ]
    }
    ]
    // STEP 3- Construct the dataset comprising combination series
    const dataset = [{
      "seriesName": "Actual Revenue",
      "showValues": "1",
      "data": [{
          "value": "16000"
        },
        {
          "value": "20000"
        },
        {
          "value": "18000"
        },
        {
          "value": "19000"
        },
        {
          "value": "15000"
        },
        {
          "value": "21000"
        },
        {
          "value": "16000"
        },
        {
          "value": "20000"
        },
        {
          "value": "17000"
        },
        {
          "value": "25000"
        },
        {
          "value": "19000"
        },
        {
          "value": "23000"
        }
      ]
    },
    {
      "seriesName": "Projected Revenue",
      "renderAs": "line",
      "data": [{
          "value": "15000"
        },
        {
          "value": "16000"
        },
        {
          "value": "17000"
        },
        {
          "value": "18000"
        },
        {
          "value": "19000"
        },
        {
          "value": "19000"
        },
        {
          "value": "19000"
        },
        {
          "value": "19000"
        },
        {
          "value": "20000"
        },
        {
          "value": "21000"
        },
        {
          "value": "22000"
        },
        {
          "value": "23000"
        }
      ]
    },
    {
      "seriesName": "Profit",
      "renderAs": "area",
      "data": [{
          "value": "4000"
        },
        {
          "value": "5000"
        },
        {
          "value": "3000"
        },
        {
          "value": "4000"
        },
        {
          "value": "1000"
        },
        {
          "value": "7000"
        },
        {
          "value": "1000"
        },
        {
          "value": "4000"
        },
        {
          "value": "1000"
        },
        {
          "value": "8000"
        },
        {
          "value": "2000"
        },
        {
          "value": "7000"
        }
      ]
    }
    ]
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "mscombi2d",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "caption": "Harry's SuperMart",
          "subCaption": "Sales analysis of last year",
          "xAxisname": "Month",
          "yAxisName": "Amount (In USD)",
          "numberPrefix": "$",
          "divlineColor": "#999999",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1",
          "toolTipColor": "#ffffff",
          "toolTipBorderThickness": "0",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "80",
          "toolTipBorderRadius": "2",
          "toolTipPadding": "5",
          "theme": "fusion"
        },
        "categories": categories,
        "dataset": dataset
      }
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Combination Chart</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

> You can also create various charts with various combinations in a similar way. We have over 10+ combination charts. You can find more about their types, components, configurations etc. from [here](/chart-guide/standard-charts/combination-charts).

## Real Time Charts

Real-time charts are also referred to as data streaming charts, because they can automatically update themselves at regular intervals, by fetching new data from the server and discarding the previous values. You do not need to keep refreshing the page to see the updated versions of these charts.

FusionCharts XT supports various types of Real-time charts - [Line](/chart-guide/standard-charts/real-time-charts#real-time-line-chart), [Area](/chart-guide/standard-charts/real-time-charts#real-time-area-chart), [Column](/chart-guide/standard-charts/real-time-charts#real-time-column-chart), [Stacked Area](/chart-guide/standard-charts/real-time-charts#real-time-stacked-area-chart), [Stacked Column](/chart-guide/standard-charts/real-time-charts#real-time-stacked-column-chart), and [Line (Dual Y axis)](/chart-guide/standard-charts/real-time-charts#real-time-stacked-column-chart). In the section below, we will see how to build a real-time area 2D chart.

{% embed_chart standard-charts-real-time-charts-example-2.js %}

As you can see in the real-time 2D area chart above, the data plot is presenting the values present at a given instance. As soon as new values are available in the source data, the chart will update itself with the fresh values, gradually discarding the data plots displayed above.

In the above chart, we have plotted values of a stock (of Harry’s Supermart) on a business day, at intervals of 5 seconds between any two consecutive values. To convert the data provided in the above table to a data format that FusionCharts can use, you need the following two properties:

- `categories`
- `dataset`

The diagram below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy real-time-data.json %}

In the sample above, the chart shows the values of the Harry’s Supermart stock throughout a single business day, at intervals of 5 seconds. The data in the JSON format for the above chart looks as follows:

```json
// Define the category representing the labels on the X-axis
const categories =  [{
    "category": [
      { "label": "Day Start" },
    ]
}]
// Construct the dataset
const dataset = [{
    "data": [
      { "value": "35.27" },
    ]
}]
```

Now that we’ve seen the structuring of the data object, let us deal with feeding the real-time data into this format. There are multiple ways in which one can feed real-time data to FusionCharts.

- The real-time data from the server can be transported through APIs, web sockets depending on the requirement
- The data can be fetched at regular intervals from third-party endpoints as per the requirement
- Data can be fed from google sheets in real-time.

To build the sample chart, we will feed the data at regular intervals from a random generator (math.random function), for the sake of simplicity.

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
let apiCaller = null;
export default class App extends Component {
  constructor(props) {
    super(props);
    // STEP 2- Define the categories representing the labels on the X-axis
    const categories =  [{
      "category": [{
          "label": "Start"
      }]
    }];
​
    const dataset = [{
      "data": [{
          "value": "35.27"
      }]
    }];
​
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "realtimearea",
      id: "stockRealTimeChart",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Live visitors on web",
          subCaption: "Skatter Tech",
          refreshinterval: "3",
          numdisplaysets: "10",
          theme: "fusion",
          drawAnchors: "0",
          plotToolText: "$label: <b>$dataValue Feeds</b>",
          showRealTimeValue: "0",
          labelDisplay: "rotate"
        },
        "categories": categories,
        "dataset": dataset,
      }
    };
    this.state = chartConfig;
​
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });
​
    this.updateData = this.updateData.bind(this);
  }
  addLeadingZero(num) {
    return num <= 9 ? '0' + num : num;
  }
​
  updateData() {
    var chartRef = FusionCharts("stockRealTimeChart")
    setInterval(() => {
      let currDate = new Date(),
        label =
          this.addLeadingZero(currDate.getHours()) +
          ':' +
          this.addLeadingZero(currDate.getMinutes()) +
          ':' +
          this.addLeadingZero(currDate.getSeconds()),
        // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
        randomValue = Math.floor(Math.random() * 50) / 100 + 35.25;
        const script = `
        let data = '&label=${label}&value=${randomValue}'
        window.alert(data);
        true;
        `;
    
      apiCaller(script);
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Real Time Area Chart</Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            id= {this.state.id}
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            onInitialized={caller => {
              apiCaller = caller;
            }}
            events={{
              rendercomplete: this.updateData,
            }}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },
  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

Now that the data and its transporting mechanism are ready, let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
let apiCaller = null;
export default class App extends Component {
  constructor(props) {
    super(props);
    // STEP 2- Define the categories representing the labels on the X-axis
    const categories =  [{
      "category": [{
          "label": "Start"
      }]
    }];
    
    const dataset = [{
      "data": [{
          "value": "35.27"
      }]
    }];

    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "realtimearea",
      id: "stockRealTimeChart",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {  
        chart: {
          caption: "Live visitors on web",
          subCaption: "Skatter Tech",
          refreshinterval: "3",
          numdisplaysets: "10",
          theme: "fusion",
          drawAnchors: "0",
          plotToolText: "$label: <b>$dataValue Feeds</b>",
          showRealTimeValue: "0",
          labelDisplay: "rotate"
        },
        "categories": categories,
        "dataset": dataset,
      }
    };
    this.state = chartConfig;
    
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });

    this.rendercomplete = this.rendercomplete.bind(this);
  }
  addLeadingZero(num) {
    return num <= 9 ? '0' + num : num;
  }
  
  rendercomplete() {
    var chartRef = FusionCharts("stockRealTimeChart")
    setInterval(() => {
      let currDate = new Date(),
        label =
          this.addLeadingZero(currDate.getHours()) +
          ':' +
          this.addLeadingZero(currDate.getMinutes()) +
          ':' +
          this.addLeadingZero(currDate.getSeconds()),
        // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
        randomValue = Math.floor(Math.random() * 50) / 100 + 35.25;
      const script = `
      let data = '&label=${label}&value=${randomValue}'
      chartRef.feedData(data);
      true;
      `;
      apiCaller(script);
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Real Time Area Chart</Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            id= {this.state.id}
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            onInitialized={caller => {
              apiCaller = caller;
            }}
            events={{
              rendercomplete: this.rendercomplete,
            }}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },
  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

> You can also create various types of real-time charts in a similar way. We have 6 charts for which you can inject the data in real-time. You can find more about their types, configurations [here](/chart-guide/standard-charts/real-time-charts).

## Gauges

Gauges are powerful tools that can showcase information using a radial or linear scale to display data. FusionCharts XT provides you with seven different gauges - [Angular Gauge](/chart-guide/gauges-and-widgets/angular-gauge), [Bulb Gauge](/chart-guide/gauges-and-widgets/bulb-gauge), [Cylinder Gauge](/chart-guide/gauges-and-widgets/cylinder-gauge), [LED Gauge](/chart-guide/gauges-and-widgets/led-gauge), [Linear Gauge](/chart-guide/gauges-and-widgets/linear-gauge), [Thermometer Gauge](/chart-guide/gauges-and-widgets/thermometer-gauge) and Vertical LED Gauge.

An angular gauge is used to show a specific value over a radial scale. The gauge is rendered with a radial scale that displays the data range. This scale can be color-coded to indicate divisions within the range. A dial is used to point to the data value. The gauge can also be rendered with multiple dials. It is often used to simulate a speedometer and on dashboards.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

{% embed_chart getting-started-your-first-widget.js %}

So, any score less than 50 is bad and is shown in red. Any score between 50 and 75 is average and is shown in yellow. Any score above 75 means good and is shown in green.

To build the gauge shown above, we will use the data presented in the table below:

| Range  | Color  | Hex Code |
| ------ | ------ | -------- |
| 0-50   | Red    | #F2726F  |
| 50-75  | Yellow | #FFC533  |
| 75-100 | Green  | #62B58F  |

FusionCharts accepts data in JSON format. To convert this to a data format that FusionCharts can use, you need the following two properties:

- `colorRange`
- `dials`

The diagram below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy angular-gauge-data.json %}

The following code is the JSON representation of the tabular column with the required attributes to render the above gauge.The data in the JSON format for the above gauge looks as follows:

```json
  // Define the colorVariations of the angular gauge
  const colorRange = {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  };
  //Set up the dial value
  const dials = {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
```

In the above JSON:

- Create the `colorRange` object to set the color associated with the specific range of values.
- Specify `minValue` and `maxValue` within the color array under the `colorRange` object.
- Set the `code` attribute to specify the hex color of respective ranges.
- Create the `dials` object to represent the customer satisfaction score.
- Create the `dial` object under the `dials` object to set the value of customer satisfaction score.

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class MultiSeriesColumn2D extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Defining the dataset for the angular gauge along with the color configuration
    const colorRange = {
      "color": [{
        "minValue": "0",
        "maxValue": "50",
        "code": "#e44a00"
      }, {
        "minValue": "50",
        "maxValue": "75",
        "code": "#f8bd19"
      }, {
        "minValue": "75",
        "maxValue": "100",
        "code": "#6baa01"
      }]
    };

    const dials = {
      "dial": [{
        "value": "67"
      }]
    };
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "angulargauge",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "caption": "Customer Satisfaction Score",
          "subcaption": "Last week",
          "lowerLimit": "0",
          "upperLimit": "100",
          "theme": "fusion"
        },
        "colorRange": colorRange,
        "dials": dials
  
      }
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>An Angular Gauge</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

> You can also create various charts belonging to the gauges family in a similar way. We have 7 different gauges. Check out the different types of gauges, their configurations [here](/chart-guide/list-of-charts#gauges).

## Maps

FusionMaps XT offers interactive maps that allow you to plot geographical data, such as revenue by regions, population by state, survey and election results. You can also add markers to pinpoint specific locations and routes. FusionMaps XT has over 1000 maps including all continents, major countries and all the US states.

You can download the map definition files separately from [here](https://www.fusioncharts.com/download/map-definition-files) if you want to save them locally. In the section below, we will see how to build a world map.

{% embed_chart getting-started-your-first-map.js %}

As you can see in the map above, the data plot is indicating the average annual population growth across the 7 continents.

| State         | Entity Name | Value |
| ------------- | ----------- | ----- |
| North America | NA          | 82    |
| South America | SA          | 2.04  |
| Asia          | AS          | 1.78  |
| Europe        | EU          | 40    |
| Africa        | AF          | 2.58  |
| Australia     | AU          | 1.30  |

To convert the data provided in the above table to a data format that FusionCharts can use, you need the following properties:

- `colorRange`
- `data`
- `id`
- `value`

The diagram below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy world-map-data.json %}

The following code is the JSON representation of the tabular column with the required attributes to render the above map.The data in the JSON format for the above map looks as follows:

```json
// Define the colorVariations of the angular gauge
const colorRange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
        "minvalue": "0.5",
        "maxvalue": "1.0",
        "color": "#FFD74D"
    }, {
        "minvalue": "1.0",
        "maxvalue": "2.0",
        "color": "#FB8C00"
    }, {
        "minvalue": "2.0",
        "maxvalue": "3.0",
        "color": "#E65100"
    }]
};
//Set up the Map's data
const data = [{
    "id": "NA",
    "value": ".82",
    "showLabel": "1"
}, {
    "id": "SA",
    "value": "2.04",
    "showLabel": "1"
}, {
    "id": "AS",
    "value": "1.78",
    "showLabel": "1"
}, {
    "id": "EU",
    "value": ".40",
    "showLabel": "1"
}, {
    "id": "AF",
    "value": "2.58",
    "showLabel": "1"
}, {
    "id": "AU",
    "value": "1.30",
    "showLabel": "1"
}];
```

We have a detailed [Map Specification Sheets](/maps/spec-sheets/world) for all the maps that can be rendered using FusionCharts, where you can find the correct id of the maps you want to create. Now that the data is ready, include the map definition files and get ready to render your chart. The consolidated code is given below:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class WorldMap extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Define the dataset and the colorRange of the map
    const dataset = [{
      "id": "NA",
      "value": ".82",
      "showLabel": "1"
      }, {
      "id": "SA",
      "value": "2.04",
      "showLabel": "1"
      }, {
      "id": "AS",
      "value": "1.78",
      "showLabel": "1"
      }, {
      "id": "EU",
      "value": ".40",
      "showLabel": "1"
      }, {
      "id": "AF",
      "value": "2.58",
      "showLabel": "1"
      }, {
      "id": "AU",
      "value": "1.30",
      "showLabel": "1"
    }];

    const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color":
    [{
      "minvalue": "0.5",
      "maxvalue": "1.0",
      "color": "#FFD74D"
      }, {
      "minvalue": "1.0",
      "maxvalue": "2.0",
      "color": "#FB8C00"
      }, {
      "minvalue": "2.0",
      "maxvalue": "3.0",
      "color": "#E65100"
    }]
    };
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "world",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "caption": "Average Annual Population Growth",
          "subcaption": " 1955-2015",
          "numbersuffix": "%",
          "includevalueinlabels": "1",
          "labelsepchar": ": ",
          "entityFillHoverColor": "#FFF9C4",
          "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        "data": dataset
      }
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A World Map</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

That’s it. Your first map is ready.

### Render other Maps

To reduce the size of the package FusionCharts comes with only two maps, i.e., the World map and the USA map. However, FusionCharts provide 1600+ maps for you to explore. [Download](https://www.fusioncharts.com/download/map-definition-files) the map files separately if you want to save them locally.

Let's create a map of California to show the "Web visits for a particular month" as shown below:

{% embed_chartData getting-started-your-first-map-california.js json %}

The consolidated code for rendering the map is shown below:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class CaliforniaMap extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Define the dataset and the colorRange of the map
    const mapData = [{"id":"001","value":2834},{"id":"003","value":3182},{"id":"005","value":3280},{"id":"007","value":911},{"id":"009","value":292},{"id":"011","value":530},{"id":"013","value":2515},{"id":"015","value":728},{"id":"017","value":1974},{"id":"019","value":848},{"id":"021","value":3278},{"id":"023","value":4463},{"id":"025","value":1198},{"id":"027","value":378},{"id":"029","value":2610},{"id":"031","value":1200},{"id":"033","value":3820},{"id":"035","value":940},{"id":"037","value":3416},{"id":"039","value":4004},{"id":"041","value":1604},{"id":"043","value":4011},{"id":"045","value":3203},{"id":"047","value":3775},{"id":"049","value":2721},{"id":"051","value":3417},{"id":"053","value":1530},{"id":"055","value":412},{"id":"057","value":3434},{"id":"059","value":1670},{"id":"061","value":1274},{"id":"063","value":4339},{"id":"065","value":2073},{"id":"067","value":1018},{"id":"069","value":3967},{"id":"071","value":3401},{"id":"073","value":3307},{"id":"075","value":1938},{"id":"077","value":489},{"id":"079","value":3207},{"id":"081","value":2295},{"id":"083","value":2747},{"id":"085","value":1114},{"id":"087","value":3400},{"id":"089","value":784},{"id":"091","value":1673},{"id":"093","value":4274},{"id":"095","value":4509},{"id":"097","value":3862},{"id":"099","value":1356},{"id":"101","value":4126},{"id":"103","value":1314},{"id":"105","value":1807},{"id":"107","value":4026},{"id":"109","value":3456},{"id":"111","value":1393},{"id":"113","value":1500},{"id":"115","value":2218}];

    const colorrange = {
      "minvalue": "0",
      "startlabel": "Low",
      "endlabel": "High",
      "code": "e44a00",
      "gradient": "1",
      "color": [{"maxvalue": "2500", "code": "f8bd19"}, {"maxvalue": "5000", "code": "6baa01"}]
    };

    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "maps/california",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "animation": "0",
          "showbevel": "0",
          "usehovercolor": "1",
          "showlegend": "1",
          "legendposition": "BOTTOM",
          "legendborderalpha": "0",
          "legendbordercolor": "ffffff",
          "legendallowdrag": "0",
          "legendshadow": "0",
          "caption": "Website Visits for the month of March 2018",
          "connectorcolor": "000000",
          "fillalpha": "80",
          "hovercolor": "CCCCCC",
          "theme": "fusion"
        },
        "colorrange": colorrange,
        "data": mapData
      }
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>California Map</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

That's it! The **California** map is ready.

> FusionCharts offers you more than 2000 different maps suitable for various purposes. You can find more about the different types of maps [here](/map-guide/list-of-maps).

## Heat Map

A heat map chart utilizes different colors to represent data values within a table. It comes in handy the most, when you have to plot large and complex data sets. FusionCharts suite XT supports two types of heat map charts - a numeric heat map to plot numeric values, and a category-based heat map to plot non-numeric data.

TreeMaps are another similar chart types with heirarchial data. Treemaps are ideal for displaying large amounts of hierarchically structured (tree-structured) data. The space in the visualization is split up into rectangles that are sized and ordered by a quantitative variable.The levels in the hierarchy of the treemap are visualized as rectangles containing other rectangles. FInd more about the treemaps [here](/chart-guide/standard-charts/treemap).

In the section below, we will see how to build a heat map chart.

{% embed_chart standard-charts-heat-map-chart-example-1.js %}

As you can see in the heat map above, the data plot is indicating the ratings of four different smartphones based on five common components, with the help of different colors.

| State             | Processor | Screen Size | Price | Battery Backup | Camera |
| ----------------- | --------- | ----------- | ----- | -------------- | ------ |
| Samsung Galaxy H5 | 8.7       | 8.5         | 9.3   | 9.7            | 8      |
| HTC One (M8)      | 9.2       | 8.3         | 7.3   | 8.8            | 8.7    |
| Apple iPhone 5S   | 9.1       | 8.6         | 7.2   | 8.4            | 9.5    |
| Nokia Lumia 1520  | 8.8       | 9.1         | 9.7   | 9.2            | 8.1    |

To convert the data provided in the above table to a data format that FusionCharts can use, you need the following properties:

- `rows`
- `columns`
- `dataset`
- `colorRange`

The diagram below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy heat-map-data.json %}

In the sample above, the chart shows the heat map for comparing different smartphones on the basis of a number of common components. The data in the JSON format for the above chart looks as follows:

```json
const rows = {
    "row": [
        {
            "id": "SGS5",
            "label": "Samsung Galaxy S5"
        },
        {
            "id": "HTC1M8",
            "label": "HTC One (M8)"
        },
        {
            "id": "IPHONES5",
            "label": "Apple iPhone 5S"
        },
        {
            "id": "LUMIA",
            "label": "Nokia Lumia 1520"
        }
    ]
};
const columns = {
    "column": [
        {
            "id": "processor",
            "label": "Processor"
        },
        {
            "id": "screen",
            "label": "Screen Size"
        },
        {
            "id": "price",
            "label": "Price"
        },
        {
            "id": "backup",
            "label": "Battery Backup"
        },
        {
            "id": "cam",
            "label": "Camera"
        }
    ]
};
const dataset =[{
    "data": [
        {
            "rowid": "SGS5",
            "columnid": "processor",
            "value": "8.7",
            "tllabel": "Quad Core 2.5 GHz",
            "trlabel": "OS : Android 4.4 Kitkat"
        },
        {
            "rowid": "SGS5",
            "columnid": "screen",
            "value": "8.5",
            "tllabel": "5.1 inch",
            "trlabel": "AMOLED screen"
        },
        {
            "rowid": "SGS5",
            "columnid": "price",
            "value": "9.3",
            "tllabel": "$600"
        },
        {
            "rowid": "SGS5",
            "columnid": "backup",
            "value": "9.7",
            "tllabel": "29 Hrs",
            "trlabel": "Battery : 2800 MAH"
        },
        {
            "rowid": "SGS5",
            "columnid": "cam",
            "value": "8",
            "tllabel": "16 MP",
            "trlabel": "Front Camera : 2.1 MP"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "processor",
            "value": "9.2",
            "tllabel": "Quad Core 2.3 GHz",
            "trlabel": "OS : Android 4.4 Kitkat"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "screen",
            "value": "8.3",
            "tllabel": "5 inch",
            "trlabel": "LCD screen"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "price",
            "value": "7.3",
            "tllabel": "$600"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "backup",
            "value": "8.8",
            "tllabel": "20 Hrs",
            "trlabel": "Battery : 2600 MAH"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "cam",
            "value": "8.7",
            "tllabel": "4 MP",
            "trlabel": "Front Camera : 5 MP"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "processor",
            "value": "9.1",
            "tllabel": "Dual Core",
            "trlabel": "OS : iOS 7"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "screen",
            "value": "8.6",
            "tllabel": "4 inch",
            "trlabel": "Retina LCD screen"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "price",
            "value": "7.2",
            "tllabel": "$649"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "backup",
            "value": "8.4",
            "tllabel": "10 Hrs",
            "trlabel": "Battery : 1560 MAH"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "cam",
            "value": "9.5",
            "tllabel": "8 MP",
            "trlabel": "Front Camera : 1.2 MP"
        },
        {
            "rowid": "LUMIA",
            "columnid": "processor",
            "value": "8.8",
            "tllabel": "Quad Core 2.2 GHz",
            "trlabel": "OS: Windows Phone 8"
        },
        {
            "rowid": "LUMIA",
            "columnid": "screen",
            "value": "9.1",
            "tllabel": "6 inch",
            "trlabel": "LCD screen"
        },
        {
            "rowid": "LUMIA",
            "columnid": "price",
            "value": "9.7",
            "tllabel": "$470"
        },
        {
            "rowid": "LUMIA",
            "columnid": "backup",
            "value": "9.2",
            "tllabel": "27 Hrs",
            "trlabel": "Battery : 3400 MAH"
        },
        {
            "rowid": "LUMIA",
            "columnid": "cam",
            "value": "8.1",
            "tllabel": "20MP",
            "trlabel": "Front Camera : 1.2 MP"
        }
    ]
}];
const colorRange = {
    "gradient": "0",
    "minvalue": "0",
    "code": "E24B1A",
    "startlabel": "Poor",
    "endlabel": "Good",
    "color": [
        {
            "code": "E24B1A",
            "minvalue": "1",
            "maxvalue": "5",
            "label": "Bad"
        },
        {
            "code": "F6BC33",
            "minvalue": "5",
            "maxvalue": "8.5",
            "label": "Average"
        },
        {
            "code": "6DA81E",
            "minvalue": "8.5",
            "maxvalue": "10",
            "label": "Good"
        }
    ]
};
```

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";


export default class HeatMap extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Define the chart data constituting dataset and colorrange objects
    const dataset = [{
      "data": [{
          "rowid": "Samsung Galaxy S5",
          "columnid": "Processor",
          "value": "8.7",
          "tllabel": "Quad Core 2.5 GHz",
          "trlabel": "OS : Android 4.4 Kitkat"
        },
        {
          "rowid": "Samsung Galaxy S5",
          "columnid": "Screen Size",
          "value": "8.5",
          "tllabel": "5.1 inch",
          "trlabel": "AMOLED screen"
        },
        {
          "rowid": "Samsung Galaxy S5",
          "columnid": "Price",
          "value": "9.3",
          "tllabel": "$600"
        },
        {
          "rowid": "Samsung Galaxy S5",
          "columnid": "Battery Backup",
          "value": "9.7",
          "tllabel": "29 Hrs",
          "trlabel": "Battery : 2800 MAH"
        },
        {
          "rowid": "Samsung Galaxy S5",
          "columnid": "Camera",
          "value": "8",
          "tllabel": "16 MP",
          "trlabel": "Front Camera : 2.1 MP"
        },
        {
          "rowid": "HTC One (M8)",
          "columnid": "Processor",
          "value": "9.2",
          "tllabel": "Quad Core 2.3 GHz",
          "trlabel": "OS : Android 4.4 Kitkat"
        },
        {
          "rowid": "HTC One (M8)",
          "columnid": "Screen Size",
          "value": "8.3",
          "tllabel": "5 inch",
          "trlabel": "LCD screen"
        },
        {
          "rowid": "HTC One (M8)",
          "columnid": "Price",
          "value": "7.3",
          "tllabel": "$600"
        },
        {
          "rowid": "HTC One (M8)",
          "columnid": "Battery Backup",
          "value": "8.8",
          "tllabel": "20 Hrs",
          "trlabel": "Battery : 2600 MAH"
        },
        {
          "rowid": "HTC One (M8)",
          "columnid": "Camera",
          "value": "8.7",
          "tllabel": "4 MP",
          "trlabel": "Front Camera : 5 MP"
        },
        {
          "rowid": "Apple iPhone 5S",
          "columnid": "Processor",
          "value": "9.1",
          "tllabel": "Dual Core",
          "trlabel": "OS : iOS 7"
        },
        {
          "rowid": "Apple iPhone 5S",
          "columnid": "Screen Size",
          "value": "8.6",
          "tllabel": "4 inch",
          "trlabel": "Retina LCD screen"
        },
        {
          "rowid": "Apple iPhone 5S",
          "columnid": "Price",
          "value": "7.2",
          "tllabel": "$649"
        },
        {
          "rowid": "Apple iPhone 5S",
          "columnid": "Battery Backup",
          "value": "8.4",
          "tllabel": "10 Hrs",
          "trlabel": "Battery : 1560 MAH"
        },
        {
          "rowid": "Apple iPhone 5S",
          "columnid": "Camera",
          "value": "9.5",
          "tllabel": "8 MP",
          "trlabel": "Front Camera : 1.2 MP"
        },
        {
          "rowid": "Nokia Lumia 1520",
          "columnid": "Processor",
          "value": "8.8",
          "tllabel": "Quad Core 2.2 GHz",
          "trlabel": "OS: Windows Phone 8"
        },
        {
          "rowid": "Nokia Lumia 1520",
          "columnid": "Screen Size",
          "value": "9.1",
          "tllabel": "6 inch",
          "trlabel": "LCD screen"
        },
        {
          "rowid": "Nokia Lumia 1520",
          "columnid": "Price",
          "value": "9.7",
          "tllabel": "$470"
        },
        {
          "rowid": "Nokia Lumia 1520",
          "columnid": "Battery Backup",
          "value": "9.2",
          "tllabel": "27 Hrs",
          "trlabel": "Battery : 3400 MAH"
        },
        {
          "rowid": "Nokia Lumia 1520",
          "columnid": "Camera",
          "value": "8.1",
          "tllabel": "20MP",
          "trlabel": "Front Camera : 1.2 MP"
        }
      ]
    }];

    const colorrange = {
      "gradient": "0",
      "minvalue": "0",
      "code": "E24B1A",
      "startlabel": "Poor",
      "endlabel": "Good",
      "color": [{
          "code": "E24B1A",
          "minvalue": "1",
          "maxvalue": "5",
          "label": "Bad"
        },
        {
          "code": "F6BC33",
          "minvalue": "5",
          "maxvalue": "8.5",
          "label": "Average"
        },
        {
          "code": "6DA81E",
          "minvalue": "8.5",
          "maxvalue": "10",
          "label": "Good"
        }
      ]
    };

    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "heatmap",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "caption": "Top Smartphone Ratings",
          "subcaption": "By Features",
          "xAxisName": "Features",
          "yAxisName": "Model",
          "showPlotBorder": "1",
          "xAxisLabelsOnTop": "1",
          "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",
          //Cosmetics
          "showValues": "1",
          "showBorder": "0",
          "bgColor": "#ffffff",
          "showShadow": "0",
          "usePlotGradientColor": "0",
          "toolTipColor": "#ffffff",
          "toolTipBorderThickness": "0",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "80",
          "toolTipBorderRadius": "2",
          "toolTipPadding": "5",
          "theme": "fusion"
        },
        "dataset": dataset,
        "colorrange": colorrange
  
      }
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A HeatMap</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

> There are more variants of Heatmap charts available with FusionCharts. Know more about Heat maps and its configurations [here](/chart-guide/standard-charts/heat-map-chart). You can also create various charts belonging to the [PowerCharts](/chart-guide/list-of-charts#powercharts-xt) family in a similar way.

## Gantt Chart

A Gantt chart is a date/time-based chart, which you can use to plot tasks along with their start and end dates/times. You can also use the chart to define milestones for a project, indicating different stages with their deadlines. That way, you can constantly keep an eye on project status, and plan alternate strategies in case you encounter an unprecedented delay.

In the section below, we will see how to build a Gantt chart.

{% embed_chart standard-charts-gantt-chart-example-1.js %}

As you can see in the Gantt chart above, the data plot is indicating the planned and the actual achievements, as well as the delays, with the help of different colors. In the above chart, we have plotted the Project Plan for the opening of a new store. To convert the data provided above to a data format that FusionCharts can use, you need the following properties:

- `categories`
- `processes`
- `datatable`
- `tasks`
- `connectors`

The diagram below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy gantt-chart-data.json %}

In the sample above, the chart shows the project structure for opening a new store. The data in the JSON format for the above chart looks as follows:

```json
//Define the categories (month-labels) of the Gantt chart
const categories = [{
    "bgcolor": "#999999",
    "category": [{
    "start": "1/4/2014",
    "end": "30/6/2014",
    "label": "Months",
    "align": "middle",
    "fontcolor": "#ffffff",
    "fontsize": "12"
    }]
}, {
    "bgcolor": "#999999",
    "align": "middle",
    "fontcolor": "#ffffff",
    "fontsize": "12",
    "category": [{
    "start": "1/4/2014",
    "end": "30/4/2014",
    "label": "April"
    }, {
    "start": "1/5/2014",
    "end": "31/5/2014",
    "label": "May"
    }, {
    "start": "1/6/2014",
    "end": "30/6/2014",
    "label": "June"
    }]
}, {
    "bgcolor": "#ffffff",
    "fontcolor": "#333333",
    "fontsize": "11",
    "align": "center",
    "category": [{
    "start": "1/4/2014",
    "end": "5/4/2014",
    "label": "Week 1"
    }, {
    "start": "6/4/2014",
    "end": "12/4/2014",
    "label": "Week 2"
    }, {
    "start": "13/4/2014",
    "end": "19/4/2014",
    "label": "Week 3"
    }, {
    "start": "20/4/2014",
    "end": "26/4/2014",
    "label": "Week 4"
    }, {
    "start": "27/4/2014",
    "end": "3/5/2014",
    "label": "Week 5"
    }, {
    "start": "4/5/2014",
    "end": "10/5/2014",
    "label": "Week 6"
    }, {
    "start": "11/5/2014",
    "end": "17/5/2014",
    "label": "Week 7"
    }, {
    "start": "18/5/2014",
    "end": "24/5/2014",
    "label": "Week 8"
    }, {
    "start": "25/5/2014",
    "end": "31/5/2014",
    "label": "Week 9"
    }, {
    "start": "1/6/2014",
    "end": "7/6/2014",
    "label": "Week 10"
    }, {
    "start": "8/6/2014",
    "end": "14/6/2014",
    "label": "Week 11"
    }, {
    "start": "15/6/2014",
    "end": "21/6/2014",
    "label": "Week 12"
    }, {
    "start": "22/6/2014",
    "end": "28/6/2014",
    "label": "Week 13"
    }]
}];
// Define the processes which are a part of the planning
const processes = {
    "headertext": "Task",
    "fontcolor": "#000000",
    "fontsize": "11",
    "isanimated": "1",
    "bgcolor": "#6baa01",
    "headervalign": "bottom",
    "headeralign": "left",
    "headerbgcolor": "#999999",
    "headerfontcolor": "#ffffff",
    "headerfontsize": "12",
    "align": "left",
    "isbold": "1",
    "bgalpha": "25",
    "process": [{
        "label": "Clear site",
        "id": "1"
        }, {
        "label": "Excavate Foundation",
        "id": "2",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Concrete Foundation",
        "id": "3",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Footing to DPC",
        "id": "4",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Drainage Services",
        "id": "5",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Backfill",
        "id": "6",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Ground Floor",
        "id": "7"
        }, {
        "label": "Walls on First Floor",
        "id": "8"
        }, {
        "label": "First Floor Carcass",
        "id": "9",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "First Floor Deck",
        "id": "10",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Roof Structure",
        "id": "11"
        }, {
        "label": "Roof Covering",
        "id": "12"
        }, {
        "label": "Rainwater Gear",
        "id": "13"
        }, {
        "label": "Windows",
        "id": "14"
        }, {
        "label": "External Doors",
        "id": "15"
        }, {
        "label": "Connect Electricity",
        "id": "16"
        }, {
        "label": "Connect Water Supply",
        "id": "17",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Install Air Conditioning",
        "id": "18",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Interior Decoration",
        "id": "19",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Fencing And signs",
        "id": "20"
        }, {
        "label": "Exterior Decoration",
        "id": "21",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Setup racks",
        "id": "22"
    }]
};
//Define the start and end dates of each process
const datatable = {
    "showprocessname": "1",
    "namealign": "left",
    "fontcolor": "#000000",
    "fontsize": "10",
    "valign": "right",
    "align": "center",
    "headervalign": "bottom",
    "headeralign": "center",
    "headerbgcolor": "#999999",
    "headerfontcolor": "#ffffff",
    "headerfontsize": "12",
    "datacolumn": [{
        "bgcolor": "#eeeeee",
        "headertext": "Actual{br}Start{br}Date",
        "text": [{
            "label": "9/4/2014"
        }, {
            "label": "13/4/2014"
        }, {
            "label": "26/4/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40",

        }, {
            "label": "4/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "6/5/2014"
        }, {
            "label": "5/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "11/5/2014"
        }, {
            "label": "16/5/2014"
        }, {
            "label": "16/5/2014"
        }, {
            "label": "21/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "25/5/2014"
        }, {
            "label": "28/5/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "2/6/2014"
        }, {
            "label": "5/6/2014"
        }, {
            "label": "18/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "16/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "23/6/2014"
        }, {
            "label": "18/6/2014"
        }, {
            "label": "25/6/2014"
        }]
        }, {
        "bgcolor": "#eeeeee",
        "headertext": "Actual{br}End{br}Date",
        "text": [{
            "label": "12/4/2014"
        }, {
            "label": "25/4/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "4/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "10/5/2014"
        }, {
            "label": "10/5/2014"
        }, {
            "label": "11/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "14/5/2014"
        }, {
            "label": "19/5/2014"
        }, {
            "label": "21/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "24/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "27/5/2014"
        }, {
            "label": "1/6/2014"
        }, {
            "label": "6/6/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "7/6/2014"
        }, {
            "label": "17/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "20/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "23/6/2014"
        }, {
            "label": "23/6/2014"
        }, {
            "label": "23/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "28/6/2014"
        }]
    }]
};
//Define the actual labelled tasks - Planned and Actual
const tasks = {
    "task": [{
    "label": "Planned",
    "processid": "1",
    "start": "9/4/2014",
    "end": "12/4/2014",
    "id": "1-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "1",
    "start": "9/4/2014",
    "end": "12/4/2014",
    "id": "1",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "2",
    "start": "13/4/2014",
    "end": "23/4/2014",
    "id": "2-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "2",
    "start": "13/4/2014",
    "end": "25/4/2014",
    "id": "2",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "2",
    "start": "23/4/2014",
    "end": "25/4/2014",
    "id": "2-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 2 days."
    }, {
    "label": "Planned",
    "processid": "3",
    "start": "23/4/2014",
    "end": "30/4/2014",
    "id": "3-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "3",
    "start": "26/4/2014",
    "end": "4/5/2014",
    "id": "3",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "3",
    "start": "3/5/2014",
    "end": "4/5/2014",
    "id": "3-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 1 days."
    }, {
    "label": "Planned",
    "processid": "4",
    "start": "3/5/2014",
    "end": "10/5/2014",
    "id": "4-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "4",
    "start": "4/5/2014",
    "end": "10/5/2014",
    "id": "4",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "5",
    "start": "6/5/2014",
    "end": "11/5/2014",
    "id": "5-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "5",
    "start": "6/5/2014",
    "end": "10/5/2014",
    "id": "5",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "6",
    "start": "4/5/2014",
    "end": "7/5/2014",
    "id": "6-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "6",
    "start": "5/5/2014",
    "end": "11/5/2014",
    "id": "6",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "6",
    "start": "7/5/2014",
    "end": "11/5/2014",
    "id": "6-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 4 days."
    }, {
    "label": "Planned",
    "processid": "7",
    "start": "11/5/2014",
    "end": "14/5/2014",
    "id": "7-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "7",
    "start": "11/5/2014",
    "end": "14/5/2014",
    "id": "7",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "8",
    "start": "16/5/2014",
    "end": "19/5/2014",
    "id": "8-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "8",
    "start": "16/5/2014",
    "end": "19/5/2014",
    "id": "8",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "9",
    "start": "16/5/2014",
    "end": "18/5/2014",
    "id": "9-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "9",
    "start": "16/5/2014",
    "end": "21/5/2014",
    "id": "9",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "9",
    "start": "18/5/2014",
    "end": "21/5/2014",
    "id": "9-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 3 days."
    }, {
    "label": "Planned",
    "processid": "10",
    "start": "20/5/2014",
    "end": "23/5/2014",
    "id": "10-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "10",
    "start": "21/5/2014",
    "end": "24/5/2014",
    "id": "10",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "10",
    "start": "23/5/2014",
    "end": "24/5/2014",
    "id": "10-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 1 days."
    }, {
    "label": "Planned",
    "processid": "11",
    "start": "25/5/2014",
    "end": "27/5/2014",
    "id": "11-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "11",
    "start": "25/5/2014",
    "end": "27/5/2014",
    "id": "11",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "12",
    "start": "28/5/2014",
    "end": "1/6/2014",
    "id": "12-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "12",
    "start": "28/5/2014",
    "end": "1/6/2014",
    "id": "12",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "13",
    "start": "4/6/2014",
    "end": "6/6/2014",
    "id": "13-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "13",
    "start": "4/6/2014",
    "end": "6/6/2014",
    "id": "13",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "14",
    "start": "4/6/2014",
    "end": "4/6/2014",
    "id": "14-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "14",
    "start": "4/6/2014",
    "end": "4/6/2014",
    "id": "14",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "15",
    "start": "4/6/2014",
    "end": "4/6/2014",
    "id": "15-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "15",
    "start": "4/6/2014",
    "end": "4/6/2014",
    "id": "15",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "16",
    "start": "2/6/2014",
    "end": "7/6/2014",
    "id": "16-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "16",
    "start": "2/6/2014",
    "end": "7/6/2014",
    "id": "16",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "17",
    "start": "5/6/2014",
    "end": "10/6/2014",
    "id": "17-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "17",
    "start": "5/6/2014",
    "end": "17/6/2014",
    "id": "17",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "17",
    "start": "10/6/2014",
    "end": "17/6/2014",
    "id": "17-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 7 days."
    }, {
    "label": "Planned",
    "processid": "18",
    "start": "10/6/2014",
    "end": "12/6/2014",
    "id": "18-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Delay",
    "processid": "18",
    "start": "18/6/2014",
    "end": "20/6/2014",
    "id": "18",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 8 days."
    }, {
    "label": "Planned",
    "processid": "19",
    "start": "15/6/2014",
    "end": "23/6/2014",
    "id": "19-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "19",
    "start": "16/6/2014",
    "end": "23/6/2014",
    "id": "19",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "20",
    "start": "23/6/2014",
    "end": "23/6/2014",
    "id": "20-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "20",
    "start": "23/6/2014",
    "end": "23/6/2014",
    "id": "20",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "21",
    "start": "18/6/2014",
    "end": "21/6/2014",
    "id": "21-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "21",
    "start": "18/6/2014",
    "end": "23/6/2014",
    "id": "21",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "21",
    "start": "21/6/2014",
    "end": "23/6/2014",
    "id": "21-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 2 days."
    }, {
    "label": "Planned",
    "processid": "22",
    "start": "24/6/2014",
    "end": "28/6/2014",
    "id": "22-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "22",
    "start": "25/6/2014",
    "end": "28/6/2014",
    "id": "22",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }]
};
//Define the connections between different tasks
const connectors = [{
    "connector": [{
    "fromtaskid": "1",
    "totaskid": "2",
    "color": "#008ee4",
    "thickness": "2",
    "fromtaskconnectstart_": "1"
    }, {
    "fromtaskid": "2-2",
    "totaskid": "3",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "3-2",
    "totaskid": "4",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "3-2",
    "totaskid": "6",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "7",
    "totaskid": "8",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "7",
    "totaskid": "9",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "12",
    "totaskid": "16",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "12",
    "totaskid": "17",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "17-2",
    "totaskid": "18",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "19",
    "totaskid": "22",
    "color": "#008ee4",
    "thickness": "2"
    }]
}];
```

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class GanttChart extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Define the various data objects for the Gantt Chart
    const categories = [{
      "bgcolor": "#999999",
      "category": [{
        "start": "1/4/2014",
        "end": "30/6/2014",
        "label": "Months",
        "align": "middle",
        "fontcolor": "#ffffff",
        "fontsize": "12"
      }]
    }, {
      "bgcolor": "#999999",
      "align": "middle",
      "fontcolor": "#ffffff",
      "fontsize": "12",
      "category": [{
        "start": "1/4/2014",
        "end": "30/4/2014",
        "label": "April"
      }, {
        "start": "1/5/2014",
        "end": "31/5/2014",
        "label": "May"
      }, {
        "start": "1/6/2014",
        "end": "30/6/2014",
        "label": "June"
      }]
    }, {
      "bgcolor": "#ffffff",
      "fontcolor": "#333333",
      "fontsize": "11",
      "align": "center",
      "category": [{
        "start": "1/4/2014",
        "end": "5/4/2014",
        "label": "Week 1"
      }, {
        "start": "6/4/2014",
        "end": "12/4/2014",
        "label": "Week 2"
      }, {
        "start": "13/4/2014",
        "end": "19/4/2014",
        "label": "Week 3"
      }, {
        "start": "20/4/2014",
        "end": "26/4/2014",
        "label": "Week 4"
      }, {
        "start": "27/4/2014",
        "end": "3/5/2014",
        "label": "Week 5"
      }, {
        "start": "4/5/2014",
        "end": "10/5/2014",
        "label": "Week 6"
      }, {
        "start": "11/5/2014",
        "end": "17/5/2014",
        "label": "Week 7"
      }, {
        "start": "18/5/2014",
        "end": "24/5/2014",
        "label": "Week 8"
      }, {
        "start": "25/5/2014",
        "end": "31/5/2014",
        "label": "Week 9"
      }, {
        "start": "1/6/2014",
        "end": "7/6/2014",
        "label": "Week 10"
      }, {
        "start": "8/6/2014",
        "end": "14/6/2014",
        "label": "Week 11"
      }, {
        "start": "15/6/2014",
        "end": "21/6/2014",
        "label": "Week 12"
      }, {
        "start": "22/6/2014",
        "end": "28/6/2014",
        "label": "Week 13"
      }]
    }];
    //List out the different processes of the Gantt chart
    const processes = {
      "headertext": "Task",
      "fontcolor": "#000000",
      "fontsize": "11",
      "isanimated": "1",
      "bgcolor": "#6baa01",
      "headervalign": "bottom",
      "headeralign": "left",
      "headerbgcolor": "#999999",
      "headerfontcolor": "#ffffff",
      "headerfontsize": "12",
      "align": "left",
      "isbold": "1",
      "bgalpha": "25",
      "process": [{
        "label": "Clear site",
        "id": "1"
      }, {
        "label": "Excavate Foundation",
        "id": "2",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Concrete Foundation",
        "id": "3",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Footing to DPC",
        "id": "4",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Drainage Services",
        "id": "5",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Backfill",
        "id": "6",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Ground Floor",
        "id": "7"
      }, {
        "label": "Walls on First Floor",
        "id": "8"
      }, {
        "label": "First Floor Carcass",
        "id": "9",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "First Floor Deck",
        "id": "10",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Roof Structure",
        "id": "11"
      }, {
        "label": "Roof Covering",
        "id": "12"
      }, {
        "label": "Rainwater Gear",
        "id": "13"
      }, {
        "label": "Windows",
        "id": "14"
      }, {
        "label": "External Doors",
        "id": "15"
      }, {
        "label": "Connect Electricity",
        "id": "16"
      }, {
        "label": "Connect Water Supply",
        "id": "17",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Install Air Conditioning",
        "id": "18",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Interior Decoration",
        "id": "19",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Fencing And signs",
        "id": "20"
      }, {
        "label": "Exterior Decoration",
        "id": "21",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
      }, {
        "label": "Setup racks",
        "id": "22"
      }]
    };

    const datatable = {
      "showprocessname": "1",
      "namealign": "left",
      "fontcolor": "#000000",
      "fontsize": "10",
      "valign": "right",
      "align": "center",
      "headervalign": "bottom",
      "headeralign": "center",
      "headerbgcolor": "#999999",
      "headerfontcolor": "#ffffff",
      "headerfontsize": "12",
      "datacolumn": [{
        "bgcolor": "#eeeeee",
        "headertext": "Actual{br}Start{br}Date",
        "text": [{
          "label": "9/4/2014"
        }, {
          "label": "13/4/2014"
        }, {
          "label": "26/4/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40",

        }, {
          "label": "4/5/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "6/5/2014"
        }, {
          "label": "5/5/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "11/5/2014"
        }, {
          "label": "16/5/2014"
        }, {
          "label": "16/5/2014"
        }, {
          "label": "21/5/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "25/5/2014"
        }, {
          "label": "28/5/2014"
        }, {
          "label": "4/6/2014"
        }, {
          "label": "4/6/2014"
        }, {
          "label": "4/6/2014"
        }, {
          "label": "2/6/2014"
        }, {
          "label": "5/6/2014"
        }, {
          "label": "18/6/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "16/6/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "23/6/2014"
        }, {
          "label": "18/6/2014"
        }, {
          "label": "25/6/2014"
        }]
      }, {
        "bgcolor": "#eeeeee",
        "headertext": "Actual{br}End{br}Date",
        "text": [{
          "label": "12/4/2014"
        }, {
          "label": "25/4/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "4/5/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "10/5/2014"
        }, {
          "label": "10/5/2014"
        }, {
          "label": "11/5/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "14/5/2014"
        }, {
          "label": "19/5/2014"
        }, {
          "label": "21/5/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "24/5/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "27/5/2014"
        }, {
          "label": "1/6/2014"
        }, {
          "label": "6/6/2014"
        }, {
          "label": "4/6/2014"
        }, {
          "label": "4/6/2014"
        }, {
          "label": "7/6/2014"
        }, {
          "label": "17/6/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "20/6/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "23/6/2014"
        }, {
          "label": "23/6/2014"
        }, {
          "label": "23/6/2014",
          "bgcolor": "#e44a00",
          "bgAlpha": "40"
        }, {
          "label": "28/6/2014"
        }]
      }]
    };
    //Define different tasks of the process in a JSON object
    const tasks = {
      "task": [{
        "label": "Planned",
        "processid": "1",
        "start": "9/4/2014",
        "end": "12/4/2014",
        "id": "1-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "1",
        "start": "9/4/2014",
        "end": "12/4/2014",
        "id": "1",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "2",
        "start": "13/4/2014",
        "end": "23/4/2014",
        "id": "2-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "2",
        "start": "13/4/2014",
        "end": "25/4/2014",
        "id": "2",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Delay",
        "processid": "2",
        "start": "23/4/2014",
        "end": "25/4/2014",
        "id": "2-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 2 days."
      }, {
        "label": "Planned",
        "processid": "3",
        "start": "23/4/2014",
        "end": "30/4/2014",
        "id": "3-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "3",
        "start": "26/4/2014",
        "end": "4/5/2014",
        "id": "3",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Delay",
        "processid": "3",
        "start": "3/5/2014",
        "end": "4/5/2014",
        "id": "3-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 1 days."
      }, {
        "label": "Planned",
        "processid": "4",
        "start": "3/5/2014",
        "end": "10/5/2014",
        "id": "4-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "4",
        "start": "4/5/2014",
        "end": "10/5/2014",
        "id": "4",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "5",
        "start": "6/5/2014",
        "end": "11/5/2014",
        "id": "5-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "5",
        "start": "6/5/2014",
        "end": "10/5/2014",
        "id": "5",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "6",
        "start": "4/5/2014",
        "end": "7/5/2014",
        "id": "6-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "6",
        "start": "5/5/2014",
        "end": "11/5/2014",
        "id": "6",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Delay",
        "processid": "6",
        "start": "7/5/2014",
        "end": "11/5/2014",
        "id": "6-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 4 days."
      }, {
        "label": "Planned",
        "processid": "7",
        "start": "11/5/2014",
        "end": "14/5/2014",
        "id": "7-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "7",
        "start": "11/5/2014",
        "end": "14/5/2014",
        "id": "7",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "8",
        "start": "16/5/2014",
        "end": "19/5/2014",
        "id": "8-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "8",
        "start": "16/5/2014",
        "end": "19/5/2014",
        "id": "8",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "9",
        "start": "16/5/2014",
        "end": "18/5/2014",
        "id": "9-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "9",
        "start": "16/5/2014",
        "end": "21/5/2014",
        "id": "9",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Delay",
        "processid": "9",
        "start": "18/5/2014",
        "end": "21/5/2014",
        "id": "9-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 3 days."
      }, {
        "label": "Planned",
        "processid": "10",
        "start": "20/5/2014",
        "end": "23/5/2014",
        "id": "10-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "10",
        "start": "21/5/2014",
        "end": "24/5/2014",
        "id": "10",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Delay",
        "processid": "10",
        "start": "23/5/2014",
        "end": "24/5/2014",
        "id": "10-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 1 days."
      }, {
        "label": "Planned",
        "processid": "11",
        "start": "25/5/2014",
        "end": "27/5/2014",
        "id": "11-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "11",
        "start": "25/5/2014",
        "end": "27/5/2014",
        "id": "11",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "12",
        "start": "28/5/2014",
        "end": "1/6/2014",
        "id": "12-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "12",
        "start": "28/5/2014",
        "end": "1/6/2014",
        "id": "12",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "13",
        "start": "4/6/2014",
        "end": "6/6/2014",
        "id": "13-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "13",
        "start": "4/6/2014",
        "end": "6/6/2014",
        "id": "13",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "14",
        "start": "4/6/2014",
        "end": "4/6/2014",
        "id": "14-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "14",
        "start": "4/6/2014",
        "end": "4/6/2014",
        "id": "14",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "15",
        "start": "4/6/2014",
        "end": "4/6/2014",
        "id": "15-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "15",
        "start": "4/6/2014",
        "end": "4/6/2014",
        "id": "15",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "16",
        "start": "2/6/2014",
        "end": "7/6/2014",
        "id": "16-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "16",
        "start": "2/6/2014",
        "end": "7/6/2014",
        "id": "16",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "17",
        "start": "5/6/2014",
        "end": "10/6/2014",
        "id": "17-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "17",
        "start": "5/6/2014",
        "end": "17/6/2014",
        "id": "17",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Delay",
        "processid": "17",
        "start": "10/6/2014",
        "end": "17/6/2014",
        "id": "17-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 7 days."
      }, {
        "label": "Planned",
        "processid": "18",
        "start": "10/6/2014",
        "end": "12/6/2014",
        "id": "18-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Delay",
        "processid": "18",
        "start": "18/6/2014",
        "end": "20/6/2014",
        "id": "18",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 8 days."
      }, {
        "label": "Planned",
        "processid": "19",
        "start": "15/6/2014",
        "end": "23/6/2014",
        "id": "19-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "19",
        "start": "16/6/2014",
        "end": "23/6/2014",
        "id": "19",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "20",
        "start": "23/6/2014",
        "end": "23/6/2014",
        "id": "20-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "20",
        "start": "23/6/2014",
        "end": "23/6/2014",
        "id": "20",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Planned",
        "processid": "21",
        "start": "18/6/2014",
        "end": "21/6/2014",
        "id": "21-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "21",
        "start": "18/6/2014",
        "end": "23/6/2014",
        "id": "21",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }, {
        "label": "Delay",
        "processid": "21",
        "start": "21/6/2014",
        "end": "23/6/2014",
        "id": "21-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 2 days."
      }, {
        "label": "Planned",
        "processid": "22",
        "start": "24/6/2014",
        "end": "28/6/2014",
        "id": "22-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
      }, {
        "label": "Actual",
        "processid": "22",
        "start": "25/6/2014",
        "end": "28/6/2014",
        "id": "22",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
      }]
    };
    //Structurize the connectors between different tasks of the Gantt chart
    const connectors = [{
      "connector": [{
        "fromtaskid": "1",
        "totaskid": "2",
        "color": "#008ee4",
        "thickness": "2",
        "fromtaskconnectstart_": "1"
      }, {
        "fromtaskid": "2-2",
        "totaskid": "3",
        "color": "#008ee4",
        "thickness": "2"
      }, {
        "fromtaskid": "3-2",
        "totaskid": "4",
        "color": "#008ee4",
        "thickness": "2"
      }, {
        "fromtaskid": "3-2",
        "totaskid": "6",
        "color": "#008ee4",
        "thickness": "2"
      }, {
        "fromtaskid": "7",
        "totaskid": "8",
        "color": "#008ee4",
        "thickness": "2"
      }, {
        "fromtaskid": "7",
        "totaskid": "9",
        "color": "#008ee4",
        "thickness": "2"
      }, {
        "fromtaskid": "12",
        "totaskid": "16",
        "color": "#008ee4",
        "thickness": "2"
      }, {
        "fromtaskid": "12",
        "totaskid": "17",
        "color": "#008ee4",
        "thickness": "2"
      }, {
        "fromtaskid": "17-2",
        "totaskid": "18",
        "color": "#008ee4",
        "thickness": "2"
      }, {
        "fromtaskid": "19",
        "totaskid": "22",
        "color": "#008ee4",
        "thickness": "2"
      }]
    }];

    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "gantt",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "theme": "fusion",
          "caption": "New Store Opening - Project Plan",
          "subcaption": "Planned vs Actual",
          "dateformat": "dd/mm/yyyy",
          "outputdateformat": "ddds mns yy",
          "ganttwidthpercent": "60",
          "ganttPaneDuration": "40",
          "ganttPaneDurationUnit": "d",
          "plottooltext": "$processName{br}$label starting date $start{br}$label ending date $end",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "usePlotGradientColor": "0",
          "showCanvasBorder": "0",
          "flatScrollBars": "1",
          "gridbordercolor": "#333333",
          "gridborderalpha": "20",
          "slackFillColor": "#e44a00",
          "taskBarFillMix": "light+0"
        },
        "categories": categories,
        "processes": processes,
        "datatable": datatable,
        "tasks": tasks,
        "connectors": connectors,
        "milestones": {
          "milestone": [{
              "date": "2/6/2014",
              "taskid": "12",
              "color": "#f8bd19",
              "shape": "star",
              "tooltext": "Completion of Phase 1"
            }
          ]
        },
        "legend": {
          "item": [{
            "label": "Planned",
            "color": "#008ee4"
          }, {
            "label": "Actual",
            "color": "#6baa01"
          }, {
            "label": "Slack (Delay)",
            "color": "#e44a00"
          }]
        }
  
  
      }
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Gantt Chart</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});
```

> Know more about Gantt Chart and its configurations [here](/chart-guide/standard-charts/gantt-chart). You can also create various charts belonging to the PowerCharts family in a similar way. Check out the different types of PowerCharts [here](/chart-guide/list-of-charts#powercharts-xt).
