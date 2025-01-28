export const shop = [
    {
        id: 'Men',
        src: '/About/Prize1.svg',
        mainInfo: 'Reward Program',
        info: 'Morbi tristique felis.',
    },
    {
        id: 'Menn',
        src: '/About/Rate2.svg',
        mainInfo: 'Special Discounts',
        info: 'Mauris necviverra massadu.',
    },
    {
        id: 'Mennn',
        src: '/About/Truck3.svg',
        mainInfo: 'Fast Shipping',
        info: 'Fusce lacinia interdum.',
    },
    {
        id: 'Mennnn',
        src: '/About/Money4.svg',
        mainInfo: 'Great Prices',
        info: 'Augue nunc bibendum.',
    },
];

export default function ShippingAbout() {
    return (
        <div className="w-full md:h-[150px] l3d:h-[200px] mt-[5%] md:flex-row xs:h-auto flex justify-between items-center xs:flex-col xs:mb-[5%]">
            {shop.map((shopItem, index) => (
                <div
                    key={index}
                    id={shopItem.id}
                    className="w-[25%] border-r-[1px] md:h-[80%]  border-black h-[50%] flex flex-row xs:flex-col justify-around items-center last:border-r-0 xs:w-[90%] xs:border-none xs:justify-start xs:gap-4"
                >
                    {/* Иконка */}
                    <img
                        src={shopItem.src}
                        alt=""
                        className="w-[20%] h-[40%] md:h-[50%] md:w-[50%] xs:w-[15%] xs:h-auto"
                    />
                    {/* Текстовый блок */}
                    <div className="w-[50%] xs:w-full flex flex-col justify-center text-center h-[60px]">
                        <h1 className="text-[1vw] l3d:text-[2vw] xs:text-[4.5vw] md:text-[2.5vw] font-semibold">
                            {shopItem.mainInfo}
                        </h1>
                        <p className="text-[0.8vw] l3d:text-[1.5vw] xs:text-[3.5vw] md:text-[2vw] text-gray-600">
                            {shopItem.info}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
