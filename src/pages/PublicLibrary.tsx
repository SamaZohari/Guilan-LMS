import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../services/firebase";

export default function PublicLibrary() {
  const [topics, setTopics] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetch = async () => {
      const snap =
        await getDocs(
          collection(
            db,
            "topics"
          )
        );

      setTopics(
        snap.docs
          .map((d) => ({
            id: d.id,
            ...d.data(),
          }))
      );

      setLoading(false);
    };

    fetch();
  }, []);

  return (
    <div
      className="
      min-h-screen
      bg-slate-100
      dark:bg-slate-950
      p-10
      "
    >
      <div className="mb-10">

        <h1
          className="
          text-5xl
          font-bold
          mb-3
          "
        >
          کتابخانه عمومی
        </h1>

        <p className="text-slate-500">
          تمامی محتواهای آموزشی منتشر شده
        </p>

      </div>

      {loading ? (
        <p>
          در حال بارگذاری...
        </p>
      ) : (
        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          "
        >
          {topics.map(
            (topic) => (
              <div
                key={topic.id}
                className="
                bg-white
                dark:bg-slate-900
                rounded-3xl
                p-6
                shadow-lg
                hover:-translate-y-1
                transition-all
                "
              >
                <div className="text-5xl mb-4">
                  📚
                </div>

                <h2 className="text-xl font-bold mb-3">
                  {topic.title}
                </h2>

                <p className="text-slate-500 text-sm">
                  وضعیت:
                  {" "}
                  {topic.status}
                </p>

                <button
                  className="
                  mt-5
                  w-full
                  py-3
                  rounded-xl
                  bg-indigo-600
                  text-white
                  "
                >
                  مشاهده
                </button>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}