---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SaoTomeandPrincipe

#### JavaScript Alias: maps/saotomeandprincipe


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
            "id": "ST.AG"
        },
        {
            "id": "ST.CG"
        },
        {
            "id": "ST.CU"
        },
        {
            "id": "ST.LE"
        },
        {
            "id": "ST.LO"
        },
        {
            "id": "ST.MZ"
        },
        {
            "id": "ST.PA"
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
                "id": "ST",
                "shapeid": "myCustomShape",
                "x": "114.4",
                "y": "207.89",
                "label": "Sao Tome",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "90.48",
                "y": "305.65",
                "label": "Santa Cruz",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "60.32",
                "y": "215.17",
                "label": "Neves",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "225.68",
                "y": "37.33",
                "label": "Santo Antonio",
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
            "id": "ST.AG"
        },
        {
            "id": "ST.CG"
        },
        {
            "id": "ST.CU"
        },
        {
            "id": "ST.LE"
        },
        {
            "id": "ST.LO"
        },
        {
            "id": "ST.MZ"
        },
        {
            "id": "ST.PA"
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
                "id": "ST",
                "x": "114.4",
                "y": "207.89",
                "label": "Sao Tome",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "90.48",
                "y": "305.65",
                "label": "Santa Cruz",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "60.32",
                "y": "215.17",
                "label": "Neves",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "225.68",
                "y": "37.33",
                "label": "Santo Antonio",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "ST",
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
		<entity id='ST.AG'  />
		<entity id='ST.CG'  />
		<entity id='ST.CU'  />
		<entity id='ST.LE'  />
		<entity id='ST.LO'  />
		<entity id='ST.MZ'  />
		<entity id='ST.PA'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='ST' x='114.4' y='207.89' label='Sao Tome' labelPos='right'  />
			<marker id='01' x='90.48' y='305.65' label='Santa Cruz' labelPos='right'  />
			<marker id='02' x='60.32' y='215.17' label='Neves' labelPos='left'  />
			<marker id='03' x='225.68' y='37.33' label='Santo Antonio' labelPos='left'  />
		</definition>
		<application>
			<marker id='ST' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
