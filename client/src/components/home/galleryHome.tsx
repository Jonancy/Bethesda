import { Link } from "react-router-dom";
import MainButton from "../buttons/mainButton";
import { Gallery } from "@/types";

export default function GalleryHome({ gallery }: { gallery: Gallery[] }) {
  console.log(gallery);

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-40">
      <h1 className="text-center font-semibold text-2xl sm:text-3xl">
        Our Picture Gallery
      </h1>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="mx-auto grid grid-cols-2 gap-4 p-2 sm:p-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery?.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt="hehe"
              className={`hover:opacity-90 duration-300 cursor-pointer aspect-square object-cover h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500 ${
                index % 4 === 0 ? "col-span-2 row-span-2 md:col-span-1" : ""
              }`}
            />
          ))}
        </div>
      </section>
      <div className="w-full flex justify-center items-center mt-8">
        <Link to={`/gallery`}>
          <MainButton text={"View All Pictures"} />
        </Link>
      </div>
    </div>
  );
}
