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

// Utilidad para cargar y mostrar archivos de una subcarpeta
function cargarArchivosSubcarpeta(rutaSubcarpeta, contenedorID, tiposPermitidos) {
  const refCarpeta = storage.ref(rutaSubcarpeta);
  const contenedor = document.getElementById(contenedorID);

  refCarpeta.listAll().then(res => {
    if (res.items.length === 0) {
      contenedor.innerHTML = "<p style='text-align:center;'>No hay archivos.</p>";
      return;
    }

    res.items.forEach(itemRef => {
      itemRef.getDownloadURL().then(url => {
        const nombreArchivo = itemRef.name.toLowerCase();
        const extension = nombreArchivo.split('.').pop();

        if (!tiposPermitidos.includes(extension)) return;

        const card = document.createElement("div");
        card.className = "gallery-item";

        const media = document.createElement(tiposPermitidos.includes('mp4') ? "video" : "img");
        media.src = url;
        if (media.tagName === "VIDEO") media.controls = true;

        const label = document.createElement("p");
        label.className = "file-name";
        label.textContent = itemRef.name;

        card.appendChild(media);
        card.appendChild(label);
        contenedor.appendChild(card);
      }).catch(err => {
        console.error("Error obteniendo URL:", err);
      });
    });
  }).catch(err => {
    console.error("Error listando archivos de la carpeta:", rutaSubcarpeta, err);
  });
}

auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const uid = user.uid;
  document.getElementById("debug-uid").innerText = `UID: ${uid}`;

  // Cargar fotos desde la subcarpeta
  cargarArchivosSubcarpeta(`users_${uid}/fotos`, "photo-list", ["jpg", "jpeg", "png", "webp"]);

  // Cargar videos si en el futuro agregas la carpeta
  cargarArchivosSubcarpeta(`users_${uid}/videos`, "video-list", ["mp4", "mov", "webm"]);
});
