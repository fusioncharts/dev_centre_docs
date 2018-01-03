---
permalink: map-guide/adding-markers.html
title: Adding Markers | FusionCharts
description: You can add custom defined markers on any map. Markers can be used to represent locations like cities, junctions, houses, office locations, malls
heading: Adding Markers
chartPresent: true
---

You can add custom defined markers on any map within FusionCharts Suite XT. Markers can be used to represent locations like cities, junctions, houses, office locations, malls or any other entity which has a geographic location attached to it.

## Using simple shapes as markers

Shown below is a map specifying the world's 5 busiest airports with a triangle denoting the location of each airport.

{% embed_chart map-guide-adding-markers-5-busiest-airports.js %}

Each of these airports has been represented as markers in the world map. This data when converted to FusionCharts Suite XT data format looks like this

{% embed_data map-guide-adding-markers-5-busiest-airports.js %}

This is what we did in the above data structure

* Set the `caption` of the map and applied the `fint` (FusionCharts Internal) theme to control the cosmetic properties of the map. The `markerBgColor` color attribute is set to red and the  `markerRadius` is set to `10` these properties when declared at a chart level apply to all markers used on the map. You can override them for specific markers by defining values inside the `marker` object

* Set the `showMarkerLabels` to `1`. This tells the map to display the labels for each marker. The `entityFillColor` and `entityFillHoverColor` are set to specify the colors of the entities.

* The `markers` object contains an array of `items`. Each item corresponds to a specific marker on the map.

* Individual markers have a unique `id` which you can use to reference the marker later. They have a `shapeId` which specifies the shape of the marker. We have set it to `triangle` in the above example. Possible values are `arc` , `circle` `polygon` and `image`. For a list of all possible attributes you can use for the `markers` object click [here]{% linkTo map-reference/attribute-reference.md %}.

* Each marker element also has a `x` and `y` co-ordinate and label text stored with `label` as key.

* The `tooltext` attribute is used to specify the text that displays inside the tooltip. Finally the `labelpos` attribute specifies the display location of the marker.

The full HTML code for the example is shown here

```html
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

## Using Images or Icons as Markers

In the previous example we saw how we can use predefined shapes to build markers. FusionCharts Suite XT allows you to use external images or icons as markers. You need to customize the `shapes` object to do this.

Shown here is the same map as before but using an airplane icon for the marker.

{% embed_chart map-guide-adding-markers-images.js %}

The data structure of this is shown below

{% embed_data map-guide-adding-markers-images.js %}

This is what we did in the above data structure

* Created a map as shown earlier and set its theme to `fint`, Then we specified marker related attributes.

* We created a `shapes` object within the `markers` object and specified a unique `id` for this shape as `myCustomShape`.

* Then we set the `url` to point to the location of the image and the `xscale` and `yscale` attributes to control the scale factor of the image on the map. Here we set it to `15`, smaller values indicate smaller sizes of the marker.

* Finally we create the `items` array exactly as explained in the previous section except that we set the `shapeId` attribute of the marker to `myCustomShape` , this tells the map that when displaying the marker use the `shape` that is defined as part of the shape definition of `myCustomShape`.

The full HTML code to build this sample is given below:

```html
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

## Connecting Markers

FusionCharts Suite XT allows you to connect any two defined markers on the map using Marker Connectors. You can show custom labels for the connectors, link it to external URLs, show tooltips for the connector and customize all its cosmetics.

Shown below is a map showing the busiest air routes from the Heathrow airport in London. The respective airports are connected using connectors

{% embed_chart map-guide-adding-markers-connectors.js %}

Marker Connectors as part of FusionCharts Suite XT require a unique `ID` to be specified as part of the `marker` definition.

Shown below is the data used to build the map.

{% embed_data map-guide-adding-markers-connectors.js %}

This is what we did in the above data structure

* Created the map as shown earlier and set its theme to `fint`, Then we specified the marker related attributes just as in the previous section. Here we also define the `connectorColor` which specifies the color of the connector line and the `connectorHoverColor` which specifies the color of the connector line on hover. These attributes when declared at a chart level apply to all connectors used on the map. You can override them for specific markers by defining values inside the `connector` object.

* Create the `markers` object which contains an array of `items`. Each element in this array corresponds to a specific marker on the map. We define each element in `item` exactly as shown in the previous two examples.

* Then we create a `connectors` object inside the `markers` which contains information on the connectors. Each connector has a starting marker with `from` as key and a ending marker with `to` as key. They must each reference a unique marker `id`.

* The connector also has a `tooltext` attribute which is used to specify the text that displays inside the tooltip. In our example the `tooltext` is set to display the number of passengers flying on that route.

The HTML code used to build the sample is given below

```html
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

With this you have learnt how to create connectors and customize them to suit your needs. For a detailed list of all the attributes that you can use to customize markers and connectors visit the {% linkTo map-reference/attribute-reference.md %} page.
