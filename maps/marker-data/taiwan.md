---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Taiwan

#### JavaScript Alias: maps/taiwan


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
                "id": "TC",
                "shapeid": "myCustomShape",
                "x": "366.32",
                "y": "49.88",
                "label": "Taipei",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "390.88",
                "y": "42.72",
                "label": "Chi-Lung"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "414.41",
                "y": "125.6",
                "label": "Su-ao",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "373.48",
                "y": "218.72",
                "label": "Hua-lien",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "227.16",
                "y": "191.09",
                "label": "Tai-chung",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "208.74",
                "y": "203.37",
                "label": "Chang-hua",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "158.6",
                "y": "376.3",
                "label": "Tai-nan",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "304.93",
                "y": "404.95",
                "label": "Tai-tung",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "170.88",
                "y": "425.41",
                "label": "Kao-hsiung",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "66.51",
                "y": "280.11",
                "label": "Ma-kung",
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
                "id": "TC",
                "x": "366.32",
                "y": "49.88",
                "label": "Taipei",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "390.88",
                "y": "42.72",
                "label": "Chi-Lung"
            },
            {
                "id": "02",
                "x": "414.41",
                "y": "125.6",
                "label": "Su-ao",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "373.48",
                "y": "218.72",
                "label": "Hua-lien",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "227.16",
                "y": "191.09",
                "label": "Tai-chung",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "208.74",
                "y": "203.37",
                "label": "Chang-hua",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "158.6",
                "y": "376.3",
                "label": "Tai-nan",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "304.93",
                "y": "404.95",
                "label": "Tai-tung",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "170.88",
                "y": "425.41",
                "label": "Kao-hsiung",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "66.51",
                "y": "280.11",
                "label": "Ma-kung",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "TC",
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
                "id": "16",
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
