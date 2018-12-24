---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: France

#### JavaScript Alias: maps/france


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
                "id": "PA",
                "shapeid": "myCustomShape",
                "x": "353.38",
                "y": "142.76",
                "label": "Paris",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "349.3",
                "y": "15.29",
                "label": "Dunkerque",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "370.72",
                "y": "39.76",
                "label": "Lille",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "198.38",
                "y": "100.95",
                "label": "Cherbourg"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "273.84",
                "y": "120.32",
                "label": "Rouen",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "485.95",
                "y": "151.93",
                "label": "Nancy"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "541.01",
                "y": "158.05",
                "label": "Strasbourg",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "473.71",
                "y": "221.28",
                "label": "Dijon",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "371.74",
                "y": "188.65",
                "label": "Orleans"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "60.72",
                "y": "162.13",
                "label": "Brest"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "189.21",
                "y": "246.77",
                "label": "Nantes"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "308.51",
                "y": "321.21",
                "label": "Limoges"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "449.24",
                "y": "307.95",
                "label": "Lyon"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "478.81",
                "y": "332.43",
                "label": "Grenoble"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "463.51",
                "y": "356.9",
                "label": "Valence"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "224.9",
                "y": "391.57",
                "label": "Bordeaux",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "308.51",
                "y": "440.52",
                "label": "Toulouse"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "350.32",
                "y": "494.56",
                "label": "Perpignan",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "447.2",
                "y": "466.01",
                "label": "Marseille"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "474.73",
                "y": "473.15",
                "label": "Toulon",
                "labelpos": "top"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "525.72",
                "y": "433.38",
                "label": "Nice"
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
                "id": "PA",
                "x": "353.38",
                "y": "142.76",
                "label": "Paris",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "349.3",
                "y": "15.29",
                "label": "Dunkerque",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "370.72",
                "y": "39.76",
                "label": "Lille",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "198.38",
                "y": "100.95",
                "label": "Cherbourg"
            },
            {
                "id": "04",
                "x": "273.84",
                "y": "120.32",
                "label": "Rouen",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "485.95",
                "y": "151.93",
                "label": "Nancy"
            },
            {
                "id": "06",
                "x": "541.01",
                "y": "158.05",
                "label": "Strasbourg",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "473.71",
                "y": "221.28",
                "label": "Dijon",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "371.74",
                "y": "188.65",
                "label": "Orleans"
            },
            {
                "id": "10",
                "x": "60.72",
                "y": "162.13",
                "label": "Brest"
            },
            {
                "id": "11",
                "x": "189.21",
                "y": "246.77",
                "label": "Nantes"
            },
            {
                "id": "12",
                "x": "308.51",
                "y": "321.21",
                "label": "Limoges"
            },
            {
                "id": "07",
                "x": "449.24",
                "y": "307.95",
                "label": "Lyon"
            },
            {
                "id": "13",
                "x": "478.81",
                "y": "332.43",
                "label": "Grenoble"
            },
            {
                "id": "15",
                "x": "463.51",
                "y": "356.9",
                "label": "Valence"
            },
            {
                "id": "14",
                "x": "224.9",
                "y": "391.57",
                "label": "Bordeaux",
                "labelpos": "right"
            },
            {
                "id": "18",
                "x": "308.51",
                "y": "440.52",
                "label": "Toulouse"
            },
            {
                "id": "17",
                "x": "350.32",
                "y": "494.56",
                "label": "Perpignan",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "447.2",
                "y": "466.01",
                "label": "Marseille"
            },
            {
                "id": "19",
                "x": "474.73",
                "y": "473.15",
                "label": "Toulon",
                "labelpos": "top"
            },
            {
                "id": "21",
                "x": "525.72",
                "y": "433.38",
                "label": "Nice"
            }
        ],
        "application": [
            {
                "id": "PA",
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
                "id": "07",
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
                "id": "18",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape"
            },
            {
                "id": "21",
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
