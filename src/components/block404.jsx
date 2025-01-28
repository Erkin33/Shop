import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F0E7] text-center p-4 md:p-8">
      {/* Блок для изображения */}
      <div className="relative w-[80%] max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src="/Login/Bg.svg"
          alt="404 Illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Текстовый блок */}
      <div className="max-w-xl mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Oops! The Page Not Found.
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
          Proin non eros elementum. Sagittis diam at, feugiat nunc. Ut velit arcu, posuere at neque quis, vestibulum vehicula dui.
        </p>
      </div>

      {/* Кнопка возврата */}
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg text-sm sm:text-base md:text-lg hover:bg-gray-800 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
