import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyAPghyRHP98ZOsubANdbXE_uNFWLGqiiWM',
  projectId: 'max-8-crowd',
  databaseURL: 'https://max-8-crowd.firebaseio.com/'
};
var app = firebase.initializeApp(config);
export default app;
