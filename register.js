
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

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

document.getElementById('register-button').addEventListener('click', () => {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (!/[A-Z]/.test(password) || password.length < 8) {
    alert("Password must be at least 8 characters and include one uppercase letter.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      return updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`
      });
    })
    .then(() => alert("Account created!"))
    .catch(error => alert("Signup failed: " + error.message));
});
