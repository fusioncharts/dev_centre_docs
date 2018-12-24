---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: CzechRepublic

#### JavaScript Alias: maps/czechrepublic


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
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "PG",
                "shapeid": "myCustomShape",
                "x": "284.51",
                "y": "176.86",
                "label": "Prague",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "286.56",
                "y": "38.84",
                "label": "Decin",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "271.22",
                "y": "48.04",
                "label": "Usti nad Labem",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "140.36",
                "y": "245.36",
                "label": "Plzen"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "282.47",
                "y": "385.41",
                "label": "Ceske Budejovice"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "344.83",
                "y": "49.07",
                "label": "Liberec"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "415.37",
                "y": "132.9",
                "label": "Hradec Kralove",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "577.92",
                "y": "248.42",
                "label": "Olomouc"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "721.05",
                "y": "202.42",
                "label": "Ostrava"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "530.89",
                "y": "347.59",
                "label": "Brno"
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
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "PG",
                "x": "284.51",
                "y": "176.86",
                "label": "Prague",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "286.56",
                "y": "38.84",
                "label": "Decin",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "271.22",
                "y": "48.04",
                "label": "Usti nad Labem",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "140.36",
                "y": "245.36",
                "label": "Plzen"
            },
            {
                "id": "04",
                "x": "282.47",
                "y": "385.41",
                "label": "Ceske Budejovice"
            },
            {
                "id": "05",
                "x": "344.83",
                "y": "49.07",
                "label": "Liberec"
            },
            {
                "id": "06",
                "x": "415.37",
                "y": "132.9",
                "label": "Hradec Kralove",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "577.92",
                "y": "248.42",
                "label": "Olomouc"
            },
            {
                "id": "07",
                "x": "721.05",
                "y": "202.42",
                "label": "Ostrava"
            },
            {
                "id": "10",
                "x": "530.89",
                "y": "347.59",
                "label": "Brno"
            }
        ],
        "application": [
            {
                "id": "PG",
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
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "10",
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
