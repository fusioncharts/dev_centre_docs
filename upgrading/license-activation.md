# License activation

Starting with FusionCharts v3.15.3 onwards, we have introduced a license activation mechanism. 
This means that you have to provide license keys in your project to remove the watermark. 
If you are a FusionCharts active customer, then you must have already received the license keys from us. 
But in case you don’t have them, you can reach out to our sales team to procure them: sales@fusioncharts.com.

This tutorial covers how to activate your license. As mentioned before, you must have received license details from us. It will contain the following information:

**License Key:** Encrypted license key which you will be adding in your application

**Product Details:** List of products and modules associated with the license

**Expiry Date:** Expiration date for the license key

In case you feel there is any discrepancy in the information, please contact the sales team: sales@fusioncharts.com. 

To activate your license follow these steps:

1. Download the latest version of FusionCharts for your prefered framework: https://www.fusioncharts.com/download/fusioncharts-suite-xt
2. Embed the library in your project. In case you don’t know how to use FusionCharts, refer to [how to create your first chart](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript).
3. Add the license key to your project, especially where you have instantiated FusionCharts. In your case, the snippet would look like:

```javascript
FusionCharts.options.license({
  key: "<YOUR KEY>",
  creditLabel: false
});
```

You don’t have to provide a license every time you add or render a chart. 
You could provide the key one time on a global level (at web page or application level), and it will work.
Make sure to set the `creditLabel` property to `false`. Otherwise, the watermark appears even if you have a valid license key. 
With v3.15.3, we have also deprecated the old `creditLabel` property, which was defined in the chart object. 
Please make sure you have removed `creditLabel` statements otherwise a warning message shows in the browser console.

## Precautions to take if you don’t want to upgrade to v3.15.3+ versions

From v3.15.3 onwards, all versions will come with the license activation module. 
To receive the latest updates, we strongly urge you to upgrade to the newest version. However, if you choose not to upgrade, we respect the choice.
But there are a couple of precautions you need to take to ensure that accidental upgrade is not happening:

## Using CDN

If you are using the following FusionCharts CDN URL: https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js, your application will be automatically upgraded to the latest version. 
And if you don’t provide the license key then the watermark will appear. To avoid such mishaps, make sure to use the unabridged version.
For example, if you wish to use v3.14.0, then your URL should be: https://cdn.fusioncharts.com/fusioncharts/3.14.0/fusioncharts.js

## Using package.json

If you are following modern web development practices then most of your modules must have been defined in `package.json`. Especially in `devDependencies` or `dependencies`. 
If you have provided a range of versions to FusionCharts for example: `{ “fusioncharts”: “^3.x” }` then your application will be automatically upgraded to the latest version of FusionCharts whenever you run `npm install` or `npm upgrade`. 

If you have CI and CD in `implemented` then you won’t even notice that the version has been upgraded and the watermark will appear.
To avoid this, ensure that you have provided an unabridged version. For example, if you wish to use v3.14.0, then your `package.json` should have `{ “fusioncharts”: “3.14.0” }`

## Frequently asked questions

### What if I decide not to upgrade?

You are free to use existing versions of FusionCharts without upgrading. Just keep in mind the precautions you need to take to avoid the accidental upgrades. 
However, any bug fixes or new features will be built on subsequent versions post v3.15.3. So if you decide to upgrade to any version of FusionCharts, you will need to provide the license keys.

### What if I upgrade but don’t provide keys?

The watermark will appear automatically. Also, keep in mind that we have deprecated old creditLabel property as well. Hence, the watermark will appear regardless.

### I have a license key for FusionCharts Suite only but I want to use FusionTime as well?

Your license key contains information about the products and services you have purchased from us. 
In this case, if you use the same license key to render FusionTime charts, then the watermark will appear on FusionTime related charts, but FusionCharts Suite related charts will work. 

It applies to other modules as well. If you have a license for only FusionCharts XT, but you decide to render PowerCharts, then PowerCharts will render with a watermark.
If you want to know details about your license then get in touch with our sales team: sales@fusioncharts.com.

### I did not upgrade but watermark has started appearing randomly

It could be because you have not provided absolute versions. Refer to the precautions section to resolve it. 
If the issue still persists then get in touch with our support team and we will try to resolve the issue ASAP: support@fusioncharts.com.

### I’m an active customer but didn’t receive any keys. Where do I get them? 

Please get in touch with our sales team to get the license keys and related information: sales@fusioncharts.com.

### My application is an on-premise intranet application and I don’t want any external communication for license validation, how does it impact me?

FusionCharts license validation is completely client-based. It does not communicate with any external servers to validate the license. 
Hence, you can keep using it without any issues.

### I applied the keys as instructed but I still see the watermark. Who can help me? 

If your doubts are still not resolved, then feel free to reach out to our support team: support@fusioncharts.com.

