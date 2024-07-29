---
title: Custom Entity IDs | FusionCharts
description: All maps in FusionCharts Suite XT have pre defined unique internal IDs to reference each entity
heading: Custom Entity IDs
---

> Replace the map definition files (of v3.12.2 or older) with the latest files available in [download package](https://www.fusioncharts.com/download/fusioncharts-suite-xt) while upgrading to __v3.13.0__.

All maps in FusionCharts Suite XT have predefined unique internal IDs to reference each entity. However, if you need to name these entities differently, you can do that by creating custom IDs for entities on a map. Apart from re-defining identities, you can also re-define the short name and long name of each identity, and use these as the label or tooltip of the map.

Consider the example dataset given in the table below. It shows the population numbers for the different continents. It also has columns for the "FusionCharts Internal ID" for each continent and a custom defined Desired ID.

| Continent     | Desired ID | FusionCharts Internal ID | Population (in millions) |
| ------------- | ---------- | ------------------------ | ------------------------ |
| North America | NAM        | NA                       | 515                      |
| South America | SAM        | SA                       | 373                      |
| Europe        | EUR        | EU                       | 727                      |
| Africa        | AFR        | AF                       | 885                      |
| Asia          | ASI        | AS                       | 3875                     |
| Australia     | AUS        | AU                       | 32                       |

In this example, assume that you want to rename the internal ID for North America from `NA` to `NAM`, that of South America from `SA` to `SAM`, and so on. You can do this by defining new IDs for entities within the `entitydef` array as part of the `dataSource` of the map.

## Refer to the code given below:

```json
{
    "chart": {
        "caption": "Global Population",
        "theme": "fusion",
        "formatNumberScale": "0",
        "numberSuffix": "M",
        "showLabels": "1",
        "useSNameInToolTip": "1",
        "useSNameInLabels": "1"
    },
    "entityDef": [
        {
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
        }
    ],
    "colorrange": {
        "color": [{
            "minvalue": "0",
            "maxvalue": "100",
            "code": "#D1D9C5",
            "displayValue": "< 100M"
        }, {
            "minvalue": "100",
            "maxvalue": "500",
            "code": "#C9DEA9",
            "displayValue": "100-500M"
        }, {
            "minvalue": "500",
            "maxvalue": "1000",
            "code": "#91AF64",
            "displayValue": "500M-1B"
        }, {
            "minvalue": "1000",
            "maxvalue": "5000",
            "code": "#5A9502",
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
```

The map will look as shown below:

{% embed_chart map-guide-custom-entity-ids-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/9vqsaec4/) to edit the above map.

> When defining new IDs for different entities on the map, ensure that you're referring to the right original internal ID. Also, ensure that the entity IDs you redefine are unique.

To build the map shown above, do the following in the HTML code:

* Create a map instance of type `maps/world` in the `populationMap` variable. Set the height and width of this map. Also, set the value of `dataType` to `json`.

* Set the caption of the map to "Global Population" and apply the `fusion` (FusionCharts Internal) theme to control the cosmetic properties of the map. Use the attributes `formatNumberScale`, `showLabels` and `numberSuffixattributes` to specify the formatting of the labels.

* Use the `entityDef` object to specify a `newID` for each `internaID`.

* Use the `colorrange` object to define progressive coloring associated with a numeric data range.

* Specify the tabular data within the data array, referenced by the newly defined `newID`.
