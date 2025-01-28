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
import TopBlog from "@/components/aboutblog";

const blogs = [
  {
    id: "blog-one",
    img:'/Shorts/black2.webp',
    date: "August 12, 2023",
    author: "by Designthemes",
    title: "An Unforgettable Emanation of Individuality Where Elegance Finds Its Extraordinary Artistry",
    description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
  },
  {
    id: "blog-two",
    img:'/Shorts/black2.webp',
    date: "August 12, 2023",
    author: "by Designthemes",
    title: "Captivatingly Classy Jewelry for the Discerning Unveiling the Essence of Timelessness",
    description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
  },
  {
    id: "blog-three",
    img:'/Shorts/black2.webp',
    date: "August 12, 2023",
    author: "by Designthemes",
    title: "Step into the Spotlight with Glamorous Jewelry Leave Everyone Speechless",
    description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
  },
  {
    id: "blog-four",
    img:'/Shorts/black2.webp',
    date: "August 12, 2023",
    author: "by Designthemes",
    title: "Wearing Our Jewelry Makes the World a Funnier Place Make Everything Better Trust.",
    description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
  },
  {
    id: "blog-five",
    img:'/Shorts/black2.webp',
    date: "August 12, 2023",
    author: "by Designthemes",
    title: "Our Jewelry Adds a Dash of Humor to Your Fashion Game Boring Jewelry",
    description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
  },
  {
    id: "blog-six",
    img:'/Shorts/black2.webp',
    date: "August 12, 2023",
    author: "by Designthemes",
    title: "Because Life Deserves a Good Laugh and Some Bling Wear Our Funny Jewelry",
    description: "Suspendisse viverra commodo semper. Donec facilisis odio vitae diam lacinia, vel venenatis nibh mattis. Vestibulum odio dolor.",
  },
];

export default function BlogList() {
  return (
    <div className="w-full h-full">
      <Aboutheader/>
      <TopBlog/>
      <div className="w-full px-4 sm:px-6 lg:px-12 py-8 bg-gray-50">
  {/* Сетка с блогами */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogs.map((blog) => (
      <div
        key={blog.id}
        className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        {/* Изображение */}
        <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Контент */}
        <div className="p-4 flex flex-col space-y-3">
          <div className="flex justify-between items-center text-gray-500 text-sm">
            <span>{blog.date}</span>
            <span className="italic">By {blog.author}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black leading-snug">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-600">{blog.description}</p>
        </div>

        {/* "Read More" на hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <Link
            href={`/blog/${blog.id}`}
            className="text-white px-5 py-2 bg-black rounded-md hover:bg-gray-800 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    ))}
  </div>

  {/* Линия и пагинация */}
  <div className="mt-12 flex flex-col items-center">
    <div className="w-11/12 border-b border-gray-300"></div>

    <div className="mt-6 flex items-center space-x-3">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
            item === 1
              ? "bg-black text-white"
              : "border border-gray-300 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
</div>

    <Listfooter/>
    </div>
    
  );
}
