// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAGCUnu2fOnPWoKS9_dAhnnP3atZkG7okc",
    authDomain: "eth-wallet-tracker.firebaseapp.com",
    databaseURL: "https://eth-wallet-tracker.firebaseio.com",
    projectId: "eth-wallet-tracker",
    storageBucket: "eth-wallet-tracker.appspot.com",
    messagingSenderId: "424264566964"
  }
};
