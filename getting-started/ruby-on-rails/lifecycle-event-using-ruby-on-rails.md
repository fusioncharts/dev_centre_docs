---
title: Lifecycle Events using Ruby on Rails | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using Ruby on Rails.
heading: Lifecycle Events using Ruby on Rails
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart using **FusionCharts rails gem wrapper**.

A chart is shown below:

{% embed_chartData lifecycle-event-server-side-example-1.js json %}

## The full code of the above sample is given below:

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
                width: "700",
                height: "400",
                type: "column2d",
                renderAt: "chartContainer",
                dataSource: chartData
            })
        chart.addEvent("dataLoaded", "onDataLoaded");
        return chart
    end
%>

<script>
    function onDataLoaded() {
        document.getElementById("dataLoaded").innerHTML = "Chart Data is Loaded Succesfully!";
    }
</script>

<h3>Show data plot value on click</h3>
<div id="chartContainer"></div>
<%= getChart.render() %>
<br/>
<div>
    <p id="dataLoaded">Click on data plot above</p>
</div>
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `require`. For example, `fusioncharts-rails`, `fusioncharts`, etc

2. Store the chart data in a JSON object.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the container of the chart to `chart-container`.
    * Embed the json data as the value of `chartData`.

4. Create the `<div>` element to render the chart.
