---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: EastTimor

#### JavaScript Alias: maps/easttimor


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
            "id": "TL.AL"
        },
        {
            "id": "TL.AN"
        },
        {
            "id": "TL.AM"
        },
        {
            "id": "TL.BC"
        },
        {
            "id": "TL.BB"
        },
        {
            "id": "TL.CL"
        },
        {
            "id": "TL.DL"
        },
        {
            "id": "TL.ER"
        },
        {
            "id": "TL.BT"
        },
        {
            "id": "TL.LQ"
        },
        {
            "id": "TL.MT"
        },
        {
            "id": "TL.MF"
        },
        {
            "id": "TL.VQ"
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
                "id": "DI",
                "shapeid": "myCustomShape",
                "x": "517.75",
                "y": "143.11",
                "label": "Dili"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "633.26",
                "y": "136.97",
                "label": "Manatuto"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "766.15",
                "y": "113.46",
                "label": "Baucua"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "929.71",
                "y": "145.15",
                "label": "Los Palos",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "731.4",
                "y": "256.57",
                "label": "Viqueque"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "525.93",
                "y": "277.02",
                "label": "Same",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "477.88",
                "y": "288.26",
                "label": "Ainaro",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "372.6",
                "y": "396.62",
                "label": "Suai"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "346.02",
                "y": "279.06",
                "label": "Maliana"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "427.8",
                "y": "235.11",
                "label": "Ermera"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "87.4",
                "y": "357.77",
                "label": "Pante Makasar"
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
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showshowmarkertooltip": "1"
    },
    "data": [
        {
            "id": "TL.AL"
        },
        {
            "id": "TL.AN"
        },
        {
            "id": "TL.AM"
        },
        {
            "id": "TL.BC"
        },
        {
            "id": "TL.BB"
        },
        {
            "id": "TL.CL"
        },
        {
            "id": "TL.DL"
        },
        {
            "id": "TL.ER"
        },
        {
            "id": "TL.BT"
        },
        {
            "id": "TL.LQ"
        },
        {
            "id": "TL.MT"
        },
        {
            "id": "TL.MF"
        },
        {
            "id": "TL.VQ"
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
                "id": "DI",
                "x": "517.75",
                "y": "143.11",
                "label": "Dili"
            },
            {
                "id": "01",
                "x": "633.26",
                "y": "136.97",
                "label": "Manatuto"
            },
            {
                "id": "02",
                "x": "766.15",
                "y": "113.46",
                "label": "Baucua"
            },
            {
                "id": "03",
                "x": "929.71",
                "y": "145.15",
                "label": "Los Palos",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "731.4",
                "y": "256.57",
                "label": "Viqueque"
            },
            {
                "id": "06",
                "x": "525.93",
                "y": "277.02",
                "label": "Same",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "477.88",
                "y": "288.26",
                "label": "Ainaro",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "372.6",
                "y": "396.62",
                "label": "Suai"
            },
            {
                "id": "10",
                "x": "346.02",
                "y": "279.06",
                "label": "Maliana"
            },
            {
                "id": "12",
                "x": "427.8",
                "y": "235.11",
                "label": "Ermera"
            },
            {
                "id": "13",
                "x": "87.4",
                "y": "357.77",
                "label": "Pante Makasar"
            }
        ],
        "application": [
            {
                "id": "DI",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
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
