---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Guatemala

#### JavaScript Alias: maps/guatemala


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
                "id": "GU",
                "shapeid": "myCustomShape",
                "x": "192.37",
                "y": "338.69",
                "label": "Guatemala City"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "266.04",
                "y": "105.39",
                "label": "Flores"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "192.37",
                "y": "233.3",
                "label": "Coban"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "97.2",
                "y": "250.69",
                "label": "Huehuetenango"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "96.18",
                "y": "298.79",
                "label": "Quetzaltenango"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "99.25",
                "y": "333.58",
                "label": "Mazatenango"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "38.88",
                "y": "379.62",
                "label": "Champerico"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "108.46",
                "y": "420.55",
                "label": "Puerto San Jose"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "120.74",
                "y": "418.51",
                "label": "Puerto Quetzal",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "288.55",
                "y": "297.76",
                "label": "Zacapa"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "404.18",
                "y": "210.79",
                "label": "Puerto Barrios"
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
                "id": "GU",
                "x": "192.37",
                "y": "338.69",
                "label": "Guatemala City"
            },
            {
                "id": "01",
                "x": "266.04",
                "y": "105.39",
                "label": "Flores"
            },
            {
                "id": "02",
                "x": "192.37",
                "y": "233.3",
                "label": "Coban"
            },
            {
                "id": "03",
                "x": "97.2",
                "y": "250.69",
                "label": "Huehuetenango"
            },
            {
                "id": "04",
                "x": "96.18",
                "y": "298.79",
                "label": "Quetzaltenango"
            },
            {
                "id": "05",
                "x": "99.25",
                "y": "333.58",
                "label": "Mazatenango"
            },
            {
                "id": "08",
                "x": "38.88",
                "y": "379.62",
                "label": "Champerico"
            },
            {
                "id": "09",
                "x": "108.46",
                "y": "420.55",
                "label": "Puerto San Jose"
            },
            {
                "id": "10",
                "x": "120.74",
                "y": "418.51",
                "label": "Puerto Quetzal",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "x": "288.55",
                "y": "297.76",
                "label": "Zacapa"
            },
            {
                "id": "12",
                "x": "404.18",
                "y": "210.79",
                "label": "Puerto Barrios"
            }
        ],
        "application": [
            {
                "id": "GU",
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
			<marker id='GU' x='192.37' y='338.69' label='Guatemala City'  />
			<marker id='01' x='266.04' y='105.39' label='Flores'  />
			<marker id='02' x='192.37' y='233.3' label='Coban'  />
			<marker id='03' x='97.2' y='250.69' label='Huehuetenango'  />
			<marker id='04' x='96.18' y='298.79' label='Quetzaltenango'  />
			<marker id='05' x='99.25' y='333.58' label='Mazatenango'  />
			<marker id='08' x='38.88' y='379.62' label='Champerico'  />
			<marker id='09' x='108.46' y='420.55' label='Puerto San Jose'  />
			<marker id='10' x='120.74' y='418.51' label='Puerto Quetzal' labelPos='bottom'  />
			<marker id='11' x='288.55' y='297.76' label='Zacapa'  />
			<marker id='12' x='404.18' y='210.79' label='Puerto Barrios'  />
		</definition>
		<application>
			<marker id='GU' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
