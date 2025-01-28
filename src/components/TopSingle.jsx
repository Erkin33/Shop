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
export default function TopSingleBlog(){
    return(
        <div className="w-full h-[1000px] xl:h-[600px] xs:h-[200px]  mx:h-[1100px] des:h-[700px] xs:h-[200px] xss:h-[400px] sm:h-[450px] md:h-[500px] xs:flex-col bg-[#FFF9F4] flex flex-col items-center ">
            <div className="w-full bg-[#FFF9F4] h-[100%] flex flex-row justify-between items-center relative xss:top-[-2.5%] sm:top-[7%] top-[-3.9%] md:top-[1%] des:top-[-5%] mx:top-[-9%]">
                <div className="w-[33%] h-full flex  justify-top items-top ">
                </div>

                <div className="w-[43%] h-full flex justify-center items-center flex-col">
                    <h1 className="text-[4vw] mxx:text-[55px] font-[500] xss:text-[5vw] xl:text-[2.9vw]">
                    Blogs Single
                    </h1>
                        <h1 className="text-[1.6vw] mxx:text-[55px] font-[400] xss:text-[3vw] xl:text-[2.9vw]">
                        Home / Pages / Blogs Single
                        </h1>
                </div>

                <div className="w-[33%] h-full  flex  justify-end items-end ">
                </div>

            </div>
        </div>
    )
}