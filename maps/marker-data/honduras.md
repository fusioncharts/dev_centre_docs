---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Honduras

#### JavaScript Alias: maps/honduras


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
                "id": "TE",
                "shapeid": "myCustomShape",
                "x": "142.55",
                "y": "166.66",
                "label": "Tegucigalpa",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "362.34",
                "y": "87.5",
                "label": "Puerto Lempira",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "227.96",
                "y": "41.66",
                "label": "Puerto Castilla"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "171.71",
                "y": "57.29",
                "label": "La Ceiba",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "129.01",
                "y": "56.25",
                "label": "Tela",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "104.01",
                "y": "52.08",
                "label": "Puerto Cortez"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "85.26",
                "y": "75",
                "label": "San Pedro Sula",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "48.8",
                "y": "113.54",
                "label": "Santa Rosa de Copan",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "123.8",
                "y": "134.37",
                "label": "Comayagua",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "204.01",
                "y": "121.87",
                "label": "Juticalpa",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "190.46",
                "y": "176.04",
                "label": "Danli",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "132.13",
                "y": "208.33",
                "label": "San Lorenzo",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "151.92",
                "y": "221.87",
                "label": "Choluteca",
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
                "id": "TE",
                "x": "142.55",
                "y": "166.66",
                "label": "Tegucigalpa",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "362.34",
                "y": "87.5",
                "label": "Puerto Lempira",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "227.96",
                "y": "41.66",
                "label": "Puerto Castilla"
            },
            {
                "id": "03",
                "x": "171.71",
                "y": "57.29",
                "label": "La Ceiba",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "x": "129.01",
                "y": "56.25",
                "label": "Tela",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "104.01",
                "y": "52.08",
                "label": "Puerto Cortez"
            },
            {
                "id": "08",
                "x": "85.26",
                "y": "75",
                "label": "San Pedro Sula",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "48.8",
                "y": "113.54",
                "label": "Santa Rosa de Copan",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "123.8",
                "y": "134.37",
                "label": "Comayagua",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "204.01",
                "y": "121.87",
                "label": "Juticalpa",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "190.46",
                "y": "176.04",
                "label": "Danli",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "132.13",
                "y": "208.33",
                "label": "San Lorenzo",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "151.92",
                "y": "221.87",
                "label": "Choluteca",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "TE",
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
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
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
