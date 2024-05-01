import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  mainPageDetails,
  updateMainDetails,
} from "@/Services/index/page.main.service";
import { MainDetails } from "@/types";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

const MainDetailsAdmin = () => {
  const initialValues = {
    company_name: "",
    phone_number: 0,
    email: "",
    logo: null,
    about: "",
    copyRights: "",
    location: "",
    hero: null,
    welcome: "",
    whatWeDoImage: null,
    whatWeDo: "",
    whoWeAre: "",
  };

  const validationSchema = Yup.object().shape({
    company_name: Yup.string().required("Company Name is required"),
    phone_number: Yup.number().required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    logo: Yup.mixed().required("Logo image is required"),
    about: Yup.string().required("About is required"),
    copyRights: Yup.string().required("Copyrights is required"),
    location: Yup.string().required("Location is required"),
    hero: Yup.mixed().required("Hero image is required"),
    welcome: Yup.string().required("Hero Title is required"),
    whatWeDoImage: Yup.mixed().required("What We Do Image is required"),
    whatWeDo: Yup.string().required("What We Do is required"),
    whoWeAre: Yup.string().required("Who We Are is required"),
  });

  const {
    values,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);

      const formData = new FormData();
      formData.append("company_name", values.company_name);
      formData.append("phone_number", values.phone_number.toString());
      formData.append("email", values.email);
      formData.append("about", values.about);
      formData.append("copyRights", values.copyRights);
      formData.append("location", values.location);
      if (values.hero) {
        formData.append("hero", values.hero);
      }
      if (values.logo) {
        formData.append("logo", values.logo);
      }
      formData.append("welcome", values.welcome);
      if (values.whatWeDoImage) {
        formData.append("whatWeDoImage", values.whatWeDoImage);
      }
      formData.append("whatWeDo", values.whatWeDo);
      formData.append("whoWeAre", values.whoWeAre);

      try {
        await updateDetails(formData);
      } catch (e) {
        console.error(e);
      }
    },
  });

  const updateDetails = async (values: FormData) => {
    try {
      const res = await updateMainDetails(values);
      console.log(res.data);
      toast.success(res.data.message);
      console.log(values, "jaja");
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  //!For converting string path to file
  const convertImageUrlToFile = async (
    url: string,
    fieldName: keyof MainDetails
  ) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], `${fieldName}.jpg`, { type: blob.type });
      setFieldValue(fieldName, file);
    } catch (error) {
      console.error("Error converting image URL to file:", error);
    }
  };

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await mainPageDetails();
        console.log(res.data);
        const aboutUsDetails = res.data;
        await convertImageUrlToFile(aboutUsDetails.logo, "logo");
        await convertImageUrlToFile(aboutUsDetails.hero, "hero");
        await convertImageUrlToFile(
          aboutUsDetails.whatWeDoImage,
          "whatWeDoImage"
        );

        // Set other form values directly
        setFieldValue("company_name", aboutUsDetails.company_name);
        setFieldValue("phone_number", aboutUsDetails.phone_number);
        setFieldValue("email", aboutUsDetails.email);
        setFieldValue("about", aboutUsDetails.about);
        setFieldValue("copyRights", aboutUsDetails.copyRights);
        setFieldValue("location", aboutUsDetails.location);
        setFieldValue("welcome", aboutUsDetails.welcome);
        setFieldValue("whatWeDo", aboutUsDetails.whatWeDo);
        setFieldValue("whoWeAre", aboutUsDetails.whoWeAre);
      } catch (error) {
        console.error("Error fetching about us details:", error);
      }
    };

    fetchAboutUs();
  }, []);

  console.log(values);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card className="p-5 flex flex-col space-y-5">
          <CardHeader>
            <CardTitle>Update Main Details</CardTitle>
            <p className="card-description">
              Make changes to the "About Us" and "What We Do" sections.
            </p>
          </CardHeader>
          <Card>
            <CardHeader>
              <CardTitle>Company Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="block" htmlFor="company_name">
                    Company Name
                  </Label>
                  <Input
                    id="company_name"
                    name="company_name"
                    placeholder="Enter company name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company_name}
                  />
                  {touched.company_name && errors.company_name && (
                    <div className="text-red-500">{errors.company_name}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="block" htmlFor="phone_number">
                    Phone Number
                  </Label>
                  <Input
                    id="phone_number"
                    name="phone_number"
                    type="number"
                    placeholder="Enter phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone_number}
                  />
                  {touched.phone_number && errors.phone_number && (
                    <div className="text-red-500">{errors.phone_number}</div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="block" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                {/* <div className="relative flex h-[300px] w-[200px] items-center justify-center rounded-md bg-gray-200">
                  {data?.coverImage && !values.coverImage ? (
                    <>
                      <img
                        src={data?.coverImage} // Preview the selected cover image
                        alt="Cover Image"
                        className=" h-full w-full rounded-md object-cover "
                      />
                      <Button
                        onClick={() => {
                          data.coverImage = "";
                        }}
                        type="button"
                        variant={"ghost"}
                        className="absolute right-1 top-1 z-10 flex rounded-md p-0 hover:bg-transparent"
                      >
                        <FaX className="bg-white text-2xl text-cyan-700" />
                      </Button>
                    </>
                  ) : values.coverImage ? (
                    <>
                      <img
                        loading="lazy"
                        src={URL.createObjectURL(values.coverImage)} // Preview the selected cover image
                        alt="Cover Image"
                        className=" h-full w-full object-cover "
                      />
                      <Button
                        onClick={() => setFieldValue("coverImage", null)}
                        type="button"
                        variant={"ghost"}
                        className="absolute right-2 top-0 z-10 m-0 flex rounded-md p-0 hover:bg-transparent"
                      >
                        <FaX className="bg-white text-2xl text-cyan-700" />
                      </Button>
                    </>
                  ) : (
                    "Image Preview"
                  )}
                </div> */}
                <div className="space-y-2">
                  <Label className="block" htmlFor="logo">
                    Logo
                  </Label>
                  <Input
                    accept="image/*"
                    className="mt-1"
                    id="logo"
                    placeholder="Select logo"
                    type="file"
                    name="logo"
                    onChange={(event) =>
                      setFieldValue("logo", event.currentTarget.files[0])
                    }
                  />
                  {touched.logo && errors.logo && (
                    <div className="text-red-500">{errors.logo}</div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="block" htmlFor="about">
                    About
                  </Label>
                  <Textarea
                    className="min-h-[150px]"
                    id="about"
                    placeholder="Enter about"
                    name="about"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.about}
                  />
                  {touched.about && errors.about && (
                    <div className="text-red-500">{errors.about}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="block" htmlFor="copyRights">
                    Copy Rights
                  </Label>
                  <Textarea
                    className="min-h-[150px]"
                    id="copyRights"
                    placeholder="Enter copy rights"
                    name="copyRights"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.copyRights}
                  />
                  {touched.copyRights && errors.copyRights && (
                    <div className="text-red-500">{errors.copyRights}</div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="block" htmlFor="location">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                  />
                  {touched.location && errors.location && (
                    <div className="text-red-500">{errors.location}</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Update Main Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="block" htmlFor="welcome">
                  Hero Title
                </Label>
                <Input
                  id="welcome"
                  name="welcome"
                  placeholder="Enter title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.welcome}
                />
                {touched.welcome && errors.welcome && (
                  <div className="text-red-500">{errors.welcome}</div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* <div className="space-y-2">
              <Label className="block" htmlFor="whatWeDo">
                What We Do
              </Label>
              <Input
                id="whatWeDo"
                name="whatWeDo"
                placeholder="Enter title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.whatWeDo}
              />
              {touched.whatWeDo && errors.whatWeDo && (
                <div className="text-red-500">{errors.whatWeDo}</div>
              )}
            </div> */}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  {/* <div className="flex items-center gap-2">
                <img
                  alt="Image"
                  className="border border-gray-200 w-80 h-80 rounded-md overflow-hidden object-cover object-center"
                  src="/placeholder.svg"
                />
              </div> */}
                  <Label className="block" htmlFor="hero">
                    Hero Image
                  </Label>
                  <Input
                    accept="image/*"
                    className="mt-1"
                    id="hero"
                    placeholder="Select image"
                    type="file"
                    name="hero"
                    onChange={(event) =>
                      setFieldValue("hero", event.currentTarget.files[0])
                    }
                  />
                  {touched.hero && errors.hero && (
                    <div className="text-red-500">{errors.hero}</div>
                  )}
                </div>
                <div className="space-y-2">
                  {/* <div className="flex items-center gap-2">
                <img
                  alt="Image"
                  className="border border-gray-200 w-80 h-80 rounded-md overflow-hidden object-cover object-center"
                  src="/placeholder.svg"
                />
              </div> */}
                  <Label className="block" htmlFor="whatWeDoImage">
                    What We Do Image
                  </Label>
                  <Input
                    accept="image/*"
                    className="mt-1"
                    id="whatWeDoImage"
                    placeholder="Select image"
                    type="file"
                    name="whatWeDoImage"
                    onChange={(event) =>
                      setFieldValue(
                        "whatWeDoImage",
                        event.currentTarget.files[0]
                      )
                    }
                  />
                  {touched.whatWeDoImage && errors.whatWeDoImage && (
                    <div className="text-red-500">{errors.whatWeDoImage}</div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="block" htmlFor="whoWeAre">
                    Who We Are Description
                  </Label>
                  <Textarea
                    className="min-h-[150px]"
                    id="whoWeAre"
                    placeholder="Enter description"
                    name="whoWeAre"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.whoWeAre}
                  />
                  {touched.whoWeAre && errors.whoWeAre && (
                    <div className="text-red-500">{errors.whoWeAre}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="block" htmlFor="whatDesc">
                    What We Do Description
                  </Label>
                  <Textarea
                    className="min-h-[150px]"
                    id="whatWeDo"
                    placeholder="Enter description"
                    name="whatWeDo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.whatWeDo}
                  />
                  {touched.whatWeDo && errors.whatWeDo && (
                    <div className="text-red-500">{errors.whatWeDo}</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-2 my-5">
            <Button
              className="ml-auto  p-2 rounded-md hover:bg-gray-200  duration-300"
              type="button"
              variant={"outline"}
            >
              Cancel
            </Button>
            <Button
              className="p-2 px-5 rounded-md hover:bg-gray-900 bg-black text-white duration-300"
              type="submit"
            >
              Save
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

export default MainDetailsAdmin;
