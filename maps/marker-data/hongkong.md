---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: HongKong

#### JavaScript Alias: maps/hongkong


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
            "id": "HK.CW"
        },
        {
            "id": "HK.EA"
        },
        {
            "id": "HK.IS"
        },
        {
            "id": "HK.KC"
        },
        {
            "id": "HK.KI"
        },
        {
            "id": "HK.KU"
        },
        {
            "id": "HK.NO"
        },
        {
            "id": "HK.SK"
        },
        {
            "id": "HK.SS"
        },
        {
            "id": "HK.ST"
        },
        {
            "id": "HK.SO"
        },
        {
            "id": "HK.TP"
        },
        {
            "id": "HK.TW"
        },
        {
            "id": "HK.TM"
        },
        {
            "id": "HK.WC"
        },
        {
            "id": "HK.WT"
        },
        {
            "id": "HK.YT"
        },
        {
            "id": "HK.YL"
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
                "id": "VI",
                "shapeid": "myCustomShape",
                "x": "426.9",
                "y": "402.79",
                "label": "Victory"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "440.12",
                "y": "447.54",
                "label": "Aberdeen",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "453.34",
                "y": "373.29",
                "label": "Kowloon",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "375.02",
                "y": "283.78",
                "label": "Tsuen Wan"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "417.74",
                "y": "57.97",
                "label": "Sheung Shui",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "183.79",
                "y": "262.42",
                "label": "Tuen Mun"
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
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "HK.CW"
        },
        {
            "id": "HK.EA"
        },
        {
            "id": "HK.IS"
        },
        {
            "id": "HK.KC"
        },
        {
            "id": "HK.KI"
        },
        {
            "id": "HK.KU"
        },
        {
            "id": "HK.NO"
        },
        {
            "id": "HK.SK"
        },
        {
            "id": "HK.SS"
        },
        {
            "id": "HK.ST"
        },
        {
            "id": "HK.SO"
        },
        {
            "id": "HK.TP"
        },
        {
            "id": "HK.TW"
        },
        {
            "id": "HK.TM"
        },
        {
            "id": "HK.WC"
        },
        {
            "id": "HK.WT"
        },
        {
            "id": "HK.YT"
        },
        {
            "id": "HK.YL"
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
                "id": "VI",
                "x": "426.9",
                "y": "402.79",
                "label": "Victory"
            },
            {
                "id": "01",
                "x": "440.12",
                "y": "447.54",
                "label": "Aberdeen",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "453.34",
                "y": "373.29",
                "label": "Kowloon",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "375.02",
                "y": "283.78",
                "label": "Tsuen Wan"
            },
            {
                "id": "07",
                "x": "417.74",
                "y": "57.97",
                "label": "Sheung Shui",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "183.79",
                "y": "262.42",
                "label": "Tuen Mun"
            }
        ],
        "application": [
            {
                "id": "VI",
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
                "id": "07",
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
