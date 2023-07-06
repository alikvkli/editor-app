import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore importu eklenmiştir

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Firestore'a erişim için gerekli firestore değişkeni oluşturulmuştur
const firestore = getFirestore(app);

export const authWithGoogle = async (): Promise<any> => {
  const { user } = await signInWithPopup(auth, provider);
  return user;
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};

export default app;

// Firestore'u da export ediyoruz
export { firestore };
