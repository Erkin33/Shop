const ways = [
    {   
        id:1,
        src: '/About/clock.svg',
        chel:'he',
        mainInfo: 'Bridal jewellery',
        info: `Elegant gift for a special occasion to 
        show someone how much you care`
    },
    {   
        id:2,
        src: '/About/jawelry.svg',
        chel:'hel',
        mainInfo: 'Enamel jewellery',
        info: `Diamond involves considering various factors
        often referred to as the "Four Cs"`
    },
    {   
        id:3,
        src: '/About/vector.svg',
        chel:'helll',
        mainInfo: 'Pearl Jewellery',
        info: `Individual engraving to perpetuate the 
        deepest feelings.Rock A Right Hand Ring`
    },
    {   
        id:4,
        src: '/About/clock.svg',
        chel:'helll',
        mainInfo: 'Navratna Stones',
        info: `Individual engraving to perpetuate the 
        deepest feelings.Rock A Right Hand Ring`
    },
]
export default function TopShop(){
    return(
        <div className="w-full h-[1000px]  mx:h-[1100px] des:h-[700px] xs:h-[300px] xss:h-[400px] sm:h-[450px] md:h-[500px] xs:flex-col bg-[#FFF9F4] flex flex-col items-center ">
            <div className="w-full bg-[#FFF9F4] h-[50%] flex flex-row justify-between items-center relative xss:top-[-2.5%] sm:top-[7%] top-[-3.9%] md:top-[1%] des:top-[-5%] mx:top-[-9%]">
                <div className="w-[33%] h-full flex  justify-top items-top ">
                </div>

                <div className="w-[33%] h-full flex justify-center items-center flex-col">
                    <h1 className="text-[4vw] font-[500] ">
                    Shop Products
                    </h1>
                        <h1 className="text-[1.6vw] font-[400]">
                        Home / Pages / Shop
                        </h1>
                </div>

                <div className="w-[33%] h-full  flex  justify-end items-end ">
                </div>

            </div>

            <div className="w-full h-[50%] flex flex-row  justify-between items-center bg-[#AC805D]">
                {ways.map((way, index) =>(
                    <div key={index} id={way.chel} className="w-[30%] xs:w-[30%] h-[50%] xs:h-[20%]  flex flex-row justify-center items-center ">
                        <img src={way.src} alt="" className="xs:w-[50%] xs:h-[80%]"/>
                        <h1 className="w-[50%] xs:w-[80%] cursor-pointer hover:border-b-[1px] xs:text-[2.4vw] xss:text-[2vw] text-center mt-[2%] font-[400] text-[1.4vw] text-[#ffffff]">
                            {way.mainInfo}
                        </h1>
                    </div>
                ))}
            </div>


        </div>
    )
}