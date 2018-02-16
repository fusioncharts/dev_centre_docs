jQuery('#convert').click(function() {
    jQuery("#dataTable").convertToFusionCharts({
        type: "mscolumn2d",
        width: "700",
        height: "350",
        dataFormat: "htmltable",
        renderAt: "chart-container"
    }, {
        "chartAttributes": {
            caption: "Units sold for last 2 years",
            xAxisName: "Month",
            yAxisName: "Units",
            bgColor: "FFFFFF",
            theme: "fint"
        }
    });
});
