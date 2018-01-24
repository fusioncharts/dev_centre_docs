---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Bolivia

#### JavaScript Alias: maps/bolivia


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
                "id": "LP",
                "shapeid": "myCustomShape",
                "x": "35.17",
                "y": "173.12",
                "label": "La Paz ",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "26.89",
                "y": "44.84",
                "label": "Cobija"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "95.17",
                "y": "28.29",
                "label": "Riberalta"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "101.37",
                "y": "97.6",
                "label": "Trinidad"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "87.93",
                "y": "188.63",
                "label": "Cochabamba",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "123.1",
                "y": "197.94",
                "label": "Santa Cruz",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "59.99",
                "y": "211.39",
                "label": "Oruro",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "84.82",
                "y": "237.25",
                "label": "Sucre",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "72.41",
                "y": "260.01",
                "label": "Potosi",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "87.93",
                "y": "295.18",
                "label": "Tarija"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "284.48",
                "y": "237.25",
                "label": "Puerto Aguirre",
                "labelpos": "left"
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
                "id": "LP",
                "x": "35.17",
                "y": "173.12",
                "label": "La Paz ",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "26.89",
                "y": "44.84",
                "label": "Cobija"
            },
            {
                "id": "02",
                "x": "95.17",
                "y": "28.29",
                "label": "Riberalta"
            },
            {
                "id": "03",
                "x": "101.37",
                "y": "97.6",
                "label": "Trinidad"
            },
            {
                "id": "04",
                "x": "87.93",
                "y": "188.63",
                "label": "Cochabamba",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "123.1",
                "y": "197.94",
                "label": "Santa Cruz",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "59.99",
                "y": "211.39",
                "label": "Oruro",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "84.82",
                "y": "237.25",
                "label": "Sucre",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "72.41",
                "y": "260.01",
                "label": "Potosi",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "87.93",
                "y": "295.18",
                "label": "Tarija"
            },
            {
                "id": "10",
                "x": "284.48",
                "y": "237.25",
                "label": "Puerto Aguirre",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "LP",
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
	         <shape id='myCustomShape'  type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			 <shape id='newCustomShape'  type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='LP' x='35.17' y='173.12' label='La Paz ' labelPos='right'  />
			<marker id='01' x='26.89' y='44.84' label='Cobija'  />
			<marker id='02' x='95.17' y='28.29' label='Riberalta'  />
			<marker id='03' x='101.37' y='97.6' label='Trinidad'  />
			<marker id='04' x='87.93' y='188.63' label='Cochabamba' labelPos='left' />
			<marker id='05' x='123.1' y='197.94' label='Santa Cruz' labelPos='right' />
			<marker id='06' x='59.99' y='211.39' label='Oruro' labelPos='right' />
			<marker id='07' x='84.82' y='237.25' label='Sucre' labelPos='left' />
			<marker id='08' x='72.41' y='260.01' label='Potosi' labelPos='left' />
			<marker id='09' x='87.93' y='295.18' label='Tarija'  />
			<marker id='10' x='284.48' y='237.25' label='Puerto Aguirre' labelPos='left' />
		</definition>
		<application>
			<marker id='LP' shapeId='myCustomShape'  />
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
