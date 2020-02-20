const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

// Kết nối với firebase
firestoreService.initializeApp(serviceAccount, 'https://coza-store.firebaseio.com');

firestoreService
  .backup('products') //Lấy data base từ server về
  .then((data) => console.log(data)) //In data base lấy được ra
