import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { NavbarDetails } from "@/types";

export default function Navbar({
  navbarDetails,
}: {
  navbarDetails: NavbarDetails;
}) {
  const location = useLocation();
  const path = location.pathname;
  console.log(navbarDetails);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (nav: string) => {
    return path === nav ? "text-tertiary" : "text-white";
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between  text-gray-400 bg-secondaryColor px-5 sm:px-10 md:px-20 py-3 items-center">
        <p className="text-xs font-bold tracking-wider hidden sm:block">
          CONTACT US: +977 {navbarDetails?.phone_number} |{" "}
          {navbarDetails?.email}
        </p>
        <div className="flex gap-2 items-center">
          <div className=" text-xl">
            <FaFacebook />
          </div>
          <div className="text-xl">
            <AiFillInstagram />
          </div>
          <div className=" text-xl">
            <FaXTwitter />
          </div>
          <div className="text-xl">
            <SiGmail />
          </div>
        </div>
      </div>
      <header
        className={`z-40 flex w-full flex-col justify-between overflow-hidden px-3 text-slate-700 sm:px-5 md:px-8 lg:flex-row lg:items-center lg:px-8 
            sticky  bg-primaryColor to-transparent backdrop-blur-sm pt-3
      ${isMenuOpen ? "h-auto" : "h-[80px]"}`}
      >
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link to={"/"} className="flex items-center">
            <img
              className="w-36 h-14"
              src={navbarDetails?.logo}
              alt="Main Logo"
            />
          </Link>
          <button
            className="block focus:outline-none lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block pb-4" : "hidden"
          } lg:flex lg:flex-row lg:items-center`}
        >
          <ul className="flex flex-col items-center space-y-4 text-lg md:space-x-4 lg:flex-row lg:space-x-8 lg:space-y-0 lg:text-xl">
            <li>
              <Link to="/" className={isActive("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about-us" className={isActive("/about-us")}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/services" className={isActive("/services")}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={isActive("/blogs")}>
                BLOGS
              </Link>
            </li>
            <li>
              <Link to="/news-articles" className={isActive("/news-articles")}>
                NEWS & ARTICLES
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className={isActive("/contact-us")}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
}
