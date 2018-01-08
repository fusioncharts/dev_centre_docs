---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Norway

#### JavaScript Alias: maps/norway


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
                "id": "OS",
                "shapeid": "myCustomShape",
                "x": "136.62",
                "y": "470.7",
                "label": "Oslo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "324.23",
                "y": "94.46",
                "label": "Tromso",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "251.84",
                "y": "181.13",
                "label": "Bodo",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "176.39",
                "y": "311.64",
                "label": "Steinkjer",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "151.92",
                "y": "332.03",
                "label": "Trondheim",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "141.72",
                "y": "421.76",
                "label": "Lillehammer",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "149.88",
                "y": "431.95",
                "label": "Hamar",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "133.56",
                "y": "499.25",
                "label": "Moss",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "120.31",
                "y": "500.27",
                "label": "Tonsberg",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "100.94",
                "y": "501.29",
                "label": "Skien",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "120.31",
                "y": "474.78",
                "label": "Drammen",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "83.6",
                "y": "525.76",
                "label": "Arendal",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "63.21",
                "y": "534.93",
                "label": "Kristiansand",
                "labelpos": "bottom"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "25.49",
                "y": "492.11",
                "label": "Stavanger"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "33.64",
                "y": "433.99",
                "label": "Bergen"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "74.43",
                "y": "404.42",
                "label": "Leikanger"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "96.86",
                "y": "346.3",
                "label": "Molde",
                "labelpos": "left"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "471.05",
                "y": "60.81",
                "label": "Vadso"
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
                "id": "OS",
                "x": "136.62",
                "y": "470.7",
                "label": "Oslo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "324.23",
                "y": "94.46",
                "label": "Tromso",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "251.84",
                "y": "181.13",
                "label": "Bodo",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "176.39",
                "y": "311.64",
                "label": "Steinkjer",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "151.92",
                "y": "332.03",
                "label": "Trondheim",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "141.72",
                "y": "421.76",
                "label": "Lillehammer",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "149.88",
                "y": "431.95",
                "label": "Hamar",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "133.56",
                "y": "499.25",
                "label": "Moss",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "120.31",
                "y": "500.27",
                "label": "Tonsberg",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "x": "100.94",
                "y": "501.29",
                "label": "Skien",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "120.31",
                "y": "474.78",
                "label": "Drammen",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "83.6",
                "y": "525.76",
                "label": "Arendal",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "63.21",
                "y": "534.93",
                "label": "Kristiansand",
                "labelpos": "bottom"
            },
            {
                "id": "14",
                "x": "25.49",
                "y": "492.11",
                "label": "Stavanger"
            },
            {
                "id": "15",
                "x": "33.64",
                "y": "433.99",
                "label": "Bergen"
            },
            {
                "id": "16",
                "x": "74.43",
                "y": "404.42",
                "label": "Leikanger"
            },
            {
                "id": "17",
                "x": "96.86",
                "y": "346.3",
                "label": "Molde",
                "labelpos": "left"
            },
            {
                "id": "18",
                "x": "471.05",
                "y": "60.81",
                "label": "Vadso"
            }
        ],
        "application": [
            {
                "id": "OS",
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
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
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
			<marker id='OS' x='136.62' y='470.7' label='Oslo' labelPos='right'  />
			<marker id='01' x='324.23' y='94.46' label='Tromso' labelPos='left'  />
			<marker id='02' x='251.84' y='181.13' label='Bodo' labelPos='left'  />
			<marker id='03' x='176.39' y='311.64' label='Steinkjer' labelPos='right'  />
			<marker id='04' x='151.92' y='332.03' label='Trondheim' labelPos='left'  />
			<marker id='06' x='141.72' y='421.76' label='Lillehammer' labelPos='left'  />
			<marker id='05' x='149.88' y='431.95' label='Hamar' labelPos='left'  />
	        <marker id='08' x='133.56' y='499.25' label='Moss' labelPos='right'  />
			<marker id='09' x='120.31' y='500.27' label='Tonsberg' labelPos='bottom'  />
			<marker id='10' x='100.94' y='501.29' label='Skien' labelPos='left'  />
			<marker id='11' x='120.31' y='474.78' label='Drammen' labelPos='left' />
			<marker id='12' x='83.6' y='525.76' label='Arendal' labelPos='left'  />
			<marker id='13' x='63.21' y='534.93' label='Kristiansand' labelPos='bottom'  />
			<marker id='14' x='25.49' y='492.11' label='Stavanger'  />
			<marker id='15' x='33.64' y='433.99' label='Bergen'  />
			<marker id='16' x='74.43' y='404.42' label='Leikanger'  />
			<marker id='17' x='96.86' y='346.3' label='Molde' labelPos='left'  />
			<marker id='18' x='471.05' y='60.81' label='Vadso'  />

		</definition>
		<application>
			<marker id='OS' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
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
