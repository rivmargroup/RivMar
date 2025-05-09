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
const auth = firebase.auth();
const storage = firebase.storage();

document.addEventListener("DOMContentLoaded", () => {
  auth.onAuthStateChanged(async (user) => {
    if (!user) return window.location.href = "login.html";

    const gallery = document.getElementById("file-gallery");
    const folder = `clients/${user.uid}/`;

    try {
      const listRef = storage.ref().child(folder);
      const result = await listRef.listAll();

      if (result.items.length === 0) {
        gallery.innerHTML = "<p>No files found.</p>";
        return;
      }

      for (const itemRef of result.items) {
        const url = await itemRef.getDownloadURL();
        const fileName = itemRef.name.toLowerCase();

        const div = document.createElement("div");
        div.className = "gallery-item";

        if (fileName.endsWith(".jpg") || fileName.endsWith(".png")) {
          const img = document.createElement("img");
          img.src = url;
          div.appendChild(img);
        } else if (fileName.endsWith(".mp4")) {
          const video = document.createElement("video");
          video.src = url;
          video.controls = true;
          div.appendChild(video);
        }

        gallery.appendChild(div);
      }
    } catch (err) {
      gallery.innerHTML = "<p>Error loading files.</p>";
      console.error(err);
    }
  });
});
