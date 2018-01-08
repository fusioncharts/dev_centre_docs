---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Uruguay

#### JavaScript Alias: maps/uruguay


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
                "id": "MO",
                "shapeid": "myCustomShape",
                "x": "126.2",
                "y": "315.87",
                "label": "Montevideo",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "104.48",
                "y": "24.15",
                "label": "Artigas",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "161.37",
                "y": "57.25",
                "label": "Rivera"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "235.86",
                "y": "149.32",
                "label": "Melo"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "217.24",
                "y": "201.05",
                "label": "Treinta y Tres"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "196.55",
                "y": "323.12",
                "label": "Punta del Este",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "191.37",
                "y": "271.39",
                "label": "Minas",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "176.89",
                "y": "315.87",
                "label": "Piriapolis"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "121.03",
                "y": "311.74",
                "label": "Las Piedras",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "96.2",
                "y": "275.53",
                "label": "San Jose",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "40.34",
                "y": "288.98",
                "label": "Colonia",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "9.31",
                "y": "257.94",
                "label": "Nueva Palmira",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "11.37",
                "y": "208.29",
                "label": "Fray Bentos",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "27.93",
                "y": "223.81",
                "label": "Mercedes",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "24.82",
                "y": "153.46",
                "label": "Paysandu",
                "labelpos": "right"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "29.99",
                "y": "89.32",
                "label": "Salto",
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
                "id": "MO",
                "x": "126.2",
                "y": "315.87",
                "label": "Montevideo",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "104.48",
                "y": "24.15",
                "label": "Artigas",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "161.37",
                "y": "57.25",
                "label": "Rivera"
            },
            {
                "id": "03",
                "x": "235.86",
                "y": "149.32",
                "label": "Melo"
            },
            {
                "id": "04",
                "x": "217.24",
                "y": "201.05",
                "label": "Treinta y Tres"
            },
            {
                "id": "05",
                "x": "196.55",
                "y": "323.12",
                "label": "Punta del Este",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "191.37",
                "y": "271.39",
                "label": "Minas",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "176.89",
                "y": "315.87",
                "label": "Piriapolis"
            },
            {
                "id": "08",
                "x": "121.03",
                "y": "311.74",
                "label": "Las Piedras",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "96.2",
                "y": "275.53",
                "label": "San Jose",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "40.34",
                "y": "288.98",
                "label": "Colonia",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "x": "9.31",
                "y": "257.94",
                "label": "Nueva Palmira",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "11.37",
                "y": "208.29",
                "label": "Fray Bentos",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "27.93",
                "y": "223.81",
                "label": "Mercedes",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "24.82",
                "y": "153.46",
                "label": "Paysandu",
                "labelpos": "right"
            },
            {
                "id": "16",
                "x": "29.99",
                "y": "89.32",
                "label": "Salto",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "MO",
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
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
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
			<marker id='MO' x='126.2' y='315.87' label='Montevideo' labelPos='bottom'  />
			<marker id='01' x='104.48' y='24.15' label='Artigas' labelPos='left'  />
			<marker id='02' x='161.37' y='57.25' label='Rivera'  />
			<marker id='03' x='235.86' y='149.32' label='Melo'  />
			<marker id='04' x='217.24' y='201.05' label='Treinta y Tres'  />
			<marker id='05' x='196.55' y='323.12' label='Punta del Este' labelPos='right'  />
			<marker id='06' x='191.37' y='271.39' label='Minas' labelPos='right'  />
			<marker id='07' x='176.89' y='315.87' label='Piriapolis'  />
			<marker id='08' x='121.03' y='311.74' label='Las Piedras' labelPos='left'  />
			<marker id='09' x='96.2' y='275.53' label='San Jose' labelPos='left'  />
			<marker id='10' x='40.34' y='288.98' label='Colonia' labelPos='bottom'  />
			<marker id='11' x='9.31' y='257.94' label='Nueva Palmira' labelPos='right'  />
			<marker id='12' x='11.37' y='208.29' label='Fray Bentos' labelPos='right'  />
			<marker id='13' x='27.93' y='223.81' label='Mercedes' labelPos='right'  />
			<marker id='14' x='24.82' y='153.46' label='Paysandu' labelPos='right'  />
			<marker id='16' x='29.99' y='89.32' label='Salto' labelPos='right'  />
		</definition>
		<application>
			<marker id='MO' shapeId='myCustomShape'  />
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
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
