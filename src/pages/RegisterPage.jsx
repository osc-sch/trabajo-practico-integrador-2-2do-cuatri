import { useForm } from "../hooks/useForm.js";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const { handleChange, handleSubmit } = useForm({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  return (
    <main className="flex justify-center min-h-screen items-center bg-gradient-to-b from-gray-900 to-red-600 ">
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
                name="name"
                onChange={handleChange}
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
                name="lastname"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors "
              />
            </div>
          </div>

          <div>
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
              onChange={handleChange}
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
              onChange={handleChange}
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

            <input
              type="submit"
              value="Registrarse"
              onClick={handleSubmit}
              className=" w-full block text-gray-700 font-bold bg-red-400  px-2 py-2 rounded-sm hover:bg-red-500 hover:text-gray-800 transition-colors cursor-pointer "
            />
            <div className="flex justify-center mt-4">
              <p>
                Ya tienese una Cuenta?{" "}
                <Link to="/login" className=" text-red-600 font-bold underline">
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
