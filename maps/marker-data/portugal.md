---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Portugal

#### JavaScript Alias: maps/portugal


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
                "id": "LI",
                "shapeid": "myCustomShape",
                "x": "29.16",
                "y": "332.13",
                "label": "Lisbon",
                "labelpos": "top"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "56.25",
                "y": "47.76",
                "label": "Viana do Castelo"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "100",
                "y": "70.67",
                "label": "Braga"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "67.7",
                "y": "110.26",
                "label": "Leixoes",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "69.79",
                "y": "119.63",
                "label": "Porto",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "59.37",
                "y": "157.13",
                "label": "Aveiro"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "87.5",
                "y": "208.17",
                "label": "Coimbra"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "173.95",
                "y": "181.09",
                "label": "Covilha"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "157.29",
                "y": "285.26",
                "label": "Portalegre",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "135.41",
                "y": "406.09",
                "label": "Beja"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "122.91",
                "y": "498.8",
                "label": "Faro"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "42.7",
                "y": "356.09",
                "label": "Setubal",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "36.45",
                "y": "334.21",
                "label": "Barreiro",
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
                "id": "LI",
                "x": "29.16",
                "y": "332.13",
                "label": "Lisbon",
                "labelpos": "top"
            },
            {
                "id": "01",
                "x": "56.25",
                "y": "47.76",
                "label": "Viana do Castelo"
            },
            {
                "id": "02",
                "x": "100",
                "y": "70.67",
                "label": "Braga"
            },
            {
                "id": "03",
                "x": "67.7",
                "y": "110.26",
                "label": "Leixoes",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "69.79",
                "y": "119.63",
                "label": "Porto",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "59.37",
                "y": "157.13",
                "label": "Aveiro"
            },
            {
                "id": "06",
                "x": "87.5",
                "y": "208.17",
                "label": "Coimbra"
            },
            {
                "id": "07",
                "x": "173.95",
                "y": "181.09",
                "label": "Covilha"
            },
            {
                "id": "08",
                "x": "157.29",
                "y": "285.26",
                "label": "Portalegre",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "135.41",
                "y": "406.09",
                "label": "Beja"
            },
            {
                "id": "11",
                "x": "122.91",
                "y": "498.8",
                "label": "Faro"
            },
            {
                "id": "10",
                "x": "42.7",
                "y": "356.09",
                "label": "Setubal",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "36.45",
                "y": "334.21",
                "label": "Barreiro",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "LI",
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
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "10",
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
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillpattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillpattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='LI' x='29.16' y='332.13' label='Lisbon' labelPos='top'  />
			<marker id='01' x='56.25' y='47.76' label='Viana do Castelo'  />
			<marker id='02' x='100' y='70.67' label='Braga'  />
			<marker id='03' x='67.7' y='110.26' label='Leixoes' labelPos='right' />
			<marker id='04' x='69.79' y='119.63' label='Porto' labelPos='right'  />
			<marker id='05' x='59.37' y='157.13' label='Aveiro'  />
			<marker id='06' x='87.5' y='208.17' label='Coimbra'  />
			<marker id='07' x='173.95' y='181.09' label='Covilha'  />
			<marker id='08' x='157.29' y='285.26' label='Portalegre' labelpos='left' />
			<marker id='09' x='135.41' y='406.09' label='Beja'  />
			<marker id='11' x='122.91' y='498.8' label='Faro'  />
			<marker id='10' x='42.7' y='356.09' label='Setubal' labelPos='left'  />
			<marker id='13' x='36.45' y='334.21' label='Barreiro' labelpos='right' />

		</definition>
		<application>
			<marker id='LI' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
