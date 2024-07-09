---
title: Special Events using Jquery | FusionCharts
description: Experience the thrill of dragging columns and instantly seeing modified values with our Jquery-fusioncharts component. Engage with our blog for understanding.
heading: Special Events using Jquery
---

## The HTML template of the sample is shown below:

FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically drag the column and see modified value as text using `jquery-fusioncharts` component.

A drag-able column chart is shown below:

{% embed_chartData special-events-example-1.js json %}

The code to render a chart using `require` is given below:

```
// Include fusioncharts
var FusionCharts = require('fusioncharts');

// Include chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

// Include the theme file
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

var $ = require('jquery');
var jQueryFusionCharts = require('jquery-fusioncharts');

// Resolve Charts as dependency for FusionCharts
Charts(FusionCharts); 

// Resolve Fusion theme as dependency for FusionCharts
FusionTheme(FusionCharts); 

// Resolve FusionCharts as dependency for jqueryFusionCharts
jQueryFusionCharts(FusionCharts); 

$('document').ready(function () {
    var dataSource = {
        "chart": {
            "caption": "Android and iOS Devices Sales Projections",
            "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
            "numberPrefix": "$",
            "numberSuffix": "M",
            "yaxismaxvalue": "200",
            "theme": "fusion",
            "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
        },
        "categories": [{
            "category": [{
                "label": "2014",
                "fontItalic": "0"
            }, {
                "label": "2015",
                "fontItalic": "0"
            }, {
                "label": "2016",
                "fontItalic": "0"
            }, {
                "label": "2017 (Projected)"
            }, {
                "label": "2018 (Projected)"
            }]
        }],
        "dataset": [{
            "seriesname": "Android Devices",
            "data": [{
                "value": "73",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "80",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "97",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "110",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "180",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
        }, {
            "seriesname": "iOS Devices",
            "data": [{
                "value": "63.2",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "68",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "82",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "99",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "150",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
        }]
    },
    prevValue,
    curValue;

    $('#chart-container').insertFusionCharts({
        type: 'dragcolumn2d',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: dataSource
    });

    $('#chart-container').bind('fusionchartsdataplotdragend', function (event, args) {
        prevValue = FusionCharts.formatNumber(args.startValue.toFixed(2));
        curValue = FusionCharts.formatNumber(args.endValue.toFixed(2));
        var label = dataSource.categories[0].category[args.dataIndex].label;
        $('#message').html('<b>' + args.datasetName + '</b> dataset, its previous value was <b>'+ prevValue +'</b> and its current value is <b>' + curValue + '</b> for year ' +
        '<b>'+ label + '</b>');
    });
});
```


The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
</div>
<p style="padding: 10px; background: rgb(245, 242, 240);" id='message'>
    Drag any column for years 2017 or 2018 to see updated value along with the label
</p>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Resolve charts as dependency for `fusioncharts`, `theme` file and `jquery-fusioncharts`. 

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `dragcolumn2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embedded as the value of the `dataSource`.

4. A chart container is created to render the chart. With that `fusionchartsdataplotdragend` event is used to get the current and previous value of the dragged column. 

5. The value of the column is saved in a variable (label) to display in the message.

6. Created an HTML template to render the chart.
