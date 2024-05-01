import { getSpecificBlogs } from "@/Services/blogs/endpoints.blogs.service";
import MainHeader from "@/components/header/mainHeader";
import SubHeader from "@/components/header/subHeader";
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blogs } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SpecificBlogs() {
  const { blog_id } = useParams();
  const [blogDetails, setBlogDetails] = useState<Blogs>();
  const [recommendationBlogs, setRecommendationBlogs] = useState<Blogs[]>([]);

  const getBlog = async () => {
    try {
      const res = await getSpecificBlogs(blog_id);
      console.log(res.data);
      setBlogDetails(res.data.specificBlogs);
      setRecommendationBlogs(res.data.otherBlogs);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, [blog_id]);

  return (
    <div className="flex flex-col mt-10">
      <div className="">
        <div className="px-4 py-6 sm:px-8 sm:py-8 md:px-16 md:py-10 lg:px-32 lg:py-12">
          <div className="flex flex-col items-start gap-2 font-semibold">
            <p className="text-2xl sm:text-3xl md:text-4xl">
              {blogDetails?.title}
            </p>
            <p>{formatDate(new Date(blogDetails?.createdAt))}</p>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <img
              className="w-full rounded-xl object-cover h-48 sm:h-64 md:h-80 lg:h-96"
              src={blogDetails?.picture}
              alt="Blog"
            />
            <p className="text-base sm:text-lg md:text-xl">
              {blogDetails?.content}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-12 lg:px-32 lg:py-16">
          <SubHeader text="More Blogs " />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {recommendationBlogs?.map((blog, index) => (
              <Link
                to={`/blogs/specific-blogs/${blog?.id}`}
                className="flex flex-col gap-4 group"
                key={index}
              >
                <img
                  src={blog?.picture}
                  className="rounded-lg h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                  alt="Blog"
                ></img>
                <div className="pr-6 flex flex-col gap-2">
                  <p className="text-sm sm:text-base font-semibold">
                    {formatDate(new Date(blog?.createdAt))}
                  </p>
                  <p className="text-lg sm:text-xl font-semibold">
                    {blog?.title}
                  </p>
                  <p className="text-sm sm:text-base line-clamp-3">
                    {blog?.content}
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
                  <FaArrowRightLong className="mx-2 h-6 w-0 transition-all group-hover:w-6 group-hover:text-secondaryColor" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
