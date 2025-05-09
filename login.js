// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyALCBhybMXTS_SPzCQ13YEkWBwvPv-_QZY",
  authDomain: "rivmar-clientes.firebaseapp.com",
  projectId: "rivmar-clientes",
  storageBucket: "rivmar-clientes.appspot.com",
  messagingSenderId: "631400927733",
  appId: "1:631400927733:web:aab935d3fafb07e07490bc"
};

firebase.initializeApp(firebaseConfig);

// Manejo de login con persistencia de sesión
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .then(() => {
      // ✅ Redirige al homepage, no a file.html
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
