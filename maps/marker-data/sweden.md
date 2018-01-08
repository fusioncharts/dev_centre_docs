---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Sweden

#### JavaScript Alias: maps/sweden


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
                "id": "SK",
                "shapeid": "myCustomShape",
                "x": "148.54",
                "y": "393.93",
                "label": "Stockholm",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "170.75",
                "y": "64.68",
                "label": "Kiruna",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "201.64",
                "y": "155.44",
                "label": "Lulea",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "94.47",
                "y": "149.65",
                "label": "Tarnaby",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "174.61",
                "y": "225.93",
                "label": "Umea"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "133.09",
                "y": "283.86",
                "label": "Sundsvall",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "128.26",
                "y": "325.37",
                "label": "Hudiksvall",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "139.85",
                "y": "347.58",
                "label": "Gavle",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "144.68",
                "y": "376.55",
                "label": "Uppsala",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "86.75",
                "y": "407.44",
                "label": "Orebro",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "60.68",
                "y": "387.17",
                "label": "Karlstad",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "115.71",
                "y": "423.86",
                "label": "Norrkoping",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "101.23",
                "y": "433.51",
                "label": "Linkoping",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "117.64",
                "y": "487.58",
                "label": "Kalmar",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "23.99",
                "y": "459.58",
                "label": "Goteborg"
            },
            {
                "id": "46",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "82.88",
                "y": "518.48",
                "label": "Solvesborg",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "44.26",
                "y": "536.82",
                "label": "Malmo",
                "labelpos": "left"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "35.57",
                "y": "511.72",
                "label": "Helsingborg",
                "labelpos": "bottom"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "40.4",
                "y": "494.34",
                "label": "Halmstad"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape"
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
                "id": "SK",
                "x": "148.54",
                "y": "393.93",
                "label": "Stockholm",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "170.75",
                "y": "64.68",
                "label": "Kiruna",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "201.64",
                "y": "155.44",
                "label": "Lulea",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "94.47",
                "y": "149.65",
                "label": "Tarnaby",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "174.61",
                "y": "225.93",
                "label": "Umea"
            },
            {
                "id": "05",
                "x": "133.09",
                "y": "283.86",
                "label": "Sundsvall",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "128.26",
                "y": "325.37",
                "label": "Hudiksvall",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "139.85",
                "y": "347.58",
                "label": "Gavle",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "144.68",
                "y": "376.55",
                "label": "Uppsala",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "86.75",
                "y": "407.44",
                "label": "Orebro",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "60.68",
                "y": "387.17",
                "label": "Karlstad",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "115.71",
                "y": "423.86",
                "label": "Norrkoping",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "101.23",
                "y": "433.51",
                "label": "Linkoping",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "66.47",
                "y": "455.72",
                "label": "Jonkoping",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "23.99",
                "y": "459.58",
                "label": "Goteborg"
            },
            {
                "id": "15",
                "x": "117.64",
                "y": "487.58",
                "label": "Kalmar",
                "labelpos": "right"
            },
            {
                "id": "16",
                "x": "95.44",
                "y": "514.62",
                "label": "Karlshamn"
            },
            {
                "id": "17",
                "x": "82.88",
                "y": "518.48",
                "label": "Solvesborg",
                "labelpos": "right"
            },
            {
                "id": "18",
                "x": "44.26",
                "y": "536.82",
                "label": "Malmo",
                "labelpos": "left"
            },
            {
                "id": "19",
                "x": "35.57",
                "y": "511.72",
                "label": "Helsingborg",
                "labelpos": "bottom"
            },
            {
                "id": "20",
                "x": "40.4",
                "y": "494.34",
                "label": "Halmstad"
            }
        ],
        "application": [
            {
                "id": "SK",
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
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "46",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            },
            {
                "id": "18",
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
                "id": "23",
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
			<marker id='SK' x='148.54' y='393.93' label='Stockholm' labelPos='left' />
			<marker id='01' x='170.75' y='64.68' label='Kiruna' labelPos='left'  />
			<marker id='02' x='201.64' y='155.44' label='Lulea' labelPos='right'  />
			<marker id='03' x='94.47' y='149.65' label='Tarnaby' labelPos='left'  />
			<marker id='04' x='174.61' y='225.93' label='Umea'  />
			<marker id='05' x='133.09' y='283.86' label='Sundsvall' labelPos='left'  />
			<marker id='06' x='128.26' y='325.37' label='Hudiksvall' labelPos='right'  />
			<marker id='07' x='139.85' y='347.58' label='Gavle' labelPos='right'  />
			<marker id='08' x='144.68' y='376.55' label='Uppsala' labelPos='right'  />
			<marker id='09' x='86.75' y='407.44' label='Orebro' labelPos='left'  />
			<marker id='10' x='60.68' y='387.17' label='Karlstad' labelPos='left'  />
			<marker id='11' x='115.71' y='423.86' label='Norrkoping' labelPos='right'  />
			<marker id='12' x='101.23' y='433.51' label='Linkoping' labelPos='left'  />
			<marker id='13' x='66.47' y='455.72' label='Jonkoping' labelPos='right'  />
			<marker id='14' x='23.99' y='459.58' label='Goteborg'  />
			<marker id='15' x='117.64' y='487.58' label='Kalmar' labelPos='right'  />
			<marker id='16' x='95.44' y='514.62' label='Karlshamn'  />
			<marker id='17' x='82.88' y='518.48' label='Solvesborg' labelPos='right'  />
			<marker id='18' x='44.26' y='536.82' label='Malmo' labelPos='left'  />
			<marker id='19' x='35.57' y='511.72' label='Helsingborg' labelPos='bottom'  />
			<marker id='20' x='40.4' y='494.34' label='Halmstad'  />
	    </definition>
		<application>
			<marker id='SK' shapeId='myCustomShape'  />
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
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='46' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='23' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
