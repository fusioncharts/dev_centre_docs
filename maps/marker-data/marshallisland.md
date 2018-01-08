---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: MarshallIsland

#### JavaScript Alias: maps/marshallisland


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
            "id": "MH.MH.AI"
        },
        {
            "id": "MH.MH.AR"
        },
        {
            "id": "MH.MH.BR"
        },
        {
            "id": "MH.MH.BN"
        },
        {
            "id": "MH.MH.EE"
        },
        {
            "id": "MH.MH.EB"
        },
        {
            "id": "MH.MH.EN"
        },
        {
            "id": "MH.MH.ER"
        },
        {
            "id": "MH.MH.JL"
        },
        {
            "id": "MH.MH.KO"
        },
        {
            "id": "MH.MH.KN"
        },
        {
            "id": "MH.MH.KW"
        },
        {
            "id": "MH.MH.LK"
        },
        {
            "id": "MH.MH.MJ"
        },
        {
            "id": "MH.MH.ML"
        },
        {
            "id": "MH.MH.ME"
        },
        {
            "id": "MH.MH.MI"
        },
        {
            "id": "MH.MH.NK"
        },
        {
            "id": "MH.MH.NU"
        },
        {
            "id": "MH.MH.RL"
        },
        {
            "id": "MH.MH.RR"
        },
        {
            "id": "MH.MH.TA"
        },
        {
            "id": "MH.MH.TO"
        },
        {
            "id": "MH.MH.UJ"
        },
        {
            "id": "MH.MH.UL"
        },
        {
            "id": "MH.MH.UT"
        },
        {
            "id": "MH.MH.WH"
        },
        {
            "id": "MH.MH.WJ"
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
                "id": "MA",
                "shapeid": "myCustomShape",
                "x": "311.22",
                "y": "207.93",
                "label": "Majuro"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "213.98",
                "y": "165.51",
                "label": "Ebeye"
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
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "MH.MH.AI"
        },
        {
            "id": "MH.MH.AR"
        },
        {
            "id": "MH.MH.BR"
        },
        {
            "id": "MH.MH.BN"
        },
        {
            "id": "MH.MH.EE"
        },
        {
            "id": "MH.MH.EB"
        },
        {
            "id": "MH.MH.EN"
        },
        {
            "id": "MH.MH.ER"
        },
        {
            "id": "MH.MH.JL"
        },
        {
            "id": "MH.MH.KO"
        },
        {
            "id": "MH.MH.KN"
        },
        {
            "id": "MH.MH.KW"
        },
        {
            "id": "MH.MH.LK"
        },
        {
            "id": "MH.MH.MJ"
        },
        {
            "id": "MH.MH.ML"
        },
        {
            "id": "MH.MH.ME"
        },
        {
            "id": "MH.MH.MI"
        },
        {
            "id": "MH.MH.NK"
        },
        {
            "id": "MH.MH.NU"
        },
        {
            "id": "MH.MH.RL"
        },
        {
            "id": "MH.MH.RR"
        },
        {
            "id": "MH.MH.TA"
        },
        {
            "id": "MH.MH.TO"
        },
        {
            "id": "MH.MH.UJ"
        },
        {
            "id": "MH.MH.UL"
        },
        {
            "id": "MH.MH.UT"
        },
        {
            "id": "MH.MH.WH"
        },
        {
            "id": "MH.MH.WJ"
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
                "id": "MA",
                "x": "311.22",
                "y": "207.93",
                "label": "Majuro"
            },
            {
                "id": "01",
                "x": "213.98",
                "y": "165.51",
                "label": "Ebeye"
            }
        ],
        "application": [
            {
                "id": "MA",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='MH.MH.AI'  />
		<entity id='MH.MH.AR'  />
		<entity id='MH.MH.BR'  />
		<entity id='MH.MH.BN'  />
		<entity id='MH.MH.EE'  />
		<entity id='MH.MH.EB'  />
		<entity id='MH.MH.EN'  />
		<entity id='MH.MH.ER'  />
		<entity id='MH.MH.JL'  />
		<entity id='MH.MH.KO'  />
		<entity id='MH.MH.KN'  />
		<entity id='MH.MH.KW'  />
		<entity id='MH.MH.LK'  />
		<entity id='MH.MH.MJ'  />
		<entity id='MH.MH.ML'  />
		<entity id='MH.MH.ME'  />
		<entity id='MH.MH.MI'  />
		<entity id='MH.MH.NK'  />
		<entity id='MH.MH.NU'  />
		<entity id='MH.MH.RL'  />
		<entity id='MH.MH.RR'  />
		<entity id='MH.MH.TA'  />
		<entity id='MH.MH.TO'  />
		<entity id='MH.MH.UJ'  />
		<entity id='MH.MH.UL'  />
		<entity id='MH.MH.UT'  />
		<entity id='MH.MH.WH'  />
		<entity id='MH.MH.WJ'  />
	</data>
	<markers>
	   <shapes>
	      <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='000000' radius='4'/>
		  <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='000000' radius='3'/>
		</shapes>
		<definition>
			<marker id='MA' x='311.22' y='207.93' label='Majuro'  />
			<marker id='01' x='213.98' y='165.51' label='Ebeye'  />
		</definition>
		<application>
			<marker id='MA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
