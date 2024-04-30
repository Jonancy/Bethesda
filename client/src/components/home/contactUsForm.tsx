import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
import { contactUs } from "@/Services/contactUs/contactUs.service";
import { toast } from "react-toastify";

function ContactUsForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await contactUs(values);
      toast.success(res.data.message);
      setFormSubmitted(true);
      setSubmitting(false);
      resetForm();
    } catch (e: any) {
      console.log(e.response.data);
      toast.success(e.response.data.message);
    }
  };

  return (
    <div className="mx-auto mt-8 md:mt-10 w-full md:w-[50%]">
      {" "}
      {/* Adjusted margin and added max-width for responsiveness */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CardHeader>
              <CardTitle className="mx-auto text-3xl text-primaryColor">
                Get in Touch
              </CardTitle>
              <CardDescription className="mx-auto">
                Fill out the form below to get in touch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {" "}
                  {/* Adjusted layout for different screen sizes */}
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      style={{ minHeight: "2.75rem" }}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Field
                    as={Textarea}
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="min-h-[150px]"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </CardFooter>
            {formSubmitted && (
              <p className="text-green-500">Form submitted successfully!</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactUsForm;
