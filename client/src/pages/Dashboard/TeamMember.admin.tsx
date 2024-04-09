import { MemberDetailsTable } from "@/components/Admin/dataTable/teamTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function MemberAdmin() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl underline underline-offset-8">Member</h1>
      <div className="flex">
        <Link to="/admin/add-member">
          <Button>Add Team Member</Button>
        </Link>
      </div>

      <div className="w-full">
        <MemberDetailsTable />
      </div>
    </div>
  );
}
export default MemberAdmin;
