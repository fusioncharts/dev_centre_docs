---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SaintKittsandNevis

#### JavaScript Alias: maps/saintkittsandnevis


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
                "id": "BA",
                "shapeid": "myCustomShape",
                "x": "146.17",
                "y": "129.93",
                "label": "Basseterre",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "70.89",
                "y": "27.84",
                "label": "Sadlers"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "123.49",
                "y": "62.9",
                "label": "Cayon"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "25.52",
                "y": "64.96",
                "label": "Sandy Point Town",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "266.83",
                "y": "220.68",
                "label": "Newcastle"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "229.71",
                "y": "282.56",
                "label": "Charlestown",
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
                "id": "BA",
                "x": "146.17",
                "y": "129.93",
                "label": "Basseterre",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "70.89",
                "y": "27.84",
                "label": "Sadlers"
            },
            {
                "id": "02",
                "x": "123.49",
                "y": "62.9",
                "label": "Cayon"
            },
            {
                "id": "03",
                "x": "25.52",
                "y": "64.96",
                "label": "Sandy Point Town",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "266.83",
                "y": "220.68",
                "label": "Newcastle"
            },
            {
                "id": "07",
                "x": "229.71",
                "y": "282.56",
                "label": "Charlestown",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "BA",
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
                "id": "07",
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
			<marker id='BA' x='146.17' y='129.93' label='Basseterre' labelPos='right'  />
		    <marker id='01' x='70.89' y='27.84' label='Sadlers'  />
			<marker id='02' x='123.49' y='62.9' label='Cayon'  />
			<marker id='03' x='25.52' y='64.96' label='Sandy Point Town' labelPos='right'  />
			<marker id='04' x='266.83' y='220.68' label='Newcastle'  />
			<marker id='07' x='229.71' y='282.56' label='Charlestown' labelPos='left'  />
		</definition>
		<application>
			<marker id='BA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
