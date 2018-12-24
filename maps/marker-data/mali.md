---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Mali

#### JavaScript Alias: maps/mali


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
            "id": "ML.BA"
        },
        {
            "id": "ML.GA"
        },
        {
            "id": "ML.KY"
        },
        {
            "id": "ML.KD"
        },
        {
            "id": "ML.KK"
        },
        {
            "id": "ML.MO"
        },
        {
            "id": "ML.SG"
        },
        {
            "id": "ML.SK"
        },
        {
            "id": "ML.TB"
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
                "id": "BM",
                "shapeid": "myCustomShape",
                "x": "123.63",
                "y": "364.76",
                "label": "Bamako",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "22.47",
                "y": "307.54",
                "label": "Kayes",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "136.91",
                "y": "344.32",
                "label": "Koulikoro",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "187.99",
                "y": "395.41",
                "label": "Sikasso",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "173.69",
                "y": "339.21",
                "label": "Segou",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "217.63",
                "y": "313.67",
                "label": "Mopti",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "355.56",
                "y": "259.52",
                "label": "Gao",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "370.89",
                "y": "187.99",
                "label": "Kidal",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "213.54",
                "y": "228.86",
                "label": "Tombouctou",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "209.45",
                "y": "52.1",
                "label": "Taoudenni",
                "labelpos": "bottom"
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
            "id": "ML.BA"
        },
        {
            "id": "ML.GA"
        },
        {
            "id": "ML.KY"
        },
        {
            "id": "ML.KD"
        },
        {
            "id": "ML.KK"
        },
        {
            "id": "ML.MO"
        },
        {
            "id": "ML.SG"
        },
        {
            "id": "ML.SK"
        },
        {
            "id": "ML.TB"
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
                "id": "BM",
                "x": "123.63",
                "y": "364.76",
                "label": "Bamako",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "22.47",
                "y": "307.54",
                "label": "Kayes",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "136.91",
                "y": "344.32",
                "label": "Koulikoro",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "187.99",
                "y": "395.41",
                "label": "Sikasso",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "173.69",
                "y": "339.21",
                "label": "Segou",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "217.63",
                "y": "313.67",
                "label": "Mopti",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "355.56",
                "y": "259.52",
                "label": "Gao",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "370.89",
                "y": "187.99",
                "label": "Kidal",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "213.54",
                "y": "228.86",
                "label": "Tombouctou",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "209.45",
                "y": "52.1",
                "label": "Taoudenni",
                "labelpos": "bottom"
            }
        ],
        "application": [
            {
                "id": "BM",
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
