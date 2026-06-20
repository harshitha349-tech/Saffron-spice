import { useTheme } from "../context/ThemeContext";

function InsightsPanel({ totalOrders, totalMenu, pendingOrders, deliveredOrders }) {
  const { darkMode } = useTheme();

  const rows = [
    { label: "Total Orders",    value: totalOrders,    icon: "📦", tone: "text-blue-600 bg-blue-50" },
    { label: "Menu Items",      value: totalMenu,      icon: "🍔", tone: "text-orange-600 bg-orange-50" },
    { label: "Pending Orders",  value: pendingOrders,  icon: "⏳", tone: "text-amber-600 bg-amber-50" },
    { label: "Delivered Orders",value: deliveredOrders,icon: "✅", tone: "text-green-600 bg-green-50" },
  ];

  return (
    <div className={`rounded-3xl border shadow-sm p-6 transition-colors ${
      darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
    }`}>

      <h2 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}>
        Business Insights
      </h2>

      <div className="space-y-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className={`flex items-center justify-between rounded-2xl px-3 py-3 transition-colors ${
              darkMode ? "hover:bg-slate-700" : "hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${row.tone}`}>
                {row.icon}
              </span>
              <span className={`font-medium ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                {row.label}
              </span>
            </div>
            <span className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default InsightsPanel;