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
  if (user) {
    const uid = user.uid;
    const userFolder = `users_${uid}/`; // carpeta personalizada por UID
    const storageRef = storage.ref(userFolder);
    const fileList = document.getElementById("file-list");

    storageRef.listAll().then(res => {
      res.items.forEach(itemRef => {
        itemRef.getDownloadURL().then(url => {
          const fileName = itemRef.name;
          const ext = fileName.split('.').pop().toLowerCase();
          const isVideo = ['mp4', 'mov', 'webm'].includes(ext);

          const container = document.createElement('div');
          container.classList.add('file-item');

          const media = document.createElement(isVideo ? 'video' : 'img');
          media.src = url;
          if (isVideo) media.controls = true;
          media.style.width = '100%';
          media.style.borderRadius = '8px';

          const caption = document.createElement('p');
          caption.textContent = fileName;
          caption.style.marginTop = '8px';
          caption.style.fontSize = '14px';
          caption.style.color = '#333';

          container.appendChild(media);
          container.appendChild(caption);
          fileList.appendChild(container);
        });
      });
    }).catch(err => {
      console.error("Error al listar archivos:", err);
    });
  } else {
    window.location.href = "login.html";
  }
});
