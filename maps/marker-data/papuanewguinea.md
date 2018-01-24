---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: PapuaNewGuinea

#### JavaScript Alias: maps/papuanewguinea


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
            "id": "PG.CE"
        },
        {
            "id": "PG.CH"
        },
        {
            "id": "PG.EH"
        },
        {
            "id": "PG.EN"
        },
        {
            "id": "PG.ES"
        },
        {
            "id": "PG.EG"
        },
        {
            "id": "PG.GU"
        },
        {
            "id": "PG.MD"
        },
        {
            "id": "PG.MN"
        },
        {
            "id": "PG.MB"
        },
        {
            "id": "PG.MR"
        },
        {
            "id": "PG.NC"
        },
        {
            "id": "PG.NI"
        },
        {
            "id": "PG.NO"
        },
        {
            "id": "PG.NS"
        },
        {
            "id": "PG.SA"
        },
        {
            "id": "PG.SH"
        },
        {
            "id": "PG.WE"
        },
        {
            "id": "PG.WH"
        },
        {
            "id": "PG.WN"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "PM",
                "shapeid": "myCustomShape",
                "x": "337.93",
                "y": "433.74",
                "label": "Port Moresby",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "315.53",
                "y": "296.29",
                "label": "Lae",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "288.04",
                "y": "271.85",
                "label": "Goroka",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "222.88",
                "y": "259.63",
                "label": "Mount Hagen",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "122.08",
                "y": "412.36",
                "label": "Daru",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "252.4",
                "y": "212.8",
                "label": "Madang"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "72.18",
                "y": "106.9",
                "label": "Wewak"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "589.42",
                "y": "161.89",
                "label": "Rabaul"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "769.64",
                "y": "267.78",
                "label": "Kieta"
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
            "id": "PG.CE"
        },
        {
            "id": "PG.CH"
        },
        {
            "id": "PG.EH"
        },
        {
            "id": "PG.EN"
        },
        {
            "id": "PG.ES"
        },
        {
            "id": "PG.EG"
        },
        {
            "id": "PG.GU"
        },
        {
            "id": "PG.MD"
        },
        {
            "id": "PG.MN"
        },
        {
            "id": "PG.MB"
        },
        {
            "id": "PG.MR"
        },
        {
            "id": "PG.NC"
        },
        {
            "id": "PG.NI"
        },
        {
            "id": "PG.NO"
        },
        {
            "id": "PG.NS"
        },
        {
            "id": "PG.SA"
        },
        {
            "id": "PG.SH"
        },
        {
            "id": "PG.WE"
        },
        {
            "id": "PG.WH"
        },
        {
            "id": "PG.WN"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "PM",
                "x": "337.93",
                "y": "433.74",
                "label": "Port Moresby",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "315.53",
                "y": "296.29",
                "label": "Lae",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "288.04",
                "y": "271.85",
                "label": "Goroka",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "222.88",
                "y": "259.63",
                "label": "Mount Hagen",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "122.08",
                "y": "412.36",
                "label": "Daru",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "252.4",
                "y": "212.8",
                "label": "Madang"
            },
            {
                "id": "08",
                "x": "72.18",
                "y": "106.9",
                "label": "Wewak"
            },
            {
                "id": "09",
                "x": "589.42",
                "y": "161.89",
                "label": "Rabaul"
            },
            {
                "id": "10",
                "x": "769.64",
                "y": "267.78",
                "label": "Kieta"
            }
        ],
        "application": [
            {
                "id": "PM",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='PG.CE'  />
		<entity id='PG.CH'  />
		<entity id='PG.EH'  />
		<entity id='PG.EN'  />
		<entity id='PG.ES'  />
		<entity id='PG.EG'  />
		<entity id='PG.GU'  />
		<entity id='PG.MD'  />
		<entity id='PG.MN'  />
		<entity id='PG.MB'  />
		<entity id='PG.MR'  />
		<entity id='PG.NC'  />
		<entity id='PG.NI'  />
		<entity id='PG.NO'  />
		<entity id='PG.NS'  />
		<entity id='PG.SA'  />
		<entity id='PG.SH'  />
		<entity id='PG.WE'  />
		<entity id='PG.WH'  />
		<entity id='PG.WN'  />
	</data>
	<markers>
	  <shapes>
	      <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='000000' radius='4'/>
		  <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='000000' radius='3'/>
		</shapes>
		<definition>
			<marker id='PM' x='337.93' y='433.74' label='Port Moresby' labelPos='left'  />
			<marker id='01' x='315.53' y='296.29' label='Lae' labelPos='left'  />
			<marker id='02' x='288.04' y='271.85' label='Goroka' labelPos='left'  />
			<marker id='03' x='222.88' y='259.63' label='Mount Hagen' labelPos='left'  />
			<marker id='04' x='122.08' y='412.36' label='Daru' labelPos='left'  />
			<marker id='05' x='252.4' y='212.8' label='Madang'  />
			<marker id='08' x='72.18' y='106.9' label='Wewak'  />
			<marker id='09' x='589.42' y='161.89' label='Rabaul'  />
			<marker id='10' x='769.64' y='267.78' label='Kieta'  />
		</definition>
		<application>
			<marker id='PM' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
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
