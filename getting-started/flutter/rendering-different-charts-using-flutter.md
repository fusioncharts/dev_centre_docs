---
title: Rendering different Charts | FusionCharts
description: This article outlines some of the popular charts and the way to render them with their respective data formats.
heading: Rendering Different Charts
---

In the [Getting Started](/getting-started/flutter/your-first-chart-using-flutter) section, we discussed building a single series chart using FusionCharts Suite XT. In this section, you can see how to create different charts and maps using FusionCharts and Flutter.

Note that some of the chart types and the maps use data structures that are different from the ones you use in a single-series chart. Those are highlighted in the sections below:
- [Multi-series Charts](/getting-started/flutter/rendering-different-charts-using-flutter#multi-series-charts)
- [Combination Charts](/getting-started/flutter/rendering-different-charts-using-flutter#combination-charts)
- [Real-time Chart](/getting-started/flutter/rendering-different-charts-using-flutter#real-time-charts)

## Multi-series Charts

A Multi-series chart plots data for more than one series of data values. It is used to analyze and compare data points grouped in sub-categories. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts also plot the highs and lows of multiple datasets to compare them easily.

In a multi-series chart, we have two or more datasets plotted against the same X-axis (or Y-axis) value. Below is an example of a Multi-series Overlapped Bar 2D Chart.

![Overlap Bar 2D](/flutter/images/flutter_chart_overlapped2d.jpg)

As you can see, a Multi-series Overlapped Bar 2D Chart has horizontally aligned rectangular bars on one axis with discrete values shown on the other. The bar’s length is proportionate to the value it represents.

The following table shows the data used to build the chart shown above.

| Quarter | Food Products | Non-Food Products |
| ------- | ------------- | ----------------- |
| Q1      | 12000         | 24400             |
| Q2      | 10500         | 29800             |
| Q3      | 23500         | 20800             |
| Q4      | 16000         | 26000             |

In the example chart, we have plotted quarters with data values for the Food Products and the Non-Food Products along the Y-axis. To convert this to a data format that FusionCharts can use, you need the following two properties:

- `categories`
- `dataset`

As shown above, the chart compares the quarterly sales split by product category of a company for over two years. The data in the JSON format for the above chart looks as follows:

```json
// Define the categories representing the labels on the Y-axis
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
    "seriesname": "Food Products",
    "data": [
      { "value": "12000" },
      { "value": "10500" },
      { "value": "23500" },
      { "value": "16000" }
    ]
  },
  {
    "seriesname": "Non-Food Products",
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

Now that the data is ready let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_fusioncharts/flutter_fusioncharts.dart';
import '../../constants.dart';


class OverlappedBar2D extends StatefulWidget {
  const OverlappedBar2D({super.key});


  @override
  State<OverlappedBar2D> createState() => _OverlappedBar2DState();
}


class _OverlappedBar2DState extends State<OverlappedBar2D> {
  late FusionCharts _fusionChart2D;
  FusionChartsController fusionChartsController = FusionChartsController();


  @override
  void initState() {
    super.initState();
    // STEP 2- Define the categories representing the labels on the Y-axis
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
        "seriesname": "Food Products",
        "data": [
          { "value": "12000" },
          { "value": "10500" },
          { "value": "23500" },
          { "value": "16000" }
        ]
      },
      {
        "seriesname": "Non-Food Products",
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
      type: "overlappedbar2d",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "theme": "fusion",
          "caption": "Split of Sales by Product Category",
          "xAxisname": "Sales (In USD)",
          "yAxisName": "Quarter",
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

> You can also create various charts belonging to the multi-series family in a similar way. We have over 15+ multi-series charts. You can find more about their types, components, configurations, etc. [here](/chart-guide/standard-charts/multi-series-charts).

## Combination Charts

Combination charts also allow you to plot multiple datasets on the same chart. However, while in multi-series charts you need to use the same plot type for all datasets, in a combination chart you can use a different plot type for each dataset. For instance, you can show a column, a line, and an area plot on the same chart canvas.

![Combination 2D](/flutter/images/flutter_chart_combination2d.jpg)

As you can see in the 2D Single Y-axis combination chart above, a line, a column, and an area type plot share the same set of X and Y-axis. The line plot displays the projected monthly revenue of Harry’s SuperMart, while the column plot displays the actual revenue earned, and the area plot shows the monthly profit. To build the chart, we will use the data provided in the following table:

| Quarter   | Actual Revenue | Projected Revenue | Profit |
| --------- | -------------- | ----------------- | ------ |
| Q1        | 16000          | 15000             | 4000   |
| Q2        | 20000          | 16000             | 5000   |
| Q3        | 18000          | 17000             | 3000   |
| Q4        | 19000          | 18000             | 4000   |

In the above chart, we have plotted quarterly values for projected revenue, actual revenue, and profits made by Harry’s Supermart with monthly data values along the X-axis. To convert the data provided in the above table to a data format that FusionCharts can use, you need the following two properties:

- `categories`
- `dataset`

As shown in the sample above, the chart compares the quarterly sales and profits of the Supermart. The data in the JSON format for the above chart looks as follows:

```json
// Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
        {"label": "Q1"},
        {"label": "Q2"},
        {"label": "Q3"},
        {"label": "Q4"}
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
        {"value": "19000"}
    ]
  },
  {
    "seriesname": "Projected Revenue",
    "renderAs": "line",
    "data": [
        {"value": "15000"},
        {"value": "16000"},
        {"value": "17000"},
        {"value": "18000"}
    ]
  },
  {
    "seriesName": "Profit",
    "renderAs": "area",
    "data": [
        {"value": "4000"},
        {"value": "5000"},
        {"value": "3000"},
        {"value": "4000"}
    ]
}
]
```

> The number of objects passed in the series should be the same as the number of labels.

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import Flutter, { Component } from "flutter";
import { Platform, StyleSheet, Text, View } from "flutter";
import FusionCharts from "react-native-fusioncharts";
export default class Combination2D extends Component {
  constructor(props) {
    super(props);
    // STEP 2- Define the categories representing the labels on the X-axis
    const categories = [{
      "category": [{
          "label": "Q1"
        },
        {
          "label": "Q2"
        },
        {
          "label": "Q3"
        },
        {
          "label": "Q4"
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
          "xAxisname": "Quarter",
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

![Real-Time Line](/flutter/images/flutter_chart_realtime-line.jpg)

As you can see in the real-time 2D line chart above, the data plot is presenting the values present at a given instance. As soon as new values are available in the source data, the chart will update itself with the fresh values, gradually discarding the data plots displayed above.

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
import Flutter, { Component } from "flutter";
import { Platform, StyleSheet, Text, View } from "flutter";
import FusionCharts from "flutter-fusioncharts";
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
import Flutter, { Component } from "flutter";
import { Platform, StyleSheet, Text, View } from "flutter";
import FusionCharts from "flutter-fusioncharts";
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
