---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Cuba

#### JavaScript Alias: maps/cuba


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
                "id": "HA",
                "shapeid": "myCustomShape",
                "x": "147.61",
                "y": "23",
                "label": "Havana",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "128.8",
                "y": "27.18",
                "label": "Mariel",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "81.75",
                "y": "56.45",
                "label": "Pinar del Rio",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "208.25",
                "y": "28.22",
                "label": "Matanzas",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "252.16",
                "y": "74.22",
                "label": "Cienfuegos",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "277.25",
                "y": "65.86",
                "label": "Santa Clara",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "412.11",
                "y": "112.9",
                "label": "Nuevitas",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "427.79",
                "y": "166.22",
                "label": "Manzanillo",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "422.57",
                "y": "141.13",
                "label": "Las Tunas",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "462.29",
                "y": "140.09",
                "label": "Holguin",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "467.52",
                "y": "156.81",
                "label": "Bayamo",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "498.89",
                "y": "195.5",
                "label": "Santiago de Cuba",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "527.11",
                "y": "180.86",
                "label": "Guantanamo",
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
                "id": "HA",
                "x": "147.61",
                "y": "23",
                "label": "Havana",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "128.8",
                "y": "27.18",
                "label": "Mariel",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "81.75",
                "y": "56.45",
                "label": "Pinar del Rio",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "208.25",
                "y": "28.22",
                "label": "Matanzas",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "252.16",
                "y": "74.22",
                "label": "Cienfuegos",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "277.25",
                "y": "65.86",
                "label": "Santa Clara",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "412.11",
                "y": "112.9",
                "label": "Nuevitas",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "427.79",
                "y": "166.22",
                "label": "Manzanillo",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "422.57",
                "y": "141.13",
                "label": "Las Tunas",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "462.29",
                "y": "140.09",
                "label": "Holguin",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "467.52",
                "y": "156.81",
                "label": "Bayamo",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "498.89",
                "y": "195.5",
                "label": "Santiago de Cuba",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "527.11",
                "y": "180.86",
                "label": "Guantanamo",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "383.89",
                "y": "126.5",
                "label": "Camaguay",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "463.34",
                "y": "152.63",
                "label": "Holguin",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "HA",
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
                "id": "08",
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
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
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
			<marker id='HA' x='147.61' y='23' label='Havana' labelPos='right'  />
			<marker id='01' x='128.8' y='27.18' label='Mariel' labelPos='left' />
			<marker id='02' x='81.75' y='56.45' label='Pinar del Rio' labelPos='left' />
			<marker id='03' x='208.25' y='28.22' label='Matanzas' labelpos='right' />
			<marker id='04' x='252.16' y='74.22' label='Cienfuegos' labelPos='left'  />
			<marker id='05' x='277.25' y='65.86' label='Santa Clara' labelPos='right'  />
			<marker id='08' x='412.11' y='112.9' label='Nuevitas' labelPos='right' />
			<marker id='13' x='427.79' y='166.22' label='Manzanillo' labelPos='left'  />
			<marker id='06' x='422.57' y='141.13' label='Las Tunas' labelPos='left' />
			<marker id='07' x='462.29' y='140.09' label='Holguin' labelPos='right'  />
			<marker id='12' x='467.52' y='156.81' label='Bayamo' labelPos='right'  />
			<marker id='09' x='498.89' y='195.5' label='Santiago de Cuba' labelPos='left'  />
			<marker id='10' x='527.11' y='180.86' label='Guantanamo' labelPos='right'  />
	        <marker id='12' x='383.89' y='126.5' label='Camaguay' labelPos='left'  />
			<marker id='07' x='463.34' y='152.63' label='Holguin' labelPos='left'  />


		</definition>
		<application>
			<marker id='HA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
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
