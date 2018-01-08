---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NovaScotia

#### JavaScript Alias: maps/novascotia


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
            "id": "CA.NS.CB"
        },
        {
            "id": "CA.NS.ET"
        },
        {
            "id": "CA.NS.GT"
        },
        {
            "id": "CA.NS.HD"
        },
        {
            "id": "CA.NS.LR"
        },
        {
            "id": "CA.NS.MD"
        },
        {
            "id": "CA.NS.ST"
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
                "id": "HA",
                "shapeid": "myCustomShape",
                "x": "191.78",
                "y": "225.74",
                "label": "Halifax",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "202.5",
                "y": "216.1",
                "label": "Dartmouth",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "215.35",
                "y": "158.24",
                "label": "Truro"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "172.5",
                "y": "149.67",
                "label": "Parrsboro",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "158.57",
                "y": "111.1",
                "label": "Amherst"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "251.78",
                "y": "123.96",
                "label": "Pictou"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "261.42",
                "y": "132.53",
                "label": "New Glasgow",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "137.14",
                "y": "179.67",
                "label": "Kentville",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "66.42",
                "y": "217.17",
                "label": "Annapolis Royal"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "45",
                "y": "220.39",
                "label": "Digby",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "25.71",
                "y": "296.46",
                "label": "Yarmouth"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "72.85",
                "y": "299.67",
                "label": "Shelburne",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "107.14",
                "y": "286.82",
                "label": "Liverpool",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "130.71",
                "y": "249.32",
                "label": "Bridgewater",
                "labelpos": "right"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "425.35",
                "y": "81.1",
                "label": "Glace Bay"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "393.21",
                "y": "83.24",
                "label": "Sydney",
                "labelpos": "left"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "427.5",
                "y": "106.82",
                "label": "Louisbourg",
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
            "id": "CA.NS.CB"
        },
        {
            "id": "CA.NS.ET"
        },
        {
            "id": "CA.NS.GT"
        },
        {
            "id": "CA.NS.HD"
        },
        {
            "id": "CA.NS.LR"
        },
        {
            "id": "CA.NS.MD"
        },
        {
            "id": "CA.NS.ST"
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
                "id": "HA",
                "x": "191.78",
                "y": "225.74",
                "label": "Halifax",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "202.5",
                "y": "216.1",
                "label": "Dartmouth",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "215.35",
                "y": "158.24",
                "label": "Truro"
            },
            {
                "id": "03",
                "x": "172.5",
                "y": "149.67",
                "label": "Parrsboro",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "158.57",
                "y": "111.1",
                "label": "Amherst"
            },
            {
                "id": "05",
                "x": "251.78",
                "y": "123.96",
                "label": "Pictou"
            },
            {
                "id": "06",
                "x": "261.42",
                "y": "132.53",
                "label": "New Glasgow",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "137.14",
                "y": "179.67",
                "label": "Kentville",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "66.42",
                "y": "217.17",
                "label": "Annapolis Royal"
            },
            {
                "id": "09",
                "x": "45",
                "y": "220.39",
                "label": "Digby",
                "labelpos": "bottom"
            },
            {
                "id": "10",
                "x": "25.71",
                "y": "296.46",
                "label": "Yarmouth"
            },
            {
                "id": "12",
                "x": "72.85",
                "y": "299.67",
                "label": "Shelburne",
                "labelpos": "bottom"
            },
            {
                "id": "11",
                "x": "107.14",
                "y": "286.82",
                "label": "Liverpool",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "130.71",
                "y": "249.32",
                "label": "Bridgewater",
                "labelpos": "right"
            },
            {
                "id": "14",
                "x": "425.35",
                "y": "81.1",
                "label": "Glace Bay"
            },
            {
                "id": "15",
                "x": "393.21",
                "y": "83.24",
                "label": "Sydney",
                "labelpos": "left"
            },
            {
                "id": "16",
                "x": "427.5",
                "y": "106.82",
                "label": "Louisbourg",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "HA",
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
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
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
            },
            {
                "id": "16",
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
		<entity id='CA.NS.CB'  />
		<entity id='CA.NS.ET'  />
		<entity id='CA.NS.GT'  />
		<entity id='CA.NS.HD'  />
		<entity id='CA.NS.LR'  />
		<entity id='CA.NS.MD'  />
		<entity id='CA.NS.ST'  />
	</data>
	<markers>
	<shapes>
	       <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		   <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
	   </shapes>
		<definition>
			<marker id='HA' x='191.78' y='225.74' label='Halifax' labelPos='left'  />
			<marker id='01' x='202.5' y='216.1' label='Dartmouth' labelPos='right'  />
			<marker id='02' x='215.35' y='158.24' label='Truro'  />
			<marker id='03' x='172.5' y='149.67' label='Parrsboro' labelPos='left'  />
			<marker id='04' x='158.57' y='111.1' label='Amherst'  />
			<marker id='05' x='251.78' y='123.96' label='Pictou'  />
			<marker id='06' x='261.42' y='132.53' label='New Glasgow' labelPos='right'  />
			<marker id='07' x='137.14' y='179.67' label='Kentville' labelPos='left'  />
			<marker id='08' x='66.42' y='217.17' label='Annapolis Royal'  />
			<marker id='09' x='45' y='220.39' label='Digby' labelPos='bottom'  />
			<marker id='10' x='25.71' y='296.46' label='Yarmouth'  />
			<marker id='12' x='72.85' y='299.67' label='Shelburne' labelPos='bottom'  />
			<marker id='11' x='107.14' y='286.82' label='Liverpool' labelPos='right'  />
			<marker id='13' x='130.71' y='249.32' label='Bridgewater' labelPos='right'  />
			<marker id='14' x='425.35' y='81.1' label='Glace Bay'  />
			<marker id='15' x='393.21' y='83.24' label='Sydney' labelPos='left'  />
			<marker id='16' x='427.5' y='106.82' label='Louisbourg' labelPos='left'  />
		</definition>
		<application>
			<marker id='HA' shapeId='myCustomShape'  />
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
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='11' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
			<marker id='14' shapeId='newCustomShape'  />
			<marker id='15' shapeId='newCustomShape'  />
			<marker id='16' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
