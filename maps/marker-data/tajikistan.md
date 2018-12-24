---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Tajikistan

#### JavaScript Alias: maps/tajikistan


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
            "id": "TJ.BK"
        },
        {
            "id": "TM.KL"
        },
        {
            "id": "TM.RR"
        },
        {
            "id": "TM.LE"
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
                "id": "DU",
                "shapeid": "myCustomShape",
                "x": "65.06",
                "y": "128.34",
                "label": "Dushanbe"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "27.49",
                "y": "87.65",
                "label": "Panjakent"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "98.45",
                "y": "53.21",
                "label": "Khujand"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "124.53",
                "y": "118.95",
                "label": "Garm"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "105.75",
                "y": "161.73",
                "label": "Kulob"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "80.71",
                "y": "170.08",
                "label": "Ourghomteppa",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "172.53",
                "y": "189.91",
                "label": "Khorugh",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "251.84",
                "y": "152.34",
                "label": "Murghob"
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
            "id": "TJ.BK"
        },
        {
            "id": "TM.KL"
        },
        {
            "id": "TM.RR"
        },
        {
            "id": "TM.LE"
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
                "id": "DU",
                "x": "65.06",
                "y": "128.34",
                "label": "Dushanbe"
            },
            {
                "id": "01",
                "x": "27.49",
                "y": "87.65",
                "label": "Panjakent"
            },
            {
                "id": "02",
                "x": "98.45",
                "y": "53.21",
                "label": "Khujand"
            },
            {
                "id": "03",
                "x": "124.53",
                "y": "118.95",
                "label": "Garm"
            },
            {
                "id": "04",
                "x": "105.75",
                "y": "161.73",
                "label": "Kulob"
            },
            {
                "id": "05",
                "x": "80.71",
                "y": "170.08",
                "label": "Ourghomteppa",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "172.53",
                "y": "189.91",
                "label": "Khorugh",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "251.84",
                "y": "152.34",
                "label": "Murghob"
            }
        ],
        "application": [
            {
                "id": "DU",
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
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
