---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: VaticanCity

#### JavaScript Alias: maps/vaticancity


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
            "id": "EU.VA"
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
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "189.76",
                "y": "44.59",
                "label": "Vatican Museums"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "256.65",
                "y": "70.94",
                "label": "Belvedere Palace"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "291.11",
                "y": "191.21",
                "label": "St. Peter's Square",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "284.35",
                "y": "172.97",
                "label": "Obelisk"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "264.76",
                "y": "150.67",
                "label": "Vatican Palace"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "209.35",
                "y": "146.62",
                "label": "Sistine Chapel"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "189.08",
                "y": "174.32",
                "label": "St.Peter's Basilica"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "191.79",
                "y": "201.35",
                "label": "Sacristy"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "207.33",
                "y": "229.72",
                "label": "Audience Hall",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "60.7",
                "y": "189.18",
                "label": "Radio Station"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "85.7",
                "y": "158.78",
                "label": "Ethiopian College",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "141.11",
                "y": "141.21",
                "label": "Government Palace",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "213.41",
                "y": "116.21",
                "label": "Borgia Apartment"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "211.38",
                "y": "83.78",
                "label": "Vatican Apostolic Library",
                "labelpos": "right"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "173.54",
                "y": "90.54",
                "label": "Academy of Sciences",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "139.76",
                "y": "104.72",
                "label": "Vatican Gardens",
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
            "id": "EU.VA"
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
                "id": "01",
                "x": "189.76",
                "y": "44.59",
                "label": "Vatican Museums"
            },
            {
                "id": "02",
                "x": "256.65",
                "y": "70.94",
                "label": "Belvedere Palace"
            },
            {
                "id": "03",
                "x": "291.11",
                "y": "191.21",
                "label": "St. Peter's Square",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "x": "284.35",
                "y": "172.97",
                "label": "Obelisk"
            },
            {
                "id": "05",
                "x": "264.76",
                "y": "150.67",
                "label": "Vatican Palace"
            },
            {
                "id": "06",
                "x": "209.35",
                "y": "146.62",
                "label": "Sistine Chapel"
            },
            {
                "id": "07",
                "x": "189.08",
                "y": "174.32",
                "label": "St.Peter's Basilica"
            },
            {
                "id": "08",
                "x": "191.79",
                "y": "201.35",
                "label": "Sacristy"
            },
            {
                "id": "09",
                "x": "207.33",
                "y": "229.72",
                "label": "Audience Hall",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "60.7",
                "y": "189.18",
                "label": "Radio Station"
            },
            {
                "id": "11",
                "x": "85.7",
                "y": "158.78",
                "label": "Ethiopian College",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "141.11",
                "y": "141.21",
                "label": "Government Palace",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "213.41",
                "y": "116.21",
                "label": "Borgia Apartment"
            },
            {
                "id": "14",
                "x": "211.38",
                "y": "83.78",
                "label": "Vatican Apostolic Library",
                "labelpos": "right"
            },
            {
                "id": "15",
                "x": "173.54",
                "y": "90.54",
                "label": "Academy of Sciences",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "139.76",
                "y": "104.72",
                "label": "Vatican Gardens",
                "labelpos": "left"
            }
        ],
        "application": [
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
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
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
		<entity id='EU.VA'  />
	</data>
	<markers>
	<shapes>
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	   </shapes>
		<definition>
			<marker id='01' x='189.76' y='44.59' label='Vatican Museums'  />
			<marker id='02' x='256.65' y='70.94' label='Belvedere Palace'  />
			<marker id='03' x='291.11' y='191.21' label='St. Peter&apos;s Square' labelPos='bottom'  />
			<marker id='04' x='284.35' y='172.97' label='Obelisk'  />
			<marker id='05' x='264.76' y='150.67' label='Vatican Palace'  />
			<marker id='06' x='209.35' y='146.62' label='Sistine Chapel'  />
			<marker id='07' x='189.08' y='174.32' label='St.Peter&apos;s Basilica'  />
			<marker id='08' x='191.79' y='201.35' label='Sacristy'  />
			<marker id='09' x='207.33' y='229.72' label='Audience Hall' labelPos='right'  />
			<marker id='10' x='60.7' y='189.18' label='Radio Station'  />
			<marker id='11' x='85.7' y='158.78' label='Ethiopian College' labelPos='right'  />
			<marker id='12' x='141.11' y='141.21' label='Government Palace' labelPos='left'  />
			<marker id='13' x='213.41' y='116.21' label='Borgia Apartment'  />
			<marker id='14' x='211.38' y='83.78' label='Vatican Apostolic Library' labelPos='right'  />
			<marker id='15' x='173.54' y='90.54' label='Academy of Sciences' labelPos='left'  />
			<marker id='16' x='139.76' y='104.72' label='Vatican Gardens' labelPos='left'  />
		</definition>
		<application>
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
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
