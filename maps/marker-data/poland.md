---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Poland

#### JavaScript Alias: maps/poland


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-xml'>Old XML Format</a>
    </li>
</ul>
<div class='tab-content'>
    <pre class='plain-code'></pre>
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
                "id": "WA",
                "shapeid": "myCustomShape",
                "x": "275.82",
                "y": "187.81",
                "label": "Warsaw",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "107.5",
                "y": "33.86",
                "label": "Ustka"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "175.24",
                "y": "41.05",
                "label": "Gdynia",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "182.42",
                "y": "50.28",
                "label": "Gdansk",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "55.16",
                "y": "60.55",
                "label": "Kotobrzeg"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "15.13",
                "y": "74.92",
                "label": "Swinoujscie",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "15.13",
                "y": "106.73",
                "label": "Szczecin",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "78.76",
                "y": "161.13",
                "label": "Poznan"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "150.61",
                "y": "109.81",
                "label": "Bydgoszcz"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "356.9",
                "y": "111.86",
                "label": "Bialystok"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "213.21",
                "y": "203.21",
                "label": "Lodz"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "356.9",
                "y": "253.5",
                "label": "Lublin"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "317.9",
                "y": "316.1",
                "label": "Rzeszow"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "233.74",
                "y": "320.21",
                "label": "Krakow",
                "labelpos": "right"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "194.74",
                "y": "297.63",
                "label": "Katowice",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "172.16",
                "y": "284.28",
                "label": "Gliwice",
                "labelpos": "left"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "190.63",
                "y": "255.55",
                "label": "Czestochowa",
                "labelpos": "left"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "102.37",
                "y": "223.73",
                "label": "Wroctaw",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "289.16",
                "y": "222.71",
                "label": "Radom"
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
                "id": "WA",
                "x": "275.82",
                "y": "187.81",
                "label": "Warsaw",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "107.5",
                "y": "33.86",
                "label": "Ustka"
            },
            {
                "id": "02",
                "x": "175.24",
                "y": "41.05",
                "label": "Gdynia",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "182.42",
                "y": "50.28",
                "label": "Gdansk",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "x": "55.16",
                "y": "60.55",
                "label": "Kotobrzeg"
            },
            {
                "id": "05",
                "x": "15.13",
                "y": "74.92",
                "label": "Swinoujscie",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "15.13",
                "y": "106.73",
                "label": "Szczecin",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "78.76",
                "y": "161.13",
                "label": "Poznan"
            },
            {
                "id": "08",
                "x": "150.61",
                "y": "109.81",
                "label": "Bydgoszcz"
            },
            {
                "id": "10",
                "x": "356.9",
                "y": "111.86",
                "label": "Bialystok"
            },
            {
                "id": "11",
                "x": "213.21",
                "y": "203.21",
                "label": "Lodz"
            },
            {
                "id": "15",
                "x": "356.9",
                "y": "253.5",
                "label": "Lublin"
            },
            {
                "id": "16",
                "x": "317.9",
                "y": "316.1",
                "label": "Rzeszow"
            },
            {
                "id": "14",
                "x": "233.74",
                "y": "320.21",
                "label": "Krakow",
                "labelpos": "right"
            },
            {
                "id": "17",
                "x": "194.74",
                "y": "297.63",
                "label": "Katowice",
                "labelpos": "right"
            },
            {
                "id": "18",
                "x": "172.16",
                "y": "284.28",
                "label": "Gliwice",
                "labelpos": "left"
            },
            {
                "id": "19",
                "x": "190.63",
                "y": "255.55",
                "label": "Czestochowa",
                "labelpos": "left"
            },
            {
                "id": "20",
                "x": "102.37",
                "y": "223.73",
                "label": "Wroctaw",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "289.16",
                "y": "222.71",
                "label": "Radom"
            }
        ],
        "application": [
            {
                "id": "WA",
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
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
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
                "id": "12",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

    </div>
    <div class='tab old-xml-tab'>
<pre><code class="language-html">
<map>
	<markers>
	    <shapes>
		    <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='WA' x='275.82' y='187.81' label='Warsaw' labelPos='right'  />
			<marker id='01' x='107.5' y='33.86' label='Ustka'  />
			<marker id='02' x='175.24' y='41.05' label='Gdynia' labelPos='left'  />
			<marker id='03' x='182.42' y='50.28' label='Gdansk' labelPos='bottom'  />
			<marker id='04' x='55.16' y='60.55' label='Kotobrzeg'  />
			<marker id='05' x='15.13' y='74.92' label='Swinoujscie' labelPos='right'  />
			<marker id='06' x='15.13' y='106.73' label='Szczecin' labelPos='right'  />
			<marker id='07' x='78.76' y='161.13' label='Poznan'  />
			<marker id='08' x='150.61' y='109.81' label='Bydgoszcz'  />
			<marker id='10' x='356.9' y='111.86' label='Bialystok'  />
			<marker id='11' x='213.21' y='203.21' label='Lodz'  />
			<marker id='15' x='356.9' y='253.5' label='Lublin'  />
			<marker id='16' x='317.9' y='316.1' label='Rzeszow'  />
			<marker id='14' x='233.74' y='320.21' label='Krakow' labelPos='right'  />
			<marker id='17' x='194.74' y='297.63' label='Katowice' labelPos='right'  />
			<marker id='18' x='172.16' y='284.28' label='Gliwice' labelPos='left'  />
			<marker id='19' x='190.63' y='255.55' label='Czestochowa' labelPos='left'  />
			<marker id='20' x='102.37' y='223.73' label='Wroctaw' labelPos='left'  />
			<marker id='12' x='289.16' y='222.71' label='Radom'  />

		</definition>
		<application>
			<marker id='WA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
