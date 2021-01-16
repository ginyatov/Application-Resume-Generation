import firebase from "firebase";

const settings = { timestampsInSnapshots: true };
const firebaseConfig = {
  apiKey: "AIzaSyDLM2kV7Jbgj_ud0l5RoDAaGtnWSK0bsT0",
  authDomain: "vue-course-resume.firebaseapp.com",
  databaseURL: "https://vue-course-resume-default-rtdb.firebaseio.com",
  projectId: "vue-course-resume",
};

firebase
  .initializeApp(firebaseConfig)
  .firestore()
  .settings(settings);

export default firebase;
