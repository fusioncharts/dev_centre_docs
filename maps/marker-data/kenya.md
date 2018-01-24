---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Kenya

#### JavaScript Alias: maps/kenya


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
                "id": "NA",
                "shapeid": "myCustomShape",
                "x": "117.03",
                "y": "207.5",
                "label": "Nairobi",
                "labelpos": "top"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "190.57",
                "y": "48",
                "label": "Moyale"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "166.75",
                "y": "81.14",
                "label": "Marsabit"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "62.14",
                "y": "52.14",
                "label": "Lodwar"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "47.64",
                "y": "165.04",
                "label": "Kisumu",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "70.42",
                "y": "141.21",
                "label": "Eldoret"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "89.07",
                "y": "184.71",
                "label": "Nakuru",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "161.57",
                "y": "156.75",
                "label": "Meru"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "141.89",
                "y": "216.82",
                "label": "Machakos",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "255.82",
                "y": "238.57",
                "label": "Lamu"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "222.67",
                "y": "275.86",
                "label": "Malindi",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "209.21",
                "y": "304.86",
                "label": "Mombasa",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "224.75",
                "y": "169.18",
                "label": "Garissa"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "237.17",
                "y": "96.68",
                "label": "Wajir"
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
                "id": "NA",
                "x": "117.03",
                "y": "207.5",
                "label": "Nairobi",
                "labelpos": "top"
            },
            {
                "id": "01",
                "x": "190.57",
                "y": "48",
                "label": "Moyale"
            },
            {
                "id": "02",
                "x": "166.75",
                "y": "81.14",
                "label": "Marsabit"
            },
            {
                "id": "03",
                "x": "62.14",
                "y": "52.14",
                "label": "Lodwar"
            },
            {
                "id": "04",
                "x": "47.64",
                "y": "165.04",
                "label": "Kisumu",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "70.42",
                "y": "141.21",
                "label": "Eldoret"
            },
            {
                "id": "07",
                "x": "89.07",
                "y": "184.71",
                "label": "Nakuru",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "161.57",
                "y": "156.75",
                "label": "Meru"
            },
            {
                "id": "10",
                "x": "141.89",
                "y": "216.82",
                "label": "Machakos",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "255.82",
                "y": "238.57",
                "label": "Lamu"
            },
            {
                "id": "12",
                "x": "222.67",
                "y": "275.86",
                "label": "Malindi",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "209.21",
                "y": "304.86",
                "label": "Mombasa",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "224.75",
                "y": "169.18",
                "label": "Garissa"
            },
            {
                "id": "15",
                "x": "237.17",
                "y": "96.68",
                "label": "Wajir"
            }
        ],
        "application": [
            {
                "id": "NA",
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
                "id": "07",
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
			<marker id='NA' x='117.03' y='207.5' label='Nairobi' labelPos='top'  />
			<marker id='01' x='190.57' y='48' label='Moyale'  />
			<marker id='02' x='166.75' y='81.14' label='Marsabit'  />
			<marker id='03' x='62.14' y='52.14' label='Lodwar'  />
			<marker id='04' x='47.64' y='165.04' label='Kisumu' labelPos='right'  />
			<marker id='05' x='70.42' y='141.21' label='Eldoret'  />
			<marker id='07' x='89.07' y='184.71' label='Nakuru' labelPos='left'  />
			<marker id='09' x='161.57' y='156.75' label='Meru'  />
			<marker id='10' x='141.89' y='216.82' label='Machakos' labelPos='right' />
			<marker id='11' x='255.82' y='238.57' label='Lamu'  />
			<marker id='12' x='222.67' y='275.86' label='Malindi' labelPos='left' />
			<marker id='13' x='209.21' y='304.86' label='Mombasa' labelPos='left' />
			<marker id='14' x='224.75' y='169.18' label='Garissa'  />
			<marker id='15' x='237.17' y='96.68' label='Wajir'  />


		</definition>
		<application>
			<marker id='NA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
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
