---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SolomonIslands

#### JavaScript Alias: maps/solomonislands


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
            "id": "SB.CN"
        },
        {
            "id": "SB.CH"
        },
        {
            "id": "SB.GC"
        },
        {
            "id": "SB.IS"
        },
        {
            "id": "SB.MK"
        },
        {
            "id": "SB.ML"
        },
        {
            "id": "SB.RB"
        },
        {
            "id": "SB.TE"
        },
        {
            "id": "SB.WE"
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
                "id": "HO",
                "shapeid": "myCustomShape",
                "x": "220.41",
                "y": "144.34",
                "label": "Honiara",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "83.33",
                "y": "84.11",
                "label": "Gizo",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "267.14",
                "y": "162",
                "label": "Aola",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "193.41",
                "y": "129.8",
                "label": "Yandina"
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
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "SB.CN"
        },
        {
            "id": "SB.CH"
        },
        {
            "id": "SB.GC"
        },
        {
            "id": "SB.IS"
        },
        {
            "id": "SB.MK"
        },
        {
            "id": "SB.ML"
        },
        {
            "id": "SB.RB"
        },
        {
            "id": "SB.TE"
        },
        {
            "id": "SB.WE"
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
                "id": "HO",
                "x": "220.41",
                "y": "144.34",
                "label": "Honiara",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "83.33",
                "y": "84.11",
                "label": "Gizo",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "267.14",
                "y": "162",
                "label": "Aola",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "193.41",
                "y": "129.8",
                "label": "Yandina"
            }
        ],
        "application": [
            {
                "id": "HO",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

    </div>
    <div class='tab old-xml-tab'>
<pre><code class="language-html">
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='SB.CN'  />
		<entity id='SB.CH'  />
		<entity id='SB.GC'  />
		<entity id='SB.IS'  />
		<entity id='SB.MK'  />
		<entity id='SB.ML'  />
		<entity id='SB.RB'  />
		<entity id='SB.TE'  />
		<entity id='SB.WE'  />
	</data>
	<markers>
	   <shapes>
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='HO' x='220.41' y='144.34' label='Honiara' labelPos='right'  />
			<marker id='01' x='83.33' y='84.11' label='Gizo' labelPos='left'  />
			<marker id='02' x='267.14' y='162' label='Aola' labelPos='right'  />
			<marker id='03' x='193.41' y='129.8' label='Yandina'  />
		</definition>
		<application>
			<marker id='HO' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
