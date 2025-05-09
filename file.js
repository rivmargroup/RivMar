// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyALCBhybMXTS_SPzCQ13YEkWBwvPv-_QZY",
  authDomain: "rivmar-clientes.firebaseapp.com",
  projectId: "rivmar-clientes",
  storageBucket: "rivmar-clientes.appspot.com",
  messagingSenderId: "631400927733",
  appId: "1:631400927733:web:aab935d3fafb07e07490bc"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();

auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const uid = user.uid;
  const userFolder = `users_${uid}/`;
  const storageRef = storage.ref(userFolder);

  const photoList = document.getElementById("photo-list");
  const videoList = document.getElementById("video-list");
  const noFiles = document.getElementById("no-files");
  const debugUID = document.getElementById("debug-uid");

  if (debugUID) {
    debugUID.textContent = `UID: ${uid}`;
  }

  if (!photoList || !videoList) {
    console.warn("Contenedores no encontrados.");
    return;
  }

  storageRef.listAll().then(res => {
    if (res.items.length === 0) {
      if (noFiles) noFiles.style.display = "block";
      return;
    }

    let foundMedia = false;

    res.items.forEach(itemRef => {
      itemRef.getDownloadURL().then(url => {
        const fileName = itemRef.name;
        const ext = fileName.split('.').pop().toLowerCase();

        const isVideo = ['mp4', 'mov', 'webm'].includes(ext);
        const isImage = ['jpg', 'jpeg', 'png', 'webp'].includes(ext);
        if (!isVideo && !isImage) return;

        foundMedia = true;

        const container = document.createElement("div");
        container.classList.add("gallery-item");

        const media = document.createElement(isVideo ? "video" : "img");
        media.src = url;
        if (isVideo) media.controls = true;

        const label = document.createElement("p");
        label.className = "file-name";
        label.textContent = fileName;

        container.appendChild(media);
        container.appendChild(label);

        if (isImage) {
          photoList.appendChild(container);
        } else {
          videoList.appendChild(container);
        }

      }).catch(err => {
        console.error("Error obteniendo URL del archivo:", err);
      });
    });

    if (!foundMedia && noFiles) {
      noFiles.style.display = "block";
    }

  }).catch(err => {
    console.error("Error listando archivos:", err);
    if (noFiles) noFiles.style.display = "block";
  });
});
