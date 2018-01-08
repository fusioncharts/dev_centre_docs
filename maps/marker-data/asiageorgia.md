---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: AsiaGeorgia

#### JavaScript Alias: maps/asiageorgia


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
                "id": "TB",
                "shapeid": "myCustomShape",
                "x": "403.1",
                "y": "220.6",
                "label": "T'Bilisi",
                "labelpos": "top"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "111.02",
                "y": "96.32",
                "label": "Sokhumi",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "182.49",
                "y": "140.85",
                "label": "Zugdidi"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "144.17",
                "y": "176.07",
                "label": "Pot'i"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "161.77",
                "y": "191.6",
                "label": "Supsa",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "140.02",
                "y": "225.78",
                "label": "Bat'umi"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "246.7",
                "y": "166.75",
                "label": "K'ut'aisi"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "304.7",
                "y": "232",
                "label": "Akhalts'ikhe"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "366.85",
                "y": "254.78",
                "label": "Akhalk'alak'i"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "384.45",
                "y": "155.35",
                "label": "T'skhinvali"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "398.95",
                "y": "184.35",
                "label": "Gori"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "427.95",
                "y": "236.14",
                "label": "Rust'avi",
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
                "id": "TB",
                "x": "403.1",
                "y": "220.6",
                "label": "T'Bilisi",
                "labelpos": "top"
            },
            {
                "id": "01",
                "x": "111.02",
                "y": "96.32",
                "label": "Sokhumi",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "182.49",
                "y": "140.85",
                "label": "Zugdidi"
            },
            {
                "id": "03",
                "x": "144.17",
                "y": "176.07",
                "label": "Pot'i"
            },
            {
                "id": "05",
                "x": "140.02",
                "y": "225.78",
                "label": "Bat'umi"
            },
            {
                "id": "06",
                "x": "246.7",
                "y": "166.75",
                "label": "K'ut'aisi"
            },
            {
                "id": "04",
                "x": "161.77",
                "y": "191.6",
                "label": "Supsa",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "304.7",
                "y": "232",
                "label": "Akhalts'ikhe"
            },
            {
                "id": "08",
                "x": "366.85",
                "y": "254.78",
                "label": "Akhalk'alak'i"
            },
            {
                "id": "09",
                "x": "384.45",
                "y": "155.35",
                "label": "T'skhinvali"
            },
            {
                "id": "10",
                "x": "398.95",
                "y": "184.35",
                "label": "Gori"
            },
            {
                "id": "11",
                "x": "427.95",
                "y": "236.14",
                "label": "Rust'avi",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "TB",
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
			<marker id='TB' x='403.1' y='220.6' label="T'Bilisi" labelPos='top'/>
			<marker id='01' x='111.02' y='96.32' label='Sokhumi' labelPos='right' />
			<marker id='02' x='182.49' y='140.85' label='Zugdidi'  />
			<marker id='03' x='144.17' y='176.07' label="Pot'i"  />
			<marker id='05' x='140.02' y='225.78' label="Bat'umi"  />
			<marker id='06' x='246.7' y='166.75' label="K'ut'aisi"  />
			<marker id='04' x='161.77' y='191.6' label='Supsa' labelPos='right' />
			<marker id='07' x='304.7' y='232' label="Akhalts'ikhe"  />
			<marker id='08' x='366.85' y='254.78' label="Akhalk'alak'i"  />
			<marker id='09' x='384.45' y='155.35' label="T'skhinvali"  />
			<marker id='10' x='398.95' y='184.35' label='Gori'  />
			<marker id='11' x='427.95' y='236.14' label="Rust'avi" labelPos='right' />

		</definition>
		<application>
			<marker id='TB' shapeId='myCustomShape'  />
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
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
