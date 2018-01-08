---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Argentina

#### JavaScript Alias: maps/argentina


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
                "id": "BA",
                "shapeid": "myCustomShape",
                "x": "238",
                "y": "269.83",
                "label": "Buenos Aires",
                "labelpos": "top"
            },
            {
                "id": "SA",
                "shapeid": "newCustomShape",
                "x": "124.66",
                "y": "65.83",
                "label": "Salta"
            },
            {
                "id": "SM",
                "shapeid": "newCustomShape",
                "x": "134.96",
                "y": "90.56",
                "label": "San Miguel de Tucuman",
                "labelpos": "left"
            },
            {
                "id": "CO",
                "shapeid": "newCustomShape",
                "x": "241.09",
                "y": "121.47",
                "label": "Corrientes"
            },
            {
                "id": "PO",
                "shapeid": "newCustomShape",
                "x": "289.51",
                "y": "131.77",
                "label": "Posadas"
            },
            {
                "id": "CD",
                "shapeid": "newCustomShape",
                "x": "242.12",
                "y": "230.68",
                "label": "Concepcion del Uruguay",
                "labelpos": "top"
            },
            {
                "id": "SF",
                "shapeid": "newCustomShape",
                "x": "205.93",
                "y": "206.86",
                "label": "Santa Fe",
                "labelpos": "left"
            },
            {
                "id": "SN",
                "shapeid": "newCustomShape"
            },
            {
                "id": "RO",
                "shapeid": "newCustomShape",
                "x": "204",
                "y": "239.95",
                "label": "Rosario",
                "labelpos": "right"
            },
            {
                "id": "CR",
                "shapeid": "newCustomShape",
                "x": "152.48",
                "y": "184.32",
                "label": "Cordoba"
            },
            {
                "id": "SJ",
                "shapeid": "newCustomShape",
                "x": "70.06",
                "y": "187.41",
                "label": "San Juan"
            },
            {
                "id": "MZ",
                "shapeid": "newCustomShape",
                "x": "72.12",
                "y": "232.74",
                "label": "Mendoza",
                "labelpos": "bottom"
            },
            {
                "id": "LP",
                "shapeid": "newCustomShape",
                "x": "244.18",
                "y": "280.13",
                "label": "La Plata",
                "labelpos": "left"
            },
            {
                "id": "MD",
                "shapeid": "newCustomShape",
                "x": "251.39",
                "y": "329.59",
                "label": "Mar Del Plata"
            },
            {
                "id": "BB",
                "shapeid": "newCustomShape",
                "x": "168.96",
                "y": "350.2",
                "label": "Bahia Blanca"
            },
            {
                "id": "VD",
                "shapeid": "newCustomShape",
                "x": "161.75",
                "y": "391.41",
                "label": "Viedma"
            },
            {
                "id": "SC",
                "shapeid": "newCustomShape",
                "x": "27.81",
                "y": "412.01",
                "label": "San Carlos de Bariloche",
                "labelpos": "right"
            },
            {
                "id": "PC",
                "shapeid": "newCustomShape",
                "x": "124.66",
                "y": "420.26",
                "label": "Punte Colorado",
                "labelpos": "right"
            },
            {
                "id": "CV",
                "shapeid": "newCustomShape",
                "x": "86.54",
                "y": "493.41",
                "label": "Comodoro Rivadavia"
            },
            {
                "id": "RG",
                "shapeid": "newCustomShape",
                "x": "68",
                "y": "609.83",
                "label": "Rio Gallegos"
            },
            {
                "id": "US",
                "shapeid": "newCustomShape",
                "x": "77.27",
                "y": "671.65",
                "label": "Ushuaia"
            },
            {
                "id": "SL",
                "shapeid": "newCustomShape",
                "x": "200.9",
                "y": "225.16",
                "label": "San Lorenze",
                "labelpos": "left"
            },
            {
                "id": "ST",
                "shapeid": "newCustomShape",
                "x": "144.24",
                "y": "135.89",
                "label": "San Miguel de Tucuman"
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
                "id": "BA",
                "x": "238",
                "y": "269.83",
                "label": "Buenos Aires",
                "labelpos": "top"
            },
            {
                "id": "SA",
                "x": "124.66",
                "y": "65.83",
                "label": "Salta"
            },
            {
                "id": "SM",
                "x": "134.96",
                "y": "90.56",
                "label": "San Miguel de Tucuman",
                "labelpos": "left"
            },
            {
                "id": "CO",
                "x": "241.09",
                "y": "121.47",
                "label": "Corrientes"
            },
            {
                "id": "PO",
                "x": "289.51",
                "y": "131.77",
                "label": "Posadas"
            },
            {
                "id": "CD",
                "x": "242.12",
                "y": "230.68",
                "label": "Concepcion del Uruguay",
                "labelpos": "top"
            },
            {
                "id": "SF",
                "x": "205.93",
                "y": "206.86",
                "label": "Santa Fe",
                "labelpos": "left"
            },
            {
                "id": "SM",
                "x": "202.87",
                "y": "234.62",
                "label": "San Martin",
                "labelpos": "left"
            },
            {
                "id": "RO",
                "x": "204",
                "y": "239.95",
                "label": "Rosario",
                "labelpos": "right"
            },
            {
                "id": "CR",
                "x": "152.48",
                "y": "184.32",
                "label": "Cordoba"
            },
            {
                "id": "SJ",
                "x": "70.06",
                "y": "187.41",
                "label": "San Juan"
            },
            {
                "id": "MZ",
                "x": "72.12",
                "y": "232.74",
                "label": "Mendoza",
                "labelpos": "bottom"
            },
            {
                "id": "LP",
                "x": "244.18",
                "y": "280.13",
                "label": "La Plata",
                "labelpos": "left"
            },
            {
                "id": "MD",
                "x": "251.39",
                "y": "329.59",
                "label": "Mar Del Plata"
            },
            {
                "id": "BB",
                "x": "168.96",
                "y": "350.2",
                "label": "Bahia Blanca"
            },
            {
                "id": "VD",
                "x": "161.75",
                "y": "391.41",
                "label": "Viedma"
            },
            {
                "id": "SC",
                "x": "27.81",
                "y": "412.01",
                "label": "San Carlos de Bariloche",
                "labelpos": "right"
            },
            {
                "id": "PC",
                "x": "124.66",
                "y": "420.26",
                "label": "Punte Colorado",
                "labelpos": "right"
            },
            {
                "id": "CV",
                "x": "86.54",
                "y": "493.41",
                "label": "Comodoro Rivadavia"
            },
            {
                "id": "RG",
                "x": "68",
                "y": "609.83",
                "label": "Rio Gallegos"
            },
            {
                "id": "US",
                "x": "77.27",
                "y": "671.65",
                "label": "Ushuaia"
            },
            {
                "id": "SL",
                "x": "200.9",
                "y": "225.16",
                "label": "San Lorenze",
                "labelpos": "left"
            },
            {
                "id": "ST",
                "x": "144.24",
                "y": "135.89",
                "label": "San Miguel de Tucuman"
            }
        ],
        "application": [
            {
                "id": "BA",
                "shapeid": "myCustomShape"
            },
            {
                "id": "SA",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SM",
                "shapeid": "newCustomShape"
            },
            {
                "id": "CO",
                "shapeid": "newCustomShape"
            },
            {
                "id": "PO",
                "shapeid": "newCustomShape"
            },
            {
                "id": "CD",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SF",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SN",
                "shapeid": "newCustomShape"
            },
            {
                "id": "RO",
                "shapeid": "newCustomShape"
            },
            {
                "id": "CR",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SJ",
                "shapeid": "newCustomShape"
            },
            {
                "id": "MZ",
                "shapeid": "newCustomShape"
            },
            {
                "id": "LP",
                "shapeid": "newCustomShape"
            },
            {
                "id": "MD",
                "shapeid": "newCustomShape"
            },
            {
                "id": "BB",
                "shapeid": "newCustomShape"
            },
            {
                "id": "VD",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SC",
                "shapeid": "newCustomShape"
            },
            {
                "id": "PC",
                "shapeid": "newCustomShape"
            },
            {
                "id": "CV",
                "shapeid": "newCustomShape"
            },
            {
                "id": "RG",
                "shapeid": "newCustomShape"
            },
            {
                "id": "US",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SL",
                "shapeid": "newCustomShape"
            },
            {
                "id": "ST",
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
			<marker id='BA' x='238' y='269.83' label='Buenos Aires' labelPos='top'/>
			<marker id='SA' x='124.66' y='65.83' label='Salta'/>
			<marker id='SM' x='134.96' y='90.56' label='San Miguel de Tucuman' labelPos='left'/>
			<marker id='CO' x='241.09' y='121.47' label='Corrientes'/>
			<marker id='PO' x='289.51' y='131.77' label='Posadas'/>
			<marker id='CD' x='242.12' y='230.68' label='Concepcion del Uruguay' labelPos='top'/>
			<marker id='SF' x='205.93' y='206.86' label='Santa Fe' labelPos='left'/>
			<marker id='SM' x='202.87' y='234.62' label='San Martin' labelPos='left'/>
			<marker id='RO' x='204'    y='239.95' label='Rosario' labelPos='right'/>
			<marker id='CR' x='152.48' y='184.32' label='Cordoba'/>
			<marker id='SJ' x='70.06' y='187.41' label='San Juan'/>
			<marker id='MZ' x='72.12' y='232.74' label='Mendoza' labelPos='bottom'/>
			<marker id='LP' x='244.18' y='280.13' label='La Plata' labelPos='left'/>
			<marker id='MD' x='251.39' y='329.59' label='Mar Del Plata'/>
			<marker id='BB' x='168.96' y='350.2' label='Bahia Blanca'/>
			<marker id='VD' x='161.75' y='391.41' label='Viedma'/>
			<marker id='SC' x='27.81' y='412.01' label='San Carlos de Bariloche' labelPos='right'/>
			<marker id='PC' x='124.66' y='420.26' label='Punte Colorado' labelPos='right'/>
			<marker id='CV' x='86.54' y='493.41' label='Comodoro Rivadavia'/>
			<marker id='RG' x='68' y='609.83' label='Rio Gallegos'/>
			<marker id='US' x='77.27' y='671.65' label='Ushuaia'/>
			<marker id='SL' x='200.9' y='225.16' label='San Lorenze' labelPos='left'/>
			<marker id='ST' x='144.24' y='135.89' label='San Miguel de Tucuman'  />
		</definition>

		<application>
		   <marker id='BA' shapeId='myCustomShape'/>
		   <marker id='SA' shapeId='newCustomShape'  />
			<marker id='SM' shapeId='newCustomShape'  />
			<marker id='CO' shapeId='newCustomShape'  />
			<marker id='PO' shapeId='newCustomShape'  />
			<marker id='CD' shapeId='newCustomShape'  />
			<marker id='SF' shapeId='newCustomShape'  />
			<marker id='SN' shapeId='newCustomShape'  />
			<marker id='RO' shapeId='newCustomShape'  />
			<marker id='CR' shapeId='newCustomShape'  />
			<marker id='SJ' shapeId='newCustomShape'  />
			<marker id='MZ' shapeId='newCustomShape'  />
			<marker id='LP' shapeId='newCustomShape'  />
			<marker id='MD' shapeId='newCustomShape'  />
			<marker id='BB' shapeId='newCustomShape'  />
			<marker id='VD' shapeId='newCustomShape'  />
			<marker id='SC' shapeId='newCustomShape'  />
			<marker id='PC' shapeId='newCustomShape'  />
			<marker id='CV' shapeId='newCustomShape'  />
			<marker id='RG' shapeId='newCustomShape'  />
			<marker id='US' shapeId='newCustomShape'  />
			<marker id='SL' shapeId='newCustomShape'  />
			<marker id='ST' shapeId='newCustomShape'  />
         </application>
	</markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
