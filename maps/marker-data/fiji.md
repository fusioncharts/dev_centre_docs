---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Fiji

#### JavaScript Alias: maps/fiji


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
            "id": "FJ.WE.BA"
        },
        {
            "id": "FJ.NO.BU"
        },
        {
            "id": "FJ.NO.CK"
        },
        {
            "id": "FJ.EA.KD"
        },
        {
            "id": "FJ.EA.LU"
        },
        {
            "id": "EJ.WE.LT"
        },
        {
            "id": "EJ.EA.LM"
        },
        {
            "id": "FJ.NO.MC"
        },
        {
            "id": "FJ.WE.NN"
        },
        {
            "id": "FJ.WE.ND"
        },
        {
            "id": "FJ.CE.NT"
        },
        {
            "id": "FJ.CE.NM"
        },
        {
            "id": "FJ.WE.RA"
        },
        {
            "id": "FJ.CE.RW"
        },
        {
            "id": "FJ.CE.SR"
        },
        {
            "id": "FJ.CE.TL"
        },
        {
            "id": "FJ.TH.EA"
        },
        {
            "id": "FJ.TH.NO"
        },
        {
            "id": "FJ.TH.WE"
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
                "id": "SU",
                "shapeid": "myCustomShape",
                "x": "290.49",
                "y": "366.36",
                "label": "Suva",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "423.15",
                "y": "129.6",
                "label": "Savusavu",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "469.08",
                "y": "37.75",
                "label": "Labasa"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "164.96",
                "y": "254.1",
                "label": "Lautoka",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "330.29",
                "y": "297.99",
                "label": "Levuka"
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
            "id": "FJ.WE.BA"
        },
        {
            "id": "FJ.NO.BU"
        },
        {
            "id": "FJ.NO.CK"
        },
        {
            "id": "FJ.EA.KD"
        },
        {
            "id": "FJ.EA.LU"
        },
        {
            "id": "EJ.WE.LT"
        },
        {
            "id": "EJ.EA.LM"
        },
        {
            "id": "FJ.NO.MC"
        },
        {
            "id": "FJ.WE.NN"
        },
        {
            "id": "FJ.WE.ND"
        },
        {
            "id": "FJ.CE.NT"
        },
        {
            "id": "FJ.CE.NM"
        },
        {
            "id": "FJ.WE.RA"
        },
        {
            "id": "FJ.CE.RW"
        },
        {
            "id": "FJ.CE.SR"
        },
        {
            "id": "FJ.CE.TL"
        },
        {
            "id": "FJ.TH.EA"
        },
        {
            "id": "FJ.TH.NO"
        },
        {
            "id": "FJ.TH.WE"
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
                "id": "SU",
                "x": "290.49",
                "y": "366.36",
                "label": "Suva",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "423.15",
                "y": "129.6",
                "label": "Savusavu",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "469.08",
                "y": "37.75",
                "label": "Labasa"
            },
            {
                "id": "03",
                "x": "164.96",
                "y": "254.1",
                "label": "Lautoka",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "330.29",
                "y": "297.99",
                "label": "Levuka"
            }
        ],
        "application": [
            {
                "id": "SU",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
