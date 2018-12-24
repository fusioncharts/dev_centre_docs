---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Kuwait

#### JavaScript Alias: maps/kuwait


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
            "id": "KW.AH"
        },
        {
            "id": "KW.KU"
        },
        {
            "id": "KW.FA"
        },
        {
            "id": "KW.JA"
        },
        {
            "id": "KW.HW"
        },
        {
            "id": "KW.MU"
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
                "id": "KU",
                "shapeid": "myCustomShape",
                "x": "386.58",
                "y": "235.71",
                "label": "Kuwait",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "369.23",
                "y": "245.91",
                "label": "Ash Shuwaykh",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "309.03",
                "y": "242.85",
                "label": "Al Jahrah",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "432.5",
                "y": "190.81",
                "label": "Qasr as Sabiyah",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "312.09",
                "y": "24.48",
                "label": "Abdali",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "417.19",
                "y": "319.38",
                "label": "Mina al Ahmadi",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "423.31",
                "y": "343.87",
                "label": "Ash Shuaybah",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "430.45",
                "y": "352.04",
                "label": "Mina Abd Allah",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "489.64",
                "y": "426.53",
                "label": "Mina Su'ud"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "490.66",
                "y": "471.42",
                "label": "Qasr",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "380.45",
                "y": "461.22",
                "label": "Al Wafrah"
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
            "id": "KW.AH"
        },
        {
            "id": "KW.KU"
        },
        {
            "id": "KW.FA"
        },
        {
            "id": "KW.JA"
        },
        {
            "id": "KW.HW"
        },
        {
            "id": "KW.MU"
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
                "id": "KU",
                "x": "386.58",
                "y": "235.71",
                "label": "Kuwait",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "369.23",
                "y": "245.91",
                "label": "Ash Shuwaykh",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "309.03",
                "y": "242.85",
                "label": "Al Jahrah",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "432.5",
                "y": "190.81",
                "label": "Qasr as Sabiyah",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "312.09",
                "y": "24.48",
                "label": "Abdali",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "417.19",
                "y": "319.38",
                "label": "Mina al Ahmadi",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "423.31",
                "y": "343.87",
                "label": "Ash Shuaybah",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "430.45",
                "y": "352.04",
                "label": "Mina Abd Allah",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "489.64",
                "y": "426.53",
                "label": "Mina Su'ud"
            },
            {
                "id": "08",
                "x": "490.66",
                "y": "471.42",
                "label": "Qasr",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "380.45",
                "y": "461.22",
                "label": "Al Wafrah"
            }
        ],
        "application": [
            {
                "id": "KU",
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
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
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
