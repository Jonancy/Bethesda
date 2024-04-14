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
import * as Yup from "yup";
import { useFormik } from "formik";
import { addMember } from "@/Services/teamMember/endPoints.teamMember";
import { toast } from "react-toastify";

export default function AddTeamMemberAdmin() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    designation: Yup.string().required("Designation is required"),
    post: Yup.string().required("Post is required"),
    picture: Yup.mixed().required("Profile picture is required"),
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
    initialValues: {
      name: "",
      email: "",
      designation: "",
      post: "",
      picture: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("designation", values.designation);
      formData.append("post", values.post);
      if (values.picture) {
        formData.append("image", values.picture);
      }
      try {
        await addServices(formData);
        resetForm();
      } catch (e) {
        console.error(e);
      }
    },
  });

  const addServices = async (values: FormData) => {
    try {
      const res = await addMember(values);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (e: any) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };

  console.log(errors);

  return (
    <div className="px-4">
      <div className="flex items-center justify-between space-x-4 pb-8">
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
              <Input
                id="name"
                placeholder="Enter the name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
              />
              {touched.name && errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                placeholder="Enter the designation"
                value={values.designation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.designation && errors.designation}
              />
              {touched.designation && errors.designation && (
                <div className="text-red-500 text-sm">{errors.designation}</div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="post">Post</Label>
              <Input
                id="post"
                placeholder="Enter the post"
                value={values.post}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.post && errors.post}
              />
              {touched.post && errors.post && (
                <div className="text-red-500 text-sm">{errors.post}</div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Profile Picture</Label>
            <Input
              accept="image/*"
              id="file-id"
              type="file"
              onChange={(e) => {
                setFieldValue("picture", e.currentTarget.files?.[0]);
              }}
              onBlur={handleBlur}
              error={touched.picture && errors.picture}
            />
            {touched.picture && errors.picture && (
              <div className="text-red-500 text-sm">{errors.picture}</div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="button"
            className="ml-auto"
            onClick={() => handleSubmit()}
          >
            Add Team Member
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
