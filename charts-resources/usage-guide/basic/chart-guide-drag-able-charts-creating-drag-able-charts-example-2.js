{
    type: 'dragline',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Unit Sales - Apple vs Samsung",
            "subCaption": "Drag anchors to change estimated values",
            "subCaptionFontSize": "12",
            "xAxisName": "Quarter",
            "yAxisName": "No. of Units",
            "theme": "fint"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3(E)"
            }, {
                "label": "Q4(E)"
            }]
        }],
        "dataset": [{
            "seriesname": "Apple",
            "valuePosition": "ABOVE",
            "allowDrag": "0",
            "data": [{
                "value": "1200"
            }, {
                "value": "1500",
                "dashed": "1"
            }, {
                "value": "1300",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "900",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }, {
            "seriesname": "Samsung",
            "allowDrag": "0",
            "data": [{
                "value": "600"
            }, {
                "value": "850",
                "dashed": "1"
            }, {
                "value": "1000",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "1200",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }]
    },
    events: {
        'beforeRender': function(event, args) {
            var tableCont = document.createElement('div'),
                strHTML = "",
                thStyle = "background-color: #fece2f;color: #ffffff;border: 1px solid #000;padding: 10px 5px;min-width: 70px;text-align: center;",
                tdStyleApple = "border: 1px solid #000;color: #008ee4;padding: 10px 5px;min-width: 70px;text-align: center;",
                tdStyleSamsung = "border: 1px solid #000;color: #6baa01;padding: 10px 5px;min-width: 70px;text-align: center;",
                rowHeaderApple = " background-color: #008ee4;color: #fff; padding: 10px 5px;",
                rowHeaderSamsung = " background-color: #6baa01;color: #fff; padding: 10px 5px;";
            tableCont.setAttribute('id', 'tableCont');
            tableCont.setAttribute('style', 'padding-left: 10px; width: 470px;');
            strHTML = "<table style='margin: 25px auto;border-collapse: collapse;border: 1px solid;border-bottom: 2px solid;'><tr><td style='border-top: 1px solid #fff; border-left: 1px solid #fff;'></td><th style='" + thStyle + "'>Q1</th><th style='" + thStyle + "'>Q2</th><th style='" + thStyle + "'>Q3(E)</th><th style='" + thStyle + "'>Q4(E)</th></tr><tr><td style='" + rowHeaderApple + "'>Apple</td><td id='1-1' style='" + tdStyleApple + "'>1200</td><td id='1-2' style='" + tdStyleApple + "'>1500</td><td id='1-3' style='" + tdStyleApple + "'>1300</td><td id='1-4' style='" + tdStyleApple + "'>900</td></tr><tr><td style='" + rowHeaderSamsung + "'>Samsung</td><td id='2-1' style='" + tdStyleSamsung + "'>600</td><td id='2-2' style='" + tdStyleSamsung + "'>850</td><td id='2-3' style='" + tdStyleSamsung + "'>1000</td><td id='2-4' style='" + tdStyleSamsung + "'>1200</td></tr></table><p align = 'center'/> (E) indicates Estimated";
            tableCont.innerHTML = strHTML;
            args.container.parentNode.insertBefore(tableCont, args.container.nextSibling);
        },
        'dataplotdragend': function(evt, arg) {
            var dsIndx = arg && arg.datasetIndex,
                dtIndx = arg && arg.dataIndex,
                val = arg && parseInt(arg.endValue, 10);
            document.getElementById(dsIndx + '-' + dtIndx).innerHTML = val;

        },
        'datarestored': function(evtObj) {
            var ds1Values = ["1200", "1500", "1300", "900"],
                ds2Values = ["600", "850", "1000", "1200"],
                update = function(arr, rowNum) {
                    var i = 0,
                        arrLen = arr.length;

                    for (i; i < arrLen; i += 1) {
                        val = arr[i];
                        document.getElementById(rowNum + '-' + (i + 1)).innerHTML = val;
                    }
                };
            update(ds1Values, 1);
            update(ds2Values, 2);
        }
    }
}
