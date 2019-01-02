---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Slovakia

#### JavaScript Alias: maps/slovakia


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
                "id": "BL",
                "shapeid": "myCustomShape",
                "x": "32.23",
                "y": "225.26",
                "label": "Bratislava",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "463.13",
                "y": "145.69",
                "label": "Kosice"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "465.2",
                "y": "90.93",
                "label": "Presov"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "309.17",
                "y": "203.56",
                "label": "Lucenec",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "275.07",
                "y": "158.1",
                "label": "Banska Bystrica",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "201.7",
                "y": "129.16",
                "label": "Prievidza",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "133.5",
                "y": "102.29",
                "label": "Trencin",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "227.53",
                "y": "55.8",
                "label": "Zilina"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "251.3",
                "y": "78.53",
                "label": "Martin",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "140.73",
                "y": "290.36",
                "label": "Komarno",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "74.6",
                "y": "258.33",
                "label": "Gabcikovo",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "145.9",
                "y": "196.33",
                "label": "Nitra"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "75.64",
                "y": "175.66",
                "label": "Trnava",
                "labelpos": "left"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "369.1",
                "y": "71.3",
                "label": "Poprad",
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
                "id": "BL",
                "x": "32.23",
                "y": "225.26",
                "label": "Bratislava",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "463.13",
                "y": "145.69",
                "label": "Kosice"
            },
            {
                "id": "02",
                "x": "465.2",
                "y": "90.93",
                "label": "Presov"
            },
            {
                "id": "04",
                "x": "309.17",
                "y": "203.56",
                "label": "Lucenec",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "275.07",
                "y": "158.1",
                "label": "Banska Bystrica",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "201.7",
                "y": "129.16",
                "label": "Prievidza",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "133.5",
                "y": "102.29",
                "label": "Trencin",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "227.53",
                "y": "55.8",
                "label": "Zilina"
            },
            {
                "id": "09",
                "x": "251.3",
                "y": "78.53",
                "label": "Martin",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "140.73",
                "y": "290.36",
                "label": "Komarno",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "74.6",
                "y": "258.33",
                "label": "Gabcikovo",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "145.9",
                "y": "196.33",
                "label": "Nitra"
            },
            {
                "id": "13",
                "x": "75.64",
                "y": "175.66",
                "label": "Trnava",
                "labelpos": "left"
            },
            {
                "id": "18",
                "x": "369.1",
                "y": "71.3",
                "label": "Poprad",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "BL",
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
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
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
