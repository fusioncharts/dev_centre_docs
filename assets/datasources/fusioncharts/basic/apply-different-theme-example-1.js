{
    type: 'column2d',
    height: '400',
    width: '700',
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
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }],
    },
    "events": {
      "beforeRender": function(eventObj, args) {
         var options = {
            'fusion': 'Fusion',
            'gammel': 'Gammel',
            'candy': 'Candy',
            'zune': 'Zune',
            'ocean': 'Ocean',
            'carbon': 'Carbon'
         },
            themeSelected = 'fusion',
            chartRef = eventObj.sender;

         var container = args.container;
         var radioContainer = document.createElement('div');

         radioContainer.style.cssText = "text-align: center; width: 100%;"
         var spanLabel = document.createElement('span');
         spanLabel.innerText = "Choose a theme: ";

         var upadateTheme = function (event) {
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
