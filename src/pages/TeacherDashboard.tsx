import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import {
  db,
} from "../services/firebase";

import {
  createTopic,
} from "../services/topic";

import {
  getStudents,
} from "../services/user";

import {
  approveSubmission,
} from "../services/submission";

import DashboardLayout
from "../components/layout/DashboardLayout";

const teacherItems = [
  {
    label: "داشبورد",
    to: "/teacher",
  },
  {
    label: "کتابخانه",
    to: "/library",
  },
];

export default function TeacherDashboard() {
  const [students, setStudents] =
    useState<any[]>([]);

  const [topics, setTopics] =
    useState<any[]>([]);

  const [submissions,
    setSubmissions] =
    useState<any[]>([]);

  const [title, setTitle] =
    useState("");

  const [selectedStudent,
    setSelectedStudent] =
    useState("");

  const fetchTopics =
    async () => {
      const snapshot =
        await getDocs(
          collection(
            db,
            "topics"
          )
        );

      setTopics(
        snapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        )
      );
    };

  const fetchSubmissions =
    async () => {
      const snapshot =
        await getDocs(
          collection(
            db,
            "submissions"
          )
        );

      setSubmissions(
        snapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        )
      );
    };

  useEffect(() => {
    fetchTopics();
    fetchSubmissions();

    getStudents().then(
      setStudents
    );
  }, []);

  const handleCreate =
    async () => {
      if (
        !title ||
        !selectedStudent
      ) {
        return alert(
          "تمام فیلدها را پر کنید"
        );
      }

      await createTopic(
        title,
        selectedStudent
      );

      setTitle("");
      setSelectedStudent("");

      fetchTopics();
    };

  return (
    <DashboardLayout
      items={teacherItems}
    >
      <div className="p-8">

        <h1 className="text-4xl font-bold mb-10">
          پنل استاد
        </h1>

        <div className="grid md:grid-cols-3 gap-5 mb-10">

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl">
            <p>کل مأموریت‌ها</p>
            <h2 className="text-3xl font-bold">
              {topics.length}
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl">
            <p>دانشجویان</p>
            <h2 className="text-3xl font-bold">
              {students.length}
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl">
            <p>ارسالی‌ها</p>
            <h2 className="text-3xl font-bold">
              {submissions.length}
            </h2>
          </div>

        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl mb-10">

          <h2 className="text-2xl mb-5">
            ایجاد مأموریت
          </h2>

          <input
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            placeholder="عنوان"
            className="w-full p-3 rounded-xl border mb-3"
          />

          <select
            value={selectedStudent}
            onChange={(e) =>
              setSelectedStudent(
                e.target.value
              )
            }
            className="w-full p-3 rounded-xl border"
          >
            <option value="">
              انتخاب دانشجو
            </option>

            {students.map(
              (student) => (
                <option
                  key={student.uid}
                  value={
                    student.uid
                  }
                >
                  {student.name}
                </option>
              )
            )}
          </select>

          <button
            onClick={handleCreate}
            className="
            mt-4
            bg-emerald-500
            text-white
            px-6
            py-3
            rounded-xl
            "
          >
            ایجاد مأموریت
          </button>

        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl">

          <h2 className="text-2xl mb-5">
            ارسال‌های دانشجویان
          </h2>

          {submissions.map(
            (submission) => (
              <div
                key={submission.id}
                className="
                border-b
                border-slate-200
                dark:border-slate-700
                py-4
                "
              >
                <a
                  href={
                    submission.videoUrl
                  }
                  target="_blank"
                >
                  مشاهده ویدئو
                </a>

                <button
                  onClick={async () => {
                    await approveSubmission(
                      submission.id
                    );

                    fetchSubmissions();
                  }}
                  
                  className="
                  mr-4
                  bg-emerald-500
                  text-white
                  px-4
                  py-1
                  rounded
                  "
                >
                  تایید
                </button>
              </div>
            )
          )}

        </div>

      </div>
    </DashboardLayout>
  );
}