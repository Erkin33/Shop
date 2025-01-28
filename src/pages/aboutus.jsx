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
import Aboutheader from "@/components/aboutheader";
import TopCenter from "@/Aboutcomp/topcenter";
import About from "@/Aboutcomp/block";
import TextAbout from "@/Aboutcomp/text";
import EnquireSection from "@/Aboutcomp/video";
import ProductsInfo from "@/Aboutcomp/Products";
import ShippingAbout from "@/Aboutcomp/infoshop";
import Contact from "@/Aboutcomp/contact";
const products = [
  { id: 'one', name: 'Romantic Florals',sell: '-15% Off',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/Black.webp' },
  { id: 'two', name: 'Romantic Florals',sell: 'Out Of Stock',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/black2.webp' },
  { id: 'three', name: 'Romantic Florals',sell: 'New',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/black3.webp' },
  { id: 'four', name: 'Romantic Florals',sell: 'New',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/blue.jpg' },
];

export default function App(){
    return(
        <div className="w-full h-full ml-auto mr-auto mx-auto">
             {/* ТОП */}
             {/* ХЕадер */}
        <Aboutheader/>
        {/* Три блока */}
        <TopCenter/>
        {/* БЛОК */}
        <About/>
        {/* Text */}
        <TextAbout/>
        {/* Video */}
        <EnquireSection/>
        {/* Products */}
        <div className="w-full h-[100px] l3d:h-[150px] flex flex-col justify-around items-center">
          <p className="w-full text-center md:text-[2.5vw] text-[1vw] xs:text-[5.5vw]">
          OUR TEAM MEMBERS
          </p>
          <h1 className="w-full text-center md:text-[3.5vw] text-[3vw] xs:text-[4vw]">
          Our Professional Team
          </h1>
        </div>
        <ProductsInfo/>
          {/* SHIPPING */}
        <ShippingAbout/>
        {/* Contact */}
        <Contact/>
        {/* Footer */}
        <Footer/>
        </div>
    )
}