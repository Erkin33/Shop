import React, { useState } from "react";
import Aboutheader from "@/components/aboutheader";
import TopShop from "@/Shop/topshop";
import Listfooter from "@/components/listfooter";
import ListofproductsShip from "@/Shop/products";
import ProductListInfo from "@/components/productlist";
export default function Listproduct() {
  const [hero, ualtro] = useState(0)
  const Up = () => {
    ualtro((prevHero) => {
      const newHero = prevHero + 1;
      console.log("Updated value inside setState:", newHero);
      return newHero;
    });
  };
  function Last(){
    console.log(hero)
  }
  return (
    <div className="w-full h-full">
      {/* Заголовок */}
      <Aboutheader />

      {/* INFO WITH ICONS */}
      <TopShop />

      {/* Основной контент */}
      <ProductListInfo/>
      <Listfooter/>
    </div>
    
  );
}
