---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NewCaledonia

#### JavaScript Alias: maps/newcaledonia


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
            "id": "NC.NO.BE"
        },
        {
            "id": "NC.SU.BP"
        },
        {
            "id": "NC.SU.BR"
        },
        {
            "id": "NC.NO.CA"
        },
        {
            "id": "NC.SU.DU"
        },
        {
            "id": "NC.SU.FA"
        },
        {
            "id": "NC.NO.HI"
        },
        {
            "id": "NC.NO.HO"
        },
        {
            "id": "NC.SU.IP"
        },
        {
            "id": "NC.NO.KG"
        },
        {
            "id": "NC.NO.KN"
        },
        {
            "id": "NC.NO.KA"
        },
        {
            "id": "NC.NO.KM"
        },
        {
            "id": "NC.SU.LF"
        },
        {
            "id": "NC.IL.LI"
        },
        {
            "id": "NC.IL.MA"
        },
        {
            "id": "NC.SU.MO"
        },
        {
            "id": "NC.SU.MD"
        },
        {
            "id": "NC.SU.NO"
        },
        {
            "id": "NC.NO.OG"
        },
        {
            "id": "NC.IL.OV"
        },
        {
            "id": "NC.SU.PA"
        },
        {
            "id": "NC.NO.PD"
        },
        {
            "id": "NC.NO.PH"
        },
        {
            "id": "NC.NO.PB"
        },
        {
            "id": "NC.NO.PM"
        },
        {
            "id": "NC.NO.PT"
        },
        {
            "id": "NC.NO.PY"
        },
        {
            "id": "NC.SU.SA"
        },
        {
            "id": "NC.SU.TH"
        },
        {
            "id": "NC.NO.TO"
        },
        {
            "id": "NC.NO.VO"
        },
        {
            "id": "NC.SU.YA"
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
                "id": "NO",
                "shapeid": "myCustomShape",
                "x": "357.97",
                "y": "356.28",
                "label": "Noumea",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "189.04",
                "y": "228.3",
                "label": "Mueo",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "220.78",
                "y": "174.04",
                "label": "Poindimie",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "353.87",
                "y": "286.66",
                "label": "Thio",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "423.49",
                "y": "158.69",
                "label": "We",
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
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "NC.NO.BE"
        },
        {
            "id": "NC.SU.BP"
        },
        {
            "id": "NC.SU.BR"
        },
        {
            "id": "NC.NO.CA"
        },
        {
            "id": "NC.SU.DU"
        },
        {
            "id": "NC.SU.FA"
        },
        {
            "id": "NC.NO.HI"
        },
        {
            "id": "NC.NO.HO"
        },
        {
            "id": "NC.SU.IP"
        },
        {
            "id": "NC.NO.KG"
        },
        {
            "id": "NC.NO.KN"
        },
        {
            "id": "NC.NO.KA"
        },
        {
            "id": "NC.NO.KM"
        },
        {
            "id": "NC.SU.LF"
        },
        {
            "id": "NC.IL.LI"
        },
        {
            "id": "NC.IL.MA"
        },
        {
            "id": "NC.SU.MO"
        },
        {
            "id": "NC.SU.MD"
        },
        {
            "id": "NC.SU.NO"
        },
        {
            "id": "NC.NO.OG"
        },
        {
            "id": "NC.IL.OV"
        },
        {
            "id": "NC.SU.PA"
        },
        {
            "id": "NC.NO.PD"
        },
        {
            "id": "NC.NO.PH"
        },
        {
            "id": "NC.NO.PB"
        },
        {
            "id": "NC.NO.PM"
        },
        {
            "id": "NC.NO.PT"
        },
        {
            "id": "NC.NO.PY"
        },
        {
            "id": "NC.SU.SA"
        },
        {
            "id": "NC.SU.TH"
        },
        {
            "id": "NC.NO.TO"
        },
        {
            "id": "NC.NO.VO"
        },
        {
            "id": "NC.SU.YA"
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
                "id": "NO",
                "x": "357.97",
                "y": "356.28",
                "label": "Noumea",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "189.04",
                "y": "228.3",
                "label": "Mueo",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "220.78",
                "y": "174.04",
                "label": "Poindimie",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "353.87",
                "y": "286.66",
                "label": "Thio",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "423.49",
                "y": "158.69",
                "label": "We",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "NO",
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
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='NC.NO.BE'  />
		<entity id='NC.SU.BP'  />
		<entity id='NC.SU.BR'  />
		<entity id='NC.NO.CA'  />
		<entity id='NC.SU.DU'  />
		<entity id='NC.SU.FA'  />
		<entity id='NC.NO.HI'  />
		<entity id='NC.NO.HO'  />
		<entity id='NC.SU.IP'  />
		<entity id='NC.NO.KG'  />
		<entity id='NC.NO.KN'  />
		<entity id='NC.NO.KA'  />
		<entity id='NC.NO.KM'  />
		<entity id='NC.SU.LF'  />
		<entity id='NC.IL.LI'  />
		<entity id='NC.IL.MA'  />
		<entity id='NC.SU.MO'  />
		<entity id='NC.SU.MD'  />
		<entity id='NC.SU.NO'  />
		<entity id='NC.NO.OG'  />
		<entity id='NC.IL.OV'  />
		<entity id='NC.SU.PA'  />
		<entity id='NC.NO.PD'  />
		<entity id='NC.NO.PH'  />
		<entity id='NC.NO.PB'  />
		<entity id='NC.NO.PM'  />
		<entity id='NC.NO.PT'  />
		<entity id='NC.NO.PY'  />
		<entity id='NC.SU.SA'  />
		<entity id='NC.SU.TH'  />
		<entity id='NC.NO.TO'  />
		<entity id='NC.NO.VO'  />
		<entity id='NC.SU.YA'  />
	</data>
	<markers>
	   <shapes>
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='NO' x='357.97' y='356.28' label='Noumea' labelPos='left'  />
			<marker id='01' x='189.04' y='228.3' label='Mueo' labelPos='left'  />
			<marker id='02' x='220.78' y='174.04' label='Poindimie' labelPos='right'  />
			<marker id='03' x='353.87' y='286.66' label='Thio' labelPos='right'  />
			<marker id='06' x='423.49' y='158.69' label='We' labelPos='right'  />
		</definition>
		<application>
			<marker id='NO' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
