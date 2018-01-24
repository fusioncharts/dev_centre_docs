---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Greenland

#### JavaScript Alias: maps/greenland


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
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "NU",
                "shapeid": "myCustomShape",
                "x": "71.3",
                "y": "421.91",
                "label": "Nuuk(Godthab)",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "227.33",
                "y": "26.14",
                "label": "Nord"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "111.6",
                "y": "509.74",
                "label": "Narsarsuaq"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "36.16",
                "y": "148.07",
                "label": "Qaanaaq(Thule)"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "253.16",
                "y": "135.67",
                "label": "Danmark Havn"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "286.23",
                "y": "278.27",
                "label": "Ittoqqortoormlit",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "82.66",
                "y": "318.57",
                "label": "Qeqertarsuaq",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "66.13",
                "y": "354.74",
                "label": "Sisimiut"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "104.36",
                "y": "356.8",
                "label": "Kangerlussuaq",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "71.3",
                "y": "406.41",
                "label": "Kangerluarsoruseq"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "80.59",
                "y": "467.37",
                "label": "Paamiut(Frederikshab)"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "122.96",
                "y": "529.37",
                "label": "Nanortalik",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "184.96",
                "y": "405.37",
                "label": "Tasiilaq(Ammassalik)"
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
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "NU",
                "x": "71.3",
                "y": "421.91",
                "label": "Nuuk(Godthab)",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "227.33",
                "y": "26.14",
                "label": "Nord"
            },
            {
                "id": "02",
                "x": "111.6",
                "y": "509.74",
                "label": "Narsarsuaq"
            },
            {
                "id": "03",
                "x": "36.16",
                "y": "148.07",
                "label": "Qaanaaq(Thule)"
            },
            {
                "id": "04",
                "x": "253.16",
                "y": "135.67",
                "label": "Danmark Havn"
            },
            {
                "id": "05",
                "x": "286.23",
                "y": "278.27",
                "label": "Ittoqqortoormlit",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "82.66",
                "y": "318.57",
                "label": "Qeqertarsuaq",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "66.13",
                "y": "354.74",
                "label": "Sisimiut"
            },
            {
                "id": "08",
                "x": "104.36",
                "y": "356.8",
                "label": "Kangerlussuaq",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "71.3",
                "y": "406.41",
                "label": "Kangerluarsoruseq"
            },
            {
                "id": "10",
                "x": "80.59",
                "y": "467.37",
                "label": "Paamiut(Frederikshab)"
            },
            {
                "id": "11",
                "x": "122.96",
                "y": "529.37",
                "label": "Nanortalik",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "184.96",
                "y": "405.37",
                "label": "Tasiilaq(Ammassalik)"
            }
        ],
        "application": [
            {
                "id": "NU",
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
<map>
	<markers>
	    <shapes>
		     <shape id='myCustomshape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
			 <shape id='newCustomshape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='NU' x='71.3' y='421.91' label='Nuuk(Godthab)' labelpos='right' />
			<marker id='01' x='227.33' y='26.14' label='Nord'  />
			<marker id='02' x='111.6' y='509.74' label='Narsarsuaq'  />
			<marker id='03' x='36.16' y='148.07' label='Qaanaaq(Thule)'  />
			<marker id='04' x='253.16' y='135.67' label='Danmark Havn'  />
			<marker id='05' x='286.23' y='278.27' label='Ittoqqortoormlit' labelPos='left' />
			<marker id='06' x='82.66' y='318.57' label='Qeqertarsuaq' labelPos='right' />
			<marker id='07' x='66.13' y='354.74' label='Sisimiut'  />
			<marker id='08' x='104.36' y='356.8' label='Kangerlussuaq' labelPos='right'  />
			<marker id='09' x='71.3' y='406.41' label='Kangerluarsoruseq'  />
			<marker id='10' x='80.59' y='467.37' label='Paamiut(Frederikshab)'  />
			<marker id='11' x='122.96' y='529.37' label='Nanortalik' labelPos='right'  />
			<marker id='12' x='184.96' y='405.37' label='Tasiilaq(Ammassalik)'/>
		</definition>
		<application>
			<marker id='NU' shapeId='myCustomShape'  />
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
