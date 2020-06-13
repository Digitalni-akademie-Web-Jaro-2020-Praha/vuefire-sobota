import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
const db = firebase
	.initializeApp({
		apiKey: 'AIzaSyD9irs2nKB1xVW6uzDo5ujSYowgmY9gCxw',
		authDomain: 'ukolnicek-a7f16.firebaseapp.com',
		databaseURL: 'https://ukolnicek-a7f16.firebaseio.com',
		projectId: 'ukolnicek-a7f16',
		storageBucket: 'ukolnicek-a7f16.appspot.com',
		messagingSenderId: '965855014489',
		appId: '1:965855014489:web:d48de405726e7ade1f8b48',
	})
	.firestore()

export default db
