{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        chart: {
            "theme": "fusion"
        },
        yAxis: [{
            "title": "Sales"
        }],
        caption: {
            text: 'Online Sales of a SuperStore'
        }
    },
    events: {
        'beforeRender': function(eventObj, args) {
            var options = {
                    'fusion': 'Fusion',
                    'gammel': 'Gammel',
                    'candy': 'Candy',
                },
                themeSelected = 'fusion',
                chartRef = eventObj.sender;

            var container = args.container;
            var radioContainer = document.createElement('div');

            radioContainer.style.cssText = "text-align: center; width: 100%;"
            var spanLabel = document.createElement('span');
            spanLabel.innerText = "Choose a theme: ";

            var upadateTheme = function(event) {
                var theme = event.target.value;
                chartRef.setChartAttribute('theme', theme);
            }

            function radioWrapper(value, label, selected = false) {
                const div = document.createElement('div');
                const input = document.createElement('input');
                const labelElement = document.createElement('label');

                div.style.cssText = "display: inline-block; margin:10px 5px;";
                labelElement.style.cssText = "margin-right: 5px;";

                labelElement.innerText = label;
                labelElement.setAttribute('for', value)

                input.id = value;
                input.type = 'radio';
                input.name = "theme"
                input.value = value
                input.onchange = upadateTheme;
                selected && input.setAttribute('checked', '');

                div.appendChild(labelElement);
                div.appendChild(input);
                return div;
            }


            for (const key in options) {
                var label = options[key];
                var selected = themeSelected === key;
                var radioOption = radioWrapper(key, label, selected);
                radioContainer.appendChild(radioOption);
            }

            container.appendChild(radioContainer);
        }
    }
}