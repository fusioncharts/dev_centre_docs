---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Qatar

#### JavaScript Alias: maps/qatar


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
            "id": "QA.DA"
        },
        {
            "id": "QA.GH"
        },
        {
            "id": "QA.JU"
        },
        {
            "id": "QA.KH"
        },
        {
            "id": "QA.WA"
        },
        {
            "id": "QA.RA"
        },
        {
            "id": "QA.JB"
        },
        {
            "id": "QA.MS"
        },
        {
            "id": "QA.US"
        },
        {
            "id": "QA.ME"
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
                "id": "DO",
                "shapeid": "myCustomShape",
                "x": "184.16",
                "y": "232.36",
                "label": "Doha",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "203.1",
                "y": "260.78",
                "label": "Al Wakrah",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "185.21",
                "y": "307.08",
                "label": "Umm Sa'id",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "31.57",
                "y": "236.57",
                "label": "Umm Bab",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "25.25",
                "y": "196.58",
                "label": "Dukhan",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "177.85",
                "y": "132.38",
                "label": "Al Khawr"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "90.5",
                "y": "37.67",
                "label": "Al Khuwayr",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "116.81",
                "y": "18.73",
                "label": "Ar Ru'ays",
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
            "id": "QA.DA"
        },
        {
            "id": "QA.GH"
        },
        {
            "id": "QA.JU"
        },
        {
            "id": "QA.KH"
        },
        {
            "id": "QA.WA"
        },
        {
            "id": "QA.RA"
        },
        {
            "id": "QA.JB"
        },
        {
            "id": "QA.MS"
        },
        {
            "id": "QA.US"
        },
        {
            "id": "QA.ME"
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
                "id": "DO",
                "x": "184.16",
                "y": "232.36",
                "label": "Doha",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "203.1",
                "y": "260.78",
                "label": "Al Wakrah",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "185.21",
                "y": "307.08",
                "label": "Umm Sa'id",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "31.57",
                "y": "236.57",
                "label": "Umm Bab",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "25.25",
                "y": "196.58",
                "label": "Dukhan",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "177.85",
                "y": "132.38",
                "label": "Al Khawr"
            },
            {
                "id": "08",
                "x": "90.5",
                "y": "37.67",
                "label": "Al Khuwayr",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "116.81",
                "y": "18.73",
                "label": "Ar Ru'ays",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "DO",
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
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1' showLabels='0'  >
	<data>
		<entity id='QA.DA'  />
		<entity id='QA.GH'  />
		<entity id='QA.JU'  />
		<entity id='QA.KH'  />
		<entity id='QA.WA'  />
		<entity id='QA.RA'  />
		<entity id='QA.JB'  />
		<entity id='QA.MS'  />
		<entity id='QA.US'  />
		<entity id='QA.ME'  />
	</data>
	<markers>
	 <shapes>
	        <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showborder='0' radius='4'/>
			<shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='DO' x='184.16' y='232.36' label='Doha' labelPos='left'  />
			<marker id='01' x='203.1' y='260.78' label='Al Wakrah' labelPos='left'  />
			<marker id='02' x='185.21' y='307.08' label="Umm Sa'id"  labelPos='left'/>
			<marker id='04' x='31.57' y='236.57' label='Umm Bab' labelPos='right' />
			<marker id='05' x='25.25' y='196.58' label='Dukhan' labelPos='right' />
			<marker id='06' x='177.85' y='132.38' label='Al Khawr'  />
			<marker id='08' x='90.5' y='37.67' label='Al Khuwayr' labelPos='left'  />
			<marker id='09' x='116.81' y='18.73' label="Ar Ru'ays" labelPos='right'  />
		</definition>
		<application>
			<marker id='DO' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
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
