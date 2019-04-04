---
title: Create a Map Using Ruby | FusionCharts
description: This article outlines the steps to be executed for creating your first map using the ruby-on-rails.
heading: Create a Map Using Ruby
---

## Overview

FusionCharts Suite XT includes the **FusionCharts server-side RoR** wrapper that lets you create interactive, data-driven charts. Using the wrapper, you can create charts in your browsers without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page to generate charts.

In this article, we will show you how to install and render a chart using the **FusionCharts Rails gem** wrapper.

## Installation

In this article, we will show you how to download and install the **FusionCharts Rails gem** wrapper and all the other dependencies on your system.

* Copy the 'fusionCharts-rails.rb` from `integrations > rubyonrails > fusioncharts-wrapper` in your project folder.

* Include the **FusionCharts** JavaScript files, which can be downloaded from here.

* Include the FusionCharts theme file to apply the style to the charts.

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

* Add the FusionCharts Rail wrapper:
	* Using RubyGems
	* Manually

* Include the FusionCharts Rails wrapper.

To add the FusionCharts Rails wrapper, use any of the following processes:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='rubygems'>RubyGems</a></li>
  <li><a data-toggle='manual'>Manual</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab rubygems-tab active'>
<div><strong>Add this line to your application’s `Gemfile`:</strong></div>
<pre><code class="language-ruby">
	gem ‘fusioncharts-rails’
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>RubyGems contain package information along with the files to install. On the command line prompt, execute the following command:</strong></div>
<pre><code class="language-ruby">
	$bundle
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>This command will automatically install the `fusioncharts-rails` gem. You can also install the gem directly from the command line prompt, without making any edits to the `Gemfile`. To do this, use the code line given below:</strong></div>
<pre><code class="language-ruby">
	$gem install fusioncharts-rails
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab manual-tab'>
<div><strong>Step 1: </strong>Copy all files from `fusioncharts-suite-xt > integrations > rubyonrails > fusioncharts-wrapper` folder.</div>
<div><strong>Step 2: </strong>Paste the copied files to the `lib` folder of your application</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

</div>
</div>

That completes the installation of FusionCharts Suite and the Rails wrapper.

## Create you First map

In this section, we will create a visualization using the **World Map** showing the average annual population growth.

The chart will look like as shown below:

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

1. Include the **FusionCharts Rails wrapper** in your project.

2. Include the `fusioncharts` library.

3. Include the map renderer file.

4. Include the map definition file.

3. Include the FusionCharts theme file to apply the style to the charts.

4. Set the map appearance configuration to display the data in the chart.

5. Create an array named `chartDataObj` of hash objects which stores data.

6. Create a chart data template to store data in `label` and `value`.

7. Set te chart data as JSON string.

8. Create the map instance and set the following:

	* Set the map type as `world`. Each map is represented with a unique alias. For World Map, the alias is `world`. Find the complete list of map types with their respective alias[ here](https://www.fusioncharts.com/dev/map-guide/list-of-maps).

    * Set the `width` and `height` (in pixels).

    * Set the container for the chart.

    * Set the `dataFormat` as JSON.

    * Embed the `json` data as the value of the `dataSource`.

9. Create a container using `<div>` to render the chart.

The full code for the above sample is:

```
<%
require 'json'

    # Map rendering
    def self.getMap 

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

        # Map color range data
        colorDataObj = { "minvalue" => "0", "code" => "#FFE0B2", "gradient" => "1",
                        "color" => [
                            {"minValue" => "0.5", "maxValue" => "1", "code" => "#FFD74D"}, 
                            {"minValue" => "1.0", "maxValue" => "2.0", "code" => "#FB8C00"},
                            {"minValue" => "2.0", "maxValue" => "3.0", "code" => "#E65100"}
                        ]
        }
        
        # Map data array
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
        
        # Map data as JSON string
        mapDataJSONStr = ""
        
        # Iterate all data in mapDataArray and converts it to actual data format
        mapDataArray.each {|item|
            data = mapDataTemplate % [item[0], item[1], item[2]]
            mapDataJSONStr.concat(data)
        }

        # Removing trailing comma
        mapDataJSONStr = mapDataJSONStr.chop

        # Map JSON data template
        mapJSONTemplate = "{ \"chart\": %s, \"colorRange\": %s,  \"data\": [%s]}"

        # Map JSON data after combining all parts
        mapJSONStr = mapJSONTemplate % [mapAppearancesConfigObj.to_json, colorDataObj.to_json, mapDataJSONStr]

        # Rendering the Map
        map = Fusioncharts::Chart.new({
            width: "850",
            height: "550",
            type: "maps/world",
            renderAt: "mapContainer",
            dataSource: mapJSONStr
        })

    end
    %>
```

The HTML template of the above sample is shown below:

```HTML
<!-- Filename: app/views/examples/firstchart.html.erb -->
<h3>My Map</h3>
<div id="mapContainer"></div>
<%=@getMap.render() %>
```
That's it! Your first map using **FusionCharts Rails** wrapper is ready. 

## Render other Maps

To reduce the size of the package FusionCharts comes with only two maps, i.e., the World map and the USA map. However, FusionCharts provides 1600+ maps for you to explore. [Download ](https://www.fusioncharts.com/download/map-definition-files)the map files separately if you want to save them locally.

Let's create a map of California to show the "Web visits for a particular month" as shown below:

{% embed_chart getting-started-your-first-map-california.js %}

To render the above map, the following code is used:

```
<%
# Map rendering

    def self.getMap 

        # Map appearance configuration

        mapAppearancesConfigObj = {

                "animation"=> "0",

                "showbevel"=> "0",

                "usehovercolor"=> "1",

                "showlegend"=> "1",

                "legendposition"=> "BOTTOM",

                "legendborderalpha"=> "0",

                "legendbordercolor"=> "ffffff",

                "legendallowdrag"=> "0",

                "legendshadow"=> "0",

                "caption"=> "Website Visits for the month of March 2018",

                "connectorcolor"=> "000000",

                "fillalpha"=> "80",

                "hovercolor"=> "CCCCCC",

                "theme"=> "fusion"

        }

        # Map color range data

        colorDataObj = { "minvalue" => "0", "code" => "#FFE0B2", "gradient" => "1",

                        "color" => [

                            {"minValue" => "0", "maxValue" => "1000", "code" => "#FFD74D"}, 

                            {"minValue" => "1001", "maxValue" => "2500", "code" => "#FB8C00"},

                            {"minValue" => "2501", "maxValue" => "5500", "code" => "#E65100"}

                        ]

        }

        # Map data array

        mapDataArray = [ 

            ["001", "2834", "1"],

            ["003", "3182", "1"],

            ["005", "3280", "1"],

            ["007", "911", "1"],

            ["009", "292", "1"],

            ["011", "530", "1"],

            ["013", "2515", "1"],

            ["015", "728", "1"],

            ["017", "1974", "1"],

            ["019", "848", "1"],

            ["021", "3278", "1"],

            ["023", "4463", "1"],

            ["025", "1198", "1"],

            ["027", "378", "1"],

            ["029", "2610", "1"],

            ["031", "1200", "1"],

            ["033", "3820", "1"],

            ["035", "940", "1"],

            ["037", "3416", "1"],

            ["039", "4004", "1"],

            ["041", "1604", "1"],

            ["043", "4011", "1"],

            ["045", "3203", "1"],

            ["047", "3775", "1"],

            ["049", "2721", "1"],

            ["051", "3417", "1"],

            ["053", "1530", "1"],

            ["055", "412", "1"],

            ["057", "3434", "1"],

            ["059", "1670", "1"],

            ["061", "1274", "1"],

            ["063", "4339", "1"],

            ["065", "2073", "1"],

            ["067", "1018", "1"],

            ["069", "3967", "1"],

            ["071", "3401", "1"],

            ["073", "3307", "1"],

            ["075", "1938", "1"],

            ["077", "489", "1"],

            ["079", "3207", "1"],

            ["081", "2295", "1"],

            ["083", "2747", "1"],

            ["085", "1114", "1"],

            ["087", "3400", "1"],

            ["089", "784", "1"],

            ["091", "1673", "1"],

            ["093", "4274", "1"],

            ["095", "4509", "1"],

            ["097", "3862", "1"],

            ["099", "1356", "1"],

            ["101", "4126", "1"],

            ["103", "1314", "1"],

            ["105", "1807", "1"],

            ["107", "4026", "1"],

            ["109", "3456", "1"],

            ["111", "1393", "1"],

            ["113", "1500", "1"],

            ["115", "2218", "1"]

        ]

        # Map data template

        mapDataTemplate = "{ \"id\": \"%s\", \"value\": \"%s\", \"showLabel\": \"%s\" },"

        # Map data as JSON string

        mapDataJSONStr = ""

        # Iterate all data in mapDataArray and converts it to actual data format

        mapDataArray.each {|item|

            data = mapDataTemplate % [item[0], item[1], item[2]]

            mapDataJSONStr.concat(data)

        }

        # Removing trailing comma

        mapDataJSONStr = mapDataJSONStr.chop

        # Map JSON data template

        mapJSONTemplate = "{ \"chart\": %s, \"colorRange\": %s,  \"data\": [%s]}"

        # Map JSON data after combining all parts

        mapJSONStr = mapJSONTemplate % [mapAppearancesConfigObj.to_json, colorDataObj.to_json, mapDataJSONStr]

        # Rendeing the Map

        map = Fusioncharts::Chart.new({

            width: "850",

            height: "550",

            type: "maps/california",

            renderAt: "mapContainer",

            dataSource: mapJSONStr

        })

    end
%>
```

The HTML template of the above sample is shown below:

```
<!-- Filename: app/views/examples/firstchart.html.erb -->
<h3>My Map</h3>
<div id="mapContainer"></div>
<%=@getMap.render() %>
```

That's it! The **California** map is ready.

## Problem rendering the map?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.