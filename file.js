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

auth.onAuthStateChanged(user => {
  if (user) {
    const uid = user.uid;
    const userFolder = `users_${uid}/`; // correcta estructura de carpeta

    const storageRef = storage.ref(userFolder);

    storageRef.listAll().then((res) => {
      const fileList = document.getElementById("file-list");

      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then(url => {
          const ext = itemRef.name.split('.').pop().toLowerCase();
          const isVideo = ['mp4', 'mov', 'webm'].includes(ext);

          const container = document.createElement('div');
          container.classList.add('file-item');

          const element = document.createElement(isVideo ? 'video' : 'img');
          element.src = url;
          element.controls = isVideo;
          element.width = 300;
          element.style.margin = '10px';

          container.appendChild(element);
          fileList.appendChild(container);
        });
      });
    }).catch(error => {
      console.error("Error listando archivos:", error);
    });
  } else {
    window.location.href = "login.html";
  }
});
