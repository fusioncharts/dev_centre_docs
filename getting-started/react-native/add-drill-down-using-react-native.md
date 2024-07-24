---
title: Adding Drill Down using React Native | FusionCharts
description: Explore how to Adding Drill Down in React Native effortlessly with FusionCharts, optimizing your data visualization for mobile applications seamlessly.
heading: Adding Drill Down using React Native
---

With FusionCharts, you can create unlimited levels of drill-down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill-down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up or it can open in a new window or frame.

### Features of the FusionCharts JavaScript Class

* Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

* Clones all chart configuration settings from the parent chart to create the descendant charts

* Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink) function.

* Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

* Supports drill-down to an unlimited number of levels

## Create drill-down charts

As an example, we will consider a simple scenario of a parent chart with a single level of drill-down.

The parent chart is a column 2D chart showing yearly sales of the top three juice flavors, over the last one year. When you click on the data plot for a particular flavor, it drills down to show a pie 2D chart showing the quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chartData add-drill-down-using-react-example-1.js json %}

The full code of the above sample is given below:

```
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class DrillDown extends Component {
    constructor(props) {
        super(props);
        this.apiCaller = null;
        this.state = {
            type: 'column2d',
            width: '700',
            height: '400',
            dataFormat: 'json',
            dataSource: {
            type: 'column2d',
            width: '100%',
            height: '100%',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Sales of top 3 juice flavors last year",
                    "subcaption": "Click on a column to see details",
                    "xaxisname": "Flavor",
                    "yaxisname": "Amount (In USD)",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "rotateValues": "0"
                },
                "data": [{
                    "label": "Apple",
                    "value": "810000",
                    "link": "newchart-xml-apple"
                }, {
                    "label": "Cranberry",
                    "value": "620000",
                    "link": "newchart-xml-cranberry"
                }, {
                    "label": "Grape",
                    "value": "350000",
                    "link": "newchart-xml-grape"
                }],
                "linkeddata": [{
                    "id": "apple",
                    "linkedchart": {
                        "chart": {
                            "caption": "Apple Juice - Quarterly Sales",
                            "subcaption": "Last year",
                            "numberprefix": "$",
                            "theme": "fusion",
                            "rotateValues": "0",
                            "plottooltext": "$label, $dataValue,  $percentValue"
                        },
                        "data": [{
                            "label": "Q1",
                            "value": "157000",
                            "displayValue": "Q1, $157K"
                        }, {
                            "label": "Q2",
                            "value": "172000",
                            "displayValue": "Q2, $172K"
                        }, {
                            "label": "Q3",
                            "value": "206000",
                            "displayValue": "Q3, $206K"
                        }, {
                            "label": "Q4",
                            "value": "275000",
                            "displayValue": "Q4, $275K"
                        }]
                    }
                }, {
                    "id": "cranberry",
                    "linkedchart": {
                        "chart": {
                            "caption": "Cranberry Juice - Quarterly Sales",
                            "subcaption": "Last year",
                            "numberprefix": "$",
                            "theme": "fusion",
                            "plottooltext": "$label, $dataValue,  $percentValue"
                        },
                        "data": [{
                            "label": "Q1",
                            "value": "102000",
                            "displayValue": "Q1, $102K"
                        }, {
                            "label": "Q2",
                            "value": "142000",
                            "displayValue": "Q2, $142K"
                        }, {
                            "label": "Q3",
                            "value": "187000",
                            "displayValue": "Q3, $187K"
                        }, {
                            "label": "Q4",
                            "value": "189000",
                            "displayValue": "Q4, $189K"
                        }]
                    }
                }, {
                    "id": "grape",
                    "linkedchart": {
                        "chart": {
                            "caption": "Grape Juice - Quarterly Sales",
                            "subcaption": "Last year",
                            "numberprefix": "$",
                            "theme": "fusion",
                            "rotateValues": "0",
                            "plottooltext": "$label, $dataValue,  $percentValue"
                        },
                        "data": [{
                            "label": "Q1",
                            "value": "45000",
                            "displayValue": "Q1, $45K"
                        }, {
                            "label": "Q2",
                            "value": "72000",
                            "displayValue": "Q2, $72K"
                        }, {
                            "label": "Q3",
                            "value": "95000",
                            "displayValue": "Q3, $95K"
                        }, {
                            "label": "Q4",
                            "value": "108000",
                            "displayValue": "Q4, $108K"
                        }]
                    }
                }]
            }
        };
        this.libraryPath = Platform.select({
            // Specify fusioncharts.html file location
            android: { uri: 'file:///android_asset/fusioncharts.html' },
            ios: require('./assets/fusioncharts.html')
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>A Chart with Drill-Down</Text>
                <View style={styles.chartContainer}>
                <FusionCharts
                type={this.state.type}
                width={this.state.width}
                height={this.state.height}
                dataFormat={this.state.dataFormat}
                dataSource={this.state.dataSource}
                libraryPath={this.libraryPath} // set the libraryPath property
                onInitialized={caller => {
                    this.apiCaller = caller;
                    this.apiCaller(`window.chartObj.configureLink({
                    type: 'pie2d',
                    overlayButton: {
                        message: 'Back',
                        fontColor: '880000',
                        bgColor: 'FFEEEE',
                        borderColor: '660000',
                    }}, 0);`);
                }}
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
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10
    },
    chartContainer: {
        height: 400,
        borderColor: '#000',
        borderWidth: 1
    }
});
```

Click [here](http://jsfiddle.net/fusioncharts/k7mn6j5s/) to edit the above chart.

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `react-native-fusioncharts`, `fusioncharts`, etc.

2. Define the chart configuration in a JSON.In the JSON object:
    * The chart type has been set to `column2d` for the first chart. For Column 2D chart, the alias is `column2d`. Once the data plots in the Column charts are clicked, the rendered chart is a Pie 2D chart (alias name: `pie2d`). Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.

3. Specify the location of `fusioncharts.html` for **Android** and **iOS**.

4. Add `style` to the container of the chart.

The HTML template(`fusioncharts.html`) of the above sample is:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='android'>Android</a></li>
    <li><a data-toggle='ios'>iOS</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab android-tab active'>
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
</div>

<div class='tab ios-tab'>
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
</div>

</div>
</div>
