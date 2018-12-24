---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Liechtenstein

#### JavaScript Alias: maps/liechtenstein


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
                "id": "VA",
                "shapeid": "myCustomShape",
                "x": "101.26",
                "y": "307.26",
                "label": "Vaduz ",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "103.33",
                "y": "67.52",
                "label": "Ruggell"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "116.76",
                "y": "180.16",
                "label": "Nendeln"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "77.49",
                "y": "246.29",
                "label": "Schaan"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "254.19",
                "y": "439.52",
                "label": "Malbun"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "72.33",
                "y": "540.79",
                "label": "Balzers"
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
    "map": {},
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
                "id": "VA",
                "x": "101.26",
                "y": "307.26",
                "label": "Vaduz ",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "103.33",
                "y": "67.52",
                "label": "Ruggell"
            },
            {
                "id": "02",
                "x": "116.76",
                "y": "180.16",
                "label": "Nendeln"
            },
            {
                "id": "03",
                "x": "77.49",
                "y": "246.29",
                "label": "Schaan"
            },
            {
                "id": "04",
                "x": "254.19",
                "y": "439.52",
                "label": "Malbun"
            },
            {
                "id": "05",
                "x": "72.33",
                "y": "540.79",
                "label": "Balzers"
            }
        ],
        "application": [
            {
                "id": "VA",
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
