export default function ProductItems() {
  return (
    <div className="w-full xs:mt-[5%] mxx:h-[800px] lg:h-[500px] min-[600px]:h-[700px] h-[500px] md:h-[400px] md:flex-row  flex xs:flex-col  justify-between items-center">
      {/* Левая половина */}
      <div className="w-[49%] xs:w-full md:w-[49%] md:h-[100%]  xs:h-[50%] h-full bg-[#F5E7D6] flex">
        {/* Блок с текстом */}
        <div className="w-[10%] h-full flex justify-center items-center bg-[#F5E7D6]">
          <h1 className="relative  rotate-[-90deg] text-[#3C2407] lg:text-[3rem] xs:text-[2rem] text-[3rem] min-[600px]:text-[2.3rem] md:text-[2rem] mxx:text-[75px] ">
            UNPARALLELED
          </h1>
        </div>
        
        {/* Блок с синими элементами */}
        <div className="w-[20%] md:w-[25%] min-[600px]:w-[15%] mr-[5%] ml-[1%] h-full flex bg-[#F5E7D6] flex-col justify-around items-center">
          <div className="w-full h-[20%] bg-[blue] bg-[url('/Shorts/black2.webp')] bg-cover"> 
          {/* <img src="/Shorts/Black2.webp" alt="" className="w-full h-full"/> */}
          </div>
          <div className="w-full h-[20%] bg-[blue] bg-[url('/Shorts/black3.webp')] bg-cover">
          {/* <img src="/Shorts/Black3.webp" alt="" className="w-full h-full"/> */}
          </div>
          <div className="w-full h-[20%] bg-[blue] bg-[url('/Shorts/Black.webp')] bg-cover">
          {/* <img src="/Shorts/Black.webp" alt="" className="w-full h-full"/> */}
          </div>
          <div className="w-full h-[20%] bg-[blue] bg-[url('/Shorts/blue2.webp')] bg-cover">
          {/* <img src="/Shorts/Black2.webp" alt="" className="w-full h-full"/> */}
          </div>
        </div>
        
        {/* Черный блок */}
        <div className="lg:justify-center mxx:justify-around lg:items-center w-[65%] h-full md:w-[59%] md:h-[80%]  flex flex-col justify-around items-center">
          <div className="lg:h-[70%] mxx:h-[70%]  w-[80%] h-[60%]  mr-[auto] ml-[auto] ">
            <img src="/Shorts/Black.webp" alt="" className="lg:h-full rounded-tl-[150px] lg:rounded-tl-[150px] xs:rounded-tl-[45%] md:rounded-tl-[50%]" />
          </div>
          <div className=" w-[80%] lg:mt-[10%] xs:w-[100%] h-[10%] mr-[auto] ml-[auto] flex justify-center items-center">
            <a href="#" className="w-[10%] mxx:w-[20%] mxx:h-[100%] h-[50%] hover:bg-[#0E343D] hover:text-[#D8D8D8] bg-[#D8D8D8] rounded-full flex justify-center items-center text-[#0C0C0C] mxx:text-[15px]">1</a>
            <a href="#" className="w-[10%] mxx:w-[20%] mxx:h-[100%] h-[50%] hover:bg-[#0E343D] hover:text-[#D8D8D8] bg-[#D8D8D8] rounded-full flex justify-center items-center text-[#0C0C0C] mxx:text-[15px]">2</a>
            <img src="Arrow-right.svg" className="w-[15%] h-[60%]mxx:w-[20%] mxx:h-[100%]   rounded-full flex justify-center items-center"/>
            <a href="#" className="w-[10%] mxx:w-[20%] mxx:h-[100%] h-[50%] hover:bg-[#0E343D] hover:text-[#D8D8D8] bg-[#D8D8D8] rounded-full flex justify-center items-center text-[#0C0C0C] mxx:text-[15px]">3</a>
          </div>
        </div>
      </div>

      {/* Правая половина */}
      <div className="w-[49%] md:w-[49%] min-[600px]:w-full w-full  xs:h-[50%] h-[80%] md:h-[80%] bg-white flex justify-between flex-col items-center ">


        <small className="mxx:text-[35px] text-[#CE8B39] h-[5%] md:text-[2vw] xs:text-[4vw] xs:w-full xs:text-center text-[1.5rem] w-full ">
        Glamorous Life
        </small>
        <h2 className="mxx:text-[53px] z-[100] text-[#0E343D] md:text-[3vw] xs:text-[5.7vw] xs:w-full xs:text-center lg:text-[2.4rem] h-[30%] lg:text-[2.8rem] text-[2.8rem] w-full ">
        Redefining Elegance with
Unique Charms
        </h2>
        <p className="mxx:text-[35px] text-[#000000] md:text-[1.5vw] xs:w-full xs:text-center xs:text-[0.8rem] h-[25%] lg:text-[1rem] text-[0.7rem] w-full z-[100]">
        Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus.
        </p>
        <div className="w-[100%]  h-[15%]  xs:justify-center flex justify-start items-center">
          <a href="/aboutus" id="next" className="xs:text-[3vw] md:text-[2vw] w-[30%] text-[#ffffff] text-[3vh] lg:text-[2.5vh] font-['Arial'] h-full bg-[#0E343D] flex justify-center items-center mxx:text-[35px]">
          know more<img src="/KnowMore.svg" alt=""  className="w-[13%] h-[40%] ml-[5%] rounded-[100%]  bg-[#D8D8D8]"/>
          </a>
          
        </div>

        <img src="/Shorts/blue.jpg" alt=""  className="absolute mxx:top-[18%] mxx:h-[35%] des:top-[1%] xl:right-[-10%] xl:top-[15%] md:right-[-11%] md:h-[25%] md:w-[15%] xs:w-[25%] min-[600px]:h-[30%]  xs:h-[20%] right-[-10%] right-[50%]  w-[15%] h-[30%] mt-[18%] rounded-t-[15%] mr-[12%]"/>
      </div>
    </div>
  );
}
