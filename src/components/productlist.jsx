import React, { useRef } from "react"
import { useState } from "react"
import ListofproductsShip from "@/Shop/products"
export default function ProductListInfo(){

    const Catallog = useRef(null);
    function CheckingUp(){
        if(Catallog.current.classList.contains('xs:hidden')){
            Catallog.current.classList.remove('xs:hidden')
        }
        else{
            Catallog.current.classList.add('xs:hidden')
        }
    }
    return(
        <div className="w-full h-auto flex flex-col sm:flex-row justify-around items-start bg-[#FFF9F4]">
        {/* Левый (фиолетовый) блок */}
        <div ref={Catallog}  className="w-full sm:w-[25%] xs:z-[100] xs:hidden h-auto bg-[#EDD8C3] text-white p-4 sticky top-0 flex-col">
          {/* Поиск */}
          <div className="mb-6">
            <span onClick={CheckingUp} href="#" className="w-full flex justify-end text-[#000000] sm:hidden">Back</span>
            <div className="relative flex flex-row justify-between items-center">
                
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 rounded text-[#000000] bg-[#EDD8C3] outline-none  text-[#000000]"
              />
              <img src="/List/loop.svg"/>
            </div>
            <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
          </div>

          {/* Тип продукта */}
          <div className="mb-6">
            <h3 className="font-bold mb-2 text-[#000000] text-[1.5vw] xs:text-[3.5vw] sm:text-[2vw]">Product Type</h3>
            <ul className="space-y-1">
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Pearl Chain</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Earrings</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Rings</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Chain</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Necklace</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Bracelet</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
            </ul>
          </div>

          {/* Фильтр "Shop For" */}
          <div className="mb-6">
  <h3 className="font-bold mb-4 text-[#000000] text-[1.2rem] sm:text-[2vw]">Shop For</h3>
  <div className="flex flex-col gap-4 w-full">
  {/* Первый ряд кнопок */}
  <div className="flex justify-between  sm:h-[50px] sm:w-full">
    <button className="bg-black text-white font-[400] sm:text-[1.4vw] hover:opacity-80 transition text-center flex justify-center items-center w-[32%] h-full">
      Ring
    </button>
    <button className="bg-black text-white font-[400] sm:text-[1.4vw] hover:opacity-80 transition text-center flex justify-center items-center w-[32%] h-full">
      Earrings
    </button>
    <button className="bg-black text-white font-[400] sm:text-[1.4vw] hover:opacity-80 transition text-center flex justify-center items-center w-[32%] h-full">
      Bracelets
    </button>
  </div>
  {/* Второй ряд кнопок */}
  <div className="flex justify-between sm:h-[50px] sm:w-full">
    <button className="bg-black text-white font-[400] sm:text-[1.4vw] hover:opacity-80 transition text-center flex justify-center items-center w-[32%] h-full">
      Silver
    </button>
    <button className="bg-black text-white font-[400] sm:text-[1.4vw] hover:opacity-80 transition text-center flex justify-center items-center w-[32%] h-full">
      Gold
    </button>
    <button className="bg-black text-white font-[400] sm:text-[1.4vw] hover:opacity-80 transition text-center flex justify-center items-center w-[32%] h-full">
      Platinum
    </button>
  </div>
</div>


</div>


          {/* Бренды */}
          <div className="mb-6">
            <h3 className="font-bold mb-2 text-[#000000] text-[1.5vw] sm:text-[2vw]">Product Brands</h3>
            <ul className="space-y-1">
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Glittering Gems</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Dazzling dames</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Alluring Treasures</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Diamond Dreams</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Collector jewelry</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Preciouspalette</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
            </ul>
          </div>

          {/* Коллекции */}
          <div className="mb-6">
            <h3 className="font-bold mb-2 text-[#000000] text-[1.5vw] sm:text-[2vw]">Collection</h3>
            <ul className="space-y-1">
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Women's Ring</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Men's Cufflinks</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Women's Ring</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Men's Cufflinks</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              <li><input type="checkbox" /> <label className="text-[#000000] sm:text-[2vw]">Women's Ring</label></li>
              <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
              
            </ul>
          </div>

          {/* Цена */}
          <div className="mb-6">
            <h3 className="font-bold mb-2 text-[#000000] text-[1.5vw] sm:text-[2vw]">Filter By Price</h3>
            <div className="flex items-center justify-between mb-2">
            </div>
            <input
  type="range"
  min="0"
  max="1000"
  className="w-full h-1 bg-[#060606] appearance-none rounded focus:outline-none 
             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 
             [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-[#060606] 
             [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer 
             [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:bg-[#060606] 
             [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
/>

            <h1 className="text-[#000000] sm:text-[2vw]">
            Price: $54 — $2,500
            </h1>
            <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
            <button className="mt-[5%] w-[30%] bg-black text-white p-2 mb-[5%] sm:text-[2vw] flex justify-center items-center">Filter</button>
            <div className="w-full h-[1px] bg-[#A4A4A4]">

            </div>
          </div>
           {/* Реклама */}
           <div className="w-full bg-[url('/List/Offer.svg')] bg-no-repeat h-[30vw] select-none bg-cover text-white p-4 text-center mt-6">
          </div>
        </div>
        

        {/* Правый (контент) блок */}
        <div className="w-full sm:w-[75%] h-full p-4 flex flex-col items-center">
          <div className="w-full h-[5vw] xs:h-[10vw] flex justify-between items-center">
            <h1 className="xs:text-[2.4vw]  sm:text-[2vw]">
            Showing 1–9 of 15 results
            </h1>
            <div className="w-[30%] xs:w-[45%] h-[80%] cursor-pointer flex flex-row justify-between items-center">
              <img className="w-[45%] h-full" src='/List/Blocks.svg'/>
              <div className="w-[50%] border-[1px] rounded-[5px] border-[#D9D9D9] h-full flex justify-around items-center">
  <h1 className="flex items-center xs:text-[2vw] text-[1vw] w-[70%]  sm:text-[1.5vw]">
    Sort By List{" "}
    <a onClick={CheckingUp} className="flex justify-center items-center transform rotate-[270deg] text-[1.5vw] ml-[1%] w-[20%] h-full xs:text-[2vw]">&lt;</a>
  </h1>
</div>

            </div>
          </div>
        <div className="w-full h-[1px] bg-[#A4A4A4]">            </div>
          <ListofproductsShip />
          <ListofproductsShip />
          <ListofproductsShip />
          <ListofproductsShip />
          <ListofproductsShip />
          <ListofproductsShip />
        </div>
      </div>
    )
}