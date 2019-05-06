---
title: Create a Chart in React Native | FusionTime
description: This article outlines the steps to be executed for creating your first chart in React Native using FusionTime.
heading: Create a Chart in React Native
---

FusionTime is a JavaScript charting library that helps you visualize, and explore time-series data. In FusionTime, you get lots of out-of-the-box interactive features, such as time navigator, date range selectors, tooltips with crosslines, interactive legend and more. These features enhance the experience of exploring and understanding time-series data

We have built a simple `react-native-fusioncharts` component, which provides bindings for **FusionTime**. The `react-native-fusioncharts` component allows you to easily add interactive time-series charts to any **React Native** project.

In this page, we'll see how to install **FusionTime** and render an interactive time-series chart using the `react-native-fusioncharts` component.

## Installation

Since FusionTime is distributed along with FusionCharts Suite, download/install the FusionCharts package to get access to FusionTime and other chart types of the FusionCarts Suite. To install follow the steps below:

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
    &lt;script type='text/javascript' src="fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/fusioncharts.charts.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;

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

<div><strong>Step 1:</strong> To install fusioncharts and the `react-fusioncharts` component via npm follow the steps below:</div>
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
    &lt;script type='text/javascript' src="fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/fusioncharts.charts.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
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

## Create Your First Chart

Let's create a time-series chart using `react-native-fusioncharts` component showing **Online sales of a SuperStore**.

The  chart will look as shown below:

{% embed_ftChart integrations-react-native %}

The [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react-native/data.json) for the above chart is too big to be displayed here. The table below shows the sample data of the above chart:

| Time     | Sales   |
| -------- | ------- |
| 1/4/2011 | 16.448  |
| 1/5/2011 | 272.736 |
| 1/5/2011 | 11.784  |
| 1/5/2011 | 3.54    |
| 1/6/2011 | 19.536  |
| 1/7/2011 | 2573.82 |
| 1/7/2011 | 609.98  |

FusionTime accepts a [DataTable](/fusiontime/fusiontime-data-engine/overview#what-is-a-datatable-) as the data source. `DataTable`  is the tabular representation of data. To create the `DataTable`, you need to provide the following:

* `schema` - which defines the properties of the columns.  
* `data` - which contains the values of each row and column of the DataTable.

> For an instance of FusionTime, you can create `n` number of `DataTables`, but only one `DataStore`.

Now, let's learn how to prepare the schema and the data of the `DataTable`.

### Create the `schema`

The schema outlines each column represented in the above table. The schema contains an array which has multiple objects created in it. Each object represents a column of the above table.

> `name` and `type` are mandatory keys for each object. If the object type is `time` then `format` is also a mandatory key.

To define the schema, let's create a `schema.json` file and copy the following code:

> It is not mandatory to create the schema in a different `.json` file. You can also define the schema within the `.html` file.

```json
[{
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
}, {
    "name": "Sales",
    "type": "number"
}]
```

In the above code:

* `schema` is the variable in which the array is stored.
* Each object of a schema maps to a column of the tabular representation of the data.
* The JSON object has the following attributes:
  * name - Specify the name of the column of the tabular representation of data
  * type - Specify the type of the column.
  * format - Specify the input format of the date as per your data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](https://www.fusioncharts.com/dev/fusiontime/fusiontime-attributes).

Now that we have the schema ready, let's work on the data.

### Create `data`

Data can be provided either in JSON format or 2D array format. We will use the 2D array format.

[Data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react/data.json) for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

```json
var data = [
    [
        "1/4/2011",
        16.448
    ],
    [
        "1/5/2011",
        272.736
    ],
    [
        "1/5/2011",
        11.784
    ],
    [
        "1/5/2011",
        3.54
    ],
    [
        "1/6/2011",
        19.536
    ],
    [
        "1/7/2011",
        2573.82
    ],
]
```

Create a new `data.json` file, and copy the above code there. Next, copy the entire [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react/data.json) and replace it with the content of the data object in your 'data.json' file.

> It is not mandatory to create a `data.json` file. You can also do the same in your HTML file.

In the above code:

* `data` is the variable in which the data array is stored.
* Each object in the data array corresponds to a row in the tabular representation of the data.
* Each element in an object is represented by each object of the `schema`. The values in each object of the array represent the following:
  * Time according to the format
  * Total sales amount

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more, click [here](https://www.fusioncharts.com/dev/fusiontime/getting-started/change-default-aggregation).

Now, let's create the files to render the above chart.

### Render the chart

To render the chart, create a `app.js` file and copy the following code:

```javascript
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class PlainColumn2D extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeseriesDs: {
                type: 'timeseries',
                renderAt: 'container',
                width: '600',
                height: '400',
                dataSource: {
                    caption: { text: 'Online Sales of a SuperStore in the US' },
                    data: null,
                    yAxis: [{
                        plot: [{
                            value: 'Sales ($)'
                        }]
                    }]
                }
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

    componentDidMount() {
        this.fetchDataAndSchema();
    }

    fetchDataAndSchema() {
        const jsonify = res => res.json();
        const dFetch = fetch(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
        ).then(jsonify);
        // This is the remote url to fetch the schema.
        const sFetch = fetch(  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
        ).then(jsonify);
        Promise.all([dFetch, sFetch]).then(res => {
            const data = res[0];
            const schema = res[1];
            console.log(data);
            console.log(schema);
            this.setState({ dataJson: data, schemaJson: schema });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>FusionCharts Integration with React Native</Text>
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

In the above code:

1. Include **react**

2. Include `react-native-fusioncharts` component

3. Define the chart configuration in a JSON.
    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels). 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of the `dataSource`.

4. Specify the location of `fusioncharts.html` for **Android** and **iOS**.

5. Add `style` to the container of the chart.

> The `JavaScript` code to create a chart in **Android** and **iOS** is same.