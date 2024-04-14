import { addBlogs } from "@/Services/blogs/endpoints.blogs.service";
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
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

function AddBlogAdmin() {
  const initialValues = {
    title: "",
    content: "",
    picture: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    picture: Yup.mixed().required("Picture image is required"),
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
      formData.append("title", values.title);
      formData.append("content", values.content);
      if (values.picture) {
        formData.append("picture", values.picture);
      }

      try {
        await addBlog(formData);
      } catch (e) {
        console.error(e);
      }
    },
  });

  const addBlog = async (values: FormData) => {
    try {
      const res = await addBlogs(values);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (e: any) {
      console.log(e);
    }
  };

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
          <Label className="block" htmlFor="picture">
            Image
          </Label>
          <Input
            accept="image"
            className="mt-1"
            id="picture"
            type="file"
            name="picture"
            onChange={(event) =>
              setFieldValue("picture", event.target.files[0])
            }
            onBlur={handleBlur}
          />
          {touched.picture && errors.picture ? (
            <p className="text-sm text-red-500">{errors.picture}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label className="text-sm" htmlFor="title">
            Title
          </Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {touched.title && errors.title && (
            <div className="text-red-500 text-sm">{errors.title}</div>
          )}
        </div>
        <div className="grid gap-2">
          <Label className="text-sm" htmlFor="content">
            Description
          </Label>
          <Textarea
            className="min-h-[100px] resize-y"
            id="content"
            name="content"
            placeholder="Enter description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          {touched.content && errors.content && (
            <div className="text-red-500 text-sm">{errors.content}</div>
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
  );
}
export default AddBlogAdmin;
