---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: HongKong

#### JavaScript Alias: maps/hongkong


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
            "id": "HK.CW"
        },
        {
            "id": "HK.EA"
        },
        {
            "id": "HK.IS"
        },
        {
            "id": "HK.KC"
        },
        {
            "id": "HK.KI"
        },
        {
            "id": "HK.KU"
        },
        {
            "id": "HK.NO"
        },
        {
            "id": "HK.SK"
        },
        {
            "id": "HK.SS"
        },
        {
            "id": "HK.ST"
        },
        {
            "id": "HK.SO"
        },
        {
            "id": "HK.TP"
        },
        {
            "id": "HK.TW"
        },
        {
            "id": "HK.TM"
        },
        {
            "id": "HK.WC"
        },
        {
            "id": "HK.WT"
        },
        {
            "id": "HK.YT"
        },
        {
            "id": "HK.YL"
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
                "id": "VI",
                "shapeid": "myCustomShape",
                "x": "426.9",
                "y": "402.79",
                "label": "Victory"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "440.12",
                "y": "447.54",
                "label": "Aberdeen",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "453.34",
                "y": "373.29",
                "label": "Kowloon",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "375.02",
                "y": "283.78",
                "label": "Tsuen Wan"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "417.74",
                "y": "57.97",
                "label": "Sheung Shui",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "183.79",
                "y": "262.42",
                "label": "Tuen Mun"
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
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "HK.CW"
        },
        {
            "id": "HK.EA"
        },
        {
            "id": "HK.IS"
        },
        {
            "id": "HK.KC"
        },
        {
            "id": "HK.KI"
        },
        {
            "id": "HK.KU"
        },
        {
            "id": "HK.NO"
        },
        {
            "id": "HK.SK"
        },
        {
            "id": "HK.SS"
        },
        {
            "id": "HK.ST"
        },
        {
            "id": "HK.SO"
        },
        {
            "id": "HK.TP"
        },
        {
            "id": "HK.TW"
        },
        {
            "id": "HK.TM"
        },
        {
            "id": "HK.WC"
        },
        {
            "id": "HK.WT"
        },
        {
            "id": "HK.YT"
        },
        {
            "id": "HK.YL"
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
                "id": "VI",
                "x": "426.9",
                "y": "402.79",
                "label": "Victory"
            },
            {
                "id": "01",
                "x": "440.12",
                "y": "447.54",
                "label": "Aberdeen",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "453.34",
                "y": "373.29",
                "label": "Kowloon",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "375.02",
                "y": "283.78",
                "label": "Tsuen Wan"
            },
            {
                "id": "07",
                "x": "417.74",
                "y": "57.97",
                "label": "Sheung Shui",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "183.79",
                "y": "262.42",
                "label": "Tuen Mun"
            }
        ],
        "application": [
            {
                "id": "VI",
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
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='HK.CW'  />
		<entity id='HK.EA'  />
		<entity id='HK.IS'  />
		<entity id='HK.KC'  />
		<entity id='HK.KI'  />
		<entity id='HK.KU'  />
		<entity id='HK.NO'  />
		<entity id='HK.SK'  />
		<entity id='HK.SS'  />
		<entity id='HK.ST'  />
		<entity id='HK.SO'  />
		<entity id='HK.TP'  />
		<entity id='HK.TW'  />
		<entity id='HK.TM'  />
		<entity id='HK.WC'  />
		<entity id='HK.WT'  />
		<entity id='HK.YT'  />
		<entity id='HK.YL'  />
	</data>
	<markers>
	  <shapes>
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'   fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='VI' x='426.9' y='402.79' label='Victory'  />
			<marker id='01' x='440.12' y='447.54' label='Aberdeen' labelPos='left'  />
			<marker id='02' x='453.34' y='373.29' label='Kowloon' labelPos='right'  />
			<marker id='04' x='375.02' y='283.78' label='Tsuen Wan'  />
			<marker id='07' x='417.74' y='57.97' label='Sheung Shui' labelPos='right'  />
			<marker id='06' x='183.79' y='262.42' label='Tuen Mun'  />
		</definition>
		<application>
			<marker id='VI' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
