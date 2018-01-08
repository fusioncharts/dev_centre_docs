---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Iceland

#### JavaScript Alias: maps/iceland


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
                "id": "RE",
                "shapeid": "myCustomShape",
                "x": "130.58",
                "y": "276.47",
                "label": "Reykjavik",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "72.94",
                "y": "47.05",
                "label": "Isafjordhur",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "358.82",
                "y": "69.41",
                "label": "Husavik"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "421.17",
                "y": "24.7",
                "label": "Raufarhofn",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "524.7",
                "y": "154.11",
                "label": "Seydhisfjordhur"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "131.76",
                "y": "285.88",
                "label": "Straumsvik",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "123.52",
                "y": "294.11",
                "label": "Hafnarfjordhur",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "84.7",
                "y": "300",
                "label": "Keflavik",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "184.7",
                "y": "394.11",
                "label": "Vestmannaeyjar"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "284.7",
                "y": "381.17",
                "label": "Vik",
                "labelpos": "top"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "482.35",
                "y": "274.11",
                "label": "Hofn"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "318.82",
                "y": "112.94",
                "label": "Akureyri"
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
                "id": "RE",
                "x": "130.58",
                "y": "276.47",
                "label": "Reykjavik",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "72.94",
                "y": "47.05",
                "label": "Isafjordhur",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "358.82",
                "y": "69.41",
                "label": "Husavik"
            },
            {
                "id": "03",
                "x": "421.17",
                "y": "24.7",
                "label": "Raufarhofn",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "524.7",
                "y": "154.11",
                "label": "Seydhisfjordhur"
            },
            {
                "id": "05",
                "x": "131.76",
                "y": "285.88",
                "label": "Straumsvik",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "123.52",
                "y": "294.11",
                "label": "Hafnarfjordhur",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "84.7",
                "y": "300",
                "label": "Keflavik",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "184.7",
                "y": "394.11",
                "label": "Vestmannaeyjar"
            },
            {
                "id": "09",
                "x": "284.7",
                "y": "381.17",
                "label": "Vik",
                "labelpos": "top"
            },
            {
                "id": "10",
                "x": "482.35",
                "y": "274.11",
                "label": "Hofn"
            },
            {
                "id": "11",
                "x": "318.82",
                "y": "112.94",
                "label": "Akureyri"
            }
        ],
        "application": [
            {
                "id": "RE",
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
	        <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showborder='0' radius='4'/>
			<shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='RE' x='130.58' y='276.47' label='Reykjavik' labelPos='right'  />
			<marker id='01' x='72.94' y='47.05' label='Isafjordhur' labelPos='left'  />
			<marker id='02' x='358.82' y='69.41' label='Husavik'  />
			<marker id='03' x='421.17' y='24.7' label='Raufarhofn' labelPos='right'  />
			<marker id='04' x='524.7' y='154.11' label='Seydhisfjordhur'  />
			<marker id='05' x='131.76' y='285.88' label='Straumsvik' labelPos='right' />
			<marker id='06' x='123.52' y='294.11' label='Hafnarfjordhur' labelPos='left' />
			<marker id='07' x='84.7' y='300' label='Keflavik' labelPos='bottom'/>
			<marker id='08' x='184.7' y='394.11' label='Vestmannaeyjar'  />
			<marker id='09' x='284.7' y='381.17' label='Vik' labelPos='top'  />
			<marker id='10' x='482.35' y='274.11' label='Hofn'  />
			<marker id='11' x='318.82' y='112.94' label='Akureyri'  />

		</definition>
		<application>
			<marker id='RE' shapeId='myCustomShape'  />
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
