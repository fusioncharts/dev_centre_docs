---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Paraguay

#### JavaScript Alias: maps/paraguay


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
                "id": "AS",
                "shapeid": "myCustomShape",
                "x": "176.89",
                "y": "226.24",
                "label": "Asuncion",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "81.72",
                "y": "18.31",
                "label": "Capitan Pablo Lagerenza",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "168.62",
                "y": "76.24",
                "label": "Fuerte Olimpo",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "8.27",
                "y": "111.41",
                "label": "Doctor Pedro P.Pena",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "242.06",
                "y": "126.93",
                "label": "Pedro Juan Caballero",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "166.55",
                "y": "164.17",
                "label": "Concepcion",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "187.24",
                "y": "195.2",
                "label": "San Pedro",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "291.72",
                "y": "181.75",
                "label": "Salto del Guaira",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "281.37",
                "y": "246.93",
                "label": "Ciudad del Este",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "222.41",
                "y": "264.51",
                "label": "Villarrica",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "171.72",
                "y": "258.31",
                "label": "Villeta",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "155.17",
                "y": "292.44",
                "label": "Pilar",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "242.06",
                "y": "307.96",
                "label": "Encarnacion"
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
                "id": "AS",
                "x": "176.89",
                "y": "226.24",
                "label": "Asuncion",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "81.72",
                "y": "18.31",
                "label": "Capitan Pablo Lagerenza",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "168.62",
                "y": "76.24",
                "label": "Fuerte Olimpo",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "8.27",
                "y": "111.41",
                "label": "Doctor Pedro P.Pena",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "242.06",
                "y": "126.93",
                "label": "Pedro Juan Caballero",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "166.55",
                "y": "164.17",
                "label": "Concepcion",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "187.24",
                "y": "195.2",
                "label": "San Pedro",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "291.72",
                "y": "181.75",
                "label": "Salto del Guaira",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "281.37",
                "y": "246.93",
                "label": "Ciudad del Este",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "222.41",
                "y": "264.51",
                "label": "Villarrica",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "171.72",
                "y": "258.31",
                "label": "Villeta",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "155.17",
                "y": "292.44",
                "label": "Pilar",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "242.06",
                "y": "307.96",
                "label": "Encarnacion"
            }
        ],
        "application": [
            {
                "id": "AS",
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
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
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
			<marker id='AS' x='176.89' y='226.24' label='Asuncion' labelPos='left' />
			<marker id='01' x='81.72' y='18.31' label='Capitan Pablo Lagerenza' labelPos='right'  />
			<marker id='02' x='168.62' y='76.24' label='Fuerte Olimpo' labelPos='right'  />
			<marker id='03' x='8.27' y='111.41' label='Doctor Pedro P.Pena' labelPos='right'  />
			<marker id='04' x='242.06' y='126.93' label='Pedro Juan Caballero' labelPos='left'  />
			<marker id='06' x='166.55' y='164.17' label='Concepcion' labelPos='left'  />
			<marker id='05' x='187.24' y='195.2' label='San Pedro' labelPos='left'  />
			<marker id='08' x='291.72' y='181.75' label='Salto del Guaira' labelPos='left'  />
			<marker id='09' x='281.37' y='246.93' label='Ciudad del Este' labelPos='left'  />
			<marker id='10' x='222.41' y='264.51' label='Villarrica' labelPos='right'  />
			<marker id='07' x='171.72' y='258.31' label='Villeta' labelPos='left'  />
			<marker id='11' x='155.17' y='292.44' label='Pilar' labelPos='left'  />
			<marker id='12' x='242.06' y='307.96' label='Encarnacion'  />
		</definition>
		<application>
			<marker id='AS' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
