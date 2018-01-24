---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Chad

#### JavaScript Alias: maps/chad


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
            "id": "TD.BA"
        },
        {
            "id": "TD.BT"
        },
        {
            "id": "TD.CG"
        },
        {
            "id": "TD.GR"
        },
        {
            "id": "TD.HD"
        },
        {
            "id": "TD.KA"
        },
        {
            "id": "TD.LC"
        },
        {
            "id": "TD.LO"
        },
        {
            "id": "TD.LR"
        },
        {
            "id": "TD.MA"
        },
        {
            "id": "TD.ME"
        },
        {
            "id": "TD.MW"
        },
        {
            "id": "TD.MO"
        },
        {
            "id": "TD.OD"
        },
        {
            "id": "TD.SA"
        },
        {
            "id": "TD.TA"
        },
        {
            "id": "TD.BI"
        },
        {
            "id": "TD.NJ"
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
                "id": "NA",
                "shapeid": "myCustomShape",
                "x": "62.12",
                "y": "340.82",
                "label": "Ndjamena",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "122.18",
                "y": "62.28",
                "label": "Aozou",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "169.81",
                "y": "172.04",
                "label": "Faya Largeau",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "56.95",
                "y": "268.34",
                "label": "Mao",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "214.34",
                "y": "306.65",
                "label": "Abeche",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "154.28",
                "y": "422.63",
                "label": "Sarh",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "83.87",
                "y": "451.62",
                "label": "Moundou",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "64.2",
                "y": "373.96",
                "label": "Bongor",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "104.58",
                "y": "445.41",
                "label": "Doba"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "141.86",
                "y": "337.72",
                "label": "Mongo",
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
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "TD.BA"
        },
        {
            "id": "TD.BT"
        },
        {
            "id": "TD.CG"
        },
        {
            "id": "TD.GR"
        },
        {
            "id": "TD.HD"
        },
        {
            "id": "TD.KA"
        },
        {
            "id": "TD.LC"
        },
        {
            "id": "TD.LO"
        },
        {
            "id": "TD.LR"
        },
        {
            "id": "TD.MA"
        },
        {
            "id": "TD.ME"
        },
        {
            "id": "TD.MW"
        },
        {
            "id": "TD.MO"
        },
        {
            "id": "TD.OD"
        },
        {
            "id": "TD.SA"
        },
        {
            "id": "TD.TA"
        },
        {
            "id": "TD.BI"
        },
        {
            "id": "TD.NJ"
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
                "id": "NA",
                "x": "62.12",
                "y": "340.82",
                "label": "Ndjamena",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "122.18",
                "y": "62.28",
                "label": "Aozou",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "169.81",
                "y": "172.04",
                "label": "Faya Largeau",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "56.95",
                "y": "268.34",
                "label": "Mao",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "214.34",
                "y": "306.65",
                "label": "Abeche",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "154.28",
                "y": "422.63",
                "label": "Sarh",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "83.87",
                "y": "451.62",
                "label": "Moundou",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "x": "64.2",
                "y": "373.96",
                "label": "Bongor",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "104.58",
                "y": "445.41",
                "label": "Doba"
            },
            {
                "id": "09",
                "x": "141.86",
                "y": "337.72",
                "label": "Mongo",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "NA",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

    </div>
    <div class='tab old-xml-tab'>
<pre><code class="language-html">
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='' markerRadius='' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='TD.BA'  />
		<entity id='TD.BT'  />
		<entity id='TD.CG'  />
		<entity id='TD.GR'  />
		<entity id='TD.HD'  />
		<entity id='TD.KA'  />
		<entity id='TD.LC'  />
		<entity id='TD.LO'  />
		<entity id='TD.LR'  />
		<entity id='TD.MA'  />
		<entity id='TD.ME'  />
		<entity id='TD.MW'  />
		<entity id='TD.MO'  />
		<entity id='TD.OD'  />
		<entity id='TD.SA'  />
		<entity id='TD.TA'  />
		<entity id='TD.BI'  />
		<entity id='TD.NJ'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='NA' x='62.12' y='340.82' label='Ndjamena' labelPos='left'  />
			<marker id='01' x='122.18' y='62.28' label='Aozou' labelPos='right'  />
			<marker id='02' x='169.81' y='172.04' label='Faya Largeau' labelPos='right'  />
			<marker id='03' x='56.95' y='268.34' label='Mao' labelPos='right'  />
			<marker id='04' x='214.34' y='306.65' label='Abeche' labelPos='left'  />
			<marker id='05' x='154.28' y='422.63' label='Sarh' labelPos='right'  />
			<marker id='06' x='83.87' y='451.62' label='Moundou' labelPos='bottom'  />
			<marker id='07' x='64.2' y='373.96' label='Bongor' labelPos='left'  />
			<marker id='08' x='104.58' y='445.41' label='Doba'  />
			<marker id='09' x='141.86' y='337.72' label='Mongo' labelPos='right'  />
		</definition>
		<application>
			<marker id='NA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
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
