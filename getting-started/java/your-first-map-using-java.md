---
title: Create a Map Using Java | FusionCharts
description: This article outlines the steps to be executed for creating your first map using the FusionCharts JSP wrapper.
heading: Create a Map Using Java
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side Java (**JSP**) wrapper for FusionCharts. The `FusionCharts server-side JSP` wrapper lets you easily add rich and interactive charts to any JSP project. Using the wrapper, you can create maps in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a map using the `FusionCharts server-side JSP` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts JSP` wrapper and all the other dependencies on your system.

> The **FusionCharts JSP wrapper** requires **JAVA 6** or higher.

* Copy and paste the `fusioncharts.java` file from `integrations > java > fusioncharts-wrapper` in your project folder.

* Include the FusionCharts JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

* Include the FusionCharts theme file to apply the style to the widgets.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

// Include FusionCharts maps file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script>

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts maps file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.maps.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That completes the installation of FusionCharts and the `jsp-fusioncharts` component.

## Create Your First Map

We will create a visualization using the World Map showing the average annual population growth. The map will look as shown below:

{% embed_chart getting-started-your-first-map.js %}

## Map data

The data for the above map is represented in the table below:

| State | Entity Name | Value |
| ----- | ----------- | ----- ||
| North America | NA          | 82    |
| South America | SA          | 2.04  |
| Asia          | AS          | 1.78  |
| Europe        | EU          | 40    |
| Africa        | AF          | 2.58  |
| Australia     | AU          | 1.30  |

In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column.

FusionCharts accepts data in **JSON** format in which the above entities are denoted by the `id` key in the `data` object.

For any map visualization, it is important to provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF` and not `AFR`.

We have a detailed [Map Specification Sheets](https://www.fusioncharts.com/dev/maps/spec-sheets/world) for all the maps that can be rendered using FusionCharts, where you can find the correct `id` of the maps you want to create.

Following code is the JSON representation of the above table with the required attributes to render the above map.

```JSON
{
    // Map Configuration
    "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1955-2015",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
    }]
}
```

In the above JSON data:

* Create the `chart` object to define the elements of the map.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

* Create the `data` array to define the id of the continents and their corresponding values along with configurations. For example, the first object under `data` array contains the `id` and `value` of **North America** as **NA** and **.82** respectively.

The chart object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the map.

Now that you have the data in JSON format, let's learn how to render the map.

## Render the Map

To render the map, follow the steps below:

1. Include the `FusionCharts JSP wrapper` in your project.

2. Include the `fusioncharts` core library.

3. Include the map renderer file.

4. Include the map definition file.

5. Include the FusionCharts theme file to apply the style to the charts.

6. Store the map configurations in an associative array.

7. Store the color range in a multidimensional array.

8. Create a data object within map configurations to assign the associative data array to it.

9. Convert the final map configuration to JSON string.

10. Create the map instance and set the following:

    * Set the map type as `world`. Each map is represented with a unique alias. For World map, the alias is `world`. Find the complete list of map types with their respective aliases[ here](https://www.fusioncharts.com/dev/map-guide/list-of-maps).

    * Set the map `id`.

    * Set the `width` and `height` (in pixels).

    * Set the container for the map.

    * Set the `dataFormat` as **JSON**.

    * Embed the `json` data as the value of the `dataSource`.

11. Finally, use the `map.render()` command to render the map.

The full code for the above sample is given below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-javascript">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%&gt;
&lt;%@page import="java.util.*" %&gt;
&lt;%@page import="fusioncharts.FusionCharts" %&gt;
&lt;%!
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
    //It will store id, value and label for each country

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
%&gt;

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
        &lt;title&gt;Insert title here&lt;/title&gt;
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.world.js"&gt;&lt;/script&gt;
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="map"&gt;&lt;/div&gt;
        &lt;%
            // store map config name-config value pair
            Map&lt;String, String&gt; chartConfig = new HashMap&lt;String, String&gt;();
            chartConfig.put("caption", "Average Annual Population Growth");
            chartConfig.put("subCaption", " 1955-2015");
            chartConfig.put("includevalueinlabels", "1");
            chartConfig.put("labelsepchar", ": ");
            chartConfig.put("numberSuffix", "%");
            chartConfig.put("entityFillHoverColor", "#FFF9C4");
            chartConfig.put("theme", "fusion");

            // store color code for different range
            ArrayList&lt;ColorRange&gt; color = new ArrayList&lt;ColorRange&gt;();
            color.add(new ColorRange(0.5, 1.0, "#FFD74D"));
            color.add(new ColorRange(1.0, 2.0, "#FB8C00"));
            color.add(new ColorRange(2.0, 3.0, "#E65100"));

            // store country data
            ArrayList&lt;CountryData&gt; countries = new ArrayList&lt;CountryData&gt;();
            countries.add(new CountryData("NA", .82, 1));
            countries.add(new CountryData("SA", 2.04, 1));
            countries.add(new CountryData("AS", 1.78, 1));
            countries.add(new CountryData("EU", .40, 1));
            countries.add(new CountryData("AF", 2.58, 1));
            countries.add(new CountryData("AU", 1.30, 1));

            // json data to use as map data source
            StringBuilder jsonData = new StringBuilder();
            //build map config object
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
            for(int i =0 ;i &lt;color.size();i++)
            {
                range.append("{'minValue':'"+ color.get(i).min +"','maxValue':'"+ color.get(i).max +"','code':'"+ color.get(i).colorCode +"'},");
            }
            range.replace(range.length() - 1, range.length(),"]},");

            // build data object
            StringBuilder data = new StringBuilder();
            data.append("'data':[");
            for(int i =0 ;i &lt;countries.size();i++)
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
        %&gt;
        &lt;%= map.render() %&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-javascript">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%&gt;
&lt;%@page import="java.util.*" %&gt;
&lt;%@page import="fusioncharts.FusionCharts" %&gt;
&lt;%!
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
    //It will store id, value and label for each country

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
%&gt;

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
        &lt;title&gt;Insert title here&lt;/title&gt;
        &lt;script src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script src="path/to/local/maps/fusioncharts.world.js"&gt;&lt;/script&gt;
        &lt;script src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="map"&gt;&lt;/div&gt;
        &lt;%
            // store map config name-config value pair
            Map&lt;String, String&gt; chartConfig = new HashMap&lt;String, String&gt;();
            chartConfig.put("caption", "Average Annual Population Growth");
            chartConfig.put("subCaption", " 1955-2015");
            chartConfig.put("includevalueinlabels", "1");
            chartConfig.put("labelsepchar", ": ");
            chartConfig.put("numberSuffix", "%");
            chartConfig.put("entityFillHoverColor", "#FFF9C4");
            chartConfig.put("theme", "fusion");

            // store color code for different range
            ArrayList&lt;ColorRange&gt; color = new ArrayList&lt;ColorRange&gt;();
            color.add(new ColorRange(0.5, 1.0, "#FFD74D"));
            color.add(new ColorRange(1.0, 2.0, "#FB8C00"));
            color.add(new ColorRange(2.0, 3.0, "#E65100"));

            // store country data
            ArrayList&lt;CountryData&gt; countries = new ArrayList&lt;CountryData&gt;();
            countries.add(new CountryData("NA", .82, 1));
            countries.add(new CountryData("SA", 2.04, 1));
            countries.add(new CountryData("AS", 1.78, 1));
            countries.add(new CountryData("EU", .40, 1));
            countries.add(new CountryData("AF", 2.58, 1));
            countries.add(new CountryData("AU", 1.30, 1));

            // json data to use as map data source
            StringBuilder jsonData = new StringBuilder();
            //build map config object
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
            for(int i =0 ;i &lt;color.size();i++)
            {
                range.append("{'minValue':'"+ color.get(i).min +"','maxValue':'"+ color.get(i).max +"','code':'"+ color.get(i).colorCode +"'},");
            }
            range.replace(range.length() - 1, range.length(),"]},");

            // build data object
            StringBuilder data = new StringBuilder();
            data.append("'data':[");
            for(int i =0 ;i &lt;countries.size();i++)
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
        %&gt;
        &lt;%= map.render() %&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first map using the `FusionCharts JSP wrapper` is ready.

## Render other maps

To reduce the size of the package FusionCharts comes with only two maps, i.e., the **World** map and the **USA** map. However, FusionCharts provide 1600+ maps for you to explore. [Download ](https://www.fusioncharts.com/download/map-definition-files)the map files separately if you want to save them locally.

Let's create a map of California to show the "Web visits for a particular month" as shown below:

{% embed_chart getting-started-your-first-map-california.js %}

To render the above map, the following code is used:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-javascript">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%&gt;
&lt;%@page import="java.util.*" %&gt;
&lt;%@page import="fusioncharts.FusionCharts" %&gt;
&lt;%!
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
    //It will store id, value and label for each country

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
%&gt;

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" " http://www.w3.org/TR/html4/loose.dtd" &gt;
&lt;html&gt;
     &lt;head&gt;
        &lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
        &lt;title&gt;Insert title here&lt;/title&gt;
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.california.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="map"&gt;&lt;/div&gt;
        &lt;%
            // store map config name-config value pair
            Map&lt;String, String&gt; chartConfig = new HashMap&lt;String, String&gt;();
            chartConfig.put("animation", "0");
            chartConfig.put("usehovercolor", "1");
            chartConfig.put("showlegend", "1");
            chartConfig.put("legendposition", "BOTTOM");
            chartConfig.put("legendborderalpha", "0");
            chartConfig.put("legendbordercolor", "ffffff");
            chartConfig.put("legendallowdrag", "0");
            chartConfig.put("legendshadow", "0");
            chartConfig.put("caption", "Website Visits for the month of March 2018");
            chartConfig.put("legendborderalpha", "0");
            chartConfig.put("fillalpha", "80");
            chartConfig.put("hovercolor", "CCCCCC");
            chartConfig.put("theme", "fusion");

            // store color code for the different range
            ArrayList&lt;ColorRange&gt; color = new ArrayList&lt;ColorRange&gt;();
            color.add(new ColorRange(0.5, 1.0, "#FFD74D"));
            color.add(new ColorRange(1.0, 2.0, "#FB8C00"));
            color.add(new ColorRange(2.0, 3.0, "#E65100"));

            // store country data
            ArrayList&lt;CountryData&gt; countries = new ArrayList&lt;CountryData&gt;();
            countries.add(new CountryData("001", 2834, 1));
            countries.add(new CountryData("003", 3182, 1));
            countries.add(new CountryData("005", 3280, 1));
            countries.add(new CountryData("007", 911, 1));
            countries.add(new CountryData("009", 292, 1));
            countries.add(new CountryData("011", 530, 1));
            countries.add(new CountryData("013", 2515, 1));
            countries.add(new CountryData("015", 728, 1));
            countries.add(new CountryData("017", 1974, 1));
            countries.add(new CountryData("019", 848, 1));
            countries.add(new CountryData("021", 3278, 1));
            countries.add(new CountryData("023", 4463, 1));
            countries.add(new CountryData("025", 1198, 1));
            countries.add(new CountryData("027", 378, 1));
            countries.add(new CountryData("029", 2610, 1));
            countries.add(new CountryData("031", 1200, 1));
            countries.add(new CountryData("033", 3820, 1));
            countries.add(new CountryData("035", 940, 1));
            countries.add(new CountryData("037", 3416, 1));
            countries.add(new CountryData("039", 4004, 1));
            countries.add(new CountryData("041", 1604, 1));
            countries.add(new CountryData("043", 4011, 1));
            countries.add(new CountryData("045", 3203, 1));
            countries.add(new CountryData("047", 3775, 1));
            countries.add(new CountryData("049", 2721, 1));
            countries.add(new CountryData("051", 3417, 1));
            countries.add(new CountryData("053", 1530, 1));
            countries.add(new CountryData("055", 412, 1));
            countries.add(new CountryData("057", 3434, 1));
            countries.add(new CountryData("059", 1670, 1));
            countries.add(new CountryData("061", 1274, 1));
            countries.add(new CountryData("063", 4339, 1));
            countries.add(new CountryData("065", 2073, 1));
            countries.add(new CountryData("067", 1018, 1));
            countries.add(new CountryData("069", 3967, 1));
            countries.add(new CountryData("071", 3401, 1));
            countries.add(new CountryData("073", 3307, 1));
            countries.add(new CountryData("075", 1938, 1));
            countries.add(new CountryData("077", 489, 1));
            countries.add(new CountryData("079", 3207, 1));
            countries.add(new CountryData("081", 2295, 1));
            countries.add(new CountryData("083", 2747, 1));
            countries.add(new CountryData("085", 1114, 1));
            countries.add(new CountryData("087", 3400, 1));
            countries.add(new CountryData("089", 784, 1));
            countries.add(new CountryData("091", 1673, 1));
            countries.add(new CountryData("093", 4274, 1));
            countries.add(new CountryData("095", 4509, 1));
            countries.add(new CountryData("097", 3862, 1));
            countries.add(new CountryData("099", 1356, 1));
            countries.add(new CountryData("101", 4126, 1));
            countries.add(new CountryData("103", 1314, 1));
            countries.add(new CountryData("105", 1807, 1));
            countries.add(new CountryData("107", 4026, 1));
            countries.add(new CountryData("109", 3456, 1));
            countries.add(new CountryData("111", 1393, 1));
            countries.add(new CountryData("113", 1500, 1));
            countries.add(new CountryData("115", 2218, 1));

            // json data to use as map data source
            StringBuilder jsonData = new StringBuilder();
            //build map config object
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
            for(int i =0 ;i &lt;color.size();i++)
            {
                range.append("{'minValue':'"+ color.get(i).min +"','maxValue':'"+ color.get(i).max +"','code':'"+ color.get(i).colorCode +"'},");
            }
            range.replace(range.length() - 1, range.length(),"]},");

            // build data object
            StringBuilder data = new StringBuilder();
            data.append("'data':[");
            for(int i =0 ;i &lt;countries.size();i++)
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
                "maps/california", 
                "first_map", 
                "900",
                "400", 
                "map",
                "json", 
                jsonData.toString()
            );
        %&gt;
        &lt;%= map.render() %&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-javascript">
&lt;%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%&gt;
&lt;%@page import="java.util.*" %&gt;
&lt;%@page import="fusioncharts.FusionCharts" %&gt;
&lt;%!
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
    //It will store id, value and label for each country

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
%&gt;

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" " http://www.w3.org/TR/html4/loose.dtd" &gt;
&lt;html&gt;
     &lt;head&gt;
        &lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
        &lt;title&gt;Insert title here&lt;/title&gt;
        &lt;script src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script src="path/to/local/fusioncharts.maps.js"&gt;&lt;/script&gt;
        &lt;script src="path/to/local/maps/fusioncharts.california.js"&gt;&lt;/script&gt;
        &lt;script src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="map"&gt;&lt;/div&gt;
        &lt;%
            // store map config name-config value pair
            Map&lt;String, String&gt; chartConfig = new HashMap&lt;String, String&gt;();
            chartConfig.put("caption", "Average Annual Population Growth");
            chartConfig.put("animation", "0");
            chartConfig.put("usehovercolor", "1");
            chartConfig.put("showlegend", "1");
            chartConfig.put("legendposition", "BOTTOM");
            chartConfig.put("legendborderalpha", "0");

            chartConfig.put("legendbordercolor", "ffffff");
            chartConfig.put("legendallowdrag", "0");
            chartConfig.put("legendshadow", "0");
            chartConfig.put("caption", "Website Visits for the month of March 2018");
            chartConfig.put("legendborderalpha", "0");
            chartConfig.put("fillalpha", "80");
            chartConfig.put("hovercolor", "CCCCCC");
            chartConfig.put("theme", "fusion");

            // store color code for the different range
            ArrayList&lt;ColorRange&gt; color = new ArrayList&lt;ColorRange&gt;();
            color.add(new ColorRange(0.5, 1.0, "#FFD74D"));
            color.add(new ColorRange(1.0, 2.0, "#FB8C00"));
            color.add(new ColorRange(2.0, 3.0, "#E65100"));

            // store country data
            ArrayList&lt;CountryData&gt; countries = new ArrayList&lt;CountryData&gt;();
            countries.add(new CountryData("001", 2834, 1));
            countries.add(new CountryData("003", 3182, 1));
            countries.add(new CountryData("005", 3280, 1));
            countries.add(new CountryData("007", 911, 1));
            countries.add(new CountryData("009", 292, 1));
            countries.add(new CountryData("011", 530, 1));
            countries.add(new CountryData("013", 2515, 1));
            countries.add(new CountryData("015", 728, 1));
            countries.add(new CountryData("017", 1974, 1));
            countries.add(new CountryData("019", 848, 1));
            countries.add(new CountryData("021", 3278, 1));
            countries.add(new CountryData("023", 4463, 1));
            countries.add(new CountryData("025", 1198, 1));
            countries.add(new CountryData("027", 378, 1));
            countries.add(new CountryData("029", 2610, 1));
            countries.add(new CountryData("031", 1200, 1));
            countries.add(new CountryData("033", 3820, 1));
            countries.add(new CountryData("035", 940, 1));
            countries.add(new CountryData("037", 3416, 1));
            countries.add(new CountryData("039", 4004, 1));
            countries.add(new CountryData("041", 1604, 1));
            countries.add(new CountryData("043", 4011, 1));
            countries.add(new CountryData("045", 3203, 1));
            countries.add(new CountryData("047", 3775, 1));
            countries.add(new CountryData("049", 2721, 1));
            countries.add(new CountryData("051", 3417, 1));
            countries.add(new CountryData("053", 1530, 1));
            countries.add(new CountryData("055", 412, 1));
            countries.add(new CountryData("057", 3434, 1));
            countries.add(new CountryData("059", 1670, 1));
            countries.add(new CountryData("061", 1274, 1));
            countries.add(new CountryData("063", 4339, 1));
            countries.add(new CountryData("065", 2073, 1));
            countries.add(new CountryData("067", 1018, 1));
            countries.add(new CountryData("069", 3967, 1));
            countries.add(new CountryData("071", 3401, 1));
            countries.add(new CountryData("073", 3307, 1));
            countries.add(new CountryData("075", 1938, 1));
            countries.add(new CountryData("077", 489, 1));
            countries.add(new CountryData("079", 3207, 1));
            countries.add(new CountryData("081", 2295, 1));
            countries.add(new CountryData("083", 2747, 1));
            countries.add(new CountryData("085", 1114, 1));
            countries.add(new CountryData("087", 3400, 1));
            countries.add(new CountryData("089", 784, 1));
            countries.add(new CountryData("091", 1673, 1));
            countries.add(new CountryData("093", 4274, 1));
            countries.add(new CountryData("095", 4509, 1));
            countries.add(new CountryData("097", 3862, 1));
            countries.add(new CountryData("099", 1356, 1));
            countries.add(new CountryData("101", 4126, 1));
            countries.add(new CountryData("103", 1314, 1));
            countries.add(new CountryData("105", 1807, 1));
            countries.add(new CountryData("107", 4026, 1));
            countries.add(new CountryData("109", 3456, 1));
            countries.add(new CountryData("111", 1393, 1));
            countries.add(new CountryData("113", 1500, 1));
            countries.add(new CountryData("115", 2218, 1));

            // json data to use as map data source
            StringBuilder jsonData = new StringBuilder();
            //build map config object
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
            for(int i =0 ;i &lt;color.size();i++)
            {
                range.append("{'minValue':'"+ color.get(i).min +"','maxValue':'"+ color.get(i).max +"','code':'"+ color.get(i).colorCode +"'},");
            }
            range.replace(range.length() - 1, range.length(),"]},");

            // build data object
            StringBuilder data = new StringBuilder();
            data.append("'data':[");
            for(int i =0 ;i &lt;countries.size();i++)
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
                "maps/california", 
                "first_map", 
                "900",
                "400", 
                "map",
                "json", 
                jsonData.toString()
            );
        %&gt;
        &lt;%= map.render() %&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! The **California** map is ready.

## Problem rendering the map?

In case there is an error, and you are unable to see the map, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.