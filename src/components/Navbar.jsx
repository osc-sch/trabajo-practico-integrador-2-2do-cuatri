import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/api/logout", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("No se pudo cerrar sesión. Intentá nuevamente.");
      }

      localStorage.removeItem("isLogeed");
      navigate("/login", { replace: true });
    } catch {
      setError("No se pudo cerrar sesión. Intentá nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="flex w-full flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-yellow-300 to-orange-600 px-4 py-4 shadow-md sm:px-8">
      <h1 className="text-2xl font-medium text-gray-800 underline">TuBlog</h1>
      {error && (
        <p
          className="rounded-md bg-white px-3 py-2 text-sm text-red-700"
          role="alert"
        >
          {error}
        </p>
      )}
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-bold text-orange-800 shadow-sm transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={logout}
        disabled={isLoading}
      >
        {isLoading ? "Cerrando sesión..." : "Cerrar Sesión"}
      </button>
    </nav>
  );
};
