---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Oman

#### JavaScript Alias: maps/oman


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
            "id": "OM.DA"
        },
        {
            "id": "OM.ZA"
        },
        {
            "id": "OM.BA"
        },
        {
            "id": "OM.WU"
        },
        {
            "id": "OM.SH"
        },
        {
            "id": "OM.JA"
        },
        {
            "id": "OM.MU"
        },
        {
            "id": "OM.MA"
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
                "id": "MU",
                "shapeid": "myCustomShape",
                "x": "360",
                "y": "172.53",
                "label": "Muscat",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "352.84",
                "y": "168.44",
                "label": "Matrah",
                "labelpos": "top"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "343.63",
                "y": "168.44",
                "label": "Mina al Fahl",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "262.84",
                "y": "120.37",
                "label": "Suhar",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "403.97",
                "y": "226.73",
                "label": "Sur",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "241.36",
                "y": "187.87",
                "label": "Ibri"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "294.54",
                "y": "212.42",
                "label": "Nizwa"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "320.11",
                "y": "387.3",
                "label": "Duqm",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "127.84",
                "y": "538.67",
                "label": "Raysut",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "133.97",
                "y": "531.51",
                "label": "Salalah"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "136.02",
                "y": "475.26",
                "label": "Thamarit",
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
            "id": "OM.DA"
        },
        {
            "id": "OM.ZA"
        },
        {
            "id": "OM.BA"
        },
        {
            "id": "OM.WU"
        },
        {
            "id": "OM.SH"
        },
        {
            "id": "OM.JA"
        },
        {
            "id": "OM.MU"
        },
        {
            "id": "OM.MA"
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
                "id": "MU",
                "x": "360",
                "y": "172.53",
                "label": "Muscat",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "352.84",
                "y": "168.44",
                "label": "Matrah",
                "labelpos": "top"
            },
            {
                "id": "02",
                "x": "343.63",
                "y": "168.44",
                "label": "Mina al Fahl",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "262.84",
                "y": "120.37",
                "label": "Suhar",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "403.97",
                "y": "226.73",
                "label": "Sur",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "241.36",
                "y": "187.87",
                "label": "Ibri"
            },
            {
                "id": "07",
                "x": "294.54",
                "y": "212.42",
                "label": "Nizwa"
            },
            {
                "id": "08",
                "x": "320.11",
                "y": "387.3",
                "label": "Duqm",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "127.84",
                "y": "538.67",
                "label": "Raysut",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "133.97",
                "y": "531.51",
                "label": "Salalah"
            },
            {
                "id": "10",
                "x": "136.02",
                "y": "475.26",
                "label": "Thamarit",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "MU",
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
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
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
		<entity id='OM.DA'  />
		<entity id='OM.ZA'  />
		<entity id='OM.BA'  />
		<entity id='OM.WU'  />
		<entity id='OM.SH'  />
		<entity id='OM.JA'  />
		<entity id='OM.MU'  />
		<entity id='OM.MA'  />
	</data>
	<markers>
	     <shapes>
	        <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showborder='0' radius='4'/>
			<shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='MU' x='360' y='172.53' label='Muscat' labelPos='right'  />
			<marker id='01' x='352.84' y='168.44' label='Matrah' labelPos='top'  />
			<marker id='02' x='343.63' y='168.44' label='Mina al Fahl' labelPos='left'  />
			<marker id='03' x='262.84' y='120.37' label='Suhar' labelpos='left' />
			<marker id='04' x='403.97' y='226.73' label='Sur' labelpos='left' />
			<marker id='06' x='241.36' y='187.87' label='Ibri'  />
			<marker id='07' x='294.54' y='212.42' label='Nizwa'  />
			<marker id='08' x='320.11' y='387.3' label='Duqm' labelPos='right'  />
			<marker id='05' x='127.84' y='538.67' label='Raysut' labelPos='right'  />
			<marker id='09' x='133.97' y='531.51' label='Salalah'  />
			<marker id='10' x='136.02' y='475.26' label='Thamarit' labelPos='right'  />
		</definition>
		<application>
			<marker id='MU' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
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
