---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: WestVirginia

#### JavaScript Alias: maps/westvirginia


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
                "id": "CH",
                "shapeid": "myCustomShape",
                "x": "159.86",
                "y": "395.59",
                "label": "Charleston",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "305.28",
                "y": "58.98",
                "label": "Weirton",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "292.06",
                "y": "128.13",
                "label": "Wheeling",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "389.69",
                "y": "203.38",
                "label": "Morgantown",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "374.44",
                "y": "221.69",
                "label": "Fairmont",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "322.57",
                "y": "252.2",
                "label": "Clarksburg"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "361.22",
                "y": "289.83",
                "label": "Elkins",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "171.05",
                "y": "259.32",
                "label": "Parkersburg"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "646.98",
                "y": "216.61",
                "label": "Martinsburg",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "89.69",
                "y": "369.15",
                "label": "Huntington"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "119.18",
                "y": "385.42",
                "label": "St Albans",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "116.13",
                "y": "488.13",
                "label": "Logan"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "224.94",
                "y": "463.72",
                "label": "Beckley"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "247.32",
                "y": "570.5",
                "label": "Princeton"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "222.91",
                "y": "584.74",
                "label": "Bluefield",
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
                "id": "CH",
                "x": "159.86",
                "y": "395.59",
                "label": "Charleston",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "305.28",
                "y": "58.98",
                "label": "Weirton",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "292.06",
                "y": "128.13",
                "label": "Wheeling",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "389.69",
                "y": "203.38",
                "label": "Morgantown",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "374.44",
                "y": "221.69",
                "label": "Fairmont",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "322.57",
                "y": "252.2",
                "label": "Clarksburg"
            },
            {
                "id": "06",
                "x": "361.22",
                "y": "289.83",
                "label": "Elkins",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "171.05",
                "y": "259.32",
                "label": "Parkersburg"
            },
            {
                "id": "08",
                "x": "646.98",
                "y": "216.61",
                "label": "Martinsburg",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "89.69",
                "y": "369.15",
                "label": "Huntington"
            },
            {
                "id": "10",
                "x": "119.18",
                "y": "385.42",
                "label": "St Albans",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "116.13",
                "y": "488.13",
                "label": "Logan"
            },
            {
                "id": "12",
                "x": "224.94",
                "y": "463.72",
                "label": "Beckley"
            },
            {
                "id": "13",
                "x": "247.32",
                "y": "570.5",
                "label": "Princeton"
            },
            {
                "id": "14",
                "x": "222.91",
                "y": "584.74",
                "label": "Bluefield",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "CH",
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
<map>
	<markers>
	   <shapes>
	        <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			<shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='CH' x='159.86' y='395.59' label='Charleston' labelPos='right'  />
			<marker id='01' x='305.28' y='58.98' label='Weirton' labelPos='left'  />
			<marker id='02' x='292.06' y='128.13' label='Wheeling' labelPos='left'  />
			<marker id='03' x='389.69' y='203.38' label='Morgantown' labelPos='left'  />
			<marker id='04' x='374.44' y='221.69' label='Fairmont' labelPos='right'  />
			<marker id='05' x='322.57' y='252.2' label='Clarksburg'  />
			<marker id='06' x='361.22' y='289.83' label='Elkins' labelPos='right'  />
			<marker id='07' x='171.05' y='259.32' label='Parkersburg'  />
			<marker id='08' x='646.98' y='216.61' label='Martinsburg' labelPos='left'  />
			<marker id='09' x='89.69' y='369.15' label='Huntington'  />
			<marker id='10' x='119.18' y='385.42' label='St Albans' labelPos='right' />
			<marker id='11' x='116.13' y='488.13' label='Logan'  />
			<marker id='12' x='224.94' y='463.72' label='Beckley'  />
			<marker id='13' x='247.32' y='570.5' label='Princeton'  />
			<marker id='14' x='222.91' y='584.74' label='Bluefield' labelPos='left'/>
		</definition>
		<application>
			<marker id='CH' shapeId='myCustomShape'  />
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
