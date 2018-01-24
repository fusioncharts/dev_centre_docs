---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Turkmenistan

#### JavaScript Alias: maps/turkmenistan


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
            "id": "TM.AL"
        },
        {
            "id": "TM.BA"
        },
        {
            "id": "TM.DA"
        },
        {
            "id": "TM.LE"
        },
        {
            "id": "TM.MA"
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
                "id": "AS",
                "shapeid": "myCustomShape",
                "x": "133.92",
                "y": "145.31",
                "label": "Ashgabat",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "103.6",
                "y": "113.95",
                "label": "Gyzylarbat",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "48.19",
                "y": "103.5",
                "label": "Balkanabat",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "19.96",
                "y": "83.63",
                "label": "Turkmenbasy",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "164.24",
                "y": "39.72",
                "label": "Dasoguz",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "235.33",
                "y": "108.72",
                "label": "Turkmenabat"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "269.83",
                "y": "146.36",
                "label": "Atamyrat"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "212.33",
                "y": "161",
                "label": "Mary"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "218.6",
                "y": "218.5",
                "label": "Gushgy"
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
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1",
        "showlabels": "0"
    },
    "data": [
        {
            "id": "TM.AL"
        },
        {
            "id": "TM.BA"
        },
        {
            "id": "TM.DA"
        },
        {
            "id": "TM.LE"
        },
        {
            "id": "TM.MA"
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
                "id": "AS",
                "x": "133.92",
                "y": "145.31",
                "label": "Ashgabat",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "103.6",
                "y": "113.95",
                "label": "Gyzylarbat",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "48.19",
                "y": "103.5",
                "label": "Balkanabat",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "19.96",
                "y": "83.63",
                "label": "Turkmenbasy",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "164.24",
                "y": "39.72",
                "label": "Dasoguz",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "235.33",
                "y": "108.72",
                "label": "Turkmenabat"
            },
            {
                "id": "06",
                "x": "269.83",
                "y": "146.36",
                "label": "Atamyrat"
            },
            {
                "id": "07",
                "x": "212.33",
                "y": "161",
                "label": "Mary"
            },
            {
                "id": "08",
                "x": "218.6",
                "y": "218.5",
                "label": "Gushgy"
            }
        ],
        "application": [
            {
                "id": "AS",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1' showLabels='0'  >
	<data>
		<entity id='TM.AL'  />
		<entity id='TM.BA'  />
		<entity id='TM.DA'  />
		<entity id='TM.LE'  />
		<entity id='TM.MA'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	</shapes>
		<definition>
			<marker id='AS' x='133.92' y='145.31' label='Ashgabat' labelPos='left'  />
			<marker id='01' x='103.6' y='113.95' label='Gyzylarbat' labelPos='right'  />
			<marker id='02' x='48.19' y='103.5' label='Balkanabat' labelPos='right'  />
			<marker id='03' x='19.96' y='83.63' label='Turkmenbasy' labelPos='right'  />
			<marker id='04' x='164.24' y='39.72' label='Dasoguz' labelPos='right'  />
			<marker id='05' x='235.33' y='108.72' label='Turkmenabat'  />
			<marker id='06' x='269.83' y='146.36' label='Atamyrat'  />
			<marker id='07' x='212.33' y='161' label='Mary'  />
			<marker id='08' x='218.6' y='218.5' label='Gushgy'  />
		</definition>
		<application>
			<marker id='AS' shapeId='myCustomShape'  />
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
