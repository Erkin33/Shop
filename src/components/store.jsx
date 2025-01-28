import { useState } from "react";

const locations = [
  { city: "Wolverhampton", icon: "/icons/wolverhampton.jpg" },
  { city: "Chelmsford", icon: "/icons/chelmsford.jpg" },
  { city: "Gateshead", icon: "/icons/gateshead.jpg" },
  {
    city: "Bournemouth",
    icon: "/icons/bournemouth.jpg",
    details: {
      phone: ["+1800 459 4545", "+1800 459 4545"],
      email: ["Info@Swarna.com", "Sales@Swarna.com"],
      address: "No. 55 A, East Madison Street, Baltimore, MD, USA 4508",
      image: "/Shorts/blue.jpg",
    },
  },
  { city: "Milton Keynes", icon: "/icons/milton_keynes.jpg" },
  { city: "Portsmouth", icon: "/icons/portsmouth.jpg" },
  { city: "Nottingham", icon: "/icons/nottingham.jpg" },
];

export default function StoreLocationshere() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-[95%] mx-auto p-6">
      <h3 className="text-sm text-gray-600 uppercase">Our Stores Location</h3>
      <h2 className="text-xl font-semibold mt-2 mb-6 text-gray-800">
        Click To View The Stores In That Area.
      </h2>

      {locations.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-300">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center gap-4 py-4 px-4 text-left text-lg font-medium bg-white hover:bg-gray-50"
          >
            {item.city}
            <span className="ml-auto text-gray-500">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </button>

          {openIndex === index && item.details && (
            <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-lg">
              <div className="flex flex-wrap items-center mb-4 gap-4 md:gap-8">
                <div className="flex items-center w-full sm:w-[30%] md:w-[25%]  sm:border-r-[1px] ">
                  <img
                    src="/Login/Call.svg"
                    alt="Phone Icon"
                    className="w-10 h-10 mb-2"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    {item.details.phone.map((phone, i) => (
                      <p key={i} className="text-sm text-gray-700">
                        {phone}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-center w-full sm:w-[30%] md:w-[25%]  sm:border-r-[1px] ">
                  <img
                    src="/Login/Tap.svg"
                    alt="Email Icon"
                    className="w-10 h-10 mb-2"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    {item.details.email.map((email, i) => (
                      <p key={i} className="text-sm text-gray-700">
                        {email}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-center w-full sm:w-[30%] md:w-[25%]  sm:border-r-[1px] ">
                  <img
                    src="/Login/Loc.svg"
                    alt="Address Icon"
                    className="w-10 h-10 mb-2"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p className="text-sm text-gray-700">{item.details.address}</p>
                  </div>
                </div>

                {/* "Get Location" button aligned to the right */}
                <div className="w-full sm:w-auto ml-auto flex items-center justify-center sm:justify-start">
                  <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800">
                    Get Location <span className="text-xl">➡</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
