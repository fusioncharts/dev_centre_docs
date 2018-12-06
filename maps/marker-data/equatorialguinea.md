---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: EquatorialGuinea

#### JavaScript Alias: maps/equatorialguinea


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
            "id": "GQ.AN"
        },
        {
            "id": "GQ.BN"
        },
        {
            "id": "GQ.BS"
        },
        {
            "id": "GQ.CS"
        },
        {
            "id": "GQ.KN"
        },
        {
            "id": "GQ.LI"
        },
        {
            "id": "GQ.WN"
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
                "id": "MA",
                "shapeid": "myCustomShape",
                "x": "50.52",
                "y": "21.05",
                "label": "Malabo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "26.31",
                "y": "57.89",
                "label": "Luba"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "297.89",
                "y": "33.68",
                "label": "Ebebiyin",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "300",
                "y": "73.68",
                "label": "Mongomo",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "236.84",
                "y": "123.15",
                "label": "Evinayong",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "116.84",
                "y": "68.42",
                "label": "Bata",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "97.89",
                "y": "100",
                "label": "Mbini",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "98.94",
                "y": "161.05",
                "label": "Acalayong",
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
            "id": "GQ.AN"
        },
        {
            "id": "GQ.BN"
        },
        {
            "id": "GQ.BS"
        },
        {
            "id": "GQ.CS"
        },
        {
            "id": "GQ.KN"
        },
        {
            "id": "GQ.LI"
        },
        {
            "id": "GQ.WN"
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
                "id": "MA",
                "x": "50.52",
                "y": "21.05",
                "label": "Malabo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "26.31",
                "y": "57.89",
                "label": "Luba"
            },
            {
                "id": "02",
                "x": "297.89",
                "y": "33.68",
                "label": "Ebebiyin",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "300",
                "y": "73.68",
                "label": "Mongomo",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "236.84",
                "y": "123.15",
                "label": "Evinayong",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "116.84",
                "y": "68.42",
                "label": "Bata",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "97.89",
                "y": "100",
                "label": "Mbini",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "x": "98.94",
                "y": "161.05",
                "label": "Acalayong",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "MA",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
