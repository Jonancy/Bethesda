import {
  getSpecificNews,
  updateNews,
} from "@/Services/newsArticles/newsArticles.service";
import {
  getSpecificMember,
  updateMember,
} from "@/Services/teamMember/endPoints.teamMember";
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
import { useFormik } from "formik";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

function EditMemberAdmin() {
  const { id } = useParams();

  const initialValues = {
    name: "",
    designation: "",
    post: "",
    picture: null,
  };

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
    initialValues,
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
        await updateMembers(formData);
      } catch (e) {
        console.error(e);
      }
    },
  });

  //!For converting string path to file
  const convertImageUrlToFile = async (url: string, fieldName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], `${fieldName}.jpg`, { type: blob.type });
      setFieldValue(fieldName, file);
    } catch (error) {
      console.error("Error converting image URL to file:", error);
    }
  };

  const getMember = async () => {
    try {
      const res = await getSpecificMember(id);
      console.log(res.data);
      setFieldValue("name", res.data.name);
      setFieldValue("designation", res.data.designation);
      setFieldValue("post", res.data.post);

      await convertImageUrlToFile(res.data.profile, "picture");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMember();
  }, []);

  const updateMembers = async (values: FormData) => {
    try {
      const res = await updateMember(values, id);
      console.log(res.data);
      toast.success("Updated member successfully");
    } catch (e: any) {
      console.log(e);
    }
  };
  console.log(values);

  return (
    <div className="h-screen px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to="/admin/member">
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Edit News&Articles</CardTitle>
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
        <CardFooter className="flex gap-2">
          <Button className="ml-auto" variant="outline">
            Cancel
          </Button>
          <Button type="button" onClick={() => handleSubmit()}>
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default EditMemberAdmin;
