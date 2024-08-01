import firebase_app from "../config"; // Ensure your config file correctly exports the Firebase app instance
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return { result, error: null };
    } catch (error) {
        // Log the error or handle it as needed
        console.error("Error signing up:", error);
        return { result: null, error };
    }
}
