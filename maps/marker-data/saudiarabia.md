---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SaudiArabia

#### JavaScript Alias: maps/saudiarabia


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
            "id": "SA.BA"
        },
        {
            "id": "SA.HS"
        },
        {
            "id": "SA.JF"
        },
        {
            "id": "SA.MD"
        },
        {
            "id": "SA.QS"
        },
        {
            "id": "SA.RI"
        },
        {
            "id": "SA.SH"
        },
        {
            "id": "SA.AS"
        },
        {
            "id": "SA.HA"
        },
        {
            "id": "SA.JZ"
        },
        {
            "id": "SA.MK"
        },
        {
            "id": "SA.NJ"
        },
        {
            "id": "SA.TB"
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
                "id": "RI",
                "shapeid": "myCustomShape",
                "x": "213.07",
                "y": "204.62",
                "label": "Riyadh"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "264.29",
                "y": "98.08",
                "label": "Ra'al Khafji",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "291.95",
                "y": "131.89",
                "label": "Al Jubayl",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "296.04",
                "y": "140.08",
                "label": "Ad Dammam",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "283.75",
                "y": "169.79",
                "label": "Al Hufuf",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "47.12",
                "y": "90.91",
                "label": "Tabuk"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "114.73",
                "y": "102.18",
                "label": "Ha'il",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "30.73",
                "y": "108.32",
                "label": "Duba",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "71.7",
                "y": "182.08",
                "label": "Yanbu'al Bahr",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "155.7",
                "y": "126.76",
                "label": "Buraydah",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "110.63",
                "y": "163.64",
                "label": "Medina"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "88.09",
                "y": "235.35",
                "label": "Jiddah",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "107.56",
                "y": "238.42",
                "label": "Mecca"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "122.92",
                "y": "245.59",
                "label": "At Ta'if",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "151.6",
                "y": "333.69",
                "label": "Jizan",
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
        "showlabels": "0",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "SA.BA"
        },
        {
            "id": "SA.HS"
        },
        {
            "id": "SA.JF"
        },
        {
            "id": "SA.MD"
        },
        {
            "id": "SA.QS"
        },
        {
            "id": "SA.RI"
        },
        {
            "id": "SA.SH"
        },
        {
            "id": "SA.AS"
        },
        {
            "id": "SA.HA"
        },
        {
            "id": "SA.JZ"
        },
        {
            "id": "SA.MK"
        },
        {
            "id": "SA.NJ"
        },
        {
            "id": "SA.TB"
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
                "x": "264.29",
                "y": "98.08",
                "label": "Ra'al Khafji",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "291.95",
                "y": "131.89",
                "label": "Al Jubayl",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "296.04",
                "y": "140.08",
                "label": "Ad Dammam",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "283.75",
                "y": "169.79",
                "label": "Al Hufuf",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "47.12",
                "y": "90.91",
                "label": "Tabuk"
            },
            {
                "id": "06",
                "x": "114.73",
                "y": "102.18",
                "label": "Ha'il",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "155.7",
                "y": "126.76",
                "label": "Buraydah",
                "labelpos": "right"
            },
            {
                "id": "RI",
                "x": "213.07",
                "y": "204.62",
                "label": "Riyadh"
            },
            {
                "id": "07",
                "x": "30.73",
                "y": "108.32",
                "label": "Duba",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "71.7",
                "y": "182.08",
                "label": "Yanbu'al Bahr",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "110.63",
                "y": "163.64",
                "label": "Medina"
            },
            {
                "id": "11",
                "x": "88.09",
                "y": "235.35",
                "label": "Jiddah",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "107.56",
                "y": "238.42",
                "label": "Mecca"
            },
            {
                "id": "13",
                "x": "122.92",
                "y": "245.59",
                "label": "At Ta'if",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "151.6",
                "y": "333.69",
                "label": "Jizan",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "RI",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

    </div>
    <div class='tab old-xml-tab'>
<pre><code class="language-html">
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showLabels='0' showMarkerToolTip='1'  >
	<data>
		<entity id='SA.BA'  />
		<entity id='SA.HS'  />
		<entity id='SA.JF'  />
		<entity id='SA.MD'  />
		<entity id='SA.QS'  />
		<entity id='SA.RI'  />
		<entity id='SA.SH'  />
		<entity id='SA.AS'  />
		<entity id='SA.HA'  />
		<entity id='SA.JZ'  />
		<entity id='SA.MK'  />
		<entity id='SA.NJ'  />
		<entity id='SA.TB'  />
	</data>
	<markers>
	 <shapes>
	        <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showborder='0' radius='4'/>
			<shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='01' x='264.29' y='98.08' label="Ra'al Khafji" labelPos='right'  />
			<marker id='02' x='291.95' y='131.89' label='Al Jubayl' labelPos='right'  />
			<marker id='03' x='296.04' y='140.08' label='Ad Dammam' labelPos='left'  />
			<marker id='04' x='283.75' y='169.79' label='Al Hufuf' labelPos='right'  />
			<marker id='05' x='47.12' y='90.91' label='Tabuk'  />
			<marker id='06' x='114.73' y='102.18' label="Ha'il" labelPos='right'  />
			<marker id='09' x='155.7' y='126.76' label='Buraydah' labelPos='right'  />
			<marker id='RI' x='213.07' y='204.62' label='Riyadh'  />
			<marker id='07' x='30.73' y='108.32' label='Duba' labelPos='bottom'  />
			<marker id='08' x='71.7' y='182.08' label="Yanbu'al Bahr" labelPos='right'  />
			<marker id='10' x='110.63' y='163.64' label='Medina'  />
			<marker id='11' x='88.09' y='235.35' label='Jiddah' labelPos='left'  />
			<marker id='12' x='107.56' y='238.42' label='Mecca'  />
			<marker id='13' x='122.92' y='245.59' label="At Ta'if" labelPos='right'  />
			<marker id='14' x='151.6' y='333.69' label='Jizan' labelPos='left'  />
		</definition>
		<application>
		    <marker id='RI' shapeId='myCustomShape'  />
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
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
