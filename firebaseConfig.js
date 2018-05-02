import * as firebase from 'firebase';

export const firebaseConfig = 
{
	apiKey: "AIzaSyBOxUksAkXzqUDupd3GBlTd1UHOoj4pjgI",
    authDomain: "ihscalendar-9cvf70.firebaseapp.com",
    databaseURL: "https://ihscalendar-9cvf70.firebaseio.com",
    projectId: "ihscalendar-9cvf70",
    storageBucket: "ihscalendar-9cvf70.appspot.com",
    messagingSenderId: "407026238658"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);