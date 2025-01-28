function InfoBlock({ bgColor, textColor, title, reinfo, mainInfo }) {
  return (
    <div className={`h-full w-full p-6 flex flex-col ${bgColor} ${textColor}`}>
      <div className="flex flex-col gap-2">
        <h7 className="text-lg tracking-[.25em]">{title}</h7>
      </div>
      <div className="text-lg font-[400] mb-4">{mainInfo}</div>
      <div className="mt-auto">
        <button className="w-[40%] sm:w-[60%] mxx:w-[50%] h-[30%] py-2 rounded-lg text-[#ffffff] underline font-[400] hover:bg-gray-200 transition-all flex justify-between items-center gap-2">
          Shop Now
          <span className="inline-flex items-center 2xl:h-[] justify-center bg-[#000000] rounded-full w-[20%] h-[2vw] sm:h-[3vw] xs:h-[5vw]">
            <img src="/ArrowWhite.svg" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default function InfoBlocks() {
  const blocks = [
    {
      bgColor: "bg-[#415872]",
      textColor: "text-white",
      title: "New Collections",
      reinfo: "Quick overview information for the first block.",
      mainInfo: "Luxury Jewellery ",
    },
    {
      bgColor: "bg-[#472000]",
      textColor: "text-white",
      title: "Gold Collections",
      reinfo: "Key details for the second block.",
      mainInfo: "Bling Boutique Jewels",
    },
    {
      bgColor: "bg-[#415872]",
      textColor: "text-white",
      title: "Rings & Chains",
      reinfo: "Interesting facts in the third block.",
      mainInfo: "Diamond Jewellery",
    },
  ];

  return (
    <div className="w-full h-auto py-8 flex justify-center items-center">
      <div className="w-[90%] xs:w-[100%] sm:w-[80%] lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mxx:w-[90%]">
        {blocks.map((block, index) => (
          <InfoBlock
            key={index}
            bgColor={block.bgColor}
            textColor={block.textColor}
            title={block.title}
            reinfo={block.reinfo}
            mainInfo={block.mainInfo}
          />
        ))}
      </div>
    </div>
  );
}
