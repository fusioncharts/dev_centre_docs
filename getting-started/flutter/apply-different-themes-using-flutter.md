---
title: Apply Different Themes using Flutter | FusionCharts
description: This article will showcase how to apply different themes to the chart at runtime.
heading: Apply Different Themes using Flutter
---

In FusionCharts Suite XT, you can manually set each chart's cosmetics and functional attributes in the corresponding JSON/XML file. This works when dealing with only a small number of charts. As the number of charts increases, so do the hassles. FusionCharts Suite ships with predefined themes that you can use to set your chart's visual appearance or behavior.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`

This article focuses on how to apply different themes to a chart at runtime using the `flutter-fusioncharts` component. 

The following is an example of a chart configured to change the theme. 

![2D Column](/flutter/images/flutter_chart_column.jpg)

The complete code of the above sample is given below:

```javascript
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_fusioncharts/flutter_fusioncharts.dart';
import '../../constants.dart';



export default class ThemeMenu extends Component {
    constructor(props) {
        super(props);
        this.activatedColor = '#8cd46a';
        this.apiCaller = null;

        this.state = {
            selectedTheme: 'fusion',
            btnDisabled: true,
            type: 'column2d',
            width: '700',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Countries With Most Oil Reserves [2017-18]",
                    "subCaption": "In MMbbl = One Million barrels",
                    "xAxisName": "Country",
                    "yAxisName": "Reserves (MMbbl)",
                    "numberSuffix": "K",
                    "theme": "fusion"
                },
                "data": [{
                    "label": "Venezuela",
                    "value": "290"
                }, {
                    "label": "Saudi",
                    "value": "260"
                }, {
                    "label": "Canada",
                    "value": "180"
                }, {
                    "label": "Iran",
                    "value": "140"
                }, {
                    "label": "Russia",
                    "value": "115"
                }, {
                    "label": "UAE",
                    "value": "100"
                }, {
                    "label": "US",
                    "value": "30"
                }, {
                    "label": "China",
                    "value": "30"
                }]
            };
            this.libraryPath = Platform.select({
                // Specify fusioncharts.html file location
                android: { uri: 'file:///android_asset/fusioncharts.html' },
                ios: require('./assets/fusioncharts.html')
            });
        }

        changeTheme(theme) {
            this.setState({
                selectedTheme: theme
            })
            this.apiCaller(`window.chartObj.setChartAttribute('theme', '${theme}')`);
        }

        render() {
            return (
                <View style={styles.container}>
                <Text style={styles.header}>Choose from multiple themes</Text>
                <View style={styles.chartContainer}>
                <FusionCharts
                type={this.state.type}
                width={this.state.width}
                height={this.state.height}
                dataFormat={this.state.dataFormat}
                dataSource={this.state.dataSource}
                libraryPath={this.libraryPath}
                onInitialized={(caller) => {
                    this.setState({ btnDisabled: false });
                    this.apiCaller = caller;
                }}
                />
                </View>
                <View style={styles.buttonContainer}>
                <Button title="Fusion" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('fusion')} color={this.state.selectedTheme === 'fusion' ? this.activatedColor : 'blue'} />
                <Button title="Fint" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('fint')} color={this.state.selectedTheme === 'fint' ? this.activatedColor : 'blue'} />
                <Button title="Ocean" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('ocean')} color={this.state.selectedTheme === 'ocean' ? this.activatedColor : 'blue'} />
                </View>
                </View>
            )
        }
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
    },
    buttonContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 10
    },
    instruction: {
        fontSize: 15
    }
});
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `flutter-fusioncharts`, `fusioncharts`, etc.

2. Include the theme files for all six themes in the `fusioncharts.html` file.

3. Define the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Specify the location of `fusioncharts.html` for **Android** and **iOS**.

4. Create a function to apply different themes to the chart at runtime.

5. Add the `render()` function to create the **radio buttons**.

6. Add `style` to the container of the chart.

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
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.gammel.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.candy.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.zune.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.ocean.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.carbon.js"&gt;&lt;/script&gt;

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
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.gammel.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.candy.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.zune.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.ocean.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.carbon.js"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>
