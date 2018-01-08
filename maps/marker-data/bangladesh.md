---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Bangladesh

#### JavaScript Alias: maps/bangladesh


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
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "DA",
                "shapeid": "myCustomShape",
                "x": "218.27",
                "y": "265.05",
                "label": "Dhaka",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "113.74",
                "y": "81.62",
                "label": "Rangpur"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "56.36",
                "y": "235.33",
                "label": "Rajshahi"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "200.85",
                "y": "184.1",
                "label": "Mymensingh"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "356.62",
                "y": "201.52",
                "label": "Sylhet"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "213.15",
                "y": "278.37",
                "label": "Tungi",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "101.45",
                "y": "355.23",
                "label": "Jessore"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "121.94",
                "y": "391.1",
                "label": "Khulna"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "225.45",
                "y": "406.47",
                "label": "Barisal",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "135.27",
                "y": "442.34",
                "label": "Mongla"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "350.47",
                "y": "440.29",
                "label": "Chittagong",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "225.45",
                "y": "307.07",
                "label": "Narayanganj",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "296.15",
                "y": "325.51",
                "label": "Comilla",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "359.69",
                "y": "500.75",
                "label": "Cox's Bazar"
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
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "DA",
                "x": "218.27",
                "y": "265.05",
                "label": "Dhaka",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "113.74",
                "y": "81.62",
                "label": "Rangpur"
            },
            {
                "id": "02",
                "x": "56.36",
                "y": "235.33",
                "label": "Rajshahi"
            },
            {
                "id": "03",
                "x": "200.85",
                "y": "184.1",
                "label": "Mymensingh"
            },
            {
                "id": "04",
                "x": "356.62",
                "y": "201.52",
                "label": "Sylhet"
            },
            {
                "id": "05",
                "x": "213.15",
                "y": "278.37",
                "label": "Tungi",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "101.45",
                "y": "355.23",
                "label": "Jessore"
            },
            {
                "id": "07",
                "x": "121.94",
                "y": "391.1",
                "label": "Khulna"
            },
            {
                "id": "08",
                "x": "225.45",
                "y": "406.47",
                "label": "Barisal",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "135.27",
                "y": "442.34",
                "label": "Mongla"
            },
            {
                "id": "11",
                "x": "350.47",
                "y": "440.29",
                "label": "Chittagong",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "225.45",
                "y": "307.07",
                "label": "Narayanganj",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "296.15",
                "y": "325.51",
                "label": "Comilla",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "359.69",
                "y": "500.75",
                "label": "Cox's Bazar"
            }
        ],
        "application": [
            {
                "id": "DA",
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
	      <shape id='myCustomshape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4' />
		  <shape id='newCustomshape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3' />
		 </shapes>
		<definition>
			<marker id='DA' x='218.27' y='265.05' label='Dhaka' labelPos='right'  />
			<marker id='01' x='113.74' y='81.62' label='Rangpur'  />
			<marker id='02' x='56.36' y='235.33' label='Rajshahi'  />
			<marker id='03' x='200.85' y='184.1' label='Mymensingh'  />
			<marker id='04' x='356.62' y='201.52' label='Sylhet'  />
			<marker id='05' x='213.15' y='278.37' label='Tungi' labelPos='right' />
			<marker id='06' x='101.45' y='355.23' label='Jessore'  />
			<marker id='07' x='121.94' y='391.1' label='Khulna'  />
			<marker id='08' x='225.45' y='406.47' label='Barisal' labelPos='left' />
			<marker id='09' x='135.27' y='442.34' label='Mongla'  />
			<marker id='11' x='350.47' y='440.29' label='Chittagong' labelPos='right' />
			<marker id='12' x='225.45' y='307.07' label='Narayanganj' labelPos='left'  />
			<marker id='13' x='296.15' y='325.51' label='Comilla' labelPos='left' />
			<marker id='14' x='359.69' y='500.75' label="Cox's Bazar"  />

		</definition>
		<application>
			<marker id='DA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />


		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
