---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Burundi

#### JavaScript Alias: maps/burundi


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
            "id": "BI.BB"
        },
        {
            "id": "BI.BM"
        },
        {
            "id": "BI.BU"
        },
        {
            "id": "BI.BR"
        },
        {
            "id": "BI.CA"
        },
        {
            "id": "BI.CI"
        },
        {
            "id": "BI.GI"
        },
        {
            "id": "BI.KR"
        },
        {
            "id": "BI.KY"
        },
        {
            "id": "BI.KI"
        },
        {
            "id": "BI.MA"
        },
        {
            "id": "BI.MV"
        },
        {
            "id": "BI.MY"
        },
        {
            "id": "BI.MW"
        },
        {
            "id": "BI.NG"
        },
        {
            "id": "BI.RT"
        },
        {
            "id": "BI.RY"
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
                "id": "BJ",
                "shapeid": "myCustomShape",
                "x": "111.47",
                "y": "243",
                "label": "Bujumbura"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "121.7",
                "y": "339.13",
                "label": "Bururi",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "38.86",
                "y": "117.2",
                "label": "Cibitoke",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "95.11",
                "y": "168.34",
                "label": "Bubanza",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "232.15",
                "y": "133.56",
                "label": "Ngozi",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "320.11",
                "y": "135.61",
                "label": "Muyinga",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "212.72",
                "y": "270.61",
                "label": "Gitega",
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
            "id": "BI.BB"
        },
        {
            "id": "BI.BM"
        },
        {
            "id": "BI.BU"
        },
        {
            "id": "BI.BR"
        },
        {
            "id": "BI.CA"
        },
        {
            "id": "BI.CI"
        },
        {
            "id": "BI.GI"
        },
        {
            "id": "BI.KR"
        },
        {
            "id": "BI.KY"
        },
        {
            "id": "BI.KI"
        },
        {
            "id": "BI.MA"
        },
        {
            "id": "BI.MV"
        },
        {
            "id": "BI.MY"
        },
        {
            "id": "BI.MW"
        },
        {
            "id": "BI.NG"
        },
        {
            "id": "BI.RT"
        },
        {
            "id": "BI.RY"
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
                "id": "BJ",
                "x": "111.47",
                "y": "243",
                "label": "Bujumbura"
            },
            {
                "id": "01",
                "x": "121.7",
                "y": "339.13",
                "label": "Bururi",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "38.86",
                "y": "117.2",
                "label": "Cibitoke",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "95.11",
                "y": "168.34",
                "label": "Bubanza",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "232.15",
                "y": "133.56",
                "label": "Ngozi",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "320.11",
                "y": "135.61",
                "label": "Muyinga",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "212.72",
                "y": "270.61",
                "label": "Gitega",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "BJ",
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
