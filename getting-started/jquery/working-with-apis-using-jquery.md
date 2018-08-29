---
title: Working with APIs | FusionCharts
description: This article talks about the APIs using jQuery.
heading: Working with APIs
---

The FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

To call APIs, a chart object is required. To get the chart object, use the `getFusionCharts` method. It will return an array of all chart objects inside the given selector. Once you have the chart object, use any FusionCharts API on it.

```
var chartObjects = $("#chart-container").getFusionCharts();
chartObjects.forEach(function (chart) {
    chart.[API Call]
});
```

Let's take an example shown below, which will convert a Column 2D chart to a Pie 2D chart in 5 seconds.

```HTML
<!DOCTYPE html>
<html>

<head>
    <title>jQuery FusionCharts Plugin Sample</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="https://unpkg.com/fusioncharts/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript" src="https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"></script>
</head>

<body>
    <div id="chart-container">FusionCharts will render here...</div>
    <script type="text/javascript">
        $('document').ready(function() {
            $("#chart-container").insertFusionCharts({
                type: "column2d",
                width: "700",
                height: "400",
                dataFormat: "json",
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
                }
            });

            setTimeout(() => {
                var chartObjects = $("#chart-container").getFusionCharts();
                chartObjects.forEach(function(chart) {
                    chart.chartType('pie2d');
                });
            }, 5000);
        });
    </script>
</body>

</html>
```