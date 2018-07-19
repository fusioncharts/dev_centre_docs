---
permalink: getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails.html
title: Your First Chart in Ruby using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the ruby-on-rails.
heading: Your First Chart in Ruby using FusionCharts
chartPresent: false
---

FusionCharts Suite XT includes the FusionCharts Rails wrapper that lets you create interactive, data-driven charts. You can create a simple chart using the FusionCharts server-side Rails wrapper without writing any JavaScript code.

The server-side Rails wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts on a browser page. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails#create-your-first-gauge-7) and a [map]({% site.baseurl %}/getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails#create-your-first-map-10).

Before going through this article, please [install]({% site.baseurl %}/getting-started/ruby-on-rails/install-using-ruby-on-rails '@@open-newtab') FusionCharts Rails wrapper, if not already installed.

## Create your first chart

In this section, we will create a chart using `FusionCharts Rails` server-side wrapper. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab'). To create a column 2D chart, we need the chart data to be passed in JSON string format.

For this example, we have created a controller named `examples` and view named `firstchart`. To keep things simple we have placed all the chart rendering logics in the `examples` controller only.

> The example controller we created is `app/controllers/examples_controller.rb`.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

The data for this chart is represented in a table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

> There are different formats of JSON/XML for different groups of charts in FusionCharts - e.g., single-series (which you're seeing here), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

{% embed_data getting-started-your-first-chart.js %}

In the above code we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels, data values. You can also set chart limits and extended properties. The list of functional attributes used in the above code are:

* `showLabels` sets the  configuration whether the x-axis labels will be displayed or not.
* `showValue` sets the configuration whether data values will be displayed along with the data plot on chart.
* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's data and provided fusion (default theme) as the value of it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetics Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size etc. Since we are using the `fusion` theme to customize the chart's look and feel no cosmetic attributes are used in this sample. For a detailed list of cosmetic attributes click here.

For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Create an instance of the chart

In this step, we will create an instance of the chart type as `column2d` using FusionCharts class constructor, set the width and height (in pixels or %), and finally specify the data for the chart as JSON string format.

The `fc_json` action is defined to create the column 2D chart

The code of the instance of the chart is given below:

```
chart = Fusioncharts::Chart.new({
    width: "600",
    height: "400",
    type: "column2d",
    renderAt: "chartContainer",
    dataSource: chartJSONDataStr
})
```

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 600x400 pixels using `width` and `height`.
* To specify the data format as JSON, we have set the `dataFormat` parameter to json. You can also provide the data in [XML format]({% site.baseurl %}/chart-guide/getting-started/using-xml-as-data-format '@@open-newtab'). 
* The JSON data is embedded as the value of the `dataSource` parameter.

The full code for the above sample is:

```
# Filename: app/controllers/examples_controller.rb
class ExamplesController < ApplicationController

def getChart

    # Chart appearance configuration
    chartAppearancesConfigObj = Hash.new
    chartAppearancesConfigObj = {
        "caption" => "Countries With Most Oil Reserves [2017-18]",
        "subCaption" => "In MMbbl = One Million barrels",
        "xAxisName" => "Country",
        "yAxisName" => "Reserves (MMbbl)",
        "numberSuffix" => "K",
        "theme" => "fusion"
    }

    # An array of hash objects which stores data
    chartDataObj = [{
            "Venezuela" => "290"
        }, {
            "Saudi" => "260"
        }, {
            "Canada" => "180"
        }, {
            "Iran" => "140"
        }, {
            "Russia" => "115"
        }, {
            "UAE" => "100"
        }, {
            "US" => "30"
        }, {
            "China" => "30"
        }
    ]

    # Chart data template to store data in "Label" & "Value"
    format
    labelValueTemplate = "{ \"label\": \"%s\", \"value\": \"%s\" },"

    # Chart data as JSON string
    labelValueJSONStr = ""

    chartDataObj.each { | item |
            data = labelValueTemplate % [item.keys[0], item[item.keys[0]]]
        labelValueJSONStr.concat(data)
    }

    # Removing trailing comma character
    labelValueJSONStr = labelValueJSONStr.chop

    # Chart JSON data template
    chartJSONDataTemplate = "{ \"chart\": %s, \"data\": [%s] }"

    # Final Chart JSON data from template
    chartJSONDataStr = chartJSONDataTemplate % [chartAppearancesConfigObj.to_json, labelValueJSONStr]

    # Chart rendering
    chart = Fusioncharts::Chart.new({
        width: "600",
        height: "400",
        type: "column2d",
        renderAt: "chartContainer",
        dataSource: chartJSONDataStr
    })

    end

    def firstchart
        @myChart = getChart
    end

end
```

The HTML template of the above sample is shown below:

```HTML
<!-- Filename: app/views/examples/firstchart.html.erb -->

<h3>My Chart</h3>
<div id="chartContainer"></div>
<%=@myChart.render() %>
```

That's it! When you run this HTML page now, you should see a chart representing your data.

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a column 2D chart.

Now, go on and explore other 95+ chart types that we've in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attribute]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## Create your first gauge

Gauges are powerful tools that can showcase using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Scores above 75 mean good and is green.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-widget.js %}

### Create an instance of the chart

In this step, we will create an instance of the chart type as `angularGauge` using FusionCharts class constructor, set the width and height (in pixels or %), and finally specify the data for the chart as JSON string format.

For this example, we have created a controller named `examples` and view named `firstchart`. To keep things simple we have placed all the chart rendering logics in the `examples` controller only.

> The example controller we created is `app/controllers/examples_controller.rb`.

The `fc_json` action is defined to create the angular gauge.

The code of the instance of the chart is given below:

```javascript
#Rendering the widget
widget = Fusioncharts::Chart.new({
    width: "400",
    height: "250",
    type: "angulargauge",
    renderAt: "widgetContainer",
    dataSource: widgetJSONStr
})
```

The full code for the above sample is:

```
#Filename: app / controllers / examples_controller.rb
class ExamplesController < ApplicationController

def getWidget

    # Widget appearance configuration
    widgetAppearancesConfigObj = {
        "caption" => "Nordstorm's Customer Satisfaction Score for 2017",
        "lowerLimit" => "0",
        "upperLimit" => "100",
        "showValue" => "1",
        "numberSuffix" => "%",
        "theme" => "fusion",
        "showToolTip" => "0"
    }

    #
    Widget color range data
    colorDataObj = {
        "color" => [{
                "minValue" => "0",
                "maxValue" => "50",
                "code" => "#F2726F"
            },
            {
                "minValue" => "50",
                "maxValue" => "75",
                "code" => "#FFC533"
            },
            {
                "minValue" => "75",
                "maxValue" => "100",
                "code" => "#62B58F"
            }
        ]
    }

    #
    Widget dial data in array format, multiple values can be separated by comma e.g. ["81", "23", "45", ...]
    widgetDialDataArray = ["81"]

    # Dial value in JSON format
    widgetDialDataStr = ""

    #
    Template
    for dial value
    widgetDialDataTemplate = "{ \"value\": \"%s\" },"

    #
    Iterates dial data array and converts them proper data format
    widgetDialDataArray.each { | item |
            data = widgetDialDataTemplate % [item]
        widgetDialDataStr.concat(data)
    }

    #
    Removing trailing comma
    widgetDialDataStr = widgetDialDataStr.chop

    # Formats dial value(s)
    widgetDialTemplate = "{ \"dial\": [%s]}"
    widgetDialStr = ""
    widgetDialStr = widgetDialTemplate % [widgetDialDataStr]

    # Final Widget JSON template
    widgetJSONTemplate = "{ \"chart\": %s, \"colorRange\": %s,  \"dials\": %s}"

    #
    Final Widget JSON data from template
    widgetJSONStr = widgetJSONTemplate % [widgetAppearancesConfigObj.to_json, colorDataObj.to_json, widgetDialStr]

    # Rendering the widget
    widget = Fusioncharts::Chart.new({
        width: "400",
        height: "250",
        type: "angulargauge",
        renderAt: "widgetContainer",
        dataSource: widgetJSONStr
    })

    end

def firstwidget
@myWidget = getWidget
end

end      
```

The template of the above sample is shown below:

```HTML
<<!-- Filename: app/views/examples/firstwidget.html.erb -->

<h3>My Widget</h3>
<div id="widgetContainer"></div>
<%=@myWidget.render() %>
```

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **World**. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in a table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-map.js %}

### Create an instance of the map

In this step, we will create an instance of the chart type as `world` using FusionCharts class constructor, set the width and height (in pixels or %), and finally specify the data for the chart as JSON string format.

For this example, we have created a controller named `examples` and view named `firstchart`. To keep things simple we have placed all the chart rendering logics in the `examples` controller only.

> The example controller we created is `app/controllers/examples_controller.rb`.

The code of the instance of the chart is given below:

```javascript
# Rendering the Map
       map = Fusioncharts::Chart.new({
           width: "600",
           height: "400",
           type: "maps/world",
           renderAt: "mapContainer",
           dataSource: mapJSONStr
       })

```

The full code of the sample is:

```
#
Filename: app / controllers / examples_controller.rb
class ExamplesController < ApplicationController

def getMap

    # Map appearance configuration
    mapAppearancesConfigObj = {
        "caption" => "Average Annual Population Growth",
        "subcaption" => " 1955-2015",
        "numbersuffix" => "%",
        "includevalueinlabels" => "1",
        "labelsepchar" => ": ",
        "entityFillHoverColor" => "#FFF9C4",
        "theme" => "fusion"
    }

    #
    Map color range data
    colorDataObj = {
        "minvalue" => "0",
        "code" => "#FFE0B2",
        "gradient" => "1",
        "color" => [{
                "minValue" => "0.5",
                "maxValue" => "1",
                "code" => "#FFD74D"
            },
            {
                "minValue" => "1.0",
                "maxValue" => "2.0",
                "code" => "#FB8C00"
            },
            {
                "minValue" => "2.0",
                "maxValue" => "3.0",
                "code" => "#E65100"
            }
        ]
    }

    #
    Map data array
    mapDataArray = [
        ["NA", ".82", "1"],
        ["SA", "2.04", "1"],
        ["AS", "1.78", "1"],
        ["EU", ".40", "1"],
        ["AF", "2.58", "1"],
        ["AU", "1.30", "1"]
    ]

    # Map data template
    mapDataTemplate = "{ \"id\": \"%s\", \"value\": \"%s\", \"showLabel\": \"%s\" },"

    #
    Map data as JSON string
    mapDataJSONStr = ""

    #
    Iterate all data in mapDataArray and converts it to actual data format
    mapDataArray.each { | item |
            data = mapDataTemplate % [item[0], item[1], item[2]]
        mapDataJSONStr.concat(data)
    }

    #
    Removing trailing comma
    mapDataJSONStr = mapDataJSONStr.chop

    # Map JSON data template
    mapJSONTemplate = "{ \"chart\": %s, \"colorRange\": %s,  \"data\": [%s]}"

    #
    Map JSON data after combining all parts
    mapJSONStr = mapJSONTemplate % [mapAppearancesConfigObj.to_json, colorDataObj.to_json, mapDataJSONStr]

    # Rendeing the Map
    map = Fusioncharts::Chart.new({
        width: "600",
        height: "400",
        type: "maps/world",
        renderAt: "mapContainer",
        dataSource: mapJSONStr
    })



    end

def firstmap
@myMap = getMap
end

end
```

The template of the above sample is shown below:

```HTML
<!-- Filename: `app/views/examples/fc_json.html.erb` -->
<!-- **Step 3:** Render the chart**  **-->
<!-- Filename: app/views/examples/firstwidget.html.erb -->

<h3>My Map</h3>
<div id="mapContainer"></div>
<%=@myMap.render() %>

```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of world. The respective `id`, can be found [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.