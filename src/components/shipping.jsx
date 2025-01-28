import React from "react";
import { Hero } from "./info";

export default function Shipping() {
  return (
    <div className="w-[90%] lg:w-[95%] bg-[#fff9f4] h-auto py-6 flex justify-center mx-auto mxx:py-10">
      <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center bg-[#CE8B39] p-4 rounded-lg shadow-lg mxx:p-8">
        {Hero.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-center items-center lg:w-[30%] w-full mb-6 lg:mb-0 lg:pb-0 border-l-[1px] border-white lg:first:border-none px-4 lg:px-0 mxx:px-8"
          >
            <img
              src={item.src}
              alt={item.MainInfo}
              className="w-16 h-16 lg:w-20 lg:h-20 mb-4 lg:mb-0 mxx:w-24 mxx:h-24"
            />
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h1 className="mxx:text-[19px] text-lg lg:text-xl font-bold text-[#ffffff] mb-2 mxx:text-2xl">
                {item.MainInfo}
              </h1>
              <p
                className="mxx:text-[19px] text-sm lg:text-base text-[#ffffff] mxx:text-lg"
                dangerouslySetInnerHTML={{ __html: item.Info }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
