---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Finland

#### JavaScript Alias: maps/finland


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
                "id": "HE",
                "shapeid": "myCustomShape",
                "x": "156.92",
                "y": "435.53",
                "label": "Helsinki",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "175.72",
                "y": "65.8",
                "label": "Ivalo"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "160.06",
                "y": "183.82",
                "label": "Rovaniemi"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "144.39",
                "y": "228.73",
                "label": "Oulu",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "81.72",
                "y": "299.75",
                "label": "Kokkola",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "52.48",
                "y": "330.04",
                "label": "Vaasa",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "175.72",
                "y": "325.86",
                "label": "Kuopio"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "224.81",
                "y": "336.31",
                "label": "Joensuu"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "193.48",
                "y": "348.84",
                "label": "Varkaus",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "112.01",
                "y": "382.26",
                "label": "Tampere"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "150.66",
                "y": "406.28",
                "label": "Lahti",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "179.9",
                "y": "429.26",
                "label": "Hamina",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "163.19",
                "y": "439.71",
                "label": "Kotka",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "129.77",
                "y": "447.02",
                "label": "Loviisa",
                "labelpos": "bottom"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "60.83",
                "y": "427.17",
                "label": "Turku",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "52.48",
                "y": "398.97",
                "label": "Uusikaupunki",
                "labelpos": "right"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "55.61",
                "y": "379.13",
                "label": "Rauma",
                "labelpos": "left"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "66.06",
                "y": "361.37",
                "label": "Pori"
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
                "id": "HE",
                "x": "156.92",
                "y": "435.53",
                "label": "Helsinki",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "175.72",
                "y": "65.8",
                "label": "Ivalo"
            },
            {
                "id": "02",
                "x": "160.06",
                "y": "183.82",
                "label": "Rovaniemi"
            },
            {
                "id": "03",
                "x": "144.39",
                "y": "228.73",
                "label": "Oulu",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "81.72",
                "y": "299.75",
                "label": "Kokkola",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "52.48",
                "y": "330.04",
                "label": "Vaasa",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "175.72",
                "y": "325.86",
                "label": "Kuopio"
            },
            {
                "id": "07",
                "x": "224.81",
                "y": "336.31",
                "label": "Joensuu"
            },
            {
                "id": "08",
                "x": "193.48",
                "y": "348.84",
                "label": "Varkaus",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "112.01",
                "y": "382.26",
                "label": "Tampere"
            },
            {
                "id": "10",
                "x": "150.66",
                "y": "406.28",
                "label": "Lahti",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "179.9",
                "y": "429.26",
                "label": "Hamina",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "163.19",
                "y": "439.71",
                "label": "Kotka",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "129.77",
                "y": "447.02",
                "label": "Loviisa",
                "labelpos": "bottom"
            },
            {
                "id": "14",
                "x": "60.83",
                "y": "427.17",
                "label": "Turku",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "52.48",
                "y": "398.97",
                "label": "Uusikaupunki",
                "labelpos": "right"
            },
            {
                "id": "17",
                "x": "55.61",
                "y": "379.13",
                "label": "Rauma",
                "labelpos": "left"
            },
            {
                "id": "18",
                "x": "66.06",
                "y": "361.37",
                "label": "Pori"
            }
        ],
        "application": [
            {
                "id": "HE",
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
                "id": "12",
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
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
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
			<marker id='HE' x='156.92' y='435.53' label='Helsinki' labelPos='left'  />
			<marker id='01' x='175.72' y='65.8' label='Ivalo'  />
			<marker id='02' x='160.06' y='183.82' label='Rovaniemi'  />
			<marker id='03' x='144.39' y='228.73' label='Oulu' labelPos='right'  />
			<marker id='04' x='81.72' y='299.75' label='Kokkola' labelPos='right'  />
			<marker id='05' x='52.48' y='330.04' label='Vaasa' labelPos='left'  />
			<marker id='06' x='175.72' y='325.86' label='Kuopio'  />
			<marker id='07' x='224.81' y='336.31' label='Joensuu'  />
			<marker id='08' x='193.48' y='348.84' label='Varkaus' labelPos='left'  />
			<marker id='09' x='112.01' y='382.26' label='Tampere'  />
			<marker id='10' x='150.66' y='406.28' label='Lahti' labelPos='right'  />
			<marker id='12' x='179.9' y='429.26' label='Hamina' labelPos='right'  />
			<marker id='11' x='163.19' y='439.71' label='Kotka' labelPos='right'  />
			<marker id='13' x='129.77' y='447.02' label='Loviisa' labelPos='bottom'  />
			<marker id='14' x='60.83' y='427.17' label='Turku' labelPos='left'  />
			<marker id='16' x='52.48' y='398.97' label='Uusikaupunki' labelPos='right'  />
			<marker id='17' x='55.61' y='379.13' label='Rauma' labelPos='left'  />
			<marker id='18' x='66.06' y='361.37' label='Pori'  />

		</definition>
		<application>
			<marker id='HE' shapeId='myCustomShape'  />
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
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
