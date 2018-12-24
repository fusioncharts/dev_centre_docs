---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: FrenchGuiana

#### JavaScript Alias: maps/frenchguiana


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
<pre><code class="language-json">
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
            "id": "GF.SL.AP"
        },
        {
            "id": "GF.SL.AY"
        },
        {
            "id": "GF.CY.CM"
        },
        {
            "id": "GF.CY.CY"
        },
        {
            "id": "GF.SL.GS"
        },
        {
            "id": "GF.CY.IR"
        },
        {
            "id": "GF.CY.KR"
        },
        {
            "id": "GF.CY.MC"
        },
        {
            "id": "GF.SL.MN"
        },
        {
            "id": "GF.SL.MP"
        },
        {
            "id": "GF.CY.MY"
        },
        {
            "id": "GF.CY.MT"
        },
        {
            "id": "GF.CY.OU"
        },
        {
            "id": "GF.SL.PA"
        },
        {
            "id": "GF.CY.RK"
        },
        {
            "id": "GF.CY.RM"
        },
        {
            "id": "GF.CY.RO"
        },
        {
            "id": "GF.CY.SE"
        },
        {
            "id": "GF.CY.SG"
        },
        {
            "id": "GF.SL.SL"
        },
        {
            "id": "GF.SL.SA"
        },
        {
            "id": "GF.SL.SI"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "CA",
                "shapeid": "myCustomShape",
                "x": "277.5",
                "y": "110.79",
                "label": "Cayenne"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "60.63",
                "y": "61.46",
                "label": "Saint-Laurent de Maroni"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "225.08",
                "y": "73.79",
                "label": "Kourou"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "277.5",
                "y": "124.15",
                "label": "Matoury",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "288.8",
                "y": "122.09",
                "label": "Degrad des Cannes",
                "labelpos": "bottom"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "335.05",
                "y": "226.93",
                "label": "Saint-Georges"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "155.19",
                "y": "251.6",
                "label": "Saul"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-json">
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
            "id": "GF.SL.AP"
        },
        {
            "id": "GF.SL.AY"
        },
        {
            "id": "GF.CY.CM"
        },
        {
            "id": "GF.CY.CY"
        },
        {
            "id": "GF.SL.GS"
        },
        {
            "id": "GF.CY.IR"
        },
        {
            "id": "GF.CY.KR"
        },
        {
            "id": "GF.CY.MC"
        },
        {
            "id": "GF.SL.MN"
        },
        {
            "id": "GF.SL.MP"
        },
        {
            "id": "GF.CY.MY"
        },
        {
            "id": "GF.CY.MT"
        },
        {
            "id": "GF.CY.OU"
        },
        {
            "id": "GF.SL.PA"
        },
        {
            "id": "GF.CY.RK"
        },
        {
            "id": "GF.CY.RM"
        },
        {
            "id": "GF.CY.RO"
        },
        {
            "id": "GF.CY.SE"
        },
        {
            "id": "GF.CY.SG"
        },
        {
            "id": "GF.SL.SL"
        },
        {
            "id": "GF.SL.SA"
        },
        {
            "id": "GF.SL.SI"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "CA",
                "x": "277.5",
                "y": "110.79",
                "label": "Cayenne"
            },
            {
                "id": "01",
                "x": "60.63",
                "y": "61.46",
                "label": "Saint-Laurent de Maroni"
            },
            {
                "id": "02",
                "x": "225.08",
                "y": "73.79",
                "label": "Kourou"
            },
            {
                "id": "04",
                "x": "277.5",
                "y": "124.15",
                "label": "Matoury",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "288.8",
                "y": "122.09",
                "label": "Degrad des Cannes",
                "labelpos": "bottom"
            },
            {
                "id": "06",
                "x": "335.05",
                "y": "226.93",
                "label": "Saint-Georges"
            },
            {
                "id": "07",
                "x": "155.19",
                "y": "251.6",
                "label": "Saul"
            }
        ],
        "application": [
            {
                "id": "CA",
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
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
