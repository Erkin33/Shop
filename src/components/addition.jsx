"use client";

import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full p-4 xs:h-auto md:h-[400px] mt-4 lg:h-[500px] xl:h-[600px] xl:mt-[5%]">
      {/* Верхний блок: Вкладки */}
      <div className="flex flex-wrap border-b border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab("description")}
          className={`mxx:text-[30px] px-2 md:px-4 py-2 text-xs md:text-base lg:text-lg xl:text-xl ${
            activeTab === "description"
              ? "border-b-2 border-black text-black font-semibold"
              : "text-gray-500"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("additional-info")}
          className={`mxx:text-[30px] px-2 md:px-4 py-2 text-xs md:text-base lg:text-lg xl:text-xl ${
            activeTab === "additional-info"
              ? "border-b-2 border-black text-black font-semibold"
              : "text-gray-500"
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`mxx:text-[30px] px-2 md:px-4 py-2 text-xs md:text-base lg:text-lg xl:text-xl ${
            activeTab === "reviews"
              ? "border-b-2 border-black text-black font-semibold"
              : "text-gray-500"
          }`}
        >
          Reviews (0)
        </button>
      </div>

      {/* Нижний блок: Контент вкладок и фото */}
      <div className="flex flex-col md:flex-row justify-between mt-6 lg:mt-8 xl:mt-10">
        {/* Левая часть: Контент вкладок */}
        <div className="w-full md:w-[65%] lg:w-[60%] xl:w-[55%]">
          {activeTab === "description" && (
            <div className="text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl">
              <p className="mxx:text-[30px] l3d:text-[1.8vw] 2xl:leading-[120%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                id autem quos neque reprehenderit distinctio beatae cupiditate
                eos quibusdam reiciendis, inventore quidem corporis dolores
                tempore iusto eveniet quo odit voluptatibus vel exercitationem
                in! Distinctio qui id modi repellendus nihil aliquid, odio quas
                necessitatibus impedit voluptatem ipsum obcaecati minus
                inventore voluptate, dolores laboriosam deserunt iusto vel.
                Enim repellat esse mollitia fuga in omnis nostrum, quae sunt
                magnam, itaque maiores at eveniet quos cumque debitis. Iste
                porro alias, exercitationem vel molestias, expedita impedit
                harum, officiis deleniti placeat ex adipisci iure veniam ratione
                architecto vitae ab suscipit sed ipsam minima itaque consequatur
                rerum.
              </p>
            </div>
          )}
          {activeTab === "additional-info" && (
            <div className="text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl">
              <p className="mxx:text-[30px] l3d:text-[1.8vw] 2xl:leading-[120%]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                architecto earum ut ducimus nulla rem ipsam! Neque est dolor
                distinctio voluptatem rerum totam blanditiis voluptate amet
                repellendus soluta suscipit nulla commodi possimus eos vel
                eveniet quis, recusandae numquam maiores natus? Id, iusto quas
                excepturi distinctio nobis alias sit asperiores mollitia rem
                ratione sequi nemo harum optio officia exercitationem molestias
                commodi consequatur expedita explicabo!
              </p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl">
              <p className="mxx:text-[30px] l3d:text-[1.8vw] 2xl:leading-[120%]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia ullam vel explicabo autem vitae eius tenetur nam.
                Labore magnam aliquam ducimus illum voluptatem saepe ratione
                optio officia.
              </p>
            </div>
          )}
        </div>

        {/* Правая часть: Блок для фото */}
        <div className="w-full md:w-[30%] mxx:w-[20%] l3d:w-[25%] lg:w-[25%] xl:w-[30%] h-64 md:h-full lg:h-[60%] mt-4 md:mt-0 bg-gray-200 flex items-center justify-center">
          <img
            src="/Shorts/blue2.webp"
            alt="Product Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
