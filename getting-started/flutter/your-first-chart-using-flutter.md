---
title: Your First Chart in Flutter using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the flutter-fusioncharts component.
heading: Create a Chart in Flutter using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps, and dashboards in JavaScript. The 'flutter-fusioncharts' component allows you to easily add rich and interactive charts to any Flutter project. On this page, we'll see how to install FusionCharts and render a chart using the 'flutter-fusioncharts' component.

## Prerequisite 

We assume you have a 'flutter project' up and running. 
If not, follow the steps [here](https://docs.flutter.dev/) to get started with your Flutter project setup.<br/>

**IMPORTANT NOTE:** Install Flutter if not present already.

## Create an application using FusionCharts 
Using FusionCharts, you can create your application. For starters, ensure you have ‘Node.js’ and ‘Git’ installed in your environment. 

To create a new application:

First, open the Command Prompt window and create an instance of the FusionCharts widget:

```javascript
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_fusioncharts/flutter_fusioncharts.dart';
import '../../constants.dart';


class ColumnChart extends StatefulWidget {
  const ColumnChart({super.key});


  @override
  State<ColumnChart> createState() => _ColumnChartState();
}


class _ColumnChartState extends State<ColumnChart> {
  late FusionCharts _fusionChart2D;
  FusionChartsController fusionChartsController = FusionChartsController();


  @override
  void initState() {
    super.initState();


    Map<String, dynamic> chart = {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "logoURL":
          "https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
      "logoAlpha": "100",
      "logoScale": "110",
      "logoPosition": "TL",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "exportenabled": "1",
      "numberSuffix": "K",
      "theme": "carbon",
      "baseFontSize": "35px",
      "captionFontSize": "35px",
      "subCaptionFontSize": "30px"
    };


    List<dynamic> chartData = [
      {"label": "Venezuela", "value": "290"},
      {"label": "Saudi", "value": "260"},
      {"label": "Canada", "value": "180"},
      {"label": "Iran", "value": "140"},
      {"label": "Russia", "value": "115"},
      {"label": "UAE", "value": "100"},
      {"label": "US", "value": "30"},
      {"label": "China", "value": "30"}
    ];


    Map<String, dynamic> dataSource = {"chart": chart, "data": chartData};


    _fusionChart2D = FusionCharts(
      dataSource: dataSource,
      type: "column2d",
      width: "100%",
      height: "100%",
      events: const ['chartClick'],
      fusionChartEvent: callBackFromPlugin,
      fusionChartsController: fusionChartsController,
      licenseKey: licenseKey,
      isLocal: false,
    );
  }


  void callBackFromPlugin(senderId, eventType) {
    if (kDebugMode) {
      print('Event Back to consumer: $senderId , $eventType');
    }
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            icon: const Icon(Icons.arrow_back),
            onPressed: () => Navigator.of(context).pop()),
        title: const Text('Fusion Charts - Column'),
      ),
      body: SizedBox(
          height: MediaQuery.of(context).size.height / 2,
          child: _fusionChart2D),
    );
  }
}

```

### Installation and Including Dependencies
Add the following dependency
```javascript
dependencies:
	flutter_fusioncharts: ^1.0.0
```

Now in your Dart code, import the following plugin file:
```javascript
Import ‘package:flutter_fusioncharts/flutter_fusioncharts.dart’;
```

Next, run the command below to download the FusionCharts core library
```javascript
wget -O fc_script.dill https://cdn.fusioncharts.com/downloads/fc-versions-flutter/fc_script.dill; dart run fc_script.dill; rm fc_script.dill
```
Check the [Read Me](https://github.com/fusioncharts/flutter-fusioncharts) file for detailed instructions on manually installing the plugin configurations for Android or iOS.

### Preparing the Data

Let's create a chart showing the "Countries With Most Oil Reserves". The oil reserves data present in various countries is shown in tabular form below.

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along the x-axis and 'No. of oil reserves' as **data values** along the y-axis. Then, let us prepare the data for a single-series chart.

FusionCharts accepts the data in JSON format. So the above data in the tabular form will look as shown below:

```javascript
/// Preparing the chart data
List<dynamic> chartData = [
      {"label": "Venezuela", "value": "290"},
      {"label": "Saudi", "value": "260"},
      {"label": "Canada", "value": "180"},
      {"label": "Iran", "value": "140"},
      {"label": "Russia", "value": "115"},
      {"label": "UAE", "value": "100"},
      {"label": "US", "value": "30"},
      {"label": "China", "value": "30"}
    ];
```
### Configure Your Chart

Now that the data is ready, let's work on the styling, positioning, and giving your chart context.

```javascript
/// Create a JSON object to store the chart configurations
Map<String, dynamic> chart = {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "logoURL":
      "https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
      "logoAlpha": "100",
      "logoScale": "110",
      "logoPosition": "TL",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "carbon",
      "baseFontSize": "35px",
      "captionFontSize": "35px",
      "subCaptionFontSize": "30px"
    };
    /// Chart Data - from step 2
    data: chartData
  }
};
```

> The 'type' attribute in the chartConfigs object specifies the type of chart being rendered. You can look at different chart types with their aliases [here](/chart-guide/list-of-charts).
 
### Render the Chart

Finally, prepare to render your first chart using the `flutter-fusioncharts` component. In your "App.js" file, replace your entire code with the code sample below, [Example](https://github.com/fusioncharts/flutter-fusioncharts#quick-start).

> The JavaScript code to create a chart in Android and iOS is the same.

```javascript
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Platform } from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

export default class App extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Chart Data
List<dynamic> chartData = [
      {"label": "Venezuela", "value": "290"},
      {"label": "Saudi", "value": "260"},
      {"label": "Canada", "value": "180"},
      {"label": "Iran", "value": "140"},
      {"label": "Russia", "value": "115"},
      {"label": "UAE", "value": "100"},
      {"label": "US", "value": "30"},
      {"label": "China", "value": "30"}
    ];
    //STEP 3 - Chart Configurations
 Map<String, dynamic> chart = {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "logoURL":
      "https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
      "logoAlpha": "100",
      "logoScale": "110",
      "logoPosition": "TL",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "carbon",
      "baseFontSize": "35px",
      "captionFontSize": "35px",
      "subCaptionFontSize": "30px"
         exportEnabled: 1 // to enable the export chart functionality
        },
        data: chartData
      }
    };

    this.state = {
      chartConfig
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          FusionCharts Integration with React Native
        </Text>
        <View style={styles.chartContainer}>
          <ReactNativeFusionCharts
            chartConfig={this.state.chartConfig}
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
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  chartContainer: {
    height: 200
  }
});

// skip this line if using Create Flutter App
AppRegistry.registerComponent('FlutterFusionCharts', () => App);
```

## See Your Chart below

The chart should look as shown below.

{% chartHere %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you cannot solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `flutter-fusioncharts` is ready.

Visit the [Flutter Features](/getting-started/flutter/flutter-features) page to learn more about working with events, methods, and more. 


