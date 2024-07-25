---
title: Apply Different Themes using Ruby on Rails | FusionCharts
description: Optimize data presentation by applying Different Themes in Ruby on Rails using FusionCharts themes, enhancing visual appeal and user interaction effortlessly.
heading: Apply Different Themes using Ruby on Rails
---

## FusionCharts Suite XT ships with the following predefined themes:

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`

This article focuses on how you can apply different themes to the chart at runtime using **FusionCharts rails gem wrapper**. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

The full code of the above sample is given below:

```
<%
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
        renderAt: "chart-container",
        dataSource: chartData
    })
    end
%>

<script type="text/javascript">
        
FusionCharts && FusionCharts.ready(function () {
    var trans = document.getElementById("controllers").getElementsByTagName("input");
    for (var i=0, len=trans.length; i<len; i++) {                
        if (trans[i].type == "radio"){
            trans[i].onchange = function() {
                ChangeTheme(this.value);
            };
        }
    }
});

function ChangeTheme(theme) {
    for (var k in FusionCharts.items) {
        if (FusionCharts.items.hasOwnProperty(k)) {
            FusionCharts.items[k].setChartAttribute('theme', theme);
        }
    }
};
</script>

<div style="width: 100%; display: table;">
    <div style="display: table-row">
        <div id="chart-container" style="width: 40%; display: table-cell;"><%= getChart.render() %></div>
    </div>
</div>

<div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;">
    <label style="padding: 0px 5px !important;">
        <input type="radio" name="theme-options" checked value="fusion"/> FUSION
    </label>
    <label style="padding: 0px 5px !important;">
        <input type="radio" name="theme-options" value="gammel"/> GAMMEL
    </label>
    <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="zune"/> CANDY
    </label>
    <label style="padding: 0px 5px !important;">
            <input type="radio" name="theme-options" value="zune"/> ZUNE
    </label>
    <label style="padding: 0px 5px !important;">
        <input type="radio" name="theme-options" value="ocean"/> OCEAN
    </label>
    <label style="padding: 0px 5px !important;">
        <input type="radio" name="theme-options" value="carbon"/> CARBON
    </label>        
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

4. Create **Radio Buttons** and add functionalities to change themes at runtime.

5. Create the `<div>` element to render radio buttons.
