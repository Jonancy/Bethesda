import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import mainLogo from "../../assets/mainLogo.png";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (nav: string) => {
  return path === nav ? "text-tertiary" : "text-white";
  };
    

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between  text-gray-400 bg-secondaryColor px-20 py-3 items-center">
        <p className="text-xs font-bold tracking-wider">
          CONTACT US: +977 061 581211 | bethesda.language@gmail.com
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
      <div className="flex justify-between text-white text-lg font-semibold bg-primaryColor px-20 py-3 items-center">
        <img className="w-36 h-14" src={mainLogo} alt="Main Logo" />
        <NavigationMenu>
          <NavigationMenuList className="flex gap-16">
            <Link to="/" className={isActive("/")}>
              HOME
            </Link>
            <Link to="/about-us" className={isActive("/about-us")}>
              ABOUT US
            </Link>
            <Link to="/services" className={isActive("/services")}>
              SERVICES
            </Link>
            <Link to="/blogs" className={isActive("/blogs")}>
              BLOGS
            </Link>
            <Link to="/newsArticles" className={isActive("/newsArticles")}>
              NEWS & ARTICLES
            </Link>
            <Link to="/contact-us" className={isActive("/contact-us")}>
              CONTACT US
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}