import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function AddTeamMemberAdmin() {
  return (
    <div className="px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to="/admin/member">
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back to Members
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <div className="text-lg font-semibold">Add Team Member</div>
          <p className="text-sm leading-none truncate">
            Add a new member to your team
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter the name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter the email"
                required
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" placeholder="Enter the role" required />
          </div>
          <div className="space-y-2">
            <Label>Profile Picture</Label>
            <Input accept="image/*" id="file-id" type="file" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Add Team Member</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
