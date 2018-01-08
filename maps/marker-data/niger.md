---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Niger

#### JavaScript Alias: maps/niger


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
            "id": "NE.AG"
        },
        {
            "id": "NE.DF"
        },
        {
            "id": "NE.DS"
        },
        {
            "id": "NE.MA"
        },
        {
            "id": "NE.NI"
        },
        {
            "id": "NE.TH"
        },
        {
            "id": "NE.TL"
        },
        {
            "id": "NE.ZI"
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
                "id": "NM",
                "shapeid": "myCustomShape",
                "x": "68.31",
                "y": "363.06",
                "label": "Niamey",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "107.18",
                "y": "388.63",
                "label": "Dosso",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "119.45",
                "y": "419.31",
                "label": "Gaya",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "163.43",
                "y": "309.88",
                "label": "Tahoua",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "243.2",
                "y": "370.22",
                "label": "Maradi"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "318.88",
                "y": "371.25",
                "label": "Zinder"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "275.93",
                "y": "228.06",
                "label": "Agadez",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "249.34",
                "y": "172.84",
                "label": "Arlit",
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
            "id": "NE.AG"
        },
        {
            "id": "NE.DF"
        },
        {
            "id": "NE.DS"
        },
        {
            "id": "NE.MA"
        },
        {
            "id": "NE.NI"
        },
        {
            "id": "NE.TH"
        },
        {
            "id": "NE.TL"
        },
        {
            "id": "NE.ZI"
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
                "id": "NM",
                "x": "68.31",
                "y": "363.06",
                "label": "Niamey",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "107.18",
                "y": "388.63",
                "label": "Dosso",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "119.45",
                "y": "419.31",
                "label": "Gaya",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "163.43",
                "y": "309.88",
                "label": "Tahoua",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "243.2",
                "y": "370.22",
                "label": "Maradi"
            },
            {
                "id": "05",
                "x": "318.88",
                "y": "371.25",
                "label": "Zinder"
            },
            {
                "id": "06",
                "x": "275.93",
                "y": "228.06",
                "label": "Agadez",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "249.34",
                "y": "172.84",
                "label": "Arlit",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "NM",
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
		<entity id='NE.AG'  />
		<entity id='NE.DF'  />
		<entity id='NE.DS'  />
		<entity id='NE.MA'  />
		<entity id='NE.NI'  />
		<entity id='NE.TH'  />
		<entity id='NE.TL'  />
		<entity id='NE.ZI'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='NM' x='68.31' y='363.06' label='Niamey' labelPos='bottom'  />
			<marker id='01' x='107.18' y='388.63' label='Dosso' labelPos='right'  />
			<marker id='02' x='119.45' y='419.31' label='Gaya' labelPos='right'  />
			<marker id='03' x='163.43' y='309.88' label='Tahoua' labelPos='right'  />
			<marker id='04' x='243.2' y='370.22' label='Maradi'  />
			<marker id='05' x='318.88' y='371.25' label='Zinder'  />
			<marker id='06' x='275.93' y='228.06' label='Agadez' labelPos='left'  />
			<marker id='07' x='249.34' y='172.84' label='Arlit' labelPos='left'  />
		</definition>
		<application>
			<marker id='NM' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
