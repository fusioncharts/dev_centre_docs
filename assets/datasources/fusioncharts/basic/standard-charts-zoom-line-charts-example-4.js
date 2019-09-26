{
    type: 'zoomline',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Unique Website Visitors",
            "subcaption": "Last year",
            "yaxisname": "Unique Visitors",
            "xaxisname": "Date",
            "yaxisminValue": "800",
            "lineThickness": "1",
            "compactdatamode": "1",
            "dataseparator": "|",
            //Minimum Distance Between Anchors
            "anchorMinRenderDistance": "15",
            "theme": "fusion"
        },
        "categories": [{
            "category": "Jan 01|Jan 02|Jan 03|Jan 04|Jan 05|Jan 06|Jan 07|Jan 08|Jan 09|Jan 10|Jan 11|Jan 12|Jan 13|Jan 14|Jan 15|Jan 16|Jan 17|Jan 18|Jan 19|Jan 20|Jan 21|Jan 22|Jan 23|Jan 24|Jan 25|Jan 26|Jan 27|Jan 28|Jan 29|Jan 30|Jan 31"
        }],
        "dataset": [{
            "seriesname": "harrysfoodmart.com",
            "data": "978|976|955|981|992|964|973|949|985|962|977|955|988|959|985|965|991|985|966|989|960|944|976|980|940|941|945|952|973|946|951"

        }, {
            "seriesname": "harrysfashion.com",
            "data": "1053|1057|1084|1082|1098|1055|1068|1067|1074|1056|1067|1078|1079|1084|1041|1052|1066|1080|1049|1051|1049|1044|1083|1053|1038|1077|1046|1067|1053|1033|1047"
        }]
    }
}
