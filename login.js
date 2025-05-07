
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

document.getElementById('login-button').addEventListener('click', () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login successful!"))
    .catch(error => alert("Login failed: " + error.message));
});

document.getElementById('reset-password').addEventListener('click', () => {
  const email = prompt("Enter your email to reset password:");
  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => alert("Password reset email sent"))
      .catch(error => alert(error.message));
  }
});
