{
type: 'column2d',
renderAt: 'chart-container',
width: '800',
height: '400',
dataFormat: 'json',
dataSource: {
"chart": {
"caption": "<span style='stroke:green;'>Sales<br> of Top <u>Brands</u></span>",
"subCaption": "<abbr title = 'subCaption'>This is SubCaption with abbr</abbr> and <strike>strike</strike>",
"xAxisName": "<span style='fill:blue;'>Brand <em>Names</em></span>",
"yAxisName": "<del>Amount (In USD)</del>",
"yAxisMaxValue": "120000",
"numberPrefix": "$",
"useEllipsesWhenOverflow": "1",
"theme": "fusion",
"chartBottomMargin": "70",
"PlotfillAlpha": "100",
"placeValuesInside": "1",
"rotateValues": "0",
"valueFontColor": "#333333",
"valuePadding": "-10"
},
"data": [{
"label": "<i>ButterFinger</i>",
"value": "92000",
"displayvalue": "<b>92K</b>",
}, {
"label": "<abbr title='Snicker factory'>Snickers</abbr>",
"value": "87000"
}, {
"label": "<b>Coffee</b>",
"displayvalue": "<abbr title='Coffee Crisp'>Label with Abbr</abbr>",
"value": "83000"
}, {
"label": "<s>100Grand</s>",
"value": "80000"
}]
}
}