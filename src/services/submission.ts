import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

import {
  addDoc,
  collection
} from "firebase/firestore";

export const submitVideo =
  async (
    topicId: string,
    topicTitle: string,
    videoUrl: string,
    studentId: string,
    studentName: string
  ) => {
    return addDoc(
      collection(
        db,
        "submissions"
      ),
      {
        topicId,
        topicTitle,

        studentId,
        studentName,

        videoUrl,

        status: "pending",

        createdAt:
          new Date(),
      }
    );
  };
  
export const approveSubmission = async (id: string) => {
  await updateDoc(
    doc(db, "submissions", id),
    {
      status: "approved",
    }
  );
};