import { useState, useEffect } from "react";
import Image from "next/image";

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Появляется через 1 секунду
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="z-[10000] fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="xs:w-[90%] mxx:w-[70%] mxx:h-[70%] relative w-[60%]  bg-[#B98A64] flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
            {/* Левая часть (картинка) */}
            <div className="hidden md:block md:w-1/2 bg-[#3C4C63]">
              <Image
                src="/Shorts/blue.jpg"
                alt="Promo Image"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Правая часть (текст и форма) */}
            <div className="w-full md:w-1/2 p-6 text-white text-center flex flex-col justify-around">
              {/* Кнопка закрытия */}
              <button
                className="absolute top-4 right-4 text-white w-[10%] lg:w-[5%] md:w-[7%] rounded-full bg-black text-xl "
                onClick={() => setIsVisible(false)}
              >
                ✖
              </button>

              <h2 className="text-2xl md:text-3xl font-semibold lg:text-[3vw]">Sale Upto 30%</h2>
              <p className="text-sm md:text-base mt-2 lg:text-[2.1vw] mxx:leading-[1.5]">
                Signup to receive all the latest news updates & store discount.
              </p>
              <div className="w-[100%] mt-[5%] h-[1px] bg-[#ffffff]">

              </div>
              {/* Форма */}
              <div className="mt-4 flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 p-2 text-black rounded-t-md md:rounded-l-md md:rounded-tr-none bg-[#FFF6EB]"
                />
                <button className="lg:text-[2vw] md:text-[0.9vw] bg-black px-4 py-2 rounded-b-md md:rounded-r-md md:rounded-bl-none">
                  Send Message
                </button>
              </div>

              {/* Чекбокс */}
              <label className="mt-2 block text-xs md:justify-start flex">
                <input type="checkbox" className="mr-2 lg:text-[2.5vw]" /> <span className="lg:text-[1.5vw] mxx:leading-[1.5]">I accept the Privacy and Cookies Policy to be received</span>
              </label>
                <div className="w-[100%] mt-[5%] h-[1px] bg-[#ffffff]">

                </div>
              {/* Социальные сети */}
              <div className="mt-4 flex justify-center gap-2">
                <span className="text-sm lg:text-[2vw]">Social Media:</span>
                <img src="/Socials.svg" alt="Social Icons" className="lg:h-[100%] lg:w-[40%]" width={100} height={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
