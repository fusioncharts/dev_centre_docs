---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Bhutan

#### JavaScript Alias: maps/bhutan


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
            "id": "BT.BU"
        },
        {
            "id": "BT.CK"
        },
        {
            "id": "BT.CR"
        },
        {
            "id": "BT.DA"
        },
        {
            "id": "BT.GA"
        },
        {
            "id": "BT.GE"
        },
        {
            "id": "BT.HA"
        },
        {
            "id": "BT.LH"
        },
        {
            "id": "BT.MO"
        },
        {
            "id": "BT.PR"
        },
        {
            "id": "BT.PM"
        },
        {
            "id": "BT.PN"
        },
        {
            "id": "BT.SM"
        },
        {
            "id": "BT.SJ"
        },
        {
            "id": "BT.SG"
        },
        {
            "id": "BT.TA"
        },
        {
            "id": "BT.TM"
        },
        {
            "id": "BT.TO"
        },
        {
            "id": "BT.TY"
        },
        {
            "id": "BT.WP"
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
                "id": "TH",
                "shapeid": "myCustomShape",
                "x": "216.06",
                "y": "221.02",
                "label": "Thimphu"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "187.4",
                "y": "235.34",
                "label": "Paro",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "151.59",
                "y": "366.32",
                "label": "Phuntsholing",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "392.06",
                "y": "209.76",
                "label": "Tongsa"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "634.57",
                "y": "270.13",
                "label": "Tashigang"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "605.92",
                "y": "386.79",
                "label": "Samdrup Jongkhar"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "262.1",
                "y": "82.88",
                "label": "Gasa Dzong"
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
            "id": "BT.BU"
        },
        {
            "id": "BT.CK"
        },
        {
            "id": "BT.CR"
        },
        {
            "id": "BT.DA"
        },
        {
            "id": "BT.GA"
        },
        {
            "id": "BT.GE"
        },
        {
            "id": "BT.HA"
        },
        {
            "id": "BT.LH"
        },
        {
            "id": "BT.MO"
        },
        {
            "id": "BT.PR"
        },
        {
            "id": "BT.PM"
        },
        {
            "id": "BT.PN"
        },
        {
            "id": "BT.SM"
        },
        {
            "id": "BT.SJ"
        },
        {
            "id": "BT.SG"
        },
        {
            "id": "BT.TA"
        },
        {
            "id": "BT.TM"
        },
        {
            "id": "BT.TO"
        },
        {
            "id": "BT.TY"
        },
        {
            "id": "BT.WP"
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
                "id": "TH",
                "x": "216.06",
                "y": "221.02",
                "label": "Thimphu"
            },
            {
                "id": "01",
                "x": "187.4",
                "y": "235.34",
                "label": "Paro",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "151.59",
                "y": "366.32",
                "label": "Phuntsholing",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "392.06",
                "y": "209.76",
                "label": "Tongsa"
            },
            {
                "id": "05",
                "x": "634.57",
                "y": "270.13",
                "label": "Tashigang"
            },
            {
                "id": "06",
                "x": "605.92",
                "y": "386.79",
                "label": "Samdrup Jongkhar"
            },
            {
                "id": "07",
                "x": "262.1",
                "y": "82.88",
                "label": "Gasa Dzong"
            }
        ],
        "application": [
            {
                "id": "TH",
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
