---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Wales

#### JavaScript Alias: maps/wales


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
                "id": "CA",
                "shapeid": "myCustomShape",
                "x": "325.87",
                "y": "465.78",
                "label": "Cardiff",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "131.99",
                "y": "20.28",
                "label": "Holyhead",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "241.99",
                "y": "25.78",
                "label": "Llandudno",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "284.62",
                "y": "34.03",
                "label": "Rhyl",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "207.62",
                "y": "47.78",
                "label": "Bangor",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "358.87",
                "y": "86.28",
                "label": "Wrexham",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "196.62",
                "y": "254.03",
                "label": "Aberystwyth",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "112.74",
                "y": "317.28",
                "label": "Cardigan",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "67.37",
                "y": "342.03",
                "label": "Fishguard",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "156.74",
                "y": "375.03",
                "label": "Carmarthen",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "208.99",
                "y": "441.03",
                "label": "Swansea"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "369.87",
                "y": "456.15",
                "label": "Newport"
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
                "id": "CA",
                "x": "325.87",
                "y": "465.78",
                "label": "Cardiff",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "131.99",
                "y": "20.28",
                "label": "Holyhead",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "241.99",
                "y": "25.78",
                "label": "Llandudno",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "284.62",
                "y": "34.03",
                "label": "Rhyl",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "207.62",
                "y": "47.78",
                "label": "Bangor",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "358.87",
                "y": "86.28",
                "label": "Wrexham",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "196.62",
                "y": "254.03",
                "label": "Aberystwyth",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "112.74",
                "y": "317.28",
                "label": "Cardigan",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "67.37",
                "y": "342.03",
                "label": "Fishguard",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "156.74",
                "y": "375.03",
                "label": "Carmarthen",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "x": "208.99",
                "y": "441.03",
                "label": "Swansea"
            },
            {
                "id": "11",
                "x": "369.87",
                "y": "456.15",
                "label": "Newport"
            }
        ],
        "application": [
            {
                "id": "CA",
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
			<marker id='CA' x='325.87' y='465.78' label='Cardiff' labelPos='left'  />
			<marker id='01' x='131.99' y='20.28' label='Holyhead' labelPos='right'  />
			<marker id='02' x='241.99' y='25.78' label='Llandudno' labelPos='bottom' />
			<marker id='03' x='284.62' y='34.03' label='Rhyl' labelPos='right'  />
			<marker id='04' x='207.62' y='47.78' label='Bangor' labelPos='right'  />
			<marker id='05' x='358.87' y='86.28' label='Wrexham' labelPos='left'  />
			<marker id='06' x='196.62' y='254.03' label='Aberystwyth' labelPos='right'  />
			<marker id='07' x='112.74' y='317.28' label='Cardigan' labelPos='left'  />
			<marker id='08' x='67.37' y='342.03' label='Fishguard' labelPos='right'  />
			<marker id='09' x='156.74' y='375.03' label='Carmarthen' labelPos='bottom'  />
			<marker id='10' x='208.99' y='441.03' label='Swansea'  />
		    <marker id='11' x='369.87' y='456.15' label='Newport'  />

		</definition>
		<application>
			<marker id='CA' shapeId='myCustomShape'  />
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

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
