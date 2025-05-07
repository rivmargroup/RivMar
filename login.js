
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyALCBhybMXTS_SPzCQ13YEkWBwvPv-_QZY",
  authDomain: "rivmar-clientes.firebaseapp.com",
  projectId: "rivmar-clientes",
  storageBucket: "rivmar-clientes.appspot.com",
  messagingSenderId: "631400927733",
  appId: "1:631400927733:web:aab935d3fafb07e07490bc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login successful!"))
    .catch(error => alert("Login failed: " + error.message));
};

window.forgotPassword = function() {
  const email = document.getElementById('loginEmail').value;
  if (!email) return alert("Please enter your email first");
  sendPasswordResetEmail(auth, email)
    .then(() => alert("Password reset email sent"))
    .catch(error => alert(error.message));
};
