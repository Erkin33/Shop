import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mxx:text-[20px] w-full text-sm sm:text-base lg:text-lg text-left py-3 px-4 bg-[#CE8B39] text-white flex justify-between items-center"
      >
        {title}
        <span
          className={`mxx:text-[25px] transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mxx:text-[25px] px-4 py-2 text-sm sm:text-base lg:text-lg text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
}
