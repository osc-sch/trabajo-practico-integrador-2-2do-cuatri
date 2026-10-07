import { Navbar } from "../components/Navbar.jsx";
import { useFecht } from "../hooks/useFecht.js";
export const HomePage = () => {
  const { data, isLoading, error } = useFecht(
    "http://localhost:3001/api/articles",
  );

  const articles = data?.articles || [];
  return (
    <div className="min-h-screen bg-white text-gray-700">
      <Navbar />
      <main className="flex w-full justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-2xl space-y-6">
          {isLoading ? (
            <p className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-center text-gray-600">Cargando artículos...</p>
          ) : error ? (
            <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-700">Error al cargar los artículos: {error.message}</p>
          ) : articles.length === 0 ? (
            <p className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-gray-600">No hay artículos publicados.</p>
          ) : articles.map((article) => (
            <div
              key={article.id}
              className="rounded-lg border border-gray-200 border-t-4 border-t-orange-400 bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:justify-between">
                <div className="min-w-0 text-xl font-bold text-gray-700 wrap-break-word">
                  {article.title}
                </div>
                <p className="shrink-0 self-start rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                  De: {article.author?.username || "Autor desconocido"}
                </p>
              </div>
              <p className="text-base leading-relaxed text-gray-600 wrap-break-word">
                {article.excerpt || "Sin resumen."}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
