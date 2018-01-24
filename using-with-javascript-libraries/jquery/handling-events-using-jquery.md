---
permalink: using-with-javascript-libraries/jquery/handling-events-using-jquery.html
title: Handling Events Using jQuery | FusionCharts
description: In this section, you will be shown how you can work with the FusionCharts events using the jQuery helper.
heading: Handling Events Using jQuery
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts JQuery Helper can be downloaded from <a href="http://www.fusioncharts.com/jquery-charts" target="_blank">here</a>.</p>

The FusionCharts jQuery helper enables you to bind FusionCharts events using the jQuery `bind`/`on` methods. The event handler needs to be attached to an HTML element containing the `FusionCharts` object.

In this section, you will be shown how you can work with the FusionCharts events using the jQuery helper.

A chart with the `dataPlotClick` event configured using the jQuery helper looks like this:

{% embed_chart using-with-javascript-libraries-jquery-handling-events-using-jquery-example-1.js %}

<div id='messageView' style='width:250px; text-align:center; font-size:12px; color:#333; padding:10px; margin:20px 100px'>Click on a data plot to trigger event</div>

When a data plot on the chart is clicked, `dataPlotClick` event is fired and the event listener displays the corresponding message in the div container.

The code snippet for this chart is shown below:

```javascript
$('#chart-container').insertFusionCharts({
    type: 'column2d',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            ...
        },
        "data": [
            ...
        ]
    }
});

// Display text when data plot is clicked
$('#chart-container').bind('fusionchartsdataplotclick', function(event, args) {
    $('#messageView').text("You selected " + args.toolText);
});
```

<p class="text-info"> The complete list of events exposed by FusionCharts is available [here](/api/fusioncharts/fusioncharts-events). These events can be used with the FusionCharts jQuery helper by prefixing them with the text "fusioncharts" and using the lowercase representation of the event name. For example, the `beforeRender` event will be named as `fusionchartsbeforerender`. This is done to avoid conflict with the existing jQuery events that might have the same names. The parameters passed to the event handler function, however, are the same. </p>