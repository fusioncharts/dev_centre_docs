---
permalink: map-guide/adding-markers.html
title: Adding Markers | FusionCharts
description: You can add custom defined markers on any map. Markers can be used to represent locations like cities, junctions, houses, office locations, malls
heading: Adding Markers
chartPresent: true
---


You can add custom defined markers to any map within FusionCharts Suite XT, to represent locations like cities, junctions, houses, office locations, malls or any other entity with a geographic location.

## Use simple shapes as markers

To build a map specifying the world's 5 busiest airports, with a triangle denoting the location of each airport, do the following:

* Set the `caption` of the map.

* Apply the `fint` (FusionCharts Internal) theme to control the cosmetic properties of the map.

* Set the value of the `markerBgColor` attribute to `red` and that of the `markerRadius` attribute to `10`.

* Set the value of the `showMarkerLabels` attribute to `1`, to show the marker labels.

* Use the `entityFillColor` and `entityFillHoverColor` attributes to specify the colors of the entities.

* Use the `items` array of attributes under the `marker` object to customize specific markers on the map. Note that each marker has a unique `id`, which you can later use to refer to the marker. 

* Set the value of the `shapeID` attribute to `triangle` for each marker.

* Use the `tooltext` attribute with each marker to specify the text to be displayed inside its tooltip.

* Use the `x` and `y` attributes with each marker to set its coordinates.

* Use the `labelpos` attribute with each marker to specify its display location.

Refer to the JSON code given below:

```

{
    "chart": {
        "caption": "Top 5 Busiest Airports in the World",
        "subcaption": "Based on Passenger Traffic",
        "theme": "fint",
        "markerBgColor": "#FF0000",
        "markerRadius": "10",
        "showMarkerLabels": "1",
        "entityFillColor": "#A8A8A8",
        "entityFillHoverColor": "#E5E5E9"
    },
    "markers": {
        "items": [
            {
                "id": "lon",
                "shapeid": "triangle",
                "x": "340.23",
                "y": "125.9",
                "label": "LHR",
                "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
                "labelpos": "left"
            },
            {
                "id": "alt",
                "shapeid": "triangle",
                "x": "160.14",
                "y": "164.9",
                "label": "ATL",
                "tooltext": "Hartsfield Jackson Atlanta International Airport {br}IACL Code : KATL",
                "labelpos": "bottom"
            },
            {
                "id": "dub",
                "shapeid": "triangle",
                "x": "458.14",
                "y": "203.9",
                "label": "DXB",
                "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
                "labelpos": "bottom"
            },
            {
                "id": "tok",
                "shapeid": "triangle",
                "x": "628.14",
                "y": "165.9",
                "label": "HND",
                "tooltext": "Tokyo Haneda Airport{br} IACL Code : RJTT",
                "labelpos": "bottom"
            },
            {
                "id": "beij",
                "shapeid": "triangle",
                "x": "573.14",
                "y": "161.9",
                "label": "PEK",
                "tooltext": "Beijing Capital International Airport {br} IACL Code : ZBAA",
                "labelpos": "bottom"
            }
        ]
    }
}

```

Refer to the full HTML code given below:

```

<html>
<head>
    <title>A Data Driven Map showing Markers</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
    <script>
    FusionCharts.ready(function() {
        var airportsMap = new FusionCharts({
            type: 'maps/world',
            renderAt: 'chart-container',
            width: '600',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Top 5 Busiest Airports in the World",
                    "subcaption": "Based on Passenger Traffic",
                    "theme": "fint",
                    "markerBgColor": "#FF0000",
                    "markerRadius": "10",
                    "showMarkerLabels": "1",
                    "entityFillColor": "#A8A8A8",
                    "entityFillHoverColor": "#E5E5E9"
                },
                "markers": {
                    "items": [
                        {
                            "id": "lon",
                            "shapeid": "triangle",
                            "x": "340.23",
                            "y": "125.9",
                            "label": "LHR",
                            "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
                            "labelpos": "left"
                        },
                        {
                            "id": "alt",
                            "shapeid": "triangle",
                            "x": "160.14",
                            "y": "164.9",
                            "label": "ATL",
                            "tooltext": "Hartsfield Jackson Atlanta International Airport {br}IACL Code : KATL",
                            "labelpos": "bottom"
                        },
                        {
                            "id": "dub",
                            "shapeid": "triangle",
                            "x": "458.14",
                            "y": "203.9",
                            "label": "DXB",
                            "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
                            "labelpos": "bottom"
                        },
                        {
                            "id": "tok",
                            "shapeid": "triangle",
                            "x": "628.14",
                            "y": "165.9",
                            "label": "HND",
                            "tooltext": "Tokyo Haneda Airport{br} IACL Code : RJTT",
                            "labelpos": "bottom"
                        },
                        {
                            "id": "beij",
                            "shapeid": "triangle",
                            "x": "573.14",
                            "y": "161.9",
                            "label": "PEK",
                            "tooltext": "Beijing Capital International Airport {br} IACL Code : ZBAA",
                            "labelpos": "bottom"
                        }
                    ]
                }
            }
        }).render();
    });
    </script>
</head>
<body>
    <div id="chart-container">A world map will load here!</div>
</body>
</html>

```

The map will look as shown below:

<map>

## Use images/ icons as markers

In the map above, you used predefined shapes to build markers. However, you can also use external images or icons as markers. You need to customize the shapes object to do this.

Here's how you can build the same map as the one above, but with airplane icons for the markers:

* Create a map as shown in the above code and set its theme to `fint`. 

* Create a `shapes` object within the `markers` object and specify a unique `id` for this shape as `myCustomShape`.

* Set the `url` attribute to point to the location of the airplane icon.

* Set the `xscale` and `yscale` attributes to control the scale factor of the image on the map. Note that the size of the marker depends on this value.

* Create the `items` array of attributes as explained in the previous section. However, this time, set the `shapeId` attribute of the marker to `myCustomShape`. This will tell the map to use the shape defined as part of the shape definition of `myCustomShape`.

Refer to the JSON code given below:

```

{
    "chart": {
        "caption": "Top 5 Airports in the World",
        "subcaption": "Based on Passenger Traffic",
        "theme": "fint",
        "showMarkerLabels": "1",
        "entityFillColor": "#A8A8A8",
        "entityFillHoverColor": "#E5E5E9"
    },
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "image",
                "url": "http://static.fusioncharts.com/docs/assets/airplane-99047_150.png",
                "xscale": "15",
                "yscale": "15",
                "labelPadding": "15"
            }
        ],
        "items": [
            {
                "id": "lon",
                "shapeid": "myCustomShape",
                "x": "340.23",
                "y": "125.9",
                "label": "LHR",
                "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
                "labelpos": "left"
            },
            {
                "id": "was",
                "shapeid": "myCustomShape",
                "x": "160.14",
                "y": "164.9",
                "label": "ATL",
                "tooltext": "Hartsfield Jackson Atlanta International Airport {br}IACL Code : KATL",
                "labelpos": "bottom"
            },
            {
                "id": "dub",
                "shapeid": "myCustomShape",
                "x": "458.14",
                "y": "203.9",
                "label": "DXB",
                "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
                "labelpos": "bottom"
            },
            {
                "id": "tok",
                "shapeid": "myCustomShape",
                "x": "628.14",
                "y": "165.9",
                "label": "HND",
                "tooltext": "Tokyo Haneda Airport{br} IACL Code : RJTT",
                "labelpos": "bottom"
            },
            {
                "id": "beij",
                "shapeid": "myCustomShape",
                "x": "573.14",
                "y": "161.9",
                "tooltext": "Beijing Capital International Airport {br} IACL Code : ZBAA",
                "labelpos": "bottom"
            }
        ]
    }
}

```

Refer to the full HTML code given below:

```

<html>
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
<script>
FusionCharts.ready(function () {
    var airportsMap = new FusionCharts({
        type: 'maps/world',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption" : "Top 5 Airports in the World",
                "subcaption" : "Based on Passenger Traffic",
                "theme": "fint",
                "showMarkerLabels" : "1",
                "entityFillColor" : "#A8A8A8",
                "entityFillHoverColor" : "#E5E5E9"
                    },
            "markers": {
            "shapes": [
                    {
                        "id": "myCustomShape",
                        "type": "image",
                        "url": "http://static.fusioncharts.com/docs/assets/airplane-99047_150.png",
                        "xscale": "15",
                        "yscale": "15",
                        "labelPadding": "15"
                    }
                ],
            "items" : [
            {
                "id":"lon",
                "shapeid": "myCustomShape",
                "x": "340.23",
                "y": "125.9",
                "label": "LHR",
                "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
                "labelpos": "left"
            },
            {
                "id": "was",
                "shapeid": "myCustomShape",
                "x": "160.14",
                "y": "164.9",
                "label": "ATL",
                "tooltext": "Hartsfield Jackson Atlanta International Airport {br}IACL Code : KATL",

                "labelpos": "bottom"
            },
            {
                "id": "dub",
                "shapeid": "myCustomShape",
                "x": "458.14",
                "y": "203.9",
                "label": "DXB",
                "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
                "labelpos": "bottom"
            },
            {
                "id": "tok",
                "shapeid": "myCustomShape",
                "x": "628.14",
                "y": "165.9",
                "label": "HND",
                "tooltext": "Tokyo Haneda Airport{br} IACL Code : RJTT",
                "labelpos": "bottom"
            },
            {
                "id": "beij",
                "shapeid": "myCustomShape",
                "x": "573.14",
                "y": "161.9",
                "tooltext": "Beijing Capital International Airport {br} IACL Code : ZBAA",
                "labelpos": "bottom"
            }]
                }
            }
    }).render();
});
</script>
</head>
<body>
<div id="chart-container">A world map will load here!</div>
</body>
</html>

```

The map will look as shown below:

<map>

## Use connectors between markers

In FusionCharts Suite XT, you can connect any two defined markers on the map using Marker Connectors. You can show custom labels for the connectors, link them to external URLs, show tooltips for the connectors, and customize all their cosmetics. Note that you need to specify a unique `ID` for each marker connector, as part of the `marker` definition.

For example, build a map showing the busiest air routes from the Heathrow airport in London, and connect the individual airports using connectors.

* Create the map as shown in the sections above, set its theme to `fint`, and specify marker related attributes.

* Use the `connectorColor` attribute to specify the color of the connector line. Also, use the `connectorHoverColor` attribute to specify the color of the connector line on hover. Note that if you declare these attributes at chart level, they will be applied to all connectors. You can, however, override them for specific markers, by defining their values within the `connector` object. 

* Create the `markers` object and define each element in the items within it, exactly as in the previous two examples.

* Create a `connectors` object inside the markers, which contains information on the connectors. Each connector has a starting marker with `from` as key and an ending marker with `to` as key. Ensure that each of them references a unique marker `id`.

* Use the `tooltext` attribute for each connector to set the tooltip text as the number of passengers flying on that route.

Refer to the JSON code below:

```

{
    "chart": {
        "caption": "Busiest Routes from Heathrow Airport",
        "subcaption": "2018",
        "theme": "fint",
        "markerBgColor": "#FF0000",
        "markerRadius": "10",
        "showMarkerLabels": "1",
        "connectorColor": "#0CB2B0",
        "connectorHoverColor": "#339933",
        "entityFillColor": "#CECED2",
        "entityFillHoverColor": "#E5E5E9"
    },
    "markers": {
        "items": [
            {
                "id": "lon",
                "shapeid": "triangle",
                "x": "340.23",
                "y": "125.9",
                "label": "LHR",
                "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
                "labelpos": "left"
            },
            {
                "id": "nyc",
                "shapeid": "triangle",
                "x": "178.14",
                "y": "154.9",
                "label": "JFK",
                "tooltext": "John F Kennedy Airport {br}IACL Code : KJFK",
                "labelpos": "bottom"
            },
            {
                "id": "dub",
                "shapeid": "triangle",
                "x": "458.14",
                "y": "203.9",
                "label": "DXB",
                "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
                "labelpos": "bottom"
            },
            {
                "id": "sg",
                "shapeid": "triangle",
                "x": "558.14",
                "y": "255.9",
                "label": "SIN",
                "tooltext": "Singapore International Airport {br} IACL Code : WSSS",
                "labelpos": "bottom"
            },
            {
                "id": "hk",
                "shapeid": "triangle",
                "x": "573.14",
                "y": "202.9",
                "label": "HKG",
                "tooltext": "Hong Kong International Airport {br} IACL Code : VHHH",
                "labelpos": "bottom"
            }
        ],
        "connectors": [
            {
                "from": "lon",
                "to": "hk",
                "tooltext": "<b>London to Hong Kong</b>{br} Total Passengers: 1,801,520"
            },
            {
                "from": "lon",
                "to": "sg",
                "tooltext": "<b>London to Singapore</b>{br} Total Passengers: 1,507,032"
            },
            {
                "from": "lon",
                "to": "nyc",
                "tooltext": "<b>London to New York{br} Total Passengers: 2,551,276"
            },
            {
                "from": "lon",
                "to": "dub",
                "tooltext": "<b>London to Dubai</b>{br} Total Passengers: 1,974,078"
            }
        ]
    }
}

```

Refer to the full HTML code given below:

```

<html>
<head>
    <title>A map showing connectors</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
    <script>
    FusionCharts.ready(function() {
        var routesMap = new FusionCharts({
            type: 'maps/world',
            renderAt: 'chart-container',
            width: '600',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Busiest Routes from Heathrow Airport",
                    "subcaption": "2014",
                    "theme": "fint",
                    "markerBgColor": "#FF0000",
                    "markerRadius": "10",
                    "showMarkerLabels": "1",
                    "connectorColor": "#0CB2B0",
                    "connectorHoverColor": "#339933",
                    "entityFillColor": "#CECED2",
                    "entityFillHoverColor": "#E5E5E9"
                },
                "markers": {
                    "items": [{
                        "id": "lon",
                        "shapeid": "triangle",
                        "x": "340.23",
                        "y": "125.9",
                        "label": "LHR",
                        "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
                        "labelpos": "left"
                    }, {
                        "id": "nyc",
                        "shapeid": "triangle",
                        "x": "178.14",
                        "y": "154.9",
                        "label": "JFK",
                        "tooltext": "John F Kennedy Airport {br}IACL Code : KJFK",
                        "labelpos": "bottom"
                    }, {
                        "id": "dub",
                        "shapeid": "triangle",
                        "x": "458.14",
                        "y": "203.9",
                        "label": "DXB",
                        "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
                        "labelpos": "bottom"
                    }, {
                        "id": "sg",
                        "shapeid": "triangle",
                        "x": "558.14",
                        "y": "255.9",
                        "label": "SIN",
                        "tooltext": "Singapore International Airport {br} IACL Code : WSSS",
                        "labelpos": "bottom"
                    }, {
                        "id": "hk",
                        "shapeid": "triangle",
                        "x": "573.14",
                        "y": "202.9",
                        "label": "HKG",
                        "tooltext": "Hong Kong International Airport {br} IACL Code : VHHH",
                        "labelpos": "bottom"
                    }],
                    "connectors": [{
                        "from": "lon",
                        "to": "hk",
                        "tooltext": "<b>London to Hong Kong</b>{br} Total Passengers: 1,801,520"
                    }, {
                        "from": "lon",
                        "to": "sg",
                        "tooltext": "<b>London to Singapore</b>{br} Total Passengers: 1,507,032"
                    }, {
                        "from": "lon",
                        "to": "nyc",
                        "tooltext": "<b>London to New York{br} Total Passengers: 2,551,276"
                    }, {
                        "from": "lon",
                        "to": "dub",
                        "tooltext": "<b>London to Dubai</b>{br} Total Passengers: 1,974,078"
                    }]
                }
            }
        }).render();
    });
    </script>
</head>
<body>
    <div id="chart-container">A world map will load here!</div>
</body>
</html>

```

## Use data driven markers

In FusionCharts Suite XT, you can define marker sizes based on associated data values. Building on the earlier examples, you can configure the size of the marker to be defined by the data value associated with the marker. To do so, follow the steps given below:

* Set the `caption` of the map and apply the `fint` theme (FusionCharts Internal Theme) to control the cosmetic properties of the map. Use the `useValuesForMarkers` attribute to display data driven markers.

* Set the value of the `markerBgColor` attribute to `light blue` at chart level, to apply it to all markers on the map. You can later override it if you want, by specifying a different value for one or more specific markers within the `markers` object.

* Create the `items` array of attributes as explained in the previous section. However, this time, set the `shapeId` attribute of the marker to `circle`. Store the number of passengers using `value` as key.

* Use the `x` and `y` attributes with each marker to set its coordinates.

* Use the `label` attribute as key, to store the label text for each marker.

* Use the `tooltext` attribute with each marker to specify the text to be displayed inside its tooltip.

* Use the `labelpos` attribute with each marker to specify its display location.

Refer to the JSON code below:

```

{
    "chart": {
        "caption": "Top 5 Busiest Airports in the World",
        "subcaption": "Based on Passenger Traffic in 2014",
        "theme": "fint",
        "markerBgColor": "#3399FF",
        "entityFillColor": "#A8A8A8",
        "entityFillHoverColor": "#E5E5E9",
        "showMarkerLabels": "1",
        "showvalue": "0",
        "labsepchar": "<br/>",
        "markerTooltext": "$label",
        "numbersuffix": "M"
    },
    "markers": {
        "items": [
            {
                "id": "lon",
                "shapeid": "circle",
                "x": "340.23",
                "y": "125.9",
                "label": "LHR",
                "value": "16.0",
                "tooltext": "Heathrow International Airport {br} Total Passengers: $value M{br} IACL Code : EGLL",
                "labelpos": "left"
            },
            {
                "id": "atl",
                "shapeid": "circle",
                "x": "160.14",
                "y": "164.9",
                "label": "ATL",
                "value": "21.6",
                "tooltext": "Hartsfield Jackson Atlanta International Airport {br} Total Passengers: $value M{br} IACL Code : KATL",
                "labelpos": "bottom"
            },
            {
                "id": "dub",
                "shapeid": "circle",
                "x": "458.14",
                "y": "203.9",
                "label": "DXB",
                "value": "18.3",
                "tooltext": "Dubai International Airport {br} Total Passengers: $value M{br} IACL Code : OMDB",
                "labelpos": "bottom"
            },
            {
                "id": "tok",
                "shapeid": "circle",
                "x": "628.14",
                "y": "165.9",
                "label": "HND",
                "value": "16.6",
                "tooltext": "Tokyo Haneda Airport {br} Total Passengers: $value M{br} IACL Code : RJTT",
                "labelpos": "bottom"
            },
            {
                "id": "beij",
                "shapeid": "circle",
                "x": "573.14",
                "y": "161.9",
                "label": "PEK",
                "value": "20.5",
                "tooltext": "Beijing Capital International Airport {br} Total Passengers: $value M{br} IACL Code : ZBAA",
                "labelpos": "bottom"
            }
        ]
    }
}

```

Refer to the full HTML code given below:

```

<html>
<head>
    <title>A Data Driven Map</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
<script>
FusionCharts.ready(function() {
    var airportsMap = new FusionCharts({
        type: 'maps/world',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Top 5 Busiest Airports in the World",
                "subcaption": "Based on Passenger Traffic in 2014",
                "theme": "fint",
                "markerBgColor": "#3399FF",
                "entityFillColor": "#A8A8A8",
                "entityFillHoverColor": "#E5E5E9",
                "useValuesforMarkers": "1",
                "showMarkerLabels": "1",
                "showvalue": "0",
                "markerTooltext": "$label",
                "numbersuffix": "M"
            },
            "markers": {
                "items": [{
                    "id": "lon",
                    "shapeid": "circle",
                    "x": "340.23",
                    "y": "125.9",
                    "label": "LHR",
                    "value": "16.0",
                    "tooltext": "Heathrow International Airport {br} Total Passengers: $value M{br} IACL Code : EGLL",
                    "labelpos": "left"
                }, {
                    "id": "atl",
                    "shapeid": "circle",
                    "x": "160.14",
                    "y": "164.9",
                    "label": "ATL",
                    "value": "21.6",
                    "tooltext": "Hartsfield Jackson Atlanta International Airport {br} Total Passengers: $value M{br} IACL Code : KATL",
                    "labelpos": "bottom"
                }, {
                    "id": "dub",
                    "shapeid": "circle",
                    "x": "458.14",
                    "y": "203.9",
                    "label": "DXB",
                    "value": "18.3",
                    "tooltext": "Dubai International Airport {br} Total Passengers: $value M{br} IACL Code : OMDB",
                    "labelpos": "bottom"
                }, {
                    "id": "tok",
                    "shapeid": "circle",
                    "x": "628.14",
                    "y": "165.9",
                    "label": "HND",
                    "value": "16.6",
                    "tooltext": "Tokyo Haneda Airport {br} Total Passengers: $value M{br} IACL Code : RJTT",
                    "labelpos": "bottom"
                }, {
                    "id": "beij",
                    "shapeid": "circle",
                    "x": "573.14",
                    "y": "161.9",
                    "label": "PEK",
                    "value": "20.5",
                    "tooltext": "Beijing Capital International Airport {br} Total Passengers: $value M{br} IACL Code : ZBAA",
                    "labelpos": "bottom"
                }]
            }
        }
    }).render();
});
</script>
</head>
<body>
    <div id="chart-container">A world map will load here!</div>
</body>
</html>

```

The map will look as shown below:

<map>

Note: In the map above, the size of the marker is proportional to the total passenger traffic for the airport.

## Use marker sheets

In FusionCharts Suite XT, you can create any number of custom markers on a map. Additionally, you can create JSON based marker definitions of important cities for most major maps. You can find these marker definitions in the [Marker Data](https://www.fusioncharts.com/maps/marker-data/) section.

### Follow marker structure in v3.4

In FusionCharts v3.4, you need to create a `shapes` object and an `items` object, to build the marker structure. Use the `shapes` object to define the look of the marker, and the `items` object to specify all marker related information, such as the `x` and `y` coordinates, the unique `id` of the marker and other attributes for customization.

> Note: If you use the XML data type, change the `items` object to the `<data>` tag.

Refer to the structure of a typical marker sheet, given below:

```

{
    "map": {},
    "markers": {
        "shapes": [{
            "id": "myCustomShape",
            "type": "circle",
            "fillcolor": "FFFFFF,333333",
            "fillpattern": "radial",
            "showborder": "0",
            "radius": "4"
        }, {
            "id": "newCustomShape",
            "type": "circle",
            "fillcolor": "FFFFFF,000099",
            "fillpattern": "radial",
            "showborder": "0",
            "radius": "3"
        }],
        "items": [{
            "id": "KA",
            "shapeid": "myCustomShape",
            "x": "388.77",
            "y": "207.41",
            "label": "Kabul",
            "labelpos": "left"
        }, {
            "id": "01",
            "shapeid": "newCustomShape",
            "x": "358.11",
            "y": "72.54",
            "label": "Shir Khan"
        }, {
            "id": "02",
            "shapeid": "newCustomShape",
            "x": "364.24",
            "y": "92.97",
            "label": "Kondoz",
            "labelpos": "left"
        }, {
            "id": "03",
            "shapeid": "newCustomShape",
            "x": "280.46",
            "y": "95.02",
            "label": "Mazar-e-Sharif",
            "labelpos": "left"
        }, {
            "id": "04",
            "shapeid": "newCustomShape",
            "x": "403.07",
            "y": "183.91",
            "label": "Bagram",
            "labelpos": "right"
        }, {
            "id": "05",
            "shapeid": "newCustomShape",
            "x": "434.74",
            "y": "216.6",
            "label": "Jalalabad",
            "labelpos": "left"
        }, {
            "id": "06",
            "shapeid": "newCustomShape",
            "x": "321.33",
            "y": "263.6",
            "label": "Ghazni",
            "labelpos": "right"
        }, {
            "id": "07",
            "shapeid": "newCustomShape",
            "x": "228.35",
            "y": "390.3",
            "label": "Kandahar",
            "labelpos": "top"
        }, {
            "id": "08",
            "shapeid": "newCustomShape",
            "x": "62.83",
            "y": "379.06",
            "label": "Zaranj",
            "labelpos": "left"
        }, {
            "id": "11",
            "shapeid": "newCustomShape",
            "x": "87.35",
            "y": "165.52",
            "label": "Towraghondi",
            "labelpos": "left"
        }, {
            "id": "09",
            "shapeid": "newCustomShape",
            "x": "80.2",
            "y": "242.15",
            "label": "Shindand",
            "labelpos": "left"
        }, {
            "id": "10",
            "shapeid": "newCustomShape",
            "x": "81.22",
            "y": "199.23",
            "label": "Herat",
            "labelpos": "left"
        }]
    }
}

```

Note: In the above marker structure, you can modify the `shapes` object with your own shape definition. Of course, if you are not using the markers as part of your map, you can simply delete it from the `markers` object.

### Follow marker structure in v3.3 and earlier

Before you get started with this section, remember that the following structures are supported in v3.3 and earlier versions of the product. This marker structure is not recommended for use with v3.4 or later.

In this structure, you need to create `shapes`, `definition` and `application` objects. You can use the `shapes` object to specify how the marker should look. You can use the `definition` object to specify marker data, such as `x` and `y` coordinates, as well as a unique marker `id`. You also need to use the `application` object to specify which `shape` is to be used with which `definition` and also which markers are to be used in a particular instance of the map.

Refer to the structure of a typical marker sheet, given below:

```

{
    "map": {},
    "markers": {
        "shapes": [{
            "id": "myCustomShape",
            "type": "circle",
            "fillcolor": "FFFFFF,333333",
            "fillpattern": "radial",
            "showborder": "0",
            "radius": "4"
        }, {
            "id": "newCustomShape",
            "type": "circle",
            "fillcolor": "FFFFFF,000099",
            "fillpattern": "radial",
            "showborder": "0",
            "radius": "3"
        }],
        "definition": [{
            "id": "KA",
            "x": "388.77",
            "y": "207.41",
            "label": "Kabul",
            "labelpos": "left"
        }, {
            "id": "01",
            "x": "358.11",
            "y": "72.54",
            "label": "Shir Khan"
        }, {
            "id": "02",
            "x": "364.24",
            "y": "92.97",
            "label": "Kondoz",
            "labelpos": "left"
        }, {
            "id": "03",
            "x": "280.46",
            "y": "95.02",
            "label": "Mazar-e-Sharif",
            "labelpos": "left"
        }, {
            "id": "04",
            "x": "403.07",
            "y": "183.91",
            "label": "Bagram",
            "labelpos": "right"
        }, {
            "id": "05",
            "x": "434.74",
            "y": "216.6",
            "label": "Jalalabad",
            "labelpos": "left"
        }, {
            "id": "06",
            "x": "321.33",
            "y": "263.6",
            "label": "Ghazni",
            "labelpos": "right"
        }, {
            "id": "07",
            "x": "228.35",
            "y": "390.3",
            "label": "Kandahar",
            "labelpos": "top"
        }, {
            "id": "08",
            "x": "62.83",
            "y": "379.06",
            "label": "Zaranj",
            "labelpos": "left"
        }, {
            "id": "11",
            "x": "87.35",
            "y": "165.52",
            "label": "Towraghondi",
            "labelpos": "left"
        }, {
            "id": "09",
            "x": "80.2",
            "y": "242.15",
            "label": "Shindand",
            "labelpos": "left"
        }, {
            "id": "10",
            "x": "81.22",
            "y": "199.23",
            "label": "Herat",
            "labelpos": "left"
        }],
        "application": [{
            "id": "KA",
            "shapeid": "myCustomShape"
        }, {
            "id": "01",
            "shapeid": "newCustomShape"
        }, {
            "id": "02",
            "shapeid": "newCustomShape"
        }, {
            "id": "03",
            "shapeid": "newCustomShape"
        }, {
            "id": "04",
            "shapeid": "newCustomShape"
        }, {
            "id": "05",
            "shapeid": "newCustomShape"
        }, {
            "id": "06",
            "shapeid": "newCustomShape"
        }, {
            "id": "07",
            "shapeid": "newCustomShape"
        }, {
            "id": "08",
            "shapeid": "newCustomShape"
        }, {
            "id": "11",
            "shapeid": "newCustomShape"
        }, {
            "id": "09",
            "shapeid": "newCustomShape"
        }, {
            "id": "10",
            "shapeid": "newCustomShape"
        }]
    }
}

```

Click [here](https://www.fusioncharts.com/maps/marker-data/) for a list of all the marker data files.
