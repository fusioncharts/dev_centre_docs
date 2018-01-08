---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Mali

#### JavaScript Alias: maps/mali


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
            "id": "ML.BA"
        },
        {
            "id": "ML.GA"
        },
        {
            "id": "ML.KY"
        },
        {
            "id": "ML.KD"
        },
        {
            "id": "ML.KK"
        },
        {
            "id": "ML.MO"
        },
        {
            "id": "ML.SG"
        },
        {
            "id": "ML.SK"
        },
        {
            "id": "ML.TB"
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
                "id": "BM",
                "shapeid": "myCustomShape",
                "x": "123.63",
                "y": "364.76",
                "label": "Bamako",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "22.47",
                "y": "307.54",
                "label": "Kayes",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "136.91",
                "y": "344.32",
                "label": "Koulikoro",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "187.99",
                "y": "395.41",
                "label": "Sikasso",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "173.69",
                "y": "339.21",
                "label": "Segou",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "217.63",
                "y": "313.67",
                "label": "Mopti",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "355.56",
                "y": "259.52",
                "label": "Gao",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "370.89",
                "y": "187.99",
                "label": "Kidal",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "213.54",
                "y": "228.86",
                "label": "Tombouctou",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "209.45",
                "y": "52.1",
                "label": "Taoudenni",
                "labelpos": "bottom"
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
            "id": "ML.BA"
        },
        {
            "id": "ML.GA"
        },
        {
            "id": "ML.KY"
        },
        {
            "id": "ML.KD"
        },
        {
            "id": "ML.KK"
        },
        {
            "id": "ML.MO"
        },
        {
            "id": "ML.SG"
        },
        {
            "id": "ML.SK"
        },
        {
            "id": "ML.TB"
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
                "id": "BM",
                "x": "123.63",
                "y": "364.76",
                "label": "Bamako",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "22.47",
                "y": "307.54",
                "label": "Kayes",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "136.91",
                "y": "344.32",
                "label": "Koulikoro",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "187.99",
                "y": "395.41",
                "label": "Sikasso",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "173.69",
                "y": "339.21",
                "label": "Segou",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "217.63",
                "y": "313.67",
                "label": "Mopti",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "355.56",
                "y": "259.52",
                "label": "Gao",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "370.89",
                "y": "187.99",
                "label": "Kidal",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "213.54",
                "y": "228.86",
                "label": "Tombouctou",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "209.45",
                "y": "52.1",
                "label": "Taoudenni",
                "labelpos": "bottom"
            }
        ],
        "application": [
            {
                "id": "BM",
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
		<entity id='ML.BA'  />
		<entity id='ML.GA'  />
		<entity id='ML.KY'  />
		<entity id='ML.KD'  />
		<entity id='ML.KK'  />
		<entity id='ML.MO'  />
		<entity id='ML.SG'  />
		<entity id='ML.SK'  />
		<entity id='ML.TB'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='BM' x='123.63' y='364.76' label='Bamako' labelPos='left'  />
			<marker id='01' x='22.47' y='307.54' label='Kayes' labelPos='right'  />
			<marker id='02' x='136.91' y='344.32' label='Koulikoro' labelPos='left'  />
			<marker id='03' x='187.99' y='395.41' label='Sikasso' labelPos='right'  />
			<marker id='04' x='173.69' y='339.21' label='Segou' labelPos='right'  />
			<marker id='05' x='217.63' y='313.67' label='Mopti' labelPos='right'  />
			<marker id='06' x='355.56' y='259.52' label='Gao' labelPos='right'  />
			<marker id='07' x='370.89' y='187.99' label='Kidal' labelPos='right'  />
			<marker id='08' x='213.54' y='228.86' label='Tombouctou' labelPos='right'  />
			<marker id='09' x='209.45' y='52.1' label='Taoudenni' labelPos='bottom'  />
		</definition>
		<application>
			<marker id='BM' shapeId='myCustomShape'  />
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
