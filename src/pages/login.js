"use client";
import React, { useState, useEffect } from "react";
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
import PolicyAcc from "@/components/policyAcc";
import Contact from "@/Aboutcomp/contact";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isCreateAccount, setIsCreateAccount] = useState(false); // Для переключения между "Log In" и "Create Account"
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false); // Состояние для модального окна

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setEmail(userEmail);
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = () => {
    if (validateInputs()) {
      localStorage.setItem("userEmail", email);
      setIsRegistered(true);
    }
  };

  const handleLogin = () => {
    if (validateInputs()) {
      // Логика для входа
      alert("Logged In!");
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true); // Открыть модальное окно сброса пароля
  };

  const validateInputs = () => {
    let valid = true;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/"; // Redirect to Google login
  };

  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com/login/"; // Redirect to Facebook login
  };

  const handlePasswordReset = () => {
    // Логика для сброса пароля (например, отправка email для сброса пароля)
    alert("Password reset instructions sent to " + email);
    setShowForgotPasswordModal(false); // Закрыть модальное окно после отправки
  };

  return (
    <div className="w-full h-full">
      {/* Header */}
      <Aboutheader />
      {/* Login / Create Account */}
      <div className="min-h-screen flex  md:my-[0%] items-center justify-center bg-[#FFF9F4] p-4">
        <div className="w-full max-w-md mxx:max-w-[50%] bg-white shadow-lg rounded-lg p-6">
            <img src='/Shorts/black2.webp' className="w-full"/>
          {isRegistered ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 mxx:text-[30px]">Welcome Back!</h2>
              <p className="mb-4">You are registered with email:</p>
              <p className="text-lg font-medium text-gray-700 mb-6">{email}</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mb-4">
                {isCreateAccount ? "Create Your Account" : "Log In"}
              </h2>
              <p className="text-center text-1x4 text-gray-500 mb-6 tracking-[.1em]">
                {isCreateAccount ? "Let’s get started with your 30 days free trial" : "Welcome back, please log in to your account"}
              </p>

              <button
                onClick={handleGoogleLogin}
                className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-full mb-4 flex items-center justify-center hover:bg-gray-100"
              >
                <img src="/Login/Google.svg" alt="Google" className="w-5 h-5 mr-2" />
                Login With Google
              </button>

              <div className="text-center text-gray-400 mb-4 flex justify-around items-center flex-row">
                <div className="w-[40%] h-[1px] border-t-[1px] border-[]"></div>
                OR
                <div className="w-[40%] h-[1px] border-t-[1px] border-[]"></div>
              </div>

              <div className="mb-4 border border-gray-300 rounded-full py-2 px-4 flex items-center">
                <img src="/Login/mail.svg" alt="User" className="w-10 h-4 mr-4" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-grow focus:outline-none focus:border-none text-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

              <div className="mb-4 flex border border-gray-300 rounded-full py-2 px-4 active:outline-none items-center relative">
                <img src="/Login/key.svg" alt="Password" className="w-10 h-4 mr-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="flex-grow text-gray-700 focus:outline-none focus:border-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-4 text-gray-500 cursor-pointer"
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center text-sm text-gray-500">
                  <input type="checkbox" className="mr-2" /> Remember Me
                </label>
                <a href="#" onClick={handleForgotPassword} className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                onClick={isCreateAccount ? handleRegister : handleLogin}
                className="w-full bg-[#AC805D] text-white py-2 rounded-full font-medium hover:bg-[#9c714b] transition"
              >
                {isCreateAccount ? "Create Account" : "Log In"}
              </button>

              <div className="text-center text-gray-400 my-4">OR</div>

              <button
                onClick={handleFacebookLogin}
                className="w-full bg-[#ffffff] text-black border-[1px] py-2 rounded-full mb-4 flex items-center justify-center hover:bg-[#145dbf]"
              >
                <img src="/Login/Face.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                Login With Facebook
              </button>

              <p className="text-center text-sm text-gray-500">
                {isCreateAccount ? "Already have an account? " : "Don’t have an account? "}
                <a
                  href="#"
                  onClick={() => setIsCreateAccount(!isCreateAccount)}
                  className="text-blue-500 hover:underline"
                >
                  {isCreateAccount ? "Log In" : "Create An Account"}
                </a>
              </p>
            </>
          )}
        </div>
      </div>

      {/* Modal for Forgot Password */}
      {showForgotPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Reset Your Password</h2>
            <p className="mb-4 text-center text-gray-500">Enter your email to receive password reset instructions.</p>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-gray-300 rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:border-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              onClick={handlePasswordReset}
              className="w-full bg-[#AC805D] text-white py-2 rounded-full font-medium hover:bg-[#9c714b] transition"
            >
              Send Reset Instructions
            </button>

            <button
              onClick={() => setShowForgotPasswordModal(false)}
              className="w-full text-center text-blue-500 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Listfooter />
    </div>
  );
};

export default RegistrationPage;
