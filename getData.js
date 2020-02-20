const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, 'https://coza-store.firebaseio.com');

// Start exporting your data
// firestoreService
//   .backup('products') //Xuất data ra

export default function getData(collection) {
  return firestoreService
    .backup(collection) //Xuất data ra
    .then((data) => console.log(data))
}