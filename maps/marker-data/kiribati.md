---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Kiribati

#### JavaScript Alias: maps/kiribati


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
{% highlight javascript lineanchors %}{% raw %}
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
            "id": "KI.GI"
        },
        {
            "id": "KI.LI"
        },
        {
            "id": "KI.PI"
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
                "id": "TA",
                "shapeid": "myCustomShape",
                "x": "26.66",
                "y": "49.06",
                "label": "Tarawa"
            }
        ]
    }
}
{% endraw %}{% endhighlight %}


<p class='text-success'>{{ page.newJson }}</p>

    </div>
    <div class='tab old-json-tab'>
{% highlight javascript lineanchors %}{% raw %}
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
            "id": "KI.GI"
        },
        {
            "id": "KI.LI"
        },
        {
            "id": "KI.PI"
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
                "id": "TA",
                "x": "26.66",
                "y": "49.06",
                "label": "Tarawa"
            }
        ],
        "application": [
            {
                "id": "TA",
                "shapeid": "myCustomShape"
            }
        ]
    }
}
{% endraw %}{% endhighlight %}


<p class='text-success'>{{ page.oldJson }}</p>

    </div>
    <div class='tab old-xml-tab'>
{% highlight html lineanchors %}{% raw %}
<map animation='0' showShadow='0' showLabels='0' showMarkerLabels='1' fillColor='F1f1f1' borderColor='999999' baseFont='Verdana' baseFontSize='10' legendPosition='bottom' useHoverColor='1' showMarkerToolTip='1'  >
	<data>
		<entity id='KI.GI'  />
		<entity id='KI.LI'  />
		<entity id='KI.PI'  />
	</data>
	<markers>
	    <shapes>
		     <shape id='myCustomShape' type='circle' fillColor='FFFFFF,333333'  fillPattern='radial' showborder='0' radius='4'/>
			 <shape id='newCustomShape' type='circle' fillColor='FFFFFF,000099'  fillPattern='radial' showborder='0' radius='3'/>
		</shapes>
		<definition>
			<marker id='TA' x='26.66' y='49.06' label='Tarawa'  />
		</definition>
		<application>
			<marker id='TA' shapeId='myCustomShape'  />
		</application>
	</markers>
</map>
{% endraw %}{% endhighlight %}

<p class='text-success'>{{ page.oldXml }}</p>

</div>
</div>
