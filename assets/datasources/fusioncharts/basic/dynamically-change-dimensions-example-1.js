{
    type: 'column2d',
    height: '100%',
    width: '100%',
    dataFormat: 'json',
    renderAt: 'chart-container',
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
        "data": [{
                "label": "Venezuela",
                "value": "290"
            },
            {
                "label": "Saudi",
                "value": "260"
            },
            {
                "label": "Canada",
                "value": "180"
            },
            {
                "label": "Iran",
                "value": "140"
            },
            {
                "label": "Russia",
                "value": "115"
            },
            {
                "label": "UAE",
                "value": "100"
            },
            {
                "label": "US",
                "value": "30"
            },
            {
                "label": "China",
                "value": "30"
            }
        ]
    },
    "events": {
        "beforeRender": function(event, args) {
            var chartRef = event.sender;
            var container = event.data.container;
            var options = [
                '250x400', '350x600', '400x700'
            ];

            function createRadionBtns(container, label, cb) {
                var radioContainer = document.createElement('div');
                var spanLabel = document.createElement('label');
                var radioButton = document.createElement('input');

                radioContainer.className = 'element-container'
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
                radioButton.value = label;
                radioContainer.appendChild(spanLabel);
                radioContainer.appendChild(radioButton);
                radioButton.addEventListener('click', cb);
                return container.appendChild(radioContainer);
            }

            // Create option containers
            var optionsContainer = document.createElement('div');
            optionsContainer.style.textAlign = 'center';

            function eventListener() {
                var chartContainer = chartRef.container.parentNode;
                var [height, width] = this.value.split('x');
                chartContainer.style.height = height + 'px';
                chartContainer.style.width = width + 'px';
            };

            options.forEach(function(key, index) {
                createRadionBtns(optionsContainer, key, eventListener)
            });

            container.appendChild(optionsContainer);
        }
    }
}