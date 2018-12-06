---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Ghana

#### JavaScript Alias: maps/ghana


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
            "id": "02"
        },
        {
            "id": "03"
        },
        {
            "id": "04"
        },
        {
            "id": "05"
        },
        {
            "id": "01"
        },
        {
            "id": "06"
        },
        {
            "id": "10"
        },
        {
            "id": "11"
        },
        {
            "id": "08"
        },
        {
            "id": "09"
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
                "id": "AC",
                "shapeid": "myCustomShape",
                "x": "194.74",
                "y": "306.76",
                "label": "Accra",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "71.26",
                "y": "323.37",
                "label": "Tarkwa",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "87.32",
                "y": "353.28",
                "label": "Takoradi",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "128.29",
                "y": "338.32",
                "label": "Cape Coast",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "205.26",
                "y": "306.21",
                "label": "Tema",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "188.1",
                "y": "293.47",
                "label": "Nsawam",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "218",
                "y": "268.55",
                "label": "Ho",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "153.77",
                "y": "107.42",
                "label": "Tamale",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "134.39",
                "y": "33.22",
                "label": "Bolgatanga",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "131.06",
                "y": "290.7",
                "label": "Asamankese",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "89.53",
                "y": "258.03",
                "label": "Kumasi",
                "labelpos": "left"
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
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "02"
        },
        {
            "id": "03"
        },
        {
            "id": "04"
        },
        {
            "id": "05"
        },
        {
            "id": "01"
        },
        {
            "id": "06"
        },
        {
            "id": "10"
        },
        {
            "id": "11"
        },
        {
            "id": "08"
        },
        {
            "id": "09"
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
                "id": "AC",
                "x": "194.74",
                "y": "306.76",
                "label": "Accra",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "71.26",
                "y": "323.37",
                "label": "Tarkwa",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "87.32",
                "y": "353.28",
                "label": "Takoradi",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "128.29",
                "y": "338.32",
                "label": "Cape Coast",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "205.26",
                "y": "306.21",
                "label": "Tema",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "188.1",
                "y": "293.47",
                "label": "Nsawam",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "218",
                "y": "268.55",
                "label": "Ho",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "153.77",
                "y": "107.42",
                "label": "Tamale",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "134.39",
                "y": "33.22",
                "label": "Bolgatanga",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "131.06",
                "y": "290.7",
                "label": "Asamankese",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "89.53",
                "y": "258.03",
                "label": "Kumasi",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "AC",
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
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "10",
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
