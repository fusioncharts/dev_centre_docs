---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Brazil

#### JavaScript Alias: maps/brazil


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
                "id": "BA",
                "shapeid": "myCustomShape",
                "x": "178.57",
                "y": "150.23",
                "label": "Brasilia",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "78.57",
                "y": "51.66",
                "label": "Manaus"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "46.19",
                "y": "109.76",
                "label": "Rio Branco"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "124.28",
                "y": "144.52",
                "label": "Cuiaba"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "111.42",
                "y": "172.61",
                "label": "Corumba"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "156.66",
                "y": "243.09",
                "label": "Porto Alegre"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "173.33",
                "y": "211.66",
                "label": "Santos",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "172.85",
                "y": "205",
                "label": "San Paulo"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "193.33",
                "y": "201.19",
                "label": "Rio de Janeiro",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "225.71",
                "y": "181.19",
                "label": "Vitoria",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "204.76",
                "y": "166.42",
                "label": "Belo Horizonte"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "240.95",
                "y": "128.33",
                "label": "Salvador"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "261.9",
                "y": "99.76",
                "label": "Recife",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "242.85",
                "y": "73.57",
                "label": "Fortaleza"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "202.38",
                "y": "60.71",
                "label": "Sao Luis",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "175.23",
                "y": "52.61",
                "label": "Belem",
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
                "id": "BA",
                "x": "178.57",
                "y": "150.23",
                "label": "Brasilia",
                "labelpos": "bottom"
            },
            {
                "id": "01",
                "x": "78.57",
                "y": "51.66",
                "label": "Manaus"
            },
            {
                "id": "02",
                "x": "46.19",
                "y": "109.76",
                "label": "Rio Branco"
            },
            {
                "id": "03",
                "x": "124.28",
                "y": "144.52",
                "label": "Cuiaba"
            },
            {
                "id": "04",
                "x": "111.42",
                "y": "172.61",
                "label": "Corumba"
            },
            {
                "id": "05",
                "x": "156.66",
                "y": "243.09",
                "label": "Porto Alegre"
            },
            {
                "id": "06",
                "x": "173.33",
                "y": "211.66",
                "label": "Santos",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "172.85",
                "y": "205",
                "label": "San Paulo"
            },
            {
                "id": "08",
                "x": "193.33",
                "y": "201.19",
                "label": "Rio de Janeiro",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "225.71",
                "y": "181.19",
                "label": "Vitoria",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "204.76",
                "y": "166.42",
                "label": "Belo Horizonte"
            },
            {
                "id": "11",
                "x": "240.95",
                "y": "128.33",
                "label": "Salvador"
            },
            {
                "id": "12",
                "x": "261.9",
                "y": "99.76",
                "label": "Recife",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "242.85",
                "y": "73.57",
                "label": "Fortaleza"
            },
            {
                "id": "14",
                "x": "202.38",
                "y": "60.71",
                "label": "Sao Luis",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "175.23",
                "y": "52.61",
                "label": "Belem",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "BA",
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
            },
            {
                "id": "12",
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
			<marker id='BA' x='178.57' y='150.23' label='Brasilia' labelPos='bottom'  />
			<marker id='01' x='78.57' y='51.66' label='Manaus'  />
			<marker id='02' x='46.19' y='109.76' label='Rio Branco'  />
			<marker id='03' x='124.28' y='144.52' label='Cuiaba'  />
			<marker id='04' x='111.42' y='172.61' label='Corumba'  />
			<marker id='05' x='156.66' y='243.09' label='Porto Alegre'  />
			<marker id='06' x='173.33' y='211.66' label='Santos' labelPos='right'  />
			<marker id='07' x='172.85' y='205' label='San Paulo'  />
			<marker id='08' x='193.33' y='201.19' label='Rio de Janeiro' labelPos='right'  />
			<marker id='09' x='225.71' y='181.19' label='Vitoria' labelPos='left'  />
			<marker id='10' x='204.76' y='166.42' label='Belo Horizonte'  />
			<marker id='11' x='240.95' y='128.33' label='Salvador'  />
			<marker id='12' x='261.9' y='99.76' label='Recife' labelPos='left'  />
			<marker id='13' x='242.85' y='73.57' label='Fortaleza'  />
			<marker id='14' x='202.38' y='60.71' label='Sao Luis' labelPos='left'  />
			<marker id='15' x='175.23' y='52.61' label='Belem' labelPos='right' />
		</definition>
		<application>
			<marker id='BA' shapeId='myCustomShape'  />
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
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
