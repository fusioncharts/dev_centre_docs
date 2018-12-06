---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Saskatchewan

#### JavaScript Alias: maps/saskatchewan


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
            "id": "CA.SK.EC"
        },
        {
            "id": "CA.SK.NR"
        },
        {
            "id": "CA.SK.SE"
        },
        {
            "id": "CA.SK.SW"
        },
        {
            "id": "CA.SK.WC"
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
                "id": "RE",
                "shapeid": "myCustomShape",
                "x": "143.43",
                "y": "368.18",
                "label": "Regina"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "205.82",
                "y": "434.65",
                "label": "Estevan",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "194.57",
                "y": "421.36",
                "label": "Weyburn",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "111.73",
                "y": "371.25",
                "label": "Moose Jaw",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "37.07",
                "y": "380.45",
                "label": "Swift Current",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "176.16",
                "y": "345.68",
                "label": "Melville",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "202.75",
                "y": "329.31",
                "label": "Yorkton",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "39.11",
                "y": "332.38",
                "label": "Kindersley",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "57.52",
                "y": "321.13",
                "label": "Rosetown",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "161.84",
                "y": "310.9",
                "label": "Lanigan",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "137.3",
                "y": "292.5",
                "label": "Saskatoon",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "69.8",
                "y": "262.84",
                "label": "North Battleford",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "130.14",
                "y": "254.65",
                "label": "Prince Alberta",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "32.98",
                "y": "234.2",
                "label": "Lloydminster",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "70.82",
                "y": "210.68",
                "label": "Meadow Lake",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "136.27",
                "y": "197.38",
                "label": "La Ronge"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "192.52",
                "y": "176.93",
                "label": "Sandy Bay"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "77.98",
                "y": "142.15",
                "label": "Buffalo Narrows"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "66.73",
                "y": "110.45",
                "label": "La Loche"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "100.48",
                "y": "26.59",
                "label": "Fond du Lac",
                "labelpos": "left"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "133.21",
                "y": "33.75",
                "label": "Stony Rapids",
                "labelpos": "right"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "170.02",
                "y": "278.18",
                "label": "Melfort",
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
            "id": "CA.SK.EC"
        },
        {
            "id": "CA.SK.NR"
        },
        {
            "id": "CA.SK.SE"
        },
        {
            "id": "CA.SK.SW"
        },
        {
            "id": "CA.SK.WC"
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
                "id": "RE",
                "x": "143.43",
                "y": "368.18",
                "label": "Regina"
            },
            {
                "id": "01",
                "x": "205.82",
                "y": "434.65",
                "label": "Estevan",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "194.57",
                "y": "421.36",
                "label": "Weyburn",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "111.73",
                "y": "371.25",
                "label": "Moose Jaw",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "37.07",
                "y": "380.45",
                "label": "Swift Current",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "176.16",
                "y": "345.68",
                "label": "Melville",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "202.75",
                "y": "329.31",
                "label": "Yorkton",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "39.11",
                "y": "332.38",
                "label": "Kindersley",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "57.52",
                "y": "321.13",
                "label": "Rosetown",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "161.84",
                "y": "310.9",
                "label": "Lanigan",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "137.3",
                "y": "292.5",
                "label": "Saskatoon",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "69.8",
                "y": "262.84",
                "label": "North Battleford",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "130.14",
                "y": "254.65",
                "label": "Prince Alberta",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "32.98",
                "y": "234.2",
                "label": "Lloydminster",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "70.82",
                "y": "210.68",
                "label": "Meadow Lake",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "136.27",
                "y": "197.38",
                "label": "La Ronge"
            },
            {
                "id": "16",
                "x": "192.52",
                "y": "176.93",
                "label": "Sandy Bay"
            },
            {
                "id": "17",
                "x": "77.98",
                "y": "142.15",
                "label": "Buffalo Narrows"
            },
            {
                "id": "18",
                "x": "66.73",
                "y": "110.45",
                "label": "La Loche"
            },
            {
                "id": "19",
                "x": "100.48",
                "y": "26.59",
                "label": "Fond du Lac",
                "labelpos": "left"
            },
            {
                "id": "20",
                "x": "133.21",
                "y": "33.75",
                "label": "Stony Rapids",
                "labelpos": "right"
            },
            {
                "id": "21",
                "x": "170.02",
                "y": "278.18",
                "label": "Melfort",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "RE",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
