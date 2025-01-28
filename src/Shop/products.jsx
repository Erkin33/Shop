import { useState } from "react";
import React from "react";
import Link from "next/link";
export default function ListofproductsShip(){
    const products = [
        { id: 'one', name: 'Anchor Diamond Ring',sell: '-15% Off',description: 'Wrap Maxi Dress Blush', price: '39.00', image: '/Shorts/Black.webp' },
        { id: 'two', name: 'Akila diamond pentent',sell: 'Out Of Stock',description: 'Wrap Maxi Dress Blush', price: '39.00', image: '/Shorts/black2.webp' },
        { id: 'three', name: 'Breah diamond bracelet',sell: 'New',description: 'Wrap Maxi Dress Blush', price: '39.00', image: '/Shorts/black3.webp' },
        { id: 'four', name: 'Breah diamond bracelet',sell: 'New',description: 'Wrap Maxi Dress Blush', price: '39.00', image: '/Shorts/blue.jpg' },
      ];
      const [activeProduct, setActiveProduct] = useState(null);
  
    const handleToggleIcons = (productId) => {
      setActiveProduct((prev) => (prev === productId ? null : productId));
    };
    return(
        <div className="w-full  flex flex-col items-center py-4">
      {/* Контейнер с товарами */}
      <div className="w-[100%] mxx:h-[700px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="mxx:w-full mxx:h-full p-4 flex flex-col items-center relative"
          >
            {/* Блок управления (иконки) */}
            <div className="w-full relative">
              {activeProduct === product.id ? (
                <div className="absolute top-2 right-2 flex flex-col">
                  <img
                    src="/ProductsEssence/Loop.svg"
                    className="w-6 mb-1 mxx:h-[2vw] mxx:w-[2vw]"
                    alt="Loop"
                  />
                  <img
                    src="/ProductsEssence/Recheng.svg"
                    className="w-6 mb-1 mxx:h-[2vw] mxx:w-[2vw]"
                    alt="Recheng"
                  />
                  <img
                    src="/ProductsEssence/Favourite.svg"
                    className="w-6 mb-1 mxx:h-[2vw] mxx:w-[2vw]"
                    alt="Favourite"
                  />
                </div>
              ) : (
                <a
                  href="#"
                  onClick={() => handleToggleIcons(product.id)}
                  className="absolute mxx:h-[2vw] mxx:w-[7vw] mxx:flex mxx:justify-center mxx:items-center mxx:text-center mxx:text-[.9vw] top-4 right-4 text-xs lg:text-sm lg:top-2 lg:right-2 mxx:top-1 mxx:right-1 text-[#ffffff] bg-[#0E343D] px-2 py-1 shadow"
                >
                    {product.sell}
                </a>
              )}
            </div>

            {/* Изображение */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[100%] object-cover mb-4 mxx:h-[100%]"
            />
            <div className="w-full h-[5%] flex flex-row justify-between items-center">
                <h1 className="text-[#868686] tracking-[0.1vw]">
                    DIAMOND
                </h1>
                <img src="./List/heart.svg" alt="" className="w-[9%]"/>
            </div>
            {/* Название, описание и цена */}
            <h2 className="text-[1.1vw] w-full font-[400] text-[#CE8B39] mb-2 mxx:text-xl mxx:text-[1.5vw]">
              {product.name}
            </h2>
            <div className="w-full h-[5%] flex flex-row justify-start items-center">
            <p className="w-[20%] line-through text-sm text-gray-500 mb-4 mxx:text-base mxx:text-[1vw]">
              59.00
            </p>
            <h1 className="w-[30%] ml-[5%] line-trhough text-sm  mb-4 mxx:text-base mxx:text-[1vw]">
            ${product.price}
            </h1>
            </div>
            <div className="w-full h-[5%] flex justify-start items-center flex-row">
            <img src="./List/startsReview.svg" alt="" className="w-[80%]  flex justify-start"/>
            </div>
            

            {/* Кнопка добавления в корзину */}
            <Link href={`/product/${product.id}`} className="w-full flex justify-center">
              <button className="bg-[#0E343D] text-white py-2 px-4 w-[80%] relative top-[-400%] mxx:py-3 mxx:text-lg">
                ADD CART
              </button>
            </Link>
          </div>
        ))}
      </div>
      </div>
    )
}