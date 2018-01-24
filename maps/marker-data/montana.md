---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Montana

#### JavaScript Alias: maps/montana


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
                "id": "LC",
                "shapeid": "myCustomShape",
                "x": "256.68",
                "y": "228.9",
                "label": "Helena"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "158.03",
                "y": "188.64",
                "label": "Missoula",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "155.01",
                "y": "135.29",
                "label": "Polson",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "123.81",
                "y": "88.98",
                "label": "Kalispell"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "295.94",
                "y": "125.22",
                "label": "Choteau",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "290.91",
                "y": "36.64",
                "label": "Cut Bank",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "416.74",
                "y": "40.66",
                "label": "Havre"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "381.5",
                "y": "115.15",
                "label": "Fort Benton"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "333.19",
                "y": "156.42",
                "label": "Great Falls"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "211.39",
                "y": "249.03",
                "label": "Deer Lodge",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "194.27",
                "y": "264.13",
                "label": "Anaconda",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "222.46",
                "y": "283.26",
                "label": "Butte",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "317.08",
                "y": "304.4",
                "label": "Bozeman",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "260.71",
                "y": "348.69",
                "label": "Dillion",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "363.39",
                "y": "295.34",
                "label": "Livingston"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "403.65",
                "y": "343.66",
                "label": "Red Lodge"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "418.75",
                "y": "273.19",
                "label": "Billings",
                "labelpos": "right"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "626.11",
                "y": "225.88",
                "label": "Miles City"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "667.39",
                "y": "160.45",
                "label": "Glendive"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "735.84",
                "y": "103.07",
                "label": "Sidney",
                "labelpos": "left"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "693.56",
                "y": "78.91",
                "label": "Wolf Point"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "632.15",
                "y": "65.83",
                "label": "Glasgow"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape",
                "x": "437.88",
                "y": "187.63",
                "label": "Lewistown"
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
                "id": "LC",
                "x": "256.68",
                "y": "228.9",
                "label": "Helena"
            },
            {
                "id": "01",
                "x": "158.03",
                "y": "188.64",
                "label": "Missoula",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "155.01",
                "y": "135.29",
                "label": "Polson",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "123.81",
                "y": "88.98",
                "label": "Kalispell"
            },
            {
                "id": "04",
                "x": "295.94",
                "y": "125.22",
                "label": "Choteau",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "290.91",
                "y": "36.64",
                "label": "Cut Bank",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "416.74",
                "y": "40.66",
                "label": "Havre"
            },
            {
                "id": "07",
                "x": "381.5",
                "y": "115.15",
                "label": "Fort Benton"
            },
            {
                "id": "10",
                "x": "333.19",
                "y": "156.42",
                "label": "Great Falls"
            },
            {
                "id": "08",
                "x": "211.39",
                "y": "249.03",
                "label": "Deer Lodge",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "194.27",
                "y": "264.13",
                "label": "Anaconda",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "222.46",
                "y": "283.26",
                "label": "Butte",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "317.08",
                "y": "304.4",
                "label": "Bozeman",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "260.71",
                "y": "348.69",
                "label": "Dillion",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "363.39",
                "y": "295.34",
                "label": "Livingston"
            },
            {
                "id": "15",
                "x": "403.65",
                "y": "343.66",
                "label": "Red Lodge"
            },
            {
                "id": "19",
                "x": "418.75",
                "y": "273.19",
                "label": "Billings",
                "labelpos": "right"
            },
            {
                "id": "17",
                "x": "626.11",
                "y": "225.88",
                "label": "Miles City"
            },
            {
                "id": "18",
                "x": "667.39",
                "y": "160.45",
                "label": "Glendive"
            },
            {
                "id": "20",
                "x": "735.84",
                "y": "103.07",
                "label": "Sidney",
                "labelpos": "left"
            },
            {
                "id": "21",
                "x": "693.56",
                "y": "78.91",
                "label": "Wolf Point"
            },
            {
                "id": "22",
                "x": "632.15",
                "y": "65.83",
                "label": "Glasgow"
            },
            {
                "id": "24",
                "x": "437.88",
                "y": "187.63",
                "label": "Lewistown"
            }
        ],
        "application": [
            {
                "id": "LC",
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
                "id": "10",
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
                "id": "19",
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
                "id": "24",
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
			<marker id='LC' x='256.68' y='228.9' label='Helena'  />
			<marker id='01' x='158.03' y='188.64' label='Missoula' labelPos='left'  />
			<marker id='02' x='155.01' y='135.29' label='Polson' labelPos='left'  />
			<marker id='03' x='123.81' y='88.98' label='Kalispell'  />
			<marker id='04' x='295.94' y='125.22' label='Choteau' labelPos='left'  />
			<marker id='05' x='290.91' y='36.64' label='Cut Bank' labelPos='left'  />
			<marker id='06' x='416.74' y='40.66' label='Havre'  />
			<marker id='07' x='381.5' y='115.15' label='Fort Benton'  />
			<marker id='10' x='333.19' y='156.42' label='Great Falls'  />
			<marker id='08' x='211.39' y='249.03' label='Deer Lodge' labelPos='left'  />
			<marker id='09' x='194.27' y='264.13' label='Anaconda' labelPos='left'  />
			<marker id='11' x='222.46' y='283.26' label='Butte' labelPos='left'  />
			<marker id='12' x='317.08' y='304.4' label='Bozeman' labelPos='left'  />
			<marker id='13' x='260.71' y='348.69' label='Dillion' labelPos='left'  />
			<marker id='14' x='363.39' y='295.34' label='Livingston'  />
			<marker id='15' x='403.65' y='343.66' label='Red Lodge'  />
			<marker id='19' x='418.75' y='273.19' label='Billings' labelPos='right'  />
			<marker id='17' x='626.11' y='225.88' label='Miles City'  />
			<marker id='18' x='667.39' y='160.45' label='Glendive'  />
			<marker id='20' x='735.84' y='103.07' label='Sidney' labelPos='left'  />
			<marker id='21' x='693.56' y='78.91' label='Wolf Point'  />
			<marker id='22' x='632.15' y='65.83' label='Glasgow'  />
			<marker id='24' x='437.88' y='187.63' label='Lewistown'  />

		</definition>
		<application>
			<marker id='LC' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='21' shapeId='newCustomShape'  />
			<marker id='22' shapeId='newCustomShape'  />
			<marker id='24' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
