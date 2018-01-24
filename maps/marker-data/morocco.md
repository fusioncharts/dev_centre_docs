---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Morocco

#### JavaScript Alias: maps/morocco


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
            "id": "MA.CO"
        },
        {
            "id": "MA.DA"
        },
        {
            "id": "MA.FB"
        },
        {
            "id": "MA.GB"
        },
        {
            "id": "MA.GC"
        },
        {
            "id": "MA.GE"
        },
        {
            "id": "MA.LB"
        },
        {
            "id": "MA.MK"
        },
        {
            "id": "MA.MT"
        },
        {
            "id": "MA.OR"
        },
        {
            "id": "MA.OL"
        },
        {
            "id": "MA.RZ"
        },
        {
            "id": "MA.SM"
        },
        {
            "id": "MA.TD"
        },
        {
            "id": "MA.TO"
        },
        {
            "id": "MA.TH"
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
                "id": "RB",
                "shapeid": "myCustomShape",
                "x": "252.47",
                "y": "64.55",
                "label": "Rabat",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "277.1",
                "y": "16.31",
                "label": "Tangier",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "289.42",
                "y": "23.5",
                "label": "Ceuta Tetouan",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "361.26",
                "y": "61.47",
                "label": "Oujda",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "215.52",
                "y": "126.13",
                "label": "Marrakech",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "204.23",
                "y": "101.5",
                "label": "Safi",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "195",
                "y": "152.81",
                "label": "Agadir",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "17.44",
                "y": "358.08",
                "label": "Tarfaya",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "232.97",
                "y": "166.16",
                "label": "Ouarzazat",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "358.18",
                "y": "102.52",
                "label": "Bou Arfa",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "263.76",
                "y": "51.21",
                "label": "Kenitra",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "270.94",
                "y": "86.1",
                "label": "Meknes",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "292.5",
                "y": "66.6",
                "label": "Fes",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "217.57",
                "y": "85.08",
                "label": "El Jadida",
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
            "id": "MA.CO"
        },
        {
            "id": "MA.DA"
        },
        {
            "id": "MA.FB"
        },
        {
            "id": "MA.GB"
        },
        {
            "id": "MA.GC"
        },
        {
            "id": "MA.GE"
        },
        {
            "id": "MA.LB"
        },
        {
            "id": "MA.MK"
        },
        {
            "id": "MA.MT"
        },
        {
            "id": "MA.OR"
        },
        {
            "id": "MA.OL"
        },
        {
            "id": "MA.RZ"
        },
        {
            "id": "MA.SM"
        },
        {
            "id": "MA.TD"
        },
        {
            "id": "MA.TO"
        },
        {
            "id": "MA.TH"
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
                "id": "RB",
                "x": "252.47",
                "y": "64.55",
                "label": "Rabat",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "277.1",
                "y": "16.31",
                "label": "Tangier",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "289.42",
                "y": "23.5",
                "label": "Ceuta Tetouan",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "361.26",
                "y": "61.47",
                "label": "Oujda",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "215.52",
                "y": "126.13",
                "label": "Marrakech",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "204.23",
                "y": "101.5",
                "label": "Safi",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "195",
                "y": "152.81",
                "label": "Agadir",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "17.44",
                "y": "358.08",
                "label": "Tarfaya",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "232.97",
                "y": "166.16",
                "label": "Ouarzazat",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "358.18",
                "y": "102.52",
                "label": "Bou Arfa",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "263.76",
                "y": "51.21",
                "label": "Kenitra",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "270.94",
                "y": "86.1",
                "label": "Meknes",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "292.5",
                "y": "66.6",
                "label": "Fes",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "217.57",
                "y": "85.08",
                "label": "El Jadida",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "RB",
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
            },
            {
                "id": "12",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='MA.CO'  />
		<entity id='MA.DA'  />
		<entity id='MA.FB'  />
		<entity id='MA.GB'  />
		<entity id='MA.GC'  />
		<entity id='MA.GE'  />
		<entity id='MA.LB'  />
		<entity id='MA.MK'  />
		<entity id='MA.MT'  />
		<entity id='MA.OR'  />
		<entity id='MA.OL'  />
		<entity id='MA.RZ'  />
		<entity id='MA.SM'  />
		<entity id='MA.TD'  />
		<entity id='MA.TO'  />
		<entity id='MA.TH'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='RB' x='252.47' y='64.55' label='Rabat' labelPos='left'  />
			<marker id='01' x='277.1' y='16.31' label='Tangier' labelPos='left'  />
			<marker id='02' x='289.42' y='23.5' label='Ceuta Tetouan' labelPos='right'  />
			<marker id='03' x='361.26' y='61.47' label='Oujda' labelPos='left'  />
			<marker id='04' x='215.52' y='126.13' label='Marrakech' labelPos='left'  />
			<marker id='05' x='204.23' y='101.5' label='Safi' labelPos='left'  />
			<marker id='06' x='195' y='152.81' label='Agadir' labelPos='left'  />
			<marker id='07' x='17.44' y='358.08' label='Tarfaya' labelPos='right'  />
			<marker id='08' x='232.97' y='166.16' label='Ouarzazat' labelPos='right'  />
			<marker id='09' x='358.18' y='102.52' label='Bou Arfa' labelPos='left'  />
			<marker id='10' x='263.76' y='51.21' label='Kenitra' labelPos='left'  />
			<marker id='12' x='270.94' y='86.1' label='Meknes' labelPos='right'  />
			<marker id='11' x='292.5' y='66.6' label='Fes' labelPos='right'  />
			<marker id='13' x='217.57' y='85.08' label='El Jadida' labelPos='left'  />
		</definition>
		<application>
			<marker id='RB' shapeId='myCustomShape'  />
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
			<marker id='12' shapeId='newCustomShape'  />
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
