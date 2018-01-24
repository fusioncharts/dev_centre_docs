---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NewBrunswick

#### JavaScript Alias: maps/newbrunswick


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
            "id": "CA.NB.AC"
        },
        {
            "id": "CA.NB.AR"
        },
        {
            "id": "CA.NB.FC"
        },
        {
            "id": "CA.NB.MR"
        },
        {
            "id": "CA.NB.RV"
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
                "id": "FE",
                "shapeid": "myCustomShape",
                "x": "226.95",
                "y": "262.17",
                "label": "Fredericton"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "316.95",
                "y": "136.95",
                "label": "Chatham",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "299.34",
                "y": "64.56",
                "label": "Bathurst",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "234.78",
                "y": "9.78",
                "label": "Dalhousie",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "230.86",
                "y": "27.39",
                "label": "Campbellton",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "68.47",
                "y": "76.3",
                "label": "Edmundston",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "111.52",
                "y": "107.6",
                "label": "St.Leonard",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "117.39",
                "y": "129.13",
                "label": "Grand Falls",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "109.56",
                "y": "205.43",
                "label": "Perth-Andover"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "144.78",
                "y": "248.47",
                "label": "Woodstock",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "242.6",
                "y": "285.65",
                "label": "Oromocto",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "168.26",
                "y": "360",
                "label": "St.Stephen",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "242.6",
                "y": "358.04",
                "label": "Grand Bay",
                "labelpos": "bottom"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "270",
                "y": "363.91",
                "label": "St.John",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "379.56",
                "y": "273.91",
                "label": "Moncton"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "360",
                "y": "289.56",
                "label": "Riverview",
                "labelpos": "left"
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
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1",
        "showlabels": "0"
    },
    "data": [
        {
            "id": "CA.NB.AC"
        },
        {
            "id": "CA.NB.AR"
        },
        {
            "id": "CA.NB.FC"
        },
        {
            "id": "CA.NB.MR"
        },
        {
            "id": "CA.NB.RV"
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
                "id": "FE",
                "x": "226.95",
                "y": "262.17",
                "label": "Fredericton"
            },
            {
                "id": "01",
                "x": "316.95",
                "y": "136.95",
                "label": "Chatham",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "299.34",
                "y": "64.56",
                "label": "Bathurst",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "234.78",
                "y": "9.78",
                "label": "Dalhousie",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "230.86",
                "y": "27.39",
                "label": "Campbellton",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "68.47",
                "y": "76.3",
                "label": "Edmundston",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "111.52",
                "y": "107.6",
                "label": "St.Leonard",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "117.39",
                "y": "129.13",
                "label": "Grand Falls",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "109.56",
                "y": "205.43",
                "label": "Perth-Andover"
            },
            {
                "id": "09",
                "x": "144.78",
                "y": "248.47",
                "label": "Woodstock",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "242.6",
                "y": "285.65",
                "label": "Oromocto",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "168.26",
                "y": "360",
                "label": "St.Stephen",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "242.6",
                "y": "358.04",
                "label": "Grand Bay",
                "labelpos": "bottom"
            },
            {
                "id": "13",
                "x": "270",
                "y": "363.91",
                "label": "St.John",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "379.56",
                "y": "273.91",
                "label": "Moncton"
            },
            {
                "id": "15",
                "x": "360",
                "y": "289.56",
                "label": "Riverview",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "FE",
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
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
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
<map animation='0' showShadow='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1' showLabels='0' >
	<data>
		<entity id='CA.NB.AC'  />
		<entity id='CA.NB.AR'  />
		<entity id='CA.NB.FC'  />
		<entity id='CA.NB.MR'  />
		<entity id='CA.NB.RV'  />
	</data>
	<markers>
	<shapes>
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	   </shapes>
		<definition>
			<marker id='FE' x='226.95' y='262.17' label='Fredericton'  />
			<marker id='01' x='316.95' y='136.95' label='Chatham' labelPos='right'  />
			<marker id='02' x='299.34' y='64.56' label='Bathurst' labelPos='right'  />
			<marker id='04' x='234.78' y='9.78' label='Dalhousie' labelPos='left'  />
			<marker id='03' x='230.86' y='27.39' label='Campbellton' labelPos='left'  />
			<marker id='05' x='68.47' y='76.3' label='Edmundston' labelPos='right'  />
			<marker id='06' x='111.52' y='107.6' label='St.Leonard' labelPos='right'  />
			<marker id='07' x='117.39' y='129.13' label='Grand Falls' labelPos='right'  />
			<marker id='08' x='109.56' y='205.43' label='Perth-Andover'  />
			<marker id='09' x='144.78' y='248.47' label='Woodstock' labelPos='left'  />
			<marker id='10' x='242.6' y='285.65' label='Oromocto' labelPos='left'  />
			<marker id='11' x='168.26' y='360' label='St.Stephen' labelPos='left'  />
			<marker id='12' x='242.6' y='358.04' label='Grand Bay' labelPos='bottom'  />
			<marker id='13' x='270' y='363.91' label='St.John' labelPos='right'  />
			<marker id='14' x='379.56' y='273.91' label='Moncton'  />
			<marker id='15' x='360' y='289.56' label='Riverview' labelPos='left'  />
		</definition>
		<application>
			<marker id='FE' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
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
			<marker id='15' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
