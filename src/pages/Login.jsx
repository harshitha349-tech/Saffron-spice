import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ─── Valid credentials ────────────────────────────────────────────────────────
// Username : admin
// Password : admin123
// These are checked below — change them here if you want different credentials.
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin123";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a short loading delay so it feels like a real login
    setTimeout(() => {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        setError("Incorrect username or password. Please try again.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">

      <div className="w-full max-w-md">

        {/* Brand header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4"></div>
          <h1 className="text-4xl font-extrabold text-orange-400 tracking-wide">
            Saffron Spice
          </h1>
          <p className="text-slate-400 mt-2">Restaurant Admin Panel</p>
        </div>

        {/* Login card */}
        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">

          <h2 className="text-2xl font-bold text-white mb-1">
            Welcome back!
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            Sign in to manage your restaurant
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block text-slate-300 font-medium mb-2 text-sm">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 rounded-xl px-4 py-3 text-sm">
                 {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-bold py-3 rounded-xl transition-colors"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          {/* Credentials hint for demo / viva */}
          <div className="mt-6 bg-slate-700/50 rounded-2xl p-4 border border-slate-600">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Demo Credentials
            </p>
            <p className="text-slate-300 text-sm">
              Username: <span className="text-orange-400 font-mono">admin</span>
            </p>
            <p className="text-slate-300 text-sm">
              Password: <span className="text-orange-400 font-mono">admin123</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;