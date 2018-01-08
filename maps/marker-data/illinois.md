---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Illinois

#### JavaScript Alias: maps/illinois


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
                "shopborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "shopborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "SN",
                "shapeid": "myCustomShape",
                "x": "240.9",
                "y": "449.71",
                "label": "Springfield"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "148.34",
                "y": "43.26",
                "label": "Galena",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "311.32",
                "y": "74.44",
                "label": "Rockford",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "334.46",
                "y": "96.58",
                "label": "De Kalb",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "479.34",
                "y": "129.78",
                "label": "Chicago",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "152.36",
                "y": "163.98",
                "label": "Moline",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "137.27",
                "y": "175.05",
                "label": "Rock Island",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "213.73",
                "y": "287.73",
                "label": "Peoria",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "162.42",
                "y": "259.56",
                "label": "Galesburg",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "450.16",
                "y": "228.37",
                "label": "Kankakee",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "330.44",
                "y": "201.21",
                "label": "La Salle"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "314.34",
                "y": "325.96",
                "label": "Normal",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "301.26",
                "y": "346.08",
                "label": "Bloomington",
                "labelpos": "right"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "394.83",
                "y": "378.28",
                "label": "Champaign",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "409.92",
                "y": "380.29",
                "label": "Urbana",
                "labelpos": "bottom"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "469.28",
                "y": "375.26",
                "label": "Danville"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "325.41",
                "y": "420.53",
                "label": "Decatur",
                "labelpos": "right"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "28.62",
                "y": "423.55",
                "label": "Quincy",
                "labelpos": "right"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "162.42",
                "y": "658.97",
                "label": "East St. Louis",
                "labelpos": "left"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "283.15",
                "y": "746.5",
                "label": "Carbondale",
                "labelpos": "right"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape",
                "x": "291.2",
                "y": "867.23",
                "label": "Cairo",
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
                "shopborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "shopborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "SN",
                "x": "240.9",
                "y": "449.71",
                "label": "Springfield"
            },
            {
                "id": "01",
                "x": "148.34",
                "y": "43.26",
                "label": "Galena",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "311.32",
                "y": "74.44",
                "label": "Rockford",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "334.46",
                "y": "96.58",
                "label": "De Kalb",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "479.34",
                "y": "129.78",
                "label": "Chicago",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "152.36",
                "y": "163.98",
                "label": "Moline",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "137.27",
                "y": "175.05",
                "label": "Rock Island",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "213.73",
                "y": "287.73",
                "label": "Peoria",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "162.42",
                "y": "259.56",
                "label": "Galesburg",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "450.16",
                "y": "228.37",
                "label": "Kankakee",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "330.44",
                "y": "201.21",
                "label": "La Salle"
            },
            {
                "id": "15",
                "x": "314.34",
                "y": "325.96",
                "label": "Normal",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "301.26",
                "y": "346.08",
                "label": "Bloomington",
                "labelpos": "right"
            },
            {
                "id": "16",
                "x": "394.83",
                "y": "378.28",
                "label": "Champaign",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "409.92",
                "y": "380.29",
                "label": "Urbana",
                "labelpos": "bottom"
            },
            {
                "id": "18",
                "x": "469.28",
                "y": "375.26",
                "label": "Danville"
            },
            {
                "id": "19",
                "x": "325.41",
                "y": "420.53",
                "label": "Decatur",
                "labelpos": "right"
            },
            {
                "id": "20",
                "x": "28.62",
                "y": "423.55",
                "label": "Quincy",
                "labelpos": "right"
            },
            {
                "id": "21",
                "x": "162.42",
                "y": "658.97",
                "label": "East St. Louis",
                "labelpos": "left"
            },
            {
                "id": "22",
                "x": "283.15",
                "y": "746.5",
                "label": "Carbondale",
                "labelpos": "right"
            },
            {
                "id": "23",
                "x": "291.2",
                "y": "867.23",
                "label": "Cairo",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "SN",
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
                "id": "09",
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
            },
            {
                "id": "22",
                "shapeid": "newCustomShape"
            },
            {
                "id": "23",
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
		    <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' shopBorder='0' radius='4'/>
			  <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' shopBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='SN' x='240.9' y='449.71' label='Springfield'  />
			<marker id='01' x='148.34' y='43.26' label='Galena' labelPos='left'  />
			<marker id='02' x='311.32' y='74.44' label='Rockford' labelPos='left'  />
			<marker id='03' x='334.46' y='96.58' label='De Kalb' labelPos='right'  />
			<marker id='04' x='479.34' y='129.78' label='Chicago' labelPos='right'  />
			<marker id='05' x='152.36' y='163.98' label='Moline' labelPos='right'  />
			<marker id='06' x='137.27' y='175.05' label='Rock Island' labelPos='left'  />
			<marker id='08' x='213.73' y='287.73' label='Peoria' labelPos='right'  />
			<marker id='09' x='162.42' y='259.56' label='Galesburg' labelPos='right'  />
			<marker id='11' x='450.16' y='228.37' label='Kankakee' labelPos='left'  />
			<marker id='12' x='330.44' y='201.21' label='La Salle'  />
			<marker id='15' x='314.34' y='325.96' label='Normal' labelPos='left'  />
			<marker id='14' x='301.26' y='346.08' label='Bloomington' labelPos='right'  />
			<marker id='16' x='394.83' y='378.28' label='Champaign' labelPos='left'  />
			<marker id='17' x='409.92' y='380.29' label='Urbana' labelPos='bottom'  />
			<marker id='18' x='469.28' y='375.26' label='Danville'  />
			<marker id='19' x='325.41' y='420.53' label='Decatur' labelPos='right'  />
			<marker id='20' x='28.62' y='423.55' label='Quincy' labelPos='right'  />
			<marker id='21' x='162.42' y='658.97' label='East St. Louis' labelPos='left'  />
			<marker id='22' x='283.15' y='746.5' label='Carbondale' labelPos='right'  />
			<marker id='23' x='291.2' y='867.23' label='Cairo' labelPos='right'  />
		</definition>
		<application>
			<marker id='SN' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='21' shapeId='newCustomShape'  />
			<marker id='22' shapeId='newCustomShape'  />
			<marker id='23' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
