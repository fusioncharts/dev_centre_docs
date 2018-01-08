---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Namibia

#### JavaScript Alias: maps/namibia


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
            "id": "NA.CA"
        },
        {
            "id": "NA.ER"
        },
        {
            "id": "NA.HA"
        },
        {
            "id": "NA.KA"
        },
        {
            "id": "NA.KH"
        },
        {
            "id": "NA.KU"
        },
        {
            "id": "NA.OW"
        },
        {
            "id": "NA.OK"
        },
        {
            "id": "NA.OH"
        },
        {
            "id": "NA.OS"
        },
        {
            "id": "NA.ON"
        },
        {
            "id": "NA.OT"
        },
        {
            "id": "NA.OD"
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
                "id": "WN",
                "shapeid": "myCustomShape",
                "x": "132.44",
                "y": "171.75",
                "label": "Windhoek",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "169.68",
                "y": "270.05",
                "label": "Karasburg",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "155.2",
                "y": "233.83",
                "label": "Keetmanshoop"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "210.04",
                "y": "56.9",
                "label": "Rundu"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "107.6",
                "y": "44.49",
                "label": "Ondangwa",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "161.41",
                "y": "80.7",
                "label": "Grootfontein",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "173.82",
                "y": "152.09",
                "label": "Gobabis"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "84.84",
                "y": "161.41",
                "label": "Swakopmund",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "90.01",
                "y": "235.9",
                "label": "Luderitz",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "150.02",
                "y": "199.69",
                "label": "Rehoboth",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "278.33",
                "y": "44.49",
                "label": "Katima Mulilo"
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
            "id": "NA.CA"
        },
        {
            "id": "NA.ER"
        },
        {
            "id": "NA.HA"
        },
        {
            "id": "NA.KA"
        },
        {
            "id": "NA.KH"
        },
        {
            "id": "NA.KU"
        },
        {
            "id": "NA.OW"
        },
        {
            "id": "NA.OK"
        },
        {
            "id": "NA.OH"
        },
        {
            "id": "NA.OS"
        },
        {
            "id": "NA.ON"
        },
        {
            "id": "NA.OT"
        },
        {
            "id": "NA.OD"
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
                "id": "WN",
                "x": "132.44",
                "y": "171.75",
                "label": "Windhoek",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "169.68",
                "y": "270.05",
                "label": "Karasburg",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "155.2",
                "y": "233.83",
                "label": "Keetmanshoop"
            },
            {
                "id": "03",
                "x": "210.04",
                "y": "56.9",
                "label": "Rundu"
            },
            {
                "id": "04",
                "x": "107.6",
                "y": "44.49",
                "label": "Ondangwa",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "161.41",
                "y": "80.7",
                "label": "Grootfontein",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "173.82",
                "y": "152.09",
                "label": "Gobabis"
            },
            {
                "id": "07",
                "x": "84.84",
                "y": "161.41",
                "label": "Swakopmund",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "90.01",
                "y": "235.9",
                "label": "Luderitz",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "150.02",
                "y": "199.69",
                "label": "Rehoboth",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "278.33",
                "y": "44.49",
                "label": "Katima Mulilo"
            }
        ],
        "application": [
            {
                "id": "WN",
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
		<entity id='NA.CA'  />
		<entity id='NA.ER'  />
		<entity id='NA.HA'  />
		<entity id='NA.KA'  />
		<entity id='NA.KH'  />
		<entity id='NA.KU'  />
		<entity id='NA.OW'  />
		<entity id='NA.OK'  />
		<entity id='NA.OH'  />
		<entity id='NA.OS'  />
		<entity id='NA.ON'  />
		<entity id='NA.OT'  />
		<entity id='NA.OD'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='WN' x='132.44' y='171.75' label='Windhoek' labelPos='bottom'  />
			<marker id='01' x='169.68' y='270.05' label='Karasburg' labelPos='left'  />
			<marker id='02' x='155.2' y='233.83' label='Keetmanshoop'  />
			<marker id='03' x='210.04' y='56.9' label='Rundu'  />
			<marker id='04' x='107.6' y='44.49' label='Ondangwa' labelPos='left'  />
			<marker id='05' x='161.41' y='80.7' label='Grootfontein' labelPos='left'  />
			<marker id='06' x='173.82' y='152.09' label='Gobabis'  />
			<marker id='07' x='84.84' y='161.41' label='Swakopmund' labelPos='bottom'  />
			<marker id='08' x='90.01' y='235.9' label='Luderitz' labelPos='left'  />
			<marker id='09' x='150.02' y='199.69' label='Rehoboth' labelPos='right'  />
			<marker id='10' x='278.33' y='44.49' label='Katima Mulilo'  />
		</definition>
		<application>
			<marker id='WN' shapeId='myCustomShape'  />
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
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
