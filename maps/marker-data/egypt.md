---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Egypt

#### JavaScript Alias: maps/egypt

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
<div class='tab new-json-tab active'>
<pre><code class="language-json">
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
                "id": "CA",
                "shapeid": "myCustomShape",
                "x": "236.77",
                "y": "72.45",
                "label": "Cairo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "271.42",
                "y": "36.75",
                "label": "Port Said",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "252.52",
                "y": "28.35",
                "label": "Damietta",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "189.52",
                "y": "37.8",
                "label": "Alexandria"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "98.17",
                "y": "31.5",
                "label": "Marsa Matruh"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "37.27",
                "y": "90.3",
                "label": "Siwah"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "225.22",
                "y": "60.9",
                "label": "Tanta",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "231.52",
                "y": "91.35",
                "label": "Al Jizah",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "334.42",
                "y": "164.85",
                "label": "Sharm ash Shaykh",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "276.67",
                "y": "112.35",
                "label": "Suez",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "324.97",
                "y": "208.95",
                "label": "Bur Safajah",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "315.52",
                "y": "187.95",
                "label": "Al Ghardaqah",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "288.22",
                "y": "261.45",
                "label": "Luxor",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "293.47",
                "y": "331.8",
                "label": "Aswan",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "174.82",
                "y": "277.2",
                "label": "Al Kharijah",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "231.52",
                "y": "194.25",
                "label": "Asyut",
                "labelpos": "right"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "219.97",
                "y": "144.9",
                "label": "Al Minya",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "224.17",
                "y": "122.85",
                "label": "Bani Suwayf",
                "labelpos": "left"
            }
        ]
    }
}
</code></pre>
<p class='text-success'>New JSON format for map marker data.</p>
</div>

<div class='tab old-json-tab'>
<pre><code class="language-json">
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
                "id": "CA",
                "x": "236.77",
                "y": "72.45",
                "label": "Cairo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "271.42",
                "y": "36.75",
                "label": "Port Said",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "x": "252.52",
                "y": "28.35",
                "label": "Damietta",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "189.52",
                "y": "37.8",
                "label": "Alexandria"
            },
            {
                "id": "04",
                "x": "98.17",
                "y": "31.5",
                "label": "Marsa Matruh"
            },
            {
                "id": "05",
                "x": "37.27",
                "y": "90.3",
                "label": "Siwah"
            },
            {
                "id": "06",
                "x": "225.22",
                "y": "60.9",
                "label": "Tanta",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "231.52",
                "y": "91.35",
                "label": "Al Jizah",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "334.42",
                "y": "164.85",
                "label": "Sharm ash Shaykh",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "276.67",
                "y": "112.35",
                "label": "Suez",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "324.97",
                "y": "208.95",
                "label": "Bur Safajah",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "315.52",
                "y": "187.95",
                "label": "Al Ghardaqah",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "288.22",
                "y": "261.45",
                "label": "Luxor",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "293.47",
                "y": "331.8",
                "label": "Aswan",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "174.82",
                "y": "277.2",
                "label": "Al Kharijah",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "231.52",
                "y": "194.25",
                "label": "Asyut",
                "labelpos": "right"
            },
            {
                "id": "16",
                "x": "219.97",
                "y": "144.9",
                "label": "Al Minya",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "224.17",
                "y": "122.85",
                "label": "Bani Suwayf",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "CA",
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
                "id": "08",
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
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
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
			<marker id='CA' x='236.77' y='72.45' label='Cairo' labelPos='right'  />
			<marker id='01' x='271.42' y='36.75' label='Port Said' labelPos='bottom'  />
			<marker id='02' x='252.52' y='28.35' label='Damietta' labelPos='right'  />
			<marker id='03' x='189.52' y='37.8' label='Alexandria'  />
			<marker id='04' x='98.17' y='31.5' label='Marsa Matruh'  />
			<marker id='05' x='37.27' y='90.3' label='Siwah'  />
			<marker id='06' x='225.22' y='60.9' label='Tanta' labelPos='left'  />
			<marker id='07' x='231.52' y='91.35' label='Al Jizah' labelPos='left' />
			<marker id='09' x='334.42' y='164.85' label='Sharm ash Shaykh' labelpos='left' />
			<marker id='10' x='276.67' y='112.35' label='Suez' labelPos='right'  />
			<marker id='11' x='324.97' y='208.95' label='Bur Safajah' labelPos='left'  />
			<marker id='08' x='315.52' y='187.95' label='Al Ghardaqah' labelpos='right' />
			<marker id='12' x='288.22' y='261.45' label='Luxor' labelPos='right'  />
			<marker id='13' x='293.47' y='331.8' label='Aswan' labelPos='right'  />
			<marker id='14' x='174.82' y='277.2' label='Al Kharijah' labelPos='left' />
			<marker id='15' x='231.52' y='194.25' label='Asyut' labelPos='right'  />
			<marker id='16' x='219.97' y='144.9' label='Al Minya' labelPos='left'  />
			<marker id='17' x='224.17' y='122.85' label='Bani Suwayf' labelPos='left'  />

		</definition>
		<application>
			<marker id='CA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'/>
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>
	<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>
</div>
</div>
</div>
</div>
