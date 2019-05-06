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