---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Venezuela

#### JavaScript Alias: maps/venezuela


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
                "id": "CA",
                "shapeid": "myCustomShape",
                "x": "260.73",
                "y": "80.68",
                "label": "Caracas",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "131.02",
                "y": "18.38",
                "label": "Amuay",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "68.73",
                "y": "70.46",
                "label": "Maracaibo",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "140.22",
                "y": "99.06",
                "label": "Barquisimeto"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "42.17",
                "y": "187.91",
                "label": "San Cristobal",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "211.71",
                "y": "80.68",
                "label": "Puerto Cabello"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "214.77",
                "y": "99.06",
                "label": "Valencia",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "227.02",
                "y": "85.78",
                "label": "Maracay",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "351.62",
                "y": "91.91",
                "label": "Puerto La Cruz",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "372.05",
                "y": "80.68",
                "label": "Cumana"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "442.51",
                "y": "176.68",
                "label": "Ciudad Guayana"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "236.22",
                "y": "277.78",
                "label": "Puerto Ayacucho",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "292.39",
                "y": "172.59",
                "label": "San Fernando"
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
                "id": "CA",
                "x": "260.73",
                "y": "80.68",
                "label": "Caracas",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "131.02",
                "y": "18.38",
                "label": "Amuay",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "68.73",
                "y": "70.46",
                "label": "Maracaibo",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "140.22",
                "y": "99.06",
                "label": "Barquisimeto"
            },
            {
                "id": "04",
                "x": "42.17",
                "y": "187.91",
                "label": "San Cristobal",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "211.71",
                "y": "80.68",
                "label": "Puerto Cabello"
            },
            {
                "id": "06",
                "x": "214.77",
                "y": "99.06",
                "label": "Valencia",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "227.02",
                "y": "85.78",
                "label": "Maracay",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "351.62",
                "y": "91.91",
                "label": "Puerto La Cruz",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "x": "372.05",
                "y": "80.68",
                "label": "Cumana"
            },
            {
                "id": "10",
                "x": "442.51",
                "y": "176.68",
                "label": "Ciudad Guayana"
            },
            {
                "id": "11",
                "x": "236.22",
                "y": "277.78",
                "label": "Puerto Ayacucho",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "292.39",
                "y": "172.59",
                "label": "San Fernando"
            }
        ],
        "application": [
            {
                "id": "CA",
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
