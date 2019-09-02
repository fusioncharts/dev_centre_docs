{
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'jsonurl',
    dataSource: 'https://static.fusioncharts.com/fiddle/getSampleJSON.php',
    "events": {
        dataLoadRequested: function(eventObj, dataObj) {
            // Cancel the dataLoad. This will trigger the dataLoadRequestCancelled event.
            eventObj.preventDefault();
        },
        /**
         * @description
         * Triggered when the default behavior of the dataLoadRequested event is cancelled by calling the eventObj.preventDefault() method.
         *
         * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender (the chart object itself), etc.
         * @param {Object} dataObj: An object containing all the details related to the data being loaded like data format, url, etc.
         */
        dataLoadRequestCancelled: function(eventObj, dataObj) {
            console.log(eventObj);
            var header = document.getElementById('header');
            header.style.display = 'block';

            var tempDiv = document.createElement('div');
            var attrsTable = document.getElementById('attrs-table');
            var titleDiv, valueDiv;
            // Iterating through all the properties in argObj and adding it to the DOM
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
}