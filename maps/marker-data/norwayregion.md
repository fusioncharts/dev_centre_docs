---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NorwayRegion

#### JavaScript Alias: maps/norwayregion


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
                "id": "OS",
                "shapeid": "myCustomShape",
                "x": "220.19",
                "y": "563.92",
                "label": "Oslo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "174.3",
                "y": "66.41",
                "label": "Ny-Alesund",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "199.66",
                "y": "68.83",
                "label": "Pyramiden",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "193.63",
                "y": "83.32",
                "label": "Longyearbyen",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "187.59",
                "y": "90.56",
                "label": "Barentsburg",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "557.1",
                "y": "153.35",
                "label": "Vadso"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "408.57",
                "y": "188.37",
                "label": "Tromso",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "331.29",
                "y": "274.11",
                "label": "Bodo",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "262.46",
                "y": "400.9",
                "label": "Steinkjer",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "238.3",
                "y": "426.26",
                "label": "Trondheim",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "179.13",
                "y": "439.54",
                "label": "Molde",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "161.02",
                "y": "499.92",
                "label": "Leikanger",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "226.23",
                "y": "514.41",
                "label": "Lillehammer"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "232.27",
                "y": "528.9",
                "label": "Hamar",
                "labelpos": "right"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "204.49",
                "y": "565.13",
                "label": "Drammen",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "220.19",
                "y": "580.83",
                "label": "Moss",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "205.7",
                "y": "590.49",
                "label": "Tonsberg",
                "labelpos": "bottom"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "188.8",
                "y": "594.11",
                "label": "Skien",
                "labelpos": "left"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "165.85",
                "y": "619.47",
                "label": "Arendal",
                "labelpos": "left"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "150.15",
                "y": "626.71",
                "label": "Kristiansand",
                "labelpos": "bottom"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "109.1",
                "y": "586.86",
                "label": "Stavanger",
                "labelpos": "left"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape",
                "x": "107.89",
                "y": "565.13",
                "label": "Haugesund",
                "labelpos": "left"
            },
            {
                "id": "25",
                "shapeid": "newCustomShape",
                "x": "118.76",
                "y": "526.49",
                "label": "Bergen",
                "labelpos": "left"
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
                "id": "OS",
                "x": "220.19",
                "y": "563.92",
                "label": "Oslo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "174.3",
                "y": "66.41",
                "label": "Ny-Alesund",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "199.66",
                "y": "68.83",
                "label": "Pyramiden",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "193.63",
                "y": "83.32",
                "label": "Longyearbyen",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "187.59",
                "y": "90.56",
                "label": "Barentsburg",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "557.1",
                "y": "153.35",
                "label": "Vadso"
            },
            {
                "id": "06",
                "x": "408.57",
                "y": "188.37",
                "label": "Tromso",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "331.29",
                "y": "274.11",
                "label": "Bodo",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "262.46",
                "y": "400.9",
                "label": "Steinkjer",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "238.3",
                "y": "426.26",
                "label": "Trondheim",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "179.13",
                "y": "439.54",
                "label": "Molde",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "161.02",
                "y": "499.92",
                "label": "Leikanger",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "226.23",
                "y": "514.41",
                "label": "Lillehammer"
            },
            {
                "id": "14",
                "x": "232.27",
                "y": "528.9",
                "label": "Hamar",
                "labelpos": "right"
            },
            {
                "id": "15",
                "x": "204.49",
                "y": "565.13",
                "label": "Drammen",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "220.19",
                "y": "580.83",
                "label": "Moss",
                "labelpos": "right"
            },
            {
                "id": "18",
                "x": "205.7",
                "y": "590.49",
                "label": "Tonsberg",
                "labelpos": "bottom"
            },
            {
                "id": "19",
                "x": "188.8",
                "y": "594.11",
                "label": "Skien",
                "labelpos": "left"
            },
            {
                "id": "20",
                "x": "165.85",
                "y": "619.47",
                "label": "Arendal",
                "labelpos": "left"
            },
            {
                "id": "21",
                "x": "150.15",
                "y": "626.71",
                "label": "Kristiansand",
                "labelpos": "bottom"
            },
            {
                "id": "22",
                "x": "109.1",
                "y": "586.86",
                "label": "Stavanger",
                "labelpos": "left"
            },
            {
                "id": "24",
                "x": "107.89",
                "y": "565.13",
                "label": "Haugesund",
                "labelpos": "left"
            },
            {
                "id": "25",
                "x": "118.76",
                "y": "526.49",
                "label": "Bergen",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "OS",
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
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape"
            },
            {
                "id": "25",
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
