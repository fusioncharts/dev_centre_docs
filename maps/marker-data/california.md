---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: California

#### JavaScript Alias: maps/california


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
                "id": "SA",
                "shapeid": "myCustomShape",
                "x": "176.8",
                "y": "254.47",
                "label": "Sacremento",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "146.14",
                "y": "350.53",
                "label": "San Jose",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "118.54",
                "y": "316.81",
                "label": "San Francisco",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "143.07",
                "y": "305.56",
                "label": "Oakland",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "416.96",
                "y": "659.17",
                "label": "San Diego",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "280.02",
                "y": "390.39",
                "label": "Fresno"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "369.95",
                "y": "594.78",
                "label": "Los Angeles",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "381.19",
                "y": "603.98",
                "label": "Irvine",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "453.75",
                "y": "548.79",
                "label": "San Bernardino"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "466.01",
                "y": "504.85",
                "label": "Barstow"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "358.71",
                "y": "478.28",
                "label": "Bakersfield"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "24.52",
                "y": "89.93",
                "label": "Eureka"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "131.83",
                "y": "112.41",
                "label": "Redding",
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
                "id": "SA",
                "x": "176.8",
                "y": "254.47",
                "label": "Sacremento",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "146.14",
                "y": "350.53",
                "label": "San Jose",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "118.54",
                "y": "316.81",
                "label": "San Francisco",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "143.07",
                "y": "305.56",
                "label": "Oakland",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "416.96",
                "y": "659.17",
                "label": "San Diego",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "280.02",
                "y": "390.39",
                "label": "Fresno"
            },
            {
                "id": "07",
                "x": "369.95",
                "y": "594.78",
                "label": "Los Angeles",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "381.19",
                "y": "603.98",
                "label": "Irvine",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "453.75",
                "y": "548.79",
                "label": "San Bernardino"
            },
            {
                "id": "10",
                "x": "466.01",
                "y": "504.85",
                "label": "Barstow"
            },
            {
                "id": "11",
                "x": "358.71",
                "y": "478.28",
                "label": "Bakersfield"
            },
            {
                "id": "12",
                "x": "24.52",
                "y": "89.93",
                "label": "Eureka"
            },
            {
                "id": "13",
                "x": "131.83",
                "y": "112.41",
                "label": "Redding",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "SA",
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
