---
title: Change Chart Type at Runtime | FusionCharts
description: Change Chart Type at Runtime in Ruby on Rails using FusionCharts themes, enhancing visual appeal and user interaction effortlessly.
heading: Change Chart Type at Runtime
---

## A chart configured to change the chart type, is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using **FusionCharts rails gem wrapper**. The chart types used in the sample is:

* Column 2D
* Bar 2D
* Pie 2D

A chart configured to change the chart type, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

The full code of the above sample is given below:

```
<%
    require 'fusioncharts-rails'
    def getChart
    chartData = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subcaption": "In MMbbl = One Million barrels",
            "xaxisname": "Country",
            "yaxisname": "Reserves (MMbbl)",
            "numbersuffix": "K",
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
    }
        
    # Chart rendering 
    chart = Fusioncharts::Chart.new({
        width: "700",
        height: "400",
        type: "column2d",
        renderAt: "chartContainer",
        dataSource: chartData
    })
    end
%>

<style>
    input[type=radio], input[type=checkbox] {
        display:none;
    }
    input[type=radio] + label, input[type=checkbox] + label {
        display:inline-block;
        margin:-2px;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        color: #333;
        text-align: center;
        text-shadow: 0 1px 1px rgba(255,255,255,0.75);
        vertical-align: middle;
        cursor: pointer;
        background-color: #f5f5f5;
        background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
        background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
        background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
        background-image: -o-linear-gradient(top,#fff,#e6e6e6);
        background-image: linear-gradient(to bottom,#fff,#e6e6e6);
        background-repeat: repeat-x;
        border: 1px solid #ccc;
        border-color: #e6e6e6 #e6e6e6 #bfbfbf;
        border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
        border-bottom-color: #b3b3b3;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);
        filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
        -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
        -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    }
     input[type=radio]:checked + label, input[type=checkbox]:checked + label{
           background-image: none;
        outline: 0;
        -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
        -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
            background-color:#e0e0e0;
    }
</style>

<script type="text/javascript">
    FusionCharts && FusionCharts.ready(function () {
        var trans = document.getElementById("controllers").getElementsByTagName("input");
        for (var i=0, len=trans.length; i<len; i++) {                
            if (trans[i].type == "radio"){
                trans[i].onchange = function() {
                    changeChartType(this.value);
                };
            }
        }
    });
        
    function changeChartType(chartType) {
        for (var k in FusionCharts.items) {
            if (FusionCharts.items.hasOwnProperty(k)) {
                FusionCharts.items[k].chartType(chartType);
            }
        }
    };
</script>

<div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
    <input type="radio" id="radio1" name="div-size" checked value="column2d"/> 
    <label for="radio1">Column 2D</label>
    <input type="radio" id="radio2" name="div-size" value="bar2d"/>
    <label for="radio2">Bar 2D</label>
    <input type="radio" id="radio3" name="div-size" value="pie3d"/>
    <label for="radio3">Pie 3D</label>
</div>
<div style="width: 100%; display: block;" align="center">
    <div id="chartContainer"><%= getChart.render() %></div>
</div>
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `require`. For example, `fusioncharts-rails`, `fusioncharts`, etc

2. Store the chart data in a JSON object.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the container of the chart to `chartContainer`.
    * Embed the json data as the value of `chartData`.

4. Create **Radio Buttons** and add functionalities to update the chart type to:
    * Column 2D
    * Bar 2D
    * Pie 2D

5. Create the `<div>` element to render radio buttons.
