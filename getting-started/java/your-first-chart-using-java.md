---
title: Your First Chart in Java using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the FusionCharts JSP wrapper.
heading: Your First Chart in Java using FusionCharts
chartPresent: false
---

FusionCharts Suite XT includes the **FusionCharts JSP** wrapper that lets you create interactive, data-driven charts.

JavaScript and HTML code is used to generate charts in the browsers. The server-side JSP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts on a browser page. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/java/your-first-chart-using-java#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/java/your-first-chart-using-java#create-your-first-gauge-10) and a [map]({% site.baseurl %}/getting-started/java/your-first-chart-using-java#create-your-first-map-13).

Before going through this article, please [install]({% site.baseurl %}/getting-started/java/install-using-java '@@open-newtab') FusionCharts JSP wrapper, if you haven’t installed it already.

## Create your first chart

In this section, we will create a chart using `FusionCharts JSP` server-side wrapper. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

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

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted data will look as shown below:

> There are different formats of JSON for different groups of charts in FusionCharts - e.g., [single-series]({% site.baseurl %}/chart-guide/standard-charts/line-area-and-column-charts '@@open-newtab') (which you're seeing here),[multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

{% embed_data getting-started-your-first-chart.js %}

In the above code we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels or, data values. You can also set chart limits and extended properties. The list of functional attributes used in the above code are:

* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds a prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's data and provided fusion (default theme) as the value of it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetic Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size etc. Since we are using the `fusion` theme to customize the chart's look and feel no cosmetic attributes are used in this sample. For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Create an instance of the chart

In this step, we will create an instance of the chart type as **column2d**. Import FusionCharts reference to your page, add `<div>` to render the chart and set the width and height (in pixels or %), and finally specify the data for the chart as string.

Create the instance for the chart as shown below:

```jsp
// Create chart instance
// jsonData = “JSON data for the chart”
// charttype, chartID, width, height,containerid, data format, data
FusionCharts firstChart = new FusionCharts(
    "column2d",
    "first_chart",
    "700",
    "400",
    "chart",
    "json",
    jsonData.toString()
);
>
<%= firstChart.render() %>
```

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 800x550 pixels using `width` and `height`.
* To specify the data format as JSON, we have set the `dataFormat` parameter to json. You can also provide the data in [XML format]({% site.baseurl %}/chart-guide/getting-started/using-xml-as-data-format '@@open-newtab'). 
* The JSON data is embedded as the value of the `dataSource` parameter.

Create a container using `<div>` to render the chart.

```HTML
<div id="chart"></div>
```

The full code for the above sample is given below:

```jsp
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.util.*" %>
<%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Insert title here</title>
        <script src="path/to/local/fusioncharts.js"></script>
        <script src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    </head>
    <body>
        <div id="chart"></div>
        <%
            // store chart config name-config value pair
            Map<String, String> chartConfig = new HashMap<String, String>();
            chartConfig.put("caption", "Countries With Most Oil Reserves [2017-18]");
            chartConfig.put("subCaption", "In MMbbl = One Million barrels");
            chartConfig.put("xAxisName", "Country");
            chartConfig.put("yAxisName", "Reserves (MMbbl)");
            chartConfig.put("numberSuffix", "k");
            chartConfig.put("theme", "fusion");

            //store label-value pair
            Map<String, Integer> dataValuePair = new HashMap<String, Integer>();
            dataValuePair.put("Venezuela", 290);
            dataValuePair.put("Saudi", 260);
            dataValuePair.put("Canada", 180);
            dataValuePair.put("Iran", 140);
            dataValuePair.put("Russia", 115);
            dataValuePair.put("UAE", 100);
            dataValuePair.put("US", 30);
            dataValuePair.put("China", 30);

            StringBuilder jsonData = new StringBuilder();
            StringBuilder data = new StringBuilder();
            
            // json data to use as chart data source
            jsonData.append("{'chart':{");
            for(Map.Entry conf:chartConfig.entrySet())
            {
                jsonData.append("'" + conf.getKey()+"':'"+conf.getValue() + "',");
            }

            jsonData.replace(jsonData.length() - 1, jsonData.length() ,"},");

            // build  data object from label-value pair
            data.append("'data':[");

            for(Map.Entry pair:dataValuePair.entrySet())
            {
                data.append("{'label':'" + pair.getKey() + "','value':'" + pair.getValue() +"'},");
            }
            data.replace(data.length() - 1, data.length(),"]");

            jsonData.append(data.toString());
            jsonData.append("}");


            // Create chart instance
            // charttype, chartID, width, height,containerid, data format, data
            FusionCharts firstChart = new FusionCharts(
                "column2d", 
                "first_chart", 
                "800",
                "550", 
                "chart",
                "json", 
                jsonData.toString()
            );
        %>
        <%= firstChart.render() %>
    </body>
</html>
```

That's it! When you run this HTML page now, you should see a chart representing your data.

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a Column 2D chart.

Now, go on and explore other 95+ chart types that we have at [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab'), or explore the configuration [attributes]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for different charts.

## The FusionCharts Chart Class

A list of available parameters is given in the table below:

### Constructor Parameters

The syntax of the `Chart` class constructor used to initialize the chart object is:

```vb.net
Chart <object name> = new Chart (chartType, chartId, chartWidth, chartHeight, dataFormat, dataSource, bgColor, bgOpacity)
```

Given below is a brief description of the constructor parameters:

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`
</td>
    <td>String</td>
    <td>It is used to specify the type of chart to be rendered.</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>It is used to specify a unique identifier for the chart. If multiple charts are rendered on the same HTML page, each chart is referred to using its unique ID.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>It is used to specify the width of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>It is used to specify the height of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>It is used to specify the type of data that will be passed to the chart. This attribute takes the following values: `json`, `xml`, `jsonurl`, `xmlurl`. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>String</td>
    <td>It is used to specify the hex code for the background color of the chart.</td>
  </tr>
  <tr>
    <td>`bgOpacity`</td>
    <td>String</td>
    <td>It is used to specify the background opacity for the chart. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


>  It is not necessary that you assign values for all parameters during initialization. The order of parameters, however, needs to be preserved. Also, you need to make sure that all of these parameters have been assigned values using the constructor, the `Chart` class methods, or the `Render()` method before you run the application. If not, either the chart will not render at all or it will not render the way you want it to. </p>

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample have been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and is green.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-widget.js %}

### Create an instance of the gauge

In this step, we will create an instance of the chart type as `angularGauge`, set the width and height (in pixels or %), and finally specify the data for the chart as string.

To create the instance of the chart follow the code below:

```jsp
// Create gauge instance
// jsonData = “JSON data for the gauge"
// gaugetype, gaugeID, width, height,container id, data format, data
FusionCharts gauge = new FusionCharts(
    "angularGauge", 
    "first_gauge", 
    "400",
    "350", 
    "gauge",
    "json", 
    jsonData.toString()
);
```

Create a container using `<div>` to render the chart.

```HTML
<div id="gauge"></div>
```

The full code for the above sample is given below:

```jsp
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.util.*" %>
<%@page import="fusioncharts.FusionCharts" %>
<%!
    //Create colorRange class
    //It will store Min range Max range and specific color code for each range
    private class ColorRange
    {
        public  int min,max;
        public  String colorCode;
        public ColorRange(int min,int max, String code)
        {
            this.min = min;
            this.max = max;
            this.colorCode = code;
        }
    }
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Insert title here</title>
        <script src="path/to/local/fusioncharts.js"></script>
        <script src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    </head>
    <body>
        <div id="gauge"></div>
        <%
            //store chart config name-config value pair
            Map<String, String> chartConfig = new HashMap<String, String>();
            chartConfig.put("caption", "Nordstorms Customer Satisfaction Score for 2017");
            chartConfig.put("lowerLimit", "0");
            chartConfig.put("upperLimit", "100");
            chartConfig.put("showValue", "1");
            chartConfig.put("numberSuffix", "%");
            chartConfig.put("theme", "fusion");
            chartConfig.put("showToolTip", "0");
            //store dial value config
            Map<String,String> dial = new HashMap<String,String>();
            dial.put("value","81");
            //store color range-color
            ArrayList<ColorRange> color = new ArrayList<ColorRange>();
            color.add(new ColorRange(0,50,"#F2726F"));
            color.add(new ColorRange(50,75,"#FFC533"));
            color.add(new ColorRange(75,100,"#62B58F"));

            //json data to use as chart data source
            StringBuilder jsonData = new StringBuilder();
            //build chart config object
            jsonData.append("{'chart':{");
            for(Map.Entry conf:chartConfig.entrySet())
            {
                jsonData.append("'" + conf.getKey()+"':'"+conf.getValue() + "',");
            }
            jsonData.replace(jsonData.length() - 1, jsonData.length() ,"},");

            StringBuilder range = new StringBuilder();
            //build colorRange object
            range.append("'colorRange':{");
            range.append("'color':[");
            for(int i =0; i< color.size(); i++)
            {
                range.append("{'minValue':'" + color.get(i).min + "','maxValue':'" + color.get(i).max + "','code':'" + color.get(i).colorCode +"'},");
            }
            range.replace(range.length() - 1, range.length(),"]},");
            //build dials object
            StringBuilder dials = new StringBuilder();
            dials.append("'dials':{");
            dials.append("'dial':[");
            for(Map.Entry dialCnf:dial.entrySet())
            {
                dials.append("{'" + dialCnf.getKey() + "':'" + dialCnf.getValue() +"'},");
            }
            dials.replace(dials.length() - 1, dials.length(),"]}");

            jsonData.append(range.toString());
            jsonData.append(dials.toString());
            jsonData.append("}");

            //Create gauge instance
            // gaugetype, gaugeID, width, height,container id, data format, data
            FusionCharts gauge = new FusionCharts(
                "angularGauge", 
                "first_gauge", 
                "400",
                "350", 
                "gauge",
                "json", 
                jsonData.toString()
            );
        %>
        <%= gauge.render() %>
    </body>
</html>
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

> In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column in this example. However, when you convert the data in a format acceptable by FusionCharts, the entities are denoted by the `id` key in the `data` object (see the code snippet of the next section). For any map visualization you create, it is imperative that you provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF`, and not `AFR`. We have detailed [Map Specification Sheet]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab') for all the maps that can be rendered using FusionCharts - please refer to them for the correct `id` of the map you want to create.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-map.js %}

### Create an instance of the map

In this step, we will create an instance of the map type as `world`, set the width and height (in pixels or %), and finally specify the data for the chart as string.

To create the map instance follow the ecode given below:

```jsp
// Create map instance
// jsonData = “JSON data for the chart”
// maptype, mapID, width, height,container id, data format, data
FusionCharts map = new FusionCharts(
    "maps/world", 
    "first_map", 
    "800",
    "650", 
    "map",
    "json", 
    jsonData.toString()
);
```

Create a container using `<div>`, to render the chart.

```HTML
<div id="map"></div>
```

The full code for the above sample is given below:

```jsp
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.util.*" %>
<%@page import="fusioncharts.FusionCharts" %>
<%!
    //Create colorRange class
    //It will store Min range Max range and specific color code for each range

    class ColorRange {
        public double min;
        public double max;
        public String colorCode;

        public ColorRange(double min, double max, String code)
        {
            this.min = min;
            this.max = max;
            this.colorCode = code;
        }
    }
   
    //Create countryData class
    //It will store id, value and show label for each country

    class CountryData {
        public String id;
        public double value;
        public int showLabel;

        public CountryData(String id,  double value, int showLabel)
        {
            this.id = id;
            this.value = value;
            this.showLabel = showLabel;
        }
    }
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Insert title here</title>
        <script src="path/to/local/fusioncharts.js"></script>
        <script src="path/to/local/maps/fusioncharts.world.js"></script>
        <script src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    </head>
    <body>
        <div id="map"></div>
        <%
            // store chart config name-config value pair
            Map<String, String> chartConfig = new HashMap<String, String>();
            chartConfig.put("caption", "Average Annual Population Growth");
            chartConfig.put("subCaption", " 1955-2015");
            chartConfig.put("includevalueinlabels", "1");
            chartConfig.put("labelsepchar", ": ");
            chartConfig.put("numberSuffix", "%");
            chartConfig.put("entityFillHoverColor", "#FFF9C4");
            chartConfig.put("theme", "fusion");

            // store color code for different range
            ArrayList<ColorRange> color = new ArrayList<ColorRange>();
            color.add(new ColorRange(0.5, 1.0, "#FFD74D"));
            color.add(new ColorRange(1.0, 2.0, "#FB8C00"));
            color.add(new ColorRange(2.0, 3.0, "#E65100"));

            // store country data
            ArrayList<CountryData> countries = new ArrayList<CountryData>();
            countries.add(new CountryData("NA", .82, 1));
            countries.add(new CountryData("SA", 2.04, 1));
            countries.add(new CountryData("AS", 1.78, 1));
            countries.add(new CountryData("EU", .40, 1));
            countries.add(new CountryData("AF", 2.58, 1));
            countries.add(new CountryData("AU", 1.30, 1));

            // json data to use as chart data source
            StringBuilder jsonData = new StringBuilder();
            //build chart config object
            jsonData.append("{'chart':{");
            for(Map.Entry cnf :chartConfig.entrySet())
            {
                jsonData.append("'" + cnf.getKey() + "':'" + cnf.getValue() +"',");
            }
            jsonData.replace(jsonData.length() - 1, jsonData.length(),"},");

            StringBuilder range = new StringBuilder();
            //build colorRange object
            range.append("'colorRange':{");
            range.append("'color':[");
            for(int i =0 ;i <color.size();i++)
            {
                range.append("{'minValue':'"+ color.get(i).min +"','maxValue':'"+ color.get(i).max +"','code':'"+ color.get(i).colorCode +"'},");
            }
            range.replace(range.length() - 1, range.length(),"]},");

            // build data object
            StringBuilder data = new StringBuilder();
            data.append("'data':[");
            for(int i =0 ;i <countries.size();i++)
            {
                data.append("{'id':'" + countries.get(i).id + "','value':'" + countries.get(i).value +"','showLabel':'" +countries.get(i).showLabel+ "'},");
            }
            data.replace(data.length() - 1, data.length(),"]");
            jsonData.append(range);
            jsonData.append(data);
            jsonData.append("}");
            //Create map instance
            // maptype, mapID, width, height,container id, data format, data
            FusionCharts map = new FusionCharts(
                "maps/world", 
                "first_map", 
                "800",
                "650", 
                "map",
                "json", 
                jsonData.toString()
            );
        %>
        <%= map.render() %>
    </body>
</html>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of world. The respective `id`, can be found [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you don't see the chart getting rendered on the browser, it might be because some browsers does not allow JavaScript files to be loaded and run from the local filesystem. In such cases, either try with a different browser, or create a local/remote server and server the webpages containing the charts from the server.

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.