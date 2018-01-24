---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Albania

#### JavaScript Alias: maps/albania


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
                "id": "TR",
                "shapeid": "myCustomShape",
                "x": "65.94",
                "y": "172.11",
                "label": "Tirana",
                "labelpos": "right"
            },
            {
                "id": "EL",
                "shapeid": "newCustomShape",
                "x": "83.82",
                "y": "210.11",
                "label": "Elbasan"
            },
            {
                "id": "SH",
                "shapeid": "newCustomShape",
                "x": "32.41",
                "y": "80.47",
                "label": "Shkoder "
            },
            {
                "id": "KO",
                "shapeid": "newCustomShape",
                "x": "154.23",
                "y": "262.64",
                "label": "Korce"
            },
            {
                "id": "SA",
                "shapeid": "newCustomShape",
                "x": "81.58",
                "y": "371.05",
                "label": "Sarande"
            },
            {
                "id": "DR",
                "shapeid": "newCustomShape",
                "x": "23.47",
                "y": "176.58",
                "label": "Durres "
            },
            {
                "id": "VL",
                "shapeid": "newCustomShape",
                "x": "30.17",
                "y": "292.82",
                "label": "Vlore "
            },
            {
                "id": "SG",
                "shapeid": "newCustomShape",
                "x": "38",
                "y": "109.52",
                "label": "Shengjin"
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
                "id": "TR",
                "x": "65.94",
                "y": "172.11",
                "label": "Tirana",
                "labelpos": "right"
            },
            {
                "id": "EL",
                "x": "83.82",
                "y": "210.11",
                "label": "Elbasan"
            },
            {
                "id": "SH",
                "x": "32.41",
                "y": "80.47",
                "label": "Shkoder "
            },
            {
                "id": "KO",
                "x": "154.23",
                "y": "262.64",
                "label": "Korce"
            },
            {
                "id": "SA",
                "x": "81.58",
                "y": "371.05",
                "label": "Sarande"
            },
            {
                "id": "DR",
                "x": "23.47",
                "y": "176.58",
                "label": "Durres "
            },
            {
                "id": "VL",
                "x": "30.17",
                "y": "292.82",
                "label": "Vlore "
            },
            {
                "id": "SG",
                "x": "38",
                "y": "109.52",
                "label": "Shengjin"
            }
        ],
        "application": [
            {
                "id": "TR",
                "shapeid": "myCustomShape"
            },
            {
                "id": "EL",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SH",
                "shapeid": "newCustomShape"
            },
            {
                "id": "KO",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SA",
                "shapeid": "newCustomShape"
            },
            {
                "id": "DR",
                "shapeid": "newCustomShape"
            },
            {
                "id": "VL",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SG",
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
			<marker id='TR' x='65.94' y='172.11' label='Tirana' labelPos='right' />
			<marker id='EL' x='83.82' y='210.11' label='Elbasan'  />
			<marker id='SH' x='32.41' y='80.47' label='Shkoder '  />
			<marker id='KO' x='154.23' y='262.64' label='Korce'  />
			<marker id='SA' x='81.58' y='371.05' label='Sarande'  />
			<marker id='DR' x='23.47' y='176.58' label='Durres '  />
			<marker id='VL' x='30.17' y='292.82' label='Vlore '  />
			<marker id='SG' x='38' y='109.52' label='Shengjin'  />
		</definition>
		<application>
			<marker id='TR' shapeId='myCustomShape'  />
			<marker id='EL' shapeId='newCustomShape'  />
			<marker id='SH' shapeId='newCustomShape'  />
			<marker id='KO' shapeId='newCustomShape'  />
			<marker id='SA' shapeId='newCustomShape'  />
			<marker id='DR' shapeId='newCustomShape'  />
			<marker id='VL' shapeId='newCustomShape'  />
			<marker id='SG' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
