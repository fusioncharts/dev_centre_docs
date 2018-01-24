---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Israel

#### JavaScript Alias: maps/israel


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
                "id": "JE",
                "shapeid": "myCustomShape",
                "x": "104.72",
                "y": "193.99",
                "label": "Jerusalem",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "143.12",
                "y": "17.17",
                "label": "Qiryat Shemona",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "94.62",
                "y": "37.38",
                "label": "Nahariyya",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "92.6",
                "y": "50.52",
                "label": "Akko",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "85.53",
                "y": "63.65",
                "label": "Haifa",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "133.02",
                "y": "62.64",
                "label": "Tiberas"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "108.77",
                "y": "80.83",
                "label": "Nazareth",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "113.82",
                "y": "96.99",
                "label": "Afula",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "78.45",
                "y": "105.08",
                "label": "Hadera",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "70.37",
                "y": "126.3",
                "label": "Netanya",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "66.33",
                "y": "145.49",
                "label": "Herzliyya",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "62.29",
                "y": "158.63",
                "label": "Tel Aviv-Yafo",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "70.37",
                "y": "173.79",
                "label": "Ramla",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "47.13",
                "y": "193.99",
                "label": "Ashdod",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "40.06",
                "y": "208.14",
                "label": "Ashqelan",
                "labelpos": "right"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "58.25",
                "y": "228.35",
                "label": "Qiryat Gat",
                "labelpos": "bottom"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "66.33",
                "y": "292.01",
                "label": "Beersheba"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "94.62",
                "y": "303.12",
                "label": "Zefa"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "78.45",
                "y": "323.33",
                "label": "Dimona"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape",
                "x": "89.57",
                "y": "342.53",
                "label": "Zin",
                "labelpos": "right"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape",
                "x": "65.32",
                "y": "371.83",
                "label": "Mizpe Ramon"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape",
                "x": "89.57",
                "y": "425.38",
                "label": "Yotvata"
            },
            {
                "id": "35",
                "shapeid": "newCustomShape",
                "x": "82.5",
                "y": "463.78",
                "label": "Elat"
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
                "id": "JE",
                "x": "104.72",
                "y": "193.99",
                "label": "Jerusalem",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "143.12",
                "y": "17.17",
                "label": "Qiryat Shemona",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "94.62",
                "y": "37.38",
                "label": "Nahariyya",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "92.6",
                "y": "50.52",
                "label": "Akko",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "85.53",
                "y": "63.65",
                "label": "Haifa",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "133.02",
                "y": "62.64",
                "label": "Tiberas"
            },
            {
                "id": "07",
                "x": "108.77",
                "y": "80.83",
                "label": "Nazareth",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "113.82",
                "y": "96.99",
                "label": "Afula",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "78.45",
                "y": "105.08",
                "label": "Hadera",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "70.37",
                "y": "126.3",
                "label": "Netanya",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "66.33",
                "y": "145.49",
                "label": "Herzliyya",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "62.29",
                "y": "158.63",
                "label": "Tel Aviv-Yafo",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "70.37",
                "y": "173.79",
                "label": "Ramla",
                "labelpos": "right"
            },
            {
                "id": "15",
                "x": "47.13",
                "y": "193.99",
                "label": "Ashdod",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "40.06",
                "y": "208.14",
                "label": "Ashqelan",
                "labelpos": "right"
            },
            {
                "id": "17",
                "x": "58.25",
                "y": "228.35",
                "label": "Qiryat Gat",
                "labelpos": "bottom"
            },
            {
                "id": "19",
                "x": "66.33",
                "y": "292.01",
                "label": "Beersheba"
            },
            {
                "id": "20",
                "x": "94.62",
                "y": "303.12",
                "label": "Zefa"
            },
            {
                "id": "21",
                "x": "78.45",
                "y": "323.33",
                "label": "Dimona"
            },
            {
                "id": "22",
                "x": "89.57",
                "y": "342.53",
                "label": "Zin",
                "labelpos": "right"
            },
            {
                "id": "23",
                "x": "65.32",
                "y": "371.83",
                "label": "Mizpe Ramon"
            },
            {
                "id": "24",
                "x": "89.57",
                "y": "425.38",
                "label": "Yotvata"
            },
            {
                "id": "35",
                "x": "82.5",
                "y": "463.78",
                "label": "Elat"
            }
        ],
        "application": [
            {
                "id": "JE",
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
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
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
                "id": "19",
                "shapeid": "newCustomShape"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape"
            },
            {
                "id": "22",
                "shapeid": "newCustomShape"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape"
            },
            {
                "id": "35",
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
			<marker id='JE' x='104.72' y='193.99' label='Jerusalem' labelPos='right' />
			<marker id='01' x='143.12' y='17.17' label='Qiryat Shemona' labelPos='left'  />
			<marker id='02' x='94.62' y='37.38' label='Nahariyya' labelPos='left'  />
			<marker id='03' x='92.6' y='50.52' label='Akko' labelPos='left'  />
			<marker id='04' x='85.53' y='63.65' label='Haifa' labelPos='left'  />
			<marker id='05' x='133.02' y='62.64' label='Tiberas'  />
			<marker id='07' x='108.77' y='80.83' label='Nazareth' labelPos='right'  />
			<marker id='08' x='113.82' y='96.99' label='Afula' labelPos='right'  />
			<marker id='06' x='78.45' y='105.08' label='Hadera' labelPos='left'  />
			<marker id='09' x='70.37' y='126.3' label='Netanya' labelPos='left'  />
			<marker id='10' x='66.33' y='145.49' label='Herzliyya' labelPos='left'  />
			<marker id='11' x='62.29' y='158.63' label='Tel Aviv-Yafo' labelPos='right'  />
			<marker id='12' x='70.37' y='173.79' label='Ramla' labelPos='right'  />
			<marker id='15' x='47.13' y='193.99' label='Ashdod' labelPos='left'  />
			<marker id='16' x='40.06' y='208.14' label='Ashqelan' labelPos='right'  />
			<marker id='17' x='58.25' y='228.35' label='Qiryat Gat' labelPos='bottom'  />
			<marker id='19' x='66.33' y='292.01' label='Beersheba'  />
			<marker id='20' x='94.62' y='303.12' label='Zefa'  />
			<marker id='21' x='78.45' y='323.33' label='Dimona'  />
			<marker id='22' x='89.57' y='342.53' label='Zin' labelPos='right'  />
			<marker id='23' x='65.32' y='371.83' label='Mizpe Ramon'  />
			<marker id='24' x='89.57' y='425.38' label='Yotvata'  />
			<marker id='35' x='82.5' y='463.78' label='Elat'  />

		</definition>
		<application>
			<marker id='JE' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='21' shapeId='newCustomShape'  />
			<marker id='22' shapeId='newCustomShape'  />
			<marker id='23' shapeId='newCustomShape'  />
			<marker id='24' shapeId='newCustomShape'  />
			<marker id='35' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
