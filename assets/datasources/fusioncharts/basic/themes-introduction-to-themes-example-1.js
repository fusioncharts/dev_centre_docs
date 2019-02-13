{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    id: "rev-fc-chart",
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
      'beforeRender': function(evt, args) {
        // creating div for theme controllers
            var scriptElem, controllers = document.createElement('div'),
            themeCollection = {
                'fusion': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.fusion.js',
                'gammel': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.gammel.js',
                'candy': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.candy.js',
                'zune': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.zune.js',
                'ocean': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.ocean.js',
                'carbon': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.carbon.js'
            };
            for (var theme in themeCollection) {
                scriptElem = document.createElement('script');
                scriptElem.setAttribute('type', 'text/javascript');
                scriptElem.setAttribute('src', themeCollection[theme]);
                scriptElem.async = false;
                args.container.parentNode.insertBefore(scriptElem, args.container.nextSibling);
            }
            // form radio buttons inside div
            controllers.innerHTML = '<form name="radioBtn"><label><input type="radio" name="themeOptions" checked value="fusion"> Fusion</label><label><input type="radio" name="themeOptions" value="gammel"> Gammel</label><label><input type="radio" name="themeOptions" value="candy"> Candy</label><label><input type="radio" name="themeOptions" id="fint-chckbx" value="zune"> Zune</label><label><input type="radio" name="themeOptions" value="ocean"> Ocean</label><label><input type="radio" name="themeOptions" value="carbon"> Carbon</label></form>';
            controllers.setAttribute('id', 'controllers');

            // setting css styles for controllers div
            controllers.style.cssText = "font-family:'Helvetica Neue', Arial; font-size:14px; margin-left:30px;";

            // setting css styles for labels inside controllers div
            var labels = controllers.getElementsByTagName('label');
            for (var i = 0; i < labels.length; i++) {
                labels[i].style.cssText = 'padding: 0 11px !important;';
            }
            args.container.appendChild(controllers);
            
            var rad = document.radioBtn.themeOptions;
            for (var i = 0; i < rad.length; i++) {
                rad[i].onclick = function() {
                    FusionCharts.items["rev-fc-chart"].setChartAttribute('theme', this.value);
                };
            }
        }
    }
}