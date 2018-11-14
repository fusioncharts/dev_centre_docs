{
    type: 'pie2d',
    height: '400',
    width: '700',
    dataFormat: 'json',
    renderAt: 'chart-container',
    dataSource: {
        "chart": {
            "caption": "Market Share of Web Servers",
            "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
            "showPercentValues": "1",
            "useDataPlotColorForLabels": "1",
            "enableMultiSlicing": "0",
            "showlegend": "0",
            "theme": "fusion"
        },
        "data": [{
                "label": "Apache",
                "value": "32647479"
            },
            {
                "label": "Microsoft",
                "value": "22100932"
            }, {
                "label": "Zeus",
                "value": "14376"
            }, {
                "label": "Other",
                "value": "18674221"
            }
        ]
    },
    "events": {
        "beforeRender": function(event, args) {
            var chartRef = event.sender;
            var container = event.data.container;
            var options = [
                'None',
                'Apache',
                'Microsoft',
                'Zeus',
                'Others'
            ];

            function createRadionBtns(container, label, index, cb) {
                var radioContainer = document.createElement('div');
                var spanLabel = document.createElement('label');
                var radioButton = document.createElement('input');

                radioContainer.className = 'element-container';
                radioContainer.style.marginLeft = '10px';
                radioContainer.style.display = 'inline-block';
                radioButton.style.display = 'inline-block';
                radioButton.style.verticalAlign = 'center';
                spanLabel.style.display = 'inline-block';
                spanLabel.style.marginRight = '5px';
                spanLabel.style.verticalAlign = 'center';


                spanLabel.innerText = label;
                radioButton.type = 'radio';
                radioButton.name = 'lagend'
                radioButton.value = index;
                radioContainer.appendChild(spanLabel);
                radioContainer.appendChild(radioButton);
                radioButton.addEventListener('click', cb);
                return container.appendChild(radioContainer);
            }

            // Create option containers
            var optionsContainer = document.createElement('div');
            optionsContainer.style.textAlign = 'center';

            function eventListener(e) {
                const value = this.value * 1;
                const plotIndex = value - 1;
                if (value !== 0) {
                    chartRef.slicePlotItem(plotIndex);
                    chartRef.clickedPlotIndex = plotIndex;
                } else {
                    chartRef.slicePlotItem(chartRef.clickedPlotIndex, false);
                }
            }

            options.forEach(function(key, index) {
                createRadionBtns(optionsContainer, key, index, eventListener)
            });

            container.appendChild(optionsContainer);
        }
    }
}