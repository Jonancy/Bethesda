import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function AddBlogAdmin() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Blog</CardTitle>
        <CardDescription>
          Make your edits and click save to add new Blog section.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img
              alt="Image"
              className="border border-gray-200 w-80 h-80 rounded-md overflow-hidden object-cover object-center"
              src="/placeholder.svg"
            />
          </div>
          <Label className="block" htmlFor="what-image">
            Image
          </Label>
          <Input
            accept="image/*"
            className="mt-1"
            id="what-image"
            placeholder="Select image"
            type="file"
          />
        </div>
        <div className="grid gap-2">
          <Label className="text-sm" htmlFor="title">
            Title
          </Label>
          <Input id="title" placeholder="Enter title" />
        </div>
        <div className="grid gap-2">
          <Label className="text-sm" htmlFor="description">
            Description
          </Label>
          <Textarea
            className="min-h-[100px] resize-y"
            id="description"
            placeholder="Enter description"
          />
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="ml-auto" variant="outline">
          Cancel
        </Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
export default AddBlogAdmin;
