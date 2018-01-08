---
permalink: map-guide/data-driven-markers.html
title: Data Driven Markers | FusionCharts
description: With FusionCharts Suite XT, you can now define marker size based on associated data values
heading: Data Driven Markers
chartPresent: true
---

With FusionCharts Suite XT, you can now define marker size based on associated data values. Earlier, we looked at an example of the 5 busiest airports in the world in the (/map-guide/adding-markers) section. Building on the same example, we can configure the size of the marker to be defined by the data value associated with the marker. In the chart below, the size of the marker is proportional to the total passenger traffic for the airport.

{% embed_chart map-guide-data-driven-markers.js %}

This is the data structure when you convert it to the FusionCharts Suite XT XML/JSON format

{% embed_data map-guide-data-driven-markers.js %}

This is what we did in the above data structure

* Set the `caption` of the map and applied the `fint` theme (FusionCharts Internal Theme) to control the cosmetic properties of the map. The `useValuesForMarkers` attribute tells the map that to use data driven markers

* The `markerBgColor` color attribute is set to light blue this property when declared at a chart level applies to all markers used on the map. You can override them for specific markers by defining values inside the `markers` object.

* The `markers` object contains an array of `items` each element in this corresponds to a specific marker on the map.

* Individual markers have a unique `id` which you can use to reference the marker later. They have a `shapeId` which specifies the shape of the marker. We have set it to `circle` in the above example, possible values are `arc` , `circle` `polygon` etc . The number of passengers are stored with `value` as key.

* Each marker element also has a `x` and `y` co-ordinate and label text stored with `label` as key.

* The `tooltext` attribute is used to specify the text that displays inside the tooltip. Finally the `labelpos` attribute specifies the display location of the marker.

The full HTML code to build this example is shown here

```html
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

With that you have configured the map with data driven markers.
