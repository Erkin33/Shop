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
import TopContact from "@/components/contactyop";
import ContactForm from "@/components/formcontact";
import ContactCards from "@/components/complog";
import StoreLocationshere from "@/components/store";
import TopLoc from "@/components/storetop";
export default function Question(){
    return(
        <div className="w-full h-full">
        <Aboutheader/>

        {/* text */}
        <TopLoc/>


        {/* MAIN */}
        <StoreLocationshere/>
        {/* Footer */}
        <Listfooter/>
    </div>
    )
}