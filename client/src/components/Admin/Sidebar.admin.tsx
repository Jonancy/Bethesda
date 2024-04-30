import { clearUserData, setUserData } from "@/utils/authStorage";
import logo from "../../assets/mainLogo.png";
import { Button } from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function SideBarAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserData();
    navigate("/");
  };
  const url = "admin";

  const location = useLocation();
  const path = location.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (nav: string) => {
    return path === nav ? "bg-gray-100" : "bg-transparent";
  };

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <div className="border-b-2 pb-5 border-slate-300">
          <Button
            className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-sm text-gray-600 hover:bg-gray-400"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </div>
        <ul className="mt-5 space-y-3">
          <li>
            <Link
              to={`/${url}/main-details`}
              className={`block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium  text-gray-700  ${isActive(
                `/${url}/main-details`
              )}`}
            >
              Main Details
            </Link>
          </li>

          <li>
            <Link
              to={`/${url}/services`}
              className={`block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium  text-gray-700  ${isActive(
                `/${url}/services`
              )}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={`/${url}/blogs`}
              className={`block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium  text-gray-700  ${isActive(
                `/${url}/blogs`
              )}`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to={`/${url}/news-article`}
              className={`block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium  text-gray-700  ${isActive(
                `/${url}/news-article`
              )}`}
            >
              News Articles
            </Link>
          </li>

          <li>
            <Link
              to={`/${url}/member`}
              className={`block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium  text-gray-700  ${isActive(
                `/${url}/member`
              )}`}
            >
              Team Members
            </Link>
          </li>
          <li>
            <Link
              to={`/${url}/edit-gallery`}
              className={`block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium  text-gray-700  ${isActive(
                `/${url}/edit-gallery`
              )}`}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 ">
        <Link to="/" className="flex items-center bg-primaryColor p-4">
          <img alt="" src={logo} className=" w-52 object-cover" />

          {/* <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div> */}
        </Link>
      </div>
    </div>
  );
}
export default SideBarAdmin;
