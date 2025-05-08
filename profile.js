// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyALCBhybMXTS_SPzCQ13YEkWBwvPv-_QZY",
  authDomain: "rivmar-clientes.firebaseapp.com",
  projectId: "rivmar-clientes",
  storageBucket: "rivmar-clientes.appspot.com",
  messagingSenderId: "631400927733",
  appId: "1:631400927733:web:aab935d3fafb07e07490bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Show user info on profile page
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const nameEl = document.getElementById("user-name");
    const emailEl = document.getElementById("user-email");

    // Mostrar displayName si existe, sino mostrar "User"
    nameEl.textContent = user.displayName || "User";
    emailEl.textContent = user.email;
  } else {
    window.location.href = "login.html";
  }
});

// Handle logout
document.getElementById("logout-btn").addEventListener("click", () => {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
});
