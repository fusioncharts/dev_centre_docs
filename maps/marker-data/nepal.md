---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Nepal

#### JavaScript Alias: maps/nepal


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
            "id": "NP.BA"
        },
        {
            "id": "NP.BH"
        },
        {
            "id": "NP.DH"
        },
        {
            "id": "NP.GA"
        },
        {
            "id": "NP.JA"
        },
        {
            "id": "NP.KA"
        },
        {
            "id": "NP.KO"
        },
        {
            "id": "NP.LU"
        },
        {
            "id": "NP.MA"
        },
        {
            "id": "NP.ME"
        },
        {
            "id": "NP.NA"
        },
        {
            "id": "NP.RA"
        },
        {
            "id": "NP.SA"
        },
        {
            "id": "NP.SE"
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
                "id": "KA",
                "shapeid": "myCustomShape",
                "x": "489.89",
                "y": "274.87",
                "label": "Kathmandu"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "501.17",
                "y": "281.02",
                "label": "Bhaktapur",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "488.87",
                "y": "286.15",
                "label": "Patan",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "402.71",
                "y": "262.56",
                "label": "Bharatpur"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "310.41",
                "y": "281.02",
                "label": "Bhairahawa",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "310.41",
                "y": "250.25",
                "label": "Butwal"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "144.25",
                "y": "225.64",
                "label": "Nepalganj",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "35.53",
                "y": "155.89",
                "label": "Mahendranagar",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "67.33",
                "y": "180.51",
                "label": "Dhangarhi",
                "labelpos": "right"
            },
            {
                "id": "011",
                "shapeid": "newCustomShape",
                "x": "349.38",
                "y": "187.69",
                "label": "Pokhara"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "430.41",
                "y": "321.02",
                "label": "Birganj",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "526.82",
                "y": "348.71",
                "label": "Janakpur"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "647.84",
                "y": "327.17",
                "label": "Dharan Bazar",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "642.71",
                "y": "368.2",
                "label": "Biratnagar",
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
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "NP.BA"
        },
        {
            "id": "NP.BH"
        },
        {
            "id": "NP.DH"
        },
        {
            "id": "NP.GA"
        },
        {
            "id": "NP.JA"
        },
        {
            "id": "NP.KA"
        },
        {
            "id": "NP.KO"
        },
        {
            "id": "NP.LU"
        },
        {
            "id": "NP.MA"
        },
        {
            "id": "NP.ME"
        },
        {
            "id": "NP.NA"
        },
        {
            "id": "NP.RA"
        },
        {
            "id": "NP.SA"
        },
        {
            "id": "NP.SE"
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
                "id": "KA",
                "x": "489.89",
                "y": "274.87",
                "label": "Kathmandu"
            },
            {
                "id": "01",
                "x": "501.17",
                "y": "281.02",
                "label": "Bhaktapur",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "488.87",
                "y": "286.15",
                "label": "Patan",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "402.71",
                "y": "262.56",
                "label": "Bharatpur"
            },
            {
                "id": "05",
                "x": "310.41",
                "y": "281.02",
                "label": "Bhairahawa",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "310.41",
                "y": "250.25",
                "label": "Butwal"
            },
            {
                "id": "04",
                "x": "144.25",
                "y": "225.64",
                "label": "Nepalganj",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "35.53",
                "y": "155.89",
                "label": "Mahendranagar",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "67.33",
                "y": "180.51",
                "label": "Dhangarhi",
                "labelpos": "right"
            },
            {
                "id": "011",
                "x": "349.38",
                "y": "187.69",
                "label": "Pokhara"
            },
            {
                "id": "09",
                "x": "430.41",
                "y": "321.02",
                "label": "Birganj",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "526.82",
                "y": "348.71",
                "label": "Janakpur"
            },
            {
                "id": "12",
                "x": "647.84",
                "y": "327.17",
                "label": "Dharan Bazar",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "642.71",
                "y": "368.2",
                "label": "Biratnagar",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "KA",
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
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
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
                "id": "011",
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
                "id": "13",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='FF5904' markerRadius='6' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='NP.BA'  />
		<entity id='NP.BH'  />
		<entity id='NP.DH'  />
		<entity id='NP.GA'  />
		<entity id='NP.JA'  />
		<entity id='NP.KA'  />
		<entity id='NP.KO'  />
		<entity id='NP.LU'  />
		<entity id='NP.MA'  />
		<entity id='NP.ME'  />
		<entity id='NP.NA'  />
		<entity id='NP.RA'  />
		<entity id='NP.SA'  />
		<entity id='NP.SE'  />
	</data>
	<markers>
	    <shapes>
	 	     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='KA' x='489.89' y='274.87' label='Kathmandu'  />
			<marker id='01' x='501.17' y='281.02' label='Bhaktapur' labelPos='right'  />
			<marker id='02' x='488.87' y='286.15' label='Patan' labelPos='left'  />
			<marker id='03' x='402.71' y='262.56' label='Bharatpur'  />
			<marker id='05' x='310.41' y='281.02' label='Bhairahawa' labelPos='left'  />
			<marker id='06' x='310.41' y='250.25' label='Butwal'  />
			<marker id='04' x='144.25' y='225.64' label='Nepalganj' labelPos='left'  />
			<marker id='07' x='35.53' y='155.89' label='Mahendranagar' labelPos='right'  />
			<marker id='08' x='67.33' y='180.51' label='Dhangarhi' labelPos='right'  />
			<marker id='011' x='349.38' y='187.69' label='Pokhara'  />
			<marker id='09' x='430.41' y='321.02' label='Birganj' labelPos='left'  />
			<marker id='10' x='526.82' y='348.71' label='Janakpur'  />
			<marker id='12' x='647.84' y='327.17' label='Dharan Bazar' labelPos='left'  />
			<marker id='13' x='642.71' y='368.2' label='Biratnagar' labelPos='right'  />
		</definition>
		<application>
			<marker id='KA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
			<marker id='011' shapeId='newCustomShape'  />
			<marker id='09' shapeId='newCustomShape'  />
			<marker id='10' shapeId='newCustomShape'  />
			<marker id='12' shapeId='newCustomShape'  />
			<marker id='13' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
