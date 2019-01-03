---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Turkmenistan

#### JavaScript Alias: maps/turkmenistan


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
            "id": "TM.AL"
        },
        {
            "id": "TM.BA"
        },
        {
            "id": "TM.DA"
        },
        {
            "id": "TM.LE"
        },
        {
            "id": "TM.MA"
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
                "id": "AS",
                "shapeid": "myCustomShape",
                "x": "133.92",
                "y": "145.31",
                "label": "Ashgabat",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "103.6",
                "y": "113.95",
                "label": "Gyzylarbat",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "48.19",
                "y": "103.5",
                "label": "Balkanabat",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "19.96",
                "y": "83.63",
                "label": "Turkmenbasy",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "164.24",
                "y": "39.72",
                "label": "Dasoguz",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "235.33",
                "y": "108.72",
                "label": "Turkmenabat"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "269.83",
                "y": "146.36",
                "label": "Atamyrat"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "212.33",
                "y": "161",
                "label": "Mary"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "218.6",
                "y": "218.5",
                "label": "Gushgy"
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
            "id": "TM.AL"
        },
        {
            "id": "TM.BA"
        },
        {
            "id": "TM.DA"
        },
        {
            "id": "TM.LE"
        },
        {
            "id": "TM.MA"
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
                "id": "AS",
                "x": "133.92",
                "y": "145.31",
                "label": "Ashgabat",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "103.6",
                "y": "113.95",
                "label": "Gyzylarbat",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "48.19",
                "y": "103.5",
                "label": "Balkanabat",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "19.96",
                "y": "83.63",
                "label": "Turkmenbasy",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "164.24",
                "y": "39.72",
                "label": "Dasoguz",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "235.33",
                "y": "108.72",
                "label": "Turkmenabat"
            },
            {
                "id": "06",
                "x": "269.83",
                "y": "146.36",
                "label": "Atamyrat"
            },
            {
                "id": "07",
                "x": "212.33",
                "y": "161",
                "label": "Mary"
            },
            {
                "id": "08",
                "x": "218.6",
                "y": "218.5",
                "label": "Gushgy"
            }
        ],
        "application": [
            {
                "id": "AS",
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
            },
            {
                "id": "08",
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
