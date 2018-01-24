---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: YukonTerritory

#### JavaScript Alias: maps/yukonterritory


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
            "id": "CA.YT.NO"
        },
        {
            "id": "CA.YT.ST"
        },
        {
            "id": "CA.YT.KL"
        },
        {
            "id": "CA.YT.KU"
        },
        {
            "id": "CA.YT.WH"
        },
        {
            "id": "CA.YT.CA"
        },
        {
            "id": "CA.YT.WL"
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
                "id": "WH",
                "shapeid": "myCustomShape",
                "x": "210",
                "y": "584",
                "label": "Whitehorse",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "296",
                "y": "682",
                "label": "Teslin"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "416",
                "y": "726",
                "label": "Watson Lake"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "192",
                "y": "646",
                "label": "Carcross",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "112",
                "y": "524",
                "label": "Haines Junction"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "72",
                "y": "422",
                "label": "Beaver Creek"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "202",
                "y": "294",
                "label": "Dawson"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "302",
                "y": "338",
                "label": "Keno Hill"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "262",
                "y": "358",
                "label": "Mayo",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "254",
                "y": "128",
                "label": "Old Crow"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "198",
                "y": "470",
                "label": "Carmacks",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "214",
                "y": "398",
                "label": "Pelly Crossing",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "304",
                "y": "470",
                "label": "Faro"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "344",
                "y": "492",
                "label": "Ross River",
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
            "id": "CA.YT.NO"
        },
        {
            "id": "CA.YT.ST"
        },
        {
            "id": "CA.YT.KL"
        },
        {
            "id": "CA.YT.KU"
        },
        {
            "id": "CA.YT.WH"
        },
        {
            "id": "CA.YT.CA"
        },
        {
            "id": "CA.YT.WL"
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
                "id": "WH",
                "x": "210",
                "y": "584",
                "label": "Whitehorse",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "296",
                "y": "682",
                "label": "Teslin"
            },
            {
                "id": "02",
                "x": "416",
                "y": "726",
                "label": "Watson Lake"
            },
            {
                "id": "03",
                "x": "192",
                "y": "646",
                "label": "Carcross",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "112",
                "y": "524",
                "label": "Haines Junction"
            },
            {
                "id": "06",
                "x": "72",
                "y": "422",
                "label": "Beaver Creek"
            },
            {
                "id": "05",
                "x": "202",
                "y": "294",
                "label": "Dawson"
            },
            {
                "id": "07",
                "x": "302",
                "y": "338",
                "label": "Keno Hill"
            },
            {
                "id": "08",
                "x": "262",
                "y": "358",
                "label": "Mayo",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "254",
                "y": "128",
                "label": "Old Crow"
            },
            {
                "id": "11",
                "x": "198",
                "y": "470",
                "label": "Carmacks",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "214",
                "y": "398",
                "label": "Pelly Crossing",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "304",
                "y": "470",
                "label": "Faro"
            },
            {
                "id": "18",
                "x": "344",
                "y": "492",
                "label": "Ross River",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "WH",
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
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
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
		<entity id='CA.YT.NO'  />
		<entity id='CA.YT.ST'  />
		<entity id='CA.YT.KL'  />
		<entity id='CA.YT.KU'  />
		<entity id='CA.YT.WH'  />
		<entity id='CA.YT.CA'  />
		<entity id='CA.YT.WL'  />
	</data>
	<markers>
	<shapes>
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	   </shapes>
		<definition>
			<marker id='WH' x='210' y='584' label='Whitehorse' labelPos='right'  />
			<marker id='01' x='296' y='682' label='Teslin'  />
			<marker id='02' x='416' y='726' label='Watson Lake'  />
			<marker id='03' x='192' y='646' label='Carcross' labelPos='left'  />
			<marker id='04' x='112' y='524' label='Haines Junction'  />
			<marker id='06' x='72' y='422' label='Beaver Creek'  />
			<marker id='05' x='202' y='294' label='Dawson'  />
			<marker id='07' x='302' y='338' label='Keno Hill'  />
			<marker id='08' x='262' y='358' label='Mayo' labelPos='left'  />
			<marker id='10' x='254' y='128' label='Old Crow'  />
			<marker id='11' x='198' y='470' label='Carmacks' labelPos='left'  />
			<marker id='12' x='214' y='398' label='Pelly Crossing' labelPos='right'  />
			<marker id='13' x='304' y='470' label='Faro'  />
			<marker id='18' x='344' y='492' label='Ross River' labelPos='right'  />
		</definition>
		<application>
			<marker id='WH' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
