---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Gambia

#### JavaScript Alias: maps/gambia


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
            "id": "GM.BJ"
        },
        {
            "id": "GM.LR"
        },
        {
            "id": "GM.MC"
        },
        {
            "id": "GM.NB"
        },
        {
            "id": "GM.UR"
        },
        {
            "id": "GM.WE"
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
                "id": "BN",
                "shapeid": "myCustomShape",
                "x": "48.2",
                "y": "92.17",
                "label": "Banjul"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "54.56",
                "y": "139.84",
                "label": "Brikama",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "137.19",
                "y": "136.66",
                "label": "Bintang",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "144.61",
                "y": "94.29",
                "label": "Kerewan"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "275.98",
                "y": "104.88",
                "label": "Mansa Konko",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "317.3",
                "y": "46.61",
                "label": "Kau ur"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "389.34",
                "y": "32.84",
                "label": "Kuntaur"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "422.18",
                "y": "67.8",
                "label": "Georgetown",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "539.78",
                "y": "123.95",
                "label": "Basse Santa Su",
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
            "id": "GM.BJ"
        },
        {
            "id": "GM.LR"
        },
        {
            "id": "GM.MC"
        },
        {
            "id": "GM.NB"
        },
        {
            "id": "GM.UR"
        },
        {
            "id": "GM.WE"
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
                "id": "BN",
                "x": "48.2",
                "y": "92.17",
                "label": "Banjul"
            },
            {
                "id": "01",
                "x": "54.56",
                "y": "139.84",
                "label": "Brikama",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "137.19",
                "y": "136.66",
                "label": "Bintang",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "144.61",
                "y": "94.29",
                "label": "Kerewan"
            },
            {
                "id": "04",
                "x": "275.98",
                "y": "104.88",
                "label": "Mansa Konko",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "317.3",
                "y": "46.61",
                "label": "Kau ur"
            },
            {
                "id": "06",
                "x": "389.34",
                "y": "32.84",
                "label": "Kuntaur"
            },
            {
                "id": "07",
                "x": "422.18",
                "y": "67.8",
                "label": "Georgetown",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "539.78",
                "y": "123.95",
                "label": "Basse Santa Su",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "BN",
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
		<entity id='GM.BJ'  />
		<entity id='GM.LR'  />
		<entity id='GM.MC'  />
		<entity id='GM.NB'  />
		<entity id='GM.UR'  />
		<entity id='GM.WE'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='BN' x='48.2' y='92.17' label='Banjul'  />
			<marker id='01' x='54.56' y='139.84' label='Brikama' labelPos='right'  />
			<marker id='02' x='137.19' y='136.66' label='Bintang' labelPos='bottom'  />
			<marker id='03' x='144.61' y='94.29' label='Kerewan'  />
			<marker id='04' x='275.98' y='104.88' label='Mansa Konko' labelPos='bottom'  />
			<marker id='05' x='317.3' y='46.61' label='Kau ur'  />
			<marker id='06' x='389.34' y='32.84' label='Kuntaur'  />
			<marker id='07' x='422.18' y='67.8' label='Georgetown' labelPos='right'  />
			<marker id='08' x='539.78' y='123.95' label='Basse Santa Su' labelPos='right'  />
		</definition>
		<application>
			<marker id='BN' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
