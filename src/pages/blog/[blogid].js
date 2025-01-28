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
const blogs = [
    {
      id: "blog-one",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "An Unforgettable Emanation of Individuality Where Elegance Finds Its Extraordinary Artistry",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-two",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Captivatingly Classy Jewelry for the Discerning Unveiling the Essence of Timelessness",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-three",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Step into the Spotlight with Glamorous Jewelry Leave Everyone Speechless",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-four",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Wearing Our Jewelry Makes the World a Funnier Place Make Everything Better Trust.",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-five",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Our Jewelry Adds a Dash of Humor to Your Fashion Game Boring Jewelry",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
    {
      id: "blog-six",
      img:'/Shorts/black2.webp',
      date: "August 12, 2023 - by Designthemes",
      author: "by Designthemes",
      title: "Because Life Deserves a Good Laugh and Some Bling Wear Our Funny Jewelry",
      description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
    },
  ];

export default function BlogDetail() {
  const router = useRouter();
  const { blogid } = router.query;

  // Проверка, готов ли router, чтобы избежать ошибок загрузки
  if (!router.isReady) {
    return <p>Загрузка...</p>;
  }

  // Поиск нужного блога по идентификатору
  const blog = blogs.find((b) => b.id === blogid);

  // Если блог не найден
  if (!blog) {
    return <p>Блог не найден</p>;
  }

  return (
    <div className="w-full h-full">
        <Aboutheader/>
        <TopSingleBlog/>
      {/* Отображение картинки блога */}
      <AboutBlog/>

      {/* Заголовок и текст блога */}
      <Stars/>
      <div className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[5%] h-auto mt-[3%]">
  <p className="mxx:text-[27px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
    Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum, ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo, elit ac orci. Curabi tinc Nunc eu rhoncus justo,
  </p>
</div>

      <TypesOfSoc/>
      <BlogHeresoc/>
      <FormWithImage/>
      <InfoBlocks/>
      <Listfooter/>
    </div>
  );
}
