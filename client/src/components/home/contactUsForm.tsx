import { Button } from "../ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function ContactUsForm() {
  return (
    <div className="mx-auto mt-10 w-2/4">
      <>
        <CardHeader>
          <CardTitle className="mx-auto text-3xl text-primaryColor">
            Get in Touch
          </CardTitle>
          <CardDescription className="mx-auto">
            Fill out the form below to get in touch.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  id="first-name"
                  placeholder="Enter your first name"
                  style={{
                    minHeight: "2.75rem",
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[150px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </>
    </div>
  );
}
export default ContactUsForm;
