---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Congo

#### JavaScript Alias: maps/congo


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
            "id": "CG.BO"
        },
        {
            "id": "CG.BR"
        },
        {
            "id": "CG.CU"
        },
        {
            "id": "CG.CO"
        },
        {
            "id": "CG.KO"
        },
        {
            "id": "CG.LE"
        },
        {
            "id": "CG.LI"
        },
        {
            "id": "CG.NI"
        },
        {
            "id": "CG.PL"
        },
        {
            "id": "CG.PO"
        },
        {
            "id": "CG.SA"
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
                "id": "BZ",
                "shapeid": "myCustomShape",
                "x": "164.12",
                "y": "317.16",
                "label": "Brazzaville",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "195.09",
                "y": "93.16",
                "label": "Ouesso",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "186.83",
                "y": "155.09",
                "label": "Owando",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "190.96",
                "y": "189.16",
                "label": "Oyo",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "140.38",
                "y": "246.96",
                "label": "Djambala",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "65.03",
                "y": "259.35",
                "label": "Mossendjo",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "11.35",
                "y": "309.93",
                "label": "Madingo Kayes",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "39.22",
                "y": "346.06",
                "label": "Pointe Noire",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "69.16",
                "y": "322.32",
                "label": "Louborno",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "108.38",
                "y": "323.35",
                "label": "Kayes",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "270.45",
                "y": "76.64",
                "label": "Impfondo",
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
            "id": "CG.BO"
        },
        {
            "id": "CG.BR"
        },
        {
            "id": "CG.CU"
        },
        {
            "id": "CG.CO"
        },
        {
            "id": "CG.KO"
        },
        {
            "id": "CG.LE"
        },
        {
            "id": "CG.LI"
        },
        {
            "id": "CG.NI"
        },
        {
            "id": "CG.PL"
        },
        {
            "id": "CG.PO"
        },
        {
            "id": "CG.SA"
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
                "id": "BZ",
                "x": "164.12",
                "y": "317.16",
                "label": "Brazzaville",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "195.09",
                "y": "93.16",
                "label": "Ouesso",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "186.83",
                "y": "155.09",
                "label": "Owando",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "190.96",
                "y": "189.16",
                "label": "Oyo",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "140.38",
                "y": "246.96",
                "label": "Djambala",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "65.03",
                "y": "259.35",
                "label": "Mossendjo",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "11.35",
                "y": "309.93",
                "label": "Madingo Kayes",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "39.22",
                "y": "346.06",
                "label": "Pointe Noire",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "69.16",
                "y": "322.32",
                "label": "Louborno",
                "labelpos": "bottom"
            },
            {
                "id": "09",
                "x": "108.38",
                "y": "323.35",
                "label": "Kayes",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "270.45",
                "y": "76.64",
                "label": "Impfondo",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "BZ",
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
		<entity id='CG.BO'  />
		<entity id='CG.BR'  />
		<entity id='CG.CU'  />
		<entity id='CG.CO'  />
		<entity id='CG.KO'  />
		<entity id='CG.LE'  />
		<entity id='CG.LI'  />
		<entity id='CG.NI'  />
		<entity id='CG.PL'  />
		<entity id='CG.PO'  />
		<entity id='CG.SA'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='BZ' x='164.12' y='317.16' label='Brazzaville' labelPos='right'  />
			<marker id='01' x='195.09' y='93.16' label='Ouesso' labelPos='left'  />
			<marker id='02' x='186.83' y='155.09' label='Owando' labelPos='left'  />
			<marker id='03' x='190.96' y='189.16' label='Oyo' labelPos='left'  />
			<marker id='04' x='140.38' y='246.96' label='Djambala' labelPos='right'  />
			<marker id='05' x='65.03' y='259.35' label='Mossendjo' labelPos='right'  />
			<marker id='06' x='11.35' y='309.93' label='Madingo Kayes' labelPos='right'  />
			<marker id='07' x='39.22' y='346.06' label='Pointe Noire' labelPos='bottom'  />
			<marker id='08' x='69.16' y='322.32' label='Louborno' labelPos='bottom'  />
			<marker id='09' x='108.38' y='323.35' label='Kayes' labelPos='right'  />
			<marker id='10' x='270.45' y='76.64' label='Impfondo' labelPos='left'  />
		</definition>
		<application>
			<marker id='BZ' shapeId='myCustomShape'  />
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
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
