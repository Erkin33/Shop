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
import TopQuest from "@/components/topQuest";
import Contact from "@/Aboutcomp/contact";
export default function Question(){
    return(
        <div className="w-full h-full">
          {/* header */}
        <Aboutheader/>
        {/* Top */}
        <TopQuest/>
        {/* Accord */}
        <FAQAccordion/>
        {/* COntact */}
        <Contact/>
        {/* Footer */}
      <Listfooter/>
    </div>
    )
}