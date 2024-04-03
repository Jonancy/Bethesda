import SideBarAdmin from "@/components/Admin/Sidebar.admin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background text-text">
      <div className="sticky bottom-0 left-0 top-0 h-screen w-[300px]">
        <SideBarAdmin />
      </div>
      <div className="w-full p-5">{children}</div>
    </div>
  );
}
