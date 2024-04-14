import { getSpecificBlogs } from "@/Services/blogs/endpoints.blogs.service";
import img from "../../assets/Service.png";
import MainHeader from "@/components/header/mainHeader";
import SubHeader from "@/components/header/subHeader";
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blogs } from "@/types";
import { formatDate } from "@/utils/formatDate";

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
    <div className="flex flex-col  mt-10">
      <div className="">
        <div className="px-[15rem]">
          <div className="flex flex-col items-start gap-2 font-semibold ">
            <p className="text-4xl">{blogDetails?.title}</p>
            <p>{formatDate(new Date(blogDetails?.createdAt))}</p>
          </div>
          <div className="flex flex-col gap-10 mb-20 mt-10">
            <img
              className="w-full rounded-xl object-cover h-[25rem]"
              src={blogDetails?.picture}
            ></img>
            <p>{blogDetails?.content}</p>
          </div>
        </div>
        <div className="bg-gray-100  px-[15rem] py-20 ">
          <SubHeader text="More Blogs " />
          <div className="grid grid-cols-4 gap-8 mt-8">
            {recommendationBlogs?.map((blog) => (
              <Link to={`/blogs/specific-blogs/${blog?.id}`} key={blog?.id}>
                <img
                  className="h-[10rem] rounded-3xl"
                  src={blog?.picture}
                ></img>
                <div className="flex  items-center justify-between pt-2">
                  <p className="text-xl font-bold w-[10rem]">{blog?.title}</p>
                  <IoIosArrowDropright className="text-5xl" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
