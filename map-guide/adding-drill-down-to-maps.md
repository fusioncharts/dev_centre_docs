---
permalink: map-guide/adding-drill-down-to-maps.html
title: Adding Drill Down to Maps | FusionCharts
description: Maps as part of FusionCharts Suite XT support two types of drill down. This section will walk you through setting up drill down functionality for your maps.
heading: Adding Drill Down to Maps
chartPresent: true
---

Maps as part of FusionCharts Suite XT support two types of drill down. This section will walk you through setting up drill down functionality for your maps.

## Simple drill down map

Using this method, you can specify custom URLs or JavaScript methods to be invoked for each entity or marker on your map. When a user clicks the respective entity, the map will invoke that method, or redirect to the specific URL. If it's a URL, you can configure whether to open the URL in the same page, a new window in a pop-up or a frame.

Shown below are some of the ways in which you can use simple links with your maps

### Invoke JavaScript methods in the scope of the page

It is possible to call JavaScript methods when users interact with entities or markers in your maps.

Shown here is a US map where each entity calls an external Google Maps API.

{% embed_chart map-guide-adding-drill-down-link.js %}

{% embed_data map-guide-adding-drill-down-link.js %}

Clicking on an entity opens up a pop up window with a full map of the state you clicked on.

Instructions on building the base US map and the data used can be found [here](/getting-started/building-your-map)

Shown here is a snippet that configures the behaviour of the drill down as part of the entity.

```javascript
{
    "id": "DC",
    "value": "2879000",
    "link": "j-drillDownState-DC|District of Columbia"
}
```

Here is the full HTML code to build the map

```html
<html>
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
<script>
FusionCharts.ready(function() {
    var salesMap = new FusionCharts({
        type: 'maps/usa',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Annual Sales by State",
                "subcaption": "Last year",
                "entityFillHoverColor": "#cccccc",
                "numberPrefix": "$",
                "showLabels": "1",
                "theme": "fint"
            },
            "colorrange": {
                "minvalue": "920000",
                "startlabel": "Low",
                "endlabel": "High",
                "code": "#e44a00",
                "gradient": "1",
                "color": [{
                    "maxvalue": "56580000",
                    "displayvalue": "Average",
                    "code": "#f8bd19"
                }, {
                    "maxvalue": "97400000",
                    "code": "#6baa01"
                }]
            },
            "data": [{
                "id": "HI",
                "value": "3189000",
                "link": "j-drillDownState-HI|Hawaii"
            }, {
                "id": "DC",
                "value": "2879000",
                "link": "j-drillDownState-DC|District of Columbia"
            }, {
                "id": "MD",
                "value": "33592000",
                "link": "j-drillDownState-MD|Maryland"
            }, {
                "id": "DE",
                "value": "4607000",
                "link": "j-drillDownState-DE|Delaware"
            }, {
                "id": "RI",
                "value": "4890000",
                "link": "j-drillDownState-RI|Rhode Island"
            }, {
                "id": "WA",
                "value": "34927000",
                "link": "j-drillDownState-WA|Washington"
            }, {
                "id": "OR",
                "value": "65798000",
                "link": "j-drillDownState-OR|Oregon"
            }, {
                "id": "CA",
                "value": "61861000",
                "link": "j-drillDownState-CA|California"
            }, {
                "id": "AK",
                "value": "58911000",
                "link": "j-drillDownState-AK|Alaska"
            }, {
                "id": "ID",
                "value": "42662000",
                "link": "j-drillDownState-ID|Idaho"
            }, {
                "id": "NV",
                "value": "78041000",
                "link": "j-drillDownState-NV|Nevada"
            }, {
                "id": "AZ",
                "value": "41558000",
                "link": "j-drillDownState-AZ|Arizona"
            }, {
                "id": "MT",
                "value": "62942000",
                "link": "j-drillDownState-MT|Montana"
            }, {
                "id": "WY",
                "value": "78834000",
                "link": "j-drillDownState-WY|Wyoming"
            }, {
                "id": "UT",
                "value": "50512000",
                "link": "j-drillDownState-UT|Utah"
            }, {
                "id": "CO",
                "value": "73026000",
                "link": "j-drillDownState-CO|Colorado"
            }, {
                "id": "NM",
                "value": "78865000",
                "link": "j-drillDownState-NM|New Mexico"
            }, {
                "id": "ND",
                "value": "50554000",
                "link": "j-drillDownState-ND|North Dakota"
            }, {
                "id": "SD",
                "value": "35922000",
                "link": "j-drillDownState-SD|South Dakota"
            }, {
                "id": "NE",
                "value": "43736000",
                "link": "j-drillDownState-NE|Nebraska"
            }, {
                "id": "KS",
                "value": "32681000",
                "link": "j-drillDownState-KS|Kansas"
            }, {
                "id": "OK",
                "value": "79038000",
                "link": "j-drillDownState-OK|Oklahoma"
            }, {
                "id": "TX",
                "value": "97344000",
                "link": "j-drillDownState-TX|Texas"
            }, {
                "id": "MN",
                "value": "43485000",
                "link": "j-drillDownState-MN|Minnesota"
            }, {
                "id": "IA",
                "value": "46515000",
                "link": "j-drillDownState-IA|Iowa"
            }, {
                "id": "MO",
                "value": "63715000",
                "link": "j-drillDownState-MO|Missouri"
            }, {
                "id": "AR",
                "value": "34497000",
                "link": "j-drillDownState-AR|Arkansas"
            }, {
                "id": "LA",
                "value": "70706000",
                "link": "j-drillDownState-LA|Louisiana"
            }, {
                "id": "WI",
                "value": "42382000",
                "link": "j-drillDownState-WI|Wisconsin"
            }, {
                "id": "IL",
                "value": "73202000",
                "link": "j-drillDownState-IL|Illinois"
            }, {
                "id": "KY",
                "value": "79118000",
                "link": "j-drillDownState-KY|Kentucky"
            }, {
                "id": "TN",
                "value": "44657000",
                "link": "j-drillDownState-TN|Tennessee"
            }, {
                "id": "MS",
                "value": "66205000",
                "link": "j-drillDownState-MS|Mississippi"
            }, {
                "id": "AL",
                "value": "75873000",
                "link": "j-drillDownState-AL|Alabama"
            }, {
                "id": "GA",
                "value": "76895000",
                "link": "j-drillDownState-GA|Georgia"
            }, {
                "id": "MI",
                "value": "67695000",
                "link": "j-drillDownState-MI|Michigan"
            }, {
                "id": "IN",
                "value": "920000",
                "link": "j-drillDownState-IN|Indiana"
            }, {
                "id": "OH",
                "value": "32960000",
                "link": "j-drillDownState-OH|Ohio"
            }, {
                "id": "PA",
                "value": "54346000",
                "link": "j-drillDownState-PA|Pennsylvania"
            }, {
                "id": "NY",
                "value": "42828000",
                "link": "j-drillDownState-NY|New York"
            }, {
                "id": "VT",
                "value": "77411000",
                "link": "j-drillDownState-VT|Vermont"
            }, {
                "id": "NH",
                "value": "51403000",
                "link": "j-drillDownState-NH|New Hampshire"
            }, {
                "id": "ME",
                "value": "64636000",
                "link": "j-drillDownState-ME|Maine"
            }, {
                "id": "MA",
                "value": "51767000",
                "link": "j-drillDownState-MA|Massachusetts"
            }, {
                "id": "CT",
                "value": "57353000",
                "link": "j-drillDownState-CT|Connecticut"
            }, {
                "id": "NJ",
                "value": "80788000",
                "link": "j-drillDownState-NJ|New Jersey"
            }, {
                "id": "WV",
                "value": "95890000",
                "link": "j-drillDownState-WV|West Virginia"
            }, {
                "id": "VA",
                "value": "83140000",
                "link": "j-drillDownState-VA|Virginia"
            }, {
                "id": "NC",
                "value": "75425000",
                "link": "j-drillDownState-NC|North Carolina"
            }, {
                "id": "SC",
                "value": "88234000",
                "link": "j-drillDownState-SC|South Carolina"
            }, {
                "id": "FL",
                "value": "88234000",
                "link": "j-drillDownState-FL|Florida"
            }]
        }
    }).render();
    //Function that gets invoked when entity is clicked.
    function drillDownState(stateName) {
            //Get the name of state that was clicked
            var names = stateName && stateName.split('|'),
                sn = names && names[0],
                ln = names && names[1];
            //If Washington, do special case (just for example)
            if ((sn === 'WA' && ln === 'Washington')) {
                window.open("https://www.google.com/maps/place/USA-" + sn);
            } else {
                window.open("https://www.google.com/maps/place/USA-" + ln);
            }
        }
        //expose to the window scope
    window.drillDownState = drillDownState;
});
</script>
</head>
<body>
    <div id="chart-container">A world map will load here!</div>
</body>
</html>
```

Here the `drillDownState` method is called and the `DC|District of Columbia` is passed to it as parameter.

### Open a URL in the same page

In the example shown below when a user clicks on the entity labelled DC, the url specified in `link` opens up in the same page.

```javascript
{
    "id": "DC",
    "value": "2879000",
    "link": "Detailed/TotalSales.html"
}
```

### Open a URL in a new browser window

In this example, when a user clicks on the entity labelled DC, the url specified in `link` opens up in a new browser window

```javascript
{
    "id": "DC",
    "value": "2879000",
    "link": "n-Detailed/TotalSales.html"
}
```

### Open a URL in a specified frame/iframe

In this example, when a user clicks on the entity labelled DC, the url specified in `link` opens up in a frame or iframe within the same browser window

```javascript
{
    "id": "DC",
    "value": "2879000",
    "link": "F-Detailed/TotalSales.html"
}
```

### Open a URL in a pop-up window

In this example, when a user clicks on the entity labelled DC, the url specified in `link` opens up in a pop up.

```javascript
{
   "id": "DC",
    "value": "2879000",
    "link": "P-detailsPopUp,width=400,height=300,toolbar=no, scrollbars=no,resizable=no-Detailed/TotalSales.html"
}

```

Here additionally the height, width, toolbar visibility and resizability of the new window are configured.

## LinkedCharts using Maps

LinkedCharts lets you provide a reference to a new chart altogether, which opens upon a users click, instead of specifying custom URLs or JavaScript methods to the `link` attribute. The new chart is called dependent chart, which is a child of parent chart.

All the links originate from a parent chart. The data of the parent chart contains data for all descendant charts also called the linked data. The descendant charts can be configured to either replace the parent chart with an option to drill back up to the parent, or open in new dialogs or frames. The `link` attribute must be configured for this behaviour just as shown in the previous section.

### LinkedCharts from one map to another

Here we will look at how one map can be configured to open another map when a user clicks on an entity.

Shown below is a World population density map. Clicking on the North America entity opens up a US map showing population density by state

{% embed_chart map-guide-adding-drill down -configurelink.js %}

{% embed_data map-guide-adding-drill down -configurelink.js %}

This is what we did in the above data structure

* Created a World population density map as shown in (/map-guide/customizing-your-map) article.  Set the `link` attribute for the North America entity as `"newchart-json-NA"`. The `newchart` modifier specifies that this `link` is to open a new chart instance.

* The `newchart` modifier is followed by a hyphen (-) and then the data format for the new chart is specified. Here it is set to `json`, whereas for the XML data, it is defined as `xml`. When using data URL method, you can specify `xmlurl` or `jsonurl` as its value.

* The rest of the value, after a hyphen again (-), of the `link` attribute defines the data source. When `json` or `xml` is set as the data format, the data is taken from a specific `id` of a `linkeddata` element in the same JSON data. If it is set to `xmlurl` or `jsonurl` it its taken from the path specified.

* Next we specified the complete data needed for the descendant charts in the `linkeddata` object of the parent chart. Each element of `linkeddata` is an Object with 2 properties - `id` and `linkedchart` . `id` is used to map data for each descendent chart with its parent chart, and should be unique for each item. `linkedchart` attribute contains the full data for the specific descendant chart as string (JSON or XML).

* Finally we used the `configurelink` before calling the `render` method to set properties specific to the descendant chart. In this example we are setting the `type` of the chart to `maps/usa` and configuring the `overlay` object which controls how the back button looks.

The full HTML code for this example is shown below.

```html
<html>
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
<script>
FusionCharts.ready(function() {
    var populationMap = new FusionCharts({
        type: 'maps/world',
        renderAt: 'chart-container',
        width: '700',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "World Population Density",
                "subcaption": "Number of people per Square Mile",
                "theme": "fint",
                "formatNumberScale": "0",
                "showLabels": "1",
                "nullEntityColor": "#C2C2D6",
                "nullEntityAlpha": "50",
                "hoverOnNull": "0",
                "useSNameInLabels": "0",
                "entityFillColor": "#A8A8A8",
                "entityFillHoverColor": "#E5E5E9"
            },
            "colorrange": {
                "startlabel": "Low",
                "endlabel": "High",
                "code": "#e44a00",
                "minvalue": "0",
                "gradient": "1",
                "color": [{
                    "maxvalue": "60",
                    "displayvalue": "Average",
                    "code": "#f8bd19"
                }, {
                    "maxvalue": "300",
                    "code": "#6baa01"
                }]
            },
            "data": [{
                "id": "NA",
                "displayValue": "North America",
                "value": "57.2",
                "link": "newchart-json-NA"
            }, {
                "id": "SA",
                "value": "57.1",
                "showLabel": "1",
            }, {
                "id": "AS",
                "value": "247",
                "showLabel": "1",
            }, {
                "id": "EU",
                "value": "188.5",
                "showLabel": "1",
            }, {
                "id": "AF",
                "value": "87.2",
                "showLabel": "1",
            }, {
                "id": "AU",
                "value": "8.32",
                "showLabel": "1",
            }],
            "linkeddata": [{
                "id": "NA",
                "linkedchart": {
                    "chart": {
                        "caption": "US Population Density by State",
                        "subcaption": "Number of people per Square Mile",
                        "entityFillHoverColor": "#cccccc",
                        "showLabels": "1",
                        "entityFillColor": "#A8A8A8",
                        "entityFillHoverColor": "#E5E5E9",
                        "theme": "fint",
                        "showBorder": "1",
                        "bordercolor": "#FFFFFF",
                        "entityborderThickness": "3"
                    },
                    "colorrange": {
                        "startlabel": "Low",
                        "endlabel": "High",
                        "code": "#e44a00",
                        "minvalue": "0",
                        "gradient": "1",
                        "color": [{
                            "maxvalue": "150",
                            "displayvalue": "Average",
                            "code": "#f8bd19"
                        }, {
                            "maxvalue": "600",
                            "code": "#6baa01"
                        }]
                    },
                    "data": [{
                        "id": "HI",
                        "value": "99"
                    }, {
                        "id": "DC",
                        "value": "99"
                    }, {
                        "id": "MD",
                        "value": "90"
                    }, {
                        "id": "DE",
                        "value": "96"
                    }, {
                        "id": "RI",
                        "value": "90"
                    }, {
                        "id": "WA",
                        "value": "228"
                    }, {
                        "id": "OR",
                        "value": "105"
                    }, {
                        "id": "CA",
                        "value": "221"
                    }, {
                        "id": "AK",
                        "value": "260"
                    }, {
                        "id": "ID",
                        "value": "396"
                    }, {
                        "id": "NV",
                        "value": "169"
                    }, {
                        "id": "AZ",
                        "value": "435"
                    }, {
                        "id": "MT",
                        "value": "445"
                    }, {
                        "id": "WY",
                        "value": "455"
                    }, {
                        "id": "UT",
                        "value": "227"
                    }, {
                        "id": "CO",
                        "value": "214"
                    }, {
                        "id": "NM",
                        "value": "196"
                    }, {
                        "id": "ND",
                        "value": "331"
                    }, {
                        "id": "SD",
                        "value": "374"
                    }, {
                        "id": "NE",
                        "value": "329"
                    }, {
                        "id": "KS",
                        "value": "231"
                    }, {
                        "id": "OK",
                        "value": "150"
                    }, {
                        "id": "TX",
                        "value": "202"
                    }, {
                        "id": "MN",
                        "value": "137"
                    }, {
                        "id": "IA",
                        "value": "143"
                    }, {
                        "id": "MO",
                        "value": "424"
                    }, {
                        "id": "AR",
                        "value": "485"
                    }, {
                        "id": "LA",
                        "value": "124"
                    }, {
                        "id": "WI",
                        "value": "181"
                    }, {
                        "id": "IL",
                        "value": "120"
                    }, {
                        "id": "KY",
                        "value": "309"
                    }, {
                        "id": "TN",
                        "value": "250"
                    }, {
                        "id": "MS",
                        "value": "351"
                    }, {
                        "id": "AL",
                        "value": "271"
                    }, {
                        "id": "GA",
                        "value": "124"
                    }, {
                        "id": "MI",
                        "value": "120"
                    }, {
                        "id": "IN",
                        "value": "205"
                    }, {
                        "id": "OH",
                        "value": "476"
                    }, {
                        "id": "PA",
                        "value": "445"
                    }, {
                        "id": "NY",
                        "value": "369"
                    }, {
                        "id": "VT",
                        "value": "322"
                    }, {
                        "id": "NH",
                        "value": "216"
                    }, {
                        "id": "ME",
                        "value": "404"
                    }, {
                        "id": "MA",
                        "value": "165"
                    }, {
                        "id": "CT",
                        "value": "316"
                    }, {
                        "id": "NJ",
                        "value": "553"
                    }, {
                        "id": "WV",
                        "value": "560"
                    }, {
                        "id": "VA",
                        "value": "565"
                    }, {
                        "id": "NC",
                        "value": "534"
                    }, {
                        "id": "SC",
                        "value": "503"
                    }, {
                        "id": "FL",
                        "value": "503"
                    }]
                }
            }]
        }
    });
    populationMap.configureLink({
        "type": "maps/usa"
    }, 0);
    populationMap.render();
});
</script>
</head>
<body>
    <div id="chart-container">A world map will load here!</div>
</body>
</html>
```

### LinkedCharts from a map to a chart

This section shows you how you can set up the LinkedChart feature where specific entities on the map when clicked open up a chart with data that pertains to only that specific entity.

Shown below is a US map that shows the functioning of a retail chain. The chain has distribution centers in California, Texas and North Carolina. The rest of the states receive their supplies from here, the details of each shipment and the average cost is shown in the connector.

Each drilled down chart shows the variation of average shipment cost and the daily shipments for states serviced by that specific distribution center.

{% embed_chart map-guide-adding-drill down -linkedcharts.js %}

The data used in the above chart is shown here

{% embed_data map-guide-adding-drill down -linkedcharts.js %}

This is what we did in the above data structure

* Created a US map and configured markers and connectors between states as explained in earlier topics. The entities which for which drill down is required have the `link` attribute configured.

* The link contains `newchart` which is followed by a hyphen (-) and then the data format for the new chart is specified. Here it is set to `json`, whereas for the XML data, it is defined as `xml`. When using data URL method, you can specify `xmlurl` or `jsonurl` as its value.

* The rest of the value, after a hyphen again (-), of the `link` attribute defines the data source. When `json` or `xml` is set as the data format, the data is taken from a specific `id` of a `linkeddata` element in the same JSON data. If it is set to `xmlurl` or `jsonurl` it its taken from the path specified.

* Next we specified the complete data needed for the descendant charts in the `linkeddata` object of the parent chart. Each element of `linkeddata` is an Object with 2 properties - `id` and `linkedchart` . `id` is used to map data for each descendent chart with its parent chart, and should be unique for each item. `linkedchart` attribute contains the full data for the specific descendant chart as string (JSON or XML).

* Finally we used the `configurelink` before calling the `render` method to set properties specific to the descendant chart. In this example we are setting the `type` of the chart to `mscombidy2d` and configuring the `overlay` object which controls how the back button looks.

The full code for the sample is shown here

```html
<html>
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
<script>
FusionCharts.ready(function() {
    var wrCoverage = new FusionCharts({
        type: 'maps/usa',
        renderAt: 'chart-container',
        width: '650',
        height: '450',
        dataFormat: 'json',
        dataSource: {
            "map": {
                "theme": "fint",
                "caption": "Shipping Volume and Costs",
                "subcaption": "Distribution Network - Last Month",
                "numberSuffix": "%",
                "fillColor": "#cccccc",
                "showHoverEffect": "0",
                "showCanvasBorder": "0",
                "showMarkerLabels": "1",
                "showConnectorLabels": "0",
                "connectorColor": "#80a83c",
                "connectorThickness": "2",
                "connectorHoverColor": "#f8bd19",
                "connectorHoverThickness": "3",
                "borderColor": "#ffffff",
                "showShadow": "0"
            },
            "data": [{
                "id": "CA",
                "showLabel": "0",
                "color": "#008ee4",
                "link": "newchart-json-California",
                "hoverColor": "#ffccff",
                "showHoverEffect": "1"
            }, {
                "id": "TX",
                "showLabel": "0",
                "color": "#008ee4",
                "link": "newchart-json-Texas",
                "hoverColor": "#ffccff",
                "showHoverEffect": "1"
            }, {
                "id": "NC",
                "showLabel": "0",
                "color": "#008ee4",
                "link": "newchart-json-NorthCarolina",
                "hoverColor": "#ffccff",
                "showHoverEffect": "1"
            }],
            "markers": {
                "shapes": [{
                    "id": "myCustomShape",
                    "type": "circle",
                    "fillcolor": "#f8bd19",
                    "showborder": "0",
                }],
                "items": [{
                    "shapeid": "myCustomShape",
                    "id": "WA",
                    "x": "54.5",
                    "y": "44.8",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "OR",
                    "x": "58.3",
                    "y": "101.7",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "ID",
                    "x": "132.8",
                    "y": "110.7",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "MT",
                    "x": "188.8",
                    "y": "45.1",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "WY",
                    "x": "220",
                    "y": "121",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "AZ",
                    "x": "165",
                    "y": "261",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "UT",
                    "x": "170",
                    "y": "178",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "NV",
                    "x": "101",
                    "y": "193",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "LA",
                    "x": "406",
                    "y": "300",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "OK",
                    "x": "347",
                    "y": "245",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "NM",
                    "x": "238",
                    "y": "263",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "CO",
                    "x": "246.72",
                    "y": "179.01",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "KS",
                    "x": "335",
                    "y": "195",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "MO",
                    "x": "408",
                    "y": "197",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "AR",
                    "x": "413",
                    "y": "253",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "MS",
                    "x": "442",
                    "y": "277",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "NE",
                    "x": "318",
                    "y": "146",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "SD",
                    "x": "311",
                    "y": "99",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "ND",
                    "x": "310",
                    "y": "42",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "MN",
                    "x": "382",
                    "y": "61",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "WI",
                    "x": "439",
                    "y": "91",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "IA",
                    "x": "396",
                    "y": "139",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "IL",
                    "x": "445",
                    "y": "174",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "MI",
                    "x": "502",
                    "y": "114",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "IN",
                    "x": "483",
                    "y": "174",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "OH",
                    "x": "530",
                    "y": "168",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "KY",
                    "x": "501",
                    "y": "210",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "WV",
                    "x": "544",
                    "y": "199",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "PA",
                    "x": "593",
                    "y": "155",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "VA",
                    "x": "580",
                    "y": "210",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "NY",
                    "x": "620",
                    "y": "120",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "VT",
                    "x": "654",
                    "y": "95",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "ME",
                    "x": "700",
                    "y": "82",
                    "radius": "1",
                }, {
                    "shapeid": "myCustomShape",
                    "id": "NH",
                    "x": "666",
                    "y": "114",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "MA",
                    "x": "655",
                    "y": "132",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "CT",
                    "x": "654",
                    "y": "146",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "TN",
                    "x": "490",
                    "y": "237",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "GA",
                    "x": "522",
                    "y": "283",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "AL",
                    "x": "489",
                    "y": "279",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "FL",
                    "x": "539",
                    "y": "350",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "TX",
                    "x": "333",
                    "y": "304",
                    "label": "Texas",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "NC",
                    "x": "576",
                    "y": "240",
                    "label": "North Carolina",
                    "radius": "1"
                }, {
                    "shapeid": "myCustomShape",
                    "id": "CA",
                    "x": "68",
                    "y": "225",
                    "label": "California",
                    "showMarkerLabel": "1",
                    "radius": "1"
                }, ],
                "connectors": [{
                    "from": "CA",
                    "to": "WA",
                    "label": "20540",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.2"
                }, {
                    "from": "CA",
                    "to": "ID",
                    "label": "17400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.1"
                }, {
                    "from": "CA",
                    "to": "MT",
                    "label": "15600",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"
                }, {
                    "from": "CA",
                    "to": "WY",
                    "label": "18400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"
                }, {
                    "from": "CA",
                    "to": "NV",
                    "label": "19300",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                }, {
                    "from": "CA",
                    "to": "UT",
                    "label": "16500",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"
                }, {
                    "from": "CA",
                    "to": "AZ",
                    "label": "18400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"
                }, {
                    "from": "TX",
                    "to": "NM",
                    "label": "21300",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                }, {
                    "from": "TX",
                    "to": "LA",
                    "label": "15440",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                }, {
                    "from": "TX",
                    "to": "OK",
                    "label": "16800",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                }, {
                    "from": "TX",
                    "to": "CO",
                    "label": "17200",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.1"
                }, {
                    "from": "TX",
                    "to": "KS",
                    "label": "13670",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.5"
                }, {
                    "from": "TX",
                    "to": "MO",
                    "label": "12560",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"
                }, {
                    "from": "TX",
                    "to": "AR",
                    "label": "19200",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                }, {
                    "from": "TX",
                    "to": "MS",
                    "label": "18760",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.6"
                }, {
                    "from": "TX",
                    "to": "NE",
                    "label": "16870",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                }, {
                    "from": "TX",
                    "to": "SD",
                    "label": "17300",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"
                }, {
                    "from": "TX",
                    "to": "ND",
                    "label": "19900",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"
                }, {
                    "from": "TX",
                    "to": "MN",
                    "label": "16100",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"
                }, {
                    "from": "TX",
                    "to": "WI",
                    "label": "14890",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"
                }, {
                    "from": "TX",
                    "to": "IA",
                    "label": "15600",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: 1.3"
                }, {
                    "from": "TX",
                    "to": "IL",
                    "label": "17650",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                }, {
                    "from": "NC",
                    "to": "IN",
                    "label": "14700",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $4"
                }, {
                    "from": "NC",
                    "to": "MI",
                    "label": "18200",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1"
                }, {
                    "from": "NC",
                    "to": "OH",
                    "label": "16540",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.3"
                }, {
                    "from": "NC",
                    "to": "KY",
                    "label": "15850",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                }, {
                    "from": "NC",
                    "to": "WV",
                    "label": "16430",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                }, {
                    "from": "NC",
                    "to": "PA",
                    "label": "15600",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                }, {
                    "from": "NC",
                    "to": "VT",
                    "label": "18400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                }, {
                    "from": "NC",
                    "to": "NH",
                    "label": "16900",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                }, {
                    "from": "NC",
                    "to": "MA",
                    "label": "16590",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.2"
                }, {
                    "from": "NC",
                    "to": "CT",
                    "label": "18340",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"
                }, {
                    "from": "NC",
                    "to": "ME",
                    "label": "14680",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.7"
                }, {
                    "from": "NC",
                    "to": "NY",
                    "label": "23600",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.4"
                }, {
                    "from": "NC",
                    "to": "TN",
                    "label": "19800",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.6"
                }, {
                    "from": "NC",
                    "to": "AL",
                    "label": "13400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.4"
                }, {
                    "from": "NC",
                    "to": "VA",
                    "label": "17260",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.2"
                }, {
                    "from": "NC",
                    "to": "GA",
                    "label": "17400",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.3"
                }, {
                    "from": "NC",
                    "to": "SC",
                    "label": "16230",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $0.2"
                }, {
                    "from": "NC",
                    "to": "FL",
                    "label": "21200",
                    "tooltext": "<b>Shipping Details:</b>{br}Daily shipment: $label Units{br}Average shipping cost: $1.6"
                }]
            },
            "linkeddata": [{
                "id": "California",
                "linkedchart": {
                    "chart": {
                        "caption": "California - Shipment Summary",
                        "subCaption": "Last Month",
                        "pyaxisname": "Units",
                        "syaxisname": "Cost",
                        "xAxisName": "State",
                        "showvalues": "0",
                        "labelDisplay": "rotate",
                        "slantLabel": "1",
                        "formatNumberScale": "0",
                        "sNumberPrefix": "$",
                        "theme": "fint"
                    },
                    "categories": [{
                        "category": [{
                            "label": "Washington"
                        }, {
                            "label": "Nevada"
                        }, {
                            "label": "Arizona"
                        }, {
                            "label": "Wyoming"
                        }, {
                            "label": "Idaho"
                        }, {
                            "label": "Utah"
                        }, {
                            "label": "Montana"
                        }]

                    }],
                    "dataset": [{
                        "seriesname": "Daily Shipment",
                        "data": [{
                            "value": "20540"
                        }, {
                            "value": "19300"
                        }, {
                            "value": "18400"
                        }, {
                            "value": "18400"
                        }, {
                            "value": "17400"
                        }, {
                            "value": "16500"
                        }, {
                            "value": "15600"
                        }]

                    }, {
                        "seriesname": "Average Shipment Cost",
                        "parentyaxis": "S",
                        "data": [{
                            "value": "1.2"
                        }, {
                            "value": "0.4"
                        }, {
                            "value": "1.6"
                        }, {
                            "value": "0.5"
                        }, {
                            "value": "1.1"
                        }, {
                            "value": "0.5"
                        }, {
                            "value": "1.3"
                        }]
                    }]
                }
            }, {
                "id": "Texas",
                "linkedchart": {
                    "chart": {
                        "caption": "Texas - Shipment Summary",
                        "subCaption": "Last Month",
                        "pyaxisname": "Units",
                        "syaxisname": "Cost",
                        "xAxisName": "State",
                        "showvalues": "0",
                        "labelDisplay": "rotate",
                        "slantLabel": "1",
                        "formatNumberScale": "0",
                        "sNumberPrefix": "$",
                        "theme": "fint"
                    },
                    "categories": [{
                        "category": [{
                            "label": "New Mexico"
                        }, {
                            "label": "North Dakota"
                        }, {
                            "label": "Arkansas"
                        }, {
                            "label": "Mississippi"
                        }, {
                            "label": "Illinois"
                        }, {
                            "label": "South Dakota"
                        }, {
                            "label": "Colorado"
                        }, {
                            "label": "Nebraska"
                        }, {
                            "label": "Oklahoma"
                        }, {
                            "label": "Minnesota"
                        }, {
                            "label": "Iowa"
                        }, {
                            "label": "Louisiana"
                        }, {
                            "label": "Wisconsin"
                        }, {
                            "label": "Kansas"
                        }, {
                            "label": "Missouri"
                        }]

                    }],
                    "dataset": [{
                        "seriesname": "Daily Shipment",
                        "data": [{
                            "value": "21300"
                        }, {
                            "value": "19900"
                        }, {
                            "value": "19200"
                        }, {
                            "value": "18760"
                        }, {
                            "value": "17650"
                        }, {
                            "value": "17300"
                        }, {
                            "value": "17200"
                        }, {
                            "value": "16870"
                        }, {
                            "value": "16800"
                        }, {
                            "value": "16100"
                        }, {
                            "value": "15600"
                        }, {
                            "value": "15440"
                        }, {
                            "value": "14890"
                        }, {
                            "value": "13670"
                        }, {
                            "value": "12560"
                        }]
                    }, {
                        "seriesname": "Average Shipment Cost",
                        "parentyaxis": "S",
                        "data": [{
                            "value": "0.4"
                        }, {
                            "value": "1.7"
                        }, {
                            "value": "0.4"
                        }, {
                            "value": "0.6"
                        }, {
                            "value": "1.4"
                        }, {
                            "value": "1.6"
                        }, {
                            "value": "1.1"
                        }, {
                            "value": "1.4"
                        }, {
                            "value": "0.3"
                        }, {
                            "value": "1.7"
                        }, {
                            "value": "1.3"
                        }, {
                            "value": "0.3"
                        }, {
                            "value": "1.7"
                        }, {
                            "value": "0.5"
                        }, {
                            "value": "1.3"
                        }]
                    }]
                }
            }, {
                "id": "NorthCarolina",
                "linkedchart": {
                    "chart": {
                        "caption": "North Carolina - Shipment Summary",
                        "subCaption": "Last Month",
                        "pyaxisname": "Units",
                        "syaxisname": "Cost",
                        "xAxisName": "State",
                        "showvalues": "0",
                        "labelDisplay": "rotate",
                        "slantLabel": "1",
                        "formatNumberScale": "0",
                        "sNumberPrefix": "$",
                        "theme": "fint"
                    },
                    "categories": [{
                        "category": [{
                            "label": "New York"
                        }, {
                            "label": "Florida"
                        }, {
                            "label": "Indiana"
                        }, {
                            "label": "Vermont"
                        }, {
                            "label": "Connecticut"
                        }, {
                            "label": "Michigan"
                        }, {
                            "label": "Georgia"
                        }, {
                            "label": "Virginia"
                        }, {
                            "label": "New Hampshire"
                        }, {
                            "label": "Massachusetts"
                        }, {
                            "label": "Ohio"
                        }, {
                            "label": "West Virginia"
                        }, {
                            "label": "South Carolina"
                        }, {
                            "label": "Kentucky"
                        }, {
                            "label": "Pennsylvania"
                        }, {
                            "label": "Indiana"
                        }, {
                            "label": "Maine"
                        }, {
                            "label": "Alabama"
                        }]
                    }],
                    "dataset": [{
                        "seriesname": "Daily Shipment",
                        "data": [{
                            "value": "23600"
                        }, {
                            "value": "21200"
                        }, {
                            "value": "19800"
                        }, {
                            "value": "18400"
                        }, {
                            "value": "18340"
                        }, {
                            "value": "18200"
                        }, {
                            "value": "17400"
                        }, {
                            "value": "17260"
                        }, {
                            "value": "16900"
                        }, {
                            "value": "16590"
                        }, {
                            "value": "16540"
                        }, {
                            "value": "16430"
                        }, {
                            "value": "16230"
                        }, {
                            "value": "15850"
                        }, {
                            "value": "15600"
                        }, {
                            "value": "14700"
                        }, {
                            "value": "14680"
                        }, {
                            "value": "13400"
                        }]
                    }, {
                        "seriesname": "Average Shipment Cost",
                        "parentyaxis": "S",
                        "data": [{
                            "value": "1.4"
                        }, {
                            "value": "1.6"
                        }, {
                            "value": "0.6"
                        }, {
                            "value": "1.4"
                        }, {
                            "value": "1.6"
                        }, {
                            "value": "1"
                        }, {
                            "value": "0.3"
                        }, {
                            "value": "0.2"
                        }, {
                            "value": "1.4"
                        }, {
                            "value": "1.2"
                        }, {
                            "value": "1.3"
                        }, {
                            "value": "0.3"
                        }, {
                            "value": "0.2"
                        }, {
                            "value": "0.4"
                        }, {
                            "value": "0.3"
                        }, {
                            "value": "4"
                        }, {
                            "value": "1.7"
                        }, {
                            "value": "0.4"
                        }]
                    }]
                }
            }]
        }
    });
    //Configure the second level chart's properties
    wrCoverage.configureLink({
        type: "mscombidy2d",
        overlayButton: {
            message: 'Back',
            fontColor: '880000',
            bgColor: 'FFEEEE',
            borderColor: '660000'
        }
    }, 0);
    wrCoverage.render();
});
</script>
</head>
<body>
    <div id="chart-container">A world map will load here!</div>
</body>
</html>
```

That's it! You have just configured a map to drill down into a chart when the user clicks on an entity.
