{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
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
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var chartRef = evt.sender;

            chartRef.originalData = JSON.parse(JSON.stringify(chartRef.getJSONData()));

            chartRef.changeBackground = function() {
                var data = chartRef.getJSONData(); //copy of object
                data.chart.bgColor = '#efefef';
                chartRef.setJSONData(data);
            };

            // Resets all the chart data to it's initial verison
            chartRef.resetAttr = function() {
                chartRef.setJSONData(chartRef.originalData);
            };

            // Makes the caption text left aligned
            chartRef.makeCaptionLeft = function() {
                var data = chartRef.getJSONData();
                data.chart.captionAlignment = 'left';
                chartRef.setJSONData(data);
            };


            var btnContainer = document.createElement('div'),
                str;

            // buttons
            str = '<button id="bgColorBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Change Chart Background</button>&nbsp&nbsp';
            str += '<button id="captionAlignBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Make Caption Text Left-Aligned</button>&nbsp&nbsp';
            str += '<button id="resetAttrBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Reset Attributes</button>';

            btnContainer.style.cssText = "text-align: center; width: 100%; margin: 10px;";
            btnContainer.innerHTML = str;
            //button attachment
            args.container.parentNode.insertBefore(btnContainer, args.container.nextSibling);
        },

        "renderComplete": function(evt, args) {
            var chartRef = evt.sender,
                bgColorBtn = document.getElementById('bgColorBtn'),
                captionAlignBtn = document.getElementById('captionAlignBtn'),
                resetAttrBtn = document.getElementById('resetAttrBtn');

            bgColorBtn.onclick = chartRef.changeBackground;
            captionAlignBtn.onclick = chartRef.makeCaptionLeft;
            resetAttrBtn.onclick = chartRef.resetAttr;
        }
    }
}
