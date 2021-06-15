---
title: License activation from v2.0 onwards | FusionExport
description: Learn how to activate your FusionExport license for all the packages
heading: License activation from v2.0 onwards
---

Starting version 2.0 onwards, we introduced a license activation mechanism. This means that you have to provide license keys in your project to remove the watermark. If you are a FusionCharts active customer, then you must have already received the license keys from us. But in case you don’t have them, reach out to our sales team to request them: sales@fusioncharts.com.

This tutorial covers how to activate your license. 
As mentioned before, you must have received license details from us. It will contain the following information:

1. **License Key:** Encrypted license key which you will be adding in your application
2. **Product Details:** List of products and modules associated with the license
3. **Expiry Date:**  Expiration date for the license key

In case you feel there is any discrepancy in the information, please contact the sales team: sales@fusioncharts.com.

To activate your license follow these steps:

1. Upgrade to the latest version of FusionCharts inside FudionExport for your preferred framework: https://www.fusioncharts.com/download/fusioncharts-suite-xt
2. Once you received your license key, a `fe` value will appear in the product property so the FusionExport watermark goes away. 

Note:	The license key could contain other modules like `ft` or `fw` as well. In such cases, this license key should be further passed to the FusionCharts library used in the FusionExport core so that the FusionCharts watermark is also removed based on the license.

3. Use the CLI argument `—license-key` (LicenseKey for Windows, `lincenseKey` for JSON, and `license-key` for Docker) to remove watermarks in FusionExport. 
4. Use the CLI argument `—fusion charts-license-key` to remove the FusionCharts watermark. 

Note: If user decides to use legacy versions like any version before FusionCharts v3.15.3, in such cases license key will not work for FusionCharts
