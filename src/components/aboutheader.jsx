import React, { createRef, useRef } from "react";
import { FaceBook } from "@/Assets/facebook";
import { Insta } from "@/Assets/insta";
import { Watsapp } from "@/Assets/watsapp";
import { Icon } from "@/Assets/icon";
import { Search } from "@/Assets/search";
import { Profile } from "@/Assets/profile";
import { CART } from "@/Assets/CART";
export default function Aboutheader() {
    const Adv = () => {
        return(
            <p className="text-[white] mxx:text-[35px] md:text-[1.6vw]  xs:text-[2vw]">
                Your way to business success 🔥 Save upto 80% OFF to all premium coded & Design Products
            </p>
        )
    }
    const IconSearch = () => {
      return(
          <a href="#">
            <svg className="mxx:w-[2em] mxx:h-[2rem]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 12.9977C2.91554 12.9977 0 10.0822 0 6.5C0 2.91785 2.91554 0 6.5 0C10.0845 0 13 2.91554 13 6.5C13 10.0845 10.0845 13 6.5 13V12.9977ZM6.5 1.1533C3.55216 1.1533 1.1533 3.55216 1.1533 6.5C1.1533 9.44783 3.55216 11.8467 6.5 11.8467C9.44783 11.8467 11.8467 9.44783 11.8467 6.5C11.8467 3.55216 9.44783 1.1533 6.5 1.1533Z" fill="black"/>
    <path d="M15.3988 16C15.2452 16 15.0916 15.9424 14.974 15.8248L10.1764 11.0262C9.9412 10.791 9.9412 10.4117 10.1764 10.1764C10.4116 9.94119 10.7908 9.94119 11.026 10.1764L15.8236 14.975C16.0588 15.2102 16.0588 15.5895 15.8236 15.8248C15.706 15.9424 15.5524 16 15.3988 16Z" fill="black"/>
    </svg>
          </a>
      )
    }
    const IconProfile = () => {
      return(
        <a href="/login">
          <svg className="mxx:w-[2em] mxx:h-[2rem]"  width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4882 16H1.5127C1.05451 16 0.626288 15.7834 0.33724 15.4065C0.0460504 15.0229 -0.0652868 14.5264 0.037486 14.0435C0.64984 11.1212 3.15707 9 6.00045 9C8.84383 9 11.3511 11.1212 11.9634 14.0435C12.064 14.5264 11.9548 15.0229 11.6637 15.4065C11.3767 15.7834 10.9485 16 10.4882 16ZM6.00045 10.1283C3.65594 10.1283 1.58764 11.8772 1.08234 14.2872C1.05237 14.4339 1.08234 14.5851 1.17227 14.7002C1.22151 14.7634 1.33071 14.8717 1.5127 14.8717H10.4882C10.6702 14.8717 10.7794 14.7634 10.8286 14.7002C10.9164 14.5851 10.9485 14.4339 10.9186 14.2872C10.4133 11.8772 8.34495 10.1283 6.00045 10.1283Z" fill="black"/>
      <path d="M6 7.99783C3.79445 7.99783 2 6.20337 2 3.99782C2 1.79228 3.79445 0 6 0C8.20555 0 10 1.79445 10 4C10 6.20555 8.20555 8 6 8V7.99783ZM6 1.08755C4.39478 1.08755 3.08755 2.3926 3.08755 4C3.08755 5.6074 4.3926 6.91245 6 6.91245C7.6074 6.91245 8.91245 5.6074 8.91245 4C8.91245 2.3926 7.6074 1.08755 6 1.08755Z" fill="black"/>
      </svg>
        </a>
      )
  }
  const IconCart = () => {
    return(
      <a href="/cart" className="">
        <svg className="mxx:w-[2em] mxx:h-[2rem]"  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.0847 16H4.91525C2.75636 16 1 14.2474 1 12.093V9.52854C1 9.23679 1.23729 9 1.52966 9C1.82203 9 2.05932 9.23679 2.05932 9.52854V12.093C2.05932 13.6638 3.3411 14.9429 4.91525 14.9429H11.0847C12.6589 14.9429 13.9407 13.6638 13.9407 12.093V9.52854C13.9407 9.23679 14.178 9 14.4703 9C14.7627 9 15 9.23679 15 9.52854V12.093C15 14.2474 13.2436 16 11.0847 16Z" fill="black"/>
    <path d="M9.49512 4C9.24686 4 9.03263 3.78935 8.9986 3.50086L8.72831 1.14253H6.26569L5.9954 3.50086C5.95936 3.81454 5.70909 4.03663 5.4348 3.99313C5.16051 3.95192 4.9683 3.66342 5.00434 3.35203L5.33269 0.496852C5.36473 0.212936 5.57695 0 5.82922 0H9.17078C9.42105 0 9.63527 0.212936 9.66731 0.496852L9.99566 3.35203C10.0317 3.66571 9.83949 3.95192 9.5652 3.99313C9.54318 3.99542 9.52115 3.99771 9.49913 3.99771L9.49512 4Z" fill="black"/>
    <path d="M8.08008 10H7.92059C7.08016 10 6.28062 9.61357 5.72647 8.93896C5.17232 8.26435 4.91467 7.36487 5.02509 6.47412C5.0619 6.17503 5.3175 5.96544 5.59765 6.00474C5.87779 6.04403 6.0741 6.31693 6.03729 6.61603C5.96572 7.19458 6.1334 7.77968 6.49329 8.21851C6.85318 8.65733 7.37461 8.9084 7.92059 8.9084H8.08008C8.62606 8.9084 9.14545 8.65733 9.50738 8.21851C9.86932 7.77968 10.035 7.19458 9.96338 6.61603C9.92657 6.31693 10.1249 6.04403 10.403 6.00474C10.6832 5.96762 10.9388 6.17721 10.9756 6.47412C11.084 7.36487 10.8283 8.26217 10.2742 8.93896C9.72005 9.61357 8.92051 10 8.08008 10Z" fill="black"/>
    <path d="M3.06427 10C2.04924 10 1.10073 9.49893 0.52991 8.65739C-0.0409108 7.81799 -0.158938 6.75589 0.216602 5.81585L1.0621 3.67024C1.93979 1.44111 4.05998 0 6.46344 0C6.61795 0 6.76387 0.0663812 6.86688 0.182013C6.96988 0.297645 7.01495 0.45182 6.99563 0.603854L6.6437 3.27409C6.60507 3.56745 6.33683 3.77516 6.04283 3.73448C5.74884 3.69593 5.54283 3.42612 5.58146 3.1349L5.84755 1.10921C4.15011 1.32762 2.7016 2.43897 2.05997 4.0621L1.21447 6.20985C0.967682 6.83083 1.04279 7.50321 1.41833 8.05782C1.79602 8.61242 2.39473 8.92934 3.06427 8.92934C4.06213 8.92934 4.91192 8.1863 5.04068 7.19914L5.13081 6.53961C5.17158 6.24625 5.43982 6.04283 5.73382 6.08137C6.02781 6.12206 6.23382 6.38972 6.19305 6.68308L6.10292 7.34047C5.90549 8.85653 4.59862 10 3.06212 10H3.06427Z" fill="black"/>
    <path d="M12.9388 9.99572C11.402 9.99572 10.0948 8.85035 9.89729 7.33248L9.80929 6.67951C9.7685 6.38621 9.97456 6.11646 10.2686 6.07793C10.5627 6.03939 10.8331 6.24277 10.8718 6.53607L10.9619 7.19332C11.0907 8.1824 11.9407 8.92528 12.9388 8.92528C13.6085 8.92528 14.2095 8.60843 14.5851 8.05395C14.9608 7.50161 15.0359 6.82937 14.789 6.20852L13.9412 4.05909C13.5935 3.17491 12.9925 2.42346 12.2026 1.88825C11.5844 1.46864 10.8868 1.20317 10.1527 1.10897L10.4189 3.13423C10.4575 3.42753 10.2515 3.69514 9.95739 3.73368C9.66333 3.77435 9.39502 3.56669 9.35639 3.27339L9.00437 0.603725C8.98505 0.451723 9.03013 0.297581 9.13316 0.181974C9.23618 0.0663669 9.38214 0 9.53669 0C10.7086 0 11.8398 0.346821 12.8079 1.00621C13.7759 1.6656 14.5143 2.58617 14.9393 3.67159L15.785 5.81888C16.1585 6.75658 16.0404 7.8206 15.4695 8.65767C14.8985 9.4969 13.9498 10 12.9345 10L12.9388 9.99572Z" fill="black"/>
    </svg>
      </a>
    )
  }
    const NAVIGATION = () => {
      return(
        <div className="w-full h-full mt-[1%] z-[10000] md:flex-row  flex xs:text-[2vh] xs:flex-col justify-around items-center">
          <Icon/>
          
          <ul className="w-[30%] mxx:w-[50%] xs:w-full xs:justify-around md:w-[35%] min-[600px]:h-[30%] h-full justify-between items-center flex flex-row">
            <li><a href="/" className="md:text-[1.5vw] min-[600px]:text-[2.7vw] xs:text-[3.5vw] lg:text-[1.6vw] mxx:text-[1.7vw] text-[#CE8B39] mxx:text-[35px]">Home</a></li>
            <li><a href="/listofproducts" className="md:text-[1.5vw] min-[600px]:text-[2.7vw] xs:text-[3.5vw] lg:text-[1.6vw] mxx:text-[1.7vw] mxx:text-[35px]">Collection</a></li>
            <li><a href="/listofproducts" className="md:text-[1.5vw] min-[600px]:text-[2.7vw] xs:text-[3.5vw] lg:text-[1.6vw] mxx:text-[1.7vw] mxx:text-[35px]">Shop</a></li>
            <li><a href="/blog" className="md:text-[1.5vw] min-[600px]:text-[2.7vw] xs:text-[3.5vw] lg:text-[1.6vw] mxx:text-[1.7vw] mxx:text-[35px]">Blog</a></li>
            <li><a href="/aboutus" className="md:text-[1.5vw] min-[600px]:text-[2.7vw] xs:text-[3.5vw] lg:text-[1.6vw] mxx:text-[1.7vw] mxx:text-[35px]">Contact Us</a></li>
          </ul>

          
          <div className="lg:h-full w-[20%] min-[600px]:h-[40%] xs:w-full md:w-[35%] lg:w-[25%] h-full flex flex-row justify-between items-center">
            <div className="w-full h-full flex flex-row justify-between items-center ">
              <IconSearch/>
            <IconProfile/>
            <IconCart/>

            <a href="/storelocation" className="bg-[#AC805D] text-center lg:text-[1.7vh] align-center w-[60%] h-[80%] center flex justify-center items-center text-[#ffffff] min-[600px]:text-[2.7vw] xs:text-[3vw] md:text-[1.7vw] mxx:text-[1.4vw] mxx:text-[33px]">Get Special Offers</a>
            </div>
            
          </div>
        </div>
      )
    }
    const Options = () => {
      const disapper = useRef(null)
      console.log(disapper)
      const changeDefault = () => {
        if(disapper.current.style.display !== 'none'){
          disapper.current.style.display = 'none'
        }
        else {
          disapper.current.style.display = 'flex'
        }
      }
        return(
          <div className="flex justify-center flex-col items-center w-[10%] h-[100%]">
          <div className="flex flex-row justify-center items-center w-full h-[50%]">
          <h3 className="text-[white] xs:text-[3vw] md:text-[2vw] mxx:text-[33px]">EN</h3>
          <button onClick={changeDefault} className="w-[20%] md:text-[2vw] xs:text-[3.5vw] py-[0em] px-[0em] bg-[#000000] text-[white]">&#x1F847;</button><br />
          
          </div>
          <div ref={disapper} style={{display:"none"}} className="bg-[red] z-[100] h-[10%] w-[10%] absolute flex flex-col justify-center items-center mr-[0%] mt-[9%] mxx:text-[33px]">
            <a className="w-full md:text-[2vw] text-center flex justify-center z-[1000] items-center h-1/2 bg-[white] cursor-pointer hover:bg-[#282c34] xs:text-[3vw] mxx:text-[33px]">RU</a>
            <a className="w-full md:text-[2vw] text-center flex justify-center z-[1000] items-center h-1/2 bg-[white] cursor-pointer hover:bg-[#282c34] xs:text-[3vw] mxx:text-[33px]">EU</a>
          </div>
        </div>
        )
    }
  return (
    <header className="flex justify-between flex-col h-[5em] mxx:h-[10em] bg-[#000000]">
        <div className="w-full h-[50%] flex justify-around flex-row items-center bg-[#000000]">
            {/* <img src={FaceBook} alt="" width={70} height={70}/> */}
            <div className="lg:w-[8%] md:w-[10%] xs:hidden  mxx:flex mxx:h-[100%] w-[6%] h-[10%] justify-between items-center flex flex-row">
                <FaceBook/>
                <Insta/>
                <Watsapp/>
            </div>
            <Adv/>
            <Options/>
        </div>
        <div className="w-full h-[90%] flex justify-around flex-row ">
            <NAVIGATION/>
        </div>
      
    </header>
  );
}