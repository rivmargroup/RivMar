// Firebase Config
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
const auth = firebase.auth();

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Logout button listener
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      auth.signOut().then(() => {
        window.location.href = "login.html";
      });
    });
  }

  // Handle auth state
  auth.onAuthStateChanged(user => {
    if (user) {
      const name = user.displayName || "User";
      const email = user.email;

      const nameEl = document.getElementById("user-name");
      const emailEl = document.getElementById("user-email");

      if (nameEl) nameEl.textContent = name;
      if (emailEl) emailEl.textContent = email;
    } else {
      // Redirect if not logged in
      window.location.href = "login.html";
    }
  });
});
