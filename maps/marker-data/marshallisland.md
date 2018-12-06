---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: MarshallIsland

#### JavaScript Alias: maps/marshallisland


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
            "id": "MH.MH.AI"
        },
        {
            "id": "MH.MH.AR"
        },
        {
            "id": "MH.MH.BR"
        },
        {
            "id": "MH.MH.BN"
        },
        {
            "id": "MH.MH.EE"
        },
        {
            "id": "MH.MH.EB"
        },
        {
            "id": "MH.MH.EN"
        },
        {
            "id": "MH.MH.ER"
        },
        {
            "id": "MH.MH.JL"
        },
        {
            "id": "MH.MH.KO"
        },
        {
            "id": "MH.MH.KN"
        },
        {
            "id": "MH.MH.KW"
        },
        {
            "id": "MH.MH.LK"
        },
        {
            "id": "MH.MH.MJ"
        },
        {
            "id": "MH.MH.ML"
        },
        {
            "id": "MH.MH.ME"
        },
        {
            "id": "MH.MH.MI"
        },
        {
            "id": "MH.MH.NK"
        },
        {
            "id": "MH.MH.NU"
        },
        {
            "id": "MH.MH.RL"
        },
        {
            "id": "MH.MH.RR"
        },
        {
            "id": "MH.MH.TA"
        },
        {
            "id": "MH.MH.TO"
        },
        {
            "id": "MH.MH.UJ"
        },
        {
            "id": "MH.MH.UL"
        },
        {
            "id": "MH.MH.UT"
        },
        {
            "id": "MH.MH.WH"
        },
        {
            "id": "MH.MH.WJ"
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
                "id": "MA",
                "shapeid": "myCustomShape",
                "x": "311.22",
                "y": "207.93",
                "label": "Majuro"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "213.98",
                "y": "165.51",
                "label": "Ebeye"
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
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "MH.MH.AI"
        },
        {
            "id": "MH.MH.AR"
        },
        {
            "id": "MH.MH.BR"
        },
        {
            "id": "MH.MH.BN"
        },
        {
            "id": "MH.MH.EE"
        },
        {
            "id": "MH.MH.EB"
        },
        {
            "id": "MH.MH.EN"
        },
        {
            "id": "MH.MH.ER"
        },
        {
            "id": "MH.MH.JL"
        },
        {
            "id": "MH.MH.KO"
        },
        {
            "id": "MH.MH.KN"
        },
        {
            "id": "MH.MH.KW"
        },
        {
            "id": "MH.MH.LK"
        },
        {
            "id": "MH.MH.MJ"
        },
        {
            "id": "MH.MH.ML"
        },
        {
            "id": "MH.MH.ME"
        },
        {
            "id": "MH.MH.MI"
        },
        {
            "id": "MH.MH.NK"
        },
        {
            "id": "MH.MH.NU"
        },
        {
            "id": "MH.MH.RL"
        },
        {
            "id": "MH.MH.RR"
        },
        {
            "id": "MH.MH.TA"
        },
        {
            "id": "MH.MH.TO"
        },
        {
            "id": "MH.MH.UJ"
        },
        {
            "id": "MH.MH.UL"
        },
        {
            "id": "MH.MH.UT"
        },
        {
            "id": "MH.MH.WH"
        },
        {
            "id": "MH.MH.WJ"
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
                "id": "MA",
                "x": "311.22",
                "y": "207.93",
                "label": "Majuro"
            },
            {
                "id": "01",
                "x": "213.98",
                "y": "165.51",
                "label": "Ebeye"
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
