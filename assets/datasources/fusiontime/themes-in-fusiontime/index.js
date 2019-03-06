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
        'beforeRender': function(evt, args) {
          // creating div for theme controllers
              var scriptElem, controllers = document.createElement('div'),
              themeCollection = {
                  'fusion': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.fusion.js',
                  'gammel': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.gammel.js',
                  'candy': 'https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.candy.js'
              };
              for (var theme in themeCollection) {
                  scriptElem = document.createElement('script');
                  scriptElem.setAttribute('type', 'text/javascript');
                  scriptElem.setAttribute('src', themeCollection[theme]);
                  scriptElem.async = false;
                  args.container.parentNode.insertBefore(scriptElem, args.container.nextSibling);
              }
              // form radio buttons inside div
              controllers.innerHTML = '<form name="radioBtn"><label><input type="radio" name="themeOptions" checked value="fusion"> Fusion</label><label><input type="radio" name="themeOptions" value="gammel"> Gammel</label><label><input type="radio" name="themeOptions" value="candy"> Candy</label>';
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