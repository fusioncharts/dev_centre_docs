---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Kyrgyzstan

#### JavaScript Alias: maps/kyrgyzstan


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
            "id": "KG.BA"
        },
        {
            "id": "KG.GB"
        },
        {
            "id": "KG.CU"
        },
        {
            "id": "KG.YK"
        },
        {
            "id": "KG.DA"
        },
        {
            "id": "KG.NA"
        },
        {
            "id": "KG.OS"
        },
        {
            "id": "KG.TL"
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
                "id": "BI",
                "shapeid": "myCustomShape",
                "x": "382.61",
                "y": "55.56",
                "label": "Bishkek",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "345.57",
                "y": "67.91",
                "label": "Kara-Balta",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "234.44",
                "y": "66.88",
                "label": "Talas",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "257.08",
                "y": "170.8",
                "label": "Kara-Kol",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "270.45",
                "y": "214.02",
                "label": "Jalal-Abad"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "295.15",
                "y": "230.48",
                "label": "Ozgon",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "264.28",
                "y": "257.23",
                "label": "Osh"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "217.98",
                "y": "274.72",
                "label": "Kyzyl-Kyya",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "288.97",
                "y": "311.77",
                "label": "Sary-Tash"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "443.32",
                "y": "185.21",
                "label": "Naryn"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "440.23",
                "y": "57.62",
                "label": "Tokmok"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "474.19",
                "y": "84.37",
                "label": "Balykchy"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "614.12",
                "y": "87.46",
                "label": "Karakol"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "145.95",
                "y": "295.3",
                "label": "So'x",
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
            "id": "KG.BA"
        },
        {
            "id": "KG.GB"
        },
        {
            "id": "KG.CU"
        },
        {
            "id": "KG.YK"
        },
        {
            "id": "KG.DA"
        },
        {
            "id": "KG.NA"
        },
        {
            "id": "KG.OS"
        },
        {
            "id": "KG.TL"
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
                "id": "BI",
                "x": "382.61",
                "y": "55.56",
                "label": "Bishkek",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "345.57",
                "y": "67.91",
                "label": "Kara-Balta",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "234.44",
                "y": "66.88",
                "label": "Talas",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "257.08",
                "y": "170.8",
                "label": "Kara-Kol",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "270.45",
                "y": "214.02",
                "label": "Jalal-Abad"
            },
            {
                "id": "05",
                "x": "295.15",
                "y": "230.48",
                "label": "Ozgon",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "264.28",
                "y": "257.23",
                "label": "Osh"
            },
            {
                "id": "07",
                "x": "217.98",
                "y": "274.72",
                "label": "Kyzyl-Kyya",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "288.97",
                "y": "311.77",
                "label": "Sary-Tash"
            },
            {
                "id": "09",
                "x": "443.32",
                "y": "185.21",
                "label": "Naryn"
            },
            {
                "id": "10",
                "x": "440.23",
                "y": "57.62",
                "label": "Tokmok"
            },
            {
                "id": "11",
                "x": "474.19",
                "y": "84.37",
                "label": "Balykchy"
            },
            {
                "id": "13",
                "x": "614.12",
                "y": "87.46",
                "label": "Karakol"
            },
            {
                "id": "14",
                "x": "145.95",
                "y": "295.3",
                "label": "So'x",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "BI",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1' showLabels='0'  >
	<data>
		<entity id='KG.BA'  />
		<entity id='KG.GB'  />
		<entity id='KG.CU'  />
		<entity id='KG.YK'  />
		<entity id='KG.DA'  />
		<entity id='KG.NA'  />
		<entity id='KG.OS'  />
		<entity id='KG.TL'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	</shapes>
		<definition>
			<marker id='BI' x='382.61' y='55.56' label='Bishkek' labelPos='left'  />
			<marker id='01' x='345.57' y='67.91' label='Kara-Balta' labelPos='right'  />
			<marker id='02' x='234.44' y='66.88' label='Talas' labelPos='left'  />
			<marker id='03' x='257.08' y='170.8' label='Kara-Kol' labelPos='left'  />
			<marker id='04' x='270.45' y='214.02' label='Jalal-Abad'  />
			<marker id='05' x='295.15' y='230.48' label='Ozgon' labelPos='right'  />
			<marker id='06' x='264.28' y='257.23' label='Osh'  />
			<marker id='07' x='217.98' y='274.72' label='Kyzyl-Kyya' labelPos='left'  />
			<marker id='08' x='288.97' y='311.77' label='Sary-Tash'  />
			<marker id='09' x='443.32' y='185.21' label='Naryn'  />
			<marker id='10' x='440.23' y='57.62' label='Tokmok'  />
			<marker id='11' x='474.19' y='84.37' label='Balykchy'  />
			<marker id='13' x='614.12' y='87.46' label='Karakol'  />
			<marker id='14' x='145.95' y='295.3' label='So&apos;x' labelPos='right'  />
		</definition>
		<application>
			<marker id='BI' shapeId='myCustomShape'  />
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
