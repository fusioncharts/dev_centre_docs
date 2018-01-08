---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: ElSalvador

#### JavaScript Alias: maps/elsalvador


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
                "id": "SS",
                "shapeid": "myCustomShape",
                "x": "147.19",
                "y": "106.87",
                "label": "San Salvador",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "232.74",
                "y": "89.25",
                "label": "Sensuntepeque",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "172.35",
                "y": "56.55",
                "label": "Chalatenango",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "101.9",
                "y": "57.8",
                "label": "Santa Ana",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "52.83",
                "y": "81.71",
                "label": "Ahuachapan",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "57.87",
                "y": "116.93",
                "label": "Sonsonate"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "52.83",
                "y": "138.32",
                "label": "Acajutla",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "130.83",
                "y": "152.16",
                "label": "La Libertad",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "119.51",
                "y": "111.9",
                "label": "Nueva San Salvador",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "218.9",
                "y": "135.8",
                "label": "San Vincente",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "246.58",
                "y": "186.13",
                "label": "Puerto El Triunfo",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "357.29",
                "y": "183.61",
                "label": "Puerto Cutuco",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "348.48",
                "y": "171.03",
                "label": "La Union",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "309.48",
                "y": "152.16",
                "label": "San Miguel",
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
                "id": "SS",
                "x": "147.19",
                "y": "106.87",
                "label": "San Salvador",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "232.74",
                "y": "89.25",
                "label": "Sensuntepeque",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "172.35",
                "y": "56.55",
                "label": "Chalatenango",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "101.9",
                "y": "57.8",
                "label": "Santa Ana",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "52.83",
                "y": "81.71",
                "label": "Ahuachapan",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "57.87",
                "y": "116.93",
                "label": "Sonsonate"
            },
            {
                "id": "06",
                "x": "52.83",
                "y": "138.32",
                "label": "Acajutla",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "130.83",
                "y": "152.16",
                "label": "La Libertad",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "119.51",
                "y": "111.9",
                "label": "Nueva San Salvador",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "x": "218.9",
                "y": "135.8",
                "label": "San Vincente",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "246.58",
                "y": "186.13",
                "label": "Puerto El Triunfo",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "357.29",
                "y": "183.61",
                "label": "Puerto Cutuco",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "348.48",
                "y": "171.03",
                "label": "La Union",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "309.48",
                "y": "152.16",
                "label": "San Miguel",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "SS",
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
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='SS' x='147.19' y='106.87' label='San Salvador' labelPos='right'  />
			<marker id='01' x='232.74' y='89.25' label='Sensuntepeque' labelPos='right'  />
			<marker id='02' x='172.35' y='56.55' label='Chalatenango' labelPos='right'  />
			<marker id='03' x='101.9' y='57.8' label='Santa Ana' labelPos='left' />
			<marker id='04' x='52.83' y='81.71' label='Ahuachapan' labelPos='right' />
			<marker id='05' x='57.87' y='116.93' label='Sonsonate'  />
			<marker id='06' x='52.83' y='138.32' label='Acajutla' labelPos='right'  />
			<marker id='07' x='130.83' y='152.16' label='La Libertad' labelPos='left'  />
			<marker id='08' x='119.51' y='111.9' label='Nueva San Salvador' labelPos='bottom'  />
			<marker id='09' x='218.9' y='135.8' label='San Vincente' labelPos='right'  />
			<marker id='10' x='246.58' y='186.13' label='Puerto El Triunfo' labelPos='left'  />
			<marker id='11' x='357.29' y='183.61' label='Puerto Cutuco' labelPos='left'  />
			<marker id='12' x='348.48' y='171.03' label='La Union' labelPos='left'  />
			<marker id='13' x='309.48' y='152.16' label='San Miguel' labelPos='right'  />
		</definition>
		<application>
			<marker id='SS' shapeId='myCustomShape'  />
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
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
