---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Palau

#### JavaScript Alias: maps/palau


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
            "id": "PW.AM"
        },
        {
            "id": "PW.AR"
        },
        {
            "id": "PW.AN"
        },
        {
            "id": "PW.HA"
        },
        {
            "id": "PW.KA"
        },
        {
            "id": "PW.KO"
        },
        {
            "id": "PW.ME"
        },
        {
            "id": "PW.ND"
        },
        {
            "id": "PW.NC"
        },
        {
            "id": "PW.NM"
        },
        {
            "id": "PW.NP"
        },
        {
            "id": "PW.NS"
        },
        {
            "id": "PW.NL"
        },
        {
            "id": "PW.NW"
        },
        {
            "id": "PW.PE"
        },
        {
            "id": "PW.SO"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "ME",
                "shapeid": "myCustomShape",
                "x": "590.37",
                "y": "228.01",
                "label": "Melekeok",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "497.9",
                "y": "377.39",
                "label": "Koror",
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
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "PW.AM"
        },
        {
            "id": "PW.AR"
        },
        {
            "id": "PW.AN"
        },
        {
            "id": "PW.HA"
        },
        {
            "id": "PW.KA"
        },
        {
            "id": "PW.KO"
        },
        {
            "id": "PW.ME"
        },
        {
            "id": "PW.ND"
        },
        {
            "id": "PW.NC"
        },
        {
            "id": "PW.NM"
        },
        {
            "id": "PW.NP"
        },
        {
            "id": "PW.NS"
        },
        {
            "id": "PW.NL"
        },
        {
            "id": "PW.NW"
        },
        {
            "id": "PW.PE"
        },
        {
            "id": "PW.SO"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "000000",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "ME",
                "x": "590.37",
                "y": "228.01",
                "label": "Melekeok",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "497.9",
                "y": "377.39",
                "label": "Koror",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "ME",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='PW.AM'  />
		<entity id='PW.AR'  />
		<entity id='PW.AN'  />
		<entity id='PW.HA'  />
		<entity id='PW.KA'  />
		<entity id='PW.KO'  />
		<entity id='PW.ME'  />
		<entity id='PW.ND'  />
		<entity id='PW.NC'  />
		<entity id='PW.NM'  />
		<entity id='PW.NP'  />
		<entity id='PW.NS'  />
		<entity id='PW.NL'  />
		<entity id='PW.NW'  />
		<entity id='PW.PE'  />
		<entity id='PW.SO'  />
	</data>
	<markers>
	   <shapes>
	      <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='000000' radius='4'/>
		  <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='000000' radius='3'/>
		</shapes>
		<definition>
		    <marker id='ME' x='590.37' y='228.01' label='Melekeok' labelPos='left'  />
			<marker id='01' x='497.9' y='377.39' label='Koror' labelPos='right'  />

		</definition>
		<application>
		    <marker id='ME' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
