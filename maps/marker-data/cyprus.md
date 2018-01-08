---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Cyprus

#### JavaScript Alias: maps/cyprus


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
                "id": "NI",
                "shapeid": "myCustomShape",
                "x": "261.78",
                "y": "178.7",
                "label": "Nicosia"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "247.41",
                "y": "120.16",
                "label": "Kyrenia"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "183.73",
                "y": "173.56",
                "label": "Morphou"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "47.14",
                "y": "218.75",
                "label": "Polis"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "45.08",
                "y": "290.64",
                "label": "Paphos"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "170.38",
                "y": "328.64",
                "label": "Episkopi",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "203.24",
                "y": "324.54",
                "label": "Limassol",
                "labelpos": "top"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "436.38",
                "y": "192.05",
                "label": "Famagusta",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "334.7",
                "y": "279.35",
                "label": "Vasilikos"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "562.7",
                "y": "24.64",
                "label": "Rizokarpaso"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "355.24",
                "y": "254.7",
                "label": "Larnaca"
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
                "id": "NI",
                "x": "261.78",
                "y": "178.7",
                "label": "Nicosia"
            },
            {
                "id": "01",
                "x": "247.41",
                "y": "120.16",
                "label": "Kyrenia"
            },
            {
                "id": "02",
                "x": "183.73",
                "y": "173.56",
                "label": "Morphou"
            },
            {
                "id": "03",
                "x": "47.14",
                "y": "218.75",
                "label": "Polis"
            },
            {
                "id": "04",
                "x": "45.08",
                "y": "290.64",
                "label": "Paphos"
            },
            {
                "id": "05",
                "x": "170.38",
                "y": "328.64",
                "label": "Episkopi",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "203.24",
                "y": "324.54",
                "label": "Limassol",
                "labelpos": "top"
            },
            {
                "id": "06",
                "x": "436.38",
                "y": "192.05",
                "label": "Famagusta",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "334.7",
                "y": "279.35",
                "label": "Vasilikos"
            },
            {
                "id": "09",
                "x": "562.7",
                "y": "24.64",
                "label": "Rizokarpaso"
            },
            {
                "id": "10",
                "x": "355.24",
                "y": "254.7",
                "label": "Larnaca"
            }
        ],
        "application": [
            {
                "id": "NI",
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
                "id": "07",
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
                "id": "10",
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
			<marker id='NI' x='261.78' y='178.7' label='Nicosia'  />
			<marker id='01' x='247.41' y='120.16' label='Kyrenia'  />
			<marker id='02' x='183.73' y='173.56' label='Morphou'  />
			<marker id='03' x='47.14' y='218.75' label='Polis'  />
			<marker id='04' x='45.08' y='290.64' label='Paphos'  />
			<marker id='05' x='170.38' y='328.64' label='Episkopi' labelPos='left' />
			<marker id='07' x='203.24' y='324.54' label='Limassol' labelPos='top'  />
			<marker id='06' x='436.38' y='192.05' label='Famagusta' labelPos='left' />
			<marker id='08' x='334.7' y='279.35' label='Vasilikos'  />
			<marker id='09' x='562.7' y='24.64' label='Rizokarpaso'  />
			<marker id='10' x='355.24' y='254.7' label='Larnaca'  />


		</definition>
		<application>
			<marker id='NI' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
