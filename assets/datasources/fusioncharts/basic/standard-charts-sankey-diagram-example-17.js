{
    type: "sankey",
    renderAt: "sankey-container",
    id: "sankey-chart",
    width: "700",
    height: "500",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Interconnecting Flights across Countries, 2019",
            subcaption: "A Horizontal Sankey with options to configure the node attributes",
            linkAlpha: 30,
            linkHoverAlpha: 60,
            nodeLabelPosition: "start",
            bgColor: "ffffff",
            showborder: "0",
            legendPosition:  "bottom",
            legendBorderColor: "ffffff",
        },
        nodes: [{
                label: "Brazil",
                nodeWidth: 10
            },
            {
                label: "Canada",
                nodeWidth: 10
            },
            {
                label: "Mexico",
                nodeWidth: 10
            },
            {
                label: "USA",
                nodeWidth: 10
            },
            {
                label: "Portugal",
                nodeWidth: 10
            },
            {
                label: "France",
                nodeWidth: 10
            },
            {
                label: "Spain",
                nodeWidth: 10
            },
            {
                label: "England",
                nodeWidth: 10
            },
            {
                label: "South Africa",
                nodeWidth: 10
            },
            {
                label: "Angola",
                nodeWidth: 10
            },
            {
                label: "Senegal",
                nodeWidth: 10
            },
            {
                label: "Mali",
                nodeWidth: 10
            },
            {
                label: "Morocco",
                nodeWidth: 10
            }
        ],
        links: [{
                from: "Brazil",
                to: "Portugal",
                value: 5
            },
            {
                from: "Brazil",
                to: "France",
                value: 1
            },
            {
                from: "Brazil",
                to: "Spain",
                value: 1
            },
            {
                from: "Brazil",
                to: "England",
                value: 1
            },
            {
                from: "Canada",
                to: "Portugal",
                value: 1
            },
            {
                from: "Canada",
                to: "France",
                value: 5
            },
            {
                from: "Canada",
                to: "England",
                value: 1
            },
            {
                from: "Mexico",
                to: "Portugal",
                value: 1
            },
            {
                from: "Mexico",
                to: "France",
                value: 1
            },
            {
                from: "Mexico",
                to: "Spain",
                value: 5
            },
            {
                from: "Mexico",
                to: "England",
                value: 1
            },
            {
                from: "USA",
                to: "Portugal",
                value: 1
            },
            {
                from: "USA",
                to: "France",
                value: 1
            },
            {
                from: "USA",
                to: "Spain",
                value: 1
            },
            {
                from: "USA",
                to: "England",
                value: 5
            },
            {
                from: "Portugal",
                to: "Angola",
                value: 2
            },
            {
                from: "Portugal",
                to: "Senegal",
                value: 1
            },
            {
                from: "Portugal",
                to: "Morocco",
                value: 1
            },
            {
                from: "Portugal",
                to: "South Africa",
                value: 3
            },
            {
                from: "France",
                to: "Angola",
                value: 1
            },
            {
                from: "France",
                to: "Senegal",
                value: 3
            },
            {
                from: "France",
                to: "Mali",
                value: 3
            },
            {
                from: "France",
                to: "Morocco",
                value: 3
            },
            {
                from: "France",
                to: "South Africa",
                value: 1
            },
            {
                from: "Spain",
                to: "Senegal",
                value: 1
            },
            {
                from: "Spain",
                to: "Morocco",
                value: 3
            },
            {
                from: "Spain",
                to: "South Africa",
                value: 1
            },
            {
                from: "England",
                to: "Angola",
                value: 1
            },
            {
                from: "England",
                to: "Senegal",
                value: 1
            },
            {
                from: "England",
                to: "Morocco",
                value: 2
            },
            {
                from: "England",
                to: "South Africa",
                value: 7
            },
            {
                from: "South Africa",
                to: "China",
                value: 5
            },
            {
                from: "South Africa",
                to: "India",
                value: 1
            },
            {
                from: "South Africa",
                to: "Japan",
                value: 3
            },
            {
                from: "Angola",
                to: "China",
                value: 5
            },
            {
                from: "Angola",
                to: "India",
                value: 1
            },
            {
                from: "Angola",
                to: "Japan",
                value: 3
            },
            {
                from: "Senegal",
                to: "China",
                value: 5
            },
            {
                from: "Senegal",
                to: "India",
                value: 1
            },
            {
                from: "Senegal",
                to: "Japan",
                value: 3
            },
            {
                from: "Mali",
                to: "China",
                value: 5
            },
            {
                from: "Mali",
                to: "India",
                value: 1
            },
            {
                from: "Mali",
                to: "Japan",
                value: 3
            },
            {
                from: "Morocco",
                to: "China",
                value: 5
            },
            {
                from: "Morocco",
                to: "India",
                value: 1
            },
            {
                from: "Morocco",
                to: "Japan",
                value: 3
            }
        ]
    },
    events: {
        beforeRender: function(eventObj, dataObj) {
            var chartRef = eventObj.sender;
            var chartContainer = dataObj.container;

            var radioInputsWrapper = document.createElement('div');
            radioInputsWrapper.style.maxWidth = "900px";
            radioInputsWrapper.style.margin = "0 auto";

            var eventHandler = function(attr, val) {
                chartRef.setChartAttribute(attr, val);

            };

            var createRadioNode = function(list){
                list.forEach(item =>{
                    var rad = document.createElement("input");
                    rad.type = "radio";
                    rad.name = "node";
                    rad.value = item.value;
                    rad.id = item.value;
                    
                    rad.style.display = "inline-block";
                    rad.style.verticalAlign = "center";
                    rad.style.marginRight = "5px";
                    
                    rad.onclick = eventHandler.bind(this, item.attr, item.value);
                    var label = document.createElement('label');
                    label.style.color = "#000";
                    label.innerText = item.label;
                    label.style.display = "inline-block";
                    label.style.verticalAlign = "center";
                    
                    var div = document.createElement('div');
                     div.style.display = "inline-block";
                     div.style.minWidth = "33%"
                     div.style.padding = "5px 15px 5px 5px";
                    div.appendChild(rad);
                    div.appendChild(label);
                     
                    radioInputsWrapper.appendChild(div);
                }) 
                 
             }

            var listItems = [{
                label: "Label Font",
                value: "Arial",
                attr: "nodeLabelFont"
            },
            {
                label: "Label Font Color",
                value: "#000fff",
                attr: "nodeLabelFontColor"
            },
            {
                label: "Label Transparency",
                value: "50",
                attr: "nodeLabelAlpha"
            },
            {
                label: "Label Background Color",
                value: "#ff0000",
                attr: "nodeLabelBgColor"
            },
            {
                label: "Label Border Color",
                value: "#000000",
                attr: "nodeLabelBorderColor"
            },
            {
                label: "Label Font Size",
                value: "13",
                attr: "nodeLabelFontSize"
            },
            {
                label: "Bold Label Font",
                value: "1",
                attr: "nodeLabelFontBold"
            },
            {
                label: "Italic Label Font",
                value: "1",
                attr: "nodeLabelFontItalic"
            },
            {
                label: "Label Border Radius",
                value: "5",
                attr: "nodeLabelBorderRadius"
            },
            {
                label: "Label Border Padding",
                value: "5",
                attr: "nodeLabelBorderPadding"
            },
            {
                label: "Label Border Dashed",
                value: "1",
                attr: "nodeLabelBorderDashed"
            },
            {
                label: "Length of the Dashed Border",
                value: "3",
                attr: "nodeLabelBorderDashLen"
            },
            {
                label: "Gap Between the Dashed Border",
                value: "2",
                attr: "nodeLabelBorderDashGap"
            },
            {
                label: "Inherit Label Color",
                value: "1",
                attr: "inheritLabelColorFromNode"
            }];

            createRadioNode(listItems);

            chartContainer.appendChild(radioInputsWrapper);
        }
    }
}