export default function About() {
  return (
    <div className="bg-gray-50  w-full flex items-center justify-center px-4 xs:px-2 md:px-8 xss:px-3">
      <div className="max-w-7xl mx:max-w-[100%] w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 xs:gap-8 xss:gap-6">
          {/* Левая секция: Большая картина */}
          <div className="relative bg-[url('/Shorts/Black.webp')] bg-cover bg-no-repeat text-white h-[450px] xs:h-[220px] xss:h-[250px] md:h-[500px] xl:h-[550px] 2xl:h-[600px] w-[90%] md:w-[50%] xl:w-[45%] rounded-tl-full rounded-tr-full flex flex-col justify-end items-center overflow-hidden">
            {/* SVG с текстом */}
            <svg
              className="absolute top-0 w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 25 300 300"
            >
              <path
                id="curve"
                d="M 50 150 A 100 100 0 0 1 250 150"
                fill="transparent"
              />
              <text>
                <textPath
                  href="#curve"
                  startOffset="50%"
                  textAnchor="middle"
                  fill="white"
                  className="font-semibold text-xs xs:text-[8px] xss:text-[10px] md:text-[14px] xl:text-base"
                >
                  Where Elegance Finds Its Extraordinary Artistry
                </textPath>
              </text>
              {/* Линии */}
              <line
                x1="50"
                y1="160"
                x2="50"
                y2="350"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="250"
                y1="160"
                x2="250"
                y2="350"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="60"
                y1="350"
                x2="140"
                y2="350"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="160"
                y1="350"
                x2="240"
                y2="350"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            {/* Кнопка */}
            <div className="absolute bottom-8 bg-gray-200 text-blue-700 w-[80px] xs:w-[60px] mx:w-[100px] mx:h-[100px] xss:w-[65px] md:w-[70px] xl:w-[90px] h-[80px] xs:h-[60px] xss:h-[65px] md:h-[70px] xl:h-[90px] flex items-center justify-center font-semibold text-[10px] xs:text-[8px] xss:text-[9px] xl:text-sm rounded-full cursor-pointer hover:bg-gray-300 shadow-lg transition transform hover:scale-105">
              KNOW MORE
            </div>
          </div>

          {/* Правая секция: Текст, картинка и статистика */}
          <div className="flex flex-col w-[90%] md:w-[50%] xl:w-[50%] space-y-8">
            {/* Текстовая информация */}
            <div className="relative">
              {/* Маленькая фиолетовая картинка */}
              <div className="w-[12vw] xs:w-[50px] h-[15vw] md:hidden xs:h-[50px] bg-[url('/Shorts/black2.webp')] bg-cover rounded-t-full bg-purple-700 absolute xs:left-[25%] left-[-15%] top-[-15%] md:top-[-20%] md:left-[70%] xss:left-[34%] xss:top-[-7%] xss:w-[15%] xl:left-[65%]"></div>

              <h2 className="text-lg xs:text-[2.6vw] xss:text-[4vw] font-semibold text-blue-700 uppercase mb-2 md:text-[20px] xl:text-lg 2xl:text-xl">
                About Us
              </h2>
              <h1 className="text-2xl xs:text-[2.6vw] xss:text-[4vw] md:text-3xl xl:text-4xl 2xl:text-5xl w-full font-bold text-gray-900 leading-snug">
                Rishi Couple Rings & Diamonds Are The New Collections
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed text-sm xs:text-[2.6vw] xss:text-[3vw] md:text-[14px] xl:text-lg 2xl:text-xl">
                Nunc ac eros at nunc scelerisque dignissim. Aliquam enim nunc,
                volutpat eget ipsum id, varius sodales mi. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 xl:gap-8">
              {[
                { value: "15+", label: "All Over The World" },
                { value: "250+", label: "Product Available" },
                { value: "2K", label: "Product Reviews" },
                { value: "100K", label: "Happy Customers" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-[#F5E7D6] rounded-lg p-4 shadow-sm xl:p-6 2xl:p-8"
                >
                  <h4 className="text-gray-800 font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
                    {item.value}
                  </h4>
                  <p className="text-gray-600 mt-2 text-center text-sm md:text-base xl:text-lg 2xl:text-xl">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Кнопка */}
            <div className="flex justify-start">
              <button className="px-8 py-4 md:mb-[5%] text-white bg-[#472000] text-sm font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition transform hover:scale-105 flex items-center gap-2 xl:px-10 xl:py-5 xl:text-base 2xl:text-lg">
                Shop Now
                <img
                  src="/ArrowWhite.svg"
                  alt=""
                  className="w-4 h-4 xl:w-6 xl:h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
