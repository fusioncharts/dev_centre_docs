---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Slovenia

#### JavaScript Alias: maps/slovenia


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
                "id": "LJ",
                "shapeid": "myCustomShape",
                "x": "201.96",
                "y": "214.64",
                "label": "Ljubljana"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "58.18",
                "y": "257.78",
                "label": "Nova Gorica",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "72.55",
                "y": "355.35",
                "label": "Izola",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "59.2",
                "y": "366.64",
                "label": "Piran",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "306.72",
                "y": "257.78",
                "label": "Novo Mesto",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "176.28",
                "y": "161.24",
                "label": "Kranj",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "339.58",
                "y": "121.18",
                "label": "Velenje",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "365.26",
                "y": "153.02",
                "label": "Celje",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "410.45",
                "y": "70.86",
                "label": "Maribor",
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
                "id": "LJ",
                "x": "201.96",
                "y": "214.64",
                "label": "Ljubljana"
            },
            {
                "id": "01",
                "x": "58.18",
                "y": "257.78",
                "label": "Nova Gorica",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "72.55",
                "y": "355.35",
                "label": "Izola",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "59.2",
                "y": "366.64",
                "label": "Piran",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "306.72",
                "y": "257.78",
                "label": "Novo Mesto",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "176.28",
                "y": "161.24",
                "label": "Kranj",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "339.58",
                "y": "121.18",
                "label": "Velenje",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "365.26",
                "y": "153.02",
                "label": "Celje",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "410.45",
                "y": "70.86",
                "label": "Maribor",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "LJ",
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
			<marker id='LJ' x='201.96' y='214.64' label='Ljubljana'  />
			<marker id='01' x='58.18' y='257.78' label='Nova Gorica' labelPos='right'  />
			<marker id='02' x='72.55' y='355.35' label='Izola' labelPos='left'  />
			<marker id='03' x='59.2' y='366.64' label='Piran' labelPos='left'  />
			<marker id='04' x='306.72' y='257.78' label='Novo Mesto' labelPos='left'  />
			<marker id='05' x='176.28' y='161.24' label='Kranj' labelPos='left'  />
			<marker id='06' x='339.58' y='121.18' label='Velenje' labelPos='right'  />
			<marker id='07' x='365.26' y='153.02' label='Celje' labelPos='left'  />
			<marker id='08' x='410.45' y='70.86' label='Maribor' labelPos='right'  />

		</definition>
		<application>
			<marker id='LJ' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
