---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Denmark

#### JavaScript Alias: maps/denmark


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
                "id": "CO",
                "shapeid": "myCustomShape",
                "x": "422.54",
                "y": "342.93",
                "label": "Copenhavens",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "241.46",
                "y": "7.08",
                "label": "Skagen",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "178.75",
                "y": "120.38",
                "label": "Alborg",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "204.04",
                "y": "260.99",
                "label": "Arhus",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "145.36",
                "y": "331.8",
                "label": "Vejle"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "134.23",
                "y": "370.24",
                "label": "Kolding"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "39.14",
                "y": "368.22",
                "label": "Esbjerg",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "126.14",
                "y": "447.12",
                "label": "Abenra",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "217.19",
                "y": "387.44",
                "label": "Odense",
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
                "id": "CO",
                "x": "422.54",
                "y": "342.93",
                "label": "Copenhavens",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "241.46",
                "y": "7.08",
                "label": "Skagen",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "x": "178.75",
                "y": "120.38",
                "label": "Alborg",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "204.04",
                "y": "260.99",
                "label": "Arhus",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "145.36",
                "y": "331.8",
                "label": "Vejle"
            },
            {
                "id": "05",
                "x": "134.23",
                "y": "370.24",
                "label": "Kolding"
            },
            {
                "id": "06",
                "x": "39.14",
                "y": "368.22",
                "label": "Esbjerg",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "126.14",
                "y": "447.12",
                "label": "Abenra",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "217.19",
                "y": "387.44",
                "label": "Odense",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "CO",
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
			<marker id='CO' x='422.54' y='342.93' label='Copenhavens' labelPos='right'  />
			<marker id='01' x='241.46' y='7.08' label='Skagen' labelPos='bottom' />
			<marker id='02' x='178.75' y='120.38' label='Alborg' labelPos='right' />
			<marker id='03' x='204.04' y='260.99' label='Arhus' labelPos='left' />
			<marker id='04' x='145.36' y='331.8' label='Vejle'  />
			<marker id='05' x='134.23' y='370.24' label='Kolding'  />
			<marker id='06' x='39.14' y='368.22' label='Esbjerg' labelPos='right'  />
			<marker id='07' x='126.14' y='447.12' label='Abenra'  labelPos='left'/>
			<marker id='08' x='217.19' y='387.44' label='Odense'  labelPos='left'/>

		</definition>
		<application>
			<marker id='CO' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
