---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Tonga

#### JavaScript Alias: maps/tonga


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
    "data": [
        {
            "id": "TO.EU"
        },
        {
            "id": "TO.HA"
        },
        {
            "id": "TO.TT"
        },
        {
            "id": "TO.VA"
        }
    ],
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
                "id": "NU",
                "shapeid": "myCustomShape",
                "x": "49.47",
                "y": "488.15",
                "label": "Nukualofa",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "75.78",
                "y": "503.94",
                "label": "Ohonua",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "105.26",
                "y": "387.1",
                "label": "Pangai",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "145.26",
                "y": "286.05",
                "label": "Neiafu"
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
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "TO.EU"
        },
        {
            "id": "TO.HA"
        },
        {
            "id": "TO.TT"
        },
        {
            "id": "TO.VA"
        }
    ],
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
                "id": "NU",
                "x": "49.47",
                "y": "488.15",
                "label": "Nukualofa",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "75.78",
                "y": "503.94",
                "label": "Ohonua",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "105.26",
                "y": "387.1",
                "label": "Pangai",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "145.26",
                "y": "286.05",
                "label": "Neiafu"
            }
        ],
        "application": [
            {
                "id": "NU",
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
                "id": "04",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='TO.EU'  />
		<entity id='TO.HA'  />
		<entity id='TO.TT'  />
		<entity id='TO.VA'  />
	</data>
	<markers>
	<shapes>
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='NU' x='49.47' y='488.15' label='Nukualofa' labelPos='right' />
			<marker id='01' x='75.78' y='503.94' label='Ohonua' labelPos='right'  />
			<marker id='02' x='105.26' y='387.1' label='Pangai' labelPos='left'  />
			<marker id='04' x='145.26' y='286.05' label='Neiafu'  />
		</definition>
		<application>
			<marker id='NU' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
