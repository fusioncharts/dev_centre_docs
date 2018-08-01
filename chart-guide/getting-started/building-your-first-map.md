---
permalink: getting-started/building-your-map.html
title: Your First Map | FusionCharts
description: This article talks how to create your first map using FusionMaps. An example illustrates each and every step to build a map
heading: Your First Map
chartPresent: true
breadcrumb: [["Home", "/"], ["Your First Map"]]
---

Harry's SuperMart has stores in multiple US states. Harry wants to keep a tab on the sales numbers across all these states. While he can easily put those in a column chart and compare, the context of location would be lost, and the chart will become illegible if he had to plot all the states. Additionally, Harry has thresholds that let him segregate states by low, moderate and high in terms of sales figures.

To solve this, we will use a US Map to represent his sales, which colors each state based on the sales. Additionally, it provides an interactive slider for Harry to narrow down to specific states, based on a selected range of sales values.

The final map would look as shown below:

{% embed_chart getting-started-your-first-map.js %}

The data used in this map is shown below:

State|Entity|Name Revenue|
-|-|-
Alabama|AL|$75,873M|
Alaska|AK|$58,911M|
Arizona|AZ|$41,588M|
Arkansas|AR|$34,497M|
California|CA|$61,861M|
…|…|…|
…|…|…|
West Virginia|WV|$95,890M|
Wisconsin|WI|$42,382M|
Wyoming|WY|$78,835M|

Maps in FusionCharts Suite XT are provided as part of FusionMaps XT. FusionMaps XT helps you display geographical data distributed by category, regions or entities using animated and interactive maps. You can use it to plot business data like revenue by regions, census data like population by state, election results, flight routes, office locations and survey results effectively.

Let's now start building the map.

## Convert data to JSON/XML format

Here is the JSON/XML representation of the data you will use to build this map

{% embed_data getting-started-your-first-map.js %}

## Include FusionCharts Suite XT library

To include the FusionCharts Suite XT JavaScript library in your HTML page, use the `<script>` tag. Next, include a theme file to style the chart. The theme is called `fusion`, present in `themes` folder of your download.

```
<html>

<head>
    <title>My First map using FusionMaps XT</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fusion.js"></script>
</head>

</html>

```
## Create a container for your map

Next, create a container for your map in the form of a `<div>` element, as shown below:

```
<body>
    <div id="chartContainer">A US map will load here!</div>
</body>

```
This will allow to refer the `chartContainer` id and render a map in this space.

## Create an instance of the map

The final step is to create an instance of the map, initialize with the correct width and height and then set the JSON data source. Refer to the code below:

```
<script type="text/javascript">
    FusionCharts.ready(  function  () { 
        var  salesByState =   new  FusionCharts({
            "type" :  "maps/usa",
            "renderAt" :  "chartContainer",
            "width" :  "600",
            "height" :  "400",
            "dataFormat" :  "json",
            "dataSource" :  {
                "chart" :  {
                    "caption" :  "Annual Sales by State",
                    "subcaption" :  "Last year",
                    "entityFillHoverColor" :  "#cccccc",
                    "numberScaleValue" :  "1,1000,1000",
                    "numberScaleUnit" :  "K,M,B",
                    "numberPrefix" :  "$",
                    "showLabels" :  "1",
                    "theme" :  "fusion"
                },
                "colorrange" :  {
                    "minvalue" :  "0",
                    "startlabel" :  "Low",
                    "endlabel" :  "High",
                    "code" :  "#e44a00",
                    "gradient" :  "1",
                    "color" :  [{
                            "maxvalue" :  "56580",
                            "displayvalue" :  "Average",
                            "code" :  "#f8bd19"
                        },
                        {
                            "maxvalue" :  "100000",
                            "code" :  "#6baa01"
                        }
                    ]
                },
                "data" :  [{
                        "id" :  "HI",
                        "value" :  "3189"
                    },
                    {
                        "id" :  "DC",
                        "value" :  "2879"
                    },
                    {
                        "id" :  "MD",
                        "value" :  "920"
                    },
                    {
                        "id" :  "DE",
                        "value" :  "4607"
                    },
                    {
                        "id" :  "RI",
                        "value" :  "4890"
                    },
                    {
                        "id" :  "WA",
                        "value" :  "34927"
                    },
                    {
                        "id" :  "OR",
                        "value" :  "65798"
                    },
                    {
                        "id" :  "CA",
                        "value" :  "61861"
                    },
                    {
                        "id" :  "AK",
                        "value" :  "58911"
                    },
                    {
                        "id" :  "ID",
                        "value" :  "42662"
                    },
                    {
                        "id" :  "NV",
                        "value" :  "78041"
                    },
                    {
                        "id" :  "AZ",
                        "value" :  "41558"
                    },
                    {
                        "id" :  "MT",
                        "value" :  "62942"
                    },
                    {
                        "id" :  "WY",
                        "value" :  "78834"
                    },
                    {
                        "id" :  "UT",
                        "value" :  "50512"
                    },
                    {
                        "id" :  "CO",
                        "value" :  "73026"
                    },
                    {
                        "id" :  "NM",
                        "value" :  "78865"
                    },
                    {
                        "id" :  "ND",
                        "value" :  "50554"
                    },
                    {
                        "id" :  "SD",
                        "value" :  "35922"
                    },
                    {
                        "id" :  "NE",
                        "value" :  "43736"
                    },
                    {
                        "id" :  "KS",
                        "value" :  "32681"
                    },
                    {
                        "id" :  "OK",
                        "value" :  "79038"
                    },
                    {
                        "id" :  "TX",
                        "value" :  "75425"
                    },
                    {
                        "id" :  "MN",
                        "value" :  "43485"
                    },
                    {
                        "id" :  "IA",
                        "value" :  "46515"
                    },
                    {
                        "id" :  "MO",
                        "value" :  "63715"
                    },
                    {
                        "id" :  "AR",
                        "value" :  "34497"
                    },
                    {
                        "id" :  "LA",
                        "value" :  "70706"
                    },
                    {
                        "id" :  "WI",
                        "value" :  "42382"
                    },
                    {
                        "id" :  "IL",
                        "value" :  "73202"
                    },
                    {
                        "id" :  "KY",
                        "value" :  "79118"
                    },
                    {
                        "id" :  "TN",
                        "value" :  "44657"
                    },
                    {
                        "id" :  "MS",
                        "value" :  "66205"
                    },
                    {
                        "id" :  "AL",
                        "value" :  "75873"
                    },
                    {
                        "id" :  "GA",
                        "value" :  "76895"
                    },
                    {
                        "id" :  "MI",
                        "value" :  "67695"
                    },
                    {
                        "id" :  "IN",
                        "value" :  "33592"
                    },
                    {
                        "id" :  "OH",
                        "value" :  "32960"
                    },
                    {
                        "id" :  "PA",
                        "value" :  "54346"
                    },
                    {
                        "id" :  "NY",
                        "value" :  "42828"
                    },
                    {
                        "id" :  "VT",
                        "value" :  "77411"
                    },
                    {
                        "id" :  "NH",
                        "value" :  "51403"
                    },
                    {
                        "id" :  "ME",
                        "value" :  "64636"
                    },
                    {
                        "id" :  "MA",
                        "value" :  "51767"
                    },
                    {
                        "id" :  "CT",
                        "value" :  "57353"
                    },
                    {
                        "id" :  "NJ",
                        "value" :  "80788"
                    },
                    {
                        "id" :  "WV",
                        "value" :  "95890"
                    },
                    {
                        "id" :  "VA",
                        "value" :  "83140"
                    },
                    {
                        "id" :  "NC",
                        "value" :  "97344"
                    },
                    {
                        "id" :  "SC",
                        "value" :  "88234"
                    },
                    {
                        "id" :  "FL",
                        "value" :  "88234"
                    }
                ]
            }
        });
        salesByState.render();
    });
</script>

```

In the above code:

* We created an instance of the `FusionCharts()` object in the `salesByState` variable. Each map in your HTML page needs to have a separate variable. The initialization code is wrapped within `FusionCharts.ready()` method. This safeguards your map instantiation code from being called before FusionCharts Suite XT library is loaded and is ready to be used on the page.

* We instantiated the USA map for this example. Each map in FusionCharts Suite XT has a unique alias. [You can find the list of all maps and their aliases here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html). The default package ships only with a US and World map. But, you can download all the other 965 maps [here](https://www.fusioncharts.com/download/maps/definition).

* Next, we specified the `width` and `height` of the map (in pixels) using the width and height property of the constructor.

* To specify the data format as JSON, we set the `dataFormat` parameter to json.

* The actual JSON data is embedded as the string value of `dataSource` parameter. 

* The `map` object contains a list of key-value pairs that lets you configure the functional and cosmetic attributes of your map. 

* The `colorrange` object lets you define different numeric ranges, each associated with a `color`, to indicate progressive thresholds.

* Call the `render` method to render the map on the `chartContainer <div>` element.

That's it! You have configured your first Map.

The full HTML code is shwon below:

```
<html>

<head>
    <title>My First map using FusionCharts Suite XT</title>
    <script type="text/javascript" src="fusioncharts/js/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/js/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function() {
            var salesByState = new FusionCharts({
                "type": "maps/usa",
                "renderAt": "chartContainer",
                "width": "600",
                "height": "400",
                "dataFormat": "json",
                "dataSource": {
                    "chart": {
                        "caption": "Annual Sales by State",
                        "subcaption": "Last year",
                        "entityFillHoverColor": "#cccccc",
                        "numberScaleValue": "1,1000,1000",
                        "numberScaleUnit": "K,M,B",
                        "numberPrefix": "$",
                        "showLabels": "1",
                        "theme": "fusion"
                    },
                    "colorrange": {
                        "minvalue": "0",
                        "startlabel": "Low",
                        "endlabel": "High",
                        "code": "#e44a00",
                        "gradient": "1",
                        "color": [{
                                "maxvalue": "56580",
                                "displayvalue": "Average",
                                "code": "#f8bd19"
                            },
                            {
                                "maxvalue": "100000",
                                "code": "#6baa01"
                            }
                        ]
                    },
                    "data": [{
                            "id": "HI",
                            "value": "3189"
                        },
                        {
                            "id": "DC",
                            "value": "2879"
                        },
                        {
                            "id": "MD",
                            "value": "920"
                        },
                        {
                            "id": "DE",
                            "value": "4607"
                        },
                        {
                            "id": "RI",
                            "value": "4890"
                        },
                        {
                            "id": "WA",
                            "value": "34927"
                        },
                        {
                            "id": "OR",
                            "value": "65798"
                        },
                        {
                            "id": "CA",
                            "value": "61861"
                        },
                        {
                            "id": "AK",
                            "value": "58911"
                        },
                        {
                            "id": "ID",
                            "value": "42662"
                        },
                        {
                            "id": "NV",
                            "value": "78041"
                        },
                        {
                            "id": "AZ",
                            "value": "41558"
                        },
                        {
                            "id": "MT",
                            "value": "62942"
                        },
                        {
                            "id": "WY",
                            "value": "78834"
                        },
                        {
                            "id": "UT",
                            "value": "50512"
                        },
                        {
                            "id": "CO",
                            "value": "73026"
                        },
                        {
                            "id": "NM",
                            "value": "78865"
                        },
                        {
                            "id": "ND",
                            "value": "50554"
                        },
                        {
                            "id": "SD",
                            "value": "35922"
                        },
                        {
                            "id": "NE",
                            "value": "43736"
                        },
                        {
                            "id": "KS",
                            "value": "32681"
                        },
                        {
                            "id": "OK",
                            "value": "79038"
                        },
                        {
                            "id": "TX",
                            "value": "75425"
                        },
                        {
                            "id": "MN",
                            "value": "43485"
                        },
                        {
                            "id": "IA",
                            "value": "46515"
                        },
                        {
                            "id": "MO",
                            "value": "63715"
                        },
                        {
                            "id": "AR",
                            "value": "34497"
                        },
                        {
                            "id": "LA",
                            "value": "70706"
                        },
                        {
                            "id": "WI",
                            "value": "42382"
                        },
                        {
                            "id": "IL",
                            "value": "73202"
                        },
                        {
                            "id": "KY",
                            "value": "79118"
                        },
                        {
                            "id": "TN",
                            "value": "44657"
                        },
                        {
                            "id": "MS",
                            "value": "66205"
                        },
                        {
                            "id": "AL",
                            "value": "75873"
                        },
                        {
                            "id": "GA",
                            "value": "76895"
                        },
                        {
                            "id": "MI",
                            "value": "67695"
                        },
                        {
                            "id": "IN",
                            "value": "33592"
                        },
                        {
                            "id": "OH",
                            "value": "32960"
                        },
                        {
                            "id": "PA",
                            "value": "54346"
                        },
                        {
                            "id": "NY",
                            "value": "42828"
                        },
                        {
                            "id": "VT",
                            "value": "77411"
                        },
                        {
                            "id": "NH",
                            "value": "51403"
                        },
                        {
                            "id": "ME",
                            "value": "64636"
                        },
                        {
                            "id": "MA",
                            "value": "51767"
                        },
                        {
                            "id": "CT",
                            "value": "57353"
                        },
                        {
                            "id": "NJ",
                            "value": "80788"
                        },
                        {
                            "id": "WV",
                            "value": "95890"
                        },
                        {
                            "id": "VA",
                            "value": "83140"
                        },
                        {
                            "id": "NC",
                            "value": "97344"
                        },
                        {
                            "id": "SC",
                            "value": "88234"
                        },
                        {
                            "id": "FL",
                            "value": "88234"
                        }
                    ]
                }
            });
            salesByState.render();
        });
    </script>
</head>

<body>
    <div id="chartContainer">FusionMaps XT will load s map here!</div>
</body>

</html>

```
Now view the page in a browser, you should see an interactive 2D Map, showing state-wise sales for Harry's SuperMart. This map works seamlessly across mobile devices like iPhones, iPads, Android devices, etc.

## Problem rendering the map?

In case something went wrong, and you are unable to see the map, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, and there are no conflicts related to quotation marks in your code.

Click here for more information on [Troubleshooting](https://www.fusioncharts.com/dev/troubleshooting/debugger.html).

