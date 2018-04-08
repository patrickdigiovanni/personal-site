// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyD_fJzvUJyv_OOgZj7BPdZS82qTBas6pXg",
    authDomain: "personal-site-226ef.firebaseapp.com",
    databaseURL: "https://personal-site-226ef.firebaseio.com",
    projectId: "personal-site-226ef",
    storageBucket: "personal-site-226ef.appspot.com",
    messagingSenderId: "1014805690586"
  }
};
