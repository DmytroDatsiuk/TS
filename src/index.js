// import {firebase-app} from 'firebase'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDeT-dGvxxhBoToHkpCqsX7i-ne2DJAg_c',
  authDomain: 'filmo-8db62.firebaseapp.com',
  projectId: 'filmo-8db62',
  storageBucket: 'filmo-8db62.appspot.com',
  messagingSenderId: '149168873978',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

console.log(app)
console.log(db)
// console.log(firebase-app())