import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBj_u13BaI07De68VwzF8kqBHGkDfp8uX0",
  authDomain: "clone-ui-4bb34.firebaseapp.com",
  projectId: "clone-ui-4bb34",
  storageBucket: "clone-ui-4bb34.appspot.com",
  messagingSenderId: "377512173958",
  appId: "1:377512173958:web:8249bf0932eede2818cc07"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider =new GoogleAuthProvider();

export default app