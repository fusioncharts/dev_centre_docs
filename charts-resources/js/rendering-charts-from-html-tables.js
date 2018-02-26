/**
 * instead of using jquery implementation we are using our custom js base implemnetaion to 
 * perform same functionality.
 */

var btn = document.getElementById("convert");

btn.addEventListener("click", function(){           
           
    FusionCharts.ready(function () {
        var salesChart = new FusionCharts({
            type: 'mscolumn2d',
            renderAt: 'chart-container',
            width: '500',
            height: '400',
            dataFormat: 'json',
            dataSource: {
    "chart": {
        "caption": "Units sold for last 2 years",
        "xaxisname": "Month",
        "yaxisname": "Units",
        "bgcolor": "FFFFFF",
        "theme": "fint"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "January  "
                },
                {
                    "label": "February  "
                },
                {
                    "label": "March  "
                },
                {
                    "label": "April  "
                },
                {
                    "label": "May  "
                },
                {
                    "label": "June  "
                },
                {
                    "label": "July  "
                },
                {
                    "label": "August  "
                },
                {
                    "label": "September  "
                },
                {
                    "label": "October  "
                },
                {
                    "label": "November  "
                },
                {
                    "label": "December  "
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "2012",
            "data": [
                {
                    "value": "400"
                },
                {
                    "value": "600"
                },
                {
                    "value": "540"
                },
                {
                    "value": "430"
                },
                {
                    "value": "350"
                },
                {
                    "value": "420"
                },
                {
                    "value": "430"
                },
                {
                    "value": "490"
                },
                {
                    "value": "480"
                },
                {
                    "value": "450"
                },
                {
                    "value": "440"
                },
                {
                    "value": "600"
                }
            ]
        },
        {
            "seriesname": "2013",
            "data": [
                {
                    "value": "800"
                },
                {
                    "value": "320"
                },
                {
                    "value": "740"
                },
                {
                    "value": "650"
                },
                {
                    "value": "650"
                },
                {
                    "value": "750"
                },
                {
                    "value": "760"
                },
                {
                    "value": "550"
                },
                {
                    "value": "640"
                },
                {
                    "value": "650"
                },
                {
                    "value": "640"
                },
                {
                    "value": "820"
                }
            ]
        }
    ]
}
        })
        .render();
    });

    // removing btn
    btn.remove();

});