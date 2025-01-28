export default function HoverBlock() {
    return (
      <div className="w-64 h-64 relative group cursor-pointer">
        {/* Картинка */}
        <img
          src="https://via.placeholder.com/256"
          alt="Sample"
          className="w-full h-full object-cover"
        />
        {/* Текст, который появляется */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-bold">READ MORE</p>
        </div>
      </div>
    );
  }