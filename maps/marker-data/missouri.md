---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Missouri

#### JavaScript Alias: maps/missouri


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
                "id": "JC",
                "shapeid": "myCustomShape",
                "x": "346.8",
                "y": "257.34",
                "label": "Jefferson City",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "103.75",
                "y": "119.48",
                "label": "St.Joseph",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "131.32",
                "y": "196.07",
                "label": "Kansas City",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "138.47",
                "y": "203.22",
                "label": "Independence",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "190.55",
                "y": "251.21",
                "label": "Warrensburg",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "231.4",
                "y": "258.36",
                "label": "Sedalia",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "140.51",
                "y": "468.73",
                "label": "Joplin",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "170.13",
                "y": "440.14",
                "label": "Carthage",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "230.38",
                "y": "428.9",
                "label": "Springfield",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "393.77",
                "y": "349.25",
                "label": "Rolla",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "462.19",
                "y": "373.76",
                "label": "Farmington",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "629.67",
                "y": "432.99",
                "label": "Cape Girardeau",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "554.1",
                "y": "486.09",
                "label": "Poplar Bluff",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "394.79",
                "y": "507.53",
                "label": "West Plains",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "306.97",
                "y": "392.14",
                "label": "Lebanon"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "442.79",
                "y": "116.41",
                "label": "Hannibal"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "338.63",
                "y": "57.18",
                "label": "Kirksville"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "518.36",
                "y": "233.85",
                "label": "St.Charles",
                "labelpos": "left"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "562.27",
                "y": "244.06",
                "label": "St.Louis",
                "labelpos": "right"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "361.09",
                "y": "178.71",
                "label": "Columbia"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "456.07",
                "y": "271.64",
                "label": "Washington",
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
                "id": "JC",
                "x": "346.8",
                "y": "257.34",
                "label": "Jefferson City",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "103.75",
                "y": "119.48",
                "label": "St.Joseph",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "131.32",
                "y": "196.07",
                "label": "Kansas City",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "138.47",
                "y": "203.22",
                "label": "Independence",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "x": "190.55",
                "y": "251.21",
                "label": "Warrensburg",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "231.4",
                "y": "258.36",
                "label": "Sedalia",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "140.51",
                "y": "468.73",
                "label": "Joplin",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "170.13",
                "y": "440.14",
                "label": "Carthage",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "230.38",
                "y": "428.9",
                "label": "Springfield",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "393.77",
                "y": "349.25",
                "label": "Rolla",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "462.19",
                "y": "373.76",
                "label": "Farmington",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "629.67",
                "y": "432.99",
                "label": "Cape Girardeau",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "554.1",
                "y": "486.09",
                "label": "Poplar Bluff",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "394.79",
                "y": "507.53",
                "label": "West Plains",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "306.97",
                "y": "392.14",
                "label": "Lebanon"
            },
            {
                "id": "15",
                "x": "442.79",
                "y": "116.41",
                "label": "Hannibal"
            },
            {
                "id": "16",
                "x": "338.63",
                "y": "57.18",
                "label": "Kirksville"
            },
            {
                "id": "17",
                "x": "518.36",
                "y": "233.85",
                "label": "St.Charles",
                "labelpos": "left"
            },
            {
                "id": "18",
                "x": "562.27",
                "y": "244.06",
                "label": "St.Louis",
                "labelpos": "right"
            },
            {
                "id": "19",
                "x": "361.09",
                "y": "178.71",
                "label": "Columbia"
            },
            {
                "id": "20",
                "x": "456.07",
                "y": "271.64",
                "label": "Washington",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "JC",
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
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
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
