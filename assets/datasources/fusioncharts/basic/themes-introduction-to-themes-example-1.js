{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenue",
            "theme": "fusion"
        },
        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    },
   events: {
      'beforeRender': function(eventObj, args) {
         var options = {
            'fusion': 'Fusion',
            'gammel': 'Gammel',
            'candy': 'Candy',
            'zune': 'Zune',
            'ocean': 'Ocean',
            'carbon': 'Carbon',
            'umber': 'Umber'
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
