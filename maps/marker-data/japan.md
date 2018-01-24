---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Japan

#### JavaScript Alias: maps/japan


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
                "id": "TY",
                "shapeid": "myCustomShape",
                "x": "401.9",
                "y": "278.46",
                "label": "Tokyo",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "428.46",
                "y": "74.78",
                "label": "Sapporo"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "407.8",
                "y": "161.37",
                "label": "Akita",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "430.43",
                "y": "205.64",
                "label": "Sendai"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "412.72",
                "y": "275.51",
                "label": "Yokohama",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "347.78",
                "y": "295.19",
                "label": "Nagoya",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "317.28",
                "y": "309.94",
                "label": "Osaka",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "309.4",
                "y": "306.01",
                "label": "Kobe"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "245.45",
                "y": "316.83",
                "label": "Hiroshima"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "212.97",
                "y": "330.61",
                "label": "Kitakyushu",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "199.2",
                "y": "338.48",
                "label": "Fukuoka",
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
                "id": "TY",
                "x": "401.9",
                "y": "278.46",
                "label": "Tokyo",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "428.46",
                "y": "74.78",
                "label": "Sapporo"
            },
            {
                "id": "02",
                "x": "407.8",
                "y": "161.37",
                "label": "Akita",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "430.43",
                "y": "205.64",
                "label": "Sendai"
            },
            {
                "id": "04",
                "x": "412.72",
                "y": "275.51",
                "label": "Yokohama",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "347.78",
                "y": "295.19",
                "label": "Nagoya",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "317.28",
                "y": "309.94",
                "label": "Osaka",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "309.4",
                "y": "306.01",
                "label": "Kobe"
            },
            {
                "id": "08",
                "x": "245.45",
                "y": "316.83",
                "label": "Hiroshima"
            },
            {
                "id": "09",
                "x": "212.97",
                "y": "330.61",
                "label": "Kitakyushu",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "199.2",
                "y": "338.48",
                "label": "Fukuoka",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "TY",
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
			<marker id='TY' x='401.9' y='278.46' label='Tokyo' labelPos='left'  />
			<marker id='01' x='428.46' y='74.78' label='Sapporo'  />
			<marker id='02' x='407.8' y='161.37' label='Akita' labelPos='right' />
			<marker id='03' x='430.43' y='205.64' label='Sendai'  />
			<marker id='04' x='412.72' y='275.51' label='Yokohama' labelPos='right'  />
			<marker id='05' x='347.78' y='295.19' label='Nagoya' labelPos='right' />
			<marker id='06' x='317.28' y='309.94' label='Osaka' labelPos='right' />
			<marker id='07' x='309.4' y='306.01' label='Kobe'  />
			<marker id='08' x='245.45' y='316.83' label='Hiroshima'  />
			<marker id='09' x='212.97' y='330.61' label='Kitakyushu' labelPos='left'  />
			<marker id='10' x='199.2' y='338.48' label='Fukuoka' labelPos='right' />

		</definition>
		<application>
			<marker id='TY' shapeId='myCustomShape'  />
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

		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
