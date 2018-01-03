---
permalink: map-guide/custom-entity-ids.html
title: Custom Entity IDs | FusionCharts
description: All maps in FusionCharts Suite XT have pre defined unique internal IDs to reference each entity
heading: Custom Entity IDs
chartPresent: true
---

All maps in FusionCharts Suite XT have pre defined unique internal IDs to reference each entity. Based on your use case you might want to name these entities differently. You can solve this problem by creating custom IDs for entities on a map. Apart from re-defining identities, you can also re-define the short name and long name of each identity, and use these as the label or tooltip of the map.

Let's work with a simple example of population map by continents. The table below shows the population numbers for the different continents. It also has columns for the "FusionCharts Internal ID" for each continent and a custom defined Desired ID.

<table>
  <tr>
    <th>Continent </th>
    <th>Desired ID</th>
    <th>FusionCharts Internal ID</th>
    <th>Population (in millions)</th>
  </tr>
  <tr>
    <td>North America </td>
    <td>NAM</td>
    <td>NA</td>
    <td>515</td>
  </tr>
  <tr>
    <td>South America</td>
    <td>SAM</td>
    <td>SA</td>
    <td>373</td>
  </tr>
  <tr>
    <td>Europe</td>
    <td>EUR</td>
    <td>EU</td>
    <td>727</td>
  </tr>
  <tr>
    <td>Africa</td>
    <td>AFR</td>
    <td>AF</td>
    <td>885</td>
  </tr>
  <tr>
    <td>Asia</td>
    <td>ASI</td>
    <td>AS</td>
    <td>3875</td>
  </tr>
  <tr>
    <td>Australia</td>
    <td>AUS</td>
    <td>AU</td>
    <td>32</td>
  </tr>
</table>


In this example, we want to rename the internal ID for North America from `NA` to `NAM` and for South America from `SA` to `SAM` and so on.

This can be done by defining new IDs for entities within the `entitydef` array as part of the `dataSource` of the map.

The data structure of a world map with new IDs set is shown below

{% embed_data map-guide-custom-entity-ids.js %}

With the newly defined custom entity IDs, the map looks like this:

{% embed_chart map-guide-custom-entity-ids.js %}

<p class="text-info">When defining new IDs for different entities on the map, ensure that you're referring to the right original internal ID. Also ensure that the redefined entity IDs are unique.</p>

The full HTML code to build the example is shown here

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
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Global Population",
                "theme": "fint",
                "formatNumberScale": "0",
                "numberSuffix": "M",
                "showLabels": "1",
                "useSNameInToolTip": "1",
                "useSNameInLabels": "1"
            },
            "entityDef": [{
                "internalId": "NA",
                "newId": "NAM"
            }, {
                "internalId": "SA",
                "newId": "SAM"
            }, {
                "internalId": "EU",
                "newId": "EUR"
            }, {
                "internalId": "AS",
                "newId": "ASI"
            }, {
                "internalId": "AF",
                "newId": "AFR"
            }, {
                "internalId": "AU",
                "newId": "AUS"
            }],
            "colorrange": {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "100",
                    "code": "#D0DFA3",
                    "displayValue": "< 100M"
                }, {
                    "minvalue": "100",
                    "maxvalue": "500",
                    "code": "#B0BF92",
                    "displayValue": "100-500M"
                }, {
                    "minvalue": "500",
                    "maxvalue": "1000",
                    "code": "#91AF64",
                    "displayValue": "500M-1B"
                }, {
                    "minvalue": "1000",
                    "maxvalue": "5000",
                    "code": "#A9FF8D",
                    "displayValue": "> 1B"
                }]
            },
            "data": [{
                "id": "NAM",
                "value": "515"
            }, {
                "id": "SAM",
                "value": "373"
            }, {
                "id": "ASI",
                "value": "3875"
            }, {
                "id": "EUR",
                "value": "727"
            }, {
                "id": "AFR",
                "value": "885"
            }, {
                "id": "AUS",
                "value": "32"
            }]
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

This is what we did in the above data structure

* Created a map instance of type `maps/world` in the `populationMap` variable. We set the `height` and `width` of this map. Also the `dataType` was set to `json`.

* Set the `caption` of the map to "Global Population" and applied the `fint` (FusionCharts Internal) theme to control the cosmetic properties of the map. The `formatNumberScale` , `showLabels` and `numberSuffix` attributes were used to specify the formatting of the labels.

* Used the `entityDef` object to specify a `newID` for each `internaID`.

* Used the `colorrange` object to define progressive coloring associated with a numeric data range.

* Specified the tabular data within the `data` array, referenced by the newly defined  `newID`.
