{
    type: 'column2d',
    dataLoadStartMessage: "Fetching revenue data for the previous year",
    renderAt: 'chart-container2',
    baseChartMessageFont: "Arial",
    baseChartMessageFontSize: "18",
    baseChartMessageColor: "#69936d",
    width: '550',
    height: '350',
    dataFormat: 'xmlurl',
    dataSource: 'https://static.fusioncharts.com/sample/dev2.0/how-to-guides-change-chart-messages-php-2.php',
    events: {
        'beforeRender': function(evt, args) {
            if (!document.getElementById('controllersStyle')) {
                var controllers = document.createElement('div'),
                    chartRef = evt.sender,
                    renderBtn,
                    renderChart = function(event) {
                        var container = args.container.getAttribute('id');
                        chartRef.dispose();
                        chartRef = new FusionCharts({
                            type: 'column2d',
                            dataLoadStartMessage: "Fetching revenue data for the previous year",
                            renderAt: container,
                            baseChartMessageFont: "Arial",
                            baseChartMessageFontSize: "18",
                            baseChartMessageColor: "#69936d",
                            width: '100%',
                            height: '350',
                            dataFormat: 'xmlurl',
                            dataSource: 'https://static.fusioncharts.com/sample/dev2.0/how-to-guides-change-chart-messages-php-1.php',
                        }).render();
                    };
                controllers.setAttribute('id', 'controllersStyle');
                controllers.setAttribute('class', 'controllers-holder'); 
                // Create elements inside div
                controllers.innerHTML = '<input type="button" id="renderBtnStyle" class="btn btn-transparent" value="Render Chart"/>';
                args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
                renderBtn = document.getElementById('renderBtnStyle');
                //Add listener to buttons
                if (renderBtn.addEventListener) {
                    renderBtn.addEventListener("click", renderChart);
                } else {
                    renderBtn.onclick && renderBtn.onclick(renderChart);
                }

            }
        }
    }
}