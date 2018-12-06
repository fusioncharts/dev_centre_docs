---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Manitoba

#### JavaScript Alias: maps/manitoba


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
            "id": "CA.MB.CR"
        },
        {
            "id": "CA.MB.ER"
        },
        {
            "id": "CA.MB.IR"
        },
        {
            "id": "CA.MB.NR"
        },
        {
            "id": "CA.MB.PM"
        },
        {
            "id": "CA.MB.PR"
        },
        {
            "id": "CA.MB.WI"
        },
        {
            "id": "CA.MB.WR"
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
                "id": "WI",
                "shapeid": "myCustomShape",
                "x": "124.5",
                "y": "426.83",
                "label": "Winnipeg",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "185.88",
                "y": "70.97",
                "label": "Churchill",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "183.97",
                "y": "157.3",
                "label": "Gillam"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "22.82",
                "y": "85.36",
                "label": "Brochet",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "81.33",
                "y": "183.2",
                "label": "Thompson",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "15.15",
                "y": "203.34",
                "label": "Flin Flon",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "28.58",
                "y": "226.36",
                "label": "Le Pas",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "76.54",
                "y": "267.61",
                "label": "Grand Rapids"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "130.25",
                "y": "214.85",
                "label": "Norway House",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "127.37",
                "y": "376",
                "label": "Pine Dock",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "76.54",
                "y": "433.55",
                "label": "Brandon",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "64.07",
                "y": "409.57",
                "label": "Dauphin",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "24.74",
                "y": "137.16",
                "label": "Lynn Lake",
                "labelpos": "right"
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
            "id": "CA.MB.CR"
        },
        {
            "id": "CA.MB.ER"
        },
        {
            "id": "CA.MB.IR"
        },
        {
            "id": "CA.MB.NR"
        },
        {
            "id": "CA.MB.PM"
        },
        {
            "id": "CA.MB.PR"
        },
        {
            "id": "CA.MB.WI"
        },
        {
            "id": "CA.MB.WR"
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
                "id": "WI",
                "x": "124.5",
                "y": "426.83",
                "label": "Winnipeg",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "185.88",
                "y": "70.97",
                "label": "Churchill",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "183.97",
                "y": "157.3",
                "label": "Gillam"
            },
            {
                "id": "03",
                "x": "22.82",
                "y": "85.36",
                "label": "Brochet",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "81.33",
                "y": "183.2",
                "label": "Thompson",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "15.15",
                "y": "203.34",
                "label": "Flin Flon",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "28.58",
                "y": "226.36",
                "label": "Le Pas",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "76.54",
                "y": "267.61",
                "label": "Grand Rapids"
            },
            {
                "id": "09",
                "x": "130.25",
                "y": "214.85",
                "label": "Norway House",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "127.37",
                "y": "376",
                "label": "Pine Dock",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "76.54",
                "y": "433.55",
                "label": "Brandon",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "64.07",
                "y": "409.57",
                "label": "Dauphin",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "24.74",
                "y": "137.16",
                "label": "Lynn Lake",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "WI",
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
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
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
