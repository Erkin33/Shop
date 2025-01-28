import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PolicyAcc = () => {
  const [openIndexShipping, setOpenIndexShipping] = useState(null); // Состояние для Shipping Policy
  const [openIndexReturns, setOpenIndexReturns] = useState(null); // Состояние для Returns Policy

  const toggleShippingAccordion = (index) => {
    setOpenIndexShipping(openIndexShipping === index ? null : index);
  };

  const toggleReturnsAccordion = (index) => {
    setOpenIndexReturns(openIndexReturns === index ? null : index);
  };

  const faqData = [
    {
      question: 'Where we ship?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Shipping Cost',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Order Online, Pick Up In Shop',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Tracking Your Order',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const faqDTM = [
    {
      question: 'Order Changes & Cancellations',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Lost or Damaged items',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Benefits of Having a Return and Refund Policy',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Who Needs a Return Policy?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Tips To Make the Most of Your Return and Refund Policy',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Return Policy Examples',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <div className="mx-auto p-4">
      <p className="tracking-[.25em] text-left mxx:text-[25px]">
        OUR POLICY 
      </p>
      <h2 className="text-2xl mxx:text-[35px] font-bold text-left mb-6">Shipping Policy</h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className={`mxx:text-[25px] w-full text-left p-4 font-medium flex justify-between items-center ${openIndexShipping === index ? 'bg-[white] text-black' : 'bg-[white] text-black'} hover:bg-pink-200`}
              onClick={() => toggleShippingAccordion(index)}
            >
              <span>{item.question}</span>
              {openIndexShipping === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndexShipping === index && (
              <div className="p-4 bg-white border-t text-gray-700 mxx:text-[30px]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <h2 className="text-2xl mxx:text-[35px] font-bold text-left mb-6 mt-[2%] mb-[2%]">Returns Policy</h2>
      
      <div className="space-y-4">
        {faqDTM.map((check, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className={`mxx:text-[25px] w-full text-left p-4 font-medium flex justify-between items-center transition-colors ${openIndexReturns === index ? 'bg-[white] text-[black]' : 'bg-[white] text-black'} hover:bg-pink-200`}
              onClick={() => toggleReturnsAccordion(index)}
            >
              <span>{check.question}</span>
              {openIndexReturns === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndexReturns === index && (
              <div className="p-4 bg-white border-t border-orange-500 text-gray-700 mxx:text-[30px]">
                {check.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyAcc;
