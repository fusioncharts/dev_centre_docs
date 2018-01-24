---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: CaymanIslands

#### JavaScript Alias: maps/caymanislands


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
            "id": "KY.BT"
        },
        {
            "id": "KY.CB"
        },
        {
            "id": "KY.EE"
        },
        {
            "id": "KY.GT"
        },
        {
            "id": "KY.SO"
        },
        {
            "id": "KY.NS"
        },
        {
            "id": "KY.WB"
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
                "id": "GE",
                "shapeid": "myCustomShape",
                "x": "134.76",
                "y": "418.51",
                "label": "George Town",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "142.94",
                "y": "323.34",
                "label": "Rum Point"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "883.78",
                "y": "22.51",
                "label": "The Bluff",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "600.34",
                "y": "72.65",
                "label": "Jackson Point"
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
            "id": "KY.BT"
        },
        {
            "id": "KY.CB"
        },
        {
            "id": "KY.EE"
        },
        {
            "id": "KY.GT"
        },
        {
            "id": "KY.SO"
        },
        {
            "id": "KY.NS"
        },
        {
            "id": "KY.WB"
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
                "id": "GE",
                "x": "134.76",
                "y": "418.51",
                "label": "George Town",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "142.94",
                "y": "323.34",
                "label": "Rum Point"
            },
            {
                "id": "02",
                "x": "883.78",
                "y": "22.51",
                "label": "The Bluff",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "600.34",
                "y": "72.65",
                "label": "Jackson Point"
            }
        ],
        "application": [
            {
                "id": "GE",
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
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

    </div>
    <div class='tab old-xml-tab'>
<pre><code class="language-html">
<map animation="0" showshadow="0" showlabels="0" showmarkerlabels="1" fillcolor="F1f1f1" bordercolor="CCCCCC" basefont="Verdana" basefontsize="10" markerbordercolor="000000" markerbgcolor="FF5904" markerradius="6" legendposition="bottom" usehovercolor="0" showtooltip="0" showmarkertooltip="1" canvasbordercolor="375277" canvasborderalpha="40" >
  <data>
    <entity id="KY.BT" />
    <entity id="KY.CB" />
    <entity id="KY.EE" />
    <entity id="KY.GT" />
    <entity id="KY.SO" />
    <entity id="KY.NS" />
    <entity id="KY.WB" />
  </data>
  <markers>
    <shapes>
      <shape id="myCustomShape" type="circle" fillcolor="FFFFFF,333333" fillpattern="radial" showborder="0" radius="4" />
      <shape id="newCustomShape" type="circle" fillcolor="FFFFFF,000099" fillpattern="radial" showborder="0" radius="3" />
    </shapes>
    <definition>
      <marker id="01" x="142.94" y="323.34" label="Rum Point" />
      <marker id="02" x="883.78" y="22.51" label="The Bluff" labelpos="left" />
      <marker id="03" x="600.34" y="72.65" label="Jackson Point" />
      <marker id="GE" x="35.5" y="398.04" label="George Town" labelpos="right" />
      <marker id="04" x="160.34" y="412.37" label="Bodden Town" labelpos="right" />
      <marker id="05" x="12.99" y="312.09" label="Hell" />
      <marker id="06" x="206.39" y="342.79" label="North Side" />
      <marker id="07" x="236.06" y="361.2" label="Queen Elizabeth II Botanic Park" labelpos="right" />
      <marker id="08" x="292.34" y="392.93" label="East End" labelpos="right" />
      <marker id="09" x="23.22" y="318.23" label="West Bay" labelpos="right" />
      <marker id="10" x="36.53" y="331.53" label="Seven Mile Beach" labelpos="right" />
      <marker id="11" x="588.06" y="96.18" label="South Town" labelpos="left" />
      <marker id="12" x="775.32" y="73.67" label="West End" />
    </definition>
    <application>
      <marker id="01" shapeid="newCustomShape" />
      <marker id="02" shapeid="newCustomShape" />
      <marker id="03" shapeid="newCustomShape" />
      <marker id="GE" shapeid="myCustomShape" />
      <marker id="04" shapeid="newCustomShape" />
      <marker id="05" shapeid="newCustomShape" />
      <marker id="06" shapeid="newCustomShape" />
      <marker id="07" shapeid="newCustomShape" />
      <marker id="08" shapeid="newCustomShape" />
      <marker id="09" shapeid="newCustomShape" />
      <marker id="10" shapeid="newCustomShape" />
      <marker id="11" shapeid="newCustomShape" />
      <marker id="12" shapeid="newCustomShape" />
    </application>
  </markers>
</map>
</code></pre>

<p class='text-success'>Old XML format for map marker data, using separate application and definition blocks.</p>

</div>
</div>
</div>
