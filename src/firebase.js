// Import the firebase package downloaded to this project folder through npm
import firebase from "firebase";
// Define a variable of the project name, which is used in the config parameters for firebase

const firebaseProjectName = process.env.REACT_APP_FIREBASE_PROJECT_NAME;

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${firebaseProjectName}.firebaseapp.com`,
    databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
    projectId: `${firebaseProjectName}`
};

firebase.initializeApp(config);

export default firebase;
