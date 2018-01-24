---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NorthCarolina

#### JavaScript Alias: maps/northcarolina


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
                "id": "RA",
                "shapeid": "myCustomShape",
                "x": "564.34",
                "y": "137.44",
                "label": "Raleigh",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "354.98",
                "y": "192.05",
                "label": "Charlotte",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "307.45",
                "y": "193.06",
                "label": "Gastonia"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "238.68",
                "y": "163.73",
                "label": "Asheville"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "281.15",
                "y": "134.41",
                "label": "Hickory",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "539.05",
                "y": "50.46",
                "label": "Henderson"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "804.03",
                "y": "63.61",
                "label": "Elizabeth City",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "712",
                "y": "89.91",
                "label": "Rocky Mount",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "638.17",
                "y": "136.43",
                "label": "Wilson"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "693.79",
                "y": "162.72",
                "label": "Greenville"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "627.04",
                "y": "188.01",
                "label": "Goldsboro"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "704.92",
                "y": "217.34",
                "label": "New Born",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "660.42",
                "y": "264.87",
                "label": "Jacksonville"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "626.03",
                "y": "312.41",
                "label": "Wilmington"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "585.57",
                "y": "224.42",
                "label": "Fayetteville"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "379.26",
                "y": "160.7",
                "label": "Kannapolis",
                "labelpos": "left"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "538.04",
                "y": "100.02",
                "label": "Durham"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "520.85",
                "y": "109.12",
                "label": "Chapel Hill",
                "labelpos": "right"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "455.11",
                "y": "96.98",
                "label": "Greensboro"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "416.68",
                "y": "92.94",
                "label": "Winston-Salem",
                "labelpos": "left"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "428.81",
                "y": "112.16",
                "label": "High Point",
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
                "id": "RA",
                "x": "564.34",
                "y": "137.44",
                "label": "Raleigh",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "354.98",
                "y": "192.05",
                "label": "Charlotte",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "307.45",
                "y": "193.06",
                "label": "Gastonia"
            },
            {
                "id": "03",
                "x": "238.68",
                "y": "163.73",
                "label": "Asheville"
            },
            {
                "id": "04",
                "x": "281.15",
                "y": "134.41",
                "label": "Hickory",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "539.05",
                "y": "50.46",
                "label": "Henderson"
            },
            {
                "id": "08",
                "x": "804.03",
                "y": "63.61",
                "label": "Elizabeth City",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "712",
                "y": "89.91",
                "label": "Rocky Mount",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "638.17",
                "y": "136.43",
                "label": "Wilson"
            },
            {
                "id": "11",
                "x": "693.79",
                "y": "162.72",
                "label": "Greenville"
            },
            {
                "id": "12",
                "x": "627.04",
                "y": "188.01",
                "label": "Goldsboro"
            },
            {
                "id": "14",
                "x": "704.92",
                "y": "217.34",
                "label": "New Born",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "660.42",
                "y": "264.87",
                "label": "Jacksonville"
            },
            {
                "id": "16",
                "x": "626.03",
                "y": "312.41",
                "label": "Wilmington"
            },
            {
                "id": "17",
                "x": "585.57",
                "y": "224.42",
                "label": "Fayetteville"
            },
            {
                "id": "05",
                "x": "379.26",
                "y": "160.7",
                "label": "Kannapolis",
                "labelpos": "left"
            },
            {
                "id": "19",
                "x": "538.04",
                "y": "100.02",
                "label": "Durham"
            },
            {
                "id": "18",
                "x": "520.85",
                "y": "109.12",
                "label": "Chapel Hill",
                "labelpos": "right"
            },
            {
                "id": "20",
                "x": "455.11",
                "y": "96.98",
                "label": "Greensboro"
            },
            {
                "id": "21",
                "x": "416.68",
                "y": "92.94",
                "label": "Winston-Salem",
                "labelpos": "left"
            },
            {
                "id": "22",
                "x": "428.81",
                "y": "112.16",
                "label": "High Point",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "RA",
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
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
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
			<marker id='RA' x='564.34' y='137.44' label='Raleigh' labelPos='left'  />
		    <marker id='01' x='354.98' y='192.05' label='Charlotte' labelPos='right'  />
			<marker id='02' x='307.45' y='193.06' label='Gastonia'  />
			<marker id='03' x='238.68' y='163.73' label='Asheville'  />
			<marker id='04' x='281.15' y='134.41' label='Hickory' labelPos='left'  />
			<marker id='07' x='539.05' y='50.46' label='Henderson'  />
			<marker id='08' x='804.03' y='63.61' label='Elizabeth City' labelPos='left' />
			<marker id='09' x='712' y='89.91' label='Rocky Mount' labelPos='left' />
			<marker id='10' x='638.17' y='136.43' label='Wilson'  />
			<marker id='11' x='693.79' y='162.72' label='Greenville'  />
			<marker id='12' x='627.04' y='188.01' label='Goldsboro'  />
			<marker id='14' x='704.92' y='217.34' label='New Born' labelPos='left'  />
			<marker id='15' x='660.42' y='264.87' label='Jacksonville'  />
			<marker id='16' x='626.03' y='312.41' label='Wilmington'  />
			<marker id='17' x='585.57' y='224.42' label='Fayetteville'  />
			<marker id='05' x='379.26' y='160.7' label='Kannapolis' labelPos='left'  />
			<marker id='19' x='538.04' y='100.02' label='Durham'  />
			<marker id='18' x='520.85' y='109.12' label='Chapel Hill' labelPos='right'  />
			<marker id='20' x='455.11' y='96.98' label='Greensboro'  />
			<marker id='21' x='416.68' y='92.94' label='Winston-Salem' labelPos='left'  />
			<marker id='22' x='428.81' y='112.16' label='High Point' labelPos='right'  />

		</definition>
		<application>
			<marker id='RA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='21' shapeId='newCustomShape'  />
			<marker id='22' shapeId='newCustomShape'  />


		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
