import { useState } from "react";
import { footer_links } from "../../../constants";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-4 gap-8">
        <div className="max-w-sm col-span-1">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#486284]">
            Meetio
          </h2>
          <p className="text-black text-lg mt-2">
            Keep in touch with Meetio News and updates
          </p>
          <form className="relative mt-4 w-full">
            <input
              type="email"
              placeholder="Email..."
              className="px-4 py-2 border border-gray-300 w-full focus:outline-none rounded-full pr-16"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-[#486284] text-white px-4 hover:bg-gray-800 transition rounded-full"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(footer_links).map(([category, links]) => (
            <div key={category} className="pb-4 md:pb-0">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex justify-between items-center py-1 text-lg font-semibold text-gray-800 md:cursor-default md:text-left md:py-0 md:block"
              >
                <span className="capitalize text-base md:text-lg">
                  {category}
                </span>
                <span className="md:hidden">
                  {openCategory === category ? (
                    <GoChevronUp />
                  ) : (
                    <GoChevronDown />
                  )}
                </span>
              </button>
              <ul
                className={`overflow-hidden transition-all duration-300 md:block ${
                  openCategory === category ? "max-h-40" : "max-h-0"
                } md:max-h-none`}
              >
                {links.map((link) => (
                  <li key={link.href} className="py-2">
                    <a
                      href={link.href}
                      className="text-gray-600 text-xs md:text-sm hover:text-gray-900 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm border-t pt-4">
        <p>© 2025 Meetio. All rights reserved</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-900">
            Legal
          </a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900 text-xl">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-gray-900 text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-gray-900 text-xl">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
