---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Bahamas

#### JavaScript Alias: maps/bahamas


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
                "id": "NA",
                "shapeid": "myCustomShape",
                "x": "151.19",
                "y": "196.29",
                "label": "Nassau",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "146.08",
                "y": "41.01",
                "label": "Cornishtown",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "186.94",
                "y": "69.61",
                "label": "Hope Town"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "54.14",
                "y": "68.59",
                "label": "Freeport"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "209.42",
                "y": "154.41",
                "label": "Dunmore Town"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "250.28",
                "y": "188.12",
                "label": "Governors Harbour"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "291.14",
                "y": "233.07",
                "label": "Arthur's Town"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "306.47",
                "y": "259.63",
                "label": "New Bight"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "103.17",
                "y": "192.2",
                "label": "Nicholls Town"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "122.58",
                "y": "231.02",
                "label": "Andros Town"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "139.95",
                "y": "275.97",
                "label": "Congo Town"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "279.9",
                "y": "328.07",
                "label": "Georgetown"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "344.26",
                "y": "365.87",
                "label": "Clarence Town"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "401.47",
                "y": "393.45",
                "label": "Colonel Hill"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "446.42",
                "y": "546.69",
                "label": "Matthew Town"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "490.35",
                "y": "424.01",
                "label": "Abhraham's Bay",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "380.02",
                "y": "284.14",
                "label": "Cockburn Town"
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
                "id": "NA",
                "x": "151.19",
                "y": "196.29",
                "label": "Nassau",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "146.08",
                "y": "41.01",
                "label": "Cornishtown",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "186.94",
                "y": "69.61",
                "label": "Hope Town"
            },
            {
                "id": "03",
                "x": "54.14",
                "y": "68.59",
                "label": "Freeport"
            },
            {
                "id": "04",
                "x": "209.42",
                "y": "154.41",
                "label": "Dunmore Town"
            },
            {
                "id": "05",
                "x": "250.28",
                "y": "188.12",
                "label": "Governors Harbour"
            },
            {
                "id": "06",
                "x": "291.14",
                "y": "233.07",
                "label": "Arthur's Town"
            },
            {
                "id": "07",
                "x": "306.47",
                "y": "259.63",
                "label": "New Bight"
            },
            {
                "id": "08",
                "x": "103.17",
                "y": "192.2",
                "label": "Nicholls Town"
            },
            {
                "id": "09",
                "x": "122.58",
                "y": "231.02",
                "label": "Andros Town"
            },
            {
                "id": "10",
                "x": "139.95",
                "y": "275.97",
                "label": "Congo Town"
            },
            {
                "id": "11",
                "x": "279.9",
                "y": "328.07",
                "label": "Georgetown"
            },
            {
                "id": "12",
                "x": "344.26",
                "y": "365.87",
                "label": "Clarence Town"
            },
            {
                "id": "13",
                "x": "401.47",
                "y": "393.45",
                "label": "Colonel Hill"
            },
            {
                "id": "14",
                "x": "446.42",
                "y": "546.69",
                "label": "Matthew Town"
            },
            {
                "id": "15",
                "x": "490.35",
                "y": "424.01",
                "label": "Abhraham's Bay",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "380.02",
                "y": "284.14",
                "label": "Cockburn Town"
            }
        ],
        "application": [
            {
                "id": "NA",
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
			<marker id='NA' x='151.19' y='196.29' label='Nassau' labelPos='right' />
			<marker id='01' x='146.08' y='41.01' label='Cornishtown' labelPos='left' />
			<marker id='02' x='186.94' y='69.61' label='Hope Town'  />
			<marker id='03' x='54.14' y='68.59' label='Freeport'  />
			<marker id='04' x='209.42' y='154.41' label='Dunmore Town'  />
			<marker id='05' x='250.28' y='188.12' label='Governors Harbour'  />
			<marker id='06' x='291.14' y='233.07' label="Arthur's Town"  />
			<marker id='07' x='306.47' y='259.63' label='New Bight'  />
			<marker id='08' x='103.17' y='192.2' label='Nicholls Town'  />
			<marker id='09' x='122.58' y='231.02' label='Andros Town'  />
			<marker id='10' x='139.95' y='275.97' label='Congo Town'  />
			<marker id='11' x='279.9' y='328.07' label='Georgetown'  />
			<marker id='12' x='344.26' y='365.87' label='Clarence Town'  />
			<marker id='13' x='401.47' y='393.45' label='Colonel Hill'  />
			<marker id='14' x='446.42' y='546.69' label='Matthew Town'  />
			<marker id='15' x='490.35' y='424.01' label="Abhraham's Bay" labelPos='left' />
			<marker id='16' x='380.02' y='284.14' label='Cockburn Town'  />
        </definition>
		<application>
			<marker id='NA' shapeId='myCustomShape'  />
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
	   </application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
