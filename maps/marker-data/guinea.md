---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Guinea

#### JavaScript Alias: maps/guinea


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
            "id": "03"
        },
        {
            "id": "04"
        },
        {
            "id": "09"
        },
        {
            "id": "32"
        },
        {
            "id": "16"
        },
        {
            "id": "34"
        },
        {
            "id": "23"
        },
        {
            "id": "38"
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
                "id": "CN",
                "shapeid": "myCustomShape",
                "x": "91.69",
                "y": "186.48",
                "label": "Conakry",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "50.48",
                "y": "116.42",
                "label": "Boke",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "47.39",
                "y": "140.12",
                "label": "Kamsar",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "103.03",
                "y": "143.21",
                "label": "Fria",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "118.48",
                "y": "171.03",
                "label": "Kindia",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "149.39",
                "y": "72.12",
                "label": "Labe",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "307.03",
                "y": "82.42",
                "label": "Siguiri",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "299.81",
                "y": "139.09",
                "label": "Kankan",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "295.69",
                "y": "234.9",
                "label": "Macenta",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "332.78",
                "y": "270.96",
                "label": "Nzerekore",
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
            "id": "03"
        },
        {
            "id": "04"
        },
        {
            "id": "09"
        },
        {
            "id": "32"
        },
        {
            "id": "16"
        },
        {
            "id": "34"
        },
        {
            "id": "23"
        },
        {
            "id": "38"
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
                "id": "CN",
                "x": "91.69",
                "y": "186.48",
                "label": "Conakry",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "50.48",
                "y": "116.42",
                "label": "Boke",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "47.39",
                "y": "140.12",
                "label": "Kamsar",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "103.03",
                "y": "143.21",
                "label": "Fria",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "118.48",
                "y": "171.03",
                "label": "Kindia",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "149.39",
                "y": "72.12",
                "label": "Labe",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "307.03",
                "y": "82.42",
                "label": "Siguiri",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "299.81",
                "y": "139.09",
                "label": "Kankan",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "295.69",
                "y": "234.9",
                "label": "Macenta",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "332.78",
                "y": "270.96",
                "label": "Nzerekore",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "CN",
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
		<entity id='03'  />
		<entity id='04'  />
		<entity id='09'  />
		<entity id='32'  />
		<entity id='16'  />
		<entity id='34'  />
		<entity id='23'  />
		<entity id='38'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='CN' x='91.69' y='186.48' label='Conakry' labelPos='bottom'  />
			<marker id='01' x='50.48' y='116.42' label='Boke' labelPos='right'  />
			<marker id='02' x='47.39' y='140.12' label='Kamsar' labelPos='right'  />
			<marker id='03' x='103.03' y='143.21' label='Fria' labelPos='right'  />
			<marker id='04' x='118.48' y='171.03' label='Kindia' labelPos='right'  />
			<marker id='05' x='149.39' y='72.12' label='Labe' labelPos='right'  />
			<marker id='06' x='307.03' y='82.42' label='Siguiri' labelPos='left'  />
			<marker id='07' x='299.81' y='139.09' label='Kankan' labelPos='right'  />
			<marker id='08' x='295.69' y='234.9' label='Macenta' labelPos='right'  />
			<marker id='09' x='332.78' y='270.96' label='Nzerekore' labelPos='left'  />
		</definition>
		<application>
			<marker id='CN' shapeId='myCustomShape'  />
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
