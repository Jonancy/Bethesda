import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import mainLogo from "../../assets/mainLogo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between text-gray-400 bg-secondaryColor px-20 py-3 items-center">
        <p className="text-xs font-bold">
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
        <img className="w-36 h-14" src={mainLogo}></img>
        <NavigationMenu >
          <NavigationMenuList className="flex gap-16">
            <p>HOME</p>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primaryColor text-lg hover:bg-gray-500">ABOUT US</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <p>SERVICES</p>
            <p>BLOG</p>
            <p>NEWS & ARTICLES</p>
            <p>CONTACT US</p>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
