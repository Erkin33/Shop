export default function Contact() {
    return (
      <div className="w-full bg-[#fff9f4] flex flex-col md:flex-row justify-between items-center">
        {/* Левая секция с изображением */}
        <div className="w-full md:w-[50%] h-[300px] md:h-[500px] bg-[url('/About/shop.webp')] bg-cover bg-center"></div>
  
        {/* Правая секция с контактной формой */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center py-10 px-6 md:py-0">
          <div className="w-full md:w-[80%] md:py-[2vw] flex flex-col space-y-6">
            {/* Заголовок */}
            <h1 className="text-[5vw] mxx:text-[35px] md:text-[2.5vw] font-bold text-gray-900 text-center md:text-left">
              Get In Touch Today!
            </h1>
            
            {/* Описание */}
            <p className="mxx:text-[30px] text-gray-700 text-[4vw] md:text-[1.2vw] text-center md:text-left leading-relaxed">
              Cras convallis a augue non ullamcorper. Maecenas nec tempor nulla, nec semper
              mauris. In vitae urna justo. Quisque at nulla pellentesque.
            </p>
  
            {/* Поля ввода */}
            <input
              type="text"
              placeholder="Name"
              className="mxx:text-[30px] bg-[#F5E7D6] text-[#6F6F6F] w-full py-3 pl-3 rounded-md text-[4vw] md:text-[1.1vw] focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="mxx:text-[30px] bg-[#F5E7D6] text-[#6F6F6F] w-full py-3 pl-3 rounded-md text-[4vw] md:text-[1.1vw] focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <input
              type="text"
              placeholder="Enter Date"
              className="mxx:text-[30px] bg-[#F5E7D6] text-[#6F6F6F] w-full py-3 pl-3 rounded-md text-[4vw] md:text-[1.1vw] focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <textarea
              placeholder="Message"
              className="mxx:text-[30px] bg-[#F5E7D6] text-[#6F6F6F] w-full py-3 pl-3 rounded-md text-[4vw] md:text-[1.1vw] focus:outline-none focus:ring-2 focus:ring-black h-[120px] md:h-[150px] transition-all"
            ></textarea>
  
            {/* Кнопка отправки */}
            <a
              href="#"
              className="mxx:text-[30px] bg-black text-white py-3 px-6 rounded-md text-center flex items-center justify-center space-x-2 text-[4vw] md:text-[1.2vw] hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              <span>Send Message</span>
              <img
                src="/ArrowWhite.svg"
                alt=""
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
  