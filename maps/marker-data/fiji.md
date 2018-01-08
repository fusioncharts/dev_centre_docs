---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Fiji

#### JavaScript Alias: maps/fiji


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
            "id": "FJ.WE.BA"
        },
        {
            "id": "FJ.NO.BU"
        },
        {
            "id": "FJ.NO.CK"
        },
        {
            "id": "FJ.EA.KD"
        },
        {
            "id": "FJ.EA.LU"
        },
        {
            "id": "EJ.WE.LT"
        },
        {
            "id": "EJ.EA.LM"
        },
        {
            "id": "FJ.NO.MC"
        },
        {
            "id": "FJ.WE.NN"
        },
        {
            "id": "FJ.WE.ND"
        },
        {
            "id": "FJ.CE.NT"
        },
        {
            "id": "FJ.CE.NM"
        },
        {
            "id": "FJ.WE.RA"
        },
        {
            "id": "FJ.CE.RW"
        },
        {
            "id": "FJ.CE.SR"
        },
        {
            "id": "FJ.CE.TL"
        },
        {
            "id": "FJ.TH.EA"
        },
        {
            "id": "FJ.TH.NO"
        },
        {
            "id": "FJ.TH.WE"
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
                "id": "SU",
                "shapeid": "myCustomShape",
                "x": "290.49",
                "y": "366.36",
                "label": "Suva",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "423.15",
                "y": "129.6",
                "label": "Savusavu",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "469.08",
                "y": "37.75",
                "label": "Labasa"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "164.96",
                "y": "254.1",
                "label": "Lautoka",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "330.29",
                "y": "297.99",
                "label": "Levuka"
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
            "id": "FJ.WE.BA"
        },
        {
            "id": "FJ.NO.BU"
        },
        {
            "id": "FJ.NO.CK"
        },
        {
            "id": "FJ.EA.KD"
        },
        {
            "id": "FJ.EA.LU"
        },
        {
            "id": "EJ.WE.LT"
        },
        {
            "id": "EJ.EA.LM"
        },
        {
            "id": "FJ.NO.MC"
        },
        {
            "id": "FJ.WE.NN"
        },
        {
            "id": "FJ.WE.ND"
        },
        {
            "id": "FJ.CE.NT"
        },
        {
            "id": "FJ.CE.NM"
        },
        {
            "id": "FJ.WE.RA"
        },
        {
            "id": "FJ.CE.RW"
        },
        {
            "id": "FJ.CE.SR"
        },
        {
            "id": "FJ.CE.TL"
        },
        {
            "id": "FJ.TH.EA"
        },
        {
            "id": "FJ.TH.NO"
        },
        {
            "id": "FJ.TH.WE"
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
                "id": "SU",
                "x": "290.49",
                "y": "366.36",
                "label": "Suva",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "423.15",
                "y": "129.6",
                "label": "Savusavu",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "469.08",
                "y": "37.75",
                "label": "Labasa"
            },
            {
                "id": "03",
                "x": "164.96",
                "y": "254.1",
                "label": "Lautoka",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "330.29",
                "y": "297.99",
                "label": "Levuka"
            }
        ],
        "application": [
            {
                "id": "SU",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='FJ.WE.BA'  />
		<entity id='FJ.NO.BU'  />
		<entity id='FJ.NO.CK'  />
		<entity id='FJ.EA.KD'  />
		<entity id='FJ.EA.LU'  />
		<entity id='EJ.WE.LT'  />
		<entity id='EJ.EA.LM'  />
		<entity id='FJ.NO.MC'  />
		<entity id='FJ.WE.NN'  />
		<entity id='FJ.WE.ND'  />
		<entity id='FJ.CE.NT'  />
		<entity id='FJ.CE.NM'  />
		<entity id='FJ.WE.RA'  />
		<entity id='FJ.CE.RW'  />
		<entity id='FJ.CE.SR'  />
		<entity id='FJ.CE.TL'  />
		<entity id='FJ.TH.EA'  />
		<entity id='FJ.TH.NO'  />
		<entity id='FJ.TH.WE'  />
	</data>
	<markers>
	  <shapes>
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='SU' x='290.49' y='366.36' label='Suva' labelPos='right'  />
			<marker id='01' x='423.15' y='129.6' label='Savusavu' labelPos='left'  />
			<marker id='02' x='469.08' y='37.75' label='Labasa'  />
			<marker id='03' x='164.96' y='254.1' label='Lautoka' labelPos='left'  />
			<marker id='04' x='330.29' y='297.99' label='Levuka'  />
		</definition>
		<application>
			<marker id='SU' shapeId='myCustomShape'  />
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
