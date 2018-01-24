---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Belarus

#### JavaScript Alias: maps/belarus


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
                "id": "MI",
                "shapeid": "myCustomShape",
                "x": "139.42",
                "y": "107.29",
                "label": "Minsk"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "186.3",
                "y": "27.08",
                "label": "Polatsk"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "232.13",
                "y": "72.91",
                "label": "Orsha",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "219.63",
                "y": "35.41",
                "label": "Vitsyebsk",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "245.67",
                "y": "114.58",
                "label": "Mahilyow"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "210.26",
                "y": "134.37",
                "label": "Babruysk",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "249.84",
                "y": "180.2",
                "label": "Homyel'"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "210.26",
                "y": "209.37",
                "label": "Mazyr"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "101.92",
                "y": "204.16",
                "label": "Pinsk"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "25.88",
                "y": "205.2",
                "label": "Brest",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "37.34",
                "y": "118.75",
                "label": "Hrodna",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "127.96",
                "y": "136.45",
                "label": "Baranavichy"
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
                "id": "MI",
                "x": "139.42",
                "y": "107.29",
                "label": "Minsk"
            },
            {
                "id": "01",
                "x": "186.3",
                "y": "27.08",
                "label": "Polatsk"
            },
            {
                "id": "03",
                "x": "232.13",
                "y": "72.91",
                "label": "Orsha",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "219.63",
                "y": "35.41",
                "label": "Vitsyebsk",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "245.67",
                "y": "114.58",
                "label": "Mahilyow"
            },
            {
                "id": "05",
                "x": "210.26",
                "y": "134.37",
                "label": "Babruysk",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "249.84",
                "y": "180.2",
                "label": "Homyel'"
            },
            {
                "id": "08",
                "x": "210.26",
                "y": "209.37",
                "label": "Mazyr"
            },
            {
                "id": "06",
                "x": "101.92",
                "y": "204.16",
                "label": "Pinsk"
            },
            {
                "id": "09",
                "x": "25.88",
                "y": "205.2",
                "label": "Brest",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "37.34",
                "y": "118.75",
                "label": "Hrodna",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "127.96",
                "y": "136.45",
                "label": "Baranavichy"
            }
        ],
        "application": [
            {
                "id": "MI",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
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
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
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
<map>
	<markers>
	   <shapes>
	        <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			<shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='MI' x='139.42' y='107.29' label='Minsk'  />
			<marker id='01' x='186.3' y='27.08' label='Polatsk'  />
			<marker id='03' x='232.13' y='72.91' label='Orsha' labelPos='right' />
			<marker id='02' x='219.63' y='35.41' label='Vitsyebsk' labelPos='right' />
			<marker id='04' x='245.67' y='114.58' label='Mahilyow'  />
			<marker id='05' x='210.26' y='134.37' label='Babruysk' labelPos='right' />
			<marker id='07' x='249.84' y='180.2' label="Homyel'"  />
			<marker id='08' x='210.26' y='209.37' label='Mazyr'  />
			<marker id='06' x='101.92' y='204.16' label='Pinsk'  />
			<marker id='09' x='25.88' y='205.2' label='Brest' labelPos='right' />
			<marker id='11' x='37.34' y='118.75' label='Hrodna' labelPos='right' />
			<marker id='10' x='127.96' y='136.45' label='Baranavichy'  />
		</definition>
		<application>
			<marker id='MI' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
