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
    <nav className="w-full bg-gray-800 p-2 shadow-lg flex justify-between ">
      <h1 className="text-white font-bold text-xl underline">TuBlog</h1>
      {error && <p className="text-red-400" role="alert">{error}</p>}
      <button
        type="button"
        className="bg-gray-700 p-2 rounded-xl font-medium cursor-pointer hover:bg-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={logout}
        disabled={isLoading}
      >
        {isLoading ? "Cerrando sesión..." : "Cerrar Sesión"}
      </button>
    </nav>
  );
};
