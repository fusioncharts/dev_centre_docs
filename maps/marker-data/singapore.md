---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Singapore

#### JavaScript Alias: maps/singapore


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
            "id": "SG.CS"
        },
        {
            "id": "SG.EA"
        },
        {
            "id": "SG.NO"
        },
        {
            "id": "SG.WE"
        },
        {
            "id": "SG.SO"
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
                "id": "SI",
                "shapeid": "myCustomShape",
                "x": "327.83",
                "y": "255",
                "label": "Singapore",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "383.08",
                "y": "85",
                "label": "Punggol"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "254.52",
                "y": "30.81",
                "label": "Woodlands",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "202.45",
                "y": "69.06",
                "label": "Kranji",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "124.89",
                "y": "104.12",
                "label": "Chao Chu Kang",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "87.7",
                "y": "263.5",
                "label": "Tuas",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "225.83",
                "y": "223.12",
                "label": "Queen Towns"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "343.77",
                "y": "192.31",
                "label": "Toa Payoh",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "478.7",
                "y": "202.93",
                "label": "Bedok"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "520.14",
                "y": "148.75",
                "label": "Changi",
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
            "id": "SG.CS"
        },
        {
            "id": "SG.EA"
        },
        {
            "id": "SG.NO"
        },
        {
            "id": "SG.WE"
        },
        {
            "id": "SG.SO"
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
                "id": "SI",
                "x": "327.83",
                "y": "255",
                "label": "Singapore",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "383.08",
                "y": "85",
                "label": "Punggol"
            },
            {
                "id": "02",
                "x": "254.52",
                "y": "30.81",
                "label": "Woodlands",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "202.45",
                "y": "69.06",
                "label": "Kranji",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "124.89",
                "y": "104.12",
                "label": "Chao Chu Kang",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "87.7",
                "y": "263.5",
                "label": "Tuas",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "225.83",
                "y": "223.12",
                "label": "Queen Towns"
            },
            {
                "id": "07",
                "x": "343.77",
                "y": "192.31",
                "label": "Toa Payoh",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "478.7",
                "y": "202.93",
                "label": "Bedok"
            },
            {
                "id": "09",
                "x": "520.14",
                "y": "148.75",
                "label": "Changi",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "SI",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1' showLabels='0' >
	<data>
		<entity id='SG.CS'  />
		<entity id='SG.EA'  />
		<entity id='SG.NO'  />
		<entity id='SG.WE'  />
		<entity id='SG.SO'  />
	</data>
	<markers>
	<shapes>
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	   </shapes>
		<definition>
		    <marker id='SI' x='327.83' y='255' label='Singapore' labelPos='right'  />
		 	<marker id='01' x='383.08' y='85' label='Punggol'  />
			<marker id='02' x='254.52' y='30.81' label='Woodlands' labelPos='left'  />
			<marker id='03' x='202.45' y='69.06' label='Kranji' labelPos='right'  />
			<marker id='04' x='124.89' y='104.12' label='Chao Chu Kang' labelPos='left'  />
			<marker id='05' x='87.7' y='263.5' label='Tuas' labelPos='right'  />
			<marker id='06' x='225.83' y='223.12' label='Queen Towns'  />
			<marker id='07' x='343.77' y='192.31' label='Toa Payoh' labelPos='right'  />
			<marker id='08' x='478.7' y='202.93' label='Bedok'  />
			<marker id='09' x='520.14' y='148.75' label='Changi' labelPos='left'  />
		</definition>
		<application>
		    <marker id='SI' shapeId='myCustomShape'  />
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
