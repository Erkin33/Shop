import React from "react";

const CallToAction = () => {
  return (
    <div className="">
      <div className="mx-auto flex flex-col md:flex-row">
        {/* Ready to Shop Section */}
        <div className="flex-1 bg-[#DDB892] text-center p-8 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Ready To Shop?
          </h2>
          <p className="text-black text-sm md:text-base mb-6">
            Curabitur finibus odio ac lectus semper vestibulum sit amet vel
            ligula. Pellentesque posuere diam ut ultricies cursus. Integer
            ipsum arcu, rutrum ac quam.
          </p>
          <button className="mx-auto mxx:w-[20%] w-full md:w-2/3 lg:w-1/2 h-auto bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition flex flex-row justify-center items-center">
            Get Started
            <div className="ml-2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <img src="/ArrowWhite.svg" alt="" className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Talk With Our Sales Teams Section */}
        <div className="flex-1 bg-[#AC805D] text-center p-8 shadow-md">
          <h2 className="text-[#ffffff] text-2xl md:text-3xl font-bold mb-4">
            Talk With Our Sales Teams
          </h2>
          <p className="text-[#ffffff] text-sm md:text-base mb-6">
            Curabitur finibus odio ac lectus semper vestibulum sit amet vel
            ligula. Pellentesque posuere diam ut ultricies cursus. Integer
            ipsum arcu, rutrum ac quam.
          </p>
          <button className="mx-auto mxx:w-[20%] w-full md:w-2/3 lg:w-1/2 h-auto bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition flex flex-row justify-center items-center">
            Get Started
            <div className="ml-2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <img src="/ArrowWhite.svg" alt="" className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;