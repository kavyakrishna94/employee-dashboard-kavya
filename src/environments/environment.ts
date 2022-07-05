// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  VALIDATION_EXPRESSION: /^[-'".\w\s]+$/,
  API_HOST: 'https://jsonplaceholder.typicode.com/',
  API_PATH: '',
  USERNAME: 'fingent',
  PASSWORD: 'fingent',
  NAME: 'John Doe',
  EMAIL: 'john.doe@gmail.com',
  ROLE: 'admin',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
