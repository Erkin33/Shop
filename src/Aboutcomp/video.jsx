export default function EnquireSection() {
  return (
    <div className="bg-[#F5E7D6] h-[400px] xs:h-auto flex items-center justify-center px-6 xs:px-4 py-8 xs:py-6">
      <div className="max-w-7xl mx:max-w-[100%] w-full h-[80%] xs:h-auto lg:h-[500px] flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {/* Видео секция */}
        <div className="flex-shrink-0 w-full md:w-[50%] h-full xs:h-[200px] md:h-[400px] lg:h-full xl:w-[45%] 2xl:w-[40%] flex justify-center items-center">
          <div className="aspect-w-16 aspect-h-9 bg-blue-700 w-full rounded-lg shadow-lg overflow-hidden md:h-full lg:aspect-none lg:h-[500px]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Текстовая секция */}
        <div className="w-full md:w-[50%] h-full xs:h-auto lg:h-full xl:w-[55%] 2xl:w-[60%] flex flex-col justify-center space-y-6 lg:space-y-8 xl:space-y-10">
          <h3 className="text-sm xs:text-xs lg:text-base xl:text-lg 2xl:text-xl tracking-wide text-gray-700 uppercase">
            Enquire Custom Piece
          </h3>
          <h2 className="text-2xl xs:text-xl md:text-[3vw] lg:text-[2.5vw] xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-snug">
            Jewels Are Often Crafted Into Journey Into A Realm Various Point Rings, Necklaces,
            Earrings.
          </h2>
          <p className="text-gray-600 leading-relaxed xs:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters.
          </p>
          <button className="w-[20%] xs:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] py-3 bg-[#AC805D] text-white rounded-lg hover:bg-brown-800 shadow-lg transition transform hover:scale-105 flex flex-row justify-around items-center">
            Know More{" "}
            <img
              src="/ArrowWhite.svg"
              alt="Arrow icon"
              className="!text-[#AC805D] w-[15%] h-[60%] rounded-full bg-[white]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
