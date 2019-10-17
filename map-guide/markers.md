---
title: Adding Markers | FusionCharts
description: You can add custom defined markers on any map. Markers can be used to represent locations like cities, junctions, houses, office locations, malls
heading: Adding Markers
---

> Replace the map definition files (of v3.12.2 or older) with the latest files available in [download package](https://www.fusioncharts.com/download/fusioncharts-suite-xt) while upgrading to __v3.13.0__.

You can add custom defined markers to any map within FusionCharts Suite XT, to represent locations like cities, junctions, houses, office locations, malls or any other entity with a geographic location.

## Use simple shapes as markers

To build a map specifying the world's 5 busiest airports, with a triangle denoting the location of each airport, do the following:

* Set the `caption` of the map.

* Apply the `fusion` (FusionCharts Internal) theme to control the cosmetic properties of the map.

* Set the value of the `markerBgColor` attribute to `red` and that of the `markerRadius` attribute to `10`.

* Set the value of the `showMarkerLabels` attribute to `1`, to show the marker labels.

* Use the `entityFillColor` and `entityFillHoverColor` attributes to specify the colors of the entities.

* Use the `items` array of attributes under the `marker` object to customize specific markers on the map. Note that each marker has a unique `id`, which you can later use to refer to the marker. 

* Set the value of the `shapeID` attribute to `triangle` for each marker.

* Use the `tooltext` attribute with each marker to specify the text to be displayed inside its tooltip.

* Use the `x` and `y` attributes with each marker to set its coordinates.

* Use the `labelpos` attribute with each marker to specify its display location.

Refer to the JSON code given below:

```json
{
    "chart": {
        "caption": "Top 5 Busiest Airports in the World",
        "subcaption": "Based on Passenger Traffic",
        "theme": "fusion",
        "markerBgColor": "#FF0000",
        "markerRadius": "10",
        "showMarkerLabels": "1",
        "entityFillColor": "#A8A8A8",
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
            "id": "alt",
            "shapeid": "triangle",
            "x": "160.14",
            "y": "164.9",
            "label": "ATL",
            "tooltext": "Hartsfield Jackson Atlanta International Airport {br}IACL Code : KATL",
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
            "id": "tok",
            "shapeid": "triangle",
            "x": "628.14",
            "y": "165.9",
            "label": "HND",
            "tooltext": "Tokyo Haneda Airport{br} IACL Code : RJTT",
            "labelpos": "bottom"
        }, {
            "id": "beij",
            "shapeid": "triangle",
            "x": "573.14",
            "y": "161.9",
            "label": "PEK",
            "tooltext": "Beijing Capital International Airport {br} IACL Code : ZBAA",
            "labelpos": "bottom"
        }]
    }
}
```

The map will look as shown below:

{% embed_all map-guide-markers-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/p70nsf03/) to edit the above map.

## Use images/icons as markers

In the map above, you used predefined shapes to build markers. However, you can also use external images or icons as markers. You need to customize the shapes object to do this.

Here's how you can build the same map as the one above, but with airplane icons for the markers:

* Create a map as shown in the above code and set its theme to `fusion`. 

* Create a `shapes` object within the `markers` object and specify a unique `id` for this shape as `myCustomShape`.

* Set the `url` attribute to point to the location of the airplane icon.

* Set the `xscale` and `yscale` attributes to control the scale factor of the image on the map. Note that the size of the marker depends on this value.

* Create the `items` array of attributes as explained in the previous section. However, this time, set the `shapeId` attribute of the marker to `myCustomShape`. This will tell the map to use the shape defined as part of the shape definition of `myCustomShape`.

Refer to the JSON code given below:

```json
{
    "chart": {
        "caption": "Top 5 Airports in the World",
        "subcaption": "Based on Passenger Traffic",
        "theme": "fusion",
        "showMarkerLabels": "1",
        "entityFillColor": "#A8A8A8",
        "entityFillHoverColor": "#E5E5E9"
    },
    "markers": {
        "shapes": [{
            "id": "myCustomShape",
            "type": "image",
            "url": "https://static.fusioncharts.com/docs/assets/airplane-99047_150.png",
            "xscale": "15",
            "yscale": "15",
            "labelPadding": "15"
        }],
        "items": [{
            "id": "lon",
            "shapeid": "myCustomShape",
            "x": "340.23",
            "y": "125.9",
            "label": "LHR",
            "tooltext": "Heathrow International Airport {br}IACL Code : EGLL",
            "labelpos": "left"
        }, {
            "id": "was",
            "shapeid": "myCustomShape",
            "x": "160.14",
            "y": "164.9",
            "label": "ATL",
            "tooltext": "Hartsfield Jackson Atlanta International Airport {br}IACL Code : KATL",
            "labelpos": "bottom"
        }, {
            "id": "dub",
            "shapeid": "myCustomShape",
            "x": "458.14",
            "y": "203.9",
            "label": "DXB",
            "tooltext": "Dubai International Airport {br} IACL Code : OMDB",
            "labelpos": "bottom"
        }, {
            "id": "tok",
            "shapeid": "myCustomShape",
            "x": "628.14",
            "y": "165.9",
            "label": "HND",
            "tooltext": "Tokyo Haneda Airport{br} IACL Code : RJTT",
            "labelpos": "bottom"
        }, {
            "id": "beij",
            "shapeid": "myCustomShape",
            "x": "573.14",
            "y": "161.9",
            "tooltext": "Beijing Capital International Airport {br} IACL Code : ZBAA",
            "labelpos": "bottom"
        }]
    }
}
```

The map will look as shown below:

{% embed_all map-guide-markers-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/f87te3v5/) to edit the above map.

## Use connectors between markers

In FusionCharts Suite XT, you can connect any two defined markers on the map using Marker Connectors. You can show custom labels for the connectors, link them to external URLs, show tooltips for the connectors, and customize all their cosmetics. Note that you need to specify a unique `ID` for each marker connector, as part of the `marker` definition.

For example, build a map showing the busiest air routes from the Heathrow airport in London, and connect the individual airports using connectors.

* Create the map as shown in the sections above, set its theme to `fusion`, and specify marker related attributes.

* Use the `connectorColor` attribute to specify the color of the connector line. Also, use the `connectorHoverColor` attribute to specify the color of the connector line on hover. Note that if you declare these attributes at chart level, they will be applied to all connectors. You can, however, override them for specific markers, by defining their values within the `connector` object. 

* Create the `markers` object and define each element in the items within it, exactly as in the previous two examples.

* Create a `connectors` object inside the markers, which contains information on the connectors. Each connector has a starting marker with `from` as key and an ending marker with `to` as key. Ensure that each of them references a unique marker `id`.

* Use the `tooltext` attribute for each connector to set the tooltip text as the number of passengers flying on that route.

Refer to the JSON code below:

```json
{
    "chart": {
        "caption": "Busiest Routes from Heathrow Airport",
        "subcaption": "2018",
        "theme": "fusion",
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
```

The map looks ike as shown below:

{% embed_all map-guide-markers-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/j922xqta/) to edit the above map.

## Use data driven markers

In FusionCharts Suite XT, you can define marker sizes based on associated data values. Building on the earlier examples, you can configure the size of the marker to be defined by the data value associated with the marker. To do so, follow the steps given below:

* Set the `caption` of the map and apply the `fusion` theme (FusionCharts Internal Theme) to control the cosmetic properties of the map. Use the `useValuesForMarkers` attribute to display data driven markers.

* Set the value of the `markerBgColor` attribute to `light blue` at chart level, to apply it to all markers on the map. You can later override it if you want, by specifying a different value for one or more specific markers within the `markers` object.

* Create the `items` array of attributes as explained in the previous section. However, this time, set the `shapeId` attribute of the marker to `circle`. Store the number of passengers using `value` as key.

* Use the `x` and `y` attributes with each marker to set its coordinates.

* Use the `label` attribute as key, to store the label text for each marker.

* Use the `tooltext` attribute with each marker to specify the text to be displayed inside its tooltip.

* Use the `labelpos` attribute with each marker to specify its display location.

Refer to the JSON code below:

```json
{
    "chart": {
        "caption": "Top 5 Busiest Airports in the World",
        "subcaption": "Based on Passenger Traffic in 2014",
        "theme": "fusion",
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
```

The map will look as shown below:

{% embed_all map-guide-markers-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/12vyv6L3/) to edit the above map.

> In the map above, the size of the marker is proportional to the total passenger traffic for the airport.