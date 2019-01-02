---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Ethiopia

#### JavaScript Alias: maps/ethiopia


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
            "id": "ET.AA"
        },
        {
            "id": "ET.AF"
        },
        {
            "id": "ET.AM"
        },
        {
            "id": "ET.BE"
        },
        {
            "id": "ET.DD"
        },
        {
            "id": "ET.GA"
        },
        {
            "id": "ET.HA"
        },
        {
            "id": "ET.OR"
        },
        {
            "id": "ET.SO"
        },
        {
            "id": "ET.SN"
        },
        {
            "id": "ET.TI"
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
                "id": "AB",
                "shapeid": "myCustomShape",
                "x": "190.41",
                "y": "208.2",
                "label": "ADDIS ABABA",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "303.23",
                "y": "195.89",
                "label": "Harer",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "296.05",
                "y": "180.51",
                "label": "Dire Dawa"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "248.87",
                "y": "136.41",
                "label": "Dese",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "148.35",
                "y": "83.07",
                "label": "Gonder",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "124.76",
                "y": "114.87",
                "label": "Bahir Dar",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "179.12",
                "y": "258.46",
                "label": "Awasa",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "88.87",
                "y": "233.84",
                "label": "Jima",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "216.05",
                "y": "378.46",
                "label": "Moyale"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "307.33",
                "y": "358.97",
                "label": "Dolo Odo"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "446.82",
                "y": "266.66",
                "label": "Werder",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "216.05",
                "y": "221.53",
                "label": "Nazret",
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
            "id": "ET.AA"
        },
        {
            "id": "ET.AF"
        },
        {
            "id": "ET.AM"
        },
        {
            "id": "ET.BE"
        },
        {
            "id": "ET.DD"
        },
        {
            "id": "ET.GA"
        },
        {
            "id": "ET.HA"
        },
        {
            "id": "ET.OR"
        },
        {
            "id": "ET.SO"
        },
        {
            "id": "ET.SN"
        },
        {
            "id": "ET.TI"
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
                "id": "AB",
                "x": "190.41",
                "y": "208.2",
                "label": "ADDIS ABABA",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "303.23",
                "y": "195.89",
                "label": "Harer",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "296.05",
                "y": "180.51",
                "label": "Dire Dawa"
            },
            {
                "id": "03",
                "x": "248.87",
                "y": "136.41",
                "label": "Dese",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "148.35",
                "y": "83.07",
                "label": "Gonder",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "124.76",
                "y": "114.87",
                "label": "Bahir Dar",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "179.12",
                "y": "258.46",
                "label": "Awasa",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "88.87",
                "y": "233.84",
                "label": "Jima",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "216.05",
                "y": "378.46",
                "label": "Moyale"
            },
            {
                "id": "09",
                "x": "307.33",
                "y": "358.97",
                "label": "Dolo Odo"
            },
            {
                "id": "10",
                "x": "446.82",
                "y": "266.66",
                "label": "Werder",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "216.05",
                "y": "221.53",
                "label": "Nazret",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "AB",
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
            },
            {
                "id": "11",
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
