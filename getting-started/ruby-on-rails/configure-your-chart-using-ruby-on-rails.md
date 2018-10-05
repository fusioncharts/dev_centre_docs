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

```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains functions to embed the charts.

2. Include the necessary libraries and components using `<script>` tags. For example, `fusioncharts.js`, `fusioncharts.theme.fusion.js`.

3. Store the chart data in a JSON object.

4. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

5. Return the output of the `render` function (defined in `FusionCharts`):
    * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.
    * Pass the relative path of the HTML template, where the chart will be rendered.
    * Pass a dictionary.