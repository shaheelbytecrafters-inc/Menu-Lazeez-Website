import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE-FYvTNXqsWlgdiOoVIv1d3nvxR_1nME",
  authDomain: "test-notification-95205.firebaseapp.com",
  projectId: "test-notification-95205",
  storageBucket: "test-notification-95205.appspot.com",
  messagingSenderId: "787979955567",
  appId: "1:787979955567:web:0030b6e6b49cecbb94cc9a",
  measurementId: "G-816HHCHVQZ",
};

// Correct VAPID key
const vapidKey =
  "BMlaYezmBaXatqf98y1AMxbmkSNWhxkuUCiQOteCu0IQZhs51fee09tcwqFpyCwKkguZOP8Rbc6D8EgxNyZ07YY"; // Replace with your checked VAPID key

const app = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(app);

// Request FCM Token
export const requestFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted.");

      const currentToken = await getToken(messaging, { vapidKey });

      if (currentToken) {
        // console.log("FCM token generated:", currentToken);
        return currentToken; // Return the token
      } else {
        console.error("Failed to generate FCM token.");
        return null; // Handle if token is not returned
      }
    } else {
      console.warn("Notification permission denied.");
      return null; // Permission denied
    }
  } catch (err) {
    console.error("Error getting FCM token:", err);
  }
};

// Optionally, handle foreground messages
onMessage(messaging, (payload) => {
  console.log("Message received in foreground:", payload);
  // Customize notification handling here if necessary
});
