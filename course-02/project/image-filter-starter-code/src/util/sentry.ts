// //Configuring Sentry logging terminal

// const Sentry = require("@sentry/node");
// // or use es6 import statements
// // import * as Sentry from '@sentry/node';

// const Tracing = require("@sentry/tracing");
// // or use es6 import statements
// // import * as Tracing from '@sentry/tracing';

// Sentry.init({
//   dsn: "https://9f147456ed3f427a839341b66b27d501@o1218632.ingest.sentry.io/6360623",

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

// const transaction = Sentry.startTransaction({
//   op: "test",
//   name: "My First Test Transaction",
// });

// setTimeout(() => {
//   try {
//     foo();
//   } catch (e) {
//     Sentry.captureException(e);
//   } finally {
//     transaction.finish();
//   }
// }, 99);