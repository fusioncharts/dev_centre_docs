---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: WesternSahara

#### JavaScript Alias: maps/westernsahara


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
            "id": "AF.WS"
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
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "160.86",
                "y": "38.27",
                "label": "Laayoune (El Aaiun)"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "209.48",
                "y": "59.99",
                "label": "Semara"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "122.58",
                "y": "79.65",
                "label": "Cabo Bojador",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "170.17",
                "y": "67.24",
                "label": "Bu Craa",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShapee",
                "x": "188.79",
                "y": "152.06",
                "label": "Guelta Zemmur",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "55.34",
                "y": "177.93",
                "label": "Ad Dakhla"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "27.41",
                "y": "261.72",
                "label": "Bir Gandus",
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
            "id": "AF.WS"
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
                "id": "01",
                "x": "160.86",
                "y": "38.27",
                "label": "Laayoune (El Aaiun)"
            },
            {
                "id": "02",
                "x": "209.48",
                "y": "59.99",
                "label": "Semara"
            },
            {
                "id": "03",
                "x": "122.58",
                "y": "79.65",
                "label": "Cabo Bojador",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "170.17",
                "y": "67.24",
                "label": "Bu Craa",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "188.79",
                "y": "152.06",
                "label": "Guelta Zemmur",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "55.34",
                "y": "177.93",
                "label": "Ad Dakhla"
            },
            {
                "id": "07",
                "x": "27.41",
                "y": "261.72",
                "label": "Bir Gandus",
                "labelpos": "right"
            }
        ],
        "application": [
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
                "shapeid": "newCustomShapee"
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
