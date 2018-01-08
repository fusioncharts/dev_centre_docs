---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Azerbaijan

#### JavaScript Alias: maps/azerbaijan


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
                "id": "BA",
                "shapeid": "myCustomShape",
                "x": "533.09",
                "y": "197.19",
                "label": "Baku",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "482",
                "y": "173.69",
                "label": "Sumqayit"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "400.26",
                "y": "53.13",
                "label": "Xacmaz"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "241.89",
                "y": "100.13",
                "label": "Saki"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "226.57",
                "y": "157.34",
                "label": "Mingacevir",
                "labelpos": "top"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "239.85",
                "y": "176.76",
                "label": "Yevlax",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "161.17",
                "y": "166.54",
                "label": "Ganca"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "265.39",
                "y": "172.67",
                "label": "Laki"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "339.98",
                "y": "211.49",
                "label": "Kurdamir"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "413.54",
                "y": "258.49",
                "label": "Ali Bayramli"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "410.48",
                "y": "420.95",
                "label": "Lankaran"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "206.13",
                "y": "281.99",
                "label": "Xankandi"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "196.94",
                "y": "296.3",
                "label": "Susa",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "201.02",
                "y": "197.19",
                "label": "Naftalan",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "67.17",
                "y": "360.67",
                "label": "Naxcivan",
                "labelpos": "left"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "413.54",
                "y": "454.67",
                "label": "Astara",
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
                "id": "BA",
                "x": "533.09",
                "y": "197.19",
                "label": "Baku",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "482",
                "y": "173.69",
                "label": "Sumqayit"
            },
            {
                "id": "02",
                "x": "400.26",
                "y": "53.13",
                "label": "Xacmaz"
            },
            {
                "id": "03",
                "x": "241.89",
                "y": "100.13",
                "label": "Saki"
            },
            {
                "id": "04",
                "x": "226.57",
                "y": "157.34",
                "label": "Mingacevir",
                "labelpos": "top"
            },
            {
                "id": "05",
                "x": "239.85",
                "y": "176.76",
                "label": "Yevlax",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "161.17",
                "y": "166.54",
                "label": "Ganca"
            },
            {
                "id": "07",
                "x": "265.39",
                "y": "172.67",
                "label": "Laki"
            },
            {
                "id": "08",
                "x": "339.98",
                "y": "211.49",
                "label": "Kurdamir"
            },
            {
                "id": "09",
                "x": "413.54",
                "y": "258.49",
                "label": "Ali Bayramli"
            },
            {
                "id": "10",
                "x": "410.48",
                "y": "420.95",
                "label": "Lankaran"
            },
            {
                "id": "11",
                "x": "206.13",
                "y": "281.99",
                "label": "Xankandi"
            },
            {
                "id": "12",
                "x": "196.94",
                "y": "296.3",
                "label": "Susa",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "201.02",
                "y": "197.19",
                "label": "Naftalan",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "67.17",
                "y": "360.67",
                "label": "Naxcivan",
                "labelpos": "left"
            },
            {
                "id": "15",
                "x": "413.54",
                "y": "454.67",
                "label": "Astara",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "BA",
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
			<marker id='BA' x='533.09' y='197.19' label='Baku' labelPos='right'  />
			<marker id='01' x='482' y='173.69' label='Sumqayit'  />
			<marker id='02' x='400.26' y='53.13' label='Xacmaz'  />
			<marker id='03' x='241.89' y='100.13' label='Saki'  />
			<marker id='04' x='226.57' y='157.34' label='Mingacevir' labelPos='top' />
			<marker id='05' x='239.85' y='176.76' label='Yevlax' labelPos='left' />
			<marker id='06' x='161.17' y='166.54' label='Ganca'  />
			<marker id='07' x='265.39' y='172.67' label='Laki'  />
			<marker id='08' x='339.98' y='211.49' label='Kurdamir'  />
			<marker id='09' x='413.54' y='258.49' label='Ali Bayramli'  />
			<marker id='10' x='410.48' y='420.95' label='Lankaran'  />
			<marker id='11' x='206.13' y='281.99' label='Xankandi'  />
			<marker id='12' x='196.94' y='296.3' label='Susa' labelpos='left' />
			<marker id='13' x='201.02' y='197.19' label='Naftalan' labelPos='left'  />
			<marker id='14' x='67.17' y='360.67' label='Naxcivan' labelPos='left'  />
			<marker id='15' x='413.54' y='454.67' label='Astara' labelPos='left' />

		</definition>
		<application>
			<marker id='BA' shapeId='myCustomShape'  />
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



		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
