---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: CaymanIslands

#### JavaScript Alias: maps/caymanislands


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
            "id": "KY.BT"
        },
        {
            "id": "KY.CB"
        },
        {
            "id": "KY.EE"
        },
        {
            "id": "KY.GT"
        },
        {
            "id": "KY.SO"
        },
        {
            "id": "KY.NS"
        },
        {
            "id": "KY.WB"
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
                "id": "GE",
                "shapeid": "myCustomShape",
                "x": "134.76",
                "y": "418.51",
                "label": "George Town",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "142.94",
                "y": "323.34",
                "label": "Rum Point"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "883.78",
                "y": "22.51",
                "label": "The Bluff",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "600.34",
                "y": "72.65",
                "label": "Jackson Point"
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
            "id": "KY.BT"
        },
        {
            "id": "KY.CB"
        },
        {
            "id": "KY.EE"
        },
        {
            "id": "KY.GT"
        },
        {
            "id": "KY.SO"
        },
        {
            "id": "KY.NS"
        },
        {
            "id": "KY.WB"
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
                "id": "GE",
                "x": "134.76",
                "y": "418.51",
                "label": "George Town",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "142.94",
                "y": "323.34",
                "label": "Rum Point"
            },
            {
                "id": "02",
                "x": "883.78",
                "y": "22.51",
                "label": "The Bluff",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "600.34",
                "y": "72.65",
                "label": "Jackson Point"
            }
        ],
        "application": [
            {
                "id": "GE",
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
