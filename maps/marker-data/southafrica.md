---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SouthAfrica

#### JavaScript Alias: maps/southafrica


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
                "id": "PR",
                "shapeid": "myCustomShape",
                "x": "312.95",
                "y": "128.55",
                "label": "Pretoria",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "368.18",
                "y": "10.94",
                "label": "Messina"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "349.77",
                "y": "41.62",
                "label": "Pietersburg"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "276.13",
                "y": "111.17",
                "label": "Johannesburg",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "405",
                "y": "204.23",
                "label": "Richards Bay",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "379.43",
                "y": "230.82",
                "label": "Durban",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "355.9",
                "y": "181.73",
                "label": "Ladysmith",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "122.72",
                "y": "182.76",
                "label": "Upington"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "180",
                "y": "192.98",
                "label": "Kimberley",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "218.86",
                "y": "214.46",
                "label": "Bloemfontein",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "186.13",
                "y": "256.39",
                "label": "De Aar",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "299.65",
                "y": "323.89",
                "label": "East London",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "240.34",
                "y": "353.55",
                "label": "Port Elizabeth",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "150.34",
                "y": "358.67",
                "label": "Mosselbaai"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "60.34",
                "y": "357.64",
                "label": "Cape Town",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "51.13",
                "y": "322.87",
                "label": "Saldanha",
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
                "id": "PR",
                "x": "312.95",
                "y": "128.55",
                "label": "Pretoria",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "368.18",
                "y": "10.94",
                "label": "Messina"
            },
            {
                "id": "02",
                "x": "349.77",
                "y": "41.62",
                "label": "Pietersburg"
            },
            {
                "id": "03",
                "x": "276.13",
                "y": "111.17",
                "label": "Johannesburg",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "405",
                "y": "204.23",
                "label": "Richards Bay",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "379.43",
                "y": "230.82",
                "label": "Durban",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "355.9",
                "y": "181.73",
                "label": "Ladysmith",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "122.72",
                "y": "182.76",
                "label": "Upington"
            },
            {
                "id": "08",
                "x": "180",
                "y": "192.98",
                "label": "Kimberley",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "218.86",
                "y": "214.46",
                "label": "Bloemfontein",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "186.13",
                "y": "256.39",
                "label": "De Aar",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "299.65",
                "y": "323.89",
                "label": "East London",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "240.34",
                "y": "353.55",
                "label": "Port Elizabeth",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "150.34",
                "y": "358.67",
                "label": "Mosselbaai"
            },
            {
                "id": "14",
                "x": "60.34",
                "y": "357.64",
                "label": "Cape Town",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "51.13",
                "y": "322.87",
                "label": "Saldanha",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "PR",
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
            },
            {
                "id": "15",
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
			<marker id='PR' x='312.95' y='128.55' label='Pretoria' labelPos='right'  />
			<marker id='01' x='368.18' y='10.94' label='Messina'  />
			<marker id='02' x='349.77' y='41.62' label='Pietersburg'  />
			<marker id='03' x='276.13' y='111.17' label='Johannesburg' labelPos='left'  />
			<marker id='04' x='405' y='204.23' label='Richards Bay' labelPos='left'  />
			<marker id='05' x='379.43' y='230.82' label='Durban' labelPos='right'  />
			<marker id='06' x='355.9' y='181.73' label='Ladysmith' labelPos='right'  />
			<marker id='07' x='122.72' y='182.76' label='Upington'  />
			<marker id='08' x='180' y='192.98' label='Kimberley' labelPos='right'  />
			<marker id='09' x='218.86' y='214.46' label='Bloemfontein' labelPos='left'  />
			<marker id='10' x='186.13' y='256.39' label='De Aar' labelPos='left'  />
			<marker id='11' x='299.65' y='323.89' label='East London' labelPos='right'  />
			<marker id='12' x='240.34' y='353.55' label='Port Elizabeth' labelPos='right'  />
			<marker id='13' x='150.34' y='358.67' label='Mosselbaai'  />
			<marker id='14' x='60.34' y='357.64' label='Cape Town' labelPos='left'  />
			<marker id='15' x='51.13' y='322.87' label='Saldanha' labelPos='right'  />

		</definition>
		<application>
			<marker id='PR' shapeId='myCustomShape'  />
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
			<marker id='15' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
