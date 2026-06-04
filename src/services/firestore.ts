import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const createUserDocument = async (
  uid: string,
  name: string,
  email: string,
  role: string
) => {
  await setDoc(doc(db, "users", uid), {
    uid,
    name,
    email,
    role,
  });
};