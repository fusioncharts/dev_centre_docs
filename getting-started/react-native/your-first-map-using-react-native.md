---
title: Your First Gauge in React Native using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the react-native-fusioncharts component.
heading: Create a Gauge in React Native using FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **React Native** component which provides bindings for **FusionCharts**. The `react-native-fusioncharts` component allows you to easily add rich and interactive charts to any **React Native** project. 

In this page, we'll see how to install FusionCharts and render a gauge using the `react-native-fusionCharts` component.

## Installation

Install **FusionCharts** and the `react-native-fusioncharts` component using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='android'>Android</a></li>
    <li><a data-toggle='ios'>iOS</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab android-tab active'>

<div><strong>Step 1:</strong> To install fusioncharts and the `react-fusioncharts` component via npm follow the steps below:</div>
<div>1. Install the `react-native-fusioncharts` module</div>
<pre><code class="custom-hlc language-javascript">
    $ npm install react-native-fusioncharts --save
</code></pre>
<div>2. Install the `fusioncharts` JS files</div>
<pre><code class="custom-hlc language-javascript">
    $ npm install fusioncharts --save
</code></pre>
<div><strong>Step 2:</strong> To setup the `react-native-fusioncharts` component for <strong>Android</strong>, follow the steps given below:</div>
<div>
    <ul>
        <li>Create a folder named `assets` under `android/app/src/main` directory if it doesn't exist.</li>
        <li>Copy `FusionCharts` library files (node_modules/fusioncharts folder) in the `assets` folder.</li>
        <li>Create a `fusioncharts.html` file in `assets` folder. Include the FusionCharts library files in `fusioncharts.html` file using &lt;script&gt; tag.</li>
        <pre><code class="custom-hlc language-javascript">
&lt;head&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts/fusioncharts.widgets.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
        </code></pre>
        <div>To include the specific chart types, individually add the following files using <strong>&lt;script&gt;</strong> tag:</div>
        <li>Set `libraryPath` property to the FusionCharts component.</li>
        <pre><code class="custom-hlc language-javascript">
&lt;FusionCharts 
......
libraryPath={{ uri: 'file:///android_asset/fusioncharts.html' }}/&gt;
        </code></pre>
        <li>Add the following script in Application's `package.json` file to bundle your assets when you want to genarate a signed APK.</li>
        <pre><code class="custom-hlc language-javascript">
"scripts": {
    ......
    "clean:build:android": "rm -rf android/app/build",
    "prod:android": "npm run clean:build:android  && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"
},
        </code></pre>
        <li>Run the following command before genarating the signed APK:</li>
        <pre><code class="custom-hlc language-javascript">
$ npm run prod:android
        </code></pre>
    </ul>
</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab ios-tab'>

<div><strong>Step 1:</strong> To install fusioncharts and the `react-native-fusioncharts` component via npm follow the steps below:</div>
<div>1. Install the `react-native-fusioncharts` module</div>
<pre><code class="custom-hlc language-javascript">
    $ npm install react-native-fusioncharts --save
</code></pre>
<div>2. Install the `fusioncharts` JS files</div>
<pre><code class="custom-hlc language-javascript">
    $ npm install fusioncharts --save
</code></pre>
<div><strong>Step 2:</strong> To setup the `react-native-fusioncharts` component for <strong>iOS</strong>, follow the steps given below:</div>

<div>
    <ul>
        <li>Create a folder named `assets` in your project `root` if it doesn't exist.</li>
        <li>Copy `FusionCharts` library files in the `assets` folder.</li>
        <li>Create a `fusioncharts-tpl.html` file in `assets` folder. Include the FusionCharts library files in `fusioncharts.html` file using &lt;script&gt; tag.</li>
        <pre><code class="custom-hlc language-javascript">
&lt;head&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
        </code></pre>
        <li>Add a `build"assets` script in Application's `package.json` file</li>
        <pre><code class="custom-hlc language-javascript">
"scripts": {
    ......
    "build:assets": "fc-build-assets --fc-template ./assets/fusioncharts-tpl.html --fc-library ./assets/fusioncharts"
},
        </code></pre>
        <li>The `--fc-library ./assets/fusioncharts` is required when you copy FusionCharts library files in your `assets` folder.<br/>
        <strong>Note:</strong> `fc-build-assets` is a utility binary provided by `react-native-fusioncharts` to package the FusionCharts modules(.js files) referenced in template(.html file) as needed by the React Native iOS build process.</li>
        <li>Run the following command before running the application:</li>
        <pre><code class="custom-hlc language-javascript">
$ npm run build:assets
        </code></pre>
    </ul>
</div>

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

That completes the installation of FusionCharts and the `react-native-fusioncharts` component.

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstorm's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample have been defined using the following range:

Range|Color|Hex Code|
-|-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. In this example, we will use the JSON format, as shown below:

```json
{
    // Chart Configuration
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0"
    },
    // Chart Data
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "50",
            "code": "#F2726F"
        }, {
            "minValue": "50",
            "maxValue": "75",
            "code": "#FFC533"
        }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#62B58F"
        }]
    },
    "dials": {
        "dial": [{
            "value": "81"
        }]
    }
}
```

In the above JSON: 

* Create the `chart` object to define the elements of the gauge.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

* Specify the hex code of the color within the `color` array.

* Create the `dials` object to represent the customer satisfaction score.

* Create the `dial` object under `dials` object to set the value of the dial in an array.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have converted the tabular data to JSON format, let's learn how to render the gauge.

## Render the chart

To render the chart, follow the steps below:

1. Include **react**

2. Include `react-native-fusioncharts` component

3. Store the chart configurations in `this.state`. In this:
    * Set the gauge type as `angulargauge`.  Each chart type is represented with a unique chart alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of gauge types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts#fusionwidgets-xt-8).
    * Set the width and height (in pixels). 
    * Set the `dataFormat` as **json**.
    * Embed the json data as the value of the `dataSource`.

4. Specify the location of `fusioncharts.html` for **Android** and **iOS**.

> The `JavaScript` code to create a chart in **Android** and **iOS** is same.

Copy the following code to `app.js` file.

```
// Including react
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

// Including the react-native-fusioncharts component
import FusionCharts from "react-native-fusioncharts";

export default class DrillDown extends Component {
    constructor(props) {
        super(props);
        this.apiCaller = null;

        this.state = {
            type: "angulargauge", // The chart type
            width: "450", // Width of the chart
            height: "250", // Height of the chart
            dataFormat: "json", // Data type
            dataSource: {
                "chart": {
                    "caption": "Nordstorm's Customer Satisfaction Score for 2017",
                    "lowerLimit": "0",
                    "upperLimit": "100",
                    "showValue": "1",
                    "numberSuffix": "%",
                    "theme": "fusion",
                    "showToolTip": "0"
                },
                "colorRange": {
                    "color": [{
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#F2726F"
                    }, {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#FFC533"
                    }, {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#62B58F"
                    }]
                },
                "dials": {
                    "dial": [{
                        "value": "81"
                    }]
                }
            };
            this.libraryPath = Platform.select({
                // Specify fusioncharts.html file location
                android: { uri: "file:///android_asset/fusioncharts.html" },
                ios: require("../assets/fusioncharts.html")
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
}
```

That's it! Your first gauge using `react-native-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.