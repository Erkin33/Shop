"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "@/context/CartContext";

export default function BlockList() {
  const products = [
    { id: "one", name: "Romantic Florals", reinfo: "Rings & Earrings", price: 10, image: "/Shorts/Black.webp", description: "Description for Product 1" },
    { id: "two", name: "Romantic Florals", reinfo: "Rings & Earrings", price: 20, image: "/Shorts/black2.webp", description: "Description for Product 2" },
    { id: "three", name: "Romantic Florals", reinfo: "Rings & Earrings", price: 40, image: "/Shorts/black3.webp", description: "Description for Product 3" },
    { id: "four", name: "Romantic Florals", reinfo: "Rings & Earrings", price: 60, image: "/Shorts/black3.webp", description: "Description for Product 4" },
  ];

  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const upquant = () => setQuantity(quantity + 1);
  const downquant = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const product = products.find((p) => p.id === id);
  if (!product) return <p>Product not found</p>;

  const totalPrice = (quantity * product.price).toFixed(2);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="w-full 2xl:h-[1000px] h-auto mt-10 lg:mt-[0px] xs:mt-0 flex flex-col justify-around items-center  lg:h-[700px]">
      <div className="w-full h-full 2xl:h-[90%] flex flex-col xs:flex-col xs:items-center md:flex-row md:justify-around lg:flex-row">
        {/* Left Block */}
        <div className="w-full xs:h-[50%] lg:h-[100%] lg:w-[49%] flex flex-col items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover h-72 sm:h-80 md:h-96 lg:h-[70%] xl:h-[80%] 2xl:h-[85%]"
          />
          <div className="w-full flex flex-wrap gap-2 justify-between">
            <img src={products[0].image} className="w-[30%] lg:w-[31%] xl:w-[30%]" />
            <img src={products[1].image} className="w-[30%] lg:w-[31%] xl:w-[30%]" />
            <img src={products[2].image} className="w-[30%] lg:w-[31%] xl:w-[30%]" />
          </div>
        </div>

        {/* Right Block */}
        <div className="w-full lg:w-[40%] xl:w-[45%] xs:h-[50%] flex flex-col lg:px-[0px] px-4 lg:h-[70%]">
          <div className="flex flex-col">
            <p className=" mxx:text-[33px] tracking-[.25em] 2xl:text-[3vw] l3d:text-[2.4vw] xl:mb-[2%] font-[100] md:text-[2vw] text-2xl xs:text-[4.5vw] lg:text-xl xl:text-2xl 2xl:text-3xl">
              {product.reinfo}
            </p>
            <h1 className="mxx:text-[43px] text-3xl xs:text-[5.5vw] 2xl:text-[3vw] l3d:text-[2.4vw] xl:mb-[2%] md:text-[2vw] lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
              {product.name}
            </h1>
            <div className=" xl:mb-[2%] flex flex-col xs:flex-row xs:gap-1 lg:text-lg xl:text-xl">
              <p className="mxx:text-[33px] line-through l3d:text-[1.4vw] 2xl:text-[1.7vw]">Actual Price $200.00</p>
              <p className="mxx:text-[33px] l3d:text-[1.4vw] 2xl:text-[1.7vw] 2xl:ml-[5%]">
                Our Price: <span className="font-bold l3d:text-[1.4vw] mxx:text-[33px]">${totalPrice}</span>
              </p>
            </div>
            <img src="/ID/stars-review.svg" className="xl:mb-[2%] 2xl:w-[60%] xl:w-[41%] w-24 xs:w-[70%]  xl:w-36" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="mxx:text-[33px] lg:text-base xl:text-lg xl:mb-[2%] l3d:text-[1.4vw]">
              SKU : MTUO-258-kj-256-658 | Available in Stock (15 Items)
            </p>
            <p className="mxx:text-[30px] mxx:leading-[40px] lg:text-sm xl:text-base xl:mb-[2%] l3d:text-[1.4vw]">
              This 10k Caret Solded features four asymmetric organic hand-cut London Blue
              Topaz Gold that each have their own unique beauty style.
            </p>
            <div className="flex gap-2 justify-between xl:mb-[2%] items-center flex-row">
              <span className="mxx:text-[33px] l3d:text-[1.4vw] 2xl:text-[1.7vw]">Size:</span>
              {[6, 7, 8, 9].map((size) => (
                <button
                  key={size}
                  className="mxx:text-[33px] border 2xl:text-[1.7vw] l3d:text-[1.4vw] px-4 py-2 hover:bg-gray-700 hover:text-white lg:px-3 lg:py-1 xl:px-4 xl:py-2"
                >
                  {size}
                </button>
              ))}
              <span className="mxx:text-[33px] l3d:text-[1.4vw] 2xl:text-[1.7vw] underline md:text-[2vw] ml-auto xs:text-[3vw] lg:text-base xl:text-lg">
                File Size Chart
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 xl:mb-[2%]">
            <div className="flex items-center gap-2">
              <button onClick={downquant} className="mxx:text-[33px] 2xl:text-[1.7vw] l3d:text-[1.4vw] xs:h-full border px-2 py-1 lg:px-3 lg:py-2">
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="mxx:text-[33px] l3d:text-[1.4vw] 2xl:text-[1.7vw] border text-center w-12 xl:h-[100%] xl:border-[0px] xs:h-full lg:w-14"
                min="1"
              />
              <button onClick={upquant} className="mxx:text-[33px] 2xl:text-[1.7vw] l3d:text-[1.4vw] xs:h-full border px-2 py-1 lg:px-3 lg:py-2">
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="mxx:text-[33px] 2xl:text-[1.7vw] bg-black text-white px-6 py-2 l3d:text-[1.4vw] lg:px-5 lg:py-3"
            >
              Add to Cart
            </button>
          </div>

          <div className="flex items-center gap-4 xl:mb-[2%] xs:w-full pl-[1%] mt-4">
            <img src="/ID/time.svg" alt="time" />
            <p className="mxx:text-[33px] 2xl:text-[1.7vw] text-red-600 lg:text-base l3d:text-[1.4vw] xl:text-lg">
              Hurry, only 10 left in stock. Order soon!
            </p>
          </div>

          <div className="flex items-center xl:mb-[2%] gap-4 xs:w-full pl-[1%] mt-2">
            <img src="/ID/tick.svg" alt="tick" />
            <p className="mxx:text-[33px] 2xl:text-[1.7vw] lg:text-base xl:text-lg l3d:text-[1.4vw]">Free Delivery & Free Shipping</p>
          </div>

          <div className="flex items-center gap-4 xs:w-full pl-[1%] mt-2">
            <img src="/ID/tick.svg" alt="tick" />
            <p className="mxx:text-[33px] 2xl:text-[1.7vw] lg:text-base xl:text-lg l3d:text-[1.4vw]">Secure Online Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
