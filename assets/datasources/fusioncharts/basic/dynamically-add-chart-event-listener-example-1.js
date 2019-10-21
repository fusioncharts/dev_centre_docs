{
    type: 'column2d',
    height: '400',
    width: '700',
    dataFormat: 'json',
    renderAt: 'chart-container',
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
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
        }],
    },
    "events": {
        "beforeRender": function(e, d) {
            var messageBlock = document.createElement('p');
            messageBlock.style.textAlign = "center";
            var defaultMessage = 'Click the below buttons to add an event dynamically to a chart';
            var activatedMessage = 'Click on the plot to see the value along with the label';

            var getClickedMessage = function(categoryLabel, displayValue) {
                return 'You have clicked on plot <b>' + categoryLabel + ' </b> which has a value of <b>' + displayValue + '</b>';
            };
            messageBlock.innerText = defaultMessage;
            e.data.container.appendChild(messageBlock);

            // Create buttons
            var button1 = document.createElement('button');
            var button2 = document.createElement('button');
            var buttonWrapper = document.createElement('div');

            // Styles
            buttonWrapper.style.display = "flex";
            buttonWrapper.style.justifyContent = "center";


            button1.innerText = "ADD/LISTEN TO DATAPLOTCLICK EVENT";
            button2.innerText = "REMOVE DATAPLOTCLICK EVENT";

            // Get classNames for both button
            var classListbtn1 = button1.className.split(" ");
            var classListbtn2 = button2.className.split(" ");

            // Add class name for the style
            button1.className = button1.className + " btn btn-outline-secondary btn-sm";
            button2.className = button2.className + " btn btn-outline-secondary btn-sm";


            // Append to wrapper
            buttonWrapper.appendChild(button1);
            buttonWrapper.appendChild(button2);

            e.data.container.appendChild(buttonWrapper);
            button1.style.margin = "5px";
            button2.style.margin = "5px";
            button1.style.position = "relative";
            button2.style.position = "relative";

            function dataPlotClickListener(e, a) {
                var categoryLabel = e.data.categoryLabel;
                var displayValue = e.data.displayValue;
                var resMessage = getClickedMessage(categoryLabel, displayValue);
                messageBlock.innerHTML = resMessage;
            }

            button1.addEventListener('click', function() {
                button1.setAttribute('disabled', 'disabled');
                messageBlock.innerText = activatedMessage;
                e.sender.addEventListener('dataplotclick', dataPlotClickListener);
            });

            button2.addEventListener('click', function() {
                button1.removeAttribute('disabled');
                messageBlock.innerText = defaultMessage;
                e.sender.removeEventListener('dataplotclick', dataPlotClickListener);
            });

        }
    }
}