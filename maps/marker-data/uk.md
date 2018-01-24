---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: UK

#### JavaScript Alias: maps/uk


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
                "id": "LO",
                "shapeid": "myCustomShape",
                "x": "262.85",
                "y": "453.22",
                "label": "London"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "190.23",
                "y": "138.52",
                "label": "Aberdeen",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "166.02",
                "y": "168.1",
                "label": "Dundee",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "164.68",
                "y": "203.07",
                "label": "Edinburgh",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "132.4",
                "y": "219.21",
                "label": "Glasgow",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "211.75",
                "y": "259.56",
                "label": "Newcastle",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "229.23",
                "y": "281.07",
                "label": "Middlesbrough",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "194.26",
                "y": "338.9",
                "label": "Manchester",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "170.05",
                "y": "349.66",
                "label": "Liverpool",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "163.33",
                "y": "450.53",
                "label": "Cardiff",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "217.13",
                "y": "488.19",
                "label": "Southampton",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "190.23",
                "y": "461.29",
                "label": "Bristol",
                "labelpos": "right"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "297.82",
                "y": "473.39",
                "label": "Dover",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "124.33",
                "y": "516.43",
                "label": "Plymouth",
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
                "id": "LO",
                "x": "262.85",
                "y": "453.22",
                "label": "London"
            },
            {
                "id": "01",
                "x": "190.23",
                "y": "138.52",
                "label": "Aberdeen",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "166.02",
                "y": "168.1",
                "label": "Dundee",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "164.68",
                "y": "203.07",
                "label": "Edinburgh",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "132.4",
                "y": "219.21",
                "label": "Glasgow",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "211.75",
                "y": "259.56",
                "label": "Newcastle",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "229.23",
                "y": "281.07",
                "label": "Middlesbrough",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "244.02",
                "y": "321.42",
                "label": "Hull"
            },
            {
                "id": "08",
                "x": "194.26",
                "y": "338.9",
                "label": "Manchester",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "170.05",
                "y": "349.66",
                "label": "Liverpool",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "163.33",
                "y": "450.53",
                "label": "Cardiff",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "190.23",
                "y": "461.29",
                "label": "Bristol",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "217.13",
                "y": "488.19",
                "label": "Southampton",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "124.33",
                "y": "516.43",
                "label": "Plymouth",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "233.26",
                "y": "492.22",
                "label": "Portsmouth",
                "labelpos": "right"
            },
            {
                "id": "15",
                "x": "297.82",
                "y": "473.39",
                "label": "Dover",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "LO",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
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
			<marker id='LO' x='262.85' y='453.22' label='London'  />
			<marker id='01' x='190.23' y='138.52' label='Aberdeen' labelPos='right'  />
			<marker id='02' x='166.02' y='168.1' label='Dundee' labelPos='right'  />
			<marker id='03' x='164.68' y='203.07' label='Edinburgh' labelPos='right'  />
			<marker id='04' x='132.4' y='219.21' label='Glasgow' labelPos='left'  />
			<marker id='05' x='211.75' y='259.56' label='Newcastle' labelPos='left'  />
			<marker id='06' x='229.23' y='281.07' label='Middlesbrough' labelPos='left'  />
			<marker id='07' x='244.02' y='321.42' label='Hull'  />
			<marker id='08' x='194.26' y='338.9' label='Manchester' labelPos='right'  />
			<marker id='09' x='170.05' y='349.66' label='Liverpool' labelPos='left'  />
			<marker id='10' x='163.33' y='450.53' label='Cardiff' labelPos='left'  />
			<marker id='11' x='190.23' y='461.29' label='Bristol' labelPos='right'  />
			<marker id='12' x='217.13' y='488.19' label='Southampton' labelPos='left'  />
			<marker id='13' x='124.33' y='516.43' label='Plymouth' labelPos='left'  />
			<marker id='14' x='233.26' y='492.22' label='Portsmouth' labelPos='right'  />
			<marker id='15' x='297.82' y='473.39' label='Dover' labelPos='left'  />


		</definition>
		<application>
			<marker id='LO' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
