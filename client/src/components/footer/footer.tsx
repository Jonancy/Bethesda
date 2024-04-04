import logo from "../../assets/mainLogo.png";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const services = [
    {
      service_name: "English Conversation Classes",
    },
    { service_name: "Nepali Language Classes" },
    { service_name: "Leadership Training" },
    { service_name: "Japanese Language" },
    { service_name: "Front Desk Management Training" },
    { service_name: "Depression and Suicide Prevention Training" },
    { service_name: "Personality Development Training (Child Psychology)" },
  ];
  return (
    <footer className="bg-primaryColor ">
      <div className="flex  justify-between px-20 py-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-[9rem] items-center space-x-2">
            <img className="h-full object-contain" src={logo} alt="" />
          </div>
          <div className="text-gray-500">
            The Bethesda International Language and Leadership Development
            Centre Pvt. Ltd. (The Bethesda Centre) is an initiative to a) offer
            language classes to the public in Pokhara Municipality and to b)
            equip train and lay leaders of civil society, in areas related to
            Pastoral Care/Counseling, entrepreneurship and management. 
          </div>
        </div>
        <div className="mt-10">
          <div className="mt-4 mb-2 font-medium xl:mb-4 text-white text-3xl">
            About
          </div>
          <nav aria-label="Guides Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Team Members
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Gallery
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  News & Articles
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10">
          <div className="mt-4 mb-2 font-medium xl:mb-4 text-white text-3xl">
            Services
          </div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              {services?.map((service) => (
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    {service.service_name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 text-gray-500">
          <div className="mt-4 mb-2 font-medium xl:mb-4">
            <p className="text-3xl text-white">Get in Touch</p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex gap-2 items-center">
                <FaLocationDot className="txt-xl"/>
                <p>Nivagalli, Chipledhunga Pokhara-9, Kaski</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaPhoneAlt className="text-xl"/>
                <p>+977 061-581211</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoMailOutline className="text-xl" />
                <p>bethesda.language@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondaryColor">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
          <p className="">Copyright 2024 ©️ Bethesda International Language & Leadership Development Centre Pvt. Ltd.</p>
          <p className="">
            Powered by Websoft Technology Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
