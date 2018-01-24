---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Pakistan

#### JavaScript Alias: maps/pakistan


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
            "id": "PK.JK"
        },
        {
            "id": "PK.BA"
        },
        {
            "id": "PK.TA"
        },
        {
            "id": "PK.IS"
        },
        {
            "id": "PK.NA"
        },
        {
            "id": "PK.NW"
        },
        {
            "id": "PK.PB"
        },
        {
            "id": "PK.SD"
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
                "id": "IS",
                "shapeid": "myCustomShape",
                "x": "156.18",
                "y": "58.8",
                "label": "Islamabad",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "167.73",
                "y": "19.95",
                "label": "Gilgit"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "137.28",
                "y": "47.25",
                "label": "Peshawar",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "170.88",
                "y": "89.25",
                "label": "Lahore"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "141.48",
                "y": "86.1",
                "label": "Faisalabad",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "101.58",
                "y": "98.7",
                "label": "Zhob",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "31.23",
                "y": "121.8",
                "label": "Nok Kundi"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "24.93",
                "y": "171.15",
                "label": "Gwadar",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "59.58",
                "y": "172.2",
                "label": "Ormara"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "81.63",
                "y": "175.35",
                "label": "Karachi",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "104.73",
                "y": "156.45",
                "label": "Hyderabad",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "116.28",
                "y": "127.05",
                "label": "Sukkur"
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
            "id": "PK.JK"
        },
        {
            "id": "PK.BA"
        },
        {
            "id": "PK.TA"
        },
        {
            "id": "PK.IS"
        },
        {
            "id": "PK.NA"
        },
        {
            "id": "PK.NW"
        },
        {
            "id": "PK.PB"
        },
        {
            "id": "PK.SD"
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
                "id": "IS",
                "x": "156.18",
                "y": "58.8",
                "label": "Islamabad",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "167.73",
                "y": "19.95",
                "label": "Gilgit"
            },
            {
                "id": "02",
                "x": "137.28",
                "y": "47.25",
                "label": "Peshawar",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "170.88",
                "y": "89.25",
                "label": "Lahore"
            },
            {
                "id": "04",
                "x": "141.48",
                "y": "86.1",
                "label": "Faisalabad",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "101.58",
                "y": "98.7",
                "label": "Zhob",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "31.23",
                "y": "121.8",
                "label": "Nok Kundi"
            },
            {
                "id": "08",
                "x": "24.93",
                "y": "171.15",
                "label": "Gwadar",
                "labelpos": "bottom"
            },
            {
                "id": "07",
                "x": "59.58",
                "y": "172.2",
                "label": "Ormara"
            },
            {
                "id": "10",
                "x": "81.63",
                "y": "175.35",
                "label": "Karachi",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "104.73",
                "y": "156.45",
                "label": "Hyderabad",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "116.28",
                "y": "127.05",
                "label": "Sukkur"
            }
        ],
        "application": [
            {
                "id": "IS",
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
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1' showLabels='0' >
	<data>
		<entity id='PK.JK'  />
		<entity id='PK.BA'  />
		<entity id='PK.TA'  />
		<entity id='PK.IS'  />
		<entity id='PK.NA'  />
		<entity id='PK.NW'  />
		<entity id='PK.PB'  />
		<entity id='PK.SD'  />
	</data>
	<markers>
	 <shapes>
	     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	 </shapes>
		<definition>
			<marker id='IS' x='156.18' y='58.8' label='Islamabad' labelPos='left'  />
			<marker id='01' x='167.73' y='19.95' label='Gilgit'  />
			<marker id='02' x='137.28' y='47.25' label='Peshawar' labelPos='left'  />
			<marker id='03' x='170.88' y='89.25' label='Lahore'  />
			<marker id='04' x='141.48' y='86.1' label='Faisalabad' labelPos='left'  />
			<marker id='05' x='101.58' y='98.7' label='Zhob' labelPos='left'  />
			<marker id='06' x='31.23' y='121.8' label='Nok Kundi'  />
			<marker id='08' x='24.93' y='171.15' label='Gwadar' labelPos='bottom'  />
			<marker id='07' x='59.58' y='172.2' label='Ormara'  />
			<marker id='10' x='81.63' y='175.35' label='Karachi' labelPos='right'  />
			<marker id='11' x='104.73' y='156.45' label='Hyderabad' labelPos='right'  />
			<marker id='13' x='116.28' y='127.05' label='Sukkur'  />
		</definition>
		<application>
			<marker id='IS' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
