---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Iraq

#### JavaScript Alias: maps/iraq


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
                "id": "BG",
                "shapeid": "myCustomShape",
                "x": "170.49",
                "y": "160.01",
                "label": "Baghdad",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "128.13",
                "y": "46.34",
                "label": "Mosul",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "164.3",
                "y": "46.34",
                "label": "Irbil",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "172.56",
                "y": "74.24",
                "label": "Karkuk",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "201.49",
                "y": "68.04",
                "label": "As Sulaymaniyah",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "150.86",
                "y": "118.67",
                "label": "Samarra",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "60.96",
                "y": "156.91",
                "label": "Ar Rutbah"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "159.13",
                "y": "189.97",
                "label": "Karbala"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "170.49",
                "y": "223.04",
                "label": "An Najaf",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "210.8",
                "y": "187.91",
                "label": "Al Kut",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "280.03",
                "y": "257.14",
                "label": "Al Basrah"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "236.63",
                "y": "246.81",
                "label": "An Nasiriyah",
                "labelpos": "bottom"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "283.13",
                "y": "271.61",
                "label": "Umm Qasr",
                "labelpos": "left"
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
                "id": "BG",
                "x": "170.49",
                "y": "160.01",
                "label": "Baghdad",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "128.13",
                "y": "46.34",
                "label": "Mosul",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "164.3",
                "y": "46.34",
                "label": "Irbil",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "172.56",
                "y": "74.24",
                "label": "Karkuk",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "201.49",
                "y": "68.04",
                "label": "As Sulaymaniyah",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "150.86",
                "y": "118.67",
                "label": "Samarra",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "60.96",
                "y": "156.91",
                "label": "Ar Rutbah"
            },
            {
                "id": "08",
                "x": "159.13",
                "y": "189.97",
                "label": "Karbala"
            },
            {
                "id": "07",
                "x": "170.49",
                "y": "223.04",
                "label": "An Najaf",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "210.8",
                "y": "187.91",
                "label": "Al Kut",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "280.03",
                "y": "257.14",
                "label": "Al Basrah"
            },
            {
                "id": "18",
                "x": "236.63",
                "y": "246.81",
                "label": "An Nasiriyah",
                "labelpos": "bottom"
            },
            {
                "id": "20",
                "x": "283.13",
                "y": "271.61",
                "label": "Umm Qasr",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "BG",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape"
            },
            {
                "id": "20",
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
			<marker id='BG' x='170.49' y='160.01' label='Baghdad' labelPos='left'  />
				<marker id='01' x='128.13' y='46.34' label='Mosul' labelPos='left'  />
			<marker id='02' x='164.3' y='46.34' label='Irbil' labelPos='right'  />
			<marker id='03' x='172.56' y='74.24' label='Karkuk' labelPos='left'  />
			<marker id='04' x='201.49' y='68.04' label='As Sulaymaniyah' labelPos='right'  />
			<marker id='05' x='150.86' y='118.67' label='Samarra' labelPos='left'  />
			<marker id='06' x='60.96' y='156.91' label='Ar Rutbah'  />
			<marker id='08' x='159.13' y='189.97' label='Karbala'  />
			<marker id='07' x='170.49' y='223.04' label='An Najaf' labelPos='left'  />
			<marker id='10' x='210.8' y='187.91' label='Al Kut' labelPos='right'  />
			<marker id='11' x='280.03' y='257.14' label='Al Basrah'  />
			<marker id='18' x='236.63' y='246.81' label='An Nasiriyah' labelPos='bottom'  />
			<marker id='20' x='283.13' y='271.61' label='Umm Qasr' labelPos='left'  />
		</definition>
		<application>
			<marker id='BG' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
