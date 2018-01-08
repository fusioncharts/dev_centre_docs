---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Swaziland

#### JavaScript Alias: maps/swaziland


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
            "id": "SZ.HH"
        },
        {
            "id": "SZ.LU"
        },
        {
            "id": "SZ.MA"
        },
        {
            "id": "SZ.SH"
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
                "id": "MB",
                "shapeid": "myCustomShape",
                "x": "22.31",
                "y": "92.27",
                "label": "Mbabane",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "58.43",
                "y": "34.9",
                "label": "Piggs Peak"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "125.37",
                "y": "43.4",
                "label": "Mhlume"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "125.37",
                "y": "188.96",
                "label": "Lavumisa",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "61.62",
                "y": "173.02",
                "label": "Nhlangano",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "52.06",
                "y": "147.52",
                "label": "Hlatikulu"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "136",
                "y": "130.52",
                "label": "Big Bend",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "18.06",
                "y": "110.34",
                "label": "Lobamba",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "89.25",
                "y": "108.21",
                "label": "Manzini",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "143.43",
                "y": "90.15",
                "label": "Siteki",
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
            "id": "SZ.HH"
        },
        {
            "id": "SZ.LU"
        },
        {
            "id": "SZ.MA"
        },
        {
            "id": "SZ.SH"
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
                "id": "MB",
                "x": "22.31",
                "y": "92.27",
                "label": "Mbabane",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "58.43",
                "y": "34.9",
                "label": "Piggs Peak"
            },
            {
                "id": "02",
                "x": "125.37",
                "y": "43.4",
                "label": "Mhlume"
            },
            {
                "id": "03",
                "x": "125.37",
                "y": "188.96",
                "label": "Lavumisa",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "x": "61.62",
                "y": "173.02",
                "label": "Nhlangano",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "52.06",
                "y": "147.52",
                "label": "Hlatikulu"
            },
            {
                "id": "06",
                "x": "136",
                "y": "130.52",
                "label": "Big Bend",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "x": "18.06",
                "y": "110.34",
                "label": "Lobamba",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "89.25",
                "y": "108.21",
                "label": "Manzini",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "143.43",
                "y": "90.15",
                "label": "Siteki",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "MB",
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
		<entity id='SZ.HH'  />
		<entity id='SZ.LU'  />
		<entity id='SZ.MA'  />
		<entity id='SZ.SH'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='MB' x='22.31' y='92.27' label='Mbabane' labelPos='right'  />
			<marker id='01' x='58.43' y='34.9' label='Piggs Peak'  />
			<marker id='02' x='125.37' y='43.4' label='Mhlume'  />
			<marker id='03' x='125.37' y='188.96' label='Lavumisa' labelPos='bottom'  />
			<marker id='04' x='61.62' y='173.02' label='Nhlangano' labelPos='bottom'  />
			<marker id='05' x='52.06' y='147.52' label='Hlatikulu'  />
			<marker id='06' x='136' y='130.52' label='Big Bend' labelPos='bottom'  />
			<marker id='07' x='18.06' y='110.34' label='Lobamba' labelPos='right'  />
			<marker id='08' x='89.25' y='108.21' label='Manzini' labelPos='right'  />
			<marker id='09' x='143.43' y='90.15' label='Siteki' labelPos='left'  />
		</definition>
		<application>
			<marker id='MB' shapeId='myCustomShape'  />
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
