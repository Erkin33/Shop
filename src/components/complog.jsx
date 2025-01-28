const ContactCard = ({ img, main, info, secondinfo }) => {
  return (
    
      
      <div className="flex flex-col sm:flex-row w-full h-auto p-6 gap-4">
      {/* Левая половина с изображением */}
      <div className="w-full sm:w-[50%] md:w-[40%] flex justify-center items-center">
        <div className="w-[100%] xs:w-[60%] xs:h-[12vw] xl:h-[6vw] md:h-[8vw] md:w-[100%] h-[90%] rounded-full bg-[#AC805D] flex justify-center items-center">
          <img src={img} alt={main} className="max-w-full h-auto xl:h-[60%] xs:h-[10vw] md:w-[50%] object-contain rounded-md" />
        </div>
      </div>

      {/* Правая половина с текстом */}
      <div className="w-full sm:w-[50%] md:w-[60%] flex flex-col justify-start">
        <h2 className="l3d:text-[20px] xl:text-[1.4vw] text-xl font-semibold text-gray-800 mb-2 xs:text-[3vw] sm:text-[2vw]">{main}</h2>
        <p className="l3d:text-[15px] xl:text-[1.4vw] text-lg text-gray-700 mb-1 xs:text-[3vw] sm:text-[2vw]">{info}</p>
        <p className="l3d:text-[15px] xl:text-[1.4vw] text-lg text-gray-700 xs:text-[3vw] sm:text-[1.7vw]">{secondinfo}</p>
      </div>
    </div>
    
  );
};

export default function ContactCards() {
  const ways = [
    {
      img: '/Login/Comp/RLocation.svg',
      main: 'Our Location',
      info: '45 Folgate Street Canberra',
      secondinfo: 'Looloith E1 6GL',
    },
    {
      img: '/Login/Comp/Mobile.svg',
      main: 'Mobile Number',
      info: '+00 (0)12 3456 789',
      secondinfo: '+00 (0)12 3456 789',
    },
    {
      img: '/Login/Comp/Quires.svg',
      main: 'Have Quires?',
      info: 'www.concho.com',
      secondinfo: 'www.conchoagency.com',
    },
    {
      img: '/Login/Comp/Support.svg',
      main: 'Contact Support',
      info: 'info@example.com',
      secondinfo: 'info@example.com',
    },
  ];

  return (
    <div className="w-full h-auto py-8 flex flex-col justify-center items-center">
      <p className="l3d:text-[20px] xl:text-[1.2vw] lg:text-[1.7vw] tracking-[.25em] xs:text-[3vw] text-left w-full text-[#686257] text-[1vw]">
        CONTACT US
      </p>
      <h2 className=" l3d:text-[29px] xl:text-[1.9vw] l3d lg:text-[2.5vw] text-left w-full text-[2vw] xs:text-[3.5vw]">
        Head Office Location
      </h2>
      <div className="w-[95%] xs:w-full x:w-[90%] l3d:w-[95%] grid grid-cols-1 xs:grid-cols-2 xss:grid-cols-2 md:grid-cols-3 l3d:grid-cols-4 gap-6">
        {ways.map((way, index) => (
          <ContactCard
            key={index}
            img={way.img}
            main={way.main}
            info={way.info}
            secondinfo={way.secondinfo}
          />
        ))}
      </div>
    </div>
  );
}
