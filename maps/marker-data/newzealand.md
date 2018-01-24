---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NewZealand

#### JavaScript Alias: maps/newzealand


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
                "id": "WL",
                "shapeid": "myCustomShape",
                "x": "253.77",
                "y": "318.19",
                "label": "Wellington",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "127.4",
                "y": "399.36",
                "label": "Greymouth",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "227.06",
                "y": "220.59",
                "label": "New Plymouth",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "264.05",
                "y": "157.91",
                "label": "Hamilton",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "301.03",
                "y": "156.88",
                "label": "Tauranga",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "243.5",
                "y": "112.7",
                "label": "Auckland",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "377.06",
                "y": "196.95",
                "label": "Gisborne",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "328.77",
                "y": "233.94",
                "label": "Napier",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "286.65",
                "y": "277.09",
                "label": "Palmerston North",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "190.07",
                "y": "416.83",
                "label": "Christchurch",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "125.34",
                "y": "516.49",
                "label": "Dunedin",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "67.81",
                "y": "544.23",
                "label": "Invercargill",
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
                "id": "WL",
                "x": "253.77",
                "y": "318.19",
                "label": "Wellington",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "127.4",
                "y": "399.36",
                "label": "Greymouth",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "227.06",
                "y": "220.59",
                "label": "New Plymouth",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "264.05",
                "y": "157.91",
                "label": "Hamilton",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "301.03",
                "y": "156.88",
                "label": "Tauranga",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "243.5",
                "y": "112.7",
                "label": "Auckland",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "377.06",
                "y": "196.95",
                "label": "Gisborne",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "328.77",
                "y": "233.94",
                "label": "Napier",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "286.65",
                "y": "277.09",
                "label": "Palmerston North",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "190.07",
                "y": "416.83",
                "label": "Christchurch",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "125.34",
                "y": "516.49",
                "label": "Dunedin",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "67.81",
                "y": "544.23",
                "label": "Invercargill",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "WL",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
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
			<marker id='WL' x='253.77' y='318.19' label='Wellington' labelPos='right'  />
			<marker id='01' x='127.4' y='399.36' label='Greymouth' labelPos='left'  />
			<marker id='02' x='227.06' y='220.59' label='New Plymouth' labelPos='left'  />
			<marker id='03' x='264.05' y='157.91' label='Hamilton' labelPos='left'  />
			<marker id='04' x='301.03' y='156.88' label='Tauranga' labelPos='right'  />
			<marker id='05' x='243.5' y='112.7' label='Auckland' labelPos='left'  />
			<marker id='06' x='377.06' y='196.95' label='Gisborne' labelPos='left'  />
			<marker id='07' x='328.77' y='233.94' label='Napier' labelPos='left'  />
			<marker id='08' x='286.65' y='277.09' label='Palmerston North' labelPos='left'  />
			<marker id='10' x='190.07' y='416.83' label='Christchurch' labelPos='right'  />
			<marker id='11' x='125.34' y='516.49' label='Dunedin' labelPos='right'  />
			<marker id='13' x='67.81' y='544.23' label='Invercargill' labelPos='right'  />

		</definition>
		<application>
			<marker id='WL' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
