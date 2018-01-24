---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Yemen

#### JavaScript Alias: maps/yemen


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
            "id": "YE.AB"
        },
        {
            "id": "YE.AD"
        },
        {
            "id": "YE.DL"
        },
        {
            "id": "YE.BA"
        },
        {
            "id": "YE.HU"
        },
        {
            "id": "YE.JA"
        },
        {
            "id": "YE.MR"
        },
        {
            "id": "YE.MW"
        },
        {
            "id": "YE.AM"
        },
        {
            "id": "YE.DH"
        },
        {
            "id": "YE.HD"
        },
        {
            "id": "YE.HJ"
        },
        {
            "id": "YE.IB"
        },
        {
            "id": "YE.LA"
        },
        {
            "id": "YE.MA"
        },
        {
            "id": "YE.SD"
        },
        {
            "id": "YE.SN"
        },
        {
            "id": "YE.SH"
        },
        {
            "id": "YE.TA"
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
                "id": "SA",
                "shapeid": "myCustomShape",
                "x": "75.17",
                "y": "173.96",
                "label": "Sanaa",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "17.18",
                "y": "170.85",
                "label": "As Salif"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "32.72",
                "y": "191.56",
                "label": "Al Hudaydah",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "77.24",
                "y": "226.77",
                "label": "Ibb"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "66.89",
                "y": "242.3",
                "label": "Ta'izz",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "44.11",
                "y": "258.87",
                "label": "Mocha",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "106.24",
                "y": "281.65",
                "label": "Aben",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "127.98",
                "y": "266.11",
                "label": "Abyan",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "278.13",
                "y": "210.2",
                "label": "Al Mukalia"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "235.67",
                "y": "140.82",
                "label": "Say'un"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "428.27",
                "y": "94.22",
                "label": "Habarut",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "403.42",
                "y": "137.71",
                "label": "Al Ghaydah",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "403.42",
                "y": "152.21",
                "label": "Nishtun",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "353.72",
                "y": "180.17",
                "label": "Sayhut",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "63.78",
                "y": "102.51",
                "label": "Sa'dah",
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
            "id": "YE.AB"
        },
        {
            "id": "YE.AD"
        },
        {
            "id": "YE.DL"
        },
        {
            "id": "YE.BA"
        },
        {
            "id": "YE.HU"
        },
        {
            "id": "YE.JA"
        },
        {
            "id": "YE.MR"
        },
        {
            "id": "YE.MW"
        },
        {
            "id": "YE.AM"
        },
        {
            "id": "YE.DH"
        },
        {
            "id": "YE.HD"
        },
        {
            "id": "YE.HJ"
        },
        {
            "id": "YE.IB"
        },
        {
            "id": "YE.LA"
        },
        {
            "id": "YE.MA"
        },
        {
            "id": "YE.SD"
        },
        {
            "id": "YE.SN"
        },
        {
            "id": "YE.SH"
        },
        {
            "id": "YE.TA"
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
                "id": "SA",
                "x": "75.17",
                "y": "173.96",
                "label": "Sanaa",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "17.18",
                "y": "170.85",
                "label": "As Salif"
            },
            {
                "id": "02",
                "x": "32.72",
                "y": "191.56",
                "label": "Al Hudaydah",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "77.24",
                "y": "226.77",
                "label": "Ibb"
            },
            {
                "id": "04",
                "x": "66.89",
                "y": "242.3",
                "label": "Ta'izz",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "44.11",
                "y": "258.87",
                "label": "Mocha",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "106.24",
                "y": "281.65",
                "label": "Aben",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "127.98",
                "y": "266.11",
                "label": "Abyan",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "278.13",
                "y": "210.2",
                "label": "Al Mukalia"
            },
            {
                "id": "10",
                "x": "235.67",
                "y": "140.82",
                "label": "Say'un"
            },
            {
                "id": "09",
                "x": "428.27",
                "y": "94.22",
                "label": "Habarut",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "403.42",
                "y": "137.71",
                "label": "Al Ghaydah",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "403.42",
                "y": "152.21",
                "label": "Nishtun",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "353.72",
                "y": "180.17",
                "label": "Sayhut",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "63.78",
                "y": "102.51",
                "label": "Sa'dah",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "SA",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1' showLabels='0' >
	<data>
		<entity id='YE.AB'  />
		<entity id='YE.AD'  />
		<entity id='YE.DL'  />
		<entity id='YE.BA'  />
		<entity id='YE.HU'  />
		<entity id='YE.JA'  />
		<entity id='YE.MR'  />
		<entity id='YE.MW'  />
		<entity id='YE.AM'  />
		<entity id='YE.DH'  />
		<entity id='YE.HD'  />
		<entity id='YE.HJ'  />
		<entity id='YE.IB'  />
		<entity id='YE.LA'  />
		<entity id='YE.MA'  />
		<entity id='YE.SD'  />
		<entity id='YE.SN'  />
		<entity id='YE.SH'  />
		<entity id='YE.TA'  />
	</data>
	<markers>
	 <shapes>
	        <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showborder='0' radius='4'/>
			<shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='SA' x='75.17' y='173.96' label='Sanaa' labelPos='right'  />
			<marker id='01' x='17.18' y='170.85' label='As Salif'  />
			<marker id='02' x='32.72' y='191.56' label='Al Hudaydah' labelPos='right'  />
			<marker id='03' x='77.24' y='226.77' label='Ibb'  />
			<marker id='04' x='66.89' y='242.3' label="Ta'izz" labelPos='left'  />
			<marker id='05' x='44.11' y='258.87' label='Mocha' labelPos='left'  />
			<marker id='06' x='106.24' y='281.65' label='Aben' labelPos='left'  />
			<marker id='07' x='127.98' y='266.11' label='Abyan' labelPos='right'  />
			<marker id='08' x='278.13' y='210.2' label='Al Mukalia'  />
			<marker id='10' x='235.67' y='140.82' label="Say'un"  />
			<marker id='09' x='428.27' y='94.22' label='Habarut' labelPos='left'  />
			<marker id='11' x='403.42' y='137.71' label='Al Ghaydah' labelPos='left'  />
			<marker id='12' x='403.42' y='152.21' label='Nishtun' labelPos='left'  />
			<marker id='13' x='353.72' y='180.17' label='Sayhut' labelPos='right'  />
			<marker id='14' x='63.78' y='102.51' label="Sa'dah" labelPos='right' />
		</definition>
		<application>
			<marker id='SA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
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
