---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SouthKorea

#### JavaScript Alias: maps/southkorea


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
                "id": "SE",
                "shapeid": "myCustomShape",
                "x": "229.24",
                "y": "119.05",
                "label": "Seoul",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "387.16",
                "y": "106.82",
                "label": "Kangnung",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "397.35",
                "y": "126.18",
                "label": "Pukpyongdong",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "204.79",
                "y": "127.2",
                "label": "Inchon",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "230.26",
                "y": "144.52",
                "label": "Suwon",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "291.39",
                "y": "119.05",
                "label": "Wonju"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "265.92",
                "y": "219.92",
                "label": "Taejon",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "312.79",
                "y": "257.62",
                "label": "Taegu",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "416.71",
                "y": "268.82",
                "label": "Pohang",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "415.69",
                "y": "317.73",
                "label": "Ulsan",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "391.24",
                "y": "362.56",
                "label": "Pusan",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "359.66",
                "y": "353.39",
                "label": "Chinhae"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "353.54",
                "y": "358.48",
                "label": "Masan",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "283.24",
                "y": "397.2",
                "label": "Yosu",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "225.16",
                "y": "378.86",
                "label": "Kwangju",
                "labelpos": "right"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "245.54",
                "y": "284.11",
                "label": "Chonju"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "203.77",
                "y": "275.96",
                "label": "Kunsan",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "180.33",
                "y": "391.09",
                "label": "Mokoo",
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
                "id": "SE",
                "x": "229.24",
                "y": "119.05",
                "label": "Seoul",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "387.16",
                "y": "106.82",
                "label": "Kangnung",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "397.35",
                "y": "126.18",
                "label": "Pukpyongdong",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "204.79",
                "y": "127.2",
                "label": "Inchon",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "230.26",
                "y": "144.52",
                "label": "Suwon",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "291.39",
                "y": "119.05",
                "label": "Wonju"
            },
            {
                "id": "06",
                "x": "265.92",
                "y": "219.92",
                "label": "Taejon",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "312.79",
                "y": "257.62",
                "label": "Taegu",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "416.71",
                "y": "268.82",
                "label": "Pohang",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "415.69",
                "y": "317.73",
                "label": "Ulsan",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "391.24",
                "y": "362.56",
                "label": "Pusan",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "359.66",
                "y": "353.39",
                "label": "Chinhae"
            },
            {
                "id": "12",
                "x": "353.54",
                "y": "358.48",
                "label": "Masan",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "283.24",
                "y": "397.2",
                "label": "Yosu",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "225.16",
                "y": "378.86",
                "label": "Kwangju",
                "labelpos": "right"
            },
            {
                "id": "15",
                "x": "245.54",
                "y": "284.11",
                "label": "Chonju"
            },
            {
                "id": "16",
                "x": "203.77",
                "y": "275.96",
                "label": "Kunsan",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "180.33",
                "y": "391.09",
                "label": "Mokoo",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "SE",
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
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
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
			<marker id='SE' x='229.24' y='119.05' label='Seoul' labelPos='right' />
			<marker id='01' x='387.16' y='106.82' label='Kangnung' labelPos='left'  />
			<marker id='02' x='397.35' y='126.18' label='Pukpyongdong' labelPos='right'  />
			<marker id='03' x='204.79' y='127.2' label='Inchon' labelPos='left'  />
			<marker id='04' x='230.26' y='144.52' label='Suwon' labelPos='right'  />
			<marker id='05' x='291.39' y='119.05' label='Wonju'  />
			<marker id='06' x='265.92' y='219.92' label='Taejon' labelPos='right'  />
			<marker id='07' x='312.79' y='257.62' label='Taegu' labelPos='right'  />
			<marker id='08' x='416.71' y='268.82' label='Pohang' labelPos='right'  />
			<marker id='09' x='415.69' y='317.73' label='Ulsan' labelPos='right'  />
			<marker id='10' x='391.24' y='362.56' label='Pusan' labelPos='right'  />
			<marker id='11' x='359.66' y='353.39' label='Chinhae'  />
			<marker id='12' x='353.54' y='358.48' label='Masan' labelPos='left'  />
			<marker id='13' x='283.24' y='397.2' label='Yosu' labelPos='left'  />
			<marker id='14' x='225.16' y='378.86' label='Kwangju' labelPos='right'  />
			<marker id='15' x='245.54' y='284.11' label='Chonju'  />
			<marker id='16' x='203.77' y='275.96' label='Kunsan' labelPos='left'  />
			<marker id='17' x='180.33' y='391.09' label='Mokoo' labelPos='left'  />

		</definition>
		<application>
			<marker id='SE' shapeId='myCustomShape'  />
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
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
