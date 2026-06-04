import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

export const createTopic = async (title: string, assignedTo: string) => {
  return addDoc(collection(db, "topics"), {
    title,
    assignedTo,
    status: "pending",
    progress: 0,
  });
};