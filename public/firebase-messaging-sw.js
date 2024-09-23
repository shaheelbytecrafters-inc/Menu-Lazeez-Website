importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js"
);

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAE-FYvTNXqsWlgdiOoVIv1d3nvxR_1nME",
  authDomain: "test-notification-95205.firebaseapp.com",
  projectId: "test-notification-95205",
  storageBucket: "test-notification-95205.appspot.com",
  messagingSenderId: "787979955567",
  appId: "1:787979955567:web:0030b6e6b49cecbb94cc9a",
  measurementId: "G-816HHCHVQZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);

  // Customize notification here if payload.notification exists
  const notificationTitle = payload.notification?.title || "Default Title";
  const notificationOptions = {
    body: payload.notification?.body || "Default Body",
    icon: payload.notification?.icon || "/firebase-logo.png", // default icon if none is provided
  };

  // Show notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});
