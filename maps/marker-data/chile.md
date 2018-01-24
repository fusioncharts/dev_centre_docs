---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Chile

#### JavaScript Alias: maps/chile


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
                "id": "SN",
                "shapeid": "myCustomShape",
                "x": "84.21",
                "y": "223.1",
                "label": "Santiago",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "87.36",
                "y": "26.26",
                "label": "Arica"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "89.47",
                "y": "52.57",
                "label": "Iquique",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "88.42",
                "y": "99.94",
                "label": "Antofagasta"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "72.63",
                "y": "292.57",
                "label": "Rancagua",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "81.05",
                "y": "147.31",
                "label": "Chanaral",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "75.78",
                "y": "185.21",
                "label": "Coquimbo",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "69.47",
                "y": "246.26",
                "label": "Valparaiso",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "67.36",
                "y": "258.89",
                "label": "San Antonio",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "58.94",
                "y": "347.31",
                "label": "Puerto Montt",
                "labelpos": "right"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "57.89",
                "y": "322.05",
                "label": "Lebu",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "55.78",
                "y": "310.47",
                "label": "Concepcion",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "54.73",
                "y": "298.89",
                "label": "Talcahuano",
                "labelpos": "right"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "82.1",
                "y": "537.84",
                "label": "Punta Arenas",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "64.21",
                "y": "333.63",
                "label": "Temuco",
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
    "map": {},
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
                "id": "SN",
                "x": "84.21",
                "y": "223.1",
                "label": "Santiago",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "87.36",
                "y": "26.26",
                "label": "Arica"
            },
            {
                "id": "02",
                "x": "89.47",
                "y": "52.57",
                "label": "Iquique",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "88.42",
                "y": "99.94",
                "label": "Antofagasta"
            },
            {
                "id": "09",
                "x": "72.63",
                "y": "292.57",
                "label": "Rancagua",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "81.05",
                "y": "147.31",
                "label": "Chanaral",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "75.78",
                "y": "185.21",
                "label": "Coquimbo",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "69.47",
                "y": "246.26",
                "label": "Valparaiso",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "67.36",
                "y": "258.89",
                "label": "San Antonio",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "58.94",
                "y": "347.31",
                "label": "Puerto Montt",
                "labelpos": "right"
            },
            {
                "id": "15",
                "x": "57.89",
                "y": "322.05",
                "label": "Lebu",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "55.78",
                "y": "310.47",
                "label": "Concepcion",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "54.73",
                "y": "298.89",
                "label": "Talcahuano",
                "labelpos": "right"
            },
            {
                "id": "16",
                "x": "82.1",
                "y": "537.84",
                "label": "Punta Arenas",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "64.21",
                "y": "333.63",
                "label": "Temuco",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "SN",
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
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
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
<map>
	<markers>
	     <shapes>
		      <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			  <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='SN' x='84.21' y='223.1' label='Santiago' labelPos='right'  />
			<marker id='01' x='87.36' y='26.26' label='Arica'  />
			<marker id='02' x='89.47' y='52.57' label='Iquique' labelPos='left'  />
			<marker id='03' x='88.42' y='99.94' label='Antofagasta'  />
			<marker id='09' x='72.63' y='292.57' label='Rancagua' labelPos='left'  />
			<marker id='10' x='81.05' y='147.31' label='Chanaral' labelPos='right' />
			<marker id='11' x='75.78' y='185.21' label='Coquimbo' labelPos='right' />
			<marker id='05' x='69.47' y='246.26' label='Valparaiso' labelPos='left' />
			<marker id='06' x='67.36' y='258.89' label='San Antonio' labelPos='right' />
			<marker id='08' x='58.94' y='347.31' label='Puerto Montt' labelPos='right'  />
			<marker id='15' x='57.89' y='322.05' label='Lebu' labelPos='left'  />
			<marker id='04' x='55.78' y='310.47' label='Concepcion' labelPos='right'  />
			<marker id='14' x='54.73' y='298.89' label='Talcahuano' labelPos='right'  />
			<marker id='16' x='82.1' y='537.84' label='Punta Arenas' labelPos='left'  />
			<marker id='13' x='64.21' y='333.63' label='Temuco' labelPos='right' />

		</definition>
		<application>
			<marker id='SN' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
