---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: CostaRica

#### JavaScript Alias: maps/costarica


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
                "id": "SJ",
                "shapeid": "myCustomShape",
                "x": "164.57",
                "y": "147.26",
                "label": "San Jose",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "39.13",
                "y": "54.99",
                "label": "Liberia",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "40.17",
                "y": "108.9",
                "label": "Nicoya",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "101.33",
                "y": "120.31",
                "label": "Puntarenas",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "111.7",
                "y": "129.64",
                "label": "Caldera",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "162.5",
                "y": "173.18",
                "label": "Puerto Quepos",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "216.41",
                "y": "183.55",
                "label": "San Isidro",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "252.7",
                "y": "120.31",
                "label": "Moin",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "260.99",
                "y": "122.38",
                "label": "Puerto Limon",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "247.51",
                "y": "241.6",
                "label": "Golfito",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "142.8",
                "y": "105.79",
                "label": "Alajuela"
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
                "id": "SJ",
                "x": "164.57",
                "y": "147.26",
                "label": "San Jose",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "39.13",
                "y": "54.99",
                "label": "Liberia",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "40.17",
                "y": "108.9",
                "label": "Nicoya",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "101.33",
                "y": "120.31",
                "label": "Puntarenas",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "111.7",
                "y": "129.64",
                "label": "Caldera",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "162.5",
                "y": "173.18",
                "label": "Puerto Quepos",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "216.41",
                "y": "183.55",
                "label": "San Isidro",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "252.7",
                "y": "120.31",
                "label": "Moin",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "260.99",
                "y": "122.38",
                "label": "Puerto Limon",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "x": "247.51",
                "y": "241.6",
                "label": "Golfito",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "142.8",
                "y": "105.79",
                "label": "Alajuela"
            }
        ],
        "application": [
            {
                "id": "SJ",
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
			<marker id='SJ' x='164.57' y='147.26' label='San Jose' labelpos='right' />
			<marker id='01' x='39.13' y='54.99' label='Liberia' labelPos='right' />
			<marker id='02' x='40.17' y='108.9' label='Nicoya' labelPos='left' />
			<marker id='03' x='101.33' y='120.31' label='Puntarenas' labelPos='left' />
			<marker id='04' x='111.7' y='129.64' label='Caldera' labelPos='left' />
			<marker id='05' x='162.5' y='173.18' label='Puerto Quepos' labelPos='left'  />
			<marker id='06' x='216.41' y='183.55' label='San Isidro' labelPos='right' />
			<marker id='08' x='252.7' y='120.31' label='Moin' labelPos='left'  />
			<marker id='09' x='260.99' y='122.38' label='Puerto Limon' labelPos='bottom' />
			<marker id='10' x='247.51' y='241.6' label='Golfito' labelPos='right' />
			<marker id='11' x='142.8' y='105.79' label='Alajuela'  />

		</definition>
		<application>
			<marker id='SJ' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
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
