import { useState } from "react";
import { useForm } from "../hooks/useForm.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { form, handleInputChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(null);
    setIsSending(true);

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        localStorage.setItem("isLogeed", true);
        navigate("/home");
      }

      const result = await response.json();

      setErrors(result.errors);
    } catch (error) {
      setIsSending(false);
      console.log(error);
    } finally {
      handleReset();
      setTimeout(() => {
        setIsSending(false);
      }, 2000);
    }
  };

  return (
    <main className="flex justify-center min-h-screen items-center bg-gradient-to-br from-yellow-300 to-orange-600">
      <div
        style={{ width: "500px" }}
        className=" shadow-xl bg-white p-6 rounded-lg"
      >
        <h1 className=" tite font-bold border-b-2 border-gray-200 mb-4 text-gray-600">
          Iniciar Sesión
        </h1>
        <form>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-500 mb-2 "
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              className=" w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors mb-4"
              onChange={handleInputChange}
            />

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              className=" w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors mb-2"
              onChange={handleInputChange}
            />
            {errors &&
              errors.map((error, index) => (
                <p
                  key={index}
                  className="border-b border-red-500  p-2  m-2 text-red-700 font-medium"
                >
                  {error.msg}
                </p>
              ))}
            <input
              type="submit"
              value={isSending ? "Enviando..." : "Iniciar Sesión"}
              className=" w-full block text-gray-700 font-bold bg-gray-300  px-2 py-2 rounded-sm hover:bg-gradient-to-br from-yellow-300 to-orange-600 hover:text-gray-800 transition-colors cursor-pointer "
              onClick={handleSubmit}
            />
            <div className="flex justify-center mt-4">
              <p>
                No tienes una cuenta?{" "}
                <Link
                  to="/register"
                  className=" text-red-600 font-bold underline"
                >
                  Registrarse
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
