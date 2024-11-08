/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const {onRequest} = require("firebase-functions/v2/https");
const {pubsub} = require("firebase-functions/v2");

const admin = require("firebase-admin");

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
admin.initializeApp();

// Define a sample function
exports.helloWorld = onRequest((req, res) => {
  res.send("Hello from Firebase!");
});

// Import and use your scheduled file cleanup function here
const {deleteOldFiles} = require("./deleteOldFiles");
exports.scheduledFileCleanup = pubsub
    .schedule("*/5 * * * *")
    .onRun(async (context) => {
      await deleteOldFiles();
    });
