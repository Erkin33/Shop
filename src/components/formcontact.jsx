import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    service: "",
    interest: "",
    message: "",
    agree: false,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const interests = ["Web Development", "Mobile Apps", "Software Consulting", "Other"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelect = (interest) => {
    setForm({ ...form, interest });
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (
    <div className="bg-[#f9f4ef] flex flex-col items-center py-10 px-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-semibold mb-6">Let's connect with us</h2>
        <p className="text-gray-600 mb-10">
          Donec elementum, sapien quis viverra laoreet, mauris lorem gravida ipsum, eu vehicula magna ligula sit amet lectus. Pellentesque faucibus dignissim urna eu dignissim. Nunc quis lorem posuere urna faucibus fringilla. Suspendisse at hendrerit ligula. Etiam et consectetur mauris.
        </p>
        <form className="bg-[#af8558] p-8 rounded-xl" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="firstName"
              placeholder="Your Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 bg-[#EFEFEF] py-2 rounded border"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 bg-[#EFEFEF] py-2 rounded border"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 bg-[#EFEFEF] py-2 rounded border"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Id"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 bg-[#EFEFEF] py-2 rounded border"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="service"
              placeholder="Software Service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 bg-[#EFEFEF] py-2 rounded border"
            />
            <div className="relative">
              <button
                type="button"
                className="w-full bg-[#EFEFEF] px-4 py-2 rounded border bg-white flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {form.interest || "What Are You Most Interested In?"}
                {dropdownOpen ? (
                  <ChevronUpIcon className="w-5 h-5 ml-2" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 ml-2" />
                )}
              </button>
              {dropdownOpen && (
                <ul className="absolute top-full left-0 right-0 bg-white border rounded mt-2 z-10 shadow">
                  {interests.map((interest, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(interest)}
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Message Here"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-[#EFEFEF] px-4 py-2 rounded border mb-6"
          />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-white xs:text-[2.5vw] lg:text-[1.7vw]">I Agree to Terms & Conditions</label>
            </div>
            <button
              type="submit"
              className="lg:text-[1.7vw] xs:text-[2.5vw] bg-black flex items-center text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Let’s Talk 
              <div className="ml-4 h-6 w-6 bg-white rounded-full flex justify-center items-center">
                <img src="/ArrowWhite.svg" alt="Arrow Icon" />
              </div>
            </button>
          </div>
        </form>
        {/* низ */}
      </div>
    </div>
  );
}

export default ContactForm;
