---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: DominicanRepublic

#### JavaScript Alias: maps/dominicanrepublic


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
                "id": "SD",
                "shapeid": "myCustomShape",
                "x": "233.87",
                "y": "166.68",
                "label": "Santo Domingo",
                "labelpos": "top"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "40",
                "y": "11.79",
                "label": "Monte Cristi",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "150.78",
                "y": "25.13",
                "label": "Puerto Plata",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "177.45",
                "y": "75.39",
                "label": "San Francisco de Macoris",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "139.5",
                "y": "100.01",
                "label": "La Vega"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "106.68",
                "y": "69.23",
                "label": "Santiago"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "38.97",
                "y": "117.45",
                "label": "Ellas Pina"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "102.57",
                "y": "205.66",
                "label": "Barahona"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "31.79",
                "y": "216.95",
                "label": "Pedernales"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "224.64",
                "y": "168.73",
                "label": "Haina",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "298.49",
                "y": "167.71",
                "label": "San Pedro de Macoris",
                "labelpos": "bottom"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "326.19",
                "y": "171.81",
                "label": "La Romana",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "346.71",
                "y": "141.04",
                "label": "Higuey"
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
                "id": "SD",
                "x": "233.87",
                "y": "166.68",
                "label": "Santo Domingo",
                "labelpos": "top"
            },
            {
                "id": "01",
                "x": "40",
                "y": "11.79",
                "label": "Monte Cristi",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "150.78",
                "y": "25.13",
                "label": "Puerto Plata",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "177.45",
                "y": "75.39",
                "label": "San Francisco de Macoris",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "139.5",
                "y": "100.01",
                "label": "La Vega"
            },
            {
                "id": "06",
                "x": "106.68",
                "y": "69.23",
                "label": "Santiago"
            },
            {
                "id": "07",
                "x": "38.97",
                "y": "117.45",
                "label": "Ellas Pina"
            },
            {
                "id": "08",
                "x": "102.57",
                "y": "205.66",
                "label": "Barahona"
            },
            {
                "id": "09",
                "x": "31.79",
                "y": "216.95",
                "label": "Pedernales"
            },
            {
                "id": "10",
                "x": "224.64",
                "y": "168.73",
                "label": "Haina",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "298.49",
                "y": "167.71",
                "label": "San Pedro de Macoris",
                "labelpos": "bottom"
            },
            {
                "id": "12",
                "x": "326.19",
                "y": "171.81",
                "label": "La Romana",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "346.71",
                "y": "141.04",
                "label": "Higuey"
            }
        ],
        "application": [
            {
                "id": "SD",
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
			<marker id='SD' x='233.87' y='166.68' label='Santo Domingo' labelPos='top'  />
			<marker id='01' x='40' y='11.79' label='Monte Cristi' labelPos='right'  />
			<marker id='02' x='150.78' y='25.13' label='Puerto Plata' labelPos='right'  />
			<marker id='03' x='177.45' y='75.39' label='San Francisco de Macoris' labelPos='right'/>
			<marker id='04' x='139.5' y='100.01' label='La Vega'  />
			<marker id='06' x='106.68' y='69.23' label='Santiago'  />
			<marker id='07' x='38.97' y='117.45' label='Ellas Pina'  />
			<marker id='08' x='102.57' y='205.66' label='Barahona'  />
			<marker id='09' x='31.79' y='216.95' label='Pedernales'  />
			<marker id='10' x='224.64' y='168.73' label='Haina' labelPos='left' />
			<marker id='11' x='298.49' y='167.71' label='San Pedro de Macoris' labelPos='bottom'  />
			<marker id='12' x='326.19' y='171.81' label='La Romana' labelPos='right' />
			<marker id='13' x='346.71' y='141.04' label='Higuey' />

		</definition>
		<application>
			<marker id='SD' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
