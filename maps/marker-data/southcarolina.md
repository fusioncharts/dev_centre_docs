---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SouthCarolina

#### JavaScript Alias: maps/southcarolina


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
                "id": "CO",
                "shapeid": "myCustomShape",
                "x": "366.8",
                "y": "233.8",
                "label": "Columbia"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "133",
                "y": "71.68",
                "label": "Easley",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "102.12",
                "y": "108.07",
                "label": "Clemson",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "124.17",
                "y": "134.54",
                "label": "Anderson",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "198.06",
                "y": "189.68",
                "label": "Greenwood",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "219.02",
                "y": "136.75",
                "label": "Laurens",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "269.75",
                "y": "106.97",
                "label": "Union"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "204.68",
                "y": "51.83",
                "label": "Spartanburg"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "349.15",
                "y": "57.34",
                "label": "Rock Hill",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "319.37",
                "y": "36.39",
                "label": "Gaffney",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "252.1",
                "y": "335.26",
                "label": "Aiken"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "368.45",
                "y": "245.1",
                "label": "Cayce",
                "labelpos": "right"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "392.16",
                "y": "320.92",
                "label": "Orangeburg",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "558.69",
                "y": "190.78",
                "label": "Florence",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "447.3",
                "y": "255.85",
                "label": "Sumter",
                "labelpos": "right"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "664.56",
                "y": "243.72",
                "label": "Conway",
                "labelpos": "right"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "682.21",
                "y": "272.39",
                "label": "Myrtle Beach",
                "labelpos": "bottom"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "612.73",
                "y": "348.49",
                "label": "Georgetown",
                "labelpos": "right"
            },
            {
                "id": "18",
                "shapeid": "newCustomShape",
                "x": "485.9",
                "y": "467.6",
                "label": "Charleston",
                "labelpos": "right"
            },
            {
                "id": "19",
                "shapeid": "newCustomShape",
                "x": "471.57",
                "y": "419.07",
                "label": "Goose Creek",
                "labelpos": "right"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "452.82",
                "y": "403.63",
                "label": "Summerville",
                "labelpos": "left"
            },
            {
                "id": "21",
                "shapeid": "newCustomShape",
                "x": "421.94",
                "y": "506.19",
                "label": "Beaufort"
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
                "id": "CO",
                "x": "366.8",
                "y": "233.8",
                "label": "Columbia"
            },
            {
                "id": "01",
                "x": "133",
                "y": "71.68",
                "label": "Easley",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "102.12",
                "y": "108.07",
                "label": "Clemson",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "124.17",
                "y": "134.54",
                "label": "Anderson",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "198.06",
                "y": "189.68",
                "label": "Greenwood",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "219.02",
                "y": "136.75",
                "label": "Laurens",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "269.75",
                "y": "106.97",
                "label": "Union"
            },
            {
                "id": "07",
                "x": "204.68",
                "y": "51.83",
                "label": "Spartanburg"
            },
            {
                "id": "08",
                "x": "349.15",
                "y": "57.34",
                "label": "Rock Hill",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "319.37",
                "y": "36.39",
                "label": "Gaffney",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "252.1",
                "y": "335.26",
                "label": "Aiken"
            },
            {
                "id": "09",
                "x": "368.45",
                "y": "245.1",
                "label": "Cayce",
                "labelpos": "right"
            },
            {
                "id": "12",
                "x": "392.16",
                "y": "320.92",
                "label": "Orangeburg",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "558.69",
                "y": "190.78",
                "label": "Florence",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "447.3",
                "y": "255.85",
                "label": "Sumter",
                "labelpos": "right"
            },
            {
                "id": "15",
                "x": "664.56",
                "y": "243.72",
                "label": "Conway",
                "labelpos": "right"
            },
            {
                "id": "16",
                "x": "682.21",
                "y": "272.39",
                "label": "Myrtle Beach",
                "labelpos": "bottom"
            },
            {
                "id": "17",
                "x": "612.73",
                "y": "348.49",
                "label": "Georgetown",
                "labelpos": "right"
            },
            {
                "id": "18",
                "x": "485.9",
                "y": "467.6",
                "label": "Charleston",
                "labelpos": "right"
            },
            {
                "id": "19",
                "x": "471.57",
                "y": "419.07",
                "label": "Goose Creek",
                "labelpos": "right"
            },
            {
                "id": "20",
                "x": "452.82",
                "y": "403.63",
                "label": "Summerville",
                "labelpos": "left"
            },
            {
                "id": "21",
                "x": "421.94",
                "y": "506.19",
                "label": "Beaufort"
            }
        ],
        "application": [
            {
                "id": "CO",
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
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
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
            },
            {
                "id": "19",
                "shapeid": "newCustomShape"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape"
            },
            {
                "id": "21",
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
			<marker id='CO' x='366.8' y='233.8' label='Columbia'  />
			<marker id='01' x='133' y='71.68' label='Easley' labelPos='left'  />
			<marker id='02' x='102.12' y='108.07' label='Clemson' labelPos='right'  />
			<marker id='03' x='124.17' y='134.54' label='Anderson' labelPos='right'  />
			<marker id='04' x='198.06' y='189.68' label='Greenwood' labelPos='left'  />
			<marker id='05' x='219.02' y='136.75' label='Laurens' labelPos='right'  />
			<marker id='06' x='269.75' y='106.97' label='Union'  />
			<marker id='07' x='204.68' y='51.83' label='Spartanburg'  />
			<marker id='08' x='349.15' y='57.34' label='Rock Hill' labelPos='right'  />
			<marker id='11' x='319.37' y='36.39' label='Gaffney' labelPos='left'  />
			<marker id='10' x='252.1' y='335.26' label='Aiken'  />
			<marker id='09' x='368.45' y='245.1' label='Cayce' labelPos='right'  />
			<marker id='12' x='392.16' y='320.92' label='Orangeburg' labelPos='left'  />
			<marker id='14' x='558.69' y='190.78' label='Florence' labelPos='right'  />
			<marker id='13' x='447.3' y='255.85' label='Sumter' labelPos='right'  />
			<marker id='15' x='664.56' y='243.72' label='Conway' labelPos='right'  />
			<marker id='16' x='682.21' y='272.39' label='Myrtle Beach' labelPos='bottom'  />
			<marker id='17' x='612.73' y='348.49' label='Georgetown' labelPos='right'  />
			<marker id='18' x='485.9' y='467.6' label='Charleston' labelPos='right'  />
			<marker id='19' x='471.57' y='419.07' label='Goose Creek' labelPos='right'  />
			<marker id='20' x='452.82' y='403.63' label='Summerville' labelPos='left'  />
			<marker id='21' x='421.94' y='506.19' label='Beaufort'  />

		</definition>
		<application>
			<marker id='CO' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
			<marker id='17' shapeId='newCustomShape'  />
			<marker id='18' shapeId='newCustomShape'  />
			<marker id='19' shapeId='newCustomShape'  />
			<marker id='20' shapeId='newCustomShape'  />
			<marker id='21' shapeId='newCustomShape'  />

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
