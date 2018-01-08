---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: EastTimor

#### JavaScript Alias: maps/easttimor


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
            "id": "TL.AL"
        },
        {
            "id": "TL.AN"
        },
        {
            "id": "TL.AM"
        },
        {
            "id": "TL.BC"
        },
        {
            "id": "TL.BB"
        },
        {
            "id": "TL.CL"
        },
        {
            "id": "TL.DL"
        },
        {
            "id": "TL.ER"
        },
        {
            "id": "TL.BT"
        },
        {
            "id": "TL.LQ"
        },
        {
            "id": "TL.MT"
        },
        {
            "id": "TL.MF"
        },
        {
            "id": "TL.VQ"
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
                "id": "DI",
                "shapeid": "myCustomShape",
                "x": "517.75",
                "y": "143.11",
                "label": "Dili"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "633.26",
                "y": "136.97",
                "label": "Manatuto"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "766.15",
                "y": "113.46",
                "label": "Baucua"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "929.71",
                "y": "145.15",
                "label": "Los Palos",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "731.4",
                "y": "256.57",
                "label": "Viqueque"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "525.93",
                "y": "277.02",
                "label": "Same",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "477.88",
                "y": "288.26",
                "label": "Ainaro",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "372.6",
                "y": "396.62",
                "label": "Suai"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "346.02",
                "y": "279.06",
                "label": "Maliana"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "427.8",
                "y": "235.11",
                "label": "Ermera"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "87.4",
                "y": "357.77",
                "label": "Pante Makasar"
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
        "showshowmarkertooltip": "1"
    },
    "data": [
        {
            "id": "TL.AL"
        },
        {
            "id": "TL.AN"
        },
        {
            "id": "TL.AM"
        },
        {
            "id": "TL.BC"
        },
        {
            "id": "TL.BB"
        },
        {
            "id": "TL.CL"
        },
        {
            "id": "TL.DL"
        },
        {
            "id": "TL.ER"
        },
        {
            "id": "TL.BT"
        },
        {
            "id": "TL.LQ"
        },
        {
            "id": "TL.MT"
        },
        {
            "id": "TL.MF"
        },
        {
            "id": "TL.VQ"
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
                "id": "DI",
                "x": "517.75",
                "y": "143.11",
                "label": "Dili"
            },
            {
                "id": "01",
                "x": "633.26",
                "y": "136.97",
                "label": "Manatuto"
            },
            {
                "id": "02",
                "x": "766.15",
                "y": "113.46",
                "label": "Baucua"
            },
            {
                "id": "03",
                "x": "929.71",
                "y": "145.15",
                "label": "Los Palos",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "731.4",
                "y": "256.57",
                "label": "Viqueque"
            },
            {
                "id": "06",
                "x": "525.93",
                "y": "277.02",
                "label": "Same",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "477.88",
                "y": "288.26",
                "label": "Ainaro",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "372.6",
                "y": "396.62",
                "label": "Suai"
            },
            {
                "id": "10",
                "x": "346.02",
                "y": "279.06",
                "label": "Maliana"
            },
            {
                "id": "12",
                "x": "427.8",
                "y": "235.11",
                "label": "Ermera"
            },
            {
                "id": "13",
                "x": "87.4",
                "y": "357.77",
                "label": "Pante Makasar"
            }
        ],
        "application": [
            {
                "id": "DI",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1'  fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showshowMarkerToolTip='1'>
	<data>
		<entity id='TL.AL'  />
		<entity id='TL.AN'  />
		<entity id='TL.AM'  />
		<entity id='TL.BC'  />
		<entity id='TL.BB'  />
		<entity id='TL.CL'  />
		<entity id='TL.DL'  />
		<entity id='TL.ER'  />
		<entity id='TL.BT'  />
		<entity id='TL.LQ'  />
		<entity id='TL.MT'  />
		<entity id='TL.MF'  />
		<entity id='TL.VQ'  />
	</data>
	<markers>
	   <shapes>
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'   fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='DI' x='517.75' y='143.11' label='Dili' />
			<marker id='01' x='633.26' y='136.97' label='Manatuto'  />
			<marker id='02' x='766.15' y='113.46' label='Baucua'  />
			<marker id='03' x='929.71' y='145.15' label='Los Palos' labelPos='right'  />
			<marker id='05' x='731.4' y='256.57' label='Viqueque'  />
			<marker id='06' x='525.93' y='277.02' label='Same' labelPos='right'  />
			<marker id='07' x='477.88' y='288.26' label='Ainaro' labelPos='right'  />
			<marker id='08' x='372.6' y='396.62' label='Suai'  />
			<marker id='10' x='346.02' y='279.06' label='Maliana'  />
			<marker id='12' x='427.8' y='235.11' label='Ermera'  />
			<marker id='13' x='87.4' y='357.77' label='Pante Makasar'  />
		</definition>
		<application>
			<marker id='DI' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
		</application>
	</markers>



</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
