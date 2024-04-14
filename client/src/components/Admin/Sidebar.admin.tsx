import { clearUserData, setUserData } from "@/utils/authStorage";
import logo from "../../assets/mainLogo.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function SideBarAdmin() {
  const handleLogout = () => {
    clearUserData();
    setUserData({ username: "", token: "" });
  };
  const url = "admin";
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <Button
          className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-sm text-gray-600 hover:bg-gray-400"
          onClick={handleLogout}
        >
          Log out
        </Button>

        <ul className="mt-6 space-y-1">
          <li>
            <Link
              to={`/${url}/main-details`}
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              Main Details
            </Link>
          </li>

          <li>
            <Link
              to={`/${url}/services`}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={`/${url}/blogs`}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to={`/${url}/news-article`}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              News Articles
            </Link>
          </li>

          <li>
            <Link
              to={`/${url}/member`}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Team Members
            </Link>
          </li>
          <li>
            <Link
              to={`/${url}/edit-gallery`}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 ">
        <a href="#" className="flex items-center bg-primaryColor p-4">
          <img alt="" src={logo} className=" w-52 object-cover" />

          {/* <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div> */}
        </a>
      </div>
    </div>
  );
}
export default SideBarAdmin;
