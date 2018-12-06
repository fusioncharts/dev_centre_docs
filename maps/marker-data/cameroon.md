---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Cameroon

#### JavaScript Alias: maps/cameroon


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
            "id": "CM.AD"
        },
        {
            "id": "CM.CE"
        },
        {
            "id": "CM.ES"
        },
        {
            "id": "CM.EN"
        },
        {
            "id": "CM.LT"
        },
        {
            "id": "CM.NO"
        },
        {
            "id": "CM.NW"
        },
        {
            "id": "CM.OU"
        },
        {
            "id": "CM.SU"
        },
        {
            "id": "CM.SW"
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
                "id": "YA",
                "shapeid": "myCustomShape",
                "x": "222.04",
                "y": "472.07",
                "label": "Yaounde",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "305.95",
                "y": "114.96",
                "label": "Maroua",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "258.88",
                "y": "186.59",
                "label": "Garoua",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "92.09",
                "y": "525.28",
                "label": "Kribi",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "76.74",
                "y": "465.93",
                "label": "Douala",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "60.37",
                "y": "454.68",
                "label": "Tiko",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "81.86",
                "y": "425",
                "label": "Nkongsamba",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "94.13",
                "y": "383.05",
                "label": "Bafoussam",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "80.83",
                "y": "352.35",
                "label": "Bamenda",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "277.3",
                "y": "267.42",
                "label": "Ngaoundere",
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
            "id": "CM.AD"
        },
        {
            "id": "CM.CE"
        },
        {
            "id": "CM.ES"
        },
        {
            "id": "CM.EN"
        },
        {
            "id": "CM.LT"
        },
        {
            "id": "CM.NO"
        },
        {
            "id": "CM.NW"
        },
        {
            "id": "CM.OU"
        },
        {
            "id": "CM.SU"
        },
        {
            "id": "CM.SW"
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
                "id": "YA",
                "x": "222.04",
                "y": "472.07",
                "label": "Yaounde",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "305.95",
                "y": "114.96",
                "label": "Maroua",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "x": "258.88",
                "y": "186.59",
                "label": "Garoua",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "92.09",
                "y": "525.28",
                "label": "Kribi",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "76.74",
                "y": "465.93",
                "label": "Douala",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "60.37",
                "y": "454.68",
                "label": "Tiko",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "81.86",
                "y": "425",
                "label": "Nkongsamba",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "94.13",
                "y": "383.05",
                "label": "Bafoussam",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "80.83",
                "y": "352.35",
                "label": "Bamenda",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "x": "277.3",
                "y": "267.42",
                "label": "Ngaoundere",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "YA",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
