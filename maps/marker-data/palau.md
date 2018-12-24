---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Palau

#### JavaScript Alias: maps/palau


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
            "id": "PW.AM"
        },
        {
            "id": "PW.AR"
        },
        {
            "id": "PW.AN"
        },
        {
            "id": "PW.HA"
        },
        {
            "id": "PW.KA"
        },
        {
            "id": "PW.KO"
        },
        {
            "id": "PW.ME"
        },
        {
            "id": "PW.ND"
        },
        {
            "id": "PW.NC"
        },
        {
            "id": "PW.NM"
        },
        {
            "id": "PW.NP"
        },
        {
            "id": "PW.NS"
        },
        {
            "id": "PW.NL"
        },
        {
            "id": "PW.NW"
        },
        {
            "id": "PW.PE"
        },
        {
            "id": "PW.SO"
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
                "id": "ME",
                "shapeid": "myCustomShape",
                "x": "590.37",
                "y": "228.01",
                "label": "Melekeok",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "497.9",
                "y": "377.39",
                "label": "Koror",
                "labelpos": "right"
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
            "id": "PW.AM"
        },
        {
            "id": "PW.AR"
        },
        {
            "id": "PW.AN"
        },
        {
            "id": "PW.HA"
        },
        {
            "id": "PW.KA"
        },
        {
            "id": "PW.KO"
        },
        {
            "id": "PW.ME"
        },
        {
            "id": "PW.ND"
        },
        {
            "id": "PW.NC"
        },
        {
            "id": "PW.NM"
        },
        {
            "id": "PW.NP"
        },
        {
            "id": "PW.NS"
        },
        {
            "id": "PW.NL"
        },
        {
            "id": "PW.NW"
        },
        {
            "id": "PW.PE"
        },
        {
            "id": "PW.SO"
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
                "id": "ME",
                "x": "590.37",
                "y": "228.01",
                "label": "Melekeok",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "497.9",
                "y": "377.39",
                "label": "Koror",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "ME",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
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
