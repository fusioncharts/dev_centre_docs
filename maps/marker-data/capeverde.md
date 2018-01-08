---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: CapeVerde

#### JavaScript Alias: maps/capeverde


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
            "id": "CV.RG"
        },
        {
            "id": "CV.PA"
        },
        {
            "id": "CV.PN"
        },
        {
            "id": "CV.MO"
        },
        {
            "id": "CV.SF"
        },
        {
            "id": "CV.SV"
        },
        {
            "id": "CV.SN"
        },
        {
            "id": "CV.SL"
        },
        {
            "id": "CV.BV"
        },
        {
            "id": "CV.MA"
        },
        {
            "id": "CV.BR"
        },
        {
            "id": "CV.TF"
        },
        {
            "id": "CV.SM"
        },
        {
            "id": "CV.SZ"
        },
        {
            "id": "CV.SD"
        },
        {
            "id": "CV.PI"
        },
        {
            "id": "CV.SC"
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
                "id": "PR",
                "shapeid": "myCustomShape",
                "x": "470.99",
                "y": "574.26",
                "label": "Praia",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "123.39",
                "y": "100.62",
                "label": "Mindelo",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "613.29",
                "y": "169.73",
                "label": "Santa Maria",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "408.99",
                "y": "482.78",
                "label": "Tarrafal",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "239.25",
                "y": "564.09",
                "label": "Sao Filipe"
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
            "id": "CV.RG"
        },
        {
            "id": "CV.PA"
        },
        {
            "id": "CV.PN"
        },
        {
            "id": "CV.MO"
        },
        {
            "id": "CV.SF"
        },
        {
            "id": "CV.SV"
        },
        {
            "id": "CV.SN"
        },
        {
            "id": "CV.SL"
        },
        {
            "id": "CV.BV"
        },
        {
            "id": "CV.MA"
        },
        {
            "id": "CV.BR"
        },
        {
            "id": "CV.TF"
        },
        {
            "id": "CV.SM"
        },
        {
            "id": "CV.SZ"
        },
        {
            "id": "CV.SD"
        },
        {
            "id": "CV.PI"
        },
        {
            "id": "CV.SC"
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
                "id": "PR",
                "x": "470.99",
                "y": "574.26",
                "label": "Praia",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "123.39",
                "y": "100.62",
                "label": "Mindelo",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "613.29",
                "y": "169.73",
                "label": "Santa Maria",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "408.99",
                "y": "482.78",
                "label": "Tarrafal",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "239.25",
                "y": "564.09",
                "label": "Sao Filipe"
            }
        ],
        "application": [
            {
                "id": "PR",
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
		<entity id='CV.RG'  />
		<entity id='CV.PA'  />
		<entity id='CV.PN'  />
		<entity id='CV.MO'  />
		<entity id='CV.SF'  />
		<entity id='CV.SV'  />
		<entity id='CV.SN'  />
		<entity id='CV.SL'  />
		<entity id='CV.BV'  />
		<entity id='CV.MA'  />
		<entity id='CV.BR'  />
		<entity id='CV.TF'  />
		<entity id='CV.SM'  />
		<entity id='CV.SZ'  />
		<entity id='CV.SD'  />
		<entity id='CV.PI'  />
		<entity id='CV.SC'  />
	</data>
	<markers>
	 <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='PR' x='470.99' y='574.26' label='Praia' labelPos='right'  />
			<marker id='01' x='123.39' y='100.62' label='Mindelo' labelPos='right'  />
			<marker id='02' x='613.29' y='169.73' label='Santa Maria' labelPos='bottom'  />
			<marker id='03' x='408.99' y='482.78' label='Tarrafal' labelPos='left'  />
			<marker id='04' x='239.25' y='564.09' label='Sao Filipe'  />
		</definition>
		<application>
			<marker id='PR' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
