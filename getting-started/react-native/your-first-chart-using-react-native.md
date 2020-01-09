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

`npm install react-native-fusioncharts fusioncharts --save`

To setup the react-native-fusioncharts component, follow the steps given below:

    ANDROID

- Create a folder named assets under android/app/src/main directory if it doesn't exist.

- Copy FusionCharts library files from node_modules/fusioncharts folder to the newly created assets folder.

      	<<<Image>>>

- To avoid file duplications, remove package.json file from assets/fusioncharts/package.json

- Create a fusioncharts.html file in assets folder and include the following code

```

<!DOCTYPE html>

<html>

<head>

<title>FusionCharts</title>

<meta http-equiv="content-type" content="text/html; charset=utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

    <style type="text/css">

        body,

        html {

            margin: 0;

            padding: 0;

            overflow: hidden;

            font-size: 13px;

        }

        #chart-container {

            width: 100%;

            height: 100%;

            top: 0;

            left: 0;

            right: 0;

            bottom: 0;

            position: absolute;

            user-select: none;

            -webkit-user-select: none;

            overflow: hidden;

        }

        #loading-text {

            position: absolute;

            top: 50%;

            left: 50%;

            transform: translate(-50%, -50%);

            -webkit-transform: translate(-50%, -50%);

            user-select: none;

            -webkit-user-select: none;

        }

    </style>

</head>

<body>

<div id="chart-container">

<div id="loading-text">

Chart is loading...

</div>

</div>

    <script type='text/javascript'>

        "use strict";

        (function() {

            var a = Promise.resolve(),

                b = {},

                c = {};

            (function d() {

                var f = function() {

                    function g() {

                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)

                    }

                    return g() + g() + "-" + g() + "-" + g() + "-" + g() + "-" + g() + g() + g()

                };

                window.webViewBridge = {

                    send: function send(g, h, i, j) {

                        i = i || function() {}, j = j || function() {};

                        var k = {

                                targetFunc: g,

                                data: h || {},

                                msgId: f()

                            },

                            l = JSON.stringify(k);

                        a = a.then(function() {

                            return new Promise(function(m, n) {

                                b[k.msgId] = {

                                    resolve: m,

                                    reject: n

                                }, c[k.msgId] = {

                                    onsuccess: i,

                                    onerror: j

                                }, window.postMessage(l)

                            })

                        }).catch(function() {})

                    }

                }, window.document.addEventListener("message", function(g) {

                    var h;

                    try {

                        h = JSON.parse(g.data)

                    } catch (i) {

                        return

                    }

                    b[h.msgId] && (b[h.msgId].resolve(), delete b[h.msgId]), h.args && c[h.msgId] && (h.isSuccessfull ? c[h.msgId].onsuccess.apply(null, h.args) : c[h.msgId].onerror.apply(null, h.args), delete c[h.msgId])

                })

            })()

        })();

    </script>

    <!-- Include the required FusionCharts modules -->

    <script type='text/javascript' src="fusioncharts/fusioncharts.js"></script>

    <script type='text/javascript' src="fusioncharts/fusioncharts.charts.js"></script>

    <script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.fusion.js"></script>

</body>

</html>

```

    iOS

- Create a folder named **assets** in your project root if it doesn't exist.

- Copy FusionCharts library files from node_modules/fusioncharts folder to the newly created **assets** folder.

      	<<<Image>>>

- Create a fusioncharts-tpl.html file in the **assets** folder. Include the FusionCharts library files in fusioncharts.html as shown below.

```

<!DOCTYPE html>

<html>

<head>

<!-- Include the required FusionCharts modules -->

<script type='text/javascript' src="fusioncharts/fusioncharts.js"></script>

<script type='text/javascript' src="fusioncharts/fusioncharts.charts.js"></script>

<script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.fusion.js"></script>

</head>

<body></body>

</html>

```

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

```

// Preparing the chart data

  const chartData = [

    {

      "label": "Venezuela",

      "value": "290"

    },

    {

      "label": "Saudi",

      "value": "260"

    },

    {

     "label": "Canada",

      "value": "180"

    },

    {

      "label": "Iran",

      "value": "140"

    },

    {

      "label": "Russia",

      "value": "115"

    },

    {

      "label": "UAE",

      "value": "100"

    },

    {

      "label": "US",

      "value": "30"

    },

    {

      "label": "China",

      "value": "30"

    }

  ]

```

## Configure Your Chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

```

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

> > The JavaScript code to create a chart in Android and iOS is the same.

Copy the following code to app.js file.

```

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

<<<<<sample chart>>>>>

Add the following script in the application's `package.json` file to bundle your assets when you want to generate a signed APK.

    ANDROID

```

"scripts": {

    ......

    "clean:build:android": "rm -rf android/app/build",

    "prod:android": "npm run clean:build:android  && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"

},

```

Run the following command before generating the signed APK:

```

npm run prod:android

```

    IOS

```

"scripts": {

    ......

    "build:assets": "fc-build-assets --fc-template ./assets/fusioncharts-tpl.html --fc-library ./assets/fusioncharts"

},

```

- The --fc-library ./assets/fusioncharts is required when you copy FusionCharts library files in your **assets** folder.

Note: fc-build-assets is a utility binary provided by react-native-fusioncharts to package the FusionCharts modules(.js files) referenced in template(.html file) as needed by the React Native iOS build process.

- Run the following command before running the application:

```

npm run build:assets

```

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click here to get in touch with our support team.

That's it! Your first chart using `react-native-fusioncharts` is ready.
