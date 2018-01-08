---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Cameroon

#### JavaScript Alias: maps/cameroon


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
            "id": "CM.AD"
        },
        {
            "id": "CM.CE"
        },
        {
            "id": "CM.ES"
        },
        {
            "id": "CM.EN"
        },
        {
            "id": "CM.LT"
        },
        {
            "id": "CM.NO"
        },
        {
            "id": "CM.NW"
        },
        {
            "id": "CM.OU"
        },
        {
            "id": "CM.SU"
        },
        {
            "id": "CM.SW"
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
                "id": "YA",
                "shapeid": "myCustomShape",
                "x": "222.04",
                "y": "472.07",
                "label": "Yaounde",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "305.95",
                "y": "114.96",
                "label": "Maroua",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "258.88",
                "y": "186.59",
                "label": "Garoua",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "92.09",
                "y": "525.28",
                "label": "Kribi",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "76.74",
                "y": "465.93",
                "label": "Douala",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "60.37",
                "y": "454.68",
                "label": "Tiko",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "81.86",
                "y": "425",
                "label": "Nkongsamba",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "94.13",
                "y": "383.05",
                "label": "Bafoussam",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "80.83",
                "y": "352.35",
                "label": "Bamenda",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "277.3",
                "y": "267.42",
                "label": "Ngaoundere",
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
            "id": "CM.AD"
        },
        {
            "id": "CM.CE"
        },
        {
            "id": "CM.ES"
        },
        {
            "id": "CM.EN"
        },
        {
            "id": "CM.LT"
        },
        {
            "id": "CM.NO"
        },
        {
            "id": "CM.NW"
        },
        {
            "id": "CM.OU"
        },
        {
            "id": "CM.SU"
        },
        {
            "id": "CM.SW"
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
                "id": "YA",
                "x": "222.04",
                "y": "472.07",
                "label": "Yaounde",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "305.95",
                "y": "114.96",
                "label": "Maroua",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "x": "258.88",
                "y": "186.59",
                "label": "Garoua",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "92.09",
                "y": "525.28",
                "label": "Kribi",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "76.74",
                "y": "465.93",
                "label": "Douala",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "60.37",
                "y": "454.68",
                "label": "Tiko",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "81.86",
                "y": "425",
                "label": "Nkongsamba",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "94.13",
                "y": "383.05",
                "label": "Bafoussam",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "80.83",
                "y": "352.35",
                "label": "Bamenda",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "x": "277.3",
                "y": "267.42",
                "label": "Ngaoundere",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "YA",
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
		<entity id='CM.AD'  />
		<entity id='CM.CE'  />
		<entity id='CM.ES'  />
		<entity id='CM.EN'  />
		<entity id='CM.LT'  />
		<entity id='CM.NO'  />
		<entity id='CM.NW'  />
		<entity id='CM.OU'  />
		<entity id='CM.SU'  />
		<entity id='CM.SW'  />
	</data>
	<markers>
	 <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='YA' x='222.04' y='472.07' label='Yaounde' labelPos='right'  />
			<marker id='01' x='305.95' y='114.96' label='Maroua' labelPos='bottom'  />
			<marker id='02' x='258.88' y='186.59' label='Garoua' labelPos='right'  />
			<marker id='03' x='92.09' y='525.28' label='Kribi' labelPos='right'  />
			<marker id='04' x='76.74' y='465.93' label='Douala' labelPos='right'  />
			<marker id='05' x='60.37' y='454.68' label='Tiko' labelPos='left'  />
			<marker id='06' x='81.86' y='425' label='Nkongsamba' labelPos='right'  />
			<marker id='07' x='94.13' y='383.05' label='Bafoussam' labelPos='bottom'  />
			<marker id='08' x='80.83' y='352.35' label='Bamenda' labelPos='bottom'  />
			<marker id='09' x='277.3' y='267.42' label='Ngaoundere' labelPos='right'  />
		</definition>
		<application>
			<marker id='YA' shapeId='myCustomShape'  />
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
