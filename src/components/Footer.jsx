export default function Footer() {
  return (
    <footer className="bg-[#042A2B] text-white py-8 flex flex-col items-center">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-6">
        {/* Newsletter Section */}
        <div className="lg:w-1/3 space-y-4">
          <p className="text-sm uppercase">Newsletter</p>
          <h3 className="text-xl font-bold">Join Today</h3>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="w-full px-4 py-2 rounded-full bg-[#064A4B] border border-gray-600 text-white focus:outline-none"
            />
            <button className="absolute right-0 mr-2 w-8 h-8 flex justify-center items-center rounded-full bg-white">
              <img src="/Send.svg" alt="Send" className="w-4 h-4" />
            </button>
          </div>
          <label className="text-sm flex items-center">
            <input type="checkbox" className="mr-2" />
            I agree with the
            <a href="/privacypolicy" className="underline ml-1">terms & conditions</a>
          </label>
        </div>

        {/* Useful Links */}
        <div className="lg:w-1/4 space-y-3">
          <h4 className="text-lg font-bold">Useful Links</h4>
          <ul className="space-y-1">
            {['Clothing', 'Handbags', 'Philosophy', 'Our Story', 'Journal', 'Brand'].map((link, index) => (
              <li key={index}>
                <a href="/listofproducts" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="lg:w-1/4 space-y-3">
          <h4 className="text-lg font-bold">Resources</h4>
          <ul className="space-y-1">
            {['FAQ/Return', 'Privacy/Terms', 'Gift Cards', 'Sizing Guide', 'Accessibility'].map((link, index) => (
              <li key={index}>
                <a href="/privacypolicy" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Section */}
        <div className="lg:w-1/3 space-y-3">
          <img src='/icon.svg' alt="Brand Logo" className="w-full" />
          <p className="text-sm">
            Proin a interdum et, litora eu sapien sem. Suspendisse a massa justo, erat eget lorem nunc.
            Fusce nec urna tempor tincidunt.
          </p>
          <div className="flex space-x-4">
            <img src="/Socials.svg" alt="Social Media" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full border-t border-gray-600 mt-8 flex flex-col text-center text-sm">
        <p>&copy; Designthemes All Rights Reserved</p>
        <div className="flex flex-col justify-center items-center space-x-4 mt-2">
          <img src="/Payevments.svg" alt="Payment Options" className="w-[90%]"/>
          <a href="/termsconditions" className="hover:underline">Terms And Conditions</a>
          <span className="rotate-90">|</span>
          <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
