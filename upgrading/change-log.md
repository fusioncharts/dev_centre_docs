---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Changelog
breadcrumb: [["Home", "/"], ["Change Log"]]
---

## New Features

* FusionCharts Suite XT v3.13.0 introduces two new chart types: **[overlapped column](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts#overlapped-column-d-chart-3)** chart and **[overlapped bar](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts#overlapped-bar-d-chart-6)** chart.

* Spline and Spline Area charts are now part of both FusionCharts XT and PowerCharts XT. 

* Spline and Spline Area charts can now be built as part of combination charts, using the `renderAs` attribute. For example, `"renderAs": "spline"`.

* A common [theme](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-properties#fusionchartsoptionsstatic-member-9) can now be applied to all charts in a page.

* In multi-level pie chart, [highlightParentPieSlices](https://www.fusioncharts.com/dev/chart-attributes/?chart=multilevelpie&attribute=chart_highlightparentpieslices) and [highlightChildPieSlices](https://www.fusioncharts.com/dev/chart-attributes/?chart=multilevelpie&attribute=chart_highlightChildPieSlices) attributes have been introduced to determine the direction of the highlight effect. 

* The inner radius of the multi-level pie chart can be configured explicitly using `innerRadius` attribute.

* Custom fonts from client-side export can now be exported using [useSVGDeCanvo](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-properties#fusionchartsoptionsstatic-member-9) option.

* Data from Multi-level Pie charts can now be exported in CSV or XLS formats.

* In zoomline chart, [maxPeakDataLimit](https://www.fusioncharts.com/dev/chart-attributes/?chart=zoomline&attribute=chart_maxpeakdatalimit) and [minPeakDataLimit](https://www.fusioncharts.com/dev/chart-attributes/?chart=zoomline&attribute=chart_minpeakdatalimit) attributes consider the limits as a range when both the attributes are used.

* [getSVGString](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#getsvgstring-95) now accepts an object as the second parameter with a property named `keepImages`. It can now export the logo or any images (background images, etc.) present in the chart.

* `fusioncharts.vml.js` file has been added to the package for VML browsers which contains all the VML related codes. This file is used only when the chart will be rendered in the VML browers(IE8 and older).

* In `resized` event the `id` of the chart is added under the `dataObject`.

## Improvements

* `Angular-FusionCharts` plugin has been renamed to `AngularJS-Fusioncharts`.
* `Angular 2` and `Angular 4` plugins have been renamed to `Angular-FusionCharts`.
* The folder structure of the download package is modified. A new folder as `integrations` is added which contains all the **client-side** and **server-side** tech stacks. For more details click [here](https://www.fusioncharts.com/dev/upgrading/changed-behavior#updated-fusioncharts-suite-xt-download-package-5). 

* For dual y-axis charts, the secondary data plots now overlaps the primary data plots if `renderAs` attribute is set as column. If you would like the old behavior, click [here]({% site.baseurl %}/upgrading/changed-behavior#secondary-data-plots-overlap-primary-data-plots-3 '@@open-newtab') to know more.

* In order to free chart area, the restore button in select-scatter and drag-able chart has been moved to [options menu](https://www.fusioncharts.com/dev/chart-guide/standard-charts/drag-able-charts#dragable-column-d-chart-1). The list of attributes which have been added are as follows:

    * [enableSubmit]({% site.baseurl %}/chart-attributes/?chart=dragcolumn2d&attribute=chart_enablesubmit)

    * [submitText]({% site.baseurl %}/chart-attributes/?chart=dragcolumn2d&attribute=chart_submittext)

    * [enableRestore]({% site.baseurl %}/chart-attributes/?chart=dragcolumn2d&attribute=chart_enablerestore)

    * [restoreText]({% site.baseurl %}/chart-attributes/?chart=dragcolumn2d&attribute=chart_restoretext)

* Data plots in the [inverse chart]({% site.baseurl %}/chart-guide/standard-charts/inverse-y-axis-chart) will now appear from the top of the canvas. If you would like the old behavior, click [here]({% site.baseurl %}/upgrading/changed-behavior#inversed-data-plot-2 '@@open-newtab') to know more.

* The hyphen ( - ) character is now supported in the parameter of the JavaScript function of `link` attribute.

* The `defaultPrevented` property in the `eventObject` is used instead of the `prevented` property.

* The [onChangeCrossLine](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-events#onchangecrossline-287) event is fired when the mouse pointer is moved from one data plot to another.

* Gradient legend now sustains the state even on resize.

* The chart names in theme files are now case insensitive.

* [render()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#render-111) function will also be fired when updating the chart type.

* The core maps package has been updated to:

    * Updated the specification sheet for 12 cities and regions under Ethiopia Zonal Divisions and Region maps:

        * Addis Ababa City

        * Afar Region

        * Amhara Region

        * Benishangul Gumuz Region

        * Dire Dawa City

        * Ethiopia Region

        * Gambella Region

        * Harari Region

        * Oromia Region

        * SNNPR

        * Somali Region

        * Tigray Region

    * Updated the specification sheet of Ethiopia to add the following 64 new entities:

        * Afar Zone 1

        * Afar Zone 2

        * Afar Zone 3

        * Afar Zone 4

        * Afar Zone 5

        * Agew Awi

        * East Gojam

        * North Gonder

        * North Shewa(R3)

        * North Wello

        * Oromiya(R3)

        * South Gonder

        * South Wello

        * Wag Hemra

        * West Gojam

        * Bahir Dar

        * Asosa

        * Kamashi

        * Metekel

        * Tongo

        * Gambella Zone 1

        * Gambella Zone 2

        * Gambella Zone 3

        * Gambella Zone 4

        * Arsi

        * Bale

        * Borena

        * Illubabor

        * Jimma

        * East Harerge

        * East Shewa

        * East Wellega

        * West Harerge

        * West Shewa

        * West Wellega

        * North Shewa(R4)

        * Afder

        * Degehabur

        * Fik

        * Gode

        * Jigjiga

        * Korahe

        * Liben

        * Shinile

        * Warder

        * Bench Maji

        * Gedio

        * Gurage

        * Hadiya

        * Kefico Shekicho

        * KAT

        * North Omo

        * Sidama

        * South Omo

        * Amaro

        * Burji

        * Dirashe

        * Konso

        * Yem

        * Central Tigray

        * East Tigray

        * South Tigray

        * West Tigray

        * Mekele

    * Updated the specification sheet for 16 provinces and regions under Cuba:

        * Artemisa

        * Camaguey

        * CiegodeAvila

        * Cienfuegos

        * Granma

        * Guantanamo

        * Havana

        * Holguin

        * IsladelaJuventud

        * LasTunas

        * Matanzas

        * Mayabeque

        * PinardelRio

        * SanctiSpiritus

        * SantiagodeCuba

        * VillaClara

    * Updated the specification sheet of Cuba to add and rename the following entities:

        * Renamed Ciego de vila to Ciego de Ávila.

        * Added Havana

        * Added Artemisa

        * Added Mayabeque

    * The specification sheet for Colombia has been updated, to add the following 33 separate departments, as follows: 

        * Amazonas

        * Antioquia

        * Arauca

        * Atlantico

        * Bogota

        * Bolivar

        * Boyaca

        * Caldas

        * Caqueta

        * Casanare

        * Cauca

        * Cesar

        * Choco

        * Cordoba

        * Cundinamarca

        * Guainia

        * Guaviare

        * Huila

        * LaGuajira

        * Magdalena

        * Meta

        * Narino

        * NortedeSantander

        * Putumayo

        * Quindio

        * Risaralda

        * SanAndresProvidenciaandSantaCatalina

        * Santander

        * Sucre

        * Tolima

        * ValledelCauca

        * Vaupes

        * Vichada

    * Updated the definition of the Uttar Pradesh in the specification sheet.

    * Updated the definition of the West Bengal in the specification sheet.

    * Updated the definition of the Jammu & Kashmir in the specification sheet.

    * The specification sheet for Indonesia has been updated to add the following 27 separate provinces, as follows: 

        * Bali

        * BangkaBelitungIslands

        * Banten

        * Bengkulu

        * CentralJava

        * CentralKalimantan

        * EastJava

        * EastKalimantan

        * EastNusaTenggara

        * Gorontalo

        * Indonesia

        * JakartaSpecialCapitalRegion

        * Jambi

        * Lampung

        * NorthKalimantan

        * NorthMaluku

        * NorthSulawesi

        * NorthSumatra

        * Riau

        * SoutheastSulawesi

        * SouthKalimantan

        * SpecialRegionofAceh

        * SpecialRegionofYogyakarta

        * WestJava

        * WestNusaTenggara

        * WestSulawesi

        * WestSumatra 

    * In the specification sheet for Oceania, files for the following entities have been updated:

        * PapuaNewGuinea

        * Samoa

    * The specification sheet for Zimbabwe (Provinces) has been updated to add entities for 10 separate provinces, as follows:

        * Bulawayo

        * Harare

        * Manicaland

        * MashonalandCentral

        * MashonalandEast

        * MashonalandWest

        * Masvingo

        * MatabelelandNorth

        * MatabelelandSouth

        * Midlands

    * The following long names have been updated in the specification sheet for Papua New Guinea:

        * Chimbu renamed as Simbu (Chimbu)

        * Northern renamed as Oro (Northern)

        * North Solomons renamed as Autonomous Region of Bougainville

        * Sanduan renamed as Sandaun (West Sepik)

    * Updated the specification sheet of Papua New Guinea to add the following entities

        * Hela

        * Jiwaka

    * The following long names have been updated in the specification sheet for Samoa:

        * Aana has been renamed as A'ana

        * Faasaleleaga has been renamed as Fa'asaleleaga

        * Gagaemauga has been renamed as Gaga'emauga

        * Gagaifomauga has been renamed as Gaga'ifomauga

        * Satupaitea has been renamed as Satupa'itea

        * Vaao Fonoti has been renamed as Va'a-o-Fonoti

    * Map of Dominican Republic (main map) has been updated.

    * The specification sheet for Dominican Republic (Provinces) has been updated to add entities for 32 separate provinces, as follows:

        * Azua

        * Bahoruco

        * Barahona

        * Dajabón

        * Distrito Nacional

        * Duarte

        * El Seibo

        * Elías Piña

        * Espaillat

        * Hato Mayor

        * Independencia

        * La Altagracia

        * La Romana

        * La Vega

        * María Trinidad Sánchez

        * Monseñor Nouel

        * Monte Cristi

        * Monte Plata

        * Pedernales

        * Peravia

        * Puerto Plata

        * Salcedo

        * Samaná

        * San Cristóbal

        * San José de Ocoa

        * San Juan

        * San Pedro de Macorís

        * Santiago

        * Santiago Rodríguez

        * Santo Domingo

        * Sánchez Ramírez

        * Valverde

    * Map of North Korea (main map) has been completely retraced.

    * Borders of the following maps have been updated:

        * North Hwanghae

        * Pyongyang

        * South Pyongan

        * Kangwon

        * North Pyongan

        * South Hwanghae

    * A new entity for the province Nampo has been added to the specification sheet for North Korea.

    * The following long names have been updated in the specification sheet:

        * Chagang-do has been renamed as Chagang.

        * Hamgyng-bukto has been renamed as North Hamgyong.

        * Hamgyng-namdo has been renamed as South Hamgyong.

        * Hwanghae-bukto has been renamed as North Hwanghae.

        * Hwanghae-namdo has been renamed as South Hwanghae.

        * Kangwn-do has been renamed as Kangwon.

        * P'yngan-bukto has been renamed as North Pyongan.

        * P'yngan-namdo has been renamed as South Pyongan.

        * P'yngyang has been renamed as Pyongyang.

        * Rasn has been renamed as Rason.

        * Yanggang-do has been renamed as Ryanggang.

    * The following maps have been merged with other maps:

        * Kumgangsan

        * Sinuiju

        * Kaesong

    * Internal Canvas Borders of all North Korea Maps have been updated.

    * The following maps have been updated for South Korea:

        * The image for the map of Seoul has been updated. The entity name has been updated to remove -gu.

        * Within the Incheon map, the borders of Ongjin and Jung entities have been updated.

        * Within the Daejeon map, names of all entities have been updated to remove -gu.

        * The borders of the map of Ulsan have been updated.

        * The map name Jejudo has been renamed as Jeju.

    * Within the Gwangju map under South Korea, names of all entities have been updated to remove -gu. Also, the following short names have been updated:

        * BG renamed to BK.

        * SG renamed to SO.

        * NG renamed to NM.

    * The main map of France has been updated from 22 regions to display 27 regions. Long names of the following entities have been updated:

        * Bretagne has been renamed as Brittany.

        * Bourgogne has been renamed as Burgundy.

        * Centre has been renamed as Centre-Val de Loire.

        * Corse has been renamed as Corsica.

        * Ile-de-France has been renamed as Île-de-France.

        * Basse-Normandie has been renamed as Lower Normandy.

        * Picardie has been renamed as Picardy.

        * Provence-Alpes-Côte D'Azur has been renamed as PACA (Provence-Alpes-Côte D'Azur).

        * Haute-Normandie has been renamed as Upper Normandy.

    * France (2016) map has been updated from 13 regions to 18 regions (including 5 overseas ones). The 5 overseas regions have been added as a single entity.

    * France (Departments) map has been updated from 96 departments to 97 departments, with 5 new overseas regions. Metropolitan Lyon has been added as the new entity. The following entities have been renamed:

        * Alpes de Haute Provence has been renamed as Alpes-de-Haute-Provence.

        * Hautes Alpes has been renamed as Hautes-Alpes.

        * Alpes Maritimes has been renamed as Alpes-Maritimes.

        * Ardeche has been renamed as Ardèche.

        * Ariege has been renamed as Ariège.

        * Bouches du Rhone has been renamed as Bouches-du-Rhône.

        * Charente Maritime has been renamed as Charente-Maritime.

        * Correze has been renamed as Corrèze.

        * Corse du Sud has been renamed as Corse-du-Sud.

        * Haute Corse has been renamed as Haute-Corse.

        * Cote d'Or has been renamed as Côte-d'Or

        * Cotes d'Armor has been renamed as Côtes-d'Armor.

        * Drome has been renamed as Drôme.

        * Eure et Loir has been renamed as Eure-et-Loir

        * Finistere has been renamed as Finistère.

        * Haute Garonne has been renamed as Haute-Garonne.

        * Herault has been renamed as Hérault.

        * Ille et Vilaine has been renamed as Ille-et-Vilaine.

        * Indre et Loire has been renamed as Indre-et-Loire.

        * Isere has been renamed as Isère.

        * Loir et Cher has been renamed as Loir-et-Cher.

        * Haute Loire has been renamed as Haute-Loire.

        * Loire Atlantique has been renamed as Loire-Atlantique.

        * Lot et Garonne has been renamed as Lot-et-Garonne.

        * Lozere has been renamed as Lozère.

        * Maine et Loire has been renamed as Maine-et-Loire.

        * Haute Marne has been renamed as Haute-Marne.

        * Meurthe et Moselle has been renamed as Meurthe-et-Moselle.

        * Nievre has been renamed as Nièvre.

        * Pas de Calais has been renamed as Pas-de-Calais.

        * Puy de Dome has been renamed as Puy-de-Dôme.

        * Pyrenees Atlantiques has been renamed as Pyrénées-Atlantiques.

        * Hautes Pyrenees has been renamed as Hautes-Pyrénées.

        * Pyrenees Orientales has been renamed as Pyrénées-Orientales

        * Bas Rhin has been renamed as Bas-Rhin.

        * Haut Rhin has been renamed as Haut-Rhin.

        * Rhone has been renamed as Rhône.

        * Haute Saone has been renamed as Haute-Saône.

        * Saone et Loire has been renamed as Saône-et-Loire.

        * Haute Savoie has been renamed as Haute-Savoie.

        * Ville de Paris has been renamed as Paris.

        * Seine Maritime has been renamed as Seine-Maritime.

        * Seine et Marne has been renamed as Seine-et-Marne.

        * Deux Sevres has been renamed as Deux-Sèvres.

        * Tarn et Garonne has been renamed as Tarn-et-Garonne.

        * Vendee has been renamed as Vendée.

        * Haute Vienne has been renamed as Haute-Vienne.

        * Val d'Oise has been renamed as Val-d'Oise.

        * French Guiana has been renamed as Guyane.

        * Réunion has been renamed as La Réunion.

    * The specification sheet for Iran has been updated with the following entities:

        * Iran Regions (main map)

        * Isfahan

        * Kermanshah

        * Mashhad

        * Tabriz

        * Tehran

    * The specification sheet for Vietnam (Administrative Regions) has been updated with the following entities:

        * Central Highlands

        * Mekong River Delta

        * North Central

        * Northeast

        * Northwest

        * Red River Delta

        * South Central Coast

        * Southeast

        * Vietnam Region

    * The specification sheets for separate provinces in Zambia have been updated  for the following entities:

        * Central has been renamed as Central Zambia

        * Eastern has been renamed as Eastern Zambia

        * North-Western has been renamed as North Western Zambia

        * Northern has been renamed as Northern Zambia

        * Southern has been renamed as Southern Zambia

        * Western has been renamed as Western Zambia

    * The specification sheet for Zambia has been updated to include the following entities:

        * Central Zambia

        * Copperbelt

        * Eastern Zambia

        * Luapula

        * Lusaka

        * Muchinga

        * Northern Zambia

        * North Western Zambia

        * Southern Zambia

        * Western Zambia

    * The following entries have been renamed in the main map for Tajikistan:

        * Sogd has been renamed as Sughd.

        * Regions of Republican Subordination has been renamed as Region of Republican Subordination.

        * Badakhshoni Kuni has been renamed as Gorno-Badakhshan.

    * The entry for Khatlon district has been added to the main map.

## Fixed

* In touch devices, tooltip was not hiding on touch outside the chart.

* The height of the chart canvas was contracting when updated using the `setChartAttribute()` function.

* Y-axis values were getting cropped when `yAxisMaxValue` attribute value was set in decimals.

* In Treemap charts, label text were overflowing and was accumulating at the corners of the chart.

* In Real-time charts, request for updated data was being sent to data source immediately after the chart was rendered, bypassing the specified update interval.

* Links were not working in funnel & pyramid charts when `enableSlicing` attribute was disabled.

* In Stacked charts that included line, such as Stacked Column 2D Line, multiple line series were considered as stacked, which led to improper axis limits.

* In Gantt charts, data table and process label column was getting displaced when their width was adjusted by dragging.

* In Pie and Doughnut charts 3D, `dataIndex` was giving wrong values from data-plot events.

* Combinations of some special characters were not getting encoded in the tooltips of real-time charts when fed from the server.

* In Stacked Area 2D charts, plots would not render properly when stacked with 100%, if there was a zero value.

* Data plots were not getting displayed in logarithmic charts if the plot values were set less than `1` or had more than 10 decimal places.

* Category labels were not drawn correctly, if padding was applied to the `<div>` tag.

* A blank XLS file was getting exported when `setChartAttribute()` method was used.

* If there were multiple charts in a page, the plot values of all charts wouldn't appear unless the rendering animation was completed for all charts.

* `feedData()` was not working, when data was fed with dial/pointer id in Angular Gauges and Horizontal Linear Gauges.

* FusionCharts was adding itself to the global window scope even if it was required using an AMD loader.

* India main map was getting tilted during rendering.

* `getCSVData()` was not returning the complete data(`id` and `value`) when plots were not selected. It was only returning the `id`.

* Experimental API `enableFirebugLite` has been removed from the Suite, as most of the browsers now have their own debugger.

* Following are the list of attributes which have been removed from the FusionCharts XT Suite:

    * `Annrenderdelay`

    * `btnTextColor`

    * `btnFontSize`

    * `formBtnWidth`

    * `formBtnBorderColor`

    * `formBtnBgColor`

    * `btnPadding`

    * `btnSpacing`

    * `restoreBtnWidth`

    * `restoreBtnBorderColor`

    * `restoreBtnBgColor`

    * `clickBubbles`

    * The deprecated methods `getXML()` & `setDataXML()` have been removed.

    * The deprecated method `setCurrentRenderer()` has been removed.

    * The method `getChartFromId()` has been removed. Use `getObjectReference()` instead.

    * The method `getMapFromId()` has been removed.  Use `getObjectReference()` instead.

## Deprecated Attributes

    * `showFormBtn` (deprecated)

    * `formBtnTitle` (deprecated)

    * `showRestoreBtn` (deprecated)

    * `restoreBtnTitle` (deprecated)

    * `setTransparent()` method is deprecated. Use `containerBackgroundOpacity` instead.

    * `ref` property is deprecated. Use `getObjectReference()` instead.

    * `dataXMLInvalid` event is deprecated. Use `dataInvalid` instead.