---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Botswana

#### JavaScript Alias: maps/botswana


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
            "id": "BW.CE"
        },
        {
            "id": "BW.GH"
        },
        {
            "id": "BW.KG"
        },
        {
            "id": "BW.KL"
        },
        {
            "id": "BW.KW"
        },
        {
            "id": "BW.NE"
        },
        {
            "id": "BW.NW"
        },
        {
            "id": "BW.SE"
        },
        {
            "id": "BW.SO"
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
                "id": "GA",
                "shapeid": "myCustomShape",
                "x": "378.76",
                "y": "430.85",
                "label": "Gaborone",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "239.97",
                "y": "122.21",
                "label": "Maun"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "475.08",
                "y": "219.57",
                "label": "Francistown",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "502.01",
                "y": "262.03",
                "label": "Selebi Phikwe",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "491.65",
                "y": "281.71",
                "label": "Serowe",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "490.61",
                "y": "303.46",
                "label": "Mahalapye",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "364.26",
                "y": "414.28",
                "label": "Molepolole"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "363.22",
                "y": "446.39",
                "label": "Kanye",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "179.9",
                "y": "502.32",
                "label": "Tshabong",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "34.9",
                "y": "281.71",
                "label": "Mamuno",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "150.9",
                "y": "243.39",
                "label": "Ghanzi",
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
            "id": "BW.CE"
        },
        {
            "id": "BW.GH"
        },
        {
            "id": "BW.KG"
        },
        {
            "id": "BW.KL"
        },
        {
            "id": "BW.KW"
        },
        {
            "id": "BW.NE"
        },
        {
            "id": "BW.NW"
        },
        {
            "id": "BW.SE"
        },
        {
            "id": "BW.SO"
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
                "id": "GA",
                "x": "378.76",
                "y": "430.85",
                "label": "Gaborone",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "239.97",
                "y": "122.21",
                "label": "Maun"
            },
            {
                "id": "02",
                "x": "475.08",
                "y": "219.57",
                "label": "Francistown",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "502.01",
                "y": "262.03",
                "label": "Selebi Phikwe",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "491.65",
                "y": "281.71",
                "label": "Serowe",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "490.61",
                "y": "303.46",
                "label": "Mahalapye",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "364.26",
                "y": "414.28",
                "label": "Molepolole"
            },
            {
                "id": "07",
                "x": "363.22",
                "y": "446.39",
                "label": "Kanye",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "179.9",
                "y": "502.32",
                "label": "Tshabong",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "34.9",
                "y": "281.71",
                "label": "Mamuno",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "150.9",
                "y": "243.39",
                "label": "Ghanzi",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "GA",
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
		<entity id='BW.CE'  />
		<entity id='BW.GH'  />
		<entity id='BW.KG'  />
		<entity id='BW.KL'  />
		<entity id='BW.KW'  />
		<entity id='BW.NE'  />
		<entity id='BW.NW'  />
		<entity id='BW.SE'  />
		<entity id='BW.SO'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='GA' x='378.76' y='430.85' label='Gaborone' labelPos='right'  />
			<marker id='01' x='239.97' y='122.21' label='Maun'  />
			<marker id='02' x='475.08' y='219.57' label='Francistown' labelPos='left'  />
			<marker id='03' x='502.01' y='262.03' label='Selebi Phikwe' labelPos='left'  />
			<marker id='04' x='491.65' y='281.71' label='Serowe' labelPos='left'  />
			<marker id='05' x='490.61' y='303.46' label='Mahalapye' labelPos='left'  />
			<marker id='06' x='364.26' y='414.28' label='Molepolole'  />
			<marker id='07' x='363.22' y='446.39' label='Kanye' labelPos='left'  />
			<marker id='08' x='179.9' y='502.32' label='Tshabong' labelPos='left'  />
			<marker id='09' x='34.9' y='281.71' label='Mamuno' labelPos='right'  />
			<marker id='10' x='150.9' y='243.39' label='Ghanzi' labelPos='right'  />
		</definition>
		<application>
			<marker id='GA' shapeId='myCustomShape'  />
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
