---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Germany

#### JavaScript Alias: maps/germany


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
                "id": "BE",
                "shapeid": "myCustomShape",
                "x": "355.23",
                "y": "160.88",
                "label": "Berlin",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "233.08",
                "y": "51.64",
                "label": "Kiel",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "284.72",
                "y": "73.48",
                "label": "Rostock",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "236.06",
                "y": "85.4",
                "label": "Lubeck",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "213.21",
                "y": "102.28",
                "label": "Hamburg",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "105.96",
                "y": "135.06",
                "label": "Emden"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "160.58",
                "y": "119.17",
                "label": "Bremerhaven",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "164.55",
                "y": "145.98",
                "label": "Bremen"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "195.34",
                "y": "186.7",
                "label": "Hannover"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "89.08",
                "y": "237.35",
                "label": "Duisburg"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "102.98",
                "y": "245.29",
                "label": "Essen",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "87.09",
                "y": "263.17",
                "label": "Dusseldorf",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "93.05",
                "y": "279.06",
                "label": "Cologne",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "102.98",
                "y": "292.96",
                "label": "Bonn",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "171.5",
                "y": "243.31",
                "label": "Kassel"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "158.59",
                "y": "338.64",
                "label": "Frankfurt am Main"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "129.79",
                "y": "348.57",
                "label": "Wiesbaden",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "155.61",
                "y": "380.35",
                "label": "Mannheim"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "189.38",
                "y": "444.91",
                "label": "Stuttgart"
            },
            {
                "id": "1",
                "shapeid": "newCustomShape",
                "x": "224.14",
                "y": "482.64",
                "label": "Munich"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "319.48",
                "y": "192.66",
                "label": "Magdenburg"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "354.24",
                "y": "220.46",
                "label": "Leipzig"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape",
                "x": "375.09",
                "y": "246.28",
                "label": "Dresden"
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
                "id": "BE",
                "x": "355.23",
                "y": "160.88",
                "label": "Berlin",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "233.08",
                "y": "51.64",
                "label": "Kiel",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "284.72",
                "y": "73.48",
                "label": "Rostock",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "236.06",
                "y": "85.4",
                "label": "Lubeck",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "213.21",
                "y": "102.28",
                "label": "Hamburg",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "105.96",
                "y": "135.06",
                "label": "Emden"
            },
            {
                "id": "06",
                "x": "160.58",
                "y": "119.17",
                "label": "Bremerhaven",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "164.55",
                "y": "145.98",
                "label": "Bremen"
            },
            {
                "id": "08",
                "x": "195.34",
                "y": "186.7",
                "label": "Hannover"
            },
            {
                "id": "09",
                "x": "89.08",
                "y": "237.35",
                "label": "Duisburg"
            },
            {
                "id": "10",
                "x": "102.98",
                "y": "245.29",
                "label": "Essen",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "87.09",
                "y": "263.17",
                "label": "Dusseldorf",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "93.05",
                "y": "279.06",
                "label": "Cologne",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "102.98",
                "y": "292.96",
                "label": "Bonn",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "171.5",
                "y": "243.31",
                "label": "Kassel"
            },
            {
                "id": "14",
                "x": "158.59",
                "y": "338.64",
                "label": "Frankfurt am Main"
            },
            {
                "id": "16",
                "x": "129.79",
                "y": "348.57",
                "label": "Wiesbaden",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "155.61",
                "y": "380.35",
                "label": "Mannheim"
            },
            {
                "id": "18",
                "x": "189.38",
                "y": "444.91",
                "label": "Stuttgart"
            },
            {
                "id": "1",
                "x": "224.14",
                "y": "482.64",
                "label": "Munich"
            },
            {
                "id": "20",
                "x": "319.48",
                "y": "192.66",
                "label": "Magdenburg"
            },
            {
                "id": "22",
                "x": "354.24",
                "y": "220.46",
                "label": "Leipzig"
            },
            {
                "id": "24",
                "x": "375.09",
                "y": "246.28",
                "label": "Dresden"
            }
        ],
        "application": [
            {
                "id": "BE",
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
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
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
                "id": "18",
                "shapeid": "newCustomShape"
            },
            {
                "id": "1",
                "shapeid": "newCustomShape"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape"
            },
            {
                "id": "22",
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
