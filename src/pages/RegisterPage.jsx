import { useState } from "react";
import { useForm } from "../hooks/useForm.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigation = useNavigate();

  const { form, handleInputChange, handleReset } = useForm({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const comparePassword = () => {
    const verifiPassword = document.querySelector("#verify-password").value;
    if (verifiPassword === form.password) {
      return true;
    }

    setErrors([{ msg: "las contraseñas no coinciden" }]);

    return false;
  };

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    setErrors([]);
    event.preventDefault();

    if (!comparePassword()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        handleReset();
        navigation("/login");
      }

      const result = await response.json();

      setErrors(result.errors);
    } catch (error) {
      console.log("esta mal");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    return;
  };

  return (
    <main className="flex justify-center min-h-screen items-center bg-gradient-to-br from-yellow-300 to-orange-600 ">
      <div
        style={{ width: "500px" }}
        className=" shadow-xl bg-white p-6 rounded-lg"
      >
        <h1 className=" tite font-bold border-b-2 border-gray-200 mb-4 text-gray-600">
          Crea una cuenta
        </h1>
        <form>
          <div className=" flex gap-4">
            <div className="flex-1 mb-4">
              <label
                htmlFor="nombre"
                className=" block text-sm font-medium text-gray-500 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="first_name"
                value={form.first_name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="apellido"
                className="block text-sm font-medium text-gray-500 mb-2"
              >
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="last_name"
                value={form.last_name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors "
              />
            </div>
          </div>

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
              onChange={handleInputChange}
              className=" w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors mb-4"
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-500 mb-2 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className=" w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors mb-4"
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
              onChange={handleInputChange}
              className=" w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors mb-2"
            />

            <label
              htmlFor="verify-password"
              className="block text-sm font-medium text-gray-500 mb-2"
            >
              Verificar Contraseña
            </label>
            <input
              type="password"
              id="verify-password"
              className=" w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors mb-2"
            />
            <div>
              {errors.map((error) => (
                <p className="border-b border-red-500  p-2  m-2 text-red-700 font-medium">
                  {error.msg}
                </p>
              ))}
            </div>

            <input
              type="submit"
              value={isLoading ? "Enviando..." : "Registrase"}
              onClick={handleSubmit}
              className=" w-full block text-gray-700 font-bold bg-gray-300  px-2 py-2 rounded-sm hover:bg-gradient-to-br from-yellow-300 to-orange-600 hover:text-gray-800 transition-all cursor-pointer "
            />
            <div className="flex justify-center mt-4">
              <p>
                Ya tienese una Cuenta?{" "}
                <Link to="/login" className=" text-red-500 font-bold underline">
                  Iniciar Sesión
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
