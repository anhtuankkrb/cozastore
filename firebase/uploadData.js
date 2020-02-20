const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, 'https://coza-store.firebaseio.com');

// Start exporting your data
firestoreService
    .restore('data.json') //Upload data lên server từ file data.json