---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Qatar

#### JavaScript Alias: maps/qatar


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
<pre><code class="language-javascript">
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
            "id": "QA.DA"
        },
        {
            "id": "QA.GH"
        },
        {
            "id": "QA.JU"
        },
        {
            "id": "QA.KH"
        },
        {
            "id": "QA.WA"
        },
        {
            "id": "QA.RA"
        },
        {
            "id": "QA.JB"
        },
        {
            "id": "QA.MS"
        },
        {
            "id": "QA.US"
        },
        {
            "id": "QA.ME"
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
                "id": "DO",
                "shapeid": "myCustomShape",
                "x": "184.16",
                "y": "232.36",
                "label": "Doha",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "203.1",
                "y": "260.78",
                "label": "Al Wakrah",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "185.21",
                "y": "307.08",
                "label": "Umm Sa'id",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "31.57",
                "y": "236.57",
                "label": "Umm Bab",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "25.25",
                "y": "196.58",
                "label": "Dukhan",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "177.85",
                "y": "132.38",
                "label": "Al Khawr"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "90.5",
                "y": "37.67",
                "label": "Al Khuwayr",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "116.81",
                "y": "18.73",
                "label": "Ar Ru'ays",
                "labelpos": "right"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-javascript">
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
            "id": "QA.DA"
        },
        {
            "id": "QA.GH"
        },
        {
            "id": "QA.JU"
        },
        {
            "id": "QA.KH"
        },
        {
            "id": "QA.WA"
        },
        {
            "id": "QA.RA"
        },
        {
            "id": "QA.JB"
        },
        {
            "id": "QA.MS"
        },
        {
            "id": "QA.US"
        },
        {
            "id": "QA.ME"
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
                "id": "DO",
                "x": "184.16",
                "y": "232.36",
                "label": "Doha",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "203.1",
                "y": "260.78",
                "label": "Al Wakrah",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "185.21",
                "y": "307.08",
                "label": "Umm Sa'id",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "31.57",
                "y": "236.57",
                "label": "Umm Bab",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "25.25",
                "y": "196.58",
                "label": "Dukhan",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "177.85",
                "y": "132.38",
                "label": "Al Khawr"
            },
            {
                "id": "08",
                "x": "90.5",
                "y": "37.67",
                "label": "Al Khuwayr",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "116.81",
                "y": "18.73",
                "label": "Ar Ru'ays",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "DO",
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
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
