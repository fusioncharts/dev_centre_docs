---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SolomonIslands

#### JavaScript Alias: maps/solomonislands


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
            "id": "SB.CN"
        },
        {
            "id": "SB.CH"
        },
        {
            "id": "SB.GC"
        },
        {
            "id": "SB.IS"
        },
        {
            "id": "SB.MK"
        },
        {
            "id": "SB.ML"
        },
        {
            "id": "SB.RB"
        },
        {
            "id": "SB.TE"
        },
        {
            "id": "SB.WE"
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
                "id": "HO",
                "shapeid": "myCustomShape",
                "x": "220.41",
                "y": "144.34",
                "label": "Honiara",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "83.33",
                "y": "84.11",
                "label": "Gizo",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "267.14",
                "y": "162",
                "label": "Aola",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "193.41",
                "y": "129.8",
                "label": "Yandina"
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
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "SB.CN"
        },
        {
            "id": "SB.CH"
        },
        {
            "id": "SB.GC"
        },
        {
            "id": "SB.IS"
        },
        {
            "id": "SB.MK"
        },
        {
            "id": "SB.ML"
        },
        {
            "id": "SB.RB"
        },
        {
            "id": "SB.TE"
        },
        {
            "id": "SB.WE"
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
                "id": "HO",
                "x": "220.41",
                "y": "144.34",
                "label": "Honiara",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "83.33",
                "y": "84.11",
                "label": "Gizo",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "267.14",
                "y": "162",
                "label": "Aola",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "193.41",
                "y": "129.8",
                "label": "Yandina"
            }
        ],
        "application": [
            {
                "id": "HO",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
