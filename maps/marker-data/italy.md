---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Italy

#### JavaScript Alias: maps/italy


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
                "id": "RO",
                "shapeid": "myCustomShape",
                "x": "241.05",
                "y": "299.67",
                "label": "Rome",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "103.82",
                "y": "78.7",
                "label": "Milan",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "79.61",
                "y": "114.01",
                "label": "Turin"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "80.61",
                "y": "164.46",
                "label": "Savona",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "103.82",
                "y": "157.4",
                "label": "Genoa"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "144.18",
                "y": "174.55",
                "label": "La Spezia"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "180.51",
                "y": "136.21",
                "label": "Bologna"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "295.53",
                "y": "88.79",
                "label": "Trieste",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "230.96",
                "y": "107.96",
                "label": "Venice"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "161.34",
                "y": "77.69",
                "label": "Verona"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "205.73",
                "y": "184.64",
                "label": "Florence"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "162.34",
                "y": "191.71",
                "label": "Livorno",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "341.95",
                "y": "359.2",
                "label": "Salerno",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "323.79",
                "y": "353.15",
                "label": "Naples"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "411.57",
                "y": "332.97",
                "label": "Bari"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "450.92",
                "y": "354.16",
                "label": "Brindisi",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "431.75",
                "y": "367.27",
                "label": "Taranto",
                "labelpos": "bottom"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "373.23",
                "y": "482.3",
                "label": "Reggio di Calabria",
                "labelpos": "right"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "359.1",
                "y": "486.34",
                "label": "Messina"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "283.43",
                "y": "495.42",
                "label": "Palermo"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "310.67",
                "y": "533.76",
                "label": "Gela",
                "labelpos": "top"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "342.96",
                "y": "515.6",
                "label": "Catania",
                "labelpos": "right"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape",
                "x": "341.95",
                "y": "532.75",
                "label": "Augusta",
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
                "id": "RO",
                "x": "241.05",
                "y": "299.67",
                "label": "Rome",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "103.82",
                "y": "78.7",
                "label": "Milan",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "79.61",
                "y": "114.01",
                "label": "Turin"
            },
            {
                "id": "03",
                "x": "80.61",
                "y": "164.46",
                "label": "Savona",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "103.82",
                "y": "157.4",
                "label": "Genoa"
            },
            {
                "id": "05",
                "x": "144.18",
                "y": "174.55",
                "label": "La Spezia"
            },
            {
                "id": "06",
                "x": "180.51",
                "y": "136.21",
                "label": "Bologna"
            },
            {
                "id": "08",
                "x": "295.53",
                "y": "88.79",
                "label": "Trieste",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "x": "230.96",
                "y": "107.96",
                "label": "Venice"
            },
            {
                "id": "09",
                "x": "161.34",
                "y": "77.69",
                "label": "Verona"
            },
            {
                "id": "10",
                "x": "205.73",
                "y": "184.64",
                "label": "Florence"
            },
            {
                "id": "11",
                "x": "162.34",
                "y": "191.71",
                "label": "Livorno",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "341.95",
                "y": "359.2",
                "label": "Salerno",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "323.79",
                "y": "353.15",
                "label": "Naples"
            },
            {
                "id": "14",
                "x": "411.57",
                "y": "332.97",
                "label": "Bari"
            },
            {
                "id": "15",
                "x": "450.92",
                "y": "354.16",
                "label": "Brindisi",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "431.75",
                "y": "367.27",
                "label": "Taranto",
                "labelpos": "bottom"
            },
            {
                "id": "18",
                "x": "373.23",
                "y": "482.3",
                "label": "Reggio di Calabria",
                "labelpos": "right"
            },
            {
                "id": "19",
                "x": "359.1",
                "y": "486.34",
                "label": "Messina"
            },
            {
                "id": "20",
                "x": "283.43",
                "y": "495.42",
                "label": "Palermo"
            },
            {
                "id": "21",
                "x": "310.67",
                "y": "533.76",
                "label": "Gela",
                "labelpos": "top"
            },
            {
                "id": "22",
                "x": "342.96",
                "y": "515.6",
                "label": "Catania",
                "labelpos": "right"
            },
            {
                "id": "23",
                "x": "341.95",
                "y": "532.75",
                "label": "Augusta",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "RO",
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
            },
            {
                "id": "21",
                "shapeid": "newCustomShape"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape"
            },
            {
                "id": "23",
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
