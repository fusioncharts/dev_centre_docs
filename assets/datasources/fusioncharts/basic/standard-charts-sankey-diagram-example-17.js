{
    type: "sankey",
    renderAt: "chart-container",
    id: "sankey-chart",
    width: "700",
    height: "700",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Interconnecting Flights across Countries, 2019",
            subcaption: "A Horizontal Sankey with options to configure the node attributes",
            theme: "fusion",
            orientation: "horizontal",
            linkAlpha: 30,
            linkHoverAlpha: 60,
            nodeLabelPosition: "start"
        },
        "nodes": [{
                "label": "Brazil",
                "nodeWidth": 10
            },
            {
                "label": "Canada",
                "nodeWidth": 10
            },
            {
                "label": "Mexico",
                "nodeWidth": 10
            },
            {
                "label": "USA",
                "nodeWidth": 10
            },
            {
                "label": "Portugal",
                "nodeWidth": 10
            },
            {
                "label": "France",
                "nodeWidth": 10
            },
            {
                "label": "Spain",
                "nodeWidth": 10
            },
            {
                "label": "England",
                "nodeWidth": 10
            },
            {
                "label": "South Africa",
                "nodeWidth": 10
            },
            {
                "label": "Angola",
                "nodeWidth": 10
            },
            {
                "label": "Senegal",
                "nodeWidth": 10
            },
            {
                "label": "Mali",
                "nodeWidth": 10
            },
            {
                "label": "Morocco",
                "nodeWidth": 10
            }
        ],
        "links": [{
                "from": "Brazil",
                "to": "Portugal",
                "value": 5
            },
            {
                "from": "Brazil",
                "to": "France",
                "value": 1
            },
            {
                "from": "Brazil",
                "to": "Spain",
                "value": 1
            },
            {
                "from": "Brazil",
                "to": "England",
                "value": 1
            },
            {
                "from": "Canada",
                "to": "Portugal",
                "value": 1
            },
            {
                "from": "Canada",
                "to": "France",
                "value": 5
            },
            {
                "from": "Canada",
                "to": "England",
                "value": 1
            },
            {
                "from": "Mexico",
                "to": "Portugal",
                "value": 1
            },
            {
                "from": "Mexico",
                "to": "France",
                "value": 1
            },
            {
                "from": "Mexico",
                "to": "Spain",
                "value": 5
            },
            {
                "from": "Mexico",
                "to": "England",
                "value": 1
            },
            {
                "from": "USA",
                "to": "Portugal",
                "value": 1
            },
            {
                "from": "USA",
                "to": "France",
                "value": 1
            },
            {
                "from": "USA",
                "to": "Spain",
                "value": 1
            },
            {
                "from": "USA",
                "to": "England",
                "value": 5
            },
            {
                "from": "Portugal",
                "to": "Angola",
                "value": 2
            },
            {
                "from": "Portugal",
                "to": "Senegal",
                "value": 1
            },
            {
                "from": "Portugal",
                "to": "Morocco",
                "value": 1
            },
            {
                "from": "Portugal",
                "to": "South Africa",
                "value": 3
            },
            {
                "from": "France",
                "to": "Angola",
                "value": 1
            },
            {
                "from": "France",
                "to": "Senegal",
                "value": 3
            },
            {
                "from": "France",
                "to": "Mali",
                "value": 3
            },
            {
                "from": "France",
                "to": "Morocco",
                "value": 3
            },
            {
                "from": "France",
                "to": "South Africa",
                "value": 1
            },
            {
                "from": "Spain",
                "to": "Senegal",
                "value": 1
            },
            {
                "from": "Spain",
                "to": "Morocco",
                "value": 3
            },
            {
                "from": "Spain",
                "to": "South Africa",
                "value": 1
            },
            {
                "from": "England",
                "to": "Angola",
                "value": 1
            },
            {
                "from": "England",
                "to": "Senegal",
                "value": 1
            },
            {
                "from": "England",
                "to": "Morocco",
                "value": 2
            },
            {
                "from": "England",
                "to": "South Africa",
                "value": 7
            },
            {
                "from": "South Africa",
                "to": "China",
                "value": 5
            },
            {
                "from": "South Africa",
                "to": "India",
                "value": 1
            },
            {
                "from": "South Africa",
                "to": "Japan",
                "value": 3
            },
            {
                "from": "Angola",
                "to": "China",
                "value": 5
            },
            {
                "from": "Angola",
                "to": "India",
                "value": 1
            },
            {
                "from": "Angola",
                "to": "Japan",
                "value": 3
            },
            {
                "from": "Senegal",
                "to": "China",
                "value": 5
            },
            {
                "from": "Senegal",
                "to": "India",
                "value": 1
            },
            {
                "from": "Senegal",
                "to": "Japan",
                "value": 3
            },
            {
                "from": "Mali",
                "to": "China",
                "value": 5
            },
            {
                "from": "Mali",
                "to": "India",
                "value": 1
            },
            {
                "from": "Mali",
                "to": "Japan",
                "value": 3
            },
            {
                "from": "Morocco",
                "to": "China",
                "value": 5
            },
            {
                "from": "Morocco",
                "to": "India",
                "value": 1
            },
            {
                "from": "Morocco",
                "to": "Japan",
                "value": 3
            }
        ]
    },

    sankeyChart.render();

    const elem = document.getElementById("nodeLabelFont");
    const elem1 = document.getElementById("nodeLabelFontColor");
    const elem2 = document.getElementById("nodeLabelAlpha");

    const elem3 = document.getElementById("nodeLabelBgColor");
    const elem4 = document.getElementById("nodeLabelBorderColor");
    const elem5 = document.getElementById("nodeLabelFontSize");

    const elem6 = document.getElementById("nodeLabelFontBold");
    const elem7 = document.getElementById("nodeLabelFontItalic");
    const elem8 = document.getElementById("nodeLabelBorderRadius");


    const elem9 = document.getElementById("nodeLabelBorderPadding");
    const elem10 = document.getElementById("nodeLabelBorderDashed");
    const elem11 = document.getElementById("nodeLabelBorderDashLen");

    const elem12 = document.getElementById("nodeLabelBorderDashGap");
    const elem13 = document.getElementById("inheritLabelColorFromNode");

    elem.addEventListener("click", function() {
        if (elem.checked === true) {
            FusionCharts.items['sankey-chart'].setChartAttribute("nodeLabelFont", "Arial");
        }
    });

    elem1.addEventListener("click", function() {
        if (elem1.checked === true) {
            FusionCharts.items['sankey-chart'].setChartAttribute("nodeLabelFontColor", "blue");
        }
    });

    elem2.addEventListener("click", function() {
        if (elem2.checked === true) {
            FusionCharts.items['sankey-chart'].setChartAttribute("nodeLabelAlpha", "90");
        }
    });
}