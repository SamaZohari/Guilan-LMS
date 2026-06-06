import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
  if (
    !name ||
    !email ||
    !password
  ) {
    alert(
      "لطفا تمام فیلدها را پر کنید"
    );

    return;
  }

  setLoading(true);

  try {
    const response =
      await fetch(
        `${API_URL}/users/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            full_name: name,
            email,
            password,
            role,
          }),
        }
      );

    const data =
      await response.json();

    if (!response.ok) {
      throw new Error(
        JSON.stringify(data)
      );
    }

    alert(
      "ثبت نام موفق بود"
    );

    navigate("/login");
  } catch (err: any) {
    alert(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div 
      dir="rtl" 
      className="min-h-screen bg-gradient-to-br from-slate-950 to-indigo-950 flex items-center justify-center p-6 font-Vazirmatn"
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">
        
        {/* Left Side - Branding */}
        <div className="hidden lg:flex w-5/12 bg-gradient-to-br from-emerald-800 to-teal-900 p-12 flex-col justify-between">
          <div>
            <h1 className="text-white text-6xl font-bold">راهیار</h1>
            <p className="text-emerald-100 mt-4 text-l leading-relaxed">
              بستر هوشمند مدیریت دوره‌های بالینی و مهارتی برای دانشجویان علوم پزشکی سراسر کشور در شرایط محدودیت و بحران
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 bg-white/10 backdrop-blur-3xl rounded-3xl flex items-center justify-center border border-white/20">
              <img
                src="https://r0.image2url.com/uploads/938c2baf9331c3fd_compressed_0729b43a161fae73.webp"
                alt="Hamyar Logo"
                className="rounded-2xl object-contain"
              />
            </div>
          </div>

          <div className="text-emerald-100 text-sm">
            سامانه جامع جابجایی کارآموزی ✨
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="w-full lg:w-7/12 p-12 lg:p-16 flex flex-col">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">ایجاد حساب کاربری</h2>
            <p className="text-gray-600 mt-3 text-lg">
              به خانواده راهیار خوش آمدید! 
            </p>
          </div>

          {/* انتخاب نقش */}
          <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-10 w-fit">
            <button
              onClick={() => setRole("student")}
              className={`px-10 py-3.5 rounded-xl font-medium transition-all ${
                role === "student"
                  ? "bg-white shadow-md text-indigo-700"
                  : "text-gray-600 hover:bg-white/60"
              }`}
            >
              دانشجو
            </button>
            <button
              onClick={() => setRole("teacher")}
              className={`px-10 py-3.5 rounded-xl font-medium transition-all ${
                role === "teacher"
                  ? "bg-white shadow-md text-indigo-700"
                  : "text-gray-600 hover:bg-white/60"
              }`}
            >
              استاد
            </button>
          </div>

          <div className="space-y-7">
            <div>
              <label className="block text-gray-700 text-sm mb-2 font-medium">نام و نام خانوادگی</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="نام کامل شما"
                className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg text-gray-950"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2 font-medium">ایمیل دانشگاهی</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@university.ac.ir"
                className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg text-gray-950"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2 font-medium">رمز عبور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg text-gray-950"
              />
            </div>

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-2xl text-white font-semibold text-lg transition-all disabled:opacity-70 mt-4"
            >
              {loading ? "در حال ثبت‌نام..." : "ثبت‌نام در راهیار"}
            </button>
          </div>

          <div className="mt-8 text-center">
            <a href="/login" className="text-indigo-600 hover:underline">
              از قبل حساب کاربری دارید؟ وارد شوید.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}