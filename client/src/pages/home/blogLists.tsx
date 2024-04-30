import { FaArrowRightLong } from "react-icons/fa6";
import pic from "../../assets/Service.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBlogs } from "@/Services/blogs/endpoints.blogs.service";
import { Blogs } from "@/types";
import moment from "moment";
import { formatDate } from "@/utils/formatDate";

export default function BlogLists() {
  const [blogLists, setBlogLists] = useState<Blogs[]>([]);

  const getAllBlog = async () => {
    try {
      const res = await getAllBlogs();
      console.log(res.data);
      setBlogLists(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(blogLists);

  useEffect(() => {
    getAllBlog();
  }, []);
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-40 py-10 flex flex-col gap-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-primaryColor">
          Our Blogs
        </h1>
        <p className="text-sm sm:text-base font-semibold text-center">
          We offer language instruction in English, Nepali, and Japanese, as
          well as leadership training for rural civil society leaders.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {blogLists.map((blogs, index) => (
          <Link
            to={`/blogs/specific-blogs/${blogs?.id}`}
            className="flex flex-col gap-4 group"
            key={index}
          >
            <img
              src={blogs?.picture}
              className="rounded-lg sm:h-48 md:h-64 lg:h-80 object-cover"
            ></img>
            <div className="pr-6 flex flex-col gap-2">
              <p className="text-sm sm:text-base font-semibold">
                {formatDate(new Date(blogs?.createdAt))}
              </p>
              <p className="text-lg sm:text-xl font-semibold">{blogs?.title}</p>
              <p className="text-sm line-clamp-2 sm:line-clamp-3">
                {blogs?.content}
              </p>
            </div>
            <Button
              variant="outline"
              className="group w-full flex cursor-pointer items-center justify-center rounded-md text-sm transition hover:border-2 hover:border-secondaryColor group-hover:bg-white md:text-base lg:p-3 lg:text-base"
            >
              <Link
                to="#"
                className="group flex w-full items-center justify-center rounded py-1 text-center text-sm font-bold group-hover:text-secondaryColor md:text-base"
              >
                Read More
              </Link>
              <FaArrowRightLong className="mx-2 sm:mx-0 sm:ml-2 h-6 w-0 transition-all group-hover:w-6 group-hover:text-secondaryColor" />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
