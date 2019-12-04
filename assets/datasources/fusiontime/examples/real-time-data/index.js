{
    type: "timeseries",
    renderAt: "chart-container",
    width: "100%",
    height: "600",
    dataSource: {
        data: dataStore,
        yAxis: {
            plottype: "area"
        },
        series: "City"
    },
    events: {
        /* setting required functions and variables before rendering the chart */
        beforerender: function(eventObj, dataObj) {
            var chartRef = eventObj.sender;

            chartRef.lastTimeStr = data[data.length - 1][0];

            chartRef.getNextRandomDate = d =>
                new Date(new Date(d).getTime() + 1000);

            chartRef.fd = d => {
                var e = new Date(
                    d.getTime() - d.getTimezoneOffset() * 60000
                ).toISOString();
                var f = e.split(".")[0];
                var g = f.split("T");
                var h = g.join(" ");
                return h;
            };
            // random data generator
            chartRef.randBetween = (min, max) => {
                const ceilMin = Math.ceil(min);

                return (
                    Math.floor(Math.random() * (Math.floor(max) - ceilMin + 1)) +
                    ceilMin
                );
            };

            cons
        },
        rendered: function(eventObj) {
            var chartRef = eventObj.sender;
            // let {
            //     lastTimeStr
            // } = chartRef;
            // const {
            //     getNextRandomDate,
            //     fd,
            //     randBetween
            // } = chartRef;

            chartRef.lastTimeStr = chartRef.getNextRandomDate(chartRef.lastTimeStr);
            let newDate = new Date(chartRef.lastTimeStr);
            let formattedNewDate = chartRef.fd(newDate);

            chartRef.setIntervalId = setInterval(() => {
                newDate = chartRef.getNextRandomDate(formattedNewDate);
                formattedNewDate = chartRef.fd(newDate);
                chartRef.feedData([
                    [formattedNewDate, chartRef.randBetween(13, 45), "Kuala Lumpur"],
                    [formattedNewDate, chartRef.randBetween(13, 45), "Panama City"]
                ]);
            }, 1000);
        },
        /* removing setInterval after chart disposed to avoid errors */
        disposed: eventObj => clearInterval(eventObj.sender.setIntervalId)
    }
}