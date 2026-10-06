export const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 p-2 shadow-lg flex justify-between ">
      <h1 className="text-white font-bold text-xl underline">TuBlog</h1>
      <button
        type="button"
        className="bg-gray-700 p-2 rounded-xl font-medium cursor-pointer hover:bg-red-400 transition-colorss"
      >
        Cerrar Sesión
      </button>
    </nav>
  );
};
