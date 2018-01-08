---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Mozambique

#### JavaScript Alias: maps/mozambique


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
                "id": "MT",
                "shapeid": "myCustomShape",
                "x": "56.89",
                "y": "457.96",
                "label": "Maputo",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "282.41",
                "y": "109.34",
                "label": "Pemba",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "285.51",
                "y": "151.75",
                "label": "Cidade de Nacala",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "133.44",
                "y": "104.17",
                "label": "Lichinga",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "232.75",
                "y": "179.68",
                "label": "Nampula",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "89.99",
                "y": "183.82",
                "label": "Tete"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "94.13",
                "y": "270.72",
                "label": "Chimoio",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "119.99",
                "y": "288.31",
                "label": "Beira",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "170.68",
                "y": "244.86",
                "label": "Quelimane",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "37.24",
                "y": "357.62",
                "label": "Chicualacuala",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "128.27",
                "y": "404.17",
                "label": "Inhambane",
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
                "id": "MT",
                "x": "56.89",
                "y": "457.96",
                "label": "Maputo",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "282.41",
                "y": "109.34",
                "label": "Pemba",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "285.51",
                "y": "151.75",
                "label": "Cidade de Nacala",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "133.44",
                "y": "104.17",
                "label": "Lichinga",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "232.75",
                "y": "179.68",
                "label": "Nampula",
                "labelpos": "bottom"
            },
            {
                "id": "05",
                "x": "89.99",
                "y": "183.82",
                "label": "Tete"
            },
            {
                "id": "06",
                "x": "94.13",
                "y": "270.72",
                "label": "Chimoio",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "119.99",
                "y": "288.31",
                "label": "Beira",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "170.68",
                "y": "244.86",
                "label": "Quelimane",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "37.24",
                "y": "357.62",
                "label": "Chicualacuala",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "128.27",
                "y": "404.17",
                "label": "Inhambane",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "MT",
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
			<marker id='MT' x='56.89' y='457.96' label='Maputo' labelPos='bottom'  />
			<marker id='01' x='282.41' y='109.34' label='Pemba' labelPos='left' />
			<marker id='02' x='285.51' y='151.75' label='Cidade de Nacala' labelPos='left'  />
			<marker id='03' x='133.44' y='104.17' label='Lichinga' labelPos='left'  />
			<marker id='04' x='232.75' y='179.68' label='Nampula' labelPos='bottom'  />
			<marker id='05' x='89.99' y='183.82' label='Tete'  />
			<marker id='06' x='94.13' y='270.72' label='Chimoio' labelPos='left'  />
			<marker id='07' x='119.99' y='288.31' label='Beira' labelPos='left'  />
			<marker id='08' x='170.68' y='244.86' label='Quelimane' labelPos='left'  />
			<marker id='09' x='37.24' y='357.62' label='Chicualacuala' labelPos='right'  />
			<marker id='10' x='128.27' y='404.17' label='Inhambane' labelPos='left'  />

		</definition>
		<application>
			<marker id='MT' shapeId='myCustomShape'  />
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

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
