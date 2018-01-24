---
permalink: map-guide/using-marker-sheets.html
title: Using Marker Sheets | FusionCharts
description: FusionCharts Suite XT let's you create your own markers on a map. You can define any number of markers for each map
heading: Using Marker Sheets
chartPresent: false
---

FusionCharts Suite XT let's you create your own markers on a map. You can define any number of markers for each map. In addition, we have created JSON based marker definitions of important cities for most major maps. These marker definitions can be accessed in the <a href="/maps/marker-data/">Marker Data</a> section.


## Marker Structure in v3.4

The marker structure in v3.4 needs a `shapes` object and an `items` object. The `shapes` object defines the look of the marker. The `items` object contains all the marker related information like the `x` and `y` coordinates, the unique `id` of the marker and other attributes for customization.

<p class="text-info">If you are using the XML data type, change the `items` object to the `<data>` tag.</p>

Shown below is the structure of a typical marker sheet

```javascript
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

Here you can modify the `shapes` object with your own shape definition. In case you are not using the markers as part of your map you can simply delete it from the `markers` object.

## Marker Structure in v3.3 and earlier releases

This structure was followed in v3.3 and earlier versions of the product. This marker structure is not recommended for use with v3.4.

This marker structure has a `shapes` , `definition` and `application` object. The `shapes` object defined how the marker looks. The `definition` object contains the marker data like the `x` and `y` coordinates and a unique `id` of the marker. The `application` object is used to specify which `shape` is to be used with which `definition` and also which markers are to be used in this particular instance of the map.

Given below is an example of the marker structure.

```javascript
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

Click here for a list of all the <a href="/maps/marker-data/">Marker Data</a> files.
