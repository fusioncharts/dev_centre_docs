---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Nicaragua

#### JavaScript Alias: maps/nicaragua


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
                "id": "MN",
                "shapeid": "myCustomShape",
                "x": "128.45",
                "y": "243.54",
                "label": "Managua",
                "labelpos": "top"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "366.57",
                "y": "81.66",
                "label": "Puerto Cabezas",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "114.87",
                "y": "116.13",
                "label": "Ocotal",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "79.37",
                "y": "173.57",
                "label": "Guasaule",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "86.68",
                "y": "181.92",
                "label": "Somotillo",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "62.66",
                "y": "214.3",
                "label": "Corinto",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "85.63",
                "y": "213.25",
                "label": "Leon",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "146.21",
                "y": "247.72",
                "label": "Masaya",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "158.74",
                "y": "253.98",
                "label": "Las Isletas",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "165",
                "y": "304.11",
                "label": "Rivas",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "259",
                "y": "329.18",
                "label": "San Carlos",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "342.54",
                "y": "234.14",
                "label": "Bluefields",
                "labelpos": "left"
            },
            {
                "id": "30",
                "shapeid": "newCustomShape",
                "x": "344.63",
                "y": "282.18",
                "label": "Monkey Point",
                "labelpos": "left"
            },
            {
                "id": "29",
                "shapeid": "newCustomShape",
                "x": "345.68",
                "y": "351.11",
                "label": "San Juan del Norte"
            },
            {
                "id": "32",
                "shapeid": "newCustomShape",
                "x": "161.87",
                "y": "189.23",
                "label": "Matalgalpa",
                "labelpos": "right"
            },
            {
                "id": "33",
                "shapeid": "newCustomShape",
                "x": "181.71",
                "y": "219.52",
                "label": "Boaco",
                "labelpos": "right"
            },
            {
                "id": "36",
                "shapeid": "newCustomShape",
                "x": "203.64",
                "y": "257.12",
                "label": "Juigalpa",
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
                "id": "MN",
                "x": "128.45",
                "y": "243.54",
                "label": "Managua",
                "labelpos": "top"
            },
            {
                "id": "01",
                "x": "366.57",
                "y": "81.66",
                "label": "Puerto Cabezas",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "114.87",
                "y": "116.13",
                "label": "Ocotal",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "79.37",
                "y": "173.57",
                "label": "Guasaule",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "86.68",
                "y": "181.92",
                "label": "Somotillo",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "62.66",
                "y": "214.3",
                "label": "Corinto",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "85.63",
                "y": "213.25",
                "label": "Leon",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "146.21",
                "y": "247.72",
                "label": "Masaya",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "158.74",
                "y": "253.98",
                "label": "Las Isletas",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "165",
                "y": "304.11",
                "label": "Rivas",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "259",
                "y": "329.18",
                "label": "San Carlos",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "342.54",
                "y": "234.14",
                "label": "Bluefields",
                "labelpos": "left"
            },
            {
                "id": "30",
                "x": "344.63",
                "y": "282.18",
                "label": "Monkey Point",
                "labelpos": "left"
            },
            {
                "id": "29",
                "x": "345.68",
                "y": "351.11",
                "label": "San Juan del Norte"
            },
            {
                "id": "32",
                "x": "161.87",
                "y": "189.23",
                "label": "Matalgalpa",
                "labelpos": "right"
            },
            {
                "id": "33",
                "x": "181.71",
                "y": "219.52",
                "label": "Boaco",
                "labelpos": "right"
            },
            {
                "id": "36",
                "x": "203.64",
                "y": "257.12",
                "label": "Juigalpa",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "MN",
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
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "30",
                "shapeid": "newCustomShape"
            },
            {
                "id": "29",
                "shapeid": "newCustomShape"
            },
            {
                "id": "32",
                "shapeid": "newCustomShape"
            },
            {
                "id": "33",
                "shapeid": "newCustomShape"
            },
            {
                "id": "36",
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
			<marker id='MN' x='128.45' y='243.54' label='Managua' labelPos='top'  />
			<marker id='01' x='366.57' y='81.66' label='Puerto Cabezas' labelpos='left' />
			<marker id='02' x='114.87' y='116.13' label='Ocotal' labelPos='right' />
			<marker id='03' x='79.37' y='173.57' label='Guasaule' labelPos='left'  />
			<marker id='04' x='86.68' y='181.92' label='Somotillo' labelPos='right'  />
			<marker id='05' x='62.66' y='214.3' label='Corinto' labelPos='left'  />
			<marker id='06' x='85.63' y='213.25' label='Leon' labelPos='right'  />
			<marker id='07' x='146.21' y='247.72' label='Masaya' labelPos='right' />
			<marker id='08' x='158.74' y='253.98' label='Las Isletas' labelPos='left'  />
			<marker id='10' x='165' y='304.11' label='Rivas' labelPos='left'  />
			<marker id='11' x='259' y='329.18' label='San Carlos' labelPos='right' />
			<marker id='09' x='342.54' y='234.14' label='Bluefields' labelPos='left'  />
			<marker id='30' x='344.63' y='282.18' label='Monkey Point' labelPos='left'  />
			<marker id='29' x='345.68' y='351.11' label='San Juan del Norte'  />
			<marker id='32' x='161.87' y='189.23' label='Matalgalpa' labelPos='right'  />
			<marker id='33' x='181.71' y='219.52' label='Boaco' labelPos='right' />
			<marker id='36' x='203.64' y='257.12' label='Juigalpa' labelPos='right' />

		</definition>
		<application>
			<marker id='MN' shapeId='myCustomShape'  />
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
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='30' shapeId='newCustomShape'  />
			<marker id='29' shapeId='newCustomShape'  />
			<marker id='32' shapeId='newCustomShape'  />
			<marker id='33' shapeId='newCustomShape'  />
			<marker id='36' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
