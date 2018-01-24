---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Gabon

#### JavaScript Alias: maps/gabon


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
    "data": [
        {
            "id": "GA.ES"
        },
        {
            "id": "GA.HO"
        },
        {
            "id": "GA.MO"
        },
        {
            "id": "GA.NG"
        },
        {
            "id": "GA.NY"
        },
        {
            "id": "GA.OI"
        },
        {
            "id": "GA.OL"
        },
        {
            "id": "GA.OM"
        },
        {
            "id": "GA.WN"
        }
    ],
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
                "id": "LB",
                "shapeid": "myCustomShape",
                "x": "49.59",
                "y": "103.85",
                "label": "Libreville",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "154.99",
                "y": "37.71",
                "label": "Oyem",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "231.46",
                "y": "80.08",
                "label": "Makokou",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "223.2",
                "y": "157.58",
                "label": "Lastoursville",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "267.63",
                "y": "208.21",
                "label": "Franceville",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "112.63",
                "y": "298.11",
                "label": "Mayumba",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "120.9",
                "y": "259.88",
                "label": "Tchibanga"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "122.96",
                "y": "211.31",
                "label": "Mouila",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "72.33",
                "y": "165.85",
                "label": "Lambarene",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "18.59",
                "y": "159.64",
                "label": "Port Gentil",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "56.83",
                "y": "113.15",
                "label": "Owendo",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "75.43",
                "y": "117.28",
                "label": "Kango",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "165.33",
                "y": "105.91",
                "label": "Booue",
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
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "GA.ES"
        },
        {
            "id": "GA.HO"
        },
        {
            "id": "GA.MO"
        },
        {
            "id": "GA.NG"
        },
        {
            "id": "GA.NY"
        },
        {
            "id": "GA.OI"
        },
        {
            "id": "GA.OL"
        },
        {
            "id": "GA.OM"
        },
        {
            "id": "GA.WN"
        }
    ],
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
                "id": "LB",
                "x": "49.59",
                "y": "103.85",
                "label": "Libreville",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "154.99",
                "y": "37.71",
                "label": "Oyem",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "231.46",
                "y": "80.08",
                "label": "Makokou",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "223.2",
                "y": "157.58",
                "label": "Lastoursville",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "267.63",
                "y": "208.21",
                "label": "Franceville",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "112.63",
                "y": "298.11",
                "label": "Mayumba",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "120.9",
                "y": "259.88",
                "label": "Tchibanga"
            },
            {
                "id": "07",
                "x": "122.96",
                "y": "211.31",
                "label": "Mouila",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "72.33",
                "y": "165.85",
                "label": "Lambarene",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "18.59",
                "y": "159.64",
                "label": "Port Gentil",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "56.83",
                "y": "113.15",
                "label": "Owendo",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "x": "75.43",
                "y": "117.28",
                "label": "Kango",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "165.33",
                "y": "105.91",
                "label": "Booue",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "LB",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

    </div>
    <div class='tab old-xml-tab'>
<pre><code class="language-html">
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='' markerRadius='' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='GA.ES'  />
		<entity id='GA.HO'  />
		<entity id='GA.MO'  />
		<entity id='GA.NG'  />
		<entity id='GA.NY'  />
		<entity id='GA.OI'  />
		<entity id='GA.OL'  />
		<entity id='GA.OM'  />
		<entity id='GA.WN'  />
	</data>
	<markers>
		   <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='LB' x='49.59' y='103.85' label='Libreville' labelPos='right'  />
			<marker id='01' x='154.99' y='37.71' label='Oyem' labelPos='right'  />
			<marker id='02' x='231.46' y='80.08' label='Makokou' labelPos='right'  />
			<marker id='03' x='223.2' y='157.58' label='Lastoursville' labelPos='right'  />
			<marker id='04' x='267.63' y='208.21' label='Franceville' labelPos='left'  />
			<marker id='05' x='112.63' y='298.11' label='Mayumba' labelPos='right'  />
			<marker id='06' x='120.9' y='259.88' label='Tchibanga'  />
			<marker id='07' x='122.96' y='211.31' label='Mouila' labelPos='left'  />
			<marker id='08' x='72.33' y='165.85' label='Lambarene' labelPos='right'  />
			<marker id='09' x='18.59' y='159.64' label='Port Gentil' labelPos='right'  />
			<marker id='10' x='56.83' y='113.15' label='Owendo' labelPos='bottom'  />
			<marker id='11' x='75.43' y='117.28' label='Kango' labelPos='right'  />
			<marker id='12' x='165.33' y='105.91' label='Booue' labelPos='right'  />
		</definition>
		<application>
			<marker id='LB' shapeId='myCustomShape'  />
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
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
