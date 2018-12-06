---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: FalklandIsland

#### JavaScript Alias: maps/falklandisland


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
</ul>
<div class='tab-content'>
    
<div class='tab new-json-tab active'>
<pre><code class="language-javascript">
{
    "map": {
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "CCCCCC",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "usehovercolor": "0",
        "hoveronempty": "0",
        "showmarkertooltip": "1",
        "canvasBorderColor": "375277",
        "canvasBorderAlpha": "0"
    },
    "data": [
        {
            "id": "NA.FK"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "ST",
                "shapeid": "myCustomShape",
                "x": "343.13",
                "y": "102.41",
                "label": "Stanley"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "193.13",
                "y": "48.62",
                "label": "Pebble Island"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "137.27",
                "y": "57.93",
                "label": "Saunders Island",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "86.58",
                "y": "62.06",
                "label": "West Point Island",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "39",
                "y": "113.79",
                "label": "New Island"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "243.82",
                "y": "131.37",
                "label": "Goose Green",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "283.13",
                "y": "118.96",
                "label": "Mt. Pleasant",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "241.75",
                "y": "208.96",
                "label": "Sea Lion Island",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "194.17",
                "y": "88.96",
                "label": "Port Howard",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "96.93",
                "y": "48.62",
                "label": "Carcass Island"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-javascript">
{
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1",
        "showlabels": "0"
    },
    "data": [
        {
            "id": "NA.FK"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "ST",
                "x": "343.13",
                "y": "102.41",
                "label": "Stanley"
            },
            {
                "id": "01",
                "x": "193.13",
                "y": "48.62",
                "label": "Pebble Island"
            },
            {
                "id": "02",
                "x": "137.27",
                "y": "57.93",
                "label": "Saunders Island",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "86.58",
                "y": "62.06",
                "label": "West Point Island",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "x": "39",
                "y": "113.79",
                "label": "New Island"
            },
            {
                "id": "05",
                "x": "243.82",
                "y": "131.37",
                "label": "Goose Green",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "283.13",
                "y": "118.96",
                "label": "Mt. Pleasant",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "241.75",
                "y": "208.96",
                "label": "Sea Lion Island",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "194.17",
                "y": "88.96",
                "label": "Port Howard",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "96.93",
                "y": "48.62",
                "label": "Carcass Island"
            }
        ],
        "application": [
            {
                "id": "ST",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
