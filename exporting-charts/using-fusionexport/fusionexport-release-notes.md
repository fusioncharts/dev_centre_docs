---
title: FusionExport Release Notes | FusionCharts
description: List of changes made in recent release.
heading: FusionExport Release Notes
---
<h2 class="sub-heading">v2.0</h2>

<p class="release-date">21st June 2021</p>

<h4 class="sub-heading">New Feature</h4>

- **Support for License Key management:** This version supports license validation system. [need more doc].
- **Support for CORS:** This version supports a new CLI argument called `--cors` which you can send cross-origin requests and share resources.
- **Support for Excel:** This version supports exporting your charts to `xlsx`, `xls` and `cvs` formats. This feature is only available with FusionCharts configurations. 

<h4>Improvements</h4>

- **Support for HTTPS Server:** This version includes HTTPS support for the FusionExport Server and the FusionExport SDK.
 
- **Renamed FusionExport executable:** To easily find the FusionExport process, we changed the executable name from `service.exe` to `fusionexport-service.exe` for all platforms. 

- **Rendering local fonts:** This version allows you to load and render charts with your local fonts in CSS or HTML files.

- **Support for timeout value:** This version supports a new CLI argument called `--timeout`, or `minifyResource` for SDK. This value allows users to provide a custom timeout.

- **New Dashboard templates:** This version includes new default templates for exporting dashboards. 

- **CLI Improvements:** 


<h4>Fixes</h4>

- **Sandox issue:** Linux based environments running FusionExport in RHEL 7.x no longer run into sandbox issues.

- **`--worker-count` value working:** Using the CLI argument `--worker-count`, to define the number of workers to run, works as expected. 


<h2 class="sub-heading">v1.2.3</h2>

<p class="release-date">21st April 2020</p>

<h4 class="sub-heading">Improvements</h4>

- **Support for FusionTime**: No need to add FusionTime files in the templates because the FusionExport engine comes with the support for FusionTime as well.

- **Reduced build size**: There were many external packages used in the FusionExport core. However, in this build, we have done the cleanup to ensure that FusionExport is as light as possible.

<h4>Bugs</h4>

- **Better handling of FusionCharts library**: For those who have a partial license of the product, it was difficult to render charts. Fear not; this issue has been fixed.

<h2 class="sub-heading">v1.2.2</h2>

<p class="release-date">20th January 2020</p>

<h4 class="sub-heading">New Feature</h4>

- **Announcement & notification from CLI:** Starting v1.2.2, we will start showing any new product release in the command line itself, so that you are always equipped with the latest version of FusionExport.

- **Support for memory stream as output:** You can now get exported output as a stream and work with it.

- All the SDKs are updated with these new changes.

<h4>Improvements</h4>

- **Better Package Management:** For better onboarding, we have changed the package structure to include examples and readme files.

<h4>Fixes</h4>

- **Dependency issues:** In the previous release, we included all the dependencies in the build itself. However, it led to a few issues while executing FusionExport. We have resolved that issue.

<h2 class="sub-heading">v1.2.1</h2>

<p class="release-date">28th August 2019</p>

<h4 class="sub-heading">New Feature</h4>

- **No more External Dependencies:** In v1.1.1, we made by allowing you to download dependencies during runtime. However, this created a huge backlash as many of our customers run FusionExport behind a firewall. Hence, with this minor release, we have reverted back the change.

<h2 class="sub-heading">v1.2.0</h2>

<p class="release-date">8th August 2019</p>

<h4 class="sub-heading">New Feature</h4>

- **Supports for PDF header & footer:** Behold, the most requested feature for FusionExport is here. Now you can add headers and footers without any hassle. Just mention them in the configurations and you are done!

- **Run as a background service in Linux based environments:** Now you can run FusionExport as a background service by providing `--daemon` option. No no need to split your screen.

<h4>Improvements</h4>

- **Supports FusionCharts v3.14:** This version also support the latest version of FusionCharts so that you are up to date with the FusionCharts engine as well.

<h2 class="sub-heading">v1.1.1</h2>

<p class="release-date">23rd April 2019</p>

<h4 class="sub-heading">Fixes</h4>

- **No more waiting while downloading:** We have reduced the file size from almost 100MB to 30MB. Don't get too excited we just removed the dependcies which are installed when you are running FusionExport for the first time.

<h2 class="sub-heading">v1.1.0</h2>

<p class="release-date">13th March 2019</p>

<h4 class="sub-heading">Fixes</h4>

- **No more Cropping:** While exporting sometimes your PDF file was not getting exported as you had hoped. It is not fixed by changing the logic for viewport handling.

- **Annotations work better now:** Few users have reported issues while exporting with annotations. Guess what? It is now fixed.

<h4 class="sub-heading">New Feature</h4>

- **Support for Headers and Footers:** Wait is now over, most requested feature of adding headers and footers is here!

<h2 class="sub-heading">v1.0.3</h2>

<p class="release-date">27th February, 2019</p>

<h4 class="sub-heading">Fixes</h4>

- **Annotation Object Merge :** When annotations were adding in the configurations, its behaviour was unpredictable. This issue has now been fixed.

<h2 class="sub-heading">v1.0.2</h2>

<p class="release-date">7th January, 2019</p>

<h4 class="sub-heading">New Feature</h4>

- **Support for Windows Service:** Windows users now have a reason to cheer because we now support Windows Service as well. Now manage FusionExport on your Windows Server more efficiently.

<h4>Improvements</h4>

- **Better feedback messages for API endpoints:** No need to get confused by the stack trace of errors when you visit any of the endpoints on FusionExport server. Get 'human-friendly' messages to figure out the next steps

- **The all-new FusionCharts library by default:** FusionExport now runs on the latest version of FusionCharts `v.3.13.3`.

- **Watermark for Trial Versions:** Initially we used to give FusionExport without any restrictions. But not now!

#### Fixes

- **No more infinite restarts:** FusionExport used to create infinite instance of itself every-time there was an error. This release makes sure that FusionExport does not go infinity and beyond.

- **Dealing with Incomplete FusionCharts XT Suite:** Although we know FusionCharts XT Suite is incredible. But sometimes people only use few modules of FusionCharts XT Suite. FusionExport used to break in such scenarios. We have fixed it so that you can embrace the minimalistic lifestyle.

- **Be Transparent:** No, we are not talking about culture but transparent PNGs. FusionExport used to crash while exporting with a transparent background. Worry no more!

<h2 class="sub-heading">v1.0.0</h2>

<p class="release-date">1st October, 2018</p>

<h4 class="sub-heading">New Features</h4>

- Export image quality control.

- Support MySQL logging.

- WS communication.

- Progress bar support.

<h4>Improvements</h4>

- SDKs and CLI can communicate with the same server.

- Template bundling during dashboard export is more smart and simple.

- Easier control over FusionExport Server configuration.

- Better export image quality.

- S3 and FTP configs can now be provided as a file.

- Simple host and port are used instead of a URL.

- Improved output filename manipulation and customization.

- FusionCharts library path can now be changed from FusionExport Server.

- FusionExport Server can now do the job of both FusionExport Desktop and FusionExport Web Service with a simple CLI interface.

<h4>Removals</h4>

- FusionExport Desktop.

- FusionExport Web Service.
