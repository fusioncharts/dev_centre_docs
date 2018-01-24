---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Antigua

#### JavaScript Alias: maps/antigua


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
                "id": "SJ",
                "shapeid": "myCustomShape",
                "x": "130.78",
                "y": "118.19",
                "label": "Saint John's ",
                "labelpos": "left"
            },
            {
                "id": "CG",
                "shapeid": "newCustomShape",
                "x": "195.53",
                "y": "12.33",
                "label": "Cedar Grove",
                "labelpos": "bottom"
            },
            {
                "id": "PA",
                "shapeid": "newCustomShape",
                "x": "284.95",
                "y": "130.52",
                "label": "Parham",
                "labelpos": "right"
            },
            {
                "id": "WV",
                "shapeid": "newCustomShape",
                "x": "407.25",
                "y": "174.72",
                "label": "Willikies Village",
                "labelpos": "left"
            },
            {
                "id": "FR",
                "shapeid": "newCustomShape",
                "x": "403.14",
                "y": "247.69",
                "label": "Freetown",
                "labelpos": "right"
            },
            {
                "id": "EH",
                "shapeid": "newCustomShape",
                "x": "281.86",
                "y": "310.38",
                "label": "English Harbour Town",
                "labelpos": "top"
            },
            {
                "id": "SW",
                "shapeid": "newCustomShape",
                "x": "208.89",
                "y": "255.91",
                "label": "Sweets"
            },
            {
                "id": "AS",
                "shapeid": "newCustomShape",
                "x": "218.14",
                "y": "220.97",
                "label": "All Saint"
            },
            {
                "id": "CA",
                "shapeid": "newCustomShape",
                "x": "148.25",
                "y": "315.52",
                "label": "Carisle"
            },
            {
                "id": "BO",
                "shapeid": "newCustomShape",
                "x": "52.67",
                "y": "218.91",
                "label": "Bolands",
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
                "id": "SJ",
                "x": "130.78",
                "y": "118.19",
                "label": "Saint John's ",
                "labelpos": "left"
            },
            {
                "id": "CG",
                "x": "195.53",
                "y": "12.33",
                "label": "Cedar Grove",
                "labelpos": "bottom"
            },
            {
                "id": "PA",
                "x": "284.95",
                "y": "130.52",
                "label": "Parham",
                "labelpos": "right"
            },
            {
                "id": "WV",
                "x": "407.25",
                "y": "174.72",
                "label": "Willikies Village",
                "labelpos": "left"
            },
            {
                "id": "FR",
                "x": "403.14",
                "y": "247.69",
                "label": "Freetown",
                "labelpos": "right"
            },
            {
                "id": "EH",
                "x": "281.86",
                "y": "310.38",
                "label": "English Harbour Town",
                "labelpos": "top"
            },
            {
                "id": "SW",
                "x": "208.89",
                "y": "255.91",
                "label": "Sweets"
            },
            {
                "id": "AS",
                "x": "218.14",
                "y": "220.97",
                "label": "All Saint"
            },
            {
                "id": "CA",
                "x": "148.25",
                "y": "315.52",
                "label": "Carisle"
            },
            {
                "id": "BO",
                "x": "52.67",
                "y": "218.91",
                "label": "Bolands",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "SJ",
                "shapeid": "myCustomShape"
            },
            {
                "id": "CG",
                "shapeid": "newCustomShape"
            },
            {
                "id": "PA",
                "shapeid": "newCustomShape"
            },
            {
                "id": "WV",
                "shapeid": "newCustomShape"
            },
            {
                "id": "FR",
                "shapeid": "newCustomShape"
            },
            {
                "id": "EH",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SW",
                "shapeid": "newCustomShape"
            },
            {
                "id": "AS",
                "shapeid": "newCustomShape"
            },
            {
                "id": "CA",
                "shapeid": "newCustomShape"
            },
            {
                "id": "BO",
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
	     <shape id='myCustomShape'  type='circle' fillColor='FFFFFF,333333' fillpattern='radial' showBorder='0' radius='4' />
		 <shape id='newCustomShape'  type='circle' fillColor='FFFFFF,000099' fillpattern='radial' showBorder='0' radius='3' />
	</shapes>
		<definition>
			<marker id='SJ' x='130.78' y='118.19' label="Saint John's " labelPos='left'  />
			<marker id='CG' x='195.53' y='12.33' label='Cedar Grove' labelPos='bottom' />
			<marker id='PA' x='284.95' y='130.52' label='Parham' labelPos='right' />
			<marker id='WV' x='407.25' y='174.72' label='Willikies Village' labelPos='left'  />
			<marker id='FR' x='403.14' y='247.69' label='Freetown' labelPos='right'  />
			<marker id='EH' x='281.86' y='310.38' label='English Harbour Town' labelPos='top' />
			<marker id='SW' x='208.89' y='255.91' label='Sweets'  />
			<marker id='AS' x='218.14' y='220.97' label='All Saint'  />
			<marker id='CA' x='148.25' y='315.52' label='Carisle'  />
			<marker id='BO' x='52.67' y='218.91' label='Bolands' labelPos='right' />

		</definition>
		<application>
			<marker id='SJ' shapeId='myCustomShape'  />
			<marker id='CG' shapeId='newCustomShape'  />
			<marker id='PA' shapeId='newCustomShape'  />
			<marker id='WV' shapeId='newCustomShape'  />
			<marker id='FR' shapeId='newCustomShape'  />
			<marker id='EH' shapeId='newCustomShape'  />
			<marker id='SW' shapeId='newCustomShape'  />
			<marker id='AS' shapeId='newCustomShape'  />
			<marker id='CA' shapeId='newCustomShape'  />
			<marker id='BO' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
