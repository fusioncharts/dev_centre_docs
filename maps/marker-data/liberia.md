---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Liberia

#### JavaScript Alias: maps/liberia


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
            "id": "LR.BM"
        },
        {
            "id": "LR.BG"
        },
        {
            "id": "LR.GP"
        },
        {
            "id": "LR.GB"
        },
        {
            "id": "LR.CM"
        },
        {
            "id": "LR.GD"
        },
        {
            "id": "LR.GK"
        },
        {
            "id": "LR.LF"
        },
        {
            "id": "LR.MG"
        },
        {
            "id": "LR.MY"
        },
        {
            "id": "LR.MO"
        },
        {
            "id": "LR.NI"
        },
        {
            "id": "LR.RI"
        },
        {
            "id": "LR.RG"
        },
        {
            "id": "LR.SI"
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
                "id": "MN",
                "shapeid": "myCustomShape",
                "x": "77.8",
                "y": "224.11",
                "label": "Monrovia",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "180.19",
                "y": "23.44",
                "label": "Voinjama",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "287.69",
                "y": "108.42",
                "label": "Yekepa",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "13.3",
                "y": "173.94",
                "label": "Robertsport",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "109.54",
                "y": "239.46",
                "label": "Harbel",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "148.45",
                "y": "269.15",
                "label": "Buchanan",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "200.66",
                "y": "179.06",
                "label": "Gbarnga",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "337.85",
                "y": "244.58",
                "label": "Zwedru",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "268.23",
                "y": "361.3",
                "label": "Greenville",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "367.54",
                "y": "413.51",
                "label": "Harper",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "73.71",
                "y": "142.2",
                "label": "Tubmanburg",
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
            "id": "LR.BM"
        },
        {
            "id": "LR.BG"
        },
        {
            "id": "LR.GP"
        },
        {
            "id": "LR.GB"
        },
        {
            "id": "LR.CM"
        },
        {
            "id": "LR.GD"
        },
        {
            "id": "LR.GK"
        },
        {
            "id": "LR.LF"
        },
        {
            "id": "LR.MG"
        },
        {
            "id": "LR.MY"
        },
        {
            "id": "LR.MO"
        },
        {
            "id": "LR.NI"
        },
        {
            "id": "LR.RI"
        },
        {
            "id": "LR.RG"
        },
        {
            "id": "LR.SI"
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
                "id": "MN",
                "x": "77.8",
                "y": "224.11",
                "label": "Monrovia",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "180.19",
                "y": "23.44",
                "label": "Voinjama",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "287.69",
                "y": "108.42",
                "label": "Yekepa",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "13.3",
                "y": "173.94",
                "label": "Robertsport",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "109.54",
                "y": "239.46",
                "label": "Harbel",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "148.45",
                "y": "269.15",
                "label": "Buchanan",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "200.66",
                "y": "179.06",
                "label": "Gbarnga",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "337.85",
                "y": "244.58",
                "label": "Zwedru",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "268.23",
                "y": "361.3",
                "label": "Greenville",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "367.54",
                "y": "413.51",
                "label": "Harper",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "73.71",
                "y": "142.2",
                "label": "Tubmanburg",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "MN",
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
            },
            {
                "id": "09",
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
