export default function TopicCard({
  topic,
}: any) {
  return (
    <div
      className="
      bg-white
      dark:bg-slate-900
      rounded-3xl
      p-6
      shadow-lg
      border
      border-slate-200
      dark:border-slate-800
      hover:-translate-y-1
      hover:shadow-xl
      transition-all
      "
    >
      <div className="flex items-center justify-between mb-5">

        <div className="text-5xl">
          {topic.image || "📚"}
        </div>

        <span
          className="
          px-3
          py-1
          rounded-full
          text-xs
          bg-emerald-500/20
          text-emerald-500
          "
        >
          {topic.status ||
            "pending"}
        </span>

      </div>

      <h3 className="text-xl font-bold mb-3">
        {topic.title}
      </h3>

      <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">
        موضوع آموزشی تخصیص داده شده توسط استاد
      </p>

      <div className="mb-3 flex justify-between text-sm">
        <span>
          پیشرفت
        </span>

        <span>
          {topic.progress || 0}%
        </span>
      </div>

      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="
          h-full
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
          "
          style={{
            width: `${topic.progress || 0}%`,
          }}
        />
      </div>

      <button
        className="
        mt-5
        w-full
        py-3
        rounded-xl
        bg-indigo-600
        hover:bg-indigo-700
        text-white
        font-medium
        "
      >
        مشاهده جزئیات
      </button>
    </div>
  );
}