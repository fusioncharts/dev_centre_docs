---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Brunei

#### JavaScript Alias: maps/brunei


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
            "id": "BN.BE"
        },
        {
            "id": "BN.BM"
        },
        {
            "id": "BN.TE"
        },
        {
            "id": "BN.TU"
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
                "id": "BB",
                "shapeid": "myCustomShape",
                "x": "346.01",
                "y": "91.06",
                "label": "Bandar Seri Begawan",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "385.92",
                "y": "41.95",
                "label": "Muara"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "238.57",
                "y": "116.65",
                "label": "Tutong",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "391.03",
                "y": "155.53",
                "label": "Bangar"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "227.31",
                "y": "299.81",
                "label": "Sukang"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "75.87",
                "y": "197.48",
                "label": "Kuala Belait",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "115.78",
                "y": "189.3",
                "label": "Seria"
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
            "id": "BN.BE"
        },
        {
            "id": "BN.BM"
        },
        {
            "id": "BN.TE"
        },
        {
            "id": "BN.TU"
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
                "id": "BB",
                "x": "346.01",
                "y": "91.06",
                "label": "Bandar Seri Begawan",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "385.92",
                "y": "41.95",
                "label": "Muara"
            },
            {
                "id": "02",
                "x": "238.57",
                "y": "116.65",
                "label": "Tutong",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "391.03",
                "y": "155.53",
                "label": "Bangar"
            },
            {
                "id": "05",
                "x": "227.31",
                "y": "299.81",
                "label": "Sukang"
            },
            {
                "id": "06",
                "x": "75.87",
                "y": "197.48",
                "label": "Kuala Belait",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "x": "115.78",
                "y": "189.3",
                "label": "Seria"
            }
        ],
        "application": [
            {
                "id": "BB",
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
