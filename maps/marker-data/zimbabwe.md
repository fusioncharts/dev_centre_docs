---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Zimbabwe

#### JavaScript Alias: maps/zimbabwe


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
            "id": "ZW.BU"
        },
        {
            "id": "ZW.HA"
        },
        {
            "id": "ZW.MA"
        },
        {
            "id": "ZW.MC"
        },
        {
            "id": "ZW.ME"
        },
        {
            "id": "ZW.MW"
        },
        {
            "id": "ZW.MV"
        },
        {
            "id": "ZW.MN"
        },
        {
            "id": "ZW.MS"
        },
        {
            "id": "ZW.MI"
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
                "id": "HR",
                "shapeid": "myCustomShape",
                "x": "356.44",
                "y": "163.55",
                "label": "Harare",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "238.89",
                "y": "88.93",
                "label": "Kariba",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "331.91",
                "y": "133.91",
                "label": "Chinhoyi",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "371.78",
                "y": "168.66",
                "label": "Chitungwiza",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "447.42",
                "y": "228.97",
                "label": "Mutare",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "348.27",
                "y": "298.48",
                "label": "Masvingo",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "136.67",
                "y": "155.37",
                "label": "Binga",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "86.58",
                "y": "196.26",
                "label": "Hwange",
                "labelpos": "right"
            },
            {
                "id": "BL",
                "shapeid": "myCustomShape",
                "x": "212.31",
                "y": "305.64",
                "label": "Bulawayo"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "231.73",
                "y": "227.95",
                "label": "Gweru",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "294.09",
                "y": "433.42",
                "label": "Beitbridge"
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
            "id": "ZW.BU"
        },
        {
            "id": "ZW.HA"
        },
        {
            "id": "ZW.MA"
        },
        {
            "id": "ZW.MC"
        },
        {
            "id": "ZW.ME"
        },
        {
            "id": "ZW.MW"
        },
        {
            "id": "ZW.MV"
        },
        {
            "id": "ZW.MN"
        },
        {
            "id": "ZW.MS"
        },
        {
            "id": "ZW.MI"
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
                "id": "HR",
                "x": "356.44",
                "y": "163.55",
                "label": "Harare",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "238.89",
                "y": "88.93",
                "label": "Kariba",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "331.91",
                "y": "133.91",
                "label": "Chinhoyi",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "371.78",
                "y": "168.66",
                "label": "Chitungwiza",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "447.42",
                "y": "228.97",
                "label": "Mutare",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "348.27",
                "y": "298.48",
                "label": "Masvingo",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "136.67",
                "y": "155.37",
                "label": "Binga",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "86.58",
                "y": "196.26",
                "label": "Hwange",
                "labelpos": "right"
            },
            {
                "id": "BL",
                "x": "212.31",
                "y": "305.64",
                "label": "Bulawayo"
            },
            {
                "id": "08",
                "x": "231.73",
                "y": "227.95",
                "label": "Gweru",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "294.09",
                "y": "433.42",
                "label": "Beitbridge"
            }
        ],
        "application": [
            {
                "id": "HR",
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
                "id": "BL",
                "shapeid": "myCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
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
		<entity id='ZW.BU'  />
		<entity id='ZW.HA'  />
		<entity id='ZW.MA'  />
		<entity id='ZW.MC'  />
		<entity id='ZW.ME'  />
		<entity id='ZW.MW'  />
		<entity id='ZW.MV'  />
		<entity id='ZW.MN'  />
		<entity id='ZW.MS'  />
		<entity id='ZW.MI'  />
	</data>
	<markers>
		 <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='HR' x='356.44' y='163.55' label='Harare' labelPos='left'  />
			<marker id='01' x='238.89' y='88.93' label='Kariba' labelPos='right'  />
			<marker id='02' x='331.91' y='133.91' label='Chinhoyi' labelPos='right'  />
			<marker id='03' x='371.78' y='168.66' label='Chitungwiza' labelPos='right'  />
			<marker id='04' x='447.42' y='228.97' label='Mutare' labelPos='left'  />
			<marker id='05' x='348.27' y='298.48' label='Masvingo' labelPos='right'  />
			<marker id='06' x='136.67' y='155.37' label='Binga' labelPos='right'  />
			<marker id='07' x='86.58' y='196.26' label='Hwange' labelPos='right'  />
			<marker id='BL' x='212.31' y='305.64' label='Bulawayo'  />
			<marker id='08' x='231.73' y='227.95' label='Gweru' labelPos='right'  />
			<marker id='09' x='294.09' y='433.42' label='Beitbridge'  />
		</definition>
		<application>
			<marker id='HR' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='BL' shapeId='myCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
