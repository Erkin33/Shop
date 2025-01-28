import { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },{
      question: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Nulla Aliquet Porttitor Vehicula.',
      answer: 'Morbi non arcu risus quis varius quam quisque id diam vel quam elementum.',
    },
    {
      question: 'Some Claim Lorem Ipsum Threatens To Promote Design Over Content Value.',
      answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl mxx:text-[35px] font-bold text-center mb-6">Frequently Asked Questions</h2>
      <p className="text-center mb-[5%] mxx:text-[25px]">
      Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum.
      </p>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className={`mxx:text-[25px] w-full text-left p-4 font-medium transition-colors ${openIndex === index ? 'bg-orange-500 text-white' : 'bg-pink-100 text-black'} hover:bg-pink-200`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="float-right mxx:text-[30px]">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t border-orange-500 text-gray-700 mxx:text-[30px]">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <h2 className="text-2xl mxx:text-[35px] font-bold text-center mb-6 mt-[2%] mb-[2%]">Shipping And Returns</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className={`mxx:text-[25px] w-full text-left p-4 font-medium transition-colors ${openIndex === index ? 'bg-orange-500 text-white' : 'bg-pink-100 text-black'} hover:bg-pink-200`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="float-right mxx:text-[30px]">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t border-orange-500 text-gray-700 mxx:text-[30px]">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
