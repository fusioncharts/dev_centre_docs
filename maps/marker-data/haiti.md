---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Haiti

#### JavaScript Alias: maps/haiti


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
                "id": "PP",
                "shapeid": "myCustomShape",
                "x": "262.11",
                "y": "208.44",
                "label": "Port-Au-Prince"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "200.92",
                "y": "33.18",
                "label": "Port-de-Paix",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "274.55",
                "y": "53.92",
                "label": "Cap-Haitien"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "220.62",
                "y": "94.37",
                "label": "Gonaives"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "219.59",
                "y": "135.85",
                "label": "Saint-Marc"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "300.48",
                "y": "135.85",
                "label": "Hinche"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "43.29",
                "y": "197.03",
                "label": "Jeremie"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "194.7",
                "y": "225.03",
                "label": "Miragoane"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "237.22",
                "y": "245.77",
                "label": "Jacmel"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "95.14",
                "y": "246.81",
                "label": "Les Cayes"
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
                "id": "PP",
                "x": "262.11",
                "y": "208.44",
                "label": "Port-Au-Prince"
            },
            {
                "id": "01",
                "x": "200.92",
                "y": "33.18",
                "label": "Port-de-Paix",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "274.55",
                "y": "53.92",
                "label": "Cap-Haitien"
            },
            {
                "id": "03",
                "x": "220.62",
                "y": "94.37",
                "label": "Gonaives"
            },
            {
                "id": "04",
                "x": "219.59",
                "y": "135.85",
                "label": "Saint-Marc"
            },
            {
                "id": "05",
                "x": "300.48",
                "y": "135.85",
                "label": "Hinche"
            },
            {
                "id": "06",
                "x": "43.29",
                "y": "197.03",
                "label": "Jeremie"
            },
            {
                "id": "08",
                "x": "194.7",
                "y": "225.03",
                "label": "Miragoane"
            },
            {
                "id": "10",
                "x": "237.22",
                "y": "245.77",
                "label": "Jacmel"
            },
            {
                "id": "11",
                "x": "95.14",
                "y": "246.81",
                "label": "Les Cayes"
            }
        ],
        "application": [
            {
                "id": "PP",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
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
			<marker id='PP' x='262.11' y='208.44' label='Port-Au-Prince'  />
			<marker id='01' x='200.92' y='33.18' label='Port-de-Paix' labelPos='left'  />
			<marker id='02' x='274.55' y='53.92' label='Cap-Haitien'  />
			<marker id='03' x='220.62' y='94.37' label='Gonaives'  />
			<marker id='04' x='219.59' y='135.85' label='Saint-Marc'  />
			<marker id='05' x='300.48' y='135.85' label='Hinche'  />
			<marker id='06' x='43.29' y='197.03' label='Jeremie'  />
			<marker id='08' x='194.7' y='225.03' label='Miragoane'  />
			<marker id='10' x='237.22' y='245.77' label='Jacmel'  />
			<marker id='11' x='95.14' y='246.81' label='Les Cayes'  />

		</definition>
		<application>
			<marker id='PP' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
