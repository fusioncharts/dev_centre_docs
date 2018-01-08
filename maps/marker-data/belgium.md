---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Belgium

#### JavaScript Alias: maps/belgium


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
                "id": "BR",
                "shapeid": "myCustomShape",
                "x": "178.52",
                "y": "109.41",
                "label": "Brussels",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "58.78",
                "y": "38.19",
                "label": "Zeebrugge",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "67.04",
                "y": "59.87",
                "label": "Brugge",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "26.78",
                "y": "56.77",
                "label": "Oostende"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "56.72",
                "y": "97.03",
                "label": "Kortrijk"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "103.17",
                "y": "72.25",
                "label": "Gent",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "134.14",
                "y": "89.8",
                "label": "Aalst",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "177.49",
                "y": "37.16",
                "label": "Antwerp",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "182.65",
                "y": "60.9",
                "label": "Mechelen",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "202.27",
                "y": "74.32",
                "label": "Leuven",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "313.75",
                "y": "239.48",
                "label": "Bastogne"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "313.75",
                "y": "137.29",
                "label": "Liege",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "239.43",
                "y": "181.67",
                "label": "Namur"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "183.69",
                "y": "186.83",
                "label": "Charleroi"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "131.04",
                "y": "173.41",
                "label": "Mons"
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
                "id": "BR",
                "x": "178.52",
                "y": "109.41",
                "label": "Brussels",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "58.78",
                "y": "38.19",
                "label": "Zeebrugge",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "67.04",
                "y": "59.87",
                "label": "Brugge",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "26.78",
                "y": "56.77",
                "label": "Oostende"
            },
            {
                "id": "04",
                "x": "56.72",
                "y": "97.03",
                "label": "Kortrijk"
            },
            {
                "id": "05",
                "x": "103.17",
                "y": "72.25",
                "label": "Gent",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "134.14",
                "y": "89.8",
                "label": "Aalst",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "177.49",
                "y": "37.16",
                "label": "Antwerp",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "182.65",
                "y": "60.9",
                "label": "Mechelen",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "202.27",
                "y": "74.32",
                "label": "Leuven",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "313.75",
                "y": "239.48",
                "label": "Bastogne"
            },
            {
                "id": "10",
                "x": "313.75",
                "y": "137.29",
                "label": "Liege",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "239.43",
                "y": "181.67",
                "label": "Namur"
            },
            {
                "id": "13",
                "x": "183.69",
                "y": "186.83",
                "label": "Charleroi"
            },
            {
                "id": "14",
                "x": "131.04",
                "y": "173.41",
                "label": "Mons"
            }
        ],
        "application": [
            {
                "id": "BR",
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
                "id": "10",
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
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='BR' x='178.52' y='109.41' label='Brussels' labelPos='right' />
			<marker id='01' x='58.78' y='38.19' label='Zeebrugge' labelPos='right'  />
			<marker id='02' x='67.04' y='59.87' label='Brugge' labelPos='right'  />
			<marker id='03' x='26.78' y='56.77' label='Oostende' />
			<marker id='04' x='56.72' y='97.03' label='Kortrijk'  />
			<marker id='05' x='103.17' y='72.25' label='Gent' labelPos='right' />
			<marker id='06' x='134.14' y='89.8' label='Aalst' labelPos='right' />
			<marker id='07' x='177.49' y='37.16' label='Antwerp' labelPos='right' />
			<marker id='08' x='182.65' y='60.9' label='Mechelen' labelPos='right' />
			<marker id='09' x='202.27' y='74.32' label='Leuven' labelPos='right' />
			<marker id='11' x='313.75' y='239.48' label='Bastogne'  />
			<marker id='10' x='313.75' y='137.29' label='Liege' labelPos='right' />
			<marker id='12' x='239.43' y='181.67' label='Namur'  />
			<marker id='13' x='183.69' y='186.83' label='Charleroi'  />
			<marker id='14' x='131.04' y='173.41' label='Mons'  />
		</definition>
		<application>
			<marker id='BR' shapeId='myCustomShape'  />
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
			<marker id='10' shapeId='newCustomShape'  />
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
