---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: WesternSahara

#### JavaScript Alias: maps/westernsahara


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
            "id": "AF.WS"
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
                "x": "160.86",
                "y": "38.27",
                "label": "Laayoune (El Aaiun)"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "209.48",
                "y": "59.99",
                "label": "Semara"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "122.58",
                "y": "79.65",
                "label": "Cabo Bojador",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "170.17",
                "y": "67.24",
                "label": "Bu Craa",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShapee",
                "x": "188.79",
                "y": "152.06",
                "label": "Guelta Zemmur",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "55.34",
                "y": "177.93",
                "label": "Ad Dakhla"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "27.41",
                "y": "261.72",
                "label": "Bir Gandus",
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
            "id": "AF.WS"
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
                "x": "160.86",
                "y": "38.27",
                "label": "Laayoune (El Aaiun)"
            },
            {
                "id": "02",
                "x": "209.48",
                "y": "59.99",
                "label": "Semara"
            },
            {
                "id": "03",
                "x": "122.58",
                "y": "79.65",
                "label": "Cabo Bojador",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "170.17",
                "y": "67.24",
                "label": "Bu Craa",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "188.79",
                "y": "152.06",
                "label": "Guelta Zemmur",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "55.34",
                "y": "177.93",
                "label": "Ad Dakhla"
            },
            {
                "id": "07",
                "x": "27.41",
                "y": "261.72",
                "label": "Bir Gandus",
                "labelpos": "right"
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
                "shapeid": "newCustomShapee"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
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
		<entity id='AF.WS'  />
	</data>
	<markers>
	 <shapes>

		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial'
showBorder='0' radius='3'/>

        </shapes>
		<definition>
			<marker id='01' x='160.86' y='38.27' label='Laayoune (El Aaiun)'  />
			<marker id='02' x='209.48' y='59.99' label='Semara'  />
			<marker id='03' x='122.58' y='79.65' label='Cabo Bojador' labelPos='left'  />
			<marker id='04' x='170.17' y='67.24' label='Bu Craa' labelPos='bottom'  />
			<marker id='05' x='188.79' y='152.06' label='Guelta Zemmur' labelPos='right'  />
			<marker id='06' x='55.34' y='177.93' label='Ad Dakhla'  />
			<marker id='07' x='27.41' y='261.72' label='Bir Gandus' labelPos='right'  />
		</definition>
		<application>
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShapee'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
