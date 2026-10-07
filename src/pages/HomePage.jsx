import { Navbar } from "../components/Navbar.jsx";
import { useFecht } from "../hooks/useFecht.js";
export const HomePage = () => {
  const { data, isLoading, error } = useFecht(
    "http://localhost:3001/api/articles",
  );

  const articles = data?.articles || [];
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full py-4 bg-gray-900 justify-center items-center">
        <div className=" space-y-4 flex-col">
          {isLoading ? (
            <p className="text-white">Cargando artículos...</p>
          ) : error ? (
            <p className="text-red-400">Error al cargar los artículos: {error.message}</p>
          ) : articles.length === 0 ? (
            <p className="text-white">No hay artículos publicados.</p>
          ) : articles.map((article) => (
            <div
              key={article.id}
              className="max-w-lg border border-white p-4 rounded-sm"
            >
              <div className="flex justify-between border-b border-white mb-4">
                <div className="font-bold text-xl mb-2 text-white truncate">
                  {article.title}
                </div>
                <p className="text-white font-bold text-xs">
                  De: {article.author?.username || "Autor desconocido"}
                </p>
              </div>
              <p className="text-white text-base">
                {article.excerpt || "Sin resumen."}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
