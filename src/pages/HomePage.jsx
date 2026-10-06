export const HomePage = () => {
  return (
    <main className="flex min-h-screen w-full bg-gray-900 justify-center items-center">
      <div className="max-w-lg border border-white p-4 rounded-sm">
        <div className="flex justify-between border-b border-white mb-4">
          <div className="font-bold text-xl mb-2 text-white">Titulo</div>
          <p className="text-white font-bold">autor: Jose Peres</p>
        </div>
        <p class="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </main>
  );
};
