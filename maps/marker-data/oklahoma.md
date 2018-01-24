---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Oklahoma

#### JavaScript Alias: maps/oklahoma


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
                "id": "OK",
                "shapeid": "myCustomShape",
                "x": "477.57",
                "y": "179.63",
                "label": "Oklahoma City",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "327.87",
                "y": "74.33",
                "label": "Woodward",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "351.62",
                "y": "41.29",
                "label": "Alva",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "447.63",
                "y": "47.48",
                "label": "Ponca City",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "532.28",
                "y": "28.9",
                "label": "Bartiesville",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "580.8",
                "y": "345.84",
                "label": "Durant",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "504.41",
                "y": "317.96",
                "label": "Ardmore",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "337.16",
                "y": "271.51",
                "label": "Altus",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "410.46",
                "y": "81.55",
                "label": "Enid",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "455.89",
                "y": "101.17",
                "label": "Stillwater",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "489.95",
                "y": "175.5",
                "label": "Shawnee",
                "labelpos": "top"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "449.69",
                "y": "290.09",
                "label": "Duncan",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "406.33",
                "y": "267.38",
                "label": "Lawton",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "455.89",
                "y": "205.43",
                "label": "Norman",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "417.69",
                "y": "224.02",
                "label": "Chickasha",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "318.58",
                "y": "185.82",
                "label": "Elk City",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "667.52",
                "y": "153.82",
                "label": "Muskogee",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "621.06",
                "y": "119.75",
                "label": "Tulsa"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "604.55",
                "y": "132.14",
                "label": "Sapulpa",
                "labelpos": "left"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "621.06",
                "y": "119.75",
                "label": "Tulsa"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "712.94",
                "y": "20.64",
                "label": "Miami",
                "labelpos": "bottom"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "530.22",
                "y": "252.92",
                "label": "Ada"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "617.97",
                "y": "217.82",
                "label": "McAlester"
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
                "id": "OK",
                "x": "477.57",
                "y": "179.63",
                "label": "Oklahoma City",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "327.87",
                "y": "74.33",
                "label": "Woodward",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "351.62",
                "y": "41.29",
                "label": "Alva",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "447.63",
                "y": "47.48",
                "label": "Ponca City",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "532.28",
                "y": "28.9",
                "label": "Bartiesville",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "580.8",
                "y": "345.84",
                "label": "Durant",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "504.41",
                "y": "317.96",
                "label": "Ardmore",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "337.16",
                "y": "271.51",
                "label": "Altus",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "410.46",
                "y": "81.55",
                "label": "Enid",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "455.89",
                "y": "101.17",
                "label": "Stillwater",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "489.95",
                "y": "175.5",
                "label": "Shawnee",
                "labelpos": "top"
            },
            {
                "id": "11",
                "x": "449.69",
                "y": "290.09",
                "label": "Duncan",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "406.33",
                "y": "267.38",
                "label": "Lawton",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "455.89",
                "y": "205.43",
                "label": "Norman",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "417.69",
                "y": "224.02",
                "label": "Chickasha",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "318.58",
                "y": "185.82",
                "label": "Elk City",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "667.52",
                "y": "153.82",
                "label": "Muskogee",
                "labelpos": "right"
            },
            {
                "id": "17",
                "x": "604.55",
                "y": "132.14",
                "label": "Sapulpa",
                "labelpos": "left"
            },
            {
                "id": "18",
                "x": "621.06",
                "y": "119.75",
                "label": "Tulsa"
            },
            {
                "id": "19",
                "x": "712.94",
                "y": "20.64",
                "label": "Miami",
                "labelpos": "bottom"
            },
            {
                "id": "20",
                "x": "530.22",
                "y": "252.92",
                "label": "Ada"
            },
            {
                "id": "21",
                "x": "617.97",
                "y": "217.82",
                "label": "McAlester"
            }
        ],
        "application": [
            {
                "id": "OK",
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
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
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
			<marker id='OK' x='477.57' y='179.63' label='Oklahoma City' labelPos='left'  />
			<marker id='01' x='327.87' y='74.33' label='Woodward' labelPos='left'  />
			<marker id='02' x='351.62' y='41.29' label='Alva' labelPos='left'  />
			<marker id='03' x='447.63' y='47.48' label='Ponca City' labelPos='left'  />
			<marker id='04' x='532.28' y='28.9' label='Bartiesville' labelPos='left'  />
			<marker id='05' x='580.8' y='345.84' label='Durant' labelPos='left'  />
			<marker id='06' x='504.41' y='317.96' label='Ardmore' labelPos='left'  />
			<marker id='07' x='337.16' y='271.51' label='Altus' labelPos='left'  />
			<marker id='08' x='410.46' y='81.55' label='Enid' labelPos='right'  />
			<marker id='09' x='455.89' y='101.17' label='Stillwater' labelPos='left'  />
			<marker id='10' x='489.95' y='175.5' label='Shawnee' labelPos='top'  />
			<marker id='11' x='449.69' y='290.09' label='Duncan' labelPos='right'  />
			<marker id='12' x='406.33' y='267.38' label='Lawton' labelPos='left'  />
			<marker id='13' x='455.89' y='205.43' label='Norman' labelPos='right' />
			<marker id='14' x='417.69' y='224.02' label='Chickasha' labelPos='left'  />
			<marker id='15' x='318.58' y='185.82' label='Elk City' labelPos='left'  />
			<marker id='16' x='667.52' y='153.82' label='Muskogee' labelPos='right'  />
			<marker id='17' x='604.55' y='132.14' label='Sapulpa' labelPos='left'  />
			<marker id='18' x='621.06' y='119.75' label='Tulsa'  />
			<marker id='19' x='712.94' y='20.64' label='Miami' labelPos='bottom' />
			<marker id='20' x='530.22' y='252.92' label='Ada'  />
			<marker id='21' x='617.97' y='217.82' label='McAlester'  />

		</definition>
		<application>
			<marker id='OK' shapeId='myCustomShape'  />
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
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
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
