export default function TextAbout() {
  return (
    <div className="w-full h-[450px] xss:h-[400px] flex justify-around items-center flex-col xs:h-[200px]">
      {/* Основной текстовый блок */}
      <div className="w-[60%] lg:w-[45%] xs:w-[90%] h-[60%] xs:h-auto flex justify-center items-center text-center">
        <h1 className="text-[2vw] lg:text-[1.9vw] xs:text-[4vw] font-medium leading-relaxed uppercase">
          I am passionately 
          <span className="px-1 xs:px-[1px]">⭐</span> 
          dedicated to crafting timeless elegance 
          <span className="px-1 xs:px-[1px]">⭐</span> 
          and capturing the essence 
          <span className="px-1 xs:px-[1px]">⭐</span> 
          of individual stories. Our 
          <span className="px-1 xs:px-[1px]">⭐</span> 
          brand is not just about adornment.
        </h1>
      </div>

      {/* Информация о персоналии */}
      <div className="w-[60%] xs:w-[90%] h-[40%] xs:h-auto flex flex-col justify-center items-center text-center">
        <img src="/About/Col.svg" alt="Illustration" className="w-auto h-[50px] xs:h-[40px]" />
        <h1 className="text-lg xs:text-sm font-semibold">Madison Duncan</h1>
      </div>

      {/* Украшение в виде полукруга */}
      <div className="w-[13%] lg:w-[23%] 2xl:h-[30%] lg:h-[35%] lg:mt-[1%] xss:w-[30%] xss:h-[20%] xs:w-[20%] h-[30%] xs:h-[10%] rounded-t-full absolute bg-[url('/Shorts/Black.webp')] bg-cover bg-no-repeat right-[-10%] xs:right-[5%] xs:mt-[25%]"></div>
    </div>
  );
}
