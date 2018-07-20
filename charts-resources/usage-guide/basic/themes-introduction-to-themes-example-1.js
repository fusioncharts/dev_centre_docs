{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    id: "rev-fc-chart",
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenue",
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
            controllers.innerHTML = '<label><input type="radio" name="theme-options" value="fusion"> Fusion</label><label><input type="radio" name="theme-options" id="fint-chckbx" value="zune"> Zune</label><label><input type="radio" name="theme-options" value="ocean"> Ocean</label><label><input type="radio" name="theme-options" value="carbon"> Carbon</label><label><input type="button" value="Apply Theme" id="set-theme"></label>';
            controllers.setAttribute('id', 'controllers');

            // setting css styles for controllers div
            controllers.style.cssText = "font-family:'Helvetica Neue', Arial; font-size:14px; margin-left:90px;";

            // setting css styles for labels inside controllers div
            var labels = controllers.getElementsByTagName('label');
            for (i = 0; i < labels.length; i++) {
                labels[i].style.cssText = 'padding: 0 5px !important;';
            }

            args.container.appendChild(controllers);
            //Button click handler
            document.getElementById("set-theme").onclick = function() {
                //Get name of the selected theme from radio
                var radios = document.getElementsByName("theme-options"),
                    len = radios && radios.length,
                    isSelected, radElem, i;

                for (i = 0; i < len; i += 1) {
                    radElem = radios[i];
                    isSelected = radElem && radios[i].checked;

                    if (isSelected) {
                        //Update chart theme
                        FusionCharts.items["rev-fc-chart"].setChartAttribute('theme', radElem.value);
                    }
                }
            }

        }
    }
}