---
title: Slice Data Plot using API | FusionCharts
description: Slice Data Plot in jQuery with FusionCharts. Streamline data visualization in your web projects. Check out our website for more info.
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offers a wide range of APIs that you can use for different stages in the ife cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using `jquery-fusioncharts` component. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

The code to render a chart is given below:

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

$('document').ready(function() {
    $('#chart-container').insertFusionCharts({
        id: 'pie-slice-chart',
        type: 'pie2d',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Market Share of Web Servers",
                "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
                "showLegend": "1",
                "showPercentValues": "1",
                "legendPosition": "bottom",
                "useDataPlotColorForLabels": "1",
                "enablemultislicing": "0",
                "showlegend": "0",
                "theme": "fusion",
            },
            "data": [{
                "label": "Apache",
                "value": "32647479"
            }, {
                "label": "Microsoft",
                "value": "22100932"
            }, {
                "label": "Zeus",
                "value": "14376"
            }, {
                "label": "Other",
                "value": "18674221"
            }]
        }
    });

    $('#chart-container').bind('fusionchartsdataplotclick', function(event, args) {
        if (args.isSliced) {
            $('#radioButton1').prop('checked', true);
        } else {
            $('#radioButton' + (args.index + 2)).prop('checked', true);
        }
    })

    $('#radio1').click(function() {
        for (var i in dataSource.data) {
            FusionCharts.items['pie-slice-chart'].slicePlotItem(i, false)
        }
    });
    $('#radio2').click(function() {
        FusionCharts.items['pie-slice-chart'].slicePlotItem(0, true);
    });
    $('#radio3').click(function() {
        FusionCharts.items['pie-slice-chart'].slicePlotItem(1, true);
    });
    $('#radio4').click(function() {
        FusionCharts.items['pie-slice-chart'].slicePlotItem(2, true);
    });
    $('#radio5').click(function() {
        FusionCharts.items['pie-slice-chart'].slicePlotItem(3, true);
    });
});
```

The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
</div>
<div style="display: flex; justify-content: center; bottom: 2px;">
    <div class="change-type">
        <div id="radio1">
            <input name="slice-selecter" id="radioButton1" type="radio" checked="checked"/>
            <label for="radioButton1">None</label>
        </div>
        <div id="radio2">
            <input name="slice-selecter" id="radioButton2" type="radio"/>
            <label for="radioButton2">Apache</label>
        </div>
        <div id="radio3">
            <input name="slice-selecter" id="radioButton3" type="radio"/>
            <label for="radioButton3">Microsoft</label>
        </div>
        <div id="radio4">
            <input name="slice-selecter" id="radioButton4" type="radio"/>
            <label for="radioButton4">Zeus</label>
        </div>
        <div id="radio5">
            <input name="slice-selecter" id="radioButton5" type="radio"/>
            <label for="radioButton5">Other</label>
        </div>
    </div>
</div>
```

## The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Resolve charts as dependency for `fusioncharts`, `theme` file and `jquery-fusioncharts`. 

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. In the above sample a function is called to slice items when radio buttons are clicked using the slicePlotItems API.
    
5. Create an HTML template to render the chart and the Radio buttons.
