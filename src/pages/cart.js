"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import TopId from "@/components/topid";
import Listfooter from "@/components/listfooter";
import Aboutheader from "@/components/aboutheader";
import ProductTabs from "@/components/addition";
import BlockList from "@/components/listproductblock";
import ListMainProduct from "@/components/mainProductlist";
import Link from "next/link";
import AboutBlog from "@/components/cartblog";
import TopBlog from "@/components/aboutblog";
import TopSingleBlog from "@/components/TopSingle";
import Stars from "@/components/Stars";
import TypesOfSoc from "@/components/types";
import BlogHeresoc from "@/components/blogabout";
import FormWithImage from "@/components/comment";
import InfoBlocks from "@/components/threeBlocks";
import FAQAccordion from "@/components/QuestAcc";
import TopPrivacy from "@/components/topprivacy";
import PolicyAcc from "@/components/policyAcc"
import Contact from "@/Aboutcomp/contact";
import ShippingTwo from "@/components/Cart/Shippingtwo";
import { useCart } from "@/context/CartContext";
import Topcart from "@/components/Cart/carttop";
export default function Cart() {
  const { cart, updateCartItemQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const increaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateCartItemQuantity(id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(id, item.quantity - 1);
    }
  };

  return (
    <div className="w-full h-full  ">
      {/* Header */}
      <Aboutheader />
      {/* TEXT */}
      <Topcart />
      <div className="bg-[#FAF6F2] p-8 text-[#191919] font-serif w-full">
        <p className="uppercase tracking-[.25em]">Glamorous Life</p>
        <h1 className="text-3xl font-bold mb-6">Shipping & Returns</h1>

        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[70%] space-y-6">
            {cart.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center p-4 border-b border-[#000000] justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mb-4 md:mb-0"
                  />

                  <div className="flex flex-col flex-1 pl-4">
                    <p className="uppercase tracking-[.25em] text-sm text-gray-600">Romantic Florals</p>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">Size: XL / Color: Grey</p>
                  </div>

                  <div className="flex items-center border border-[#000000] rounded-full">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center space-x-6 pl-6">
                    <span className="text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="w-full lg:w-[30%]">
            <div className="p-6 border-l-[1px] border-[#000000] sticky top-6">
              <h2 className="text-lg mb-4">Shipping Estimates</h2>
              <label>Country/Region</label>
              <input
                type="text"
                className="bg-[#FAF6F2] w-full p-2 mb-2 border border-[#000000] rounded-full"
              />
              <label>State</label>
              <input
                type="text"
                className="bg-[#FAF6F2] w-full p-2 mb-2 border border-[#000000] rounded-full"
              />
              <label>Postal/ZIP Code</label>
              <input
                type="text"
                className="bg-[#FAF6F2] w-full p-2 mb-4 border border-[#000000] rounded-full"
              />
              <button className="w-full bg-black border border-[#000000] rounded-full text-white py-2 mb-4">
                Calculate Shipping
              </button>
              <div className="text-lg font-serif flex justify-between items-center">
                <p className="text-lg font-serif">Subtotal:</p>
                <p className="text-lg font-serif">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="text-lg font-serif flex justify-start items-center">
                <img src="/Login/Warn.svg" alt="Warning" />
                <p className="ml-[3%]">Taxes Calculated At Checkout</p>
              </div>
              <div className="w-full h-[1px] border-t-[1px] border-[#000000]"></div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  I Agree With The <a href="#" className="underline">Terms & Conditions</a>
                </label>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-2 mt-4 border border-[#000000] rounded-full"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[70%] my-[5vw] flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[50%] flex pl-[4%]">
            <input type="checkbox" />
            <h2 className="ml-[3%] text-[#686257]"> Gift wrap your purchase for just $9.99</h2>
          </div>
          <div className="w-full md:w-[45%] flex justify-around items-center mt-4 md:mt-0">
            <div className="w-[40%] bg-black text-white flex justify-center py-2 rounded-full">
              Return To Store
            </div>
            <div className="w-[40%] border-[1px] border-[#000000] flex justify-center py-2 rounded-full">
              Empty Cart
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[70%] h-[300px] flex flex-col gap-4 p-4">
          <h2 className="text-lg font-semibold">Order Special Instructions:</h2>
          <textarea
            className="w-full h-[200px] border border-[#000000] p-4 text-sm text-[#686257] focus:outline-none focus:ring-2 focus:ring-black resize-none"
            placeholder="Additional Information"
          />
        </div>
      </div>

      <ShippingTwo />
      <Listfooter />
    </div>
  );
}
