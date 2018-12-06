---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NewCaledonia

#### JavaScript Alias: maps/newcaledonia


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
            "id": "NC.NO.BE"
        },
        {
            "id": "NC.SU.BP"
        },
        {
            "id": "NC.SU.BR"
        },
        {
            "id": "NC.NO.CA"
        },
        {
            "id": "NC.SU.DU"
        },
        {
            "id": "NC.SU.FA"
        },
        {
            "id": "NC.NO.HI"
        },
        {
            "id": "NC.NO.HO"
        },
        {
            "id": "NC.SU.IP"
        },
        {
            "id": "NC.NO.KG"
        },
        {
            "id": "NC.NO.KN"
        },
        {
            "id": "NC.NO.KA"
        },
        {
            "id": "NC.NO.KM"
        },
        {
            "id": "NC.SU.LF"
        },
        {
            "id": "NC.IL.LI"
        },
        {
            "id": "NC.IL.MA"
        },
        {
            "id": "NC.SU.MO"
        },
        {
            "id": "NC.SU.MD"
        },
        {
            "id": "NC.SU.NO"
        },
        {
            "id": "NC.NO.OG"
        },
        {
            "id": "NC.IL.OV"
        },
        {
            "id": "NC.SU.PA"
        },
        {
            "id": "NC.NO.PD"
        },
        {
            "id": "NC.NO.PH"
        },
        {
            "id": "NC.NO.PB"
        },
        {
            "id": "NC.NO.PM"
        },
        {
            "id": "NC.NO.PT"
        },
        {
            "id": "NC.NO.PY"
        },
        {
            "id": "NC.SU.SA"
        },
        {
            "id": "NC.SU.TH"
        },
        {
            "id": "NC.NO.TO"
        },
        {
            "id": "NC.NO.VO"
        },
        {
            "id": "NC.SU.YA"
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
                "id": "NO",
                "shapeid": "myCustomShape",
                "x": "357.97",
                "y": "356.28",
                "label": "Noumea",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "189.04",
                "y": "228.3",
                "label": "Mueo",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "220.78",
                "y": "174.04",
                "label": "Poindimie",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "353.87",
                "y": "286.66",
                "label": "Thio",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "423.49",
                "y": "158.69",
                "label": "We",
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
            "id": "NC.NO.BE"
        },
        {
            "id": "NC.SU.BP"
        },
        {
            "id": "NC.SU.BR"
        },
        {
            "id": "NC.NO.CA"
        },
        {
            "id": "NC.SU.DU"
        },
        {
            "id": "NC.SU.FA"
        },
        {
            "id": "NC.NO.HI"
        },
        {
            "id": "NC.NO.HO"
        },
        {
            "id": "NC.SU.IP"
        },
        {
            "id": "NC.NO.KG"
        },
        {
            "id": "NC.NO.KN"
        },
        {
            "id": "NC.NO.KA"
        },
        {
            "id": "NC.NO.KM"
        },
        {
            "id": "NC.SU.LF"
        },
        {
            "id": "NC.IL.LI"
        },
        {
            "id": "NC.IL.MA"
        },
        {
            "id": "NC.SU.MO"
        },
        {
            "id": "NC.SU.MD"
        },
        {
            "id": "NC.SU.NO"
        },
        {
            "id": "NC.NO.OG"
        },
        {
            "id": "NC.IL.OV"
        },
        {
            "id": "NC.SU.PA"
        },
        {
            "id": "NC.NO.PD"
        },
        {
            "id": "NC.NO.PH"
        },
        {
            "id": "NC.NO.PB"
        },
        {
            "id": "NC.NO.PM"
        },
        {
            "id": "NC.NO.PT"
        },
        {
            "id": "NC.NO.PY"
        },
        {
            "id": "NC.SU.SA"
        },
        {
            "id": "NC.SU.TH"
        },
        {
            "id": "NC.NO.TO"
        },
        {
            "id": "NC.NO.VO"
        },
        {
            "id": "NC.SU.YA"
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
                "id": "NO",
                "x": "357.97",
                "y": "356.28",
                "label": "Noumea",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "189.04",
                "y": "228.3",
                "label": "Mueo",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "220.78",
                "y": "174.04",
                "label": "Poindimie",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "353.87",
                "y": "286.66",
                "label": "Thio",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "423.49",
                "y": "158.69",
                "label": "We",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "NO",
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
                "id": "06",
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
