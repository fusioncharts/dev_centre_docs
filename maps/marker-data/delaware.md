---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Delaware

#### JavaScript Alias: maps/delaware


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
                "id": "DE",
                "shapeid": "myCustomShape",
                "x": "139.22",
                "y": "513.51",
                "label": "Dover",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "154.15",
                "y": "22.88",
                "label": "Claymont",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "119.32",
                "y": "53.73",
                "label": "Wilmington"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "20.79",
                "y": "85.58",
                "label": "Newark"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "54.63",
                "y": "221.92",
                "label": "Middletown"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "94.44",
                "y": "301.53",
                "label": "Smytna"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "151.16",
                "y": "567.25",
                "label": "Milford"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "305.42",
                "y": "632.93",
                "label": "Lewes",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "184",
                "y": "683.68",
                "label": "Georgetown"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "72.54",
                "y": "704.58",
                "label": "Seaford"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "330.3",
                "y": "682.69",
                "label": "Reltoboth Beach",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "336.27",
                "y": "746.38",
                "label": "Bethany Beach",
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
                "id": "DE",
                "x": "139.22",
                "y": "513.51",
                "label": "Dover",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "154.15",
                "y": "22.88",
                "label": "Claymont",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "119.32",
                "y": "53.73",
                "label": "Wilmington"
            },
            {
                "id": "03",
                "x": "20.79",
                "y": "85.58",
                "label": "Newark"
            },
            {
                "id": "04",
                "x": "54.63",
                "y": "221.92",
                "label": "Middletown"
            },
            {
                "id": "05",
                "x": "94.44",
                "y": "301.53",
                "label": "Smytna"
            },
            {
                "id": "06",
                "x": "151.16",
                "y": "567.25",
                "label": "Milford"
            },
            {
                "id": "08",
                "x": "305.42",
                "y": "632.93",
                "label": "Lewes",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "184",
                "y": "683.68",
                "label": "Georgetown"
            },
            {
                "id": "11",
                "x": "72.54",
                "y": "704.58",
                "label": "Seaford"
            },
            {
                "id": "12",
                "x": "330.3",
                "y": "682.69",
                "label": "Reltoboth Beach",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "336.27",
                "y": "746.38",
                "label": "Bethany Beach",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "DE",
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
                "id": "09",
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
			<marker id='DE' x='139.22' y='513.51' label='Dover' labelPos='right'  />
			<marker id='01' x='154.15' y='22.88' label='Claymont' labelPos='right'  />
			<marker id='02' x='119.32' y='53.73' label='Wilmington'  />
			<marker id='03' x='20.79' y='85.58' label='Newark'  />
			<marker id='04' x='54.63' y='221.92' label='Middletown'  />
			<marker id='05' x='94.44' y='301.53' label='Smytna' />
			<marker id='06' x='151.16' y='567.25' label='Milford'  />
			<marker id='08' x='305.42' y='632.93' label='Lewes' labelPos='left' />
			<marker id='09' x='184' y='683.68' label='Georgetown'  />
			<marker id='11' x='72.54' y='704.58' label='Seaford'  />
			<marker id='12' x='330.3' y='682.69' label='Reltoboth Beach' labelPos='left' />
			<marker id='13' x='336.27' y='746.38' label='Bethany Beach' labelPos='left'/>
		</definition>
		<application>
			<marker id='DE' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
