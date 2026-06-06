import { useEffect, useState } from "react";

import { submitVideo } from "../services/submission";
import { getTopics } from "../services/topic";

import { useAuth } from "../context/AuthContext";

import DashboardLayout from "../components/layout/DashboardLayout";
import TopicCard from "../components/ui/TopicCard";

export default function StudentDashboard() {
  const [topics, setTopics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTopics();

        setTopics(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const studentItems = [
    {
      label: "داشبورد",
      to: "/student",
    },
    {
      label: "کتابخانه",
      to: "/library",
    },
  ];

  return (
    <DashboardLayout items={studentItems}>
      <div className="p-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            داشبورد دانشجو
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            مشاهده مأموریت‌ها و ارسال تمرین‌ها
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow">
            <p className="text-slate-500">
              کل مأموریت‌ها
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {topics.length}
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow">
            <p className="text-slate-500">
              در حال انجام
            </p>

            <h2 className="text-3xl font-bold text-orange-500 mt-2">
              {
                topics.filter(
                  (t) =>
                    t.status === "pending"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow">
            <p className="text-slate-500">
              تکمیل شده
            </p>

            <h2 className="text-3xl font-bold text-emerald-500 mt-2">
              {
                topics.filter(
                  (t) =>
                    t.status === "approved"
                ).length
              }
            </h2>
          </div>
        </div>

        <UploadCard
          topics={topics}
          user={user}
        />

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">
            مأموریت‌های من
          </h2>

          {loading ? (
            <p>
              در حال بارگذاری...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {topics.map(
                (topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

function UploadCard({
  topics,
  user,
}: {
  topics: any[];
  user: any;
}) {
  const [videoUrl, setVideoUrl] =
    useState("");

  const [selectedTopic,
    setSelectedTopic] =
    useState("");

  const handleSubmit =
    async () => {
      if (
        !videoUrl ||
        !selectedTopic
      ) {
        alert(
          "همه فیلدها را پر کنید"
        );

        return;
      }

      if (!user) {
        alert(
          "ابتدا وارد حساب شوید"
        );

        return;
      }

      try {
        await submitVideo(
          Number(selectedTopic),
          user.id,
          videoUrl
        );

        alert(
          "تمرین ارسال شد"
        );

        setVideoUrl("");
        setSelectedTopic("");

      } catch (err) {
        console.error(err);

        alert(
          "خطا در ارسال تمرین"
        );
      }
    };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-5">
        ارسال تمرین
      </h2>

      <select
        value={selectedTopic}
        onChange={(e) =>
          setSelectedTopic(
            e.target.value
          )
        }
        className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 mb-4"
      >
        <option value="">
          انتخاب مأموریت
        </option>

        {topics.map(
          (topic: any) => (
            <option
              key={topic.id}
              value={topic.id}
            >
              {topic.title}
            </option>
          )
        )}
      </select>

      <input
        value={videoUrl}
        onChange={(e) =>
          setVideoUrl(
            e.target.value
          )
        }
        placeholder="لینک ویدیو"
        className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800"
      />

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        ارسال
      </button>
    </div>
  );
}