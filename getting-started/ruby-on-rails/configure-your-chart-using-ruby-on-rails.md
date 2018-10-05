---
title: Configuring your Chart using Ruby on Rails | FusionCharts
description: This article focuses on different type of configurations possible using the Ruby on Rails.
heading: Configuring your Chart using Ruby on Rails
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure chart using **FusionCharts rails gem wrapper** to:

* [Update Chart Data]({% site.baseurl %}/getting-started/ruby-on-rails/configure-your-chart-using-ruby-on-rails#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/ruby-on-rails/configure-your-chart-using-ruby-on-rails#update-chart-attributes-2)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chartData update-chart-data-using-php-example-1.js json %}

The full code of the above sample is given below:

```
<%
    def getChart
    chartData = {
        'chart': {
            'caption': 'Customer Satisfaction Score',
            'subcaption': 'Los Angeles Topanga',
            'plotToolText': 'Current Score: $value',
            'theme': 'fint',
            'chartBottomMargin': '50',
            'showValue': '1'
        },
        'colorRange': {
            'color': [{
                'minValue': '0',
                'maxValue': '45',
                'code': '#e44a00'
            }, {
                'minValue': '45',
                'maxValue': '75',
                'code': '#f8bd19'
            }, {
                'minValue': '75',
                'maxValue': '100',
                'code': '#6baa01'
            }]
        },
        'dials': {
            'dial': [{
                'value': '70',
                'id': 'dial1'
            }]
        }
    }
    # Chart rendering 
    chart = Fusioncharts::Chart.new({
        id: "angular_gauge",
        width: "700",
        height: "400",
        type: "angulargauge",
        renderAt: "chartContainer",
        dataSource: chartData
    })
    return chart
    end
%>
<script>
    updateData = function () {
        var value = document.getElementById("dial-val").value;
        FusionCharts("angular_gauge").setDataForId("dial1",value);
    }
</script>

<div id="chartContainer"></div>
<%= getChart.render() %>

<label for="dial-val">Input dial value</label>
<input name="dial-val" id="dial-val" type= "number"/>
<input type ="button" name ="update dial" value ="Update Dial" onclick ="updateData()" />
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `require`. For example, `fusioncharts-rails`, `fusioncharts`, etc

2. Store the chart data in a JSON object.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the container of the chart to `chartContainer`.
    * Embed the json data as the value of `chartData`.

4. Add the `updateData()` function to randomly update the value of the chart when the button is clicked.

5. Create the `<div>` elements to:
    * Render the chart using chart `id`.
    * Create button for `updateData()`.

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chartData configure-charts-using-react-example-2.js json %}

The full code of the above sample is given below:

```
<%
    def getChart
    chartData = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
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
        id: "mychart",
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

<script>
    changeBackground = function(){
        FusionCharts("mychart").setChartAttribute('bgColor', '#efefef');
    }
    changeCaption = function(e){
        FusionCharts("mychart").setChartAttribute('captionAlignment', 'left');
    }
    reset = function(e){
        FusionCharts("mychart").setChartAttribute('bgColor', '#ffffff');
        FusionCharts("mychart").setChartAttribute('captionAlignment', 'center');
    }
</script>

<div id="chartContainer"></div>
<%= getChart.render() %>
<div>
    <p align="center" id ="message"></p>
</div>

<div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
    <input type="radio" id="radio1" name="radios" onClick="changeBackground()"/>
    <label for="radio1">Change Chart Background</label>
    <input type="radio" id="radio2" name="radios" value="false" onClick="changeCaption()"/>
    <label for="radio2">Make Caption Text Left Aligned</label>
    <input type="radio" id="radio3" name="radios" value="false" onClick="reset()"/>
    <label for="radio3">Reset Attributes</label>
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

4. Add `style` to the buttons using CSS.

5. Write a function to update the background color of the chart when the button is clicked.

6. Write a function to change caption alignment of the chart when the button is clicked.

7. Lastly, add a function for the **Reset** button to return the chart to its rendered state.

8. Create the `<div>` element to render the chart using `id`.

9. In your HTML code, create the three button using `<input>` which updates the chart when clicked.