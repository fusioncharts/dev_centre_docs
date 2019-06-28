{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    id: "myChartId",
    dataSource: {
        "chart": {
            "caption": "Top 3 Juice Flavors",
            "subcaption": "Last year",
            "xaxisname": "Flavor",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            "palettecolors": "#008ee4",
            "canvasbgalpha": "0",
            "canvasborderalpha": "0",
            "useplotgradientcolor": "0",
            "showplotborder": "0",
            "placevaluesinside": "1",
            "valuefontcolor": "#ffffff",
            "captionpadding": "20",
            "showaxislines": "1",
            "axislinealpha": "20",
            "divlinealpha": "20",
            "showborder": "1",
            "bgalpha": "0",
            "animation": "0"
        },
        "data": [{
            "label": "Apple",
            "value": "810000",
            "link": "newchart-xml-apple"
        }, {
            "label": "Cranberry",
            "value": "620000",
            "link": "newchart-xml-cranberry"
        }, {
            "label": "Grapes",
            "value": "350000",
            "link": "newchart-xml-grapes"
        }],
        "linkeddata": [{
            "id": "apple",
            "linkedchart": {
                "chart": {
                    "caption": "Apple Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "palettecolors": "#f8bd19,#e44a00,#008ee4,#33bdda,#6baa01,#583e78",
                    "canvasbgalpha": "0",
                    "canvasborderalpha": "0",
                    "useplotgradientcolor": "0",
                    "showplotborder": "0",
                    "captionpadding": "20",
                    "showborder": "1",
                    "showshadow": "0",
                    "use3dlighting": "0",
                    "bgalpha": "0",
                    "animation": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [{
                    "label": "Q1",
                    "value": "157000"
                }, {
                    "label": "Q2",
                    "value": "172000"
                }, {
                    "label": "Q3",
                    "value": "206000"
                }, {
                    "label": "Q4",
                    "value": "275000"
                }]
            }
        }, {
            "id": "cranberry",
            "linkedchart": {
                "chart": {
                    "caption": "Cranberry Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "palettecolors": "#f8bd19,#e44a00,#008ee4,#33bdda,#6baa01,#583e78",
                    "canvasbgalpha": "0",
                    "canvasborderalpha": "0",
                    "useplotgradientcolor": "0",
                    "showplotborder": "0",
                    "captionpadding": "20",
                    "showborder": "1",
                    "showshadow": "0",
                    "use3dlighting": "0",
                    "bgalpha": "0",
                    "animation": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [{
                    "label": "Q1",
                    "value": "102000"
                }, {
                    "label": "Q2",
                    "value": "142000"
                }, {
                    "label": "Q3",
                    "value": "187000"
                }, {
                    "label": "Q4",
                    "value": "189000"
                }]
            }
        }, {
            "id": "grapes",
            "linkedchart": {
                "chart": {
                    "caption": "Grapes Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "palettecolors": "#f8bd19,#e44a00,#008ee4,#33bdda,#6baa01,#583e78",
                    "canvasbgalpha": "0",
                    "canvasborderalpha": "0",
                    "useplotgradientcolor": "0",
                    "showplotborder": "0",
                    "captionpadding": "20",
                    "showborder": "1",
                    "showshadow": "0",
                    "use3dlighting": "0",
                    "bgalpha": "0",
                    "animation": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [{
                    "label": "Q1",
                    "value": "45000"
                }, {
                    "label": "Q2",
                    "value": "72000"
                }, {
                    "label": "Q3",
                    "value": "95000"
                }, {
                    "label": "Q4",
                    "value": "108000"
                }]
            }
        }]
    },
    "events": {

        /**
         * @description
         * Triggered just before a linked chart is closed.
         *
         * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
         * @param {Object} dataObj: An object containing all the details related to the linked item.
         */

        "beforeLinkedItemClose": function(eventObj, dataObj) {
            console.log(eventObj);
            var header = document.getElementById('header');
            header.style.display = 'block';

            var tempDiv = document.createElement('div');
            var attrsTable = document.getElementById('attrs-table');
            var titleDiv, valueDiv;
            for (var prop in dataObj) {
                titleDiv = document.createElement('div');
                titleDiv.className = 'title';
                titleDiv.innerHTML = prop;

                valueDiv = document.createElement('div');
                valueDiv.className = 'value';
                valueDiv.innerHTML = dataObj[prop];

                tempDiv.appendChild(titleDiv);
                tempDiv.appendChild(valueDiv);
            }
            attrsTable.innerHTML = '';
            attrsTable.appendChild(tempDiv);
        }
    }
});
salesChart.configureLink({
    type: "pie2d",
    overlayButton: {
        message: 'Close',
        fontColor: '880000',
        bgColor: 'FFEEEE',
        borderColor: '660000'
    }
}, 0);