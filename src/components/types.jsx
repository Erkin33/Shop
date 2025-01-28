export default function TypesOfSoc() {
    return (
        <div className="w-full px-4 xs:px-5 sm:px-6 lg:px-[5%] h-auto flex flex-col sm:flex-row justify-between items-center border-y-[1px] border-[#000000] py-4">

            {/* Блок с типами украшений */}
            <div className="w-full sm:w-[40%] h-auto sm:h-[80%] flex justify-between items-center mb-4 sm:mb-0">
                {/* Traditional Jewels */}
                <div className="w-[33%] h-[full] flex justify-center items-center border-[1px] border-[#000000] py-2 sm:py-4">
                    <p className="mxx:text-[25px] text-sm sm:text-base text-center">Traditional Jewels</p>
                </div>
                {/* Bridal Jewels */}
                <div className="w-[32%] bg-[#472000] h-[full] flex justify-center items-center py-2 sm:py-4">
                    <p className="mxx:text-[25px] text-[#ffffff] text-sm sm:text-base text-center">Bridal Jewels</p>
                </div>
                {/* Antique Jewels */}
                <div className="w-[32%] h-[full] flex justify-center items-center border-[1px] border-[#000000] py-2 sm:py-4">
                    <p className="mxx:text-[25px] text-sm sm:text-base text-center">Antique Jewels</p>
                </div>
            </div>

            {/* Блок с иконкой соц. сетей */}
            <div className="w-full sm:w-[30%] h-auto sm:h-[70%] flex justify-center items-center">
                <img src="/Scial-Medias.svg" alt="Social Media" className="w-full h-auto max-h-[40%] object-contain" />
            </div>

        </div>
    );
}
