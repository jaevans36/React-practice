import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCOW10PKASH0SKlAm8Ii5NgPTwmL0OVKgI',
	authDomain: 'catch-of-the-day-3b43a.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-3b43a.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
