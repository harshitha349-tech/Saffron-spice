import { useTheme } from "../context/ThemeContext";

// Weekly order data — edit these numbers to change the chart
const data = [
  { day: "Mon", orders: 40 },
  { day: "Tue", orders: 70 },
  { day: "Wed", orders: 55 },
  { day: "Thu", orders: 90 },
  { day: "Fri", orders: 65 },
  { day: "Sat", orders: 80 },
  { day: "Sun", orders: 50 },
];

const CHART_HEIGHT = 180; // pixels of usable bar area
const MAX_VALUE = 100;    // keeps bar heights consistent

function AnalyticsPanel() {
  const { darkMode } = useTheme();

  return (
    <div className={`rounded-3xl border shadow-sm p-6 transition-colors ${
      darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
    }`}>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
            Weekly Orders
          </h2>
          <p className={`text-sm mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Orders received this week
          </p>
        </div>

        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
          Last 7 Days
        </span>
      </div>

      {/* SVG Bar Chart */}
      <svg
        viewBox={`0 0 ${data.length * 60} ${CHART_HEIGHT + 40}`}
        className="w-full"
        aria-label="Weekly orders bar chart"
      >
        {data.map((item, i) => {
          const barH = (item.orders / MAX_VALUE) * CHART_HEIGHT;
          const x = i * 60 + 10;         // left edge of each bar column
          const barW = 38;
          const barY = CHART_HEIGHT - barH;

          return (
            <g key={item.day}>
              {/* Value label above the bar */}
              <text
                x={x + barW / 2}
                y={barY - 6}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill={darkMode ? "#94a3b8" : "#64748b"}
              >
                {item.orders}
              </text>

              {/* Bar — gradient from orange-300 to orange-500 */}
              <defs>
                <linearGradient id={`bar-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>

              <rect
                x={x}
                y={barY}
                width={barW}
                height={barH}
                rx="6"
                fill={`url(#bar-grad-${i})`}
                opacity="0.9"
              />

              {/* Day label below chart */}
              <text
                x={x + barW / 2}
                y={CHART_HEIGHT + 20}
                textAnchor="middle"
                fontSize="11"
                fill={darkMode ? "#94a3b8" : "#94a3b8"}
              >
                {item.day}
              </text>
            </g>
          );
        })}

        {/* Baseline */}
        <line
          x1="0"
          y1={CHART_HEIGHT}
          x2={data.length * 60}
          y2={CHART_HEIGHT}
          stroke={darkMode ? "#334155" : "#e2e8f0"}
          strokeWidth="1"
        />
      </svg>

    </div>
  );
}

export default AnalyticsPanel;