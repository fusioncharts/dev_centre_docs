---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Madagascar

#### JavaScript Alias: maps/madagascar


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
            "id": "MG.AV"
        },
        {
            "id": "MG.AS"
        },
        {
            "id": "MG.FI"
        },
        {
            "id": "MG.MA"
        },
        {
            "id": "MG.TM"
        },
        {
            "id": "MG.TL"
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
                "id": "AN",
                "shapeid": "myCustomShape",
                "x": "127.8",
                "y": "218.63",
                "label": "Antananarivo",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "180.19",
                "y": "21.68",
                "label": "Antsiranana",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "163.42",
                "y": "46.82",
                "label": "Antshimbondrona",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "84.85",
                "y": "119.11",
                "label": "Mahajanga",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "174.95",
                "y": "195.59",
                "label": "Toamasina",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "141.42",
                "y": "169.4",
                "label": "Amparafaravola"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "127.8",
                "y": "234.35",
                "label": "Antanifotsy",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "106.85",
                "y": "247.97",
                "label": "Antsirabe",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "39.8",
                "y": "252.16",
                "label": "Morondava",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "141.42",
                "y": "274.16",
                "label": "Mananjary",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "117.33",
                "y": "290.92",
                "label": "Fianarantsoa",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "134.09",
                "y": "309.78",
                "label": "Manakara",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "25.14",
                "y": "333.87",
                "label": "Toliara",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "114.19",
                "y": "372.63",
                "label": "Tolanaro",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "86.95",
                "y": "385.2",
                "label": "Ambovombe",
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
            "id": "MG.AV"
        },
        {
            "id": "MG.AS"
        },
        {
            "id": "MG.FI"
        },
        {
            "id": "MG.MA"
        },
        {
            "id": "MG.TM"
        },
        {
            "id": "MG.TL"
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
                "id": "AN",
                "x": "127.8",
                "y": "218.63",
                "label": "Antananarivo",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "180.19",
                "y": "21.68",
                "label": "Antsiranana",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "163.42",
                "y": "46.82",
                "label": "Antshimbondrona",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "84.85",
                "y": "119.11",
                "label": "Mahajanga",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "174.95",
                "y": "195.59",
                "label": "Toamasina",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "141.42",
                "y": "169.4",
                "label": "Amparafaravola"
            },
            {
                "id": "06",
                "x": "127.8",
                "y": "234.35",
                "label": "Antanifotsy",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "106.85",
                "y": "247.97",
                "label": "Antsirabe",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "39.8",
                "y": "252.16",
                "label": "Morondava",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "141.42",
                "y": "274.16",
                "label": "Mananjary",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "117.33",
                "y": "290.92",
                "label": "Fianarantsoa",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "134.09",
                "y": "309.78",
                "label": "Manakara",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "25.14",
                "y": "333.87",
                "label": "Toliara",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "114.19",
                "y": "372.63",
                "label": "Tolanaro",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "86.95",
                "y": "385.2",
                "label": "Ambovombe",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "AN",
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
		<entity id='MG.AV'  />
		<entity id='MG.AS'  />
		<entity id='MG.FI'  />
		<entity id='MG.MA'  />
		<entity id='MG.TM'  />
		<entity id='MG.TL'  />
	</data>
	<markers>
		   <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='AN' x='127.8' y='218.63' label='Antananarivo' labelPos='left'  />
			<marker id='01' x='180.19' y='21.68' label='Antsiranana' labelPos='left'  />
			<marker id='02' x='163.42' y='46.82' label='Antshimbondrona' labelPos='left'  />
			<marker id='03' x='84.85' y='119.11' label='Mahajanga' labelPos='right'  />
			<marker id='04' x='174.95' y='195.59' label='Toamasina' labelPos='left'  />
			<marker id='05' x='141.42' y='169.4' label='Amparafaravola'  />
			<marker id='06' x='127.8' y='234.35' label='Antanifotsy' labelPos='left'  />
			<marker id='07' x='106.85' y='247.97' label='Antsirabe' labelPos='right'  />
			<marker id='08' x='39.8' y='252.16' label='Morondava' labelPos='right'  />
			<marker id='09' x='141.42' y='274.16' label='Mananjary' labelPos='right'  />
			<marker id='10' x='117.33' y='290.92' label='Fianarantsoa' labelPos='left'  />
			<marker id='11' x='134.09' y='309.78' label='Manakara' labelPos='right'  />
			<marker id='12' x='25.14' y='333.87' label='Toliara' labelPos='right'  />
			<marker id='13' x='114.19' y='372.63' label='Tolanaro' labelPos='right'  />
			<marker id='14' x='86.95' y='385.2' label='Ambovombe' labelPos='left'  />
		</definition>
		<application>
			<marker id='AN' shapeId='myCustomShape'  />
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
