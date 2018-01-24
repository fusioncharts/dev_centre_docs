---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Louisiana

#### JavaScript Alias: maps/louisiana


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
                "id": "BR",
                "shapeid": "myCustomShape",
                "x": "380.04",
                "y": "371.94",
                "label": "Baton Rouge",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "295.48",
                "y": "37.75",
                "label": "Bastrop"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "276.12",
                "y": "78.5",
                "label": "Monroe",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "226.19",
                "y": "63.22",
                "label": "Ruston"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "88.64",
                "y": "71.37",
                "label": "Shreveport"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "137.55",
                "y": "188.54",
                "label": "Natchitoches",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "219.06",
                "y": "263.94",
                "label": "Alexandria",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "234.34",
                "y": "249.68",
                "label": "Pineville",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "96.79",
                "y": "397.42",
                "label": "Sulphur",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "130.41",
                "y": "397.42",
                "label": "Lake Charles",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "230.27",
                "y": "398.44",
                "label": "Crowley",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "266.95",
                "y": "408.62",
                "label": "Lafayette",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "301.59",
                "y": "443.27",
                "label": "New Iberia",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "366.8",
                "y": "505.42",
                "label": "Morgan City",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "404.5",
                "y": "511.53",
                "label": "Houma",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "554.28",
                "y": "458.55",
                "label": "Chalmette",
                "labelpos": "right"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "519.63",
                "y": "457.53",
                "label": "Marrero",
                "labelpos": "left"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "520.65",
                "y": "432.06",
                "label": "New Orleans",
                "labelpos": "left"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "531.86",
                "y": "326.09",
                "label": "Bogalusa",
                "labelpos": "right"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "481.93",
                "y": "343.41",
                "label": "Hammond",
                "labelpos": "left"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "257.78",
                "y": "356.66",
                "label": "Opelousas"
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
                "id": "BR",
                "x": "380.04",
                "y": "371.94",
                "label": "Baton Rouge",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "295.48",
                "y": "37.75",
                "label": "Bastrop"
            },
            {
                "id": "02",
                "x": "276.12",
                "y": "78.5",
                "label": "Monroe",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "226.19",
                "y": "63.22",
                "label": "Ruston"
            },
            {
                "id": "04",
                "x": "88.64",
                "y": "71.37",
                "label": "Shreveport"
            },
            {
                "id": "05",
                "x": "137.55",
                "y": "188.54",
                "label": "Natchitoches",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "219.06",
                "y": "263.94",
                "label": "Alexandria",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "234.34",
                "y": "249.68",
                "label": "Pineville",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "96.79",
                "y": "397.42",
                "label": "Sulphur",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "130.41",
                "y": "397.42",
                "label": "Lake Charles",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "x": "230.27",
                "y": "398.44",
                "label": "Crowley",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "266.95",
                "y": "408.62",
                "label": "Lafayette",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "301.59",
                "y": "443.27",
                "label": "New Iberia",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "366.8",
                "y": "505.42",
                "label": "Morgan City",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "404.5",
                "y": "511.53",
                "label": "Houma",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "554.28",
                "y": "458.55",
                "label": "Chalmette",
                "labelpos": "right"
            },
            {
                "id": "16",
                "x": "519.63",
                "y": "457.53",
                "label": "Marrero",
                "labelpos": "left"
            },
            {
                "id": "18",
                "x": "520.65",
                "y": "432.06",
                "label": "New Orleans",
                "labelpos": "left"
            },
            {
                "id": "19",
                "x": "531.86",
                "y": "326.09",
                "label": "Bogalusa",
                "labelpos": "right"
            },
            {
                "id": "20",
                "x": "481.93",
                "y": "343.41",
                "label": "Hammond",
                "labelpos": "left"
            },
            {
                "id": "21",
                "x": "257.78",
                "y": "356.66",
                "label": "Opelousas"
            }
        ],
        "application": [
            {
                "id": "BR",
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
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
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
			<marker id='BR' x='380.04' y='371.94' label='Baton Rouge' labelPos='bottom'  />
			<marker id='01' x='295.48' y='37.75' label='Bastrop'  />
			<marker id='02' x='276.12' y='78.5' label='Monroe' labelPos='right'  />
			<marker id='03' x='226.19' y='63.22' label='Ruston'  />
			<marker id='04' x='88.64' y='71.37' label='Shreveport'  />
			<marker id='05' x='137.55' y='188.54' label='Natchitoches' labelPos='left'  />
			<marker id='06' x='219.06' y='263.94' label='Alexandria' labelPos='left'  />
			<marker id='07' x='234.34' y='249.68' label='Pineville' labelPos='right'  />
			<marker id='08' x='96.79' y='397.42' label='Sulphur' labelPos='left'  />
			<marker id='09' x='130.41' y='397.42' label='Lake Charles' labelPos='bottom'  />
			<marker id='10' x='230.27' y='398.44' label='Crowley' labelPos='left'  />
			<marker id='11' x='266.95' y='408.62' label='Lafayette' labelPos='right'  />
			<marker id='12' x='301.59' y='443.27' label='New Iberia' labelPos='left'  />
			<marker id='13' x='366.8' y='505.42' label='Morgan City' labelPos='left'  />
			<marker id='15' x='404.5' y='511.53' label='Houma' labelPos='right'  />
			<marker id='14' x='554.28' y='458.55' label='Chalmette' labelPos='right'  />
			<marker id='16' x='519.63' y='457.53' label='Marrero' labelPos='left'  />
			<marker id='18' x='520.65' y='432.06' label='New Orleans' labelPos='left'  />
			<marker id='19' x='531.86' y='326.09' label='Bogalusa' labelPos='right'  />
			<marker id='20' x='481.93' y='343.41' label='Hammond' labelPos='left'  />
			<marker id='21' x='257.78' y='356.66' label='Opelousas'  />

		</definition>
		<application>
			<marker id='BR' shapeId='myCustomShape'  />
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
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='21' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
