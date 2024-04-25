---
title: License activation from v2.0 onwards | FusionExport
description: Need to remove the watermark? Activate your license from v2.0 onwards. Read our comprehensive article for more information regarding license activation.
heading: License activation from v2.0 onwards
---

Starting version 2.0 onwards, we introduced a license activation mechanism. This means that you have to provide license keys in your project to remove the watermark. If you are an active customer, then you must have already received the license keys from us. But in case you don’t have them, reach out to our sales team to request them: sales@fusioncharts.com.

This tutorial covers how to activate your license. As mentioned before, you must have received license details from us. It will contain the following information:

1. **License Key:** Encrypted license key which you will be adding in your application
2. **Product Details:** List of products and modules associated with the license
3. **Expiry Date:**  Expiration date for the license key

In case you feel there is any discrepancy in the information, please contact the sales team: sales@fusioncharts.com.

To activate your license follow these steps:

1. Upgrade to the latest version of FusionExport: <https://www.fusioncharts.com/download/fusionexport>
2. Use the CLI argument `--license-key` (LicenseKey for Windows, `lincenseKey` for JSON, and `license-key` for Docker) to remove the watermark.
3. Additionally, if you are also using FusionCharts then also use the CLI argument `--fusioncharts-license-key` to remove the watermark from FC charts.

## Frequently asked questions

### What if I decide not to upgrade?

You are free to use existing versions of FusionExport without upgrading. However, any bug fixes or new features will be built on subsequent versions post v2.0. So if you decide to upgrade to any version of FusionExport, you will need to provide the license keys.

### What if I upgrade but don’t provide keys?

The watermark will appear automatically. Hence, the watermark will appear regardless.

### I have a license key for FusionExport only but I want to use FusionCharts Suite as well?

Your license key contains information about the products and services you have purchased from us. In this case, your license key will only work for FusionExport. You'll need another key for FusionCharts XT as mentioned in the tutorial above.

If you want to know details about your license then get in touch with our sales team: sales@fusioncharts.com.

### I did not upgrade but watermark has started appearing randomly

It could be because you have not provided absolute versions. Please check the version of FusionExport and downgrade to one, below `2.0`. If the issue still persists then get in touch with our support team and we will try to resolve the issue ASAP: support@fusioncharts.com.

### I’m an active customer but didn’t receive any keys. Where do I get them?

Please get in touch with our sales team to get the license keys and related information: sales@fusioncharts.com.

### My application is an on-premise intranet application and I don’t want any external communication for license validation, how does it impact me?

FusionExport license validation is completely server-based. It does not communicate with any external servers to validate the license. Hence, you can keep using it without any issues.

### I applied the keys as instructed but I still see the watermark. Who can help me?

If your doubts are still not resolved, then feel free to reach out to our support team: support@fusioncharts.com.
