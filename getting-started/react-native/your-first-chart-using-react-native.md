---
title: Your First Chart in React Native using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the react-native-fusioncharts component.
heading: Create a Chart in React Native using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. The react-native-fusioncharts component allows you to easily add rich and interactive charts to any React Native project. In this page, we'll see how to install FusionCharts and render a chart using the react-native-fusioncharts component.

## Prerequisite

We are assuming that you are having a react-native project up and running. If not, follow the steps [here](https://facebook.github.io/react-native/docs/getting-started) to get started with your react-native project setup.

> Install react-native-webview if not present already.

## Installation and Including Dependencies

Install the react-native-fusioncharts and fusioncharts components via npm.

```shellscript
npm install react-native-fusioncharts fusioncharts --save
```

To setup the react-native-fusioncharts component, follow the steps given below:

That completes the installation of FusionCharts and the react-native-fusioncharts component.

## Preparing the Data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as data labels along x-axis and 'No. of oil reserves' as data values along y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in JSON format. So the above data in the tabular form will look as shown below.

```javascript
// Preparing the chart data
const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];
```

## Configure Your Chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

```javascript
// Create the datasource
    dataSource = {
    // Chart Configuration
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
      },
    // Chart Data - from step 2
    "data": chartData
    }
};
```

## Render the Chart

Finally, get ready to render your first chart using the `react-native-fusioncharts` component. Follow the steps mentioned below:

> The JavaScript code to create a chart in Android and iOS is the same.

Copy the following code to app.js file.

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
export default class PlainColumn2D extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "column2d",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Countries With Most Oil Reserves [2017-18]",
          subCaption: "In MMbbl = One Million barrels",
          xAxisName: "Country",
          yAxisName: "Reserves (MMbbl)",
          numberSuffix: "K",
          theme: "fusion"
        },
        data: [
          {
            label: "Venezuela",
            value: "290"
          },
          {
            label: "Saudi",
            value: "260"
          },
          {
            label: "Canada",
            value: "180"
          },
          {
            label: "Iran",
            value: "140"
          },
          {
            label: "Russia",
            value: "115"
          },
          {
            label: "UAE",
            value: "100"
          },
          {
            label: "US",
            value: "30"
          },
          {
            label: "China",
            value: "30"
          }
        ]
      }
    };
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
        <Text style={styles.header}>A Column 2D Chart</Text>

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

## See Your Chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

Add the following script in the application's `package.json` file to bundle your assets when you want to generate a signed APK.

    ANDROID

```javascript
"scripts": {
    ......
    "clean:build:android": "rm -rf android/app/build",
    "prod:android": "npm run clean:build:android  && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"
},
```

Run the following command before generating the signed APK:

```javascript
npm run prod:android
```

    IOS

```javascript
"scripts": {
    ......
    "build:assets": "fc-build-assets --fc-template ./assets/fusioncharts-tpl.html --fc-library ./assets/fusioncharts"
},
```

- The --fc-library ./assets/fusioncharts is required when you copy FusionCharts library files in your **assets** folder.

Note: fc-build-assets is a utility binary provided by react-native-fusioncharts to package the FusionCharts modules(.js files) referenced in template(.html file) as needed by the React Native iOS build process.

- Run the following command before running the application:

```shellscript
npm run build:assets
```

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click here to get in touch with our support team.

That's it! Your first chart using `react-native-fusioncharts` is ready.
