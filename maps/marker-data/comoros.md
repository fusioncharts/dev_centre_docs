---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Comoros

#### JavaScript Alias: maps/comoros


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
            "id": "KM.AN"
        },
        {
            "id": "KM.GC"
        },
        {
            "id": "KM.MO"
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
                "id": "MR",
                "shapeid": "myCustomShape",
                "x": "26.89",
                "y": "181.35",
                "label": "Moroni"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "42.18",
                "y": "40.75",
                "label": "Mitsamiouli",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "85.99",
                "y": "91.69",
                "label": "Mbeni",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "33.01",
                "y": "152.83",
                "label": "N't Soudjini"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "19.76",
                "y": "203.77",
                "label": "Iconi",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "115.53",
                "y": "201.73",
                "label": "Pidjani",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "131.84",
                "y": "248.6",
                "label": "Foumbouni",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "92.1",
                "y": "257.77",
                "label": "Dembeni",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "206.21",
                "y": "425.88",
                "label": "Hoani"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "249.01",
                "y": "435.05",
                "label": "Fomboni",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "197.04",
                "y": "441.16",
                "label": "Miringoni",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "227.61",
                "y": "474.79",
                "label": "Nioumachoua",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "268.36",
                "y": "463.58",
                "label": "Wanani",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "540.4",
                "y": "369.84",
                "label": "Ouani",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "522.06",
                "y": "391.24",
                "label": "Mutsamudu",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "469.08",
                "y": "405.5",
                "label": "Sima",
                "labelpos": "bottom"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "586.25",
                "y": "434.03",
                "label": "Domoni",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "543.46",
                "y": "447.28",
                "label": "Moya",
                "labelpos": "left"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "564.86",
                "y": "448.3",
                "label": "M'Remani",
                "labelpos": "bottom"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "585.23",
                "y": "473.77",
                "label": "M'Ramani",
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
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "KM.AN"
        },
        {
            "id": "KM.GC"
        },
        {
            "id": "KM.MO"
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
                "id": "MR",
                "x": "26.89",
                "y": "181.35",
                "label": "Moroni"
            },
            {
                "id": "01",
                "x": "42.18",
                "y": "40.75",
                "label": "Mitsamiouli",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "85.99",
                "y": "91.69",
                "label": "Mbeni",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "33.01",
                "y": "152.83",
                "label": "N't Soudjini"
            },
            {
                "id": "04",
                "x": "19.76",
                "y": "203.77",
                "label": "Iconi",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "115.53",
                "y": "201.73",
                "label": "Pidjani",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "131.84",
                "y": "248.6",
                "label": "Foumbouni",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "92.1",
                "y": "257.77",
                "label": "Dembeni",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "206.21",
                "y": "425.88",
                "label": "Hoani"
            },
            {
                "id": "09",
                "x": "249.01",
                "y": "435.05",
                "label": "Fomboni",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "197.04",
                "y": "441.16",
                "label": "Miringoni",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "227.61",
                "y": "474.79",
                "label": "Nioumachoua",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "268.36",
                "y": "463.58",
                "label": "Wanani",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "540.4",
                "y": "369.84",
                "label": "Ouani",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "522.06",
                "y": "391.24",
                "label": "Mutsamudu",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "469.08",
                "y": "405.5",
                "label": "Sima",
                "labelpos": "bottom"
            },
            {
                "id": "16",
                "x": "586.25",
                "y": "434.03",
                "label": "Domoni",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "543.46",
                "y": "447.28",
                "label": "Moya",
                "labelpos": "left"
            },
            {
                "id": "18",
                "x": "564.86",
                "y": "448.3",
                "label": "M'Remani",
                "labelpos": "bottom"
            },
            {
                "id": "19",
                "x": "585.23",
                "y": "473.77",
                "label": "M'Ramani",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "MR",
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
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape"
            },
            {
                "id": "19",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='' markerRadius='' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >

	<data>
		<entity id='KM.AN'  />
		<entity id='KM.GC'  />
		<entity id='KM.MO'  />
	</data>
	<markers>
	 <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='MR' x='26.89' y='181.35' label='Moroni'  />
			<marker id='01' x='42.18' y='40.75' label='Mitsamiouli' labelPos='right'  />
			<marker id='02' x='85.99' y='91.69' label='Mbeni' labelPos='right'  />
			<marker id='03' x='33.01' y='152.83' label='N&apos;t Soudjini'  />
			<marker id='04' x='19.76' y='203.77' label='Iconi' labelPos='right'  />
			<marker id='05' x='115.53' y='201.73' label='Pidjani' labelPos='right'  />
			<marker id='06' x='131.84' y='248.6' label='Foumbouni' labelPos='right'  />
			<marker id='07' x='92.1' y='257.77' label='Dembeni' labelPos='left'  />
			<marker id='08' x='206.21' y='425.88' label='Hoani'  />
			<marker id='09' x='249.01' y='435.05' label='Fomboni' labelPos='right'  />
			<marker id='10' x='197.04' y='441.16' label='Miringoni' labelPos='left'  />
			<marker id='11' x='227.61' y='474.79' label='Nioumachoua' labelPos='left'  />
			<marker id='12' x='268.36' y='463.58' label='Wanani' labelPos='right'  />
			<marker id='13' x='540.4' y='369.84' label='Ouani' labelPos='left'  />
			<marker id='14' x='522.06' y='391.24' label='Mutsamudu' labelPos='left'  />
			<marker id='15' x='469.08' y='405.5' label='Sima' labelPos='bottom'  />
			<marker id='16' x='586.25' y='434.03' label='Domoni' labelPos='left'  />
			<marker id='17' x='543.46' y='447.28' label='Moya' labelPos='left'  />
			<marker id='18' x='564.86' y='448.3' label='M&apos;Remani' labelPos='bottom'  />
			<marker id='19' x='585.23' y='473.77' label='M&apos;Ramani' labelPos='left'  />
		</definition>
		<application>
			<marker id='MR' shapeId='myCustomShape'  />
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
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
