---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Lithuania

#### JavaScript Alias: maps/lithuania


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
                "id": "VI",
                "shapeid": "myCustomShape",
                "x": "612.59",
                "y": "436.15",
                "label": "Vilnius",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "32.07",
                "y": "169.78",
                "label": "Klaipeda"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "32.07",
                "y": "89.46",
                "label": "Butinge"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "184.57",
                "y": "282.63",
                "label": "Taurage"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "316.74",
                "y": "103.69",
                "label": "Siauliai"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "458.05",
                "y": "159.61",
                "label": "Panevezys"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "602.42",
                "y": "237.89",
                "label": "Utena"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "376.72",
                "y": "323.29",
                "label": "Kaunas"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "285.22",
                "y": "431.06",
                "label": "Marijamopole"
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
                "id": "VI",
                "x": "612.59",
                "y": "436.15",
                "label": "Vilnius",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "32.07",
                "y": "169.78",
                "label": "Klaipeda"
            },
            {
                "id": "02",
                "x": "32.07",
                "y": "89.46",
                "label": "Butinge"
            },
            {
                "id": "03",
                "x": "184.57",
                "y": "282.63",
                "label": "Taurage"
            },
            {
                "id": "04",
                "x": "316.74",
                "y": "103.69",
                "label": "Siauliai"
            },
            {
                "id": "05",
                "x": "458.05",
                "y": "159.61",
                "label": "Panevezys"
            },
            {
                "id": "07",
                "x": "602.42",
                "y": "237.89",
                "label": "Utena"
            },
            {
                "id": "08",
                "x": "376.72",
                "y": "323.29",
                "label": "Kaunas"
            },
            {
                "id": "09",
                "x": "285.22",
                "y": "431.06",
                "label": "Marijamopole"
            }
        ],
        "application": [
            {
                "id": "VI",
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
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
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
			<marker id='VI' x='612.59' y='436.15' label='Vilnius' labelPos='right'  />
			<marker id='01' x='32.07' y='169.78' label='Klaipeda'  />
			<marker id='02' x='32.07' y='89.46' label='Butinge'  />
			<marker id='03' x='184.57' y='282.63' label='Taurage'  />
			<marker id='04' x='316.74' y='103.69' label='Siauliai'  />
			<marker id='05' x='458.05' y='159.61' label='Panevezys'  />
			<marker id='07' x='602.42' y='237.89' label='Utena'  />
			<marker id='08' x='376.72' y='323.29' label='Kaunas'  />
			<marker id='09' x='285.22' y='431.06' label='Marijamopole'  />
		</definition>
		<application>
			<marker id='VI' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
