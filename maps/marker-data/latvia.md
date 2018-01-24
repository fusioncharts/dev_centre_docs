---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Latvia

#### JavaScript Alias: maps/latvia


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
                "id": "Ri",
                "shapeid": "myCustomShape",
                "x": "225.93",
                "y": "145.69",
                "label": "RigaCity",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "61.63",
                "y": "87.83",
                "label": "Ventspils"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "25.47",
                "y": "189.09",
                "label": "Liepaja",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "200.1",
                "y": "145.69",
                "label": "Jurmala",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "199.07",
                "y": "178.76",
                "label": "Jelgava"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "109.17",
                "y": "161.19",
                "label": "Skrunda"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "305.5",
                "y": "61.99",
                "label": "Valmiera",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "407.8",
                "y": "77.49",
                "label": "Aluksne",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "439.83",
                "y": "197.36",
                "label": "Rezekne"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "391.27",
                "y": "272.79",
                "label": "Daugavpils"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "338.57",
                "y": "191.16",
                "label": "Jekabpils"
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
                "id": "Ri",
                "x": "225.93",
                "y": "145.69",
                "label": "RigaCity",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "61.63",
                "y": "87.83",
                "label": "Ventspils"
            },
            {
                "id": "02",
                "x": "25.47",
                "y": "189.09",
                "label": "Liepaja",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "200.1",
                "y": "145.69",
                "label": "Jurmala",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "199.07",
                "y": "178.76",
                "label": "Jelgava"
            },
            {
                "id": "05",
                "x": "109.17",
                "y": "161.19",
                "label": "Skrunda"
            },
            {
                "id": "06",
                "x": "305.5",
                "y": "61.99",
                "label": "Valmiera",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "407.8",
                "y": "77.49",
                "label": "Aluksne",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "439.83",
                "y": "197.36",
                "label": "Rezekne"
            },
            {
                "id": "09",
                "x": "391.27",
                "y": "272.79",
                "label": "Daugavpils"
            },
            {
                "id": "10",
                "x": "338.57",
                "y": "191.16",
                "label": "Jekabpils"
            }
        ],
        "application": [
            {
                "id": "Ri",
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
			<marker id='Ri' x='225.93' y='145.69' label='RigaCity' labelPos='right'  />
			<marker id='01' x='61.63' y='87.83' label='Ventspils'  />
			<marker id='02' x='25.47' y='189.09' label='Liepaja' labelpos='right' />
			<marker id='03' x='200.1' y='145.69' label='Jurmala' labelpos='left' />
			<marker id='04' x='199.07' y='178.76' label='Jelgava'  />
			<marker id='05' x='109.17' y='161.19' label='Skrunda'  />
			<marker id='06' x='305.5' y='61.99' label='Valmiera' labelPos='right' />
			<marker id='07' x='407.8' y='77.49' label='Aluksne' labelPos='bottom' />
			<marker id='08' x='439.83' y='197.36' label='Rezekne'  />
			<marker id='09' x='391.27' y='272.79' label='Daugavpils'  />
			<marker id='10' x='338.57' y='191.16' label='Jekabpils'  />

		</definition>
		<application>
			<marker id='Ri' shapeId='myCustomShape'  />
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

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
