---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Maryland

#### JavaScript Alias: maps/maryland


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
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "AN",
                "shapeid": "myCustomShape",
                "x": "496.89",
                "y": "173.63",
                "label": "Annapolis",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "111.14",
                "y": "11.43",
                "label": "Frostburg",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "118.42",
                "y": "22.87",
                "label": "Cumberland",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "7.17",
                "y": "95.65",
                "label": "Oakland"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "294.14",
                "y": "25.99",
                "label": "Hagerstown"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "326.37",
                "y": "80.05",
                "label": "Frederick",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "429.3",
                "y": "113.33",
                "label": "Columbia"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "384.59",
                "y": "166.35",
                "label": "Bethesda",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "423.06",
                "y": "240.17",
                "label": "St.Charles"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "508.32",
                "y": "327.51",
                "label": "Lexington Park"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "467.77",
                "y": "57.18",
                "label": "Towson"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "474.01",
                "y": "94.61",
                "label": "Baltimore"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "608.14",
                "y": "17.67",
                "label": "Elkton"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "614.38",
                "y": "211.06",
                "label": "Federalsburg",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "543.67",
                "y": "266.17",
                "label": "Cambridge",
                "labelpos": "right"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape",
                "x": "637.25",
                "y": "292.16",
                "label": "Salisbury",
                "labelpos": "left"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape",
                "x": "641.41",
                "y": "352.47",
                "label": "Princess Anne",
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
    "map": {},
    "markers": {
        "shapes": [
            {
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "AN",
                "x": "496.89",
                "y": "173.63",
                "label": "Annapolis",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "111.14",
                "y": "11.43",
                "label": "Frostburg",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "118.42",
                "y": "22.87",
                "label": "Cumberland",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "7.17",
                "y": "95.65",
                "label": "Oakland"
            },
            {
                "id": "06",
                "x": "294.14",
                "y": "25.99",
                "label": "Hagerstown"
            },
            {
                "id": "07",
                "x": "326.37",
                "y": "80.05",
                "label": "Frederick",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "429.3",
                "y": "113.33",
                "label": "Columbia"
            },
            {
                "id": "09",
                "x": "384.59",
                "y": "166.35",
                "label": "Bethesda",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "423.06",
                "y": "240.17",
                "label": "St.Charles"
            },
            {
                "id": "11",
                "x": "508.32",
                "y": "327.51",
                "label": "Lexington Park"
            },
            {
                "id": "12",
                "x": "467.77",
                "y": "57.18",
                "label": "Towson"
            },
            {
                "id": "13",
                "x": "474.01",
                "y": "94.61",
                "label": "Baltimore"
            },
            {
                "id": "15",
                "x": "608.14",
                "y": "17.67",
                "label": "Elkton"
            },
            {
                "id": "16",
                "x": "614.38",
                "y": "211.06",
                "label": "Federalsburg",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "543.67",
                "y": "266.17",
                "label": "Cambridge",
                "labelpos": "right"
            },
            {
                "id": "23",
                "x": "637.25",
                "y": "292.16",
                "label": "Salisbury",
                "labelpos": "left"
            },
            {
                "id": "24",
                "x": "641.41",
                "y": "352.47",
                "label": "Princess Anne",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "AN",
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
            },
            {
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape"
            },
            {
                "id": "24",
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
