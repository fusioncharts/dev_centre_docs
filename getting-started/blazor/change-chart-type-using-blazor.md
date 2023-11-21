---
title: Change Chart Type at Runtime | FusionCharts
description: This article will showcase a sample to change the chart type at runtime.
heading: Change Chart Type at Runtime
---

FusionCharts Suite XT includes advanced features that add more context to your chart and simplify data visualization. These features include chart updates, update chart type at runtime, and events.

This article focuses on changing the chart type at runtime using the `BlazorFusionCharts` component. The chart types used in the sample are:

* Bar 2D
* Column 2D
* Pie 2D

These are the steps to follow to render the sample chart.

Set up a Razor Page to define a Razor page accessible at the URL `/SimpleBar`.
```javascript
@page "/SimpleBar"
<h1>Simple bar 2D</h1>
<div id="Simple bar"></div>
``` 

The code above displays a heading "Simple bar 2D" and an empty `<div>` with the ID "Simple bar" where the bar chart will render. 

Next, add the dependency injection. Here, the code injects the `FusionChartsService` into the Razor component. This service is likely responsible for rendering FusionCharts.
```javascript
@inject FusionChartsService fusionChartsService;
```

In the code block, add the `SimpleBarChart()` function for configuring and rendering the bar chart. This function sets up the chart configuration, event handling, data, and properties. Finally, it serializes the chart configuration to JSON and renders it using the `fusionChartsService.renderChart()` method.
```javascript
@code {
    public async void SimpleBarChart()
    {
        dynamic myChartConfig = new System.Dynamic.ExpandoObject();
        dynamic myDataSource = new System.Dynamic.ExpandoObject();
        dynamic myChart = new System.Dynamic.ExpandoObject();
        dynamic myEvent = new System.Dynamic.ExpandoObject();

        myEvent.chartClick = "function() { console.log('chartClick successfull')}";
        
        myChartConfig.type = "bar2d";
        myChartConfig.width = 600;
        myChartConfig.height = 300;
        myChartConfig.dataFormat = "json";
        myChartConfig.renderAt = "Simple bar";
        myChart.caption = "Lead sources by industry";
        myChart.yAxisName = "Number of Leads";
        myChart.aligncaptionwithcanvas = "0";
        myChart.plottooltext = "<b>$dataValue</b> leads received";
        myChart.theme = "candy";
        
        myDataSource.data = new[] {
        new { label = "Sport Agencies", value = "21" },
        new { label = "Digital Marketing", value = "12" },
        new { label = "Travel & Leisure", value = "41" },
        };
        myDataSource.chart = myChart;
        myChartConfig.events = myEvent;
        myChartConfig.dataSource = myDataSource;

        String chartConfig = System.Text.Json.JsonSerializer.Serialize(myChartConfig);
        await fusionChartsService.renderChart(chartConfig);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            SimpleBarChart();
        }
else
        {
        }
      }
}
```

The code snippet below creates a navigation link allowing users to navigate the page with the bar chart.
```javascript
<div class="nav-item px-3">
    <NavLink class="nav-link" href="SimpleBar">
        <span class="oi oi-list-rich" aria-hidden="true"></span> SimpleBar
    </NavLink>
</div>
```

Finally, use the chart Instance API `chartType` to change the chart type after rendering, as follows:
```javascript
 methods:{
        // uses the chartInstance API 'chartType' to change the chart type after render
        onChartTypeChange: function (e) {
            const chart = this.$refs.fc.chartObj,
                type = e.target.value.toLowerCase();
            chart.chartType(type);
        }
    }
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:
```javascript
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ref="fc"
    ></fusioncharts>
    <div>
        <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Column2d" checked/>
            <label>Column 2D Chart</label>
            </div>
            <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Bar2d" />
            <label>Bar 2D Chart</label>
            </div>
            <div>
            <input name='chartType' type="radio" @change="onChartTypeChange" value="Pie2d" />
            <label>Pie 2D Chart</label>
            </div>
    </div>
</div>
```

The above chart was created using the following steps:

1. Include the necessary libraries and components using `import`. For example, `blazor-fusioncharts`, `fusioncharts`, etc.

2. Define the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `bar2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. Specify the location of `fusioncharts.html` for **Android** and **iOS**.

4. Create a function to update the chart type at runtime.

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
