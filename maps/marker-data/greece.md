---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Greece

#### JavaScript Alias: maps/greece


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
                "id": "AT",
                "shapeid": "myCustomShape",
                "x": "183.47",
                "y": "226.42",
                "label": "Athens",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "290.07",
                "y": "57.29",
                "label": "Alexandroupolis"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "217.3",
                "y": "54.22",
                "label": "Kavala"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "156.82",
                "y": "71.64",
                "label": "Thessaloniki"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "14.34",
                "y": "131.09",
                "label": "Kerkyra"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "31.77",
                "y": "138.27",
                "label": "Igoumenitsa",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "71.75",
                "y": "120.84",
                "label": "Ioannina"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "117.87",
                "y": "124.94",
                "label": "Larisa"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "153.75",
                "y": "149.54",
                "label": "Volos"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "188.6",
                "y": "201.82",
                "label": "Chalkis"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "179.37",
                "y": "228.47",
                "label": "Elefsis",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "186.55",
                "y": "234.62",
                "label": "Peiraiefs",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "203.97",
                "y": "248.97",
                "label": "Lavrion",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "99.42",
                "y": "216.17",
                "label": "Patrai"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "255.22",
                "y": "389.39",
                "label": "Irakleion"
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
                "id": "AT",
                "x": "183.47",
                "y": "226.42",
                "label": "Athens",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "290.07",
                "y": "57.29",
                "label": "Alexandroupolis"
            },
            {
                "id": "02",
                "x": "217.3",
                "y": "54.22",
                "label": "Kavala"
            },
            {
                "id": "03",
                "x": "156.82",
                "y": "71.64",
                "label": "Thessaloniki"
            },
            {
                "id": "04",
                "x": "14.34",
                "y": "131.09",
                "label": "Kerkyra"
            },
            {
                "id": "05",
                "x": "31.77",
                "y": "138.27",
                "label": "Igoumenitsa",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "71.75",
                "y": "120.84",
                "label": "Ioannina"
            },
            {
                "id": "07",
                "x": "117.87",
                "y": "124.94",
                "label": "Larisa"
            },
            {
                "id": "08",
                "x": "153.75",
                "y": "149.54",
                "label": "Volos"
            },
            {
                "id": "09",
                "x": "188.6",
                "y": "201.82",
                "label": "Chalkis"
            },
            {
                "id": "10",
                "x": "179.37",
                "y": "228.47",
                "label": "Elefsis",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "186.55",
                "y": "234.62",
                "label": "Peiraiefs",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "203.97",
                "y": "248.97",
                "label": "Lavrion",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "99.42",
                "y": "216.17",
                "label": "Patrai"
            },
            {
                "id": "12",
                "x": "255.22",
                "y": "389.39",
                "label": "Irakleion"
            }
        ],
        "application": [
            {
                "id": "AT",
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
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
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
