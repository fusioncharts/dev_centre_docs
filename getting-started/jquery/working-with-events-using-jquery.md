---
title: Working with Events | FusionCharts
description: This article talks about the Events using jQuery.
heading: Working with Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

Take a look at the pie chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one pie slice and see how the text (the slice label and the no. of visitors) rendered below the chart changes.

For example, if you roll the mouse pointer over the __Senior__ slice, the following text is displayed is below the chart:
__Age group: Senior__
__No. of visitors: 491000__

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
                type: "pie2d",
                width: "450",
                height: "350",
                dataFormat: "json",
                dataSource: {
                    "chart": {
                        "caption": "Split of visitors by age group-FY2013-14",
                        "subCaption": "Harry's SuperMart",
                        "enableSmartLabels": "0",
                        "showPercentValues": "1",
                        "showTooltip": "0",
                        "decimals": "1",
                        "theme": "fusion"
                    },
                    "data": [{
                        "label": "Teenage",
                        "value": "1250400"
                    }, {
                        "label": "Adult",
                        "value": "1463300"
                    }, {
                        "label": "Mid-age",
                        "value": "1050700"
                    }, {
                        "label": "Senior",
                        "value": "491000"
                    }]
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

Refer to the code below where the code snippet for `dataplotRollOver` event has been specified.

```
$("#chart-container").on('fusionchartsdataplotrollover', function(eventObj, dataObj) {
    $('body p').text('You’re are currently hovering over ' + dataObj.categoryLabel + ' whose value is ' + dataObj.displayValue);
});
```

In the above code `fusionchartsdataplotrollover` event is triggered when the mouse pointer is rolled over a data plot. 

Click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollover-247) to get the detailed parameters of the event.