import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyAE-FYvTNXqsWlgdiOoVIv1d3nvxR_1nME",
  authDomain: "test-notification-95205.firebaseapp.com",
  projectId: "test-notification-95205",
  storageBucket: "test-notification-95205.appspot.com",
  messagingSenderId: "787979955567",
  appId: "1:787979955567:web:0030b6e6b49cecbb94cc9a",
  measurementId: "G-816HHCHVQZ",
};

const vapidKey =
  "BMlaYezmBaXatqf98y1AMxbmkSNWhxkuUCiQOteCu0IQZhs51fee09tcwqFpyCwKkguZOP8Rbc6D8EgxNyZ07YY"; // Replace with your checked VAPID key

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const requestFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted.");

      const currentToken = await getToken(messaging, { vapidKey });

      if (currentToken) {
        return currentToken; 
      } else {
        console.error("Failed to generate FCM token.");
        return null; 
      }
    } else {
      console.warn("Notification permission denied.");
      return null;
    }
  } catch (err) {
    console.error("Error getting FCM token:", err);
  }
};

onMessage(messaging, (payload) => {
  console.log("Message received in foreground:", payload);
});
