import { Link, useNavigate, useParams } from "react-router-dom";

import { ChangeEvent, useEffect, useState } from "react";
import { useFormik } from "formik";
import { BiPlusCircle } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

import { toast } from "react-toastify";
import {
  getAllGallery,
  getAllGalleryAdmin,
  updateGallery,
} from "@/Services/gallery/gallery.service";
import { Gallery } from "@/types";

interface Picture {
  image: string; // Assuming this is the URL of the image
}

export default function EditGallery() {
  const [otherPicturesPreview, setOtherPicturesPreview] = useState<Gallery[]>(
    []
  );
  // const [galleryDetails, setgalleryDetails] = useState<Gallery[]>([]);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const initialValues = {
    gallery: [],
  };

  const { values, handleSubmit, setFieldValue, touched, errors, handleBlur } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values) => {
        try {
          const formData = new FormData();
          values.gallery.forEach((file) => {
            formData.append("gallery", file);
          });
          await updateAllGallery(formData);
        } catch (error) {
          console.error("Error updating gallery:", error);
          toast.error("Failed to update gallery");
        }
      },
    });

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const res = await getAllGalleryAdmin();
      console.log(res.data);
      const allGallery = await Promise.all(
        res.data.map(async (picture: Picture) => {
          const response = await fetch(picture.image);
          const blob = await response.blob();
          // Manually specify the MIME type as image/jpeg
          return new File([blob], `image_${Date.now()}.jpg`, {
            type: "image/jpeg",
          });
        })
      );

      setOtherPicturesPreview(
        res.data.map((picture: Picture) => picture.image)
      );
      setFieldValue("gallery", allGallery);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
      toast.error("Failed to fetch gallery images");
    }
  };

  const handleGalleryPicturesChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const files = Array.from(event.currentTarget.files);
    setFieldValue("gallery", [...values.gallery, ...files]);
    // Display preview of selected images
    const previews = files.map((file) => URL.createObjectURL(file));
    setOtherPicturesPreview((prevPreviews) => [...prevPreviews, ...previews]);
  };

  const removePicture = (index: number) => {
    const updatedPictures = [...values.gallery];
    updatedPictures.splice(index, 1);
    console.log(updatedPictures);
    const updatedPreviews = [...otherPicturesPreview];
    updatedPreviews.splice(index, 1);

    setOtherPicturesPreview(updatedPreviews);
    setFieldValue("gallery", updatedPictures);
  };

  const cancelNavigate = () => {
    navigate(`/vendor/$}/settings`);
  };

  console.log(values.gallery);

  const updateAllGallery = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const res = await updateGallery(formData);
      toast.success(res.data.message);
    } catch (error) {
      console.error("Error updating all gallery:", error);
      toast.error("Failed to update all gallery");
    }
    setIsLoading(false);
  };

  const navigate = useNavigate();

  //!Converting the pictures from the backend to the file so that i can send the file again for updation
  return (
    <div className="flex flex-col w-full border h-full  ">
      <div className=" shadow-xl mt-10 bg-white p-6 rounded-lg h-full">
        <div className=" flex  border-b border-b-gray-200 pb-2 items-center ">
          <div className="text-2xl pl-10">
            <strong>Edit Gallery</strong>
          </div>
        </div>
        <div className="pl-10 pr-10 pt-10">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="flex w-full gap-10"
          >
            <div className="w-full flex flex-col justify-between h-full">
              <div className="relative rounded-xl  bg-neutral-700 ">
                <div className="grid grid-cols-4  gap-4 auto-rows-[10rem] p-4">
                  {otherPicturesPreview?.map((preview, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center relative  rounded-xl"
                    >
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        className="absolute top-2 right-2"
                        type="button"
                        onClick={() => removePicture(index)}
                      >
                        <RxCross1 className="text-white font-bold" />
                      </button>
                    </div>
                  ))}
                  <label className="flex flex-col items-center justify-center cursor-pointer ">
                    <BiPlusCircle className="text-neutral-500 text-4xl" />
                    <p className="text-gray-400 font-bold">Upload Image</p>
                    <input
                      type="file"
                      id="gallery"
                      name="gallery"
                      style={{ display: "none" }}
                      accept="image/*"
                      onBlur={handleBlur}
                      multiple
                      onChange={handleGalleryPicturesChange}
                    />
                  </label>
                </div>
              </div>
              {touched.gallery && errors.gallery && (
                <div className="text-red-600">{errors.gallery}</div>
              )}
              <div className="flex justify-end text-sm font-semibold gap-4">
                <button
                  className={`p-3 rounded-3xl pl-7 pr-7 hover:bg-neutral-100 text-black flex items-center gap-2 duration-300   ${
                    isLoading && "cursor-not-allowed"
                  }`}
                  type="button"
                  //   disabled={isLoading}
                  //   onClick={!isLoading && cancelNavigate}
                >
                  <RxCross1 className="font-bold" />
                  <p>Cancel</p>
                </button>
                <button
                  type="submit"
                  className={`p-3 rounded-3xl pl-7 pr-7 flex gap-2 text-white bg-violet-950 duration-300  ${
                    isLoading
                      ? "cursor-not-allowed opacity-80"
                      : " hover:bg-violet-900 "
                  }`}
                  //   disabled={isLoading}
                >
                  {/* {isLoading && <CircularProgress color="primary" size={20} />} */}
                  <p>Save</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
