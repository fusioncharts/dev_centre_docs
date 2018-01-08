---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Togo

#### JavaScript Alias: maps/togo


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
            "id": "TG.CE"
        },
        {
            "id": "TG.KA"
        },
        {
            "id": "TG.MA"
        },
        {
            "id": "TG.PL"
        },
        {
            "id": "TG.SA"
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
                "id": "LO",
                "shapeid": "myCustomShape",
                "x": "113.28",
                "y": "372.94",
                "label": "Lome",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "32.06",
                "y": "39.49",
                "label": "Dapaong",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "55.57",
                "y": "79.03",
                "label": "Mango",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "110.08",
                "y": "138.88",
                "label": "Kara",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "65.19",
                "y": "162.39",
                "label": "Bassar",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "79.08",
                "y": "203",
                "label": "Soutouboua",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "94.05",
                "y": "278.89",
                "label": "Atakpame",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "73.74",
                "y": "315.22",
                "label": "Kpalime",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "103.66",
                "y": "312.02",
                "label": "Notse",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "96.18",
                "y": "337.67",
                "label": "Tsevie",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "129.31",
                "y": "367.59",
                "label": "Kpeme"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "146.41",
                "y": "363.32",
                "label": "Aneho",
                "labelpos": "bottom"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "102.6",
                "y": "172.01",
                "label": "Sokode",
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
            "id": "TG.CE"
        },
        {
            "id": "TG.KA"
        },
        {
            "id": "TG.MA"
        },
        {
            "id": "TG.PL"
        },
        {
            "id": "TG.SA"
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
                "id": "LO",
                "x": "113.28",
                "y": "372.94",
                "label": "Lome",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "32.06",
                "y": "39.49",
                "label": "Dapaong",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "55.57",
                "y": "79.03",
                "label": "Mango",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "110.08",
                "y": "138.88",
                "label": "Kara",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "65.19",
                "y": "162.39",
                "label": "Bassar",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "79.08",
                "y": "203",
                "label": "Soutouboua",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "94.05",
                "y": "278.89",
                "label": "Atakpame",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "73.74",
                "y": "315.22",
                "label": "Kpalime",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "103.66",
                "y": "312.02",
                "label": "Notse",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "96.18",
                "y": "337.67",
                "label": "Tsevie",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "129.31",
                "y": "367.59",
                "label": "Kpeme"
            },
            {
                "id": "11",
                "x": "146.41",
                "y": "363.32",
                "label": "Aneho",
                "labelpos": "bottom"
            },
            {
                "id": "12",
                "x": "102.6",
                "y": "172.01",
                "label": "Sokode",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "LO",
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
		<entity id='TG.CE'  />
		<entity id='TG.KA'  />
		<entity id='TG.MA'  />
		<entity id='TG.PL'  />
		<entity id='TG.SA'  />
	</data>
	<markers>
	 <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='LO' x='113.28' y='372.94' label='Lome' labelPos='left'  />
			<marker id='01' x='32.06' y='39.49' label='Dapaong' labelPos='right'  />
			<marker id='02' x='55.57' y='79.03' label='Mango' labelPos='right'  />
			<marker id='03' x='110.08' y='138.88' label='Kara' labelPos='left'  />
			<marker id='04' x='65.19' y='162.39' label='Bassar' labelPos='right'  />
			<marker id='05' x='79.08' y='203' label='Soutouboua' labelPos='right'  />
			<marker id='06' x='94.05' y='278.89' label='Atakpame' labelPos='right'  />
			<marker id='07' x='73.74' y='315.22' label='Kpalime' labelPos='left'  />
			<marker id='08' x='103.66' y='312.02' label='Notse' labelPos='right'  />
			<marker id='09' x='96.18' y='337.67' label='Tsevie' labelPos='left'  />
			<marker id='10' x='129.31' y='367.59' label='Kpeme'  />
			<marker id='11' x='146.41' y='363.32' label='Aneho' labelPos='bottom'  />
			<marker id='12' x='102.6' y='172.01' label='Sokode' labelPos='right'  />
		</definition>
		<application>
			<marker id='LO' shapeId='myCustomShape'  />
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
