export default function FormWithImage() {
  return (
    <div className="w-full h-auto 2xl:h-[800px] lg:h-[600px] flex items-center justify-center py-8 mxx:h-[1000px]">
      <div className="w-[100%] lg:w-[80%] l3d:w-[90%] flex flex-col sm:flex-row gap-8 bg-white overflow-hidden">
        {/* Блок с формой */}
        <form className="w-full sm:w-[50%] h-auto p-6 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Comment</h2>

          {/* Имя и фамилия в одном ряду */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex flex-col sm:w-1/2">
              <label htmlFor="firstName" className="text-gray-700 font-medium mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="firstName"
                className="border border-[#000000] px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            <div className="flex flex-col sm:w-1/2">
              <label htmlFor="lastName" className="text-gray-700 font-medium mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                className="border border-[#000000] px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="border border-[#000000] px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          {/* Текстовая область */}
          <div className="flex flex-col mb-4">
            <label htmlFor="comment" className="text-gray-700 font-medium mb-2">
              Comment
            </label>
            <textarea
              id="comment"
              className="border border-[#000000] px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300 resize-none"
              rows="4"
            ></textarea>
          </div>

          {/* Кнопка */}
          <button
            type="submit"
            className="bg-[#000000] text-white py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Post Comment
          </button>
        </form>

        {/* Блок с картиной */}
        <div className="w-full sm:w-[50%] h-auto flex items-end justify-end">
          <img
            src="/About/MEMBERS/Reyden.jpg"
            alt="Form Illustration"
            className="w-full h-auto sm:h-[85%] object-cover rounded-lg mxx:w-[90%] mxx:h-[90%]"
          />
        </div>
      </div>
    </div>
  );
}
