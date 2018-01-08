---
permalink: gauge-and-widgets-guide/real-time-gauges/setting-up-real-time-gauges.html
title: Setting Up Real-time Gauges | FusionCharts
description: FusionCharts Suite XT offers gauges that can be fed with real-time data periodically and can render the new data without a page refresh.
heading: Setting Up Real-time Gauges
chartPresent: true
---

FusionCharts Suite XT offers gauges that can be fed with real-time data periodically and can render the new data without a page refresh.

You can feed real-time data to a gauge in two ways:

* <a href="/gauge-and-widgets-guide/real-time-gauges/setting-up-real-time-gauges#using-javascript-api-methods" class="smoth-scroll">Using JavaScript API methods</a>

* <a href="/gauge-and-widgets-guide/real-time-gauges/setting-up-real-time-gauges#using-server-side-scripts" class="smoth-scroll">Using server-side scripts</a>

## Using JavaScript API Methods

If new data is flowing into your system at client side, you can feed data to the gauge in real time using the method, `feedData(strData)`. The parameter `strData` is a string value that contains the real-time, latest data and can be fed to the gauge.

A cylinder gauge fed with real-time data using the `feedData()` method is shown below:

{% embed_all advanced-charting-real-time-gauges-setting-up-real-time-gauges-example-1.js %}

The gauge is configured to show the current diesel level in a generator. The fuel level in the cylinder increases or decreases indicating the current diesel value marked on it. Current data is also displayed at the bottom of the cylinder after every preset interval is elapsed.

The code snippet to feed real-time data to the gauge using  the `feedData()` method is shown below:

```html
// Initial value
"value": "110"
},
"events": {
    "rendered": function(evtObj, argObj) {
        var fuelVolume = 110;
        setInterval(function() {
            (fuelVolume < 10) ? (fuelVolume = 110) : "";
            var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
            // feed data to the cylinder gauge, fuelMeter
            evtObj.sender.feedData("&value=" + consVolume);
            fuelVolume = consVolume;
        }, 1000); // set the refresh interval to 1000 ms
    }
}
```

<p class="text-info">The time interval for the gauge update has to be defined in milliseconds. </p>

## Using Server-side Scripts

In instances where you have to monitor the status of an application/system constantly and the data is coming in from a server, you can use server-side scripts to poll the server for new data. This real-time data can be fed to a gauge to reflect the current status periodically.

An angular gauge updated with real-time data from a server is shown below:

{% embed_all advanced-charting-real-time-gauges-setting-up-real-time-gauges-example-2.js %}

In the above example, server CPU utilization of __foods.hsm.com__ and __garments.hsm.com__ is indicated on the angular gauge by two dials. The black dial shows the CPU utilization of the former and the gray dial shows the CPU utilization of the later website. 

The gauge is color-coded to indicate levels of CPU utilization as follows:

* Low - green

* Moderate - yellow

* High - red.

The gauge is configured to poll the server at `http://static.fusioncharts.com/sampledata/php/serverLoad.php` every 5 seconds for the current utilization value through the `datastreamURL` parameter.

<p class="text-info">The server page has to be on the same domain on which the gauge is hosted.</p>

The server returns the new data for both sites to the gauge at once. This can be achieved by passing the data in a pipe separated form, as shown below:

**&value = 85&#124;60**

The dials pick up data sequentially and indicate the updated value on the gauge. The order of the dials is defined in the script. Here, the black dial points to 85 and the gray dial points to 60.

<p class="text-info">The `refreshInterval` has to be specified in seconds.</p>


## Stopping/Restarting Real-time Updates

You can stop real-time updates in two ways:

* Using `stopUpdate()` method-when the `feedData()` method is used to fetch real-time data

* Using the `stopUpdate` command from the server-when a server-side script is used to fetch real-time data


### Using the `stopUpdate()` Method

A thermometer gauge configured to stop and restart receiving real-time updates is shown below:

{% embed_all advanced-charting-real-time-gauges-setting-up-real-time-gauges-example-3.js %}

In the above example, the gauge reflects the current temperature at Central Cold Store. The real-time data is also displayed at the bottom of the thermometer. To stop updating the data, click **Stop Update**. The gauge is not fed with real time data anymore. To resume real-time updates, click **Restart Update**.

The JavaScript API methods to stop and restart real-time updates are as follows:

<table>
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`stopUpdate()`</td>
    <td>Stops the real-time updates</td>
  </tr>
  <tr>
    <td>`restartUpdate()`</td>
    <td>Restarts the real-time updates</td>
  </tr>
</table>


### Using a Command From the Server

A real-time gauge stops polling the server for further updates when it receives the following command from the server:

```javascript
&stopUpdate=1
```

After stopping the update, it can be restarted either using user interaction or using the client-side JavaScript API method, `restartUpdate()`, described earlier.
