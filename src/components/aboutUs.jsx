export default function AboutUs() {
  return (
    <div className="w-full bg-[#fff9f4] h-auto flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-8 mxx:py-12 mxx:px-16">
      {/* Левая секция */}
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <small className="mxx:text-[35px] text-[#CE8B39] text-sm md:text-base mb-2 mxx:text-lg">Glamorous Life</small>
        <h1 className="mxx:text-[35px] text-[#0E343D] text-2xl md:text-3xl font-bold mb-4 mxx:text-[2.3vw]">
          Embrace the Unseen Magic of Uniqueness
        </h1>
        <p className="mxx:text-[19px] text-gray-700 text-sm md:text-base mb-6 mxx:text-[1.3vw]">
          Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus a. Aenean bibendum faucibus semper. Vestibulum pretium dictum lacus eget sodales. Aliquam fermentum.
        </p>
        <div className="w-full mxx:w-[70%] flex justify-around items-center gap-4 mb-6 mxx:gap-8">
          <div className="flex flex-col justify-center items-center bg-[#F5E7D6] p-4 rounded-lg shadow-md mxx:p-6">
            <h1 className="text-2xl font-bold mxx:text-[35px] ">15+</h1>
            <p className="text-sm mxx:text-[19px]">All over world</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#F5E7D6] p-4 rounded-lg shadow-md mxx:p-6">
            <h1 className="text-2xl font-bold mxx:text-[35px]">250+</h1>
            <p className="text-sm mxx:text-[19px]">Product Available</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#F5E7D6] p-4 rounded-lg shadow-md mxx:p-6">
            <h1 className="text-2xl font-bold mxx:text-[35px]">2K</h1>
            <p className="text-sm mxx:text-[19px]">Product Reviews</p>
          </div>
        </div>
        <a
          href="#"
          id="next"
          className="mxx:text-[19px] w-40 h-12 bg-[#0E343D] text-white flex justify-center items-center text-sm rounded-md shadow-md mxx:w-48 mxx:h-14 mxx:text-[1vw]"
        >
          Know More
          <img
            src="/ArrowWhite.svg"
            alt="Arrow"
            className="w-6 h-6 ml-2 rounded-full bg-[#D9D9D9] mxx:w-[15%] mxx:h-8"
          />
        </a>
      </div>

      {/* Правая секция */}
      <div className="w-full md:w-[50%] max-[600px]:h-[50%] flex justify-center items-center relative mt-8 md:mt-0">
        <div className="lg:h-[55%] lg:w-[40%] absolute md:w-[30%] md:left-[2%] md:h-[40%] w-16 h-16 bg-red-500 max-[600px]:h-[40%] max-[600px]:w-[30%] rounded-full border-4 border-white overflow-hidden left-8 md:left-16 mxx:h-[47%] mxx:w-[30%] mxx:left-20">
          <img src="./Shorts/Black.webp" alt="Black Shorts" className="w-full h-full object-cover" />
        </div>
        <div className="lg:h-[70%] lg:w-[70%] w-[70%] h-64 max-[600px]:h-[30%] bg-blue-500 rounded-t-full border-4 border-[#CE8B39] overflow-hidden mxx:h-[80%] mxx:w-[60%]">
          <img src="./Shorts/blue.jpg" alt="Blue Shorts" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
