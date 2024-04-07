import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function AboutUSAdmin() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Sections</CardTitle>
        <p className="card-description">
          Make changes to the "About Us" and "What We Do" sections.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="block" htmlFor="about">
              About Us
            </Label>
            <Input id="about" placeholder="Enter title" />
          </div>
          <div className="space-y-2">
            <Label className="block" htmlFor="what">
              What We Do
            </Label>
            <Input id="what" placeholder="Enter title" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                alt="Image"
                className="border border-gray-200 w-80 h-80 rounded-md overflow-hidden object-cover object-center"
                src="/placeholder.svg"
              />
            </div>
            <Label className="block" htmlFor="about-image">
              About Us Image
            </Label>
            <Input
              accept="image/*"
              className="mt-1"
              id="about-image"
              placeholder="Select image"
              type="file"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                alt="Image"
                className="border border-gray-200 w-80 h-80 rounded-md overflow-hidden object-cover object-center"
                src="/placeholder.svg"
              />
            </div>
            <Label className="block" htmlFor="what-image">
              What We Do Image
            </Label>
            <Input
              accept="image/*"
              className="mt-1"
              id="what-image"
              placeholder="Select image"
              type="file"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="block" htmlFor="about-desc">
              About Us Description
            </Label>
            <Textarea
              className="min-h-[150px]"
              id="about-desc"
              placeholder="Enter description"
            />
          </div>
          <div className="space-y-2">
            <Label className="block" htmlFor="what-desc">
              What We Do Description
            </Label>
            <Textarea
              className="min-h-[150px]"
              id="what-desc"
              placeholder="Enter description"
            />
          </div>
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
export default AboutUSAdmin;
