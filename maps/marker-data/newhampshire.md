---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NewHampshire

#### JavaScript Alias: maps/newhampshire


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
                "id": "CO",
                "shapeid": "myCustomShape",
                "x": "233.62",
                "y": "675.54",
                "label": "Concord "
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "242.21",
                "y": "282.15",
                "label": "Lancaster",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "331.54",
                "y": "299.33",
                "label": "Berlin"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "197.55",
                "y": "337.12",
                "label": "Littleton",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "137.42",
                "y": "392.1",
                "label": "Woodsvile",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "331.54",
                "y": "438.48",
                "label": "Conway"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "225.03",
                "y": "483.14",
                "label": "Plymouth"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "77.3",
                "y": "543.27",
                "label": "Hanover",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "104.78",
                "y": "582.78",
                "label": "Lebanon",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "65.27",
                "y": "636.03",
                "label": "Claremont",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "240.49",
                "y": "569.04",
                "label": "Franklin",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "280.01",
                "y": "512.35",
                "label": "Laconia",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "383.08",
                "y": "666.95",
                "label": "Rochester",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "400.26",
                "y": "692.72",
                "label": "Dover",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "439.77",
                "y": "752.85",
                "label": "Portsmouth"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "374.49",
                "y": "775.18",
                "label": "Exeter",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "274.85",
                "y": "842.17",
                "label": "Nashua",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "231.91",
                "y": "807.82",
                "label": "Milford",
                "labelpos": "left"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "82.45",
                "y": "785.49",
                "label": "Keene"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "276.57",
                "y": "715.05",
                "label": "Manchester",
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
                "id": "CO",
                "x": "233.62",
                "y": "675.54",
                "label": "Concord "
            },
            {
                "id": "01",
                "x": "242.21",
                "y": "282.15",
                "label": "Lancaster",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "331.54",
                "y": "299.33",
                "label": "Berlin"
            },
            {
                "id": "03",
                "x": "197.55",
                "y": "337.12",
                "label": "Littleton",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "137.42",
                "y": "392.1",
                "label": "Woodsvile",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "331.54",
                "y": "438.48",
                "label": "Conway"
            },
            {
                "id": "06",
                "x": "225.03",
                "y": "483.14",
                "label": "Plymouth"
            },
            {
                "id": "07",
                "x": "77.3",
                "y": "543.27",
                "label": "Hanover",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "104.78",
                "y": "582.78",
                "label": "Lebanon",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "65.27",
                "y": "636.03",
                "label": "Claremont",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "240.49",
                "y": "569.04",
                "label": "Franklin",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "280.01",
                "y": "512.35",
                "label": "Laconia",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "383.08",
                "y": "666.95",
                "label": "Rochester",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "400.26",
                "y": "692.72",
                "label": "Dover",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "439.77",
                "y": "752.85",
                "label": "Portsmouth"
            },
            {
                "id": "16",
                "x": "374.49",
                "y": "775.18",
                "label": "Exeter",
                "labelpos": "right"
            },
            {
                "id": "18",
                "x": "274.85",
                "y": "842.17",
                "label": "Nashua",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "231.91",
                "y": "807.82",
                "label": "Milford",
                "labelpos": "left"
            },
            {
                "id": "19",
                "x": "82.45",
                "y": "785.49",
                "label": "Keene"
            },
            {
                "id": "20",
                "x": "276.57",
                "y": "715.05",
                "label": "Manchester",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "CO",
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
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape"
            },
            {
                "id": "20",
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
			<marker id='CO' x='233.62' y='675.54' label='Concord '  />
			<marker id='01' x='242.21' y='282.15' label='Lancaster' labelPos='left'  />
			<marker id='02' x='331.54' y='299.33' label='Berlin'  />
			<marker id='03' x='197.55' y='337.12' label='Littleton' labelPos='left'  />
			<marker id='04' x='137.42' y='392.1' label='Woodsvile' labelPos='left'  />
			<marker id='05' x='331.54' y='438.48' label='Conway'  />
			<marker id='06' x='225.03' y='483.14' label='Plymouth'  />
			<marker id='07' x='77.3' y='543.27' label='Hanover' labelPos='right'  />
			<marker id='09' x='104.78' y='582.78' label='Lebanon' labelPos='right'  />
			<marker id='10' x='65.27' y='636.03' label='Claremont' labelPos='right'  />
			<marker id='11' x='240.49' y='569.04' label='Franklin' labelPos='right'  />
			<marker id='13' x='280.01' y='512.35' label='Laconia' labelPos='right'  />
			<marker id='14' x='383.08' y='666.95' label='Rochester' labelPos='left'  />
			<marker id='15' x='400.26' y='692.72' label='Dover' labelPos='left'  />
			<marker id='12' x='439.77' y='752.85' label='Portsmouth'  />
			<marker id='16' x='374.49' y='775.18' label='Exeter' labelPos='right'  />
			<marker id='18' x='274.85' y='842.17' label='Nashua' labelPos='left'  />
			<marker id='17' x='231.91' y='807.82' label='Milford' labelPos='left'  />
			<marker id='19' x='82.45' y='785.49' label='Keene'  />
			<marker id='20' x='276.57' y='715.05' label='Manchester' labelPos='left'  />
		</definition>
		<application>
			<marker id='CO' shapeId='myCustomShape'  />
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
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
