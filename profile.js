// Firebase Config
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

auth.onAuthStateChanged(user => {
  if (user) {
    const name = user.displayName || "User";
    const email = user.email;

    document.getElementById("user-name").textContent = name;
    document.getElementById("user-email").textContent = email;
  } else {
    window.location.href = "login.html"; // redirect if not logged in
  }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
});
