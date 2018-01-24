---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Senegal

#### JavaScript Alias: maps/senegal


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
            "id": "SN.DK"
        },
        {
            "id": "SN.DB"
        },
        {
            "id": "SN.FK"
        },
        {
            "id": "SN.KL"
        },
        {
            "id": "SN.KD"
        },
        {
            "id": "SN.LG"
        },
        {
            "id": "SN.MT"
        },
        {
            "id": "SN.ST"
        },
        {
            "id": "SN.TC"
        },
        {
            "id": "SN.TH"
        },
        {
            "id": "SN.ZG"
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
                "id": "DA",
                "shapeid": "myCustomShape",
                "x": "25.53",
                "y": "190.75",
                "label": "Dakar"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "117.83",
                "y": "75.89",
                "label": "Saint Louis",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "185.52",
                "y": "30.76",
                "label": "Richard Toll",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "250.13",
                "y": "16.4",
                "label": "Podor",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "410.13",
                "y": "111.78",
                "label": "Matam",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "519.86",
                "y": "392.79",
                "label": "Kedougou"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "405",
                "y": "288.18",
                "label": "Tambacounda"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "501.4",
                "y": "215.37",
                "label": "Naye",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "201.93",
                "y": "112.81",
                "label": "Linguere",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "63.48",
                "y": "177.42",
                "label": "Thies",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "141.42",
                "y": "197.93",
                "label": "Diourbel",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "163.99",
                "y": "269.72",
                "label": "Kaolack",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "249.11",
                "y": "366.13",
                "label": "Kolda",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "144.5",
                "y": "390.74",
                "label": "Ziguinchor",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "130.14",
                "y": "346.64",
                "label": "Bignona",
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
            "id": "SN.DK"
        },
        {
            "id": "SN.DB"
        },
        {
            "id": "SN.FK"
        },
        {
            "id": "SN.KL"
        },
        {
            "id": "SN.KD"
        },
        {
            "id": "SN.LG"
        },
        {
            "id": "SN.MT"
        },
        {
            "id": "SN.ST"
        },
        {
            "id": "SN.TC"
        },
        {
            "id": "SN.TH"
        },
        {
            "id": "SN.ZG"
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
                "id": "DA",
                "x": "25.53",
                "y": "190.75",
                "label": "Dakar"
            },
            {
                "id": "01",
                "x": "117.83",
                "y": "75.89",
                "label": "Saint Louis",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "185.52",
                "y": "30.76",
                "label": "Richard Toll",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "250.13",
                "y": "16.4",
                "label": "Podor",
                "labelpos": "bottom"
            },
            {
                "id": "04",
                "x": "410.13",
                "y": "111.78",
                "label": "Matam",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "519.86",
                "y": "392.79",
                "label": "Kedougou"
            },
            {
                "id": "06",
                "x": "405",
                "y": "288.18",
                "label": "Tambacounda"
            },
            {
                "id": "07",
                "x": "501.4",
                "y": "215.37",
                "label": "Naye",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "201.93",
                "y": "112.81",
                "label": "Linguere",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "63.48",
                "y": "177.42",
                "label": "Thies",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "141.42",
                "y": "197.93",
                "label": "Diourbel",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "163.99",
                "y": "269.72",
                "label": "Kaolack",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "249.11",
                "y": "366.13",
                "label": "Kolda",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "144.5",
                "y": "390.74",
                "label": "Ziguinchor",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "130.14",
                "y": "346.64",
                "label": "Bignona",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "DA",
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
            },
            {
                "id": "10",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='' markerRadius='' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='SN.DK'  />
		<entity id='SN.DB'  />
		<entity id='SN.FK'  />
		<entity id='SN.KL'  />
		<entity id='SN.KD'  />
		<entity id='SN.LG'  />
		<entity id='SN.MT'  />
		<entity id='SN.ST'  />
		<entity id='SN.TC'  />
		<entity id='SN.TH'  />
		<entity id='SN.ZG'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='DA' x='25.53' y='190.75' label='Dakar'  />
			<marker id='01' x='117.83' y='75.89' label='Saint Louis' labelPos='left'  />
			<marker id='02' x='185.52' y='30.76' label='Richard Toll' labelPos='bottom'  />
			<marker id='03' x='250.13' y='16.4' label='Podor' labelPos='bottom'  />
			<marker id='04' x='410.13' y='111.78' label='Matam' labelPos='left'  />
			<marker id='05' x='519.86' y='392.79' label='Kedougou'  />
			<marker id='06' x='405' y='288.18' label='Tambacounda'  />
			<marker id='07' x='501.4' y='215.37' label='Naye' labelPos='left'  />
			<marker id='08' x='201.93' y='112.81' label='Linguere' labelPos='right'  />
			<marker id='09' x='63.48' y='177.42' label='Thies' labelPos='right'  />
			<marker id='10' x='141.42' y='197.93' label='Diourbel' labelPos='right'  />
			<marker id='11' x='163.99' y='269.72' label='Kaolack' labelPos='right'  />
			<marker id='12' x='249.11' y='366.13' label='Kolda' labelPos='right'  />
			<marker id='13' x='144.5' y='390.74' label='Ziguinchor' labelPos='right'  />
			<marker id='14' x='130.14' y='346.64' label='Bignona' labelPos='right'  />
		</definition>
		<application>
			<marker id='DA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
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
