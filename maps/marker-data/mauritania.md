---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Mauritania

#### JavaScript Alias: maps/mauritania


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
            "id": "MR.AD"
        },
        {
            "id": "MR.AS"
        },
        {
            "id": "MR.BR"
        },
        {
            "id": "MR.DN"
        },
        {
            "id": "MR.GO"
        },
        {
            "id": "MR.GD"
        },
        {
            "id": "MR.HC"
        },
        {
            "id": "MR.HG"
        },
        {
            "id": "MR.IN"
        },
        {
            "id": "MR.NO"
        },
        {
            "id": "MR.TG"
        },
        {
            "id": "MR.TZ"
        },
        {
            "id": "MR.TR"
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
                "id": "NU",
                "shapeid": "myCustomShape",
                "x": "43.35",
                "y": "246.24",
                "label": "Nouakchott",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "140.38",
                "y": "168.82",
                "label": "Atar",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "46.45",
                "y": "285.47",
                "label": "Rosso",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "78.45",
                "y": "284.43",
                "label": "Bogue",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "104.25",
                "y": "300.95",
                "label": "Kaedi",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "148.64",
                "y": "294.76",
                "label": "Kiffa",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "249.8",
                "y": "277.21",
                "label": "Nema",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "151.74",
                "y": "224.56",
                "label": "Tidjikdja",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "131.09",
                "y": "125.47",
                "label": "Zouerat",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "148.64",
                "y": "61.47",
                "label": "Bir Moghrein",
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
            "id": "MR.AD"
        },
        {
            "id": "MR.AS"
        },
        {
            "id": "MR.BR"
        },
        {
            "id": "MR.DN"
        },
        {
            "id": "MR.GO"
        },
        {
            "id": "MR.GD"
        },
        {
            "id": "MR.HC"
        },
        {
            "id": "MR.HG"
        },
        {
            "id": "MR.IN"
        },
        {
            "id": "MR.NO"
        },
        {
            "id": "MR.TG"
        },
        {
            "id": "MR.TZ"
        },
        {
            "id": "MR.TR"
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
                "id": "NU",
                "x": "43.35",
                "y": "246.24",
                "label": "Nouakchott",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "140.38",
                "y": "168.82",
                "label": "Atar",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "x": "46.45",
                "y": "285.47",
                "label": "Rosso",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "78.45",
                "y": "284.43",
                "label": "Bogue",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "104.25",
                "y": "300.95",
                "label": "Kaedi",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "148.64",
                "y": "294.76",
                "label": "Kiffa",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "249.8",
                "y": "277.21",
                "label": "Nema",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "151.74",
                "y": "224.56",
                "label": "Tidjikdja",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "131.09",
                "y": "125.47",
                "label": "Zouerat",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "148.64",
                "y": "61.47",
                "label": "Bir Moghrein",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "NU",
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
		<entity id='MR.AD'  />
		<entity id='MR.AS'  />
		<entity id='MR.BR'  />
		<entity id='MR.DN'  />
		<entity id='MR.GO'  />
		<entity id='MR.GD'  />
		<entity id='MR.HC'  />
		<entity id='MR.HG'  />
		<entity id='MR.IN'  />
		<entity id='MR.NO'  />
		<entity id='MR.TG'  />
		<entity id='MR.TZ'  />
		<entity id='MR.TR'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='NU' x='43.35' y='246.24' label='Nouakchott' labelPos='bottom'  />
			<marker id='01' x='140.38' y='168.82' label='Atar' labelPos='bottom'  />
			<marker id='02' x='46.45' y='285.47' label='Rosso' labelPos='bottom'  />
			<marker id='03' x='78.45' y='284.43' label='Bogue' labelPos='right'  />
			<marker id='04' x='104.25' y='300.95' label='Kaedi' labelPos='bottom'  />
			<marker id='05' x='148.64' y='294.76' label='Kiffa' labelPos='right'  />
			<marker id='06' x='249.8' y='277.21' label='Nema' labelPos='right'  />
			<marker id='07' x='151.74' y='224.56' label='Tidjikdja' labelPos='bottom'  />
			<marker id='08' x='131.09' y='125.47' label='Zouerat' labelPos='right'  />
			<marker id='09' x='148.64' y='61.47' label='Bir Moghrein' labelPos='right'  />
		</definition>
		<application>
			<marker id='NU' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
