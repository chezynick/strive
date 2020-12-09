import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDT_duR9tJxaKbMTTGAr7v_KaR6FggBb7M',
	authDomain: 'strive-441ff.firebaseapp.com',
	projectId: 'strive-441ff',
	storageBucket: 'strive-441ff.appspot.com',
	messagingSenderId: '224807487302',
	appId: '1:224807487302:web:c8d3e387cf39d57870c747',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
