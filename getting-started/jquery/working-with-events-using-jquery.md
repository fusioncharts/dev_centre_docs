---
title: Working with Events | FusionCharts
description: This article talks about the Events using jQuery.
heading: Working with Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

To attach event to the FusionCharts element, use bind or jQuery selectors.

The event name string should be in **'fusioncharts[event name in lowercase]'** format. Example, to attach an event listener to `dataplotRollOver`, the string will be `fusionchartsdataplotrollover`.

```
$("#chart-container").on('fusioncharts[event name in lowercase]', function(eventObj, dataObj) {
    [code goes here]
});
```

Let's take an example below that tracks hover events on a data plot.

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
    <p style="padding: 10px;background: #f5f2f0;text-align: center;">Hover on the plot to see the value along with the label</p>
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
            $("#chart-container").on('fusionchartsdataplotrollover', function(eventObj, dataObj) {
                $('body p').text('You’re are currently hovering over ' + dataObj.categoryLabel + ' whose value is ' + dataObj.displayValue);
            });
        });
    </script>
</body>
</html>
```