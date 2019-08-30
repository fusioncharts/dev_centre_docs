---
title: Create a Map Using ASP.NET | FusionCharts
description: This article outlines the steps to be executed for creating your first map using the FusionCharts ASP wrapper.
heading: Create a Map Using ASP.NET
---

> ### FusionCharts.NET
>
> We have released FusionCharts.NET which brings the seamless support of FusionCharts JavaScript charting library to Microsoft .NET Framework. [Download](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net) it now to take advantage of the following powerful features:
>
> - Provide raw data and FusionCharts.NET automatically converts the data into JSON.
> - Dynamically slice and dice data to derive insights using the [data engine](/fusioncharts-aspnet-visualization/data-engine/data-engine-overview).
> - All methods and properties are available in Visual Studio intellisense.
> - ...and many more.
>   Get it now. Click [here](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net)!

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **ASP.NET** wrapper for FusionCharts. The `FusionCharts server-side ASP.NET` wrapper lets you easily add rich and interactive charts to any ASP.NET project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a map using the `FusionCharts server-side ASP.NET` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts **ASP.NET**` wrapper and all the other dependencies on your system.

> The **FusionCharts ASP.NET server-side wrapper** requires **.NET Framework 3.5** or higher.

To install the FusionCharts Suite, follow the steps below:

- Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

- Copy the **FusionCharts.cs** or **FusionCharts.vb** class (C#/VB) file from `integrations > asp.net-cs >fusioncharts-wrapper-source` (for C#) or `integration > asp.net-vb > fusioncharts-wrapper-source` (for VB) to `App_Code` folder inside your project.

- Include the **FusionCharts** theme file to apply the style to the maps.

The consolidated code is shown below:

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

That completes the installation of FusionCharts Suite and the `asp-net-wrapper`.

## Create Your First Map

We will create a visualization using the World Map showing the average annual population growth. The map will look as shown below:

{% embed_chart getting-started-your-first-map.js %}

## Map data

The data for the above map is represented in the table below:

| State | Entity Name | Value |
| ----- | ----------- | ----- ||
| North America | NA | 82 |
| South America | SA | 2.04 |
| Asia | AS | 1.78 |
| Europe | EU | 40 |
| Africa | AF | 2.58 |
| Australia | AU | 1.30 |

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

- Create the `chart` object to define the elements of the map.

- Create the `colorRange` array to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` array.

- Create the `data` array to define the id of the continents and their corresponding values along with configurations. For example, the first object under `data` array contains the `id` and `value` of **North America** as **NA** and **.82** respectively.

The chart object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the map.

Now that you have the data in JSON format, let's learn how to render the map.

## Render the Map

To render the map, follow the steps below:

1. Create the template (.aspx)

2. Include the **FusionCharts asp-net-wrapper** (for C#) OR **FusionCharts vb-net-wrapper** (for VB) in your project.

3. Include the `fusioncharts` core library.

4. Include the map renderer file.

5. Include the map definition file.

6. Include the FusionCharts theme file to apply the style to the charts.

7. Store the map configurations in an associative array.

8. Store the color range in a multidimensional array.

9. Create a data object within the map configurations to assign the associative data array to it.

10. Convert the final map configuration to JSON string.

11. Create the map instance and set the following:

    - Set the map type as `world`. Each map is represented with a unique alias. For California map, the alias is `california`. Find the complete list of map types with their respective aliases[ here](https://www.fusioncharts.com/dev/map-guide/list-of-maps).

    - Set the map `id`.

    - Set the `width` and `height` (in pixels).

    - Set the container for the map.

    - Set the `dataFormat` as **JSON**.

    - Embed the `json` data as the value of the `dataSource`.

12. Finally, use a container using `<div>` to render the map.

The full code for the above sample is given below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
using System;
using System.Collections.Generic;
using System.Text;
using FusionCharts.Charts;

public partial class firstmap : System.Web.UI.Page
{
//Create colorRange class
//It will store Min range Max range and specific color code for each range

    class ColorRange
    {
        public double Min
        {
            get;
            set;
        }
        public double Max
        {
            get;
            set;
        }
        public string ColorCode
        {
            get;
            set;
        }

        public ColorRange(double min, double max, string code)
        {
            Min = min;
            Max = max;
            ColorCode = code;
        }
    }
    //Create countryData class
    //It will store id, value and show label for each country

    class countryData
    {
        public string ID
        {
            get;
            set;
        }
        public double Value
        {
            get;
            set;
        }
        public int ShowLabel
        {
            get;
            set;
        }

        public countryData(string id, double value, int showLabel)
        {
            ID = id;
            Value = value;
            ShowLabel = showLabel;

        }

    }
    protected void Page_Load(object sender, EventArgs e)
    {
        // store chart config name-config value pair
        Dictionary&lt;string, string&gt; chartConfig = new Dictionary&lt;string, string&gt;();
        chartConfig.Add("caption", "Average Annual Population Growth");
        chartConfig.Add("subCaption", " 1955-2015");
        chartConfig.Add("includevalueinlabels", "1");
        chartConfig.Add("labelsepchar", ": ");
        chartConfig.Add("numberSuffix", "%");
        chartConfig.Add("entityFillHoverColor", "#FFF9C4");
        chartConfig.Add("theme", "fusion");

        // store color code for different range
        List&lt;ColorRange&gt; color = new List&lt;ColorRange&gt;();
        color.Add(new ColorRange(0.5, 1.0, "#FFD74D"));
        color.Add(new ColorRange(1.0, 2.0, "#FB8C00"));
        color.Add(new ColorRange(2.0, 3.0, "#E65100"));

        // store country data
        List&lt;countryData&gt; countries = new List&lt;countryData&gt;();
        countries.Add(new countryData("NA", .82, 1));
        countries.Add(new countryData("SA", 2.04, 1));
        countries.Add(new countryData("AS", 1.78, 1));
        countries.Add(new countryData("EU", .40, 1));
        countries.Add(new countryData("AF", 2.58, 1));
        countries.Add(new countryData("AU", 1.30, 1));

        // json data to use as chart data source
        StringBuilder jsonData = new StringBuilder();
        //build chart config object
        jsonData.Append("{'chart':{");
        foreach (var config in chartConfig)
        {
            jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value);
        }
        jsonData.Replace(",", "},", jsonData.Length - 1, 1);

        StringBuilder range = new StringBuilder();
        //build colorRange object
        range.Append("'colorRange':{");
        range.Append("'color':[");
        foreach (ColorRange clr in color)
        {
            range.AppendFormat("{{'minValue':'{0}','maxValue':'{1}','code':'{2}'}},", clr.Min, clr.Max, clr.ColorCode);
        }
        range.Replace(",", "]},", range.Length - 1, 1);

        // build data object
        StringBuilder data = new StringBuilder();
        data.Append("'data':[");
        foreach (countryData country in countries)
        {
            data.AppendFormat("{{'id':'{0}','value':'{1}','showLabel':'{2}'}},", country.ID, country.Value, country.ShowLabel);
        }
        data.Replace(",", "]", data.Length - 1, 1);
        jsonData.Append(range);
        jsonData.Append(data);
        jsonData.Append("}");
        //Create map instance
        // map type, mapid, width, height, data format, data

        Chart MyFirstMap = new Chart("world", "first_map", "800", "500", "json", jsonData.ToString());
        //render map
        Literal1.Text = MyFirstMap.Render();
    }

}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
<div class='tab vb-tab'>
<pre><code class="language-javascript">
    Imports FusionCharts.Charts
    Partial Class firstmap
    Inherits System.Web.UI.Page
    'Create colorRange class
    'It will store Min range Max range And specific color code for each range
    Class ColorRange
    Private lowerLimit As Double

    Private upprLimit As Double
    Private code As String
        'lower value of range set as property
    Property Min() As Double
    Get
    Return lowerLimit

    End Get
    Set(value As Double)
    lowerLimit = value
    End Set
    End Property
        'upper value of range set as property
    Property Max() As Double
    Get
    Return upprLimit

    End Get
    Set(value As Double)
    upprLimit = value
    End Set
    End Property
        ' specific color code for this range
    Property ColorCode() As String
    Get
    Return code

    End Get
    Set(value As String)
    code = value
    End Set
    End Property
        'constructor
    Public Sub New(ByVal lowerLimit As Double, ByVal upperLimit As Double, ByVal code As String)
    Min = lowerLimit
    Max = upperLimit
    ColorCode = code
    End Sub

    End Class
        'Create countryData class
    'It will store id, value And show label for each country
    Class CountryData
    Private cid As String
    Private cvalue As Double
    Private label As Integer
        'country id set as a property
    Property ID() As String
    Get
    Return cid

    End Get
    Set(value As String)
    cid = value
    End Set
    End Property
        'data value for a country set as property
    Property Value() As Double
    Get
    Return cvalue

    End Get
    Set(value As Double)
    cvalue = value
    End Set
    End Property
        ' whether show label or not
    Property ShowLabel() As Integer
    Get
    Return label

    End Get
    Set(value As Integer)
    label = value
    End Set
    End Property
        'constructor
    Public Sub New(ByVal cntryid As String, ByVal val As Double, ByVal lbl As Integer)
    ID = cntryid
    Value = val
    ShowLabel = lbl
    End Sub

    End Class
    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load ' store chart config name-config value pair
    Dim chartConfig As New Dictionary(Of String, String)
    chartConfig.Add("caption", "Average Annual Population Growth")
    chartConfig.Add("subCaption", " 1955-2015")
    chartConfig.Add("includevalueinlabels", "1")
    chartConfig.Add("labelsepchar", ": ")
    chartConfig.Add("numberSuffix", "%")
    chartConfig.Add("entityFillHoverColor", "#FFF9C4")
    chartConfig.Add("theme", "fusion")

    'store color code for different range
    Dim color As New List(Of ColorRange)
    color.Add(New ColorRange(0.5, 1.0, "#FFD74D"))
    color.Add(New ColorRange(1.0, 2.0, "#FB8C00"))
    color.Add(New ColorRange(2.0, 3.0, "#E65100"))

    'store country data
    Dim countries As New List(Of CountryData)
    countries.Add(New CountryData("NA", 0.82, 1))
    countries.Add(New CountryData("SA", 2.04, 1))
    countries.Add(New CountryData("AS", 1.78, 1))
    countries.Add(New CountryData("EU", 0.4, 1))
    countries.Add(New CountryData("AF", 2.58, 1))
    countries.Add(New CountryData("AU", 1.3, 1))

    'json data to use as chart data source
    Dim jsonData As New StringBuilder
        'build chart config object
    jsonData.Append("{'chart':{")
    For Each config In chartConfig

    jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value)
    Next
    jsonData.Replace(",", "},", jsonData.Length - 1, 1)

    Dim range As New StringBuilder
        'build colorRange object
    range.Append("'colorRange':{")
    range.Append("'color':[")
    For Each clr In color

    range.AppendFormat("{{'minValue':'{0}','maxValue':'{1}','code':'{2}'}},", clr.Min, clr.Max, clr.ColorCode)
    Next
    range.Replace(",", "]},", range.Length - 1, 1)

    'build data object
    Dim data As New StringBuilder
    data.Append("'data':[")
    For Each country In countries

    data.AppendFormat("{{'id':'{0}','value':'{1}','showLabel':'{2}'}},", country.ID, country.Value, country.ShowLabel)
    Next
    data.Replace(",", "]", data.Length - 1, 1)
    jsonData.Append(range)
    jsonData.Append(data)
    jsonData.Append("}")
    'Create map instance
    'map type, mapid, width, height, data format, data

    Dim MyFirstMap As New Chart("world", "first_map", "800", "500", "json", jsonData.ToString())
    'render map
    Literal1.Text = MyFirstMap.Render()
    End Sub

    End Class

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

The HTML template is shown below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="vb">VB</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab csharp-tab active">
<pre><code class="language-javascript">
    &lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="firstmap.aspx.cs" Inherits="firstmap" %&gt;
   &lt;!DOCTYPE html&gt;
    &lt;html xmlns="  http://www.w3.org/1999/xhtml" &gt;
    &lt;head runat="server"&gt;
        &lt;title&gt;fusioncharts&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt; 
        &lt;script src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script&gt; 
        &lt;script src=" https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.world.js"&gt;&lt;/script&gt; 
        &lt;script src=" https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt; 
            &lt;asp:Literal ID="Literal1" runat="server"&gt;Chart will appear here&lt;/asp:Literal&gt;
        &lt;/div&gt;
    &lt;/body&gt;
    &lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
<div class="tab vb-tab">
<pre><code class="language-javascript">
    &lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="firstmap.aspx.vb" Inherits="firstmap" %&gt;
    &lt;!DOCTYPE html&gt;
    &lt;html xmlns=" http://www.w3.org/1999/xhtml"&gt;
    &lt;head runat="server"&gt;
        &lt;title&gt;fusioncharts&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
       &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.world.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;form id="form1" runat="server"&gt;
            &lt;div&gt;
                &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
            &lt;/div&gt;
        &lt;/form&gt;
    &lt;/body&gt;
    &lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

That's it! The world map is ready.

## Render other Maps

To reduce the size of the package FusionCharts comes with only two maps, i.e., the World map and the USA map. However, FusionCharts provides 1600+ maps for you to explore. [Download ](https://www.fusioncharts.com/download/map-definition-files)the map files separately if you want to save them locally.

Let's create a map of California to show the "Web visits for a particular month" as shown below:

{% embed_chart getting-started-your-first-map-california.js %}

To render the above map, the following code is used:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
    using System;
using System.Collections.Generic;
using System.Text;
using FusionCharts.Charts;

public partial class MapTest : System.Web.UI.Page
{
//Create colorRange class
//It will store Min range Max range and specific color code for each range

    class ColorRange
    {
        public double Min
        {
            get;
            set;
        }
        public double Max
        {
            get;
            set;
        }
        public string ColorCode
        {
            get;
            set;
        }

        public ColorRange(double min, double max, string code)
        {
            Min = min;
            Max = max;
            ColorCode = code;
        }
    }
    //Create countryData class
    //It will store id, value and show label for each country

    class CountryData
    {
        public string ID
        {
            get;
            set;
        }
        public double Value
        {
            get;
            set;
        }
        public int ShowLabel
        {
            get;
            set;
        }

        public CountryData(string id, double value, int showLabel)
        {
            ID = id;
            Value = value;
            ShowLabel = showLabel;

        }

    }
    protected void Page_Load(object sender, EventArgs e)
    {
        // store chart config name-config value pair
        Dictionary&lt;string, string&gt; chartConfig = new Dictionary&lt;string, string&gt;();
        chartConfig.Add("animation", "0");
        chartConfig.Add("usehovercolor", "1");
        chartConfig.Add("showlegend", "1");
        chartConfig.Add("legendposition", "BOTTOM");
        chartConfig.Add("legendbordercolor", "ffffff");
        chartConfig.Add("legendallowdrag", "0");
        chartConfig.Add("legendshadow", "0");
        chartConfig.Add("caption", "Website Visits for the month of March 2018");
        chartConfig.Add("legendborderalpha", "0");
        chartConfig.Add("fillalpha", "80");
        chartConfig.Add("hovercolor", "CCCCCC");
        chartConfig.Add("theme", "fusion");


                // store color code for different range
        List&lt;ColorRange&gt; color = new List&lt;ColorRange&gt;();
        color.Add(new ColorRange(0, 1000, "#FFD74D"));;
        color.Add(new ColorRange(1001, 2500, "#FB8C00"));;
        color.Add(new ColorRange(2501, 5500, "#E65100"));;

        // store country data
        List&lt;CountryData&gt; countries = new List&lt;CountryData&gt;();
                countries.Add(new CountryData("001", 2834, 1));
                countries.Add(new CountryData("003", 3182, 1));
                countries.Add(new CountryData("005", 3280, 1));
                countries.Add(new CountryData("007", 911, 1));
                countries.Add(new CountryData("009", 292, 1));
                countries.Add(new CountryData("011", 530, 1));
                countries.Add(new CountryData("013", 2515, 1));
                countries.Add(new CountryData("015", 728, 1));
                countries.Add(new CountryData("017", 1974, 1));
                countries.Add(new CountryData("019", 848, 1));
                countries.Add(new CountryData("021", 3278, 1));
                countries.Add(new CountryData("023", 4463, 1));
                countries.Add(new CountryData("025", 1198, 1));
                countries.Add(new CountryData("027", 378, 1));
                countries.Add(new CountryData("029", 2610, 1));
                countries.Add(new CountryData("031", 1200, 1));
                countries.Add(new CountryData("033", 3820, 1));
                countries.Add(new CountryData("035", 940, 1));
                countries.Add(new CountryData("037", 3416, 1));
                countries.Add(new CountryData("039", 4004, 1));
                countries.Add(new CountryData("041", 1604, 1));
                countries.Add(new CountryData("043", 4011, 1));
                countries.Add(new CountryData("045", 3203, 1));
                countries.Add(new CountryData("047", 3775, 1));
                countries.Add(new CountryData("049", 2721, 1));
                countries.Add(new CountryData("051", 3417, 1));
                countries.Add(new CountryData("053", 1530, 1));
                countries.Add(new CountryData("055", 412, 1));
                countries.Add(new CountryData("057", 3434, 1));
                countries.Add(new CountryData("059", 1670, 1));
                countries.Add(new CountryData("061", 1274, 1));
                countries.Add(new CountryData("063", 4339, 1));
                countries.Add(new CountryData("065", 2073, 1));
                countries.Add(new CountryData("067", 1018, 1));
                countries.Add(new CountryData("069", 3967, 1));
                countries.Add(new CountryData("071", 3401, 1));
                countries.Add(new CountryData("073", 3307, 1));
                countries.Add(new CountryData("075", 1938, 1));
                countries.Add(new CountryData("077", 489, 1));
                countries.Add(new CountryData("079", 3207, 1));
                countries.Add(new CountryData("081", 2295, 1));
                countries.Add(new CountryData("083", 2747, 1));
                countries.Add(new CountryData("085", 1114, 1));
                countries.Add(new CountryData("087", 3400, 1));
                countries.Add(new CountryData("089", 784, 1));
                countries.Add(new CountryData("091", 1673, 1));
                countries.Add(new CountryData("093", 4274, 1));
                countries.Add(new CountryData("095", 4509, 1));
                countries.Add(new CountryData("097", 3862, 1));
                countries.Add(new CountryData("099", 1356, 1));
                countries.Add(new CountryData("101", 4126, 1));
                countries.Add(new CountryData("103", 1314, 1));
                countries.Add(new CountryData("105", 1807, 1));
                countries.Add(new CountryData("107", 4026, 1));
                countries.Add(new CountryData("109", 3456, 1));
                countries.Add(new CountryData("111", 1393, 1));
                countries.Add(new CountryData("113", 1500, 1));
                countries.Add(new CountryData("115", 2218, 1));


                // json data to use as chart data source
        StringBuilder jsonData = new StringBuilder();
        //build chart config object
        jsonData.Append("{'chart':{");
        foreach (var config in chartConfig)
        {
            jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value);
        }
        jsonData.Replace(",", "},", jsonData.Length - 1, 1);

        StringBuilder range = new StringBuilder();
        //build colorRange object
        range.Append("'colorRange':{");
        range.Append("'color':[");
        foreach (ColorRange clr in color)
        {
            range.AppendFormat("{{'minValue':'{0}','maxValue':'{1}','code':'{2}'}},", clr.Min, clr.Max, clr.ColorCode);
        }
        range.Replace(",", "]},", range.Length - 1, 1);

        // build data object
        StringBuilder data = new StringBuilder();
        data.Append("'data':[");
        foreach (CountryData country in countries)
        {
            data.AppendFormat("{{'id':'{0}','value':'{1}','showLabel':'{2}'}},", country.ID, country.Value, country.ShowLabel);
        }
        data.Replace(",", "]", data.Length - 1, 1);
        jsonData.Append(range);
        jsonData.Append(data);
        jsonData.Append("}");
        //Create map instance
        // map type, mapid, width, height, data format, data

        Chart MyFirstMap = new Chart("california", "first_map", "800", "500", "json", jsonData.ToString());;
        //render map
        Literal1.Text = MyFirstMap.Render();
    }

}

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
<div class='tab vb-tab'>
<pre><code class="language-javascript">
    Imports FusionCharts.Charts
Partial Class MapTest
    Inherits System.Web.UI.Page
    'Create colorRange class
    'It will store Min range Max range And specific color code for each range
    Class ColorRange
        Private lowerLimit As Double

        Private upprLimit As Double
        Private code As String
        'lower value of range set as property
        Property Min() As Double
            Get
                Return lowerLimit

            End Get
            Set(value As Double)
                lowerLimit = value
            End Set
        End Property
        'upper value of range set as property
        Property Max() As Double
            Get
                Return upprLimit

            End Get
            Set(value As Double)
                upprLimit = value
            End Set
        End Property
        ' specific color code for this range
        Property ColorCode() As String
            Get
                Return code

            End Get
            Set(value As String)
                code = value
            End Set
        End Property
        'constructor
        Public Sub New(ByVal lowerLimit As Double, ByVal upperLimit As Double, ByVal code As String)
            Min = lowerLimit
            Max = upperLimit
            ColorCode = code
        End Sub

    End Class
    'Create countryData class
    'It will store id, value And show label for each country
    Class CountryData
        Private cid As String
        Private cvalue As Double
        Private label As Integer
        'country id set as a property
        Property ID() As String
            Get
                Return cid

            End Get
            Set(value As String)
                cid = value
            End Set
        End Property
        'data value for a country set as property
        Property Value() As Double
            Get
                Return cvalue

            End Get
            Set(value As Double)
                cvalue = value
            End Set
        End Property
        ' whether show label or not
        Property ShowLabel() As Integer
            Get
                Return label

            End Get
            Set(value As Integer)
                label = value
            End Set
        End Property
        'constructor
        Public Sub New(ByVal cntryid As String, ByVal val As Double, ByVal lbl As Integer)
            ID = cntryid
            Value = val
            ShowLabel = lbl
        End Sub

    End Class
    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load ' store chart config name-config value pair
        Dim chartConfig As New Dictionary(Of String, String)
        chartConfig.Add("animation", "0")
        chartConfig.Add("usehovercolor", "1")
        chartConfig.Add("showlegend", "1")
        chartConfig.Add("legendposition", "BOTTOM")
        chartConfig.Add("legendborderalpha", "0")
        chartConfig.Add("legendbordercolor", "ffffff")
        chartConfig.Add("legendallowdrag", "0")
        chartConfig.Add("legendshadow", "0")
        chartConfig.Add("caption", "Website Visits for the month of March 2018")
        chartConfig.Add("fillalpha", "80")
        chartConfig.Add("hovercolor", "CCCCCC")
        chartConfig.Add("theme", "fusion")

        'store color code for different range
        Dim color As New List(Of ColorRange)
        color.Add(New ColorRange(0, 1000, "#FFD74D"))
        color.Add(New ColorRange(1001, 2500, "#FB8C00"))
        color.Add(New ColorRange(2501, 5500, "#E65100"))

        'store country data
        Dim countries As New List(Of CountryData)
        countries.Add(New CountryData("001", 2834, 1))
        countries.Add(New CountryData("003", 3182, 1))
        countries.Add(New CountryData("005", 3280, 1))
        countries.Add(New CountryData("007", 911, 1))
        countries.Add(New CountryData("009", 292, 1))
        countries.Add(New CountryData("011", 530, 1))
        countries.Add(New CountryData("013", 2515, 1))
        countries.Add(New CountryData("015", 728, 1))
        countries.Add(New CountryData("017", 1974, 1))
        countries.Add(New CountryData("019", 848, 1))
        countries.Add(New CountryData("021", 3278, 1))
        countries.Add(New CountryData("023", 4463, 1))
        countries.Add(New CountryData("025", 1198, 1))
        countries.Add(New CountryData("027", 378, 1))
        countries.Add(New CountryData("029", 2610, 1))
        countries.Add(New CountryData("031", 1200, 1))
        countries.Add(New CountryData("033", 3820, 1))
        countries.Add(New CountryData("035", 940, 1))
        countries.Add(New CountryData("037", 3416, 1))
        countries.Add(New CountryData("039", 4004, 1))
        countries.Add(New CountryData("041", 1604, 1))
        countries.Add(New CountryData("043", 4011, 1))
        countries.Add(New CountryData("045", 3203, 1))
        countries.Add(New CountryData("047", 3775, 1))
        countries.Add(New CountryData("049", 2721, 1))
        countries.Add(New CountryData("051", 3417, 1))
        countries.Add(New CountryData("053", 1530, 1))
        countries.Add(New CountryData("055", 412, 1))
        countries.Add(New CountryData("057", 3434, 1))
        countries.Add(New CountryData("059", 1670, 1))
        countries.Add(New CountryData("061", 1274, 1))
        countries.Add(New CountryData("063", 4339, 1))
        countries.Add(New CountryData("065", 2073, 1))
        countries.Add(New CountryData("067", 1018, 1))
        countries.Add(New CountryData("069", 3967, 1))
        countries.Add(New CountryData("071", 3401, 1))
        countries.Add(New CountryData("073", 3307, 1))
        countries.Add(New CountryData("075", 1938, 1))
        countries.Add(New CountryData("077", 489, 1))
        countries.Add(New CountryData("079", 3207, 1))
        countries.Add(New CountryData("081", 2295, 1))
        countries.Add(New CountryData("083", 2747, 1))
        countries.Add(New CountryData("085", 1114, 1))
        countries.Add(New CountryData("087", 3400, 1))
        countries.Add(New CountryData("089", 784, 1))
        countries.Add(New CountryData("091", 1673, 1))
        countries.Add(New CountryData("093", 4274, 1))
        countries.Add(New CountryData("095", 4509, 1))
        countries.Add(New CountryData("097", 3862, 1))
        countries.Add(New CountryData("099", 1356, 1))
        countries.Add(New CountryData("101", 4126, 1))
        countries.Add(New CountryData("103", 1314, 1))
        countries.Add(New CountryData("105", 1807, 1))
        countries.Add(New CountryData("107", 4026, 1))
        countries.Add(New CountryData("109", 3456, 1))
        countries.Add(New CountryData("111", 1393, 1))
        countries.Add(New CountryData("113", 1500, 1))
        countries.Add(New CountryData("115", 2218, 1))

        'json data to use as chart data source
        Dim jsonData As New StringBuilder
        'build chart config object
        jsonData.Append("{'chart':{")
        For Each config In chartConfig

            jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value)
        Next
        jsonData.Replace(",", "},", jsonData.Length - 1, 1)

        Dim range As New StringBuilder
        'build colorRange object
        range.Append("'colorRange':{")
        range.Append("'color':[")
        For Each clr In color

            range.AppendFormat("{{'minValue':'{0}','maxValue':'{1}','code':'{2}'}},", clr.Min, clr.Max, clr.ColorCode)
        Next
        range.Replace(",", "]},", range.Length - 1, 1)

        'build data object
        Dim data As New StringBuilder
        data.Append("'data':[")
        For Each country In countries

            data.AppendFormat("{{'id':'{0}','value':'{1}','showLabel':'{2}'}},", country.ID, country.Value, country.ShowLabel)
        Next
        data.Replace(",", "]", data.Length - 1, 1)
        jsonData.Append(range)
        jsonData.Append(data)
        jsonData.Append("}")
        'Create map instance
        'map type, mapid, width, height, data format, data

        Dim MyFirstMap As New Chart("california", "first_map", "800", "500", "json", jsonData.ToString())
        'render map
        Literal1.Text = MyFirstMap.Render()
    End Sub

End Class

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

The HTML template is shown below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="vb">VB</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab csharp-tab active">
<pre><code class="language-javascript">
    &lt;%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MapTest.aspx.cs" Inherits="MapTest.index" %&gt;

    &lt;!DOCTYPE html&gt;

    &lt;html xmlns=" http://www.w3.org/1999/xhtml"&gt;

    &lt;head runat="server"&gt;
        &lt;title&gt;fusioncharts&lt;/title&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.california.js"&gt;&lt;/script>
        &lt;script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
    &lt;/body&gt;

    &lt;/html&gt;

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
<div class="tab vb-tab">
<pre><code class="language-javascript">
    &lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="MapTest.aspx.vb" Inherits="MapTest" %&gt;

&lt;!DOCTYPE html&gt;
&lt;html xmlns=" http://www.w3.org/1999/xhtml" &gt;
&lt;head runat="server"&gt;
&lt;title&gt;fusioncharts&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js"&gt;&lt;/script&gt;
&lt;script src=" https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.california.js"&gt;&lt;/script&gt;
&lt;script src=" https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

That's it! The California map is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the map, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
