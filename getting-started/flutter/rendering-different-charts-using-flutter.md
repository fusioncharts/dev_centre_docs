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
- [Gauges](/getting-started/flutter/rendering-different-charts-using-flutter#gauges)
- [Maps](/getting-started/flutter/rendering-different-charts-using-flutter#maps)
- [Heatmap](/getting-started/flutter/rendering-different-charts-using-flutter#heat-map)
- [Gantt Chart](/getting-started/flutter/rendering-different-charts-using-flutter#gantt-chart)

## Multi-series Charts

A Multi-series chart plots data for more than one series of data values. It is used to analyze and compare data points grouped in sub-categories. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts also plot the highs and lows of multiple datasets to compare them easily.

In a multi-series chart, we have two or more datasets plotted against the same X-axis (or Y-axis) value. Below is an example of a Multi-series Column 2D Chart.

{% embed_chart standard-charts-multi-series-charts-example-1.js %}

As you can see, a Multi-series Column 2D Chart has vertically aligned rectangular bars on one axis with discrete values shown on the other. The column’s length is proportionate to the value it represents.

The following table shows the data used to build the chart shown above.

| Quarter | Previous Year | Current Year |
| ------- | ------------- | ------------ |
| Q1      | 12000         | 24400        |
| Q2      | 10500         | 29800        |
| Q3      | 23500         | 20800        |
| Q4      | 16000         | 26000        |

In the example chart, we have plotted quarters with data values for the previous and the current years along the X-axis. To convert this to a data format that FusionCharts can use, you need the following two properties:

- `categories`
- `dataset`

The illustration below can shows how to assign values to these properties.

{% embed_chartAnatomy multiseries-data.json %}

As shown above, the chart compares the quarterly sales of a company for over two years. The data in the JSON format for the above chart looks as follows:

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

Now that the data is ready let us dive in directly to render the chart. The consolidated code is given below:

```javascript
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_fusioncharts/flutter_fusioncharts.dart';
import '../../constants.dart';


class MultiSeriesColumn2D extends StatefulWidget {
  const MultiSeriesColumn2D({super.key});


  @override
  State<MultiSeriesColumn2D> createState() => _MultiSeriesColumn2DState();
}


class _MultiSeriesColumn2DState extends State<MultiSeriesColumn2D> {
  late FusionCharts _fusionChart2D;
  FusionChartsController fusionChartsController = FusionChartsController();


  @override
  void initState() {
    super.initState();
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

> You can also create various charts belonging to the multi-series family in a similar way. We have over 15+ multi-series charts. You can find more about their types, components, configurations, etc. [here](/chart-guide/standard-charts/multi-series-charts).
