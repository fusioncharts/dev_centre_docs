---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Grenada

#### JavaScript Alias: maps/grenada


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
                "id": "GE",
                "shapeid": "myCustomShape",
                "x": "72.58",
                "y": "212.17",
                "label": "Saint George",
                "labelpos": "top"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "218.83",
                "y": "127.67",
                "label": "Grenville",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "197.16",
                "y": "19.33",
                "label": "Sauteurs"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "125.66",
                "y": "49.67",
                "label": "Victoria"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "94.25",
                "y": "85.42",
                "label": "Gouyave"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "73.66",
                "y": "130.92",
                "label": "Grand Roy"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "212.33",
                "y": "72.42",
                "label": "Tivoli"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "205.83",
                "y": "156.92",
                "label": "Marquis",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "162.5",
                "y": "213.25",
                "label": "Saint Davids"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "99.66",
                "y": "251.17",
                "label": "Calivigny"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "70.41",
                "y": "226.25",
                "label": "Belmont",
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
                "id": "GE",
                "x": "72.58",
                "y": "212.17",
                "label": "Saint George",
                "labelpos": "top"
            },
            {
                "id": "01",
                "x": "218.83",
                "y": "127.67",
                "label": "Grenville",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "197.16",
                "y": "19.33",
                "label": "Sauteurs"
            },
            {
                "id": "03",
                "x": "125.66",
                "y": "49.67",
                "label": "Victoria"
            },
            {
                "id": "04",
                "x": "94.25",
                "y": "85.42",
                "label": "Gouyave"
            },
            {
                "id": "06",
                "x": "73.66",
                "y": "130.92",
                "label": "Grand Roy"
            },
            {
                "id": "07",
                "x": "212.33",
                "y": "72.42",
                "label": "Tivoli"
            },
            {
                "id": "09",
                "x": "205.83",
                "y": "156.92",
                "label": "Marquis",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "162.5",
                "y": "213.25",
                "label": "Saint Davids"
            },
            {
                "id": "11",
                "x": "99.66",
                "y": "251.17",
                "label": "Calivigny"
            },
            {
                "id": "12",
                "x": "70.41",
                "y": "226.25",
                "label": "Belmont",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "GE",
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
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
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
