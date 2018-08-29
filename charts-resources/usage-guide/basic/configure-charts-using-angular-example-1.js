{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
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
        // Updates the chart data
        updateData: function() {
            const data = Object.assign({}, this.dataSource); //clones data
            data.data[2].label = 'This Label is Updated';
            data.data[2].value = this.getRandomNumber();

            data.data[3].label = 'This is updated as well';
            data.data[3].value = this.getRandomNumber();
            this.dataSource = data;
        },
        // Generates a random number between min and max
        getRandomNumber: function() {
            var max = 300,
                min = 50;
            return Math.round(((max - min) * Math.random()) + min);
        },
        controls.innerHTML = '<button onClick="updateData()" >Update chart data</button>';
        controls.style.cssText = 'text-align: center; width: 400px; padding-left: 200px;';
        args.container.appendChild(controls);
    }
}