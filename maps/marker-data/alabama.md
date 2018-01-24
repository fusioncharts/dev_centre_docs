---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Alabama

#### JavaScript Alias: maps/alabama

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
                            "id": "MT",
                            "shapeid": "myCustomShape",
                            "x": "336.23",
                            "y": "480.55",
                            "label": "Montgomery ",
                            "labelpos": "top"
                        },
                        {
                            "id": "GD",
                            "shapeid": "newCustomShape",
                            "x": "344.33",
                            "y": "134.55",
                            "label": "Gadsden"
                        },
                        {
                            "id": "AN",
                            "shapeid": "newCustomShape",
                            "x": "395.92",
                            "y": "174.01",
                            "label": "Anniston"
                        },
                        {
                            "id": "TG",
                            "shapeid": "newCustomShape",
                            "x": "437.4",
                            "y": "462.34",
                            "label": "Tuskogee"
                        },
                        {
                            "id": "SE",
                            "shapeid": "newCustomShape",
                            "x": "244.17",
                            "y": "473.47",
                            "label": "Selma"
                        },
                        {
                            "id": "DO",
                            "shapeid": "newCustomShape",
                            "x": "475.85",
                            "y": "690.98",
                            "label": "Dothan"
                        },
                        {
                            "id": "MI",
                            "shapeid": "newCustomShape",
                            "x": "52.96",
                            "y": "790.13",
                            "label": "Mobile"
                        },
                        {
                            "id": "TA",
                            "shapeid": "newCustomShape",
                            "x": "331.17",
                            "y": "211.44",
                            "label": "Talladega"
                        },
                        {
                            "id": "BI",
                            "shapeid": "newCustomShape",
                            "x": "233.04",
                            "y": "199.3",
                            "label": "Birmingham"
                        },
                        {
                            "id": "DE",
                            "shapeid": "newCustomShape",
                            "x": "242.18",
                            "y": "83.97",
                            "label": "Decatur"
                        },
                        {
                            "id": "HU",
                            "shapeid": "newCustomShape",
                            "x": "299.89",
                            "y": "45.23",
                            "label": "Huntsville"
                        },
                        {
                            "id": "AU",
                            "shapeid": "newCustomShape",
                            "x": "484.95",
                            "y": "422.88",
                            "label": "Auburn"
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
                            "id": "MT",
                            "x": "336.23",
                            "y": "480.55",
                            "label": "Montgomery ",
                            "labelpos": "top"
                        },
                        {
                            "id": "GD",
                            "x": "344.33",
                            "y": "134.55",
                            "label": "Gadsden"
                        },
                        {
                            "id": "AN",
                            "x": "395.92",
                            "y": "174.01",
                            "label": "Anniston"
                        },
                        {
                            "id": "SE",
                            "x": "244.17",
                            "y": "473.47",
                            "label": "Selma"
                        },
                        {
                            "id": "DO",
                            "x": "475.85",
                            "y": "690.98",
                            "label": "Dothan"
                        },
                        {
                            "id": "MI",
                            "x": "52.96",
                            "y": "790.13",
                            "label": "Mobile"
                        },
                        {
                            "id": "TA",
                            "x": "331.17",
                            "y": "211.44",
                            "label": "Talladega"
                        },
                        {
                            "id": "BI",
                            "x": "233.04",
                            "y": "199.3",
                            "label": "Birmingham"
                        },
                        {
                            "id": "DE",
                            "x": "242.18",
                            "y": "83.97",
                            "label": "Decatur"
                        },
                        {
                            "id": "HU",
                            "x": "299.89",
                            "y": "45.23",
                            "label": "Huntsville"
                        },
                        {
                            "id": "TG",
                            "x": "437.4",
                            "y": "462.34",
                            "label": "Tuskogee"
                        },
                        {
                            "id": "AU",
                            "x": "484.95",
                            "y": "422.88",
                            "label": "Auburn"
                        }
                    ],
                    "application": [
                        {
                            "id": "MT",
                            "shapeid": "myCustomShape"
                        },
                        {
                            "id": "GD",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "AN",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "TG",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "SE",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "DO",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "MI",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "TA",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "BI",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "DE",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "HU",
                            "shapeid": "newCustomShape"
                        },
                        {
                            "id": "AU",
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
                        <marker id='MT' x='336.23' y='480.55' label='Montgomery ' labelPos='top' />
                        <marker id='GD' x='344.33' y='134.55' label='Gadsden'/>
                        <marker id='AN' x='395.92' y='174.01' label='Anniston' />
                        <marker id='SE' x='244.17' y='473.47' label='Selma'  />
                        <marker id='DO' x='475.85' y='690.98' label='Dothan'/>
                        <marker id='MI' x='52.96' y='790.13' label='Mobile' />
                        <marker id='TA' x='331.17' y='211.44' label='Talladega' />
                        <marker id='BI' x='233.04' y='199.3' label='Birmingham' />
                        <marker id='DE' x='242.18' y='83.97' label='Decatur' />
                        <marker id='HU' x='299.89' y='45.23' label='Huntsville' />
                        <marker id='TG' x='437.4' y='462.34' label='Tuskogee'  />
                        <marker id='AU' x='484.95' y='422.88' label='Auburn'  />




                    </definition>


                    <application>
                        <marker id='MT' shapeId='myCustomShape'  />
                        <marker id='GD' shapeId='newCustomShape'  />
                        <marker id='AN' shapeId='newCustomShape'  />
                        <marker id='TG' shapeId='newCustomShape'  />
                        <marker id='SE' shapeId='newCustomShape'  />
                        <marker id='DO' shapeId='newCustomShape'  />
                        <marker id='MI' shapeId='newCustomShape'  />
                        <marker id='TA' shapeId='newCustomShape'  />
                        <marker id='BI' shapeId='newCustomShape'  />
                        <marker id='DE' shapeId='newCustomShape'  />
                        <marker id='HU' shapeId='newCustomShape'  />
                        <marker id='AU' shapeId='newCustomShape'  />


                    </application>
                </markers>
            </map>
        </code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

    </div>
</div>
</div>
