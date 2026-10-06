import { useState } from "react";
import { useForm } from "../hooks/useForm.js";

export const LoginPage = () => {
  const { handleChange, handleSubmit } = useForm({
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
          Iniciar Sesión
        </h1>
        <form>
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
              className=" w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors mb-4"
              onChange={handleChange}
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
              className=" w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors mb-2"
              onChange={handleChange}
            />

            <input
              type="submit"
              value="Iniciar Sesión"
              className=" w-full block text-gray-700 font-bold bg-red-400  px-2 py-2 rounded-sm hover:bg-red-500 hover:text-gray-800 transition-colors cursor-pointer "
              onClick={handleSubmit}
            />
            <div className="flex justify-center mt-4">
              <p>
                No tienes una cuenta?{" "}
                <a href="" className=" text-red-600 font-bold underline">
                  Registrarse
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
