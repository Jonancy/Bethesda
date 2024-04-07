import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddTeamMemberAdmin() {
  return (
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
  );
}
