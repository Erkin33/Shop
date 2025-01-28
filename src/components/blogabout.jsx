export default function BlogHeresoc() {
  return (
    <div className="w-[95%] mx-auto h-auto 2xl:h-[500px] border-b-[1px] border-[#000000] flex flex-col sm:flex-row justify-between items-center py-6">
      {/* Левая сторона */}
      <div className="w-full sm:w-[47%] h-auto sm:h-[60%] mb-4 sm:mb-0 flex sm:flex-row justify-start items-center gap-4 sm:border-r-[1px] border-[#000000]">
        {/* Изображение слева */}
        <img
          src="/Shorts/black2.webp"
          alt="Shorts"
          className="w-[30%] h-auto sm:h-[90%] rounded-lg object-cover"
        />
        {/* Текст и стрелка */}
        <div className="flex flex-col justify-center h-full sm:w-[65%]">
          <p className="text-[#464646] mxx:text-[27px] text-sm flex items-center gap-2 mb-2 sm:mb-0">
            <img
              src="/Arrow-strike.svg"
              alt="arrow"
              className="w-5 h-5 transform"
            />
            Предыдущая статья
          </p>
          <h2 className="mxx:text-[21px] mxx:mt-[20px] text-gray-800 text-sm sm:text-base font-semibold leading-snug text-justify">
            Незабываемое проявление индивидуальности, где изысканность встречает своё искусство.
          </h2>
        </div>
      </div>

      {/* Правая сторона */}
      <div className="w-full sm:w-[47%] h-auto sm:h-[60%] flex sm:flex-row justify-end items-center gap-4">
        {/* Текст и стрелка */}
        <div className="flex flex-col justify-center h-full sm:w-[65%] text-right">
          <p className=" mxx:text-[27px] text-[#464646] text-sm flex items-center gap-2 justify-end mb-2 sm:mb-0">
            Следующая статья
            <img
              src="/Arrow-strike.svg"
              alt="arrow"
              className="w-5 h-5 rotate-180"
            />
          </p>
          <h2 className="mxx:text-[21px] mxx:mt-[20px] text-gray-800 text-sm sm:text-base font-semibold leading-snug ">
            Неповторимое обаяние элегантных украшений, которое никого не оставит равнодушным.
          </h2>
        </div>
        {/* Изображение справа */}
        <img
          src="/Shorts/black2.webp"
          alt="Shorts"
          className="w-[30%] h-auto sm:h-[90%] rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
