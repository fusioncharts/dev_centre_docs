---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Washington

#### JavaScript Alias: maps/washington


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
                "id": "OL",
                "shapeid": "myCustomShape",
                "x": "185.5",
                "y": "303",
                "label": "Olympia "
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "220.5",
                "y": "43",
                "label": "Bellingham",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "225.5",
                "y": "88",
                "label": "Mount Vernon",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "228.5",
                "y": "136",
                "label": "Seattle",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "230.5",
                "y": "244",
                "label": "Tacoma",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "72.5",
                "y": "363",
                "label": "Long Beach",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "129.5",
                "y": "385",
                "label": "Longview",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "196.5",
                "y": "468",
                "label": "Vancouver",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "525.5",
                "y": "398",
                "label": "Kennewick",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "390.5",
                "y": "359",
                "label": "Yakima",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "606.5",
                "y": "410",
                "label": "WallaWalla"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "701.5",
                "y": "309",
                "label": "Pullman"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "686.5",
                "y": "182",
                "label": "Spokane"
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
                "id": "OL",
                "x": "185.5",
                "y": "303",
                "label": "Olympia "
            },
            {
                "id": "01",
                "x": "220.5",
                "y": "43",
                "label": "Bellingham",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "225.5",
                "y": "88",
                "label": "Mount Vernon",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "228.5",
                "y": "136",
                "label": "Seattle",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "230.5",
                "y": "244",
                "label": "Tacoma",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "72.5",
                "y": "363",
                "label": "Long Beach",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "129.5",
                "y": "385",
                "label": "Longview",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "196.5",
                "y": "468",
                "label": "Vancouver",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "525.5",
                "y": "398",
                "label": "Kennewick",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "390.5",
                "y": "359",
                "label": "Yakima",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "606.5",
                "y": "410",
                "label": "WallaWalla"
            },
            {
                "id": "13",
                "x": "701.5",
                "y": "309",
                "label": "Pullman"
            },
            {
                "id": "14",
                "x": "686.5",
                "y": "182",
                "label": "Spokane"
            }
        ],
        "application": [
            {
                "id": "OL",
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
			<marker id='OL' x='185.5' y='303' label='Olympia '  />
			<marker id='01' x='220.5' y='43' label='Bellingham' labelPos='right'  />
			<marker id='02' x='225.5' y='88' label='Mount Vernon' labelPos='right'  />
			<marker id='03' x='228.5' y='136' label='Seattle' labelPos='right'  />
			<marker id='04' x='230.5' y='244' label='Tacoma' labelPos='right'  />
			<marker id='05' x='72.5' y='363' label='Long Beach' labelPos='right'  />
			<marker id='06' x='129.5' y='385' label='Longview' labelPos='right'  />
			<marker id='08' x='196.5' y='468' label='Vancouver' labelPos='right'  />
			<marker id='10' x='525.5' y='398' label='Kennewick' labelPos='left'  />
			<marker id='11' x='390.5' y='359' label='Yakima' labelPos='right'  />
			<marker id='12' x='606.5' y='410' label='WallaWalla'  />
			<marker id='13' x='701.5' y='309' label='Pullman'  />
			<marker id='14' x='686.5' y='182' label='Spokane'  />

		</definition>
		<application>
			<marker id='OL' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
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
