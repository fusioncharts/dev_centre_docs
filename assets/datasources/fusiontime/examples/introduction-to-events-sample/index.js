{
    type: 'timeseries',
    renderAt: 'container',
    width: 700,
    height: 550,
    dataSource: {
        data: dataStore,
        caption: {
            text: 'Unemployment in San Jose & SJ Metro Area'
        },
        subcaption: {
            text: 'From January 2006 - December 2016'
        },
        series: 'City',
        yAxis: [{
            plot: [{
                value: 'Unemployment',
                type: 'column'
            }],
            title: 'Unemployment Count',
            format: {
                suffix: 'K'
            }
        }]
    },
    "events": {
        "selectionChange": function(e) {
            console.log(e);
            var s = new Date(e.data.start);
            var e = new Date(e.data.end);
            // console.log(ftChart.getTimeSelection());
            document.getElementById("setMessage").innerHTML = "Current selection range : " + s.getDate() + "/" + (s.getMonth() + 1) + "/" + s.getFullYear() + " to " + e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
            var i = Math.round(Math.random() * 50);
            console.log(i);
            document.getElementById("setMessage").style.background = colors[i];
        }
    }
}