"use client";
import { useState } from "react";

export const products = [
    {
        src: '/About/MEMBERS/Erkin.jpg',
        mainInfo: 'Imperior',
        info: 'The main character',
        soc: '/About/socials.svg',
    },
    {
        src: '/About/MEMBERS/Sardor.jpg',
        mainInfo: 'Second-imperior',
        info: 'The second-face',
        soc: '/About/socials.svg',
    },
    {
        src: '/About/MEMBERS/Odiloff.jpg',
        mainInfo: 'Second-imperior',
        info: 'The second-face',
        soc: '/About/socials.svg',
    },
    {
        src: '/About/MEMBERS/Reyden.jpg',
        mainInfo: 'Beautiful',
        info: 'The third-face',
        soc: '/About/socials.svg',
    },
];

export default function ProductsInfo() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="w-full bg-[#fff9f4] flex flex-wrap justify-center gap-8 px-6 py-8 lg:flex-nowrap lg:justify-between lg:items-center">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="w-[80%] h-auto flex flex-col justify-around items-center relative xs:w-[90%] sm:w-[45%] md:w-[30%] lg:w-[20%] lg:h-[300px] l3d:h-[400px]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setTimeout(() => setHoveredIndex(null), 500)} // Задержка перед скрытием
                >
                    {/* Основное изображение */}
                    <img
                        src={product.src}
                        alt=""
                        className="w-full l3d:h-[80%] h-[70%] object-cover xs:h-[150px] sm:h-[200px] lg:h-[200px] rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    {/* Информация */}
                    <h1 className="w-[80%] l3d:text-[1.5vw] text-center text-[1.5vw] font-semibold xs:text-[5vw] sm:text-[4vw] md:text-[2vw] lg:text-[1vw]">
                        {product.mainInfo}
                    </h1>
                    <p className="w-[80%] l3d:w-[95%] l3d:text-[1.4vw] text-center uppercase text-gray-600 xs:text-[3.5vw] sm:text-[3vw] md:text-[1.5vw] lg:text-[0.9vw]">
                        {product.info}
                    </p>
                    {/* Социальный блок */}
                    <img
                        src={product.soc}
                        alt="Socials"
                        className={`absolute lg:top-[100%] top-[90%] w-[50%] h-[auto] transition-opacity duration-300 ${
                            hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                        } lg:w-[40%]`}
                    />
                </div>
            ))}
        </div>
    );
}
