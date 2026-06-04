import { db } from "./firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export const getStudents = async () => {
  const snapshot = await getDocs(
    collection(db, "users")
  );

  return snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter(
      (user: any) =>
        user.role === "student"
    );
};