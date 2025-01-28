import { useState } from "react";
import React from "react";
import Link from "next/link";
export default function ListMainProduct(){
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
        <div className="w-full bg-[#EDD8C3]  flex flex-col items-center mt-[5%]">
      {/* Контейнер с товарами */}
      <div className="w-full h-[100px] mxx:h-[200px] flex flex-col justify-around items-center">
            <p className="uppercase tracking-[.25em] mxx:text-[30px]">
            Recent Collections
            </p>
            <h2 className="font-[400] text-[2vw] xs:text-[4vw] mxx:text-[30px]">
            Our Jewellery Collections
            </h2>
      </div>
      <div className="w-[100%] mxx:h-[700px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="mxx:w-full mxx:h-full p-4 flex flex-col items-center relative"
          >
            {/* Блок управления (иконки) */}
            <div className="w-full  relative">
              {activeProduct === product.id ? (
                <div className="absolute top-2 right-2 flex flex-col">
                  <img
                    src="/ProductsEssence/Loop.svg"
                    className="w-6 mb-1 lg:w-[100%] mxx:h-[2vw] mxx:w-[2vw] xss:w-[6vw]"
                    alt="Loop"
                  />
                  <img
                    src="/ProductsEssence/Recheng.svg"
                    className="w-6 mb-1 lg:w-[100%] mxx:h-[2vw] mxx:w-[2vw] xss:w-[6vw]"
                    alt="Recheng"
                  />
                  <img
                    src="/ProductsEssence/Favourite.svg"
                    className="w-6 mb-1 lg:w-[100%] mxx:h-[2vw] mxx:w-[2vw] xss:w-[6vw]"
                    alt="Favourite"
                  />
                </div>
              ) : (
                <a
                  href="#"
                  onClick={() => handleToggleIcons(product.id)}
                  className="absolute mxx:h-[2vw] mxx:text-[20px] mxx:h-[60px] xss:w-[30%] lg:w-[50%] sm:text-[1.6vw] xss:text-[center] xss:flex xss:justify-center xss:items-center xss:text-[3vw] mxx:w-[7vw] mxx:flex mxx:justify-center mxx:items-center mxx:text-center mxx:text-[.9vw] top-4 right-4 text-xs lg:text-sm lg:top-2 lg:right-2 mxx:top-1 mxx:right-1 text-[#ffffff] bg-[#0E343D] px-2 py-1 shadow"
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
                <h1 className="mxx:text-[30px] text-[#8686860] md:text-[1.5vw] xss:text-[3.5vw] tracking-[0.1vw]">
                    DIAMOND
                </h1>
                <img src="/List/heart.svg" alt="" className="w-[9%]"/>
            </div>
            {/* Название, описание и цена */}
            <h2 className="mxx:text-[30px] text-[1.4vw] lg:text-[1.8vw] md:text-[2.5vw] xss:text-[4vw] xs:text-[3vw] w-full font-[400] text-[#000000] mb-2 mxx:text-xl mxx:text-[1.5vw]">
              {product.name}
            </h2>
            <div className="w-full h-[5%] flex flex-row justify-start items-center">
            <p className="mxx:text-[30px] w-[20%] md:text-[1.9vw] xss:text-[3vw] line-through text-sm text-gray-500 mb-4 mxx:text-base mxx:text-[1vw]">
              59.00
            </p>
            <h1 className="mxx:text-[30px] w-[30%] md:text-[1.9vw] ml-[5%] xss:text-[3vw] line-trhough text-sm  mb-4 mxx:text-base mxx:text-[1vw]">
            ${product.price}
            </h1>
            </div>
            <div className="w-full h-[5%] flex justify-start items-center flex-row">
            <img src="/List/startsReview.svg" alt="" className="w-[80%] lg:w-[70%] md:w-[50%]  flex justify-start"/>
            </div>
            

            {/* Кнопка добавления в корзину */}
            <Link className="w-full relative xs:static lg:top-[-200%] top-[-15%] flex justify-center items-center" href={`/product/${product.id}`}>
  <button className="bg-[#0E343D] mxx:h-[60px] mxx:top-[-350%] md:h-[40px] w-[80%] xl:mb-[2%] md:top-[-530%] lg:top-[-420%] text-white x:top-[-680%] xss:top-[-360%] xss:h-[70px] sm:h-[60px] xs:top-[-600%] relative top-[-400%]  mxx:text-lg">
    ADD CART
  </button>
</Link>

          </div>
        ))}
      </div>

      <div className="w-[50%] h-[0.7vw] rounded-[15px] overflow-hidden flex flex-row justify-center items-center bg-[red] my-[1%]">
          <div className="w-[50%] h-full bg-[#000000]"></div>
          <div className="w-[50%] h-full bg-[#ffffff]"></div>

      </div>

      </div>
    )
}