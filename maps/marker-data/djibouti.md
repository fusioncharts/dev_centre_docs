---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Djibouti

#### JavaScript Alias: maps/djibouti


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
            "id": "DJ.AS"
        },
        {
            "id": "DJ.AR"
        },
        {
            "id": "DJ.DK"
        },
        {
            "id": "DJ.DB"
        },
        {
            "id": "DJ.OB"
        },
        {
            "id": "DJ.TA"
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
                "id": "DJ",
                "shapeid": "myCustomShape",
                "x": "291.88",
                "y": "272.46",
                "label": "Djibouti"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "325.8",
                "y": "85.4",
                "label": "Khor Angar",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "116.13",
                "y": "137.82",
                "label": "Balbo",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "327.86",
                "y": "180.99",
                "label": "Obock"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "238.44",
                "y": "226.21",
                "label": "Tadjoura"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "136.69",
                "y": "372.15",
                "label": "Dikhil",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "205.55",
                "y": "369.07",
                "label": "Ali Sabieh",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "67.83",
                "y": "287.88",
                "label": "Yoboki",
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
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "DJ.AS"
        },
        {
            "id": "DJ.AR"
        },
        {
            "id": "DJ.DK"
        },
        {
            "id": "DJ.DB"
        },
        {
            "id": "DJ.OB"
        },
        {
            "id": "DJ.TA"
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
                "id": "DJ",
                "x": "291.88",
                "y": "272.46",
                "label": "Djibouti"
            },
            {
                "id": "01",
                "x": "325.8",
                "y": "85.4",
                "label": "Khor Angar",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "116.13",
                "y": "137.82",
                "label": "Balbo",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "327.86",
                "y": "180.99",
                "label": "Obock"
            },
            {
                "id": "04",
                "x": "238.44",
                "y": "226.21",
                "label": "Tadjoura"
            },
            {
                "id": "05",
                "x": "136.69",
                "y": "372.15",
                "label": "Dikhil",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "205.55",
                "y": "369.07",
                "label": "Ali Sabieh",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "67.83",
                "y": "287.88",
                "label": "Yoboki",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "DJ",
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
