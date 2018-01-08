---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: China

#### JavaScript Alias: maps/china


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
                "id": "BE",
                "shapeid": "myCustomShape",
                "x": "367.03",
                "y": "174.31",
                "label": "Beijing ",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "433.68",
                "y": "75.87",
                "label": "Harbin",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "416.25",
                "y": "141.5",
                "label": "Shenyang",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "371.13",
                "y": "186.63",
                "label": "Tianjin",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "343.44",
                "y": "230.7",
                "label": "Zhengzhou"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "389.59",
                "y": "249.16",
                "label": "Nanjing",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "416.25",
                "y": "264.54",
                "label": "Shanghai",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "321.91",
                "y": "252.24",
                "label": "Xi'an",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "360.88",
                "y": "287.1",
                "label": "Wuhan",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "276.79",
                "y": "299.4",
                "label": "Chongqing",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "260.39",
                "y": "286.07",
                "label": "Chengdu",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "152.72",
                "y": "285.05",
                "label": "Lhasa"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "346.52",
                "y": "362.98",
                "label": "Guangzhou",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "285",
                "y": "212.25",
                "label": "Lanzhou"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "117.86",
                "y": "112.79",
                "label": "Urumqi"
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
                "id": "BE",
                "x": "367.03",
                "y": "174.31",
                "label": "Beijing ",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "433.68",
                "y": "75.87",
                "label": "Harbin",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "416.25",
                "y": "141.5",
                "label": "Shenyang",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "371.13",
                "y": "186.63",
                "label": "Tianjin",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "343.44",
                "y": "230.7",
                "label": "Zhengzhou"
            },
            {
                "id": "05",
                "x": "389.59",
                "y": "249.16",
                "label": "Nanjing",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "416.25",
                "y": "264.54",
                "label": "Shanghai",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "321.91",
                "y": "252.24",
                "label": "Xi'an",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "360.88",
                "y": "287.1",
                "label": "Wuhan",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "276.79",
                "y": "299.4",
                "label": "Chongqing",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "260.39",
                "y": "286.07",
                "label": "Chengdu",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "152.72",
                "y": "285.05",
                "label": "Lhasa"
            },
            {
                "id": "12",
                "x": "346.52",
                "y": "362.98",
                "label": "Guangzhou",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "285",
                "y": "212.25",
                "label": "Lanzhou"
            },
            {
                "id": "14",
                "x": "117.86",
                "y": "112.79",
                "label": "Urumqi"
            }
        ],
        "application": [
            {
                "id": "BE",
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
		    <shape id ='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showBorder='0' radius='4'/>
			 <shape id ='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showBorder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='BE' x='367.03' y='174.31' label='Beijing ' labelPos='right'  />
			<marker id='01' x='433.68' y='75.87' label='Harbin' labelPos='right' />
			<marker id='02' x='416.25' y='141.5' label='Shenyang' labelPos='right' />
			<marker id='03' x='371.13' y='186.63' label='Tianjin' labelPos='right' />
			<marker id='04' x='343.44' y='230.7' label='Zhengzhou'  />
			<marker id='05' x='389.59' y='249.16' label='Nanjing' labelPos='right'  />
			<marker id='06' x='416.25' y='264.54' label='Shanghai' labelPos='right'  />
			<marker id='07' x='321.91' y='252.24' label="Xi'an"  labelPos='right'/>
			<marker id='08' x='360.88' y='287.1' label='Wuhan' labelPos='right'  />
			<marker id='09' x='276.79' y='299.4' label='Chongqing' labelPos='left'  />
			<marker id='10' x='260.39' y='286.07' label='Chengdu' labelpos='right'  />
			<marker id='11' x='152.72' y='285.05' label='Lhasa'  />
			<marker id='12' x='346.52' y='362.98' label='Guangzhou' labelPos='right'  />
			<marker id='13' x='285' y='212.25' label='Lanzhou'  />
			<marker id='14' x='117.86' y='112.79' label='Urumqi'  />


		</definition>
		<application>
			<marker id='BE' shapeId='myCustomShape'  />
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

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
