---
title: Slice Data Plot using API | FusionCharts
description: Slice Data Plot using API  in Ruby on Rails using FusionCharts themes, enhancing visual appeal and user interaction effortlessly.
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offer a wide range of APIs that you can use for different stages in the life cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using **FusionCharts rails gem wrapper**. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

The full code of the above sample is given below:

```
<%
    def getChart
        chartData = {
            'chart': {
                'caption': 'Market Share of Web Servers',
                'plottooltext': '<b>$percentValue</b> of web servers run on $label servers',
                'showLegend': '0',
                'enableMultiSlicing': '0',
                'showPercentValues': '1',
                'legendPosition': 'bottom',
                'useDataPlotColorForLabels': '1',
                'theme': 'fusion',
            },
            'data': [{
                'label': 'Apache',
                'value': '32647479'
            }, {
                'label': 'Microsoft',
                'value': '22100932'
            }, {
                'label': 'Zeus',
                'value': '14376'
            }, {
                'label': 'Other',
                'value': '18674221'
            }]
        }
        # Chart rendering 
        chart = Fusioncharts::Chart.new({
                id: "first_chart",
                width: "700",
                height: "400",
                type: "pie2d",
                renderAt: "chartContainer",
                dataSource: chartData
            })
        chart.addEvent("dataplotClick", "plotClickHandler");
        return chart
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


<script>
    selectedItem = "none";
         plotClickHandler = function(event){
            clickedPlot = (event.data.categoryLabel).toLowerCase();
              if (selectedItem !== clickedPlot) {
                    selectedItem = clickedPlot;
              } else{
                    selectedItem = 'none';
              }
        };
        noneChecked = function(){
            FusionCharts("first_chart").slicePlotItem(0,false);
            FusionCharts("first_chart").slicePlotItem(1,false);
            FusionCharts("first_chart").slicePlotItem(2,false);
            FusionCharts("first_chart").slicePlotItem(3,false);
        }
        apacheChecked = function(){
            FusionCharts("first_chart").slicePlotItem(0,true);
        }
        microsoftChecked = function(){
            FusionCharts("first_chart").slicePlotItem(1,true);
        }
        zeusChecked = function(){
            FusionCharts("first_chart").slicePlotItem(2,true);
        }
        otherChecked = function(){
            FusionCharts("first_chart").slicePlotItem(3,true);
        }
    </script>

<h3>Use special chart type API</h3>
<div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
    <input type="radio" id="radio1" name="rdGrp-options" checked="checked" onclick="noneChecked()" />
    <label for="radio1">None</label>
    <input type="radio" id="radio2" name="rdGrp-options" onclick="apacheChecked()" />
    <label for="radio2">Apache</label>
    <input type="radio" id="radio3" name="rdGrp-options" onclick="microsoftChecked()" />
    <label for="radio3">Microsoft</label>
    <input type="radio" id="radio4" name="rdGrp-options" onclick="zeusChecked()" />
    <label for="radio4">Zeus</label>
    <input type="radio" id="radio5" name="rdGrp-options" onclick="otherChecked()" />
    <label for="radio5">Other</label>
</div>

<div id="chartContainer"></div>
<%= getChart.render() %>
<br />
<div>
    <p id="dataLoaded">Click on data plot above</p>
</div>
```

## The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `require`. For example, `fusioncharts-rails`, `fusioncharts`, etc

2. Store the chart data in a JSON object.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the container of the chart to `chartContainer`.
    * Embed the json data as the value of `chartData`.

4. Create **Radio Buttons** and add functionalities to slice the data plots of the Pie 2D chart.

5. Create the `<div>` element to render radio buttons.
