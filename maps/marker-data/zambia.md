---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Zambia

#### JavaScript Alias: maps/zambia


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
            "id": "02 "
        },
        {
            "id": "08"
        },
        {
            "id": "03"
        },
        {
            "id": "04"
        },
        {
            "id": "09"
        },
        {
            "id": "05"
        },
        {
            "id": "06"
        },
        {
            "id": "07"
        },
        {
            "id": "01"
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
                "id": "LU",
                "shapeid": "myCustomShape",
                "x": "324.75",
                "y": "298.95",
                "label": "Lusaka",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "367.75",
                "y": "23.54",
                "label": "Mpulungu",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "376.96",
                "y": "74.73",
                "label": "Kasama",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "446.58",
                "y": "231.38",
                "label": "Chipata",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "168.1",
                "y": "409.52",
                "label": "Livingstone"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "49.34",
                "y": "292.8",
                "label": "Mongu",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "183.46",
                "y": "166.88",
                "label": "Solwezi",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "281.75",
                "y": "200.66",
                "label": "Ndola",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "260.25",
                "y": "185.3",
                "label": "Kitwe",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "238.75",
                "y": "162.78",
                "label": "Mufulira",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "293.01",
                "y": "243.66",
                "label": "Kapiri Mposhi",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "301.2",
                "y": "256.97",
                "label": "Kabwe",
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
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "02 "
        },
        {
            "id": "08"
        },
        {
            "id": "03"
        },
        {
            "id": "04"
        },
        {
            "id": "09"
        },
        {
            "id": "05"
        },
        {
            "id": "06"
        },
        {
            "id": "07"
        },
        {
            "id": "01"
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
                "id": "LU",
                "x": "324.75",
                "y": "298.95",
                "label": "Lusaka",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "367.75",
                "y": "23.54",
                "label": "Mpulungu",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "376.96",
                "y": "74.73",
                "label": "Kasama",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "446.58",
                "y": "231.38",
                "label": "Chipata",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "168.1",
                "y": "409.52",
                "label": "Livingstone"
            },
            {
                "id": "05",
                "x": "49.34",
                "y": "292.8",
                "label": "Mongu",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "183.46",
                "y": "166.88",
                "label": "Solwezi",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "281.75",
                "y": "200.66",
                "label": "Ndola",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "260.25",
                "y": "185.3",
                "label": "Kitwe",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "238.75",
                "y": "162.78",
                "label": "Mufulira",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "293.01",
                "y": "243.66",
                "label": "Kapiri Mposhi",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "301.2",
                "y": "256.97",
                "label": "Kabwe",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "LU",
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
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
