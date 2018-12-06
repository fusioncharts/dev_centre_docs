---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Hungary

#### JavaScript Alias: maps/hungary


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
                "id": "BU",
                "shapeid": "myCustomShape",
                "x": "225.42",
                "y": "119.23",
                "label": "Budapest"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "42.84",
                "y": "98.83",
                "label": "Sopron"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "114.24",
                "y": "91.69",
                "label": "Gyon"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "169.32",
                "y": "117.19",
                "label": "Tatabanya"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "170.34",
                "y": "151.87",
                "label": "Szekesfehervar"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "206.04",
                "y": "174.31",
                "label": "Dunaujvaros"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "129.54",
                "y": "153.91",
                "label": "Veszprem",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "38.76",
                "y": "143.71",
                "label": "Szombathely"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "53.04",
                "y": "187.57",
                "label": "Zalaegerszeg",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "70.38",
                "y": "226.33",
                "label": "Nagykarutsa"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "129.54",
                "y": "233.47",
                "label": "Kaposvar"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "156.06",
                "y": "274.27",
                "label": "Pecs"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "191.76",
                "y": "244.69",
                "label": "Szekszard"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "263.16",
                "y": "179.41",
                "label": "Kecskenvet",
                "labelpos": "bottom"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "300.89",
                "y": "150.85",
                "label": "Szolnok"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "282.54",
                "y": "120.25",
                "label": "Jaszbereny",
                "labelpos": "right"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "313.14",
                "y": "75.37",
                "label": "Eger"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "296.82",
                "y": "253.87",
                "label": "Szeged"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "316.2",
                "y": "225.31",
                "label": "Hodmezovasarhely",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "364.14",
                "y": "202.87",
                "label": "Bekescsabe"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "398.82",
                "y": "126.37",
                "label": "Debrecen"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape",
                "x": "410.04",
                "y": "71.29",
                "label": "Nyiregyharza"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape",
                "x": "333.54",
                "y": "61.09",
                "label": "Miskolc"
            },
            {
                "id": "26",
                "shapeid": "newCustomShape",
                "x": "274.38",
                "y": "57.01",
                "label": "Salgotarjan"
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
                "id": "BU",
                "x": "225.42",
                "y": "119.23",
                "label": "Budapest"
            },
            {
                "id": "01",
                "x": "42.84",
                "y": "98.83",
                "label": "Sopron"
            },
            {
                "id": "02",
                "x": "114.24",
                "y": "91.69",
                "label": "Gyon"
            },
            {
                "id": "03",
                "x": "169.32",
                "y": "117.19",
                "label": "Tatabanya"
            },
            {
                "id": "04",
                "x": "170.34",
                "y": "151.87",
                "label": "Szekesfehervar"
            },
            {
                "id": "05",
                "x": "206.04",
                "y": "174.31",
                "label": "Dunaujvaros"
            },
            {
                "id": "06",
                "x": "129.54",
                "y": "153.91",
                "label": "Veszprem",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "x": "38.76",
                "y": "143.71",
                "label": "Szombathely"
            },
            {
                "id": "08",
                "x": "53.04",
                "y": "187.57",
                "label": "Zalaegerszeg",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "70.38",
                "y": "226.33",
                "label": "Nagykarutsa"
            },
            {
                "id": "10",
                "x": "129.54",
                "y": "233.47",
                "label": "Kaposvar"
            },
            {
                "id": "11",
                "x": "156.06",
                "y": "274.27",
                "label": "Pecs"
            },
            {
                "id": "12",
                "x": "191.76",
                "y": "244.69",
                "label": "Szekszard"
            },
            {
                "id": "13",
                "x": "263.16",
                "y": "179.41",
                "label": "Kecskenvet",
                "labelpos": "bottom"
            },
            {
                "id": "14",
                "x": "300.89",
                "y": "150.85",
                "label": "Szolnok"
            },
            {
                "id": "15",
                "x": "282.54",
                "y": "120.25",
                "label": "Jaszbereny",
                "labelpos": "right"
            },
            {
                "id": "20",
                "x": "313.14",
                "y": "75.37",
                "label": "Eger"
            },
            {
                "id": "16",
                "x": "296.82",
                "y": "253.87",
                "label": "Szeged"
            },
            {
                "id": "17",
                "x": "316.2",
                "y": "225.31",
                "label": "Hodmezovasarhely",
                "labelpos": "right"
            },
            {
                "id": "18",
                "x": "364.14",
                "y": "202.87",
                "label": "Bekescsabe"
            },
            {
                "id": "22",
                "x": "398.82",
                "y": "126.37",
                "label": "Debrecen"
            },
            {
                "id": "23",
                "x": "410.04",
                "y": "71.29",
                "label": "Nyiregyharza"
            },
            {
                "id": "24",
                "x": "333.54",
                "y": "61.09",
                "label": "Miskolc"
            },
            {
                "id": "26",
                "x": "274.38",
                "y": "57.01",
                "label": "Salgotarjan"
            }
        ],
        "application": [
            {
                "id": "BU",
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
                "id": "20",
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
                "id": "22",
                "shapeid": "newCustomShape"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape"
            },
            {
                "id": "26",
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
