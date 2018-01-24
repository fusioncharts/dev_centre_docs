---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Lesotho

#### JavaScript Alias: maps/lesotho


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
            "id": "LS.BE"
        },
        {
            "id": "LS.BB"
        },
        {
            "id": "LS.LE"
        },
        {
            "id": "LS.MF"
        },
        {
            "id": "LS.MS"
        },
        {
            "id": "LS.MH"
        },
        {
            "id": "LS.MK"
        },
        {
            "id": "LS.QN"
        },
        {
            "id": "LS.QT"
        },
        {
            "id": "LS.TT"
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
                "id": "MA",
                "shapeid": "myCustomShape",
                "x": "119.5",
                "y": "215.05",
                "label": "Maseru",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "266.27",
                "y": "89.69",
                "label": "Leribe",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "169.44",
                "y": "160.01",
                "label": "Teyateyaneng",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "52.23",
                "y": "289.46",
                "label": "Mafeteng",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "121.54",
                "y": "390.36",
                "label": "Mohales Hoek",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "188.81",
                "y": "465.78",
                "label": "Quthing",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "435.46",
                "y": "368.96",
                "label": "Qacha's Nek",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "432.4",
                "y": "260.92",
                "label": "Thaba-Tseka",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "562.87",
                "y": "178.36",
                "label": "Mokhotlong",
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
            "id": "LS.BE"
        },
        {
            "id": "LS.BB"
        },
        {
            "id": "LS.LE"
        },
        {
            "id": "LS.MF"
        },
        {
            "id": "LS.MS"
        },
        {
            "id": "LS.MH"
        },
        {
            "id": "LS.MK"
        },
        {
            "id": "LS.QN"
        },
        {
            "id": "LS.QT"
        },
        {
            "id": "LS.TT"
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
                "id": "MA",
                "x": "119.5",
                "y": "215.05",
                "label": "Maseru",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "266.27",
                "y": "89.69",
                "label": "Leribe",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "169.44",
                "y": "160.01",
                "label": "Teyateyaneng",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "52.23",
                "y": "289.46",
                "label": "Mafeteng",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "121.54",
                "y": "390.36",
                "label": "Mohales Hoek",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "188.81",
                "y": "465.78",
                "label": "Quthing",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "435.46",
                "y": "368.96",
                "label": "Qacha's Nek",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "432.4",
                "y": "260.92",
                "label": "Thaba-Tseka",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "562.87",
                "y": "178.36",
                "label": "Mokhotlong",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "MA",
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
		<entity id='LS.BE'  />
		<entity id='LS.BB'  />
		<entity id='LS.LE'  />
		<entity id='LS.MF'  />
		<entity id='LS.MS'  />
		<entity id='LS.MH'  />
		<entity id='LS.MK'  />
		<entity id='LS.QN'  />
		<entity id='LS.QT'  />
		<entity id='LS.TT'  />
	</data>
	<markers>
	 <shapes>
	     <shape id='myCustomShape' type='circle' fillcolor='FFFFFF,333333' fillPattern='radial' showBorder='0' radius='4'/>
		 <shape id='newCustomShape' type='circle' fillcolor='FFFFFF,000099' fillPattern='radial' showBorder='0' radius='3'/>
		 </shapes>
		<definition>
			<marker id='MA' x='119.5' y='215.05' label='Maseru' labelPos='right'  />
			<marker id='01' x='266.27' y='89.69' label='Leribe' labelPos='right'  />
			<marker id='02' x='169.44' y='160.01' label='Teyateyaneng' labelPos='bottom'  />
			<marker id='03' x='52.23' y='289.46' label='Mafeteng' labelPos='right'  />
			<marker id='04' x='121.54' y='390.36' label='Mohales Hoek' labelPos='right'  />
			<marker id='05' x='188.81' y='465.78' label='Quthing' labelPos='right'  />
			<marker id='06' x='435.46' y='368.96' label='Qacha&apos;s Nek' labelPos='left'  />
			<marker id='07' x='432.4' y='260.92' label='Thaba-Tseka' labelPos='left'  />
			<marker id='08' x='562.87' y='178.36' label='Mokhotlong' labelPos='left'  />
		</definition>
		<application>
			<marker id='MA' shapeId='myCustomShape'  />
			<marker id='01' shapeId='newCustomShape'  />
			<marker id='02' shapeId='newCustomShape'  />
			<marker id='03' shapeId='newCustomShape'  />
			<marker id='04' shapeId='newCustomShape'  />
			<marker id='05' shapeId='newCustomShape'  />
			<marker id='06' shapeId='newCustomShape'  />
			<marker id='07' shapeId='newCustomShape'  />
			<marker id='08' shapeId='newCustomShape'  />
		</application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
