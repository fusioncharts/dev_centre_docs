---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Nunavut

#### JavaScript Alias: maps/nunavut


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
<pre><code class="language-javascript">
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
    "data": [
        {
            "id": "CA.NU.QK"
        },
        {
            "id": "CA.NU.KV"
        },
        {
            "id": "CA.NU.KT"
        }
    ],
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
                "id": "IQ",
                "shapeid": "myCustomShape",
                "x": "302.93",
                "y": "237.39",
                "label": "Iqaluit"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "251.77",
                "y": "256.83",
                "label": "Cape Desert"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "304.98",
                "y": "255.81",
                "label": "Kimmirut",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "214.93",
                "y": "268.09",
                "label": "Coral Harbour",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "203.67",
                "y": "205.67",
                "label": "Igloolik"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "192.42",
                "y": "242.51",
                "label": "Repulse Bay"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "168.88",
                "y": "215.9",
                "label": "Pelly Bay"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "263.02",
                "y": "164.74",
                "label": "Clyde River",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "206.74",
                "y": "151.44",
                "label": "Pond Inlet",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "181.16",
                "y": "152.46",
                "label": "Nanisivik",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "182.19",
                "y": "145.3",
                "label": "Arctic Bay"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "168.88",
                "y": "100.27",
                "label": "Grise Fond",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "135.12",
                "y": "130.97",
                "label": "Resolute",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "81.91",
                "y": "215.9",
                "label": "Cambridge Bay"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "28.7",
                "y": "222.04",
                "label": "Kugluktuk"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "74.74",
                "y": "232.27",
                "label": "Umingmaktok",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "151.49",
                "y": "283.44",
                "label": "Baker Lake"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "164.79",
                "y": "294.69",
                "label": "Chestfield Inlet",
                "labelpos": "left"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "160.7",
                "y": "304.93",
                "label": "Rankin Inlet",
                "labelpos": "right"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "154.56",
                "y": "317.2",
                "label": "Whale Cove",
                "labelpos": "left"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "149.44",
                "y": "326.41",
                "label": "Arvait",
                "labelpos": "right"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-javascript">
{
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1",
        "showlabels": "0"
    },
    "data": [
        {
            "id": "CA.NU.QK"
        },
        {
            "id": "CA.NU.KV"
        },
        {
            "id": "CA.NU.KT"
        }
    ],
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
                "id": "IQ",
                "x": "302.93",
                "y": "237.39",
                "label": "Iqaluit"
            },
            {
                "id": "01",
                "x": "251.77",
                "y": "256.83",
                "label": "Cape Desert"
            },
            {
                "id": "02",
                "x": "304.98",
                "y": "255.81",
                "label": "Kimmirut",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "214.93",
                "y": "268.09",
                "label": "Coral Harbour",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "203.67",
                "y": "205.67",
                "label": "Igloolik"
            },
            {
                "id": "06",
                "x": "192.42",
                "y": "242.51",
                "label": "Repulse Bay"
            },
            {
                "id": "04",
                "x": "168.88",
                "y": "215.9",
                "label": "Pelly Bay"
            },
            {
                "id": "08",
                "x": "263.02",
                "y": "164.74",
                "label": "Clyde River",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "206.74",
                "y": "151.44",
                "label": "Pond Inlet",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "181.16",
                "y": "152.46",
                "label": "Nanisivik",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "x": "182.19",
                "y": "145.3",
                "label": "Arctic Bay"
            },
            {
                "id": "12",
                "x": "168.88",
                "y": "100.27",
                "label": "Grise Fond",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "135.12",
                "y": "130.97",
                "label": "Resolute",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "81.91",
                "y": "215.9",
                "label": "Cambridge Bay"
            },
            {
                "id": "15",
                "x": "28.7",
                "y": "222.04",
                "label": "Kugluktuk"
            },
            {
                "id": "16",
                "x": "74.74",
                "y": "232.27",
                "label": "Umingmaktok",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "151.49",
                "y": "283.44",
                "label": "Baker Lake"
            },
            {
                "id": "18",
                "x": "164.79",
                "y": "294.69",
                "label": "Chestfield Inlet",
                "labelpos": "left"
            },
            {
                "id": "20",
                "x": "160.7",
                "y": "304.93",
                "label": "Rankin Inlet",
                "labelpos": "right"
            },
            {
                "id": "21",
                "x": "154.56",
                "y": "317.2",
                "label": "Whale Cove",
                "labelpos": "left"
            },
            {
                "id": "22",
                "x": "149.44",
                "y": "326.41",
                "label": "Arvait",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "IQ",
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
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
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
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
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
                "id": "20",
                "shapeid": "newCustomShape"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
