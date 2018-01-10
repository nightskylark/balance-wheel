// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAw4K2Q0vgjVFRf63_C8q-ZgE2h0jihB90",
    authDomain: "balance-wheel.firebaseapp.com",
    databaseURL: "https://balance-wheel.firebaseio.com",
    projectId: "balance-wheel",
    storageBucket: "balance-wheel.appspot.com",
    messagingSenderId: "160841311291"
  }
};
