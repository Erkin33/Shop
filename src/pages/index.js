import Link from "next/link";
import React, { useRef, useState } from "react";
import Header from "@/components/header";
import ProductItems from "@/components/mainlist";
import Text from "@/components/text";
import AboutUs from "@/components/aboutUs";
import Shipping from "@/components/shipping";
import Shop from "@/components/Shop";
import HoverBlock from "@/components/blogs";
import MainBlock from "@/components/MainBlock";
import MainComponent from "@/components/MainComponent";
import InstagramCarousel from "@/components/InfiniteCarousel";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import PromoPopup from "@/components/Arise";
const products = [
  { id: 'one', name: 'Romantic Florals',sell: '-15% Off',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/Black.webp' },
  { id: 'two', name: 'Romantic Florals',sell: 'Out Of Stock',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/black2.webp' },
  { id: 'three', name: 'Romantic Florals',sell: 'New',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/black3.webp' },
  { id: 'four', name: 'Romantic Florals',sell: 'New',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/blue.jpg' },
];





export default function Home() {
  function ColorChanger() {
    const [color, setColor] = useState("bg-red-500"); // Начальный цвет
  
    const handleLinkClick = (newColor) => {
      setColor(newColor); // Устанавливаем новый цвет
    };
  
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="w-[80%] h-[50%] bg-gray-100 flex justify-around items-center">
          <a
            href="#"
            onClick={() => handleLinkClick("bg-red-500")}
            className={`w-[30%] h-full ${color} transition-all duration-300`}
          ></a>
          <a
            href="#"
            onClick={() => handleLinkClick("bg-green-500")}
            className={`w-[30%] h-full ${color} transition-all duration-300`}
          ></a>
          <a
            href="#"
            onClick={() => handleLinkClick("bg-blue-500")}
            className={`w-[30%] h-full ${color} transition-all duration-300`}
          ></a>
        </div>
      </div>
    );
  }
  const info = useRef(null);
  const block = useRef(null);
  function Rechange(){
    if (info.current.style.display = 'flex'){
      info.current.style.display = 'none';
      block.current.style.display = 'flex';
    }
    else{
      info.current.style.display = 'flex';
      block.current.style.display = 'none';
    }
  }
  
    const [activeProduct, setActiveProduct] = useState(null);
  
    const handleToggleIcons = (productId) => {
      setActiveProduct((prev) => (prev === productId ? null : productId));
    };
  return (
    <div className="w-full h-full ml-auto mr-auto mx-auto">
      {/* ТОП */}
    <Header/>
    {/* Главный обьект */}
    <ProductItems/>
    {/* Текст со звездами */}
    <Text/>
    {/* Товары */}

    <div className="w-full bg-[#F5E7D6] flex flex-col items-center py-4">
      {/* Контейнер с товарами */}
      <div className="w-[90%] mxx:h-[700px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

            {/* Название, описание и цена */}
            <h2 className="text-lg font-bold text-[#CE8B39] mb-2 mxx:text-xl mxx:text-[1.5vw]">
              {product.name}
            </h2>
            <h3 className="text-sm text-gray-600 mb-2 mxx:text-base mxx:text-[1vw]">
              {product.description}
            </h3>
            <p className="text-sm text-gray-500 mb-4 mxx:text-base mxx:text-[1vw]">
              From ${product.price}
            </p>

            {/* Кнопка добавления в корзину */}
            <Link href={`/product/${product.id}`} className="w-full flex justify-center">
              <button className="bg-[#0E343D] text-white py-2 px-4 w-[80%] relative top-[-400%] mxx:py-3 mxx:text-lg">
                ADD CART
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Линия управления под товарами */}
      <div className="w-full h-16 flex justify-center items-center bg-[#F5E7D6] mt-4">
        <div className="w-[60%] h-3 bg-white rounded-full flex justify-between items-center px-2">
          <div className="h-full xl:w-[33.3%] w-[30%] md:w-[33.3%] lg:w-[20%] mxx:w-[33.3%] bg-[#0E343D] rounded-l-full cursor-pointer"></div>
          <div className="h-full xl:w-[33.3%] w-[30%] md:w-[33.3%] lg:w-[20%] mxx:w-[33.3%] hover:bg-[#0E343D] transition-all duration-300 cursor-pointer"></div>
          <div className="h-full xl:w-[33.3%] w-[30%] md:w-[33.3%] lg:w-[20%] mxx:w-[33.3%] hover:bg-[#0E343D] rounded-r-full transition-all duration-300 cursor-pointer"></div>
        </div>
      </div>
    </div>



      {/* BAnner bg-[url('/img/hero-pattern.svg')] */}
      <div className=" w-full bg-[#415A77] md:h-[450px] mxx:h-[650px] h-[400px] min-[600px]:h-[350px] xs:h-[250px] flex justify-between items-center bg-[url('/Shorts/mem.jpg')] bg-cover bg-no-repeat">
        
        <div className="w-[70%] lg:w-[50%] h-[90%] flex justify-between items-center flex-col ">

        <small className="mxx:text-[35px] mt-[10%] w-[70%] text-[#ffff] lg:text-[2vh] xs:text-[2.9vw]"> 
        Glamorous Life
        </small>
        <h1 className="mxx:text-[35px] text-[#ffff] text-[4vh] w-[71%] xs:text-[3.5vw]">
        Redefining Elegance with
Unique Charms
        </h1>
        <p className="mxx:text-[20px] text-[#ffff] lg:text-[1.7vh] xs:text-[2.5vw]  w-[71%]">
        Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus.
        </p>
        <div className="w-[100%] ml-[30%] xl:h- h-[15%] lg:mt-[1%]  mb-[10%]  flex justify-start items-center">
          <a href="#" id="next" className="mxx:text-[35px] w-[30%] text-[#00000] text-[3vh] xs:text-[2.5vw] lg:text-[2vh] font-['Arial'] h-full bg-[white] flex justify-center items-center">
          know more<img src="/ArrowWhite.svg" alt=""  className="mxx:w-[14%] des:w-[10%] xl:w-[12%] w-[19%] text-[white] lg:w-[18%] lg:h-[55%] h-[50%] ml-[5%] rounded-[100%]  bg-[#0E343D]"/>
          </a>
          
        </div>
        </div>

        <div className="w-[30%] h-full flex justify-around items-center flex-col ">

        </div>

      </div>
      {/* Srctia с картиной */}
        <AboutUs/>
        {/* Секция 3 блока */}
        <Shipping/>
        {/* Товары */}
        <Shop/>
        <div className="w-full bg-[#fff9f4] py-8 flex flex-col items-center">
  {/* Секция продуктов */}
  <div className="w-[90%] mxx:h-[500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className=" overflow-hidden flex flex-col items-center relative"
      >
        {/* Надпись в верхнем правом углу */}
        <div className="absolute mxx: w-[30%] mxx:flex mxx:justify-center mxx:h-[7%] mxx:text-[1vw] mxx:items-center z-[100] top-2 right-2 bg-[#0E343D] text-white text-xs px-2 py-1 ">
          -8% Off
        </div>

        {/* Картинка продукта */}
        <div className="w-full h-48 mxx:h-[70%] relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Интерактивный блок появляется при наведении */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img src="/ProductsEssence/Loop.svg" alt="Zoom" className="w-8 mb-2" />
            <img src="/ProductsEssence/Recheng.svg" alt="Rechange" className="w-8 mb-2" />
            <img src="/ProductsEssence/Favourite.svg" alt="Favourite" className="w-8" />
          </div>
        </div>

        {/* Название продукта */}
        <h2 className="text-center text-lg font-semibold mt-4 px-2 text-[#0E343D] mxx:text-[1vw]">
          {product.name}
        </h2>

        {/* Рейтинг и цены */}
        <div className="w-full px-4 mt-2 flex justify-between items-center">
          <img src="/stars.svg" alt="Rating" className="w-20 mxx:w-[5vw]" />
          <div className="text-right">
            <p className="text-sm text-gray-400 line-through mxx:text-[1vw]">$49.00</p>
            <p className="text-base text-[#CE8B39] mxx:text-[1vw]">$39.00</p>
          </div>
        </div>

        {/* Кнопка "Добавить в корзину" */}
        <Link href={`/product/${product.id}`} className="w-full relative mxx:top-[-31%] top-[-42.3%] flex justify-center px-4 mt-4 mb-4">
          <button className="w-[90%] bg-[#0E343D] text-white text-sm py-2 transition-transform hover:scale-105 mxx:text-[1vw]">
            Add to Cart
          </button>
        </Link>
      </div>
    ))}
  </div>

  {/* Секция "View All Products" */}
  <div className="mt-8">
  <a
    href="#"
    className="bg-[#CE8B39] text-white text-base py-2 px-6 rounded-md shadow-md flex items-center gap-2 transition-transform hover:scale-105"
  >
    View All Products
    <div className="w-5 h-5 flex justify-center items-center rounded-full bg-white">
      <img
        src="/ArrowWhite.svg" /* Изображение стрелочки черного цвета */
        alt="Arrow"
        className="w-3 h-3 text-[#CE8B39] "
      />
    </div>
  </a>
</div>

</div>

{/* Бдщги */}
    <div className=" w-full md:h-[600px] h-[1290px] mxx:h-[800px] bg-[#EFE7D4] flex flex-col justify-around items-center">
      <div className="w-[80%] xs:w-full h-[10%] flex justify-between items-center ">

      <div className="w-[40%] xs:w-full md:h-full h-full xs:h-[5%] flex flex-col justify-between">
        <p className="mxx:text-[25px] text-[3vw] md:text-[1.7vw]">
        Glamorous Life
        </p>
        <h1 className="mxx:text-[35px] xl:text-[2.3vw] text-[#0E343D] text-[4.5vw] md:text-[2.7vw]">
        Latest News & Blog
        </h1>
      </div>

      <a href="/blog" className="mxx:text-[25px] w-[27%] xl:text-[1.8vw] md:h-full xs:w-[25%] text-[2.3vw] h-full xs:h-[25%] flex justify-around items-center bg-[#000000] text-[white]">
      More Blogs <img src="/ArrowWhite.svg" className="w-[20%] xl:h-[50%] xl:w-[15%] h-[35%] ml-[5%] rounded-full bg-[#ffffff] text-[#00000]"/>
      </a>

      </div>
      <div className="w-[83%] xs:w-full md:h-[80%] xs:h-[90%] h-[80%] flex flex-col justify-between items-center">
      {/* БЛОГИ */}
      <MainComponent/>
      </div>
    </div>

{/* картина и организации */}
    <div className="w-full mxx:h-[6.7vw] h-[10vw] bg-[url('/Logos.svg')] bg-cover bg-no-repeat flex justify-between items-center]">
      {/* <img src="/Logos.svg" className="w-full h-full "/> */}
    </div>
{/* Аккорд */}
    <MainBlock/>
    {/* Фотки */}
    <InstagramCarousel/>
    {/* Футер */}
    <Footer/>
    <PromoPopup/>
    </div>
  );
}
