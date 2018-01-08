---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Ireland

#### JavaScript Alias: maps/ireland


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
                "id": "DU",
                "shapeid": "myCustomShape",
                "x": "329.2",
                "y": "262.97",
                "label": "Dublin",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "235.85",
                "y": "63.48",
                "label": "Lifford",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "158.21",
                "y": "154.87",
                "label": "Sligo",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "94.34",
                "y": "201.06",
                "label": "Castlebar"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "114.97",
                "y": "274.76",
                "label": "Galway",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "132.66",
                "y": "348.47",
                "label": "Shannon",
                "labelpos": "top"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "139.54",
                "y": "355.35",
                "label": "Limerick",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "111.04",
                "y": "364.19",
                "label": "Foynes",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "80.58",
                "y": "425.12",
                "label": "Killarney"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "168.04",
                "y": "455.58",
                "label": "Cork"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "273.19",
                "y": "409.39",
                "label": "Waterford"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "288.91",
                "y": "378.93",
                "label": "New Ross"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "337.07",
                "y": "333.73",
                "label": "Arklow",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "260.41",
                "y": "234.47",
                "label": "Tullamore"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "279.09",
                "y": "152.91",
                "label": "Monaghan"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "315.45",
                "y": "190.25",
                "label": "Drogheda",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "343.95",
                "y": "302.28",
                "label": "Wicklow",
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
                "id": "DU",
                "x": "329.2",
                "y": "262.97",
                "label": "Dublin",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "235.85",
                "y": "63.48",
                "label": "Lifford",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "x": "158.21",
                "y": "154.87",
                "label": "Sligo",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "94.34",
                "y": "201.06",
                "label": "Castlebar"
            },
            {
                "id": "04",
                "x": "114.97",
                "y": "274.76",
                "label": "Galway",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "132.66",
                "y": "348.47",
                "label": "Shannon",
                "labelpos": "top"
            },
            {
                "id": "06",
                "x": "139.54",
                "y": "355.35",
                "label": "Limerick",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "111.04",
                "y": "364.19",
                "label": "Foynes",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "80.58",
                "y": "425.12",
                "label": "Killarney"
            },
            {
                "id": "09",
                "x": "168.04",
                "y": "455.58",
                "label": "Cork"
            },
            {
                "id": "10",
                "x": "273.19",
                "y": "409.39",
                "label": "Waterford"
            },
            {
                "id": "11",
                "x": "288.91",
                "y": "378.93",
                "label": "New Ross"
            },
            {
                "id": "12",
                "x": "337.07",
                "y": "333.73",
                "label": "Arklow",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "260.41",
                "y": "234.47",
                "label": "Tullamore"
            },
            {
                "id": "15",
                "x": "279.09",
                "y": "152.91",
                "label": "Monaghan"
            },
            {
                "id": "20",
                "x": "315.45",
                "y": "190.25",
                "label": "Drogheda",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "343.95",
                "y": "302.28",
                "label": "Wicklow",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "DU",
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
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
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
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
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
	        <shape id='myCustomShape'  type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showborder='0' radius='4'/>
			<shape id='newCustomShape'  type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showborder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='DU' x='329.2' y='262.97' label='Dublin' labelPos='left' />
			<marker id='01' x='235.85' y='63.48' label='Lifford' labelPos='bottom' />
			<marker id='02' x='158.21' y='154.87' label='Sligo' labelPos='bottom' />
			<marker id='03' x='94.34' y='201.06' label='Castlebar'  />
			<marker id='04' x='114.97' y='274.76' label='Galway' labelPos='right' />
			<marker id='05' x='132.66' y='348.47' label='Shannon' labelPos='top' />
			<marker id='06' x='139.54' y='355.35' label='Limerick' labelPos='right' />
			<marker id='08' x='111.04' y='364.19' label='Foynes' labelPos='right' />
			<marker id='07' x='80.58' y='425.12' label='Killarney'  />
			<marker id='09' x='168.04' y='455.58' label='Cork'  />
			<marker id='10' x='273.19' y='409.39' label='Waterford'  />
			<marker id='11' x='288.91' y='378.93' label='New Ross'  />
			<marker id='12' x='337.07' y='333.73' label='Arklow' labelPos='left' />
			<marker id='17' x='260.41' y='234.47' label='Tullamore'  />
			<marker id='15' x='279.09' y='152.91' label='Monaghan'  />
			<marker id='20' x='315.45' y='190.25' label='Drogheda' labelPos='left'  />
			<marker id='16' x='343.95' y='302.28' label='Wicklow' labelPos='left' />

		</definition>
		<application>
			<marker id='DU' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
