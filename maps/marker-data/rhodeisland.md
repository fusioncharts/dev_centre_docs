---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: RhodeIsland

#### JavaScript Alias: maps/rhodeisland


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
                "id": "PR",
                "shapeid": "myCustomShape",
                "x": "366.87",
                "y": "243.29",
                "label": "Providence",
                "labelpos": "top"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "296.4",
                "y": "36.01",
                "label": "Woonsocket",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "371.02",
                "y": "156.23",
                "label": "Pawtucket",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "418.69",
                "y": "304.43",
                "label": "East Providence"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "456",
                "y": "385.27",
                "label": "Bristol",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "458.07",
                "y": "436.05",
                "label": "Portsmouth",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "419.73",
                "y": "560.42",
                "label": "Newport",
                "labelpos": "top"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "304.69",
                "y": "604.98",
                "label": "Narragansett"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "218.67",
                "y": "558.34",
                "label": "W.Kingston"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "44.56",
                "y": "675.46",
                "label": "Westerly"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "318.16",
                "y": "382.16",
                "label": "East Greenwich",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "279.82",
                "y": "340.7",
                "label": "West Warwick"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "368.95",
                "y": "353.14",
                "label": "Warwick"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "269.45",
                "y": "270.23",
                "label": "Cranston"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "157.52",
                "y": "85.76",
                "label": "Pascoag"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "328.53",
                "y": "174.88",
                "label": "North Providence",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "102.6",
                "y": "537.62",
                "label": "Hope Valley"
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
                "id": "PR",
                "x": "366.87",
                "y": "243.29",
                "label": "Providence",
                "labelpos": "top"
            },
            {
                "id": "01",
                "x": "296.4",
                "y": "36.01",
                "label": "Woonsocket",
                "labelpos": "bottom"
            },
            {
                "id": "02",
                "x": "371.02",
                "y": "156.23",
                "label": "Pawtucket",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "418.69",
                "y": "304.43",
                "label": "East Providence"
            },
            {
                "id": "04",
                "x": "456",
                "y": "385.27",
                "label": "Bristol",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "458.07",
                "y": "436.05",
                "label": "Portsmouth",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "419.73",
                "y": "560.42",
                "label": "Newport",
                "labelpos": "top"
            },
            {
                "id": "08",
                "x": "304.69",
                "y": "604.98",
                "label": "Narragansett"
            },
            {
                "id": "09",
                "x": "218.67",
                "y": "558.34",
                "label": "W.Kingston"
            },
            {
                "id": "10",
                "x": "44.56",
                "y": "675.46",
                "label": "Westerly"
            },
            {
                "id": "11",
                "x": "318.16",
                "y": "382.16",
                "label": "East Greenwich",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "279.82",
                "y": "340.7",
                "label": "West Warwick"
            },
            {
                "id": "14",
                "x": "368.95",
                "y": "353.14",
                "label": "Warwick"
            },
            {
                "id": "15",
                "x": "269.45",
                "y": "270.23",
                "label": "Cranston"
            },
            {
                "id": "16",
                "x": "157.52",
                "y": "85.76",
                "label": "Pascoag"
            },
            {
                "id": "17",
                "x": "328.53",
                "y": "174.88",
                "label": "North Providence",
                "labelpos": "right"
            },
            {
                "id": "18",
                "x": "102.6",
                "y": "537.62",
                "label": "Hope Valley"
            }
        ],
        "application": [
            {
                "id": "PR",
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
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillpattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillpattern='radial' showBorder='0' radius='3'/>
		  </shapes>
		<definition>
			<marker id='PR' x='366.87' y='243.29' label='Providence' labelPos='top' />
			<marker id='01' x='296.4' y='36.01' label='Woonsocket' labelPos='bottom' />
			<marker id='02' x='371.02' y='156.23' label='Pawtucket' labelpos='left' />
			<marker id='03' x='418.69' y='304.43' label='East Providence'  />
			<marker id='04' x='456' y='385.27' label='Bristol' labelPos='right' />
			<marker id='05' x='458.07' y='436.05' label='Portsmouth' labelPos='right'  />
			<marker id='06' x='419.73' y='560.42' label='Newport' labelPos='top'  />
			<marker id='08' x='304.69' y='604.98' label='Narragansett'  />
			<marker id='09' x='218.67' y='558.34' label='W.Kingston'  />
			<marker id='10' x='44.56' y='675.46' label='Westerly'  />
			<marker id='11' x='318.16' y='382.16' label='East Greenwich' labelPos='left'  />
			<marker id='13' x='279.82' y='340.7' label='West Warwick'  />
			<marker id='14' x='368.95' y='353.14' label='Warwick'  />
			<marker id='15' x='269.45' y='270.23' label='Cranston'  />
			<marker id='16' x='157.52' y='85.76' label='Pascoag'  />
			<marker id='17' x='328.53' y='174.88' label='North Providence' labelPos='right' />
			<marker id='18' x='102.6' y='537.62' label='Hope Valley'  />





		</definition>
		<application>
			<marker id='PR' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
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
