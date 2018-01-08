---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Austria

#### JavaScript Alias: maps/austria


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
                "id": "VI",
                "shapeid": "myCustomShape",
                "x": "504.11",
                "y": "96.1",
                "label": "Vienna"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "356.34",
                "y": "88.86",
                "label": "Linz"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "261.27",
                "y": "148.79",
                "label": "Salzburg"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "137.27",
                "y": "202.53",
                "label": "Innsbruck"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "356.34",
                "y": "273.83",
                "label": "Klagenfurt"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "447.27",
                "y": "227.33",
                "label": "Graz"
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
                "id": "VI",
                "x": "504.11",
                "y": "96.1",
                "label": "Vienna"
            },
            {
                "id": "01",
                "x": "356.34",
                "y": "88.86",
                "label": "Linz"
            },
            {
                "id": "03",
                "x": "261.27",
                "y": "148.79",
                "label": "Salzburg"
            },
            {
                "id": "02",
                "x": "137.27",
                "y": "202.53",
                "label": "Innsbruck"
            },
            {
                "id": "04",
                "x": "356.34",
                "y": "273.83",
                "label": "Klagenfurt"
            },
            {
                "id": "05",
                "x": "447.27",
                "y": "227.33",
                "label": "Graz"
            }
        ],
        "application": [
            {
                "id": "VI",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
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
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4' />
		    <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3' />
		</shapes>
		<definition>
			<marker id='VI' x='504.11' y='96.1' label='Vienna'  />
			<marker id='01' x='356.34' y='88.86' label='Linz'  />
			<marker id='03' x='261.27' y='148.79' label='Salzburg'  />
			<marker id='02' x='137.27' y='202.53' label='Innsbruck'  />
			<marker id='04' x='356.34' y='273.83' label='Klagenfurt'  />
			<marker id='05' x='447.27' y='227.33' label='Graz'  />

		</definition>
		<application>
			<marker id='VI' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
