import { useTheme } from "../context/ThemeContext";

function StatCard({ title, value, icon }) {
  const { darkMode } = useTheme();

  return (
    <div className={`rounded-3xl p-6 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
      darkMode
        ? "bg-slate-800 border-slate-700"
        : "bg-white border-slate-200"
    }`}>

      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400" />

      <div className="flex justify-between items-start">

        {/* Left — label + number */}
        <div>
          <p className={`text-xs uppercase tracking-widest font-semibold ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${darkMode ? "text-white" : "text-slate-800"}`}>
            {value}
          </h2>

          <div className="mt-5 inline-flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
            <span>▲</span>
            <span>Updated Today</span>
          </div>
        </div>

        {/* Right — icon bubble */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-2xl shadow-md">
          {icon}
        </div>

      </div>
    </div>
  );
}

export default StatCard;