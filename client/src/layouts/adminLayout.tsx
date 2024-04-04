import SideBarAdmin from "@/components/Admin/Sidebar.admin";
import { getUserData } from "@/utils/authStorage";
import { Navigate } from "react-router-dom";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getUserData().token;

  const authentication = token ? true : false;

  if (!authentication) {
    <Navigate to="/" />;
  }
  return (
    <div className="flex bg-background text-text">
      <div className="sticky bottom-0 left-0 top-0 h-screen w-[300px]">
        <SideBarAdmin />
      </div>
      <div className="w-full p-5">{children}</div>
    </div>
  );
}
