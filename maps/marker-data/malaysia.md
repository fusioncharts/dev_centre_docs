---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Malaysia

#### JavaScript Alias: maps/malaysia


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
                "id": "KL",
                "shapeid": "myCustomShape",
                "x": "71",
                "y": "160.5",
                "label": "Kuala Lumpur",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "43",
                "y": "124.5",
                "label": "Lumut",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "57",
                "y": "107.5",
                "label": "Ipoh"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "90",
                "y": "77.5",
                "label": "Kota Baharu"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "105",
                "y": "95.5",
                "label": "Kuala Terengganu",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "116",
                "y": "138.5",
                "label": "Kuantan",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "84",
                "y": "178.5",
                "label": "Melaka",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "128",
                "y": "205.5",
                "label": "Johor Baharu",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "65",
                "y": "166.5",
                "label": "Port Dickson",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "480",
                "y": "58.5",
                "label": "Kudat"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "463",
                "y": "85.5",
                "label": "Kota Kinabalu"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "445",
                "y": "114.5",
                "label": "Miri",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "348",
                "y": "185.5",
                "label": "Sibu"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "301",
                "y": "207.5",
                "label": "Kuching"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "513",
                "y": "80.5",
                "label": "Sandakan",
                "labelpos": "right"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "526",
                "y": "103.5",
                "label": "Lahad Datu",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "505",
                "y": "125.5",
                "label": "Tawau",
                "labelpos": "bottom"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "382",
                "y": "164.5",
                "label": "Bintulu",
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
                "id": "KL",
                "x": "71",
                "y": "160.5",
                "label": "Kuala Lumpur",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "43",
                "y": "124.5",
                "label": "Lumut",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "57",
                "y": "107.5",
                "label": "Ipoh"
            },
            {
                "id": "03",
                "x": "90",
                "y": "77.5",
                "label": "Kota Baharu"
            },
            {
                "id": "06",
                "x": "105",
                "y": "95.5",
                "label": "Kuala Terengganu",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "116",
                "y": "138.5",
                "label": "Kuantan",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "84",
                "y": "178.5",
                "label": "Melaka",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "128",
                "y": "205.5",
                "label": "Johor Baharu",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "65",
                "y": "166.5",
                "label": "Port Dickson",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "480",
                "y": "58.5",
                "label": "Kudat"
            },
            {
                "id": "11",
                "x": "463",
                "y": "85.5",
                "label": "Kota Kinabalu"
            },
            {
                "id": "12",
                "x": "445",
                "y": "114.5",
                "label": "Miri",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "348",
                "y": "185.5",
                "label": "Sibu"
            },
            {
                "id": "14",
                "x": "301",
                "y": "207.5",
                "label": "Kuching"
            },
            {
                "id": "15",
                "x": "513",
                "y": "80.5",
                "label": "Sandakan",
                "labelpos": "right"
            },
            {
                "id": "16",
                "x": "526",
                "y": "103.5",
                "label": "Lahad Datu",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "505",
                "y": "125.5",
                "label": "Tawau",
                "labelpos": "bottom"
            },
            {
                "id": "18",
                "x": "382",
                "y": "164.5",
                "label": "Bintulu",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "KL",
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
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
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
		    <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			<shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='KL' x='71' y='160.5' label='Kuala Lumpur' labelPos='right'  />
			<marker id='01' x='43' y='124.5' label='Lumut' labelPos='left'  />
			<marker id='02' x='57' y='107.5' label='Ipoh'  />
			<marker id='03' x='90' y='77.5' label='Kota Baharu'  />
			<marker id='06' x='105' y='95.5' label='Kuala Terengganu' labelPos='right'  />
			<marker id='04' x='116' y='138.5' label='Kuantan' labelPos='right'  />
			<marker id='07' x='84' y='178.5' label='Melaka' labelPos='left'  />
			<marker id='05' x='128' y='205.5' label='Johor Baharu' labelPos='right'  />
			<marker id='08' x='65' y='166.5' label='Port Dickson' labelPos='left'  />
			<marker id='10' x='480' y='58.5' label='Kudat'  />
			<marker id='11' x='463' y='85.5' label='Kota Kinabalu'  />
			<marker id='12' x='445' y='114.5' label='Miri' labelPos='left'  />
			<marker id='13' x='348' y='185.5' label='Sibu'  />
			<marker id='14' x='301' y='207.5' label='Kuching'  />
			<marker id='15' x='513' y='80.5' label='Sandakan' labelPos='right'  />
			<marker id='16' x='526' y='103.5' label='Lahad Datu' labelPos='left'  />
			<marker id='17' x='505' y='125.5' label='Tawau' labelPos='bottom'  />
			<marker id='18' x='382' y='164.5' label='Bintulu' labelPos='right'  />

		</definition>
		<application>
			<marker id='KL' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
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
