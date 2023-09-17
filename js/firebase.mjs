 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyApLoQquFIoAGJ5phIxAp5UWrmyp27w6lI",
   authDomain: "my-blog-f15d2.firebaseapp.com",
   projectId: "my-blog-f15d2",
   storageBucket: "my-blog-f15d2.appspot.com",
   messagingSenderId: "166989452556",
   appId: "1:166989452556:web:0f75215f13d744664ca529",
   measurementId: "G-6SV46PWM2N"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();

 export{app,auth,createUserWithEmailAndPassword}