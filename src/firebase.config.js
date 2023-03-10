import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDINdGZhZuEPaec1INrPk9_u8W2wez6XnU",
    authDomain: "e-commerce-39a3a.firebaseapp.com",
    databaseURL: "https://e-commerce-39a3a-default-rtdb.firebaseio.com",
    projectId: "e-commerce-39a3a",
    storageBucket: "e-commerce-39a3a.appspot.com",
    messagingSenderId: "502229679463",
    appId: "1:502229679463:web:fd6ba6ec4a27fd883183c2"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,firestore,storage};