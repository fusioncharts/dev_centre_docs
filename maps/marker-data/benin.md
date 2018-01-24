---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Benin

#### JavaScript Alias: maps/benin


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
            "id": "BJ.AL"
        },
        {
            "id": "BJ.AK"
        },
        {
            "id": "BJ.AQ"
        },
        {
            "id": "BJ.BO"
        },
        {
            "id": "BJ.CL"
        },
        {
            "id": "BJ.CF"
        },
        {
            "id": "BJ.DO"
        },
        {
            "id": "BJ.LI"
        },
        {
            "id": "BJ.MO"
        },
        {
            "id": "BJ.OU"
        },
        {
            "id": "BJ.PL"
        },
        {
            "id": "BJ.ZO"
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
                "id": "PN",
                "shapeid": "myCustomShape",
                "x": "96",
                "y": "237.06",
                "label": "Porto Novo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "68.26",
                "y": "258.39",
                "label": "Ouidah",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "119.46",
                "y": "32.26",
                "label": "Malanville",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "121.6",
                "y": "54.66",
                "label": "Kandi",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "37.33",
                "y": "96.26",
                "label": "Natitingou",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "46.93",
                "y": "138.93",
                "label": "Djougou",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "78.93",
                "y": "151.73",
                "label": "Parakou",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "82.13",
                "y": "204",
                "label": "Cove",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "61.86",
                "y": "196.53",
                "label": "Bohicon",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "56.53",
                "y": "226.4",
                "label": "Lokossa",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "56.53",
                "y": "208.26",
                "label": "Abomey",
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
            "id": "BJ.AL"
        },
        {
            "id": "BJ.AK"
        },
        {
            "id": "BJ.AQ"
        },
        {
            "id": "BJ.BO"
        },
        {
            "id": "BJ.CL"
        },
        {
            "id": "BJ.CF"
        },
        {
            "id": "BJ.DO"
        },
        {
            "id": "BJ.LI"
        },
        {
            "id": "BJ.MO"
        },
        {
            "id": "BJ.OU"
        },
        {
            "id": "BJ.PL"
        },
        {
            "id": "BJ.ZO"
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
                "id": "PN",
                "x": "96",
                "y": "237.06",
                "label": "Porto Novo",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "68.26",
                "y": "258.39",
                "label": "Ouidah",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "119.46",
                "y": "32.26",
                "label": "Malanville",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "121.6",
                "y": "54.66",
                "label": "Kandi",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "37.33",
                "y": "96.26",
                "label": "Natitingou",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "46.93",
                "y": "138.93",
                "label": "Djougou",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "78.93",
                "y": "151.73",
                "label": "Parakou",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "82.13",
                "y": "204",
                "label": "Cove",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "61.86",
                "y": "196.53",
                "label": "Bohicon",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "56.53",
                "y": "226.4",
                "label": "Lokossa",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "56.53",
                "y": "208.26",
                "label": "Abomey",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "PN",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' markerBorderColor='000000' markerBgColor='' markerRadius='' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='BJ.AL'  />
		<entity id='BJ.AK'  />
		<entity id='BJ.AQ'  />
		<entity id='BJ.BO'  />
		<entity id='BJ.CL'  />
		<entity id='BJ.CF'  />
		<entity id='BJ.DO'  />
		<entity id='BJ.LI'  />
		<entity id='BJ.MO'  />
		<entity id='BJ.OU'  />
		<entity id='BJ.PL'  />
		<entity id='BJ.ZO'  />
	</data>
	<markers>
	<shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='PN' x='96' y='237.06' label='Porto Novo' labelPos='right'  />
			<marker id='01' x='68.26' y='258.39' label='Ouidah' labelPos='left'  />
			<marker id='02' x='119.46' y='32.26' label='Malanville' labelPos='left'  />
			<marker id='03' x='121.6' y='54.66' label='Kandi' labelPos='left'  />
			<marker id='04' x='37.33' y='96.26' label='Natitingou' labelPos='right'  />
			<marker id='05' x='46.93' y='138.93' label='Djougou' labelPos='right'  />
			<marker id='06' x='78.93' y='151.73' label='Parakou' labelPos='right'  />
			<marker id='07' x='82.13' y='204' label='Cove' labelPos='right'  />
			<marker id='08' x='61.86' y='196.53' label='Bohicon' labelPos='left'  />
			<marker id='09' x='56.53' y='226.4' label='Lokossa' labelPos='left'  />
			<marker id='10' x='56.53' y='208.26' label='Abomey' labelPos='left'  />
		</definition>
		<application>
			<marker id='PN' shapeId='myCustomShape'  />
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
