---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Colombia

#### JavaScript Alias: maps/colombia


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
                "id": "DC",
                "shapeid": "myCustomShape",
                "x": "169.59",
                "y": "273.42",
                "label": "Bogota",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "174.77",
                "y": "60.07",
                "label": "Santa Marta",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "139.56",
                "y": "73.53",
                "label": "Barranquilla",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "127.13",
                "y": "92.17",
                "label": "Cartagena",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "126.09",
                "y": "120.14",
                "label": "Covenas",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "87.77",
                "y": "158.46",
                "label": "Turbo"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "226.56",
                "y": "172.96",
                "label": "Cucuta",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "159.24",
                "y": "206.1",
                "label": "Medellin"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "146.81",
                "y": "267.21",
                "label": "Ibague",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "70.16",
                "y": "271.35",
                "label": "Buenaventura"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "87.77",
                "y": "287.92",
                "label": "Cali",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "18.38",
                "y": "372.85",
                "label": "Tumaco"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "79.49",
                "y": "400.82",
                "label": "Pasto"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "310.45",
                "y": "393.57",
                "label": "Mitu"
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
                "id": "DC",
                "x": "169.59",
                "y": "273.42",
                "label": "Bogota",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "174.77",
                "y": "60.07",
                "label": "Santa Marta",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "139.56",
                "y": "73.53",
                "label": "Barranquilla",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "127.13",
                "y": "92.17",
                "label": "Cartagena",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "126.09",
                "y": "120.14",
                "label": "Covenas",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "87.77",
                "y": "158.46",
                "label": "Turbo"
            },
            {
                "id": "06",
                "x": "226.56",
                "y": "172.96",
                "label": "Cucuta",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "159.24",
                "y": "206.1",
                "label": "Medellin"
            },
            {
                "id": "08",
                "x": "146.81",
                "y": "267.21",
                "label": "Ibague",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "70.16",
                "y": "271.35",
                "label": "Buenaventura"
            },
            {
                "id": "10",
                "x": "87.77",
                "y": "287.92",
                "label": "Cali",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "18.38",
                "y": "372.85",
                "label": "Tumaco"
            },
            {
                "id": "14",
                "x": "79.49",
                "y": "400.82",
                "label": "Pasto"
            },
            {
                "id": "13",
                "x": "310.45",
                "y": "393.57",
                "label": "Mitu"
            }
        ],
        "application": [
            {
                "id": "DC",
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
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
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
			<marker id='DC' x='169.59' y='273.42' label='Bogota' labelPos='right'  />
			<marker id='01' x='174.77' y='60.07' label='Santa Marta' labelPos='left'  />
			<marker id='02' x='139.56' y='73.53' label='Barranquilla' labelPos='left'  />
			<marker id='03' x='127.13' y='92.17' label='Cartagena' labelPos='left'  />
			<marker id='04' x='126.09' y='120.14' label='Covenas' labelPos='left'  />
			<marker id='05' x='87.77' y='158.46' label='Turbo'  />
			<marker id='06' x='226.56' y='172.96' label='Cucuta' labelPos='right'  />
			<marker id='07' x='159.24' y='206.1' label='Medellin'  />
			<marker id='08' x='146.81' y='267.21' label='Ibague' labelPos='left'  />
			<marker id='09' x='70.16' y='271.35' label='Buenaventura'  />
			<marker id='10' x='87.77' y='287.92' label='Cali' labelPos='right'  />
			<marker id='11' x='18.38' y='372.85' label='Tumaco'  />
			<marker id='14' x='79.49' y='400.82' label='Pasto'  />
			<marker id='13' x='310.45' y='393.57' label='Mitu'  />

		</definition>
		<application>
			<marker id='DC' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
