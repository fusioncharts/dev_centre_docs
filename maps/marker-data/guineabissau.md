---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: GuineaBissau

#### JavaScript Alias: maps/guineabissau


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
            "id": "GW.BA"
        },
        {
            "id": "GW.BM"
        },
        {
            "id": "GW.BS"
        },
        {
            "id": "GW.BL"
        },
        {
            "id": "GW.CA"
        },
        {
            "id": "GW.GA"
        },
        {
            "id": "GW.OI"
        },
        {
            "id": "GW.QU"
        },
        {
            "id": "GW.TO"
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
                "id": "BU",
                "shapeid": "myCustomShape",
                "x": "245.63",
                "y": "193.76",
                "label": "Bissau",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "125.86",
                "y": "112.56",
                "label": "Cacheu",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "241.57",
                "y": "131.84",
                "label": "Mansoa",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "298.41",
                "y": "53.69",
                "label": "Farim",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "387.73",
                "y": "106.47",
                "label": "Bafata",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "521.71",
                "y": "110.53",
                "label": "Gabu",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "296.38",
                "y": "331.8",
                "label": "Catio",
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
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "GW.BA"
        },
        {
            "id": "GW.BM"
        },
        {
            "id": "GW.BS"
        },
        {
            "id": "GW.BL"
        },
        {
            "id": "GW.CA"
        },
        {
            "id": "GW.GA"
        },
        {
            "id": "GW.OI"
        },
        {
            "id": "GW.QU"
        },
        {
            "id": "GW.TO"
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
                "id": "BU",
                "x": "245.63",
                "y": "193.76",
                "label": "Bissau",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "125.86",
                "y": "112.56",
                "label": "Cacheu",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "241.57",
                "y": "131.84",
                "label": "Mansoa",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "298.41",
                "y": "53.69",
                "label": "Farim",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "387.73",
                "y": "106.47",
                "label": "Bafata",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "521.71",
                "y": "110.53",
                "label": "Gabu",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "296.38",
                "y": "331.8",
                "label": "Catio",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "BU",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

    </div>
    <div class='tab old-xml-tab'>
<pre><code class="language-html">
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='' markerRadius='' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='GW.BA'  />
		<entity id='GW.BM'  />
		<entity id='GW.BS'  />
		<entity id='GW.BL'  />
		<entity id='GW.CA'  />
		<entity id='GW.GA'  />
		<entity id='GW.OI'  />
		<entity id='GW.QU'  />
		<entity id='GW.TO'  />
	</data>
	<markers>
		   <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='BU' x='245.63' y='193.76' label='Bissau' labelPos='right'  />
			<marker id='01' x='125.86' y='112.56' label='Cacheu' labelPos='right'  />
			<marker id='02' x='241.57' y='131.84' label='Mansoa' labelPos='right'  />
			<marker id='03' x='298.41' y='53.69' label='Farim' labelPos='right'  />
			<marker id='04' x='387.73' y='106.47' label='Bafata' labelPos='right'  />
			<marker id='05' x='521.71' y='110.53' label='Gabu' labelPos='right'  />
			<marker id='06' x='296.38' y='331.8' label='Catio' labelPos='right'  />
		</definition>
		<application>
			<marker id='BU' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
