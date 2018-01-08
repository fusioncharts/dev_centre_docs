---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Suriname

#### JavaScript Alias: maps/suriname


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
                "showorder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showorder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "PM",
                "shapeid": "myCustomShape",
                "x": "280",
                "y": "32.56",
                "label": "Paramaribo",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "91.28",
                "y": "100.25",
                "label": "Apoera",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "103.58",
                "y": "25.38",
                "label": "Nieuw Nickerie",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "136.41",
                "y": "44.87",
                "label": "Wageningen",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "297.43",
                "y": "27.43",
                "label": "Nieuw Amsterdam",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "358.97",
                "y": "52.05",
                "label": "Moenga"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "384.61",
                "y": "61.28",
                "label": "Albina"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "289.23",
                "y": "60.25",
                "label": "Paranam",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "291.28",
                "y": "131.02",
                "label": "Brokopondo"
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
                "showorder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showorder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "PM",
                "x": "280",
                "y": "32.56",
                "label": "Paramaribo",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "91.28",
                "y": "100.25",
                "label": "Apoera",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "103.58",
                "y": "25.38",
                "label": "Nieuw Nickerie",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "136.41",
                "y": "44.87",
                "label": "Wageningen",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "297.43",
                "y": "27.43",
                "label": "Nieuw Amsterdam",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "358.97",
                "y": "52.05",
                "label": "Moenga"
            },
            {
                "id": "06",
                "x": "384.61",
                "y": "61.28",
                "label": "Albina"
            },
            {
                "id": "07",
                "x": "289.23",
                "y": "60.25",
                "label": "Paranam",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "291.28",
                "y": "131.02",
                "label": "Brokopondo"
            }
        ],
        "application": [
            {
                "id": "PM",
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
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showorder='0' radius='4'/>
		    <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='PM' x='280' y='32.56' label='Paramaribo' labelPos='bottom'  />
			<marker id='01' x='91.28' y='100.25' label='Apoera' labelPos='left'  />
			<marker id='02' x='103.58' y='25.38' label='Nieuw Nickerie' labelPos='left'  />
			<marker id='03' x='136.41' y='44.87' label='Wageningen' labelPos='right'  />
			<marker id='04' x='297.43' y='27.43' label='Nieuw Amsterdam' labelPos='right'  />
			<marker id='05' x='358.97' y='52.05' label='Moenga'  />
			<marker id='06' x='384.61' y='61.28' label='Albina'  />
			<marker id='07' x='289.23' y='60.25' label='Paranam' labelPos='left'  />
			<marker id='08' x='291.28' y='131.02' label='Brokopondo'  />

		</definition>
		<application>
			<marker id='PM' shapeId='myCustomShape'  />
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
