import { useEffect, useState } from "react";
import {
  createTopic,
  getTopics,
} from "../services/topic";

import {
  getSubmissions,
  approveSubmission,
} from "../services/submission";


import {
  getStudents,
} from "../services/user";


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

  const [
    selectedStudent,
    setSelectedStudent] =
    useState<number | null>(
    null
  );

  const fetchTopics =
  async () => {
    const data =
      await getTopics();

    setTopics(data);
  };

  
  const fetchSubmissions =
  async () => {
    const data =
      await getSubmissions();

    setSubmissions(data);
  };

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
      setSelectedStudent(null);

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
            value={selectedStudent ?? ""}
            onChange={(e) =>
              setSelectedStudent(
                Number(e.target.value)
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
                  key={student.id}
                  value={
                    student.id
                  }
                >
                  {student.full_name}
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