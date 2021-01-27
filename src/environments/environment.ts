// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl : 'https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels/',
  apiUrlLocal : window.localStorage.getItem('apiWpUrl') + '/wp-json/wphot/v1/',
  mapBoxToken: 'pk.eyJ1Ijoiam92ZXRpdyIsImEiOiJja2s4cWNzN2YwcWFnMnFudGlzNDRuNG9uIn0.gSjizhlSmq0cYVIbOfWvNA'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
