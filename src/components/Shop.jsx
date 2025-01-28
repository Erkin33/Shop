import { InfoSolid } from "./chellange";

export default function Shop() {
  return (
    <div className="w-full bg-[#fff9f4] py-6 flex flex-col justify-center items-center mxx:py-12">
      {/* Основной контейнер */}
      <div className="w-[90%] lg:w-[50%] mx-auto flex flex-col justify-center items-center mxx:w-[40%]">
        {/* Заголовок */}
        <h1 className="text-xl lg:text-2xl text-[#0E343D] font-bold mb-4 text-center mxx:text-3xl mxx:mb-6">
          Shop The New Arrivals
        </h1>

        {/* Навигационные вкладки */}
        <div className="w-full flex flex-row justify-between items-center border-b border-gray-300">
          <p className="border-b-4 border-[#0E343D] text-sm lg:text-base font-medium cursor-pointer py-2 flex-1 text-center mxx:text-lg mxx:py-4">
            All Product
          </p>
          <p className="hover:border-[#0E343D] hover:border-b-4 transition-all duration-300 text-sm lg:text-base font-medium cursor-pointer py-2 flex-1 text-center mxx:text-lg mxx:py-4">
            New Arrivals
          </p>
          <p className="hover:border-[#0E343D] hover:border-b-4 transition-all duration-300 text-sm lg:text-base font-medium cursor-pointer py-2 flex-1 text-center mxx:text-lg mxx:py-4">
            Bundled Products
          </p>
          <p className="hover:border-[#0E343D] hover:border-b-4 transition-all duration-300 text-sm lg:text-base font-medium cursor-pointer py-2 flex-1 text-center mxx:text-lg mxx:py-4">
            Daily Use
          </p>
        </div>
      </div>
    </div>
  );
}
