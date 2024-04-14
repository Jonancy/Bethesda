import { ServiceDetailsTable } from "@/components/Admin/dataTable/ServiceTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ServiceAdmin() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl underline underline-offset-8">Services</h1>
      <div className="flex">
        <Link to="/admin/add-services">
          <Button>Add Service</Button>
        </Link>
      </div>

      <div className="w-full">
        <ServiceDetailsTable />
      </div>
    </div>
  );
}
export default ServiceAdmin;
