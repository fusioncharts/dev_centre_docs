---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Alberta

#### JavaScript Alias: maps/alberta


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
            "id": "CA.AB.AC"
        },
        {
            "id": "CA.AB.AN"
        },
        {
            "id": "CA.AB.AS"
        },
        {
            "id": "CA.AB.CA"
        },
        {
            "id": "CA.AB.CR"
        },
        {
            "id": "CA.AB.EA"
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
                "id": "ED",
                "shapeid": "myCustomShape",
                "x": "158.64",
                "y": "267.42",
                "label": "Edmonton",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "108.68",
                "y": "77.38",
                "label": "High Level"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "223.29",
                "y": "138.12",
                "label": "Fort Mc Murray",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "117.5",
                "y": "159.67",
                "label": "Peace River",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "56.76",
                "y": "195.91",
                "label": "Grande Prairie",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "62.64",
                "y": "283.1",
                "label": "Jasper",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "153.74",
                "y": "326.2",
                "label": "Red Deer",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "110.64",
                "y": "368.32",
                "label": "Banff",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "140.03",
                "y": "369.3",
                "label": "Calgary",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "221.33",
                "y": "415.34",
                "label": "Medicine Hat",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "188.03",
                "y": "432",
                "label": "Lethbridge",
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
            "id": "CA.AB.AC"
        },
        {
            "id": "CA.AB.AN"
        },
        {
            "id": "CA.AB.AS"
        },
        {
            "id": "CA.AB.CA"
        },
        {
            "id": "CA.AB.CR"
        },
        {
            "id": "CA.AB.EA"
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
                "id": "ED",
                "x": "158.64",
                "y": "267.42",
                "label": "Edmonton",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "108.68",
                "y": "77.38",
                "label": "High Level"
            },
            {
                "id": "02",
                "x": "223.29",
                "y": "138.12",
                "label": "Fort Mc Murray",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "117.5",
                "y": "159.67",
                "label": "Peace River",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "56.76",
                "y": "195.91",
                "label": "Grande Prairie",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "62.64",
                "y": "283.1",
                "label": "Jasper",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "153.74",
                "y": "326.2",
                "label": "Red Deer",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "110.64",
                "y": "368.32",
                "label": "Banff",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "140.03",
                "y": "369.3",
                "label": "Calgary",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "221.33",
                "y": "415.34",
                "label": "Medicine Hat",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "188.03",
                "y": "432",
                "label": "Lethbridge",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "ED",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1' showLabels='0'  >
	<data>
		<entity id='CA.AB.AC'  />
		<entity id='CA.AB.AN'  />
		<entity id='CA.AB.AS'  />
		<entity id='CA.AB.CA'  />
		<entity id='CA.AB.CR'  />
		<entity id='CA.AB.EA'  />
	</data>
	<markers>
	<shapes>
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	   </shapes>
		<definition>
			<marker id='ED' x='158.64' y='267.42' label='Edmonton' labelPos='left'  />
			<marker id='01' x='108.68' y='77.38' label='High Level'  />
			<marker id='02' x='223.29' y='138.12' label='Fort Mc Murray' labelPos='left'  />
			<marker id='03' x='117.5' y='159.67' label='Peace River' labelPos='left'  />
			<marker id='04' x='56.76' y='195.91' label='Grande Prairie' labelPos='right'  />
			<marker id='05' x='62.64' y='283.1' label='Jasper' labelPos='right'  />
			<marker id='06' x='153.74' y='326.2' label='Red Deer' labelPos='right'  />
			<marker id='07' x='110.64' y='368.32' label='Banff' labelPos='left'  />
			<marker id='08' x='140.03' y='369.3' label='Calgary' labelPos='right'  />
			<marker id='09' x='221.33' y='415.34' label='Medicine Hat' labelPos='left'  />
			<marker id='10' x='188.03' y='432' label='Lethbridge' labelPos='left'  />
		</definition>
		<application>
			<marker id='ED' shapeId='myCustomShape'  />
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
