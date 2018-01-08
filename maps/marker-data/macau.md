---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Macau

#### JavaScript Alias: maps/macau


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
            "id": "MO.MA.SE"
        },
        {
            "id": "MO.IL.CT"
        },
        {
            "id": "MO.IL.TA"
        },
        {
            "id": "MO.MA.NF"
        },
        {
            "id": "MO.MA.SA"
        },
        {
            "id": "MO.MA.SC"
        },
        {
            "id": "MO.MA.SZ"
        },
        {
            "id": "MO.IL.CO"
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
                "x": "153.19",
                "y": "695.48",
                "label": "Coloane",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "177.7",
                "y": "445.27",
                "label": "Taipa"
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
            "id": "MO.MA.SE"
        },
        {
            "id": "MO.IL.CT"
        },
        {
            "id": "MO.IL.TA"
        },
        {
            "id": "MO.MA.NF"
        },
        {
            "id": "MO.MA.SA"
        },
        {
            "id": "MO.MA.SC"
        },
        {
            "id": "MO.MA.SZ"
        },
        {
            "id": "MO.IL.CO"
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
                "x": "153.19",
                "y": "695.48",
                "label": "Coloane",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "177.7",
                "y": "445.27",
                "label": "Taipa"
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
		<entity id='MO.MA.SE'  />
		<entity id='MO.IL.CT'  />
		<entity id='MO.IL.TA'  />
		<entity id='MO.MA.NF'  />
		<entity id='MO.MA.SA'  />
		<entity id='MO.MA.SC'  />
		<entity id='MO.MA.SZ'  />
		<entity id='MO.IL.CO'  />
	</data>
	<markers>
	   <shapes>
	 	     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='01' x='153.19' y='695.48' label='Coloane' labelPos='right' />
			<marker id='02' x='177.7' y='445.27' label='Taipa'  />
		</definition>
		<application>
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
