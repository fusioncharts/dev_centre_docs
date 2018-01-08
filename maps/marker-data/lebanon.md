---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Lebanon

#### JavaScript Alias: maps/lebanon


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
            "id": "LE.NA"
        },
        {
            "id": "LE.BA"
        },
        {
            "id": "LE.BI"
        },
        {
            "id": "LE.JL"
        },
        {
            "id": "LE.AS"
        },
        {
            "id": "LE.JA"
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
                "id": "BE",
                "shapeid": "myCustomShape",
                "x": "92.9",
                "y": "207.12",
                "label": "Beirut",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "109.41",
                "y": "200.92",
                "label": "Antilyas",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "116.64",
                "y": "185.44",
                "label": "Jounie",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "122.83",
                "y": "155.5",
                "label": "Jbail",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "123.87",
                "y": "117.31",
                "label": "Batroun",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "135.22",
                "y": "103.89",
                "label": "Chekka",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "158.96",
                "y": "80.15",
                "label": "Tripoli",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "152.77",
                "y": "72.92",
                "label": "El Mina",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "254.96",
                "y": "83.25",
                "label": "Hermel",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "237.41",
                "y": "173.05",
                "label": "Baalbeck",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "192",
                "y": "218.47",
                "label": "Zahle",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "70.19",
                "y": "278.34",
                "label": "Sidon",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "59.87",
                "y": "295.89",
                "label": "Ez Zahrani",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "36.12",
                "y": "346.47",
                "label": "Tyre",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "22.7",
                "y": "381.57",
                "label": "Naqoura"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "123.87",
                "y": "283.5",
                "label": "Jazzin"
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
            "id": "LE.NA"
        },
        {
            "id": "LE.BA"
        },
        {
            "id": "LE.BI"
        },
        {
            "id": "LE.JL"
        },
        {
            "id": "LE.AS"
        },
        {
            "id": "LE.JA"
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
                "id": "BE",
                "x": "92.9",
                "y": "207.12",
                "label": "Beirut",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "109.41",
                "y": "200.92",
                "label": "Antilyas",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "116.64",
                "y": "185.44",
                "label": "Jounie",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "122.83",
                "y": "155.5",
                "label": "Jbail",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "123.87",
                "y": "117.31",
                "label": "Batroun",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "135.22",
                "y": "103.89",
                "label": "Chekka",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "158.96",
                "y": "80.15",
                "label": "Tripoli",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "152.77",
                "y": "72.92",
                "label": "El Mina",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "254.96",
                "y": "83.25",
                "label": "Hermel",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "237.41",
                "y": "173.05",
                "label": "Baalbeck",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "192",
                "y": "218.47",
                "label": "Zahle",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "70.19",
                "y": "278.34",
                "label": "Sidon",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "59.87",
                "y": "295.89",
                "label": "Ez Zahrani",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "36.12",
                "y": "346.47",
                "label": "Tyre",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "22.7",
                "y": "381.57",
                "label": "Naqoura"
            },
            {
                "id": "16",
                "x": "123.87",
                "y": "283.5",
                "label": "Jazzin"
            }
        ],
        "application": [
            {
                "id": "BE",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
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
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='LE.NA'  />
		<entity id='LE.BA'  />
		<entity id='LE.BI'  />
		<entity id='LE.JL'  />
		<entity id='LE.AS'  />
		<entity id='LE.JA'  />
	</data>
	<markers>
	 <shapes>

		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial'
showBorder='0' radius='3'/>
      </shapes>
		<definition>
			<marker id='BE' x='92.9' y='207.12' label='Beirut' labelPos='left'  />
			<marker id='01' x='109.41' y='200.92' label='Antilyas' labelPos='right'  />
			<marker id='03' x='116.64' y='185.44' label='Jounie' labelPos='left'  />
			<marker id='02' x='122.83' y='155.5' label='Jbail' labelPos='left'  />
			<marker id='04' x='123.87' y='117.31' label='Batroun' labelPos='left'  />
			<marker id='05' x='135.22' y='103.89' label='Chekka' labelPos='left'  />
			<marker id='06' x='158.96' y='80.15' label='Tripoli' labelPos='right'  />
			<marker id='07' x='152.77' y='72.92' label='El Mina' labelPos='left'  />
			<marker id='08' x='254.96' y='83.25' label='Hermel' labelPos='right'  />
			<marker id='09' x='237.41' y='173.05' label='Baalbeck' labelPos='right'  />
			<marker id='10' x='192' y='218.47' label='Zahle' labelPos='right'  />
			<marker id='11' x='70.19' y='278.34' label='Sidon' labelPos='left'  />
			<marker id='13' x='59.87' y='295.89' label='Ez Zahrani' labelPos='right'  />
			<marker id='12' x='36.12' y='346.47' label='Tyre' labelPos='left'  />
			<marker id='14' x='22.7' y='381.57' label='Naqoura'  />
			<marker id='16' x='123.87' y='283.5' label='Jazzin'  />
		</definition>
		<application>
			<marker id='BE' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
