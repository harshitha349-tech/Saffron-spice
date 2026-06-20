import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-900
      via-purple-900
      to-slate-900
      flex
      flex-col
      justify-center
      items-center
      text-white
      "
    >
      <h1 className="text-8xl font-bold mb-4">
        404
      </h1>

      <h2 className="text-3xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-300 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="
        bg-orange-500
        px-6
        py-3
        rounded-xl
        hover:bg-orange-600
        transition
        "
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;