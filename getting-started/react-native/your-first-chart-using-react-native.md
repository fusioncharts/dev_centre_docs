---
title: Your First Chart in React Native using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the react-native-fusioncharts component.
heading: Create a Chart in React Native using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. The react-native-fusioncharts component allows you to easily add rich and interactive charts to any React Native project. In this page, we'll see how to install FusionCharts and render a chart using the react-native-fusioncharts component.

## Prerequisite 

We are assuming that you are having a react-native project up and running. If not, follow the steps [here](https://facebook.github.io/react-native/docs/getting-started) to get started with your react-native project setup.<br/>

**IMPORTANT NOTE:** Install react-native-web if not present already.

## Create an application using FusionCharts – with Expo

Using FusionCharts with Expo you can create your application. First, make sure you have 'Node.js' and 'Git' installed in your environment. For more details you can check the official [Expo’s documentation](https://docs.expo.dev/get-started/installation/).

To get started, open the Command Prompt and run the following command to create a new application: 
```
expo init My-test-app
```
Return to the previously created application folder: 'cd My-test-app' 

### Installation and Including Dependencies

To complete the installation, including the dependencies, run the following code:
```javascript
npm i @unimodules/react-native-adapter
npm i react-native-fusioncharts --force
```

Now, in the root folder of the application, create the 'metro.config.js' file and include the following code: 
```javascript
const { getDefaultConfig } = require('@expo/metro-config');
module.exports = (async () => {
    const {
      resolver: { sourceExts, assetExts }
    } = await getDefaultConfig(__dirname)
    return {
      transformer: {
        defaultConfig: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false
          }
        })
      },
      resolver: {
        sourceExts,
        assetExts: [...assetExts, 'fcscript']
      }
    }
  })()
```
### Preparing the Data

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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along x-axis and 'No. of oil reserves' as **data values** along y-axis. Let us prepare the data for a single-series chart.

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
### Configure Your Chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

```javascript
// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
      subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
      xAxisName: "Country", //Set the x-axis name
      yAxisName: "Reserves (MMbbl)", //Set the y-axis name
      numberSuffix: "K",
      theme: "fusion" //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData
  }
};
```

> The 'type' attribute in the chartConfigs object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](/chart-guide/list-of-charts).
 
### Render the Chart

Finally, get ready to render your first chart using the `react-native-fusioncharts` component. In your "App.js" file replace your entire code with the code sample below, [Example](https://github.com/fusioncharts/react-native-fusioncharts#quick-start).

> The JavaScript code to create a chart in Android and iOS is the same.

```javascript
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Platform } from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

export default class App extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Chart Data
    const chartData = [
      { label: "Venezuela", value: "250" },
      { label: "Saudi", value: "260" },
      { label: "Canada", value: "180" },
      { label: "Iran", value: "140" },
      { label: "Russia", value: "115" },
      { label: "UAE", value: "100" },
      { label: "US", value: "30" },
      { label: "China", value: "30" },
    ];
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "column2D",
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
          theme: "fusion",
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

// skip this line if using Create React Native App
AppRegistry.registerComponent('ReactNativeFusionCharts', () => App);
```

To start the Expo application, run the following command: 
```expo start```
Expo should create a QR-code in your Command Prompt window.

Next, open the Expo Go application on your device (this installation is needed in order to run your FusionCharts app on your device) and ensure your device is on the same Wi-Fi network as the machine where you are executing the Expo commands.

Use the Expo Go scanner to scan the QR-code in your Command Prompt window. The application will start running on your device and display the charts accordingly. You can make changes to your code while running the application on your device, it will automatically reload after you save the changes.

### See Your Chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `react-native-fusioncharts` is ready.

Visit the [React-Native Features](/getting-started/react-native/react-native-features) page to learn more about working with events, methods and more. 

## Create an application using FusionCharts – with React-Native CLI

For users who want to learn how to create an application using React-Native CLI, first make sure you have the latest versions of Node and JDK installed in your environment. The dependencies for Android and iOS emulators should also be setup properly. Check the official [React Native documentation](https://reactnative.dev/docs/environment-setup) for more details.

First, open the Command Prompt and run the following command to install the React Native CLI: 
```npm install -g react-native-cli```

Next, to create the new application, run the following command in Command Prompt: 
```react-native init My-test-app```

To acces you app, run the command: 
```cd My-test-app```

A new application named ‘My-test-app’ is created. 
Update it's code to include charts that you need to get displayed or Check [our instructions](https://www.fusioncharts.com/dev/fusiontime/getting-started/create-your-first-chart-in-fusiontime) for more details.

Finally, to run your application on a connected Android device or an emulator, execute the following command: 
```npx react-native run-android``` 

Or, to run it on an iOS device or simulator, execute the following command: 
```npx react-native run-iOS```


### Run the Expo Application 
You can also use React-Native CLI to run applications created with Expo. This is how you do it:

Open the Command Prompt and run the following command: 
```npm install -g react-native-cli```

Next, to create the new application, run the following command in Command Prompt: 
```react-native init My-test-app```

To acces you app, run the command: 
```cd My-test-app```

You have finished updating the code and accessed your application’s folder. 
Now run the following command: 
```expo eject```

The Expo application will create an /Android and a /IOs folders in your application; allowing you to run it using 'React-Native CLI'.

Make sure you have configured your environment dependencies for Android and iOS emulators. For more information, check the official [React Native documentation](https://reactnative.dev/docs/environment-setup).

Finally, to run your application on Android, run the command: 
```npx react-native run-android``` 

Or, to run your application on iOS, us the command:
```npx react-native run-iOS```

After installing `react-native-fusioncharts`, follow the steps below:

It is required to add the .fcscript into the asset extensions section of the 'metro.config.js' file, or create that file within your project, and configure it as shown below:

```javascript
const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
      resolver: { sourceExts, assetExts }
  } = await getDefaultConfig()
  return {
      transformer: {
          getTransformOptions: async () => ({
              transform: {
                  experimentalImportSupport: false,
                  inlineRequires: false
              }
          })
      },
      resolver: {
        sourceExts,
        assetExts: [...assetExts, 'fcscript']
      }
    }
})()
```

Visit the [React-Native Features](/getting-started/react-native/react-native-features) page to learn more about working with events, methods and more. 
