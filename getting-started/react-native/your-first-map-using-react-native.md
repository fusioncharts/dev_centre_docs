---
title: Your First Gauge in React Native using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first map using the react-native-fusioncharts component.
heading: Create a Gauge in React Native using FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **React Native** component which provides bindings for **FusionCharts**. The `react-native-fusioncharts` component allows you to easily add rich and interactive charts to any **React Native** project.

In this page, we'll see how to install FusionCharts and render a map using the `react-native-fusioncharts` component.

## Installation

Install **FusionCharts** and the `react-native-fusioncharts` component using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='android'>Android</a></li>
    <li><a data-toggle='ios'>iOS</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab android-tab active'>

<div><strong>Step 1:</strong> To install fusioncharts and the `react-native-fusioncharts` component via npm follow the steps below:</div>
<div>1. Install the `react-native-fusioncharts` module</div>
<pre><code class="language-javascript">
    $ npm install react-native-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div>2. Install the `fusioncharts` JS files</div>
<pre><code class="language-javascript">
    $ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>Step 2:</strong> To setup the `react-native-fusioncharts` component for <strong>Android</strong>, follow the steps given below:</div>
<div>
    <ul>
        <li>Create a folder named `assets` under `android/app/src/main` directory if it doesn't exist.</li>
        <li>Copy `FusionCharts` library files (node_modules/fusioncharts folder) in the `assets` folder.</li>
        <li>Create a `fusioncharts.html` file in `assets` folder. Include the FusionCharts library files in `fusioncharts.html` file using &lt;script&gt; tag.</li>
        <pre><code class="language-javascript">
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
&lt;title&gt;FusionCharts&lt;/title&gt;
&lt;meta http-equiv="content-type" content="text/html; charset=utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" /&gt;

    &lt;style type="text/css"&gt;
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
    &lt;/style&gt;

&lt;/head&gt;

&lt;body&gt;
&lt;div id="chart-container"&gt;
&lt;div id="loading-text"&gt;
Chart is loading...
&lt;/div&gt;
&lt;/div&gt;

    &lt;script type='text/javascript'&gt;
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
    &lt;/script&gt;

    &lt;!-- Include the required FusionCharts modules --&gt;
    &lt;script type="text/javascript" src="fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts/latest/fusioncharts.world.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
        <li>Set `libraryPath` property to the FusionCharts component.</li>
        <pre><code class="language-javascript">
&lt;FusionCharts 
......
libraryPath={{ uri: 'file:///android_asset/fusioncharts.html' }}/&gt;
        </code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
        <li>Add the following script in Application's `package.json` file to bundle your assets when you want to generate a signed APK.</li>
        <pre><code class="language-javascript">
"scripts": {
    ......
    "clean:build:android": "rm -rf android/app/build",
    "prod:android": "npm run clean:build:android  && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"
},
        </code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
        <li>Run the following command before genarating the signed APK:</li>
        <pre><code class="language-javascript">
$ npm run prod:android
        </code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
    </ul>
</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

<div class='tab ios-tab'>

<div><strong>Step 1:</strong> To install fusioncharts and the `react-native-fusioncharts` component via npm follow the steps below:</div>
<div>1. Install the `react-native-fusioncharts` module</div>
<pre><code class="language-javascript">
    $ npm install react-native-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div>2. Install the `fusioncharts` JS files</div>
<pre><code class="language-javascript">
    $ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>Step 2:</strong> To setup the `react-native-fusioncharts` component for <strong>iOS</strong>, follow the steps given below:</div>

<div>
    <ul>
        <li>Create a folder named `assets` in your project `root` if it doesn't exist.</li>
        <li>Copy `FusionCharts` library files in the `assets` folder.</li>
        <li>Create a `fusioncharts-tpl.html` file in `assets` folder. Include the FusionCharts library files in `fusioncharts.html` file using &lt;script&gt; tag.</li>
        <pre><code class="language-javascript">
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
&lt;!-- Include the required FusionCharts modules --&gt;
&lt;script type="text/javascript" src="fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="path/to/local/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script&gt;  
 &lt;script type="text/javascript" src="path/to/local/fusioncharts/latest/fusioncharts.world.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
        <li>Add a `build"assets` script in Application's `package.json` file</li>
        <pre><code class="language-javascript">
"scripts": {
    ......
    "build:assets": "fc-build-assets --fc-template ./assets/fusioncharts-tpl.html --fc-library ./assets/fusioncharts"
},
        </code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
        <li>The `--fc-library ./assets/fusioncharts` is required when you copy FusionCharts library files in your `assets` folder.<br/>
        <strong>Note:</strong> `fc-build-assets` is a utility binary provided by `react-native-fusioncharts` to package the FusionCharts modules(.js files) referenced in template(.html file) as needed by the React Native iOS build process.</li>
        <li>Run the following command before running the application:</li>
        <pre><code class="language-javascript">
$ npm run build:assets
        </code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
    </ul>
</div>

<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</div>

</div>
</div>

That completes the installation of FusionCharts and the `react-native-fusioncharts` component.

## Create your First map

In this section, we will create a visualization using the **World Map** showing the average annual population growth.

{% embed_chart getting-started-your-first-map.js %}

## Map data

The data for the above map is represented in the table below:

| State         | Entity Name | Value |
| ------------- | ----------- | ----- |
| North America | NA          | 82    |
| South America | SA          | 2.04  |
| Asia          | AS          | 1.78  |
| Europe        | EU          | 40    |
| Africa        | AF          | 2.58  |
| Australia     | AU          | 1.30  |

In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column.

FusionCharts accepts data in **JSON** format in which the above entities are denoted by the `id` key in the `data` object.

For any map visualization, it is important to provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF` and not `AFR`.

We have a detailed [Map Specification Sheets](https://www.fusioncharts.com/dev/maps/spec-sheets/world) for all the maps that can be rendered using FusionCharts, where you can find the correct `id` of the maps you want to create.

Following code is the JSON representation of the above table with the required attributes to render the above map.

```JSON
{
    // Map Configuration
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
    "colorrange": {
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
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
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
    }]
}
```

In the above JSON data:

- Create the `chart` object to define the elements of the map.

- Create the `colorRange` array to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

- Create the `data` array to define the id of the continents and their corresponding values along with configurations. For example, the first object under `data` array contains the `id` and `value` of **North America** as **NA** and **.82** respectively.

The chart object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the map.

Now that you have the data in JSON format, let's learn how to render the map.

## Render the map

To render the map follow the steps below:

1. Include **react**

2. Include `react-native-fusioncharts` component

3. Include the `ExcelExport` module to export chart data in XLSX format.

4. Define the chart configuration in a JSON.

   - Set the map as `world`. For World map, the alias is `world`. Find the complete list of map with their respective alias [here](https://www.fusioncharts.com/dev/map-guide/list-of-maps).
   - Set the width and height (in pixels).
   - Set the `dataFormat` as **json**.
   - Embed the json data as the value of the `dataSource`.

5. Specify the location of `fusioncharts.html` for **Android** and **iOS**.

6. Add `style` to the container of the chart.

> The `JavaScript` code to create a chart in **Android** and **iOS** is same.

Copy the following code to `app.js` file.

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
import ExcelExport from "fusioncharts/features/excelexport";

export default class DrillDown extends Component {
  constructor(props) {
    super(props);
    this.apiCaller = null;
    this.state = {
      type: "world",
      width: "800",
      height: "550",
      dataFormat: "json",
      dataSource: {
        // Map Configuration
        chart: {
          caption: "Average Annual Population Growth",
          subcaption: " 1955-2015",
          numbersuffix: "%",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          entityFillHoverColor: "#FFF9C4",
          theme: "fusion"
        },
        // Aesthetics; ranges synced with the slider
        colorrange: {
          minvalue: "0",
          code: "#FFE0B2",
          gradient: "1",
          color: [
            {
              minvalue: "0.5",
              maxvalue: "1.0",
              color: "#FFD74D"
            },
            {
              minvalue: "1.0",
              maxvalue: "2.0",
              color: "#FB8C00"
            },
            {
              minvalue: "2.0",
              maxvalue: "3.0",
              color: "#E65100"
            }
          ]
        },
        // Source data as JSON --> id represents countries of world.
        data: [
          {
            id: "NA",
            value: ".82",
            showLabel: "1"
          },
          {
            id: "SA",
            value: "2.04",
            showLabel: "1"
          },
          {
            id: "AS",
            value: "1.78",
            showLabel: "1"
          },
          {
            id: "EU",
            value: ".40",
            showLabel: "1"
          },
          {
            id: "AF",
            value: "2.58",
            showLabel: "1"
          },
          {
            id: "AU",
            value: "1.30",
            showLabel: "1"
          }
        ]
      }
    };
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: { uri: "file:///android_asset/fusioncharts.html" },
      ios: require("./assets/fusioncharts.html")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Simple Gauge</Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath}
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

That's it! Your first map using `react-native-fusioncharts` is ready.

## Render other maps

To reduce the size of the package FusionCharts comes with only two maps, i.e., the **World** map and the **USA** map. However, FusionCharts provide 1600+ maps for you to explore. [Download](https://www.fusioncharts.com/download/map-definition-files) the map files separately if you want to save them locally.

Let's create a map of California to show the "Web visits for a particular month" as shown below:

{% embed_chart getting-started-your-first-map-california.js %}

To render the above map, first install `fusionmaps` package which contains all the map definition files as shown below:

```bash
$ npm install fusionmaps
```

After installing `fusionmaps` package, the code to render the map of **California** is:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
import ExcelExport from "fusioncharts/features/excelexport";

export default class DrillDown extends Component {
  constructor(props) {
    super(props);
    this.apiCaller = null;
    this.state = {
      type: "maps/california",
      width: "800",
      height: "550",
      dataFormat: "json",
      dataSource: {
        chart: {
          animation: "0",
          showbevel: "0",
          usehovercolor: "1",
          showlegend: "1",
          legendposition: "BOTTOM",
          legendborderalpha: "0",
          legendbordercolor: "ffffff",
          legendallowdrag: "0",
          legendshadow: "0",
          caption: "Website Visits for the month of March 2018",
          connectorcolor: "000000",
          fillalpha: "80",
          hovercolor: "CCCCCC",
          theme: "fusion"
        },
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "e44a00",
          gradient: "1",
          color: [
            { maxvalue: "2500", code: "f8bd19" },
            { maxvalue: "5000", code: "6baa01" }
          ]
        },
        data: [
          { id: "001", value: 2834 },
          { id: "003", value: 3182 },
          { id: "005", value: 3280 },
          { id: "007", value: 911 },
          { id: "009", value: 292 },
          { id: "011", value: 530 },
          { id: "013", value: 2515 },
          { id: "015", value: 728 },
          { id: "017", value: 1974 },
          { id: "019", value: 848 },
          { id: "021", value: 3278 },
          { id: "023", value: 4463 },
          { id: "025", value: 1198 },
          { id: "027", value: 378 },
          { id: "029", value: 2610 },
          { id: "031", value: 1200 },
          { id: "033", value: 3820 },
          { id: "035", value: 940 },
          { id: "037", value: 3416 },
          { id: "039", value: 4004 },
          { id: "041", value: 1604 },
          { id: "043", value: 4011 },
          { id: "045", value: 3203 },
          { id: "047", value: 3775 },
          { id: "049", value: 2721 },
          { id: "051", value: 3417 },
          { id: "053", value: 1530 },
          { id: "055", value: 412 },
          { id: "057", value: 3434 },
          { id: "059", value: 1670 },
          { id: "061", value: 1274 },
          { id: "063", value: 4339 },
          { id: "065", value: 2073 },
          { id: "067", value: 1018 },
          { id: "069", value: 3967 },
          { id: "071", value: 3401 },
          { id: "073", value: 3307 },
          { id: "075", value: 1938 },
          { id: "077", value: 489 },
          { id: "079", value: 3207 },
          { id: "081", value: 2295 },
          { id: "083", value: 2747 },
          { id: "085", value: 1114 },
          { id: "087", value: 3400 },
          { id: "089", value: 784 },
          { id: "091", value: 1673 },
          { id: "093", value: 4274 },
          { id: "095", value: 4509 },
          { id: "097", value: 3862 },
          { id: "099", value: 1356 },
          { id: "101", value: 4126 },
          { id: "103", value: 1314 },
          { id: "105", value: 1807 },
          { id: "107", value: 4026 },
          { id: "109", value: 3456 },
          { id: "111", value: 1393 },
          { id: "113", value: 1500 },
          { id: "115", value: 2218 }
        ]
      }
    };
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: { uri: "file:///android_asset/fusioncharts.html" },
      ios: require("./assets/fusioncharts.html")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Simple Gauge</Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath}
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
