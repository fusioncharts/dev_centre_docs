---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Texas

#### JavaScript Alias: maps/texas


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
                "id": "AU",
                "shapeid": "myCustomShape",
                "x": "632.65",
                "y": "539.93",
                "label": "Austin"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "331.34",
                "y": "115.26",
                "label": "Amarillo"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "344.48",
                "y": "266.93",
                "label": "Lubbock"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "421.33",
                "y": "307.37",
                "label": "Abilene"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "639.73",
                "y": "297.26",
                "label": "Fort Worth",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "670.06",
                "y": "285.13",
                "label": "Dallas",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "652.87",
                "y": "368.04",
                "label": "Waco",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "773.19",
                "y": "593.52",
                "label": "Houston",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "598.27",
                "y": "632.95",
                "label": "San Antonio"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "497.16",
                "y": "728",
                "label": "Laredo",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "647.81",
                "y": "780.57",
                "label": "Corpus Christi",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "660.96",
                "y": "873.59",
                "label": "Brownsville",
                "labelpos": "top"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "642.76",
                "y": "264.91",
                "label": "Denton"
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
    "map": {},
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
                "id": "AU",
                "x": "632.65",
                "y": "539.93",
                "label": "Austin"
            },
            {
                "id": "01",
                "x": "331.34",
                "y": "115.26",
                "label": "Amarillo"
            },
            {
                "id": "02",
                "x": "344.48",
                "y": "266.93",
                "label": "Lubbock"
            },
            {
                "id": "03",
                "x": "421.33",
                "y": "307.37",
                "label": "Abilene"
            },
            {
                "id": "04",
                "x": "639.73",
                "y": "297.26",
                "label": "Fort Worth",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "670.06",
                "y": "285.13",
                "label": "Dallas",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "652.87",
                "y": "368.04",
                "label": "Waco",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "773.19",
                "y": "593.52",
                "label": "Houston",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "598.27",
                "y": "632.95",
                "label": "San Antonio"
            },
            {
                "id": "09",
                "x": "497.16",
                "y": "728",
                "label": "Laredo",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "647.81",
                "y": "780.57",
                "label": "Corpus Christi",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "660.96",
                "y": "873.59",
                "label": "Brownsville",
                "labelpos": "top"
            },
            {
                "id": "12",
                "x": "642.76",
                "y": "264.91",
                "label": "Denton"
            }
        ],
        "application": [
            {
                "id": "AU",
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
            },
            {
                "id": "12",
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
