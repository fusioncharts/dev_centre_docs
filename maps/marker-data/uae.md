---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: UAE

#### JavaScript Alias: maps/uae


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
                "id": "AD",
                "shapeid": "myCustomShape",
                "x": "335.16",
                "y": "223.07",
                "label": "Abu Dhabi",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "141.77",
                "y": "270.14",
                "label": "Ar Ruways",
                "labelpos": "bottom"
            },
            {
                "id": "02`",
                "shapeid": "newCustomShape",
                "x": "197.02",
                "y": "379.62",
                "label": "Qutuf"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "499.91",
                "y": "255.81",
                "label": "Al Ayn",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "403.72",
                "y": "159.62",
                "label": "Mina Jabal Ali",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "435.44",
                "y": "124.83",
                "label": "Dubai",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "444.65",
                "y": "111.53",
                "label": "Sharjah",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "454.89",
                "y": "101.3",
                "label": "Ajmar",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "471.26",
                "y": "80.83",
                "label": "Umm al Qaywayn",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "519.35",
                "y": "39.9",
                "label": "Rasal Khaymah",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "560.28",
                "y": "90.04",
                "label": "Khawr Fakkan",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "563.35",
                "y": "113.58",
                "label": "Al Fujayrah",
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
                "id": "AD",
                "x": "335.16",
                "y": "223.07",
                "label": "Abu Dhabi",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "141.77",
                "y": "270.14",
                "label": "Ar Ruways",
                "labelpos": "bottom"
            },
            {
                "id": "02`",
                "x": "197.02",
                "y": "379.62",
                "label": "Qutuf"
            },
            {
                "id": "03",
                "x": "499.91",
                "y": "255.81",
                "label": "Al Ayn",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "403.72",
                "y": "159.62",
                "label": "Mina Jabal Ali",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "435.44",
                "y": "124.83",
                "label": "Dubai",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "444.65",
                "y": "111.53",
                "label": "Sharjah",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "454.89",
                "y": "101.3",
                "label": "Ajmar",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "471.26",
                "y": "80.83",
                "label": "Umm al Qaywayn",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "519.35",
                "y": "39.9",
                "label": "Rasal Khaymah",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "560.28",
                "y": "90.04",
                "label": "Khawr Fakkan",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "563.35",
                "y": "113.58",
                "label": "Al Fujayrah",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "AD",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02`",
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
			<marker id='AD' x='335.16' y='223.07' label='Abu Dhabi' labelPos='left'  />
			<marker id='01' x='141.77' y='270.14' label='Ar Ruways' labelPos='bottom' />
			<marker id='02`' x='197.02' y='379.62' label='Qutuf'  />
			<marker id='03' x='499.91' y='255.81' label='Al Ayn' labelPos='left'  />
			<marker id='04' x='403.72' y='159.62' label='Mina Jabal Ali' labelPos='left'  />
			<marker id='05' x='435.44' y='124.83' label='Dubai' labelPos='left'  />
			<marker id='06' x='444.65' y='111.53' label='Sharjah' labelPos='left'  />
			<marker id='07' x='454.89' y='101.3' label='Ajmar' labelPos='left'  />
			<marker id='08' x='471.26' y='80.83' label='Umm al Qaywayn' labelPos='left'  />
			<marker id='09' x='519.35' y='39.9' label='Rasal Khaymah' labelPos='left'  />
			<marker id='10' x='560.28' y='90.04' label='Khawr Fakkan' labelPos='left'  />
			<marker id='11' x='563.35' y='113.58' label='Al Fujayrah' labelPos='left'  />

		</definition>
		<application>
			<marker id='AD' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02`' shapeId='newCustomShape'  />
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
