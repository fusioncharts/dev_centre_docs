{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fusion",
            "rotateValues": "1",
            "exportEnabled": "1"
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
            "value": "910000",
            "anchorRadius": "10",
            "anchorBorderColor": "0372AB",
            "anchorBgColor": "E1f5ff"
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
            var wrapper = document.createElement('div');
            wrapper.style.overflow = "hidden"
            wrapper.setAttribute('class', 'multi-chart');
            // Create div for thumbnails
            var thumbnails = document.createElement('div');
            thumbnails.innerHTML = '<div id="thumbnail-column"></div><div id="thumbnail-pie"></div><div id="thumbnail-bar"></div></div>';
            thumbnails.style.cssText = 'display:block; float:left;';

            // Append thumbnails div before chart-container
            //args.container.parentNode.insertBefore(thumbnails, args.container);
            args.container.parentNode.insertBefore(wrapper, args.container);
            wrapper.appendChild(thumbnails);
            wrapper.appendChild(args.container);



            // Set CSS style for chart-container
            args.container.style.cssText = 'padding:5px; font-size:11px; display:block; float:left;';
        },
        'renderComplete': function(evt, args) {
            var createThumbNail = function(chartId, width, height, divId) {
                // we clone the chart first and then set new width and height
                var chartRef = FusionCharts(chartId),
                    clonedChart = chartRef.clone({
                        "width": width,
                        "height": height,
                        "events": {}
                    });
                // turn off properties which are not required
                clonedChart.setChartAttribute({
                    "showValues": "0",
                    "showLabels": "0",
                    "animation": "1",
                    "exportEnabled": "0",
                    "showTooltip": "0",
                    "showHoverEffect": "1",
                    "showYAxisValues": "0",
                    "caption": "",
                    "subCaption": "",
                    "xAxisName": "",
                    "yAxisName": "",
                    "showXAxisLine": "0",
                    "showYAxisLine": "0",
                    "numDivLines": "0",
                    "enableSlicing": "0",
                    "enableRotation": "0"
                });
                // listend for the chartClick event to render the detailed chart
                clonedChart.addEventListener('chartClick', function() {
                    if (chartId != evt.sender.id) {
                        // rendering the new chart
                        FusionCharts(chartId).render(args.container);
                    }
                });
                // create the thumbnail
                clonedChart.render(divId);
            };

            // Create instance of all charts (including current one)
            var revenueChartColumn = evt.sender.clone({
                id: 'revenue-chart-column',
                events: {}
            });
            var revenueChartPie = evt.sender.clone({
                type: 'pie2d',
                id: 'revenue-chart-pie',
                events: {}
            });
            var revenueChartBar = evt.sender.clone({
                type: 'bar2d',
                id: 'revenue-chart-bar',
                events: {}
            });

            // create thumbnails for all the three charts
            createThumbNail('revenue-chart-column', 100, 100, 'thumbnail-column');
            createThumbNail('revenue-chart-pie', 100, 100, 'thumbnail-pie');
            createThumbNail('revenue-chart-bar', 100, 100, 'thumbnail-bar');
        }
    }
}