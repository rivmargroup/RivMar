// profile.js

// Firebase config (usa tu propia config si no la tienes ya inicializada)
const firebaseConfig = {
  apiKey: "AIzaSyALCBhybMXTS_SPzCQ13YEkWBwvPv-_QZY",
  authDomain: "rivmar-clientes.firebaseapp.com",
  projectId: "rivmar-clientes",
  storageBucket: "rivmar-clientes.appspot.com",
  messagingSenderId: "631400927733",
  appId: "1:631400927733:web:aab935d3fafb07e07490bc"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

window.onload = function () {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      // Si está logueado, mostramos la info
      document.getElementById('username').innerText = user.displayName || 'Anonymous';
      document.getElementById('email').innerText = user.email;
    } else {
      // Si no hay usuario, redirige al login
      window.location.href = 'login.html';
    }
  });

  // Botón de logout
  document.getElementById('logoutBtn').addEventListener('click', function () {
    auth.signOut().then(() => {
      window.location.href = 'login.html';
    });
  });
};
