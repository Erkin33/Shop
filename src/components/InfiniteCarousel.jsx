import { useRef } from "react";

export default function InstagramCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const images = [
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
    "/Shorts/Black.webp",
    "/Shorts/black2.webp",
    "/Shorts/black3.webp",
    "/Shorts/blue.jpg",
    "/Shorts/blue2.webp",
  ];

  return (
    <div className="bg-[#F5E7D6] py-8">
      <h2 className="mxx:text-[25px] text-center text-2xl font-bold mb-4">
        Explore The Instagram Universe
      </h2>
      <p className="mxx:text-[25px] text-center mb-8 text-gray-600">
        Pseudo non ullamcorper ipsum donec a neque sodales porttitor arcu ut.
      </p>
      <div className="relative w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-scroll no-scrollbar"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-48 h-48 bg-blue-500 relative"
            >
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="mxx:text-[25px] text-white text-lg">Read More</p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопки управления */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
