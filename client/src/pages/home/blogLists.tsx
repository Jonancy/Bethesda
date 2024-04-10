import { FaArrowRightLong } from "react-icons/fa6";
import pic from "../../assets/Service.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BlogLists() {
  return (
    <div className=" sm:px-10 md:px-20 lg:px-40 py-10 flex flex-col gap-10 ">
      <div className="flex flex-col  items-center justify-center">
        <h1 className="text-3xl font-bold text-primaryColor">Our Blogs</h1>
        <p>
          We offer language instruction in English, Nepali, and Japanese, as
          well as leadership training for rural civil society leaders.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div className="flex flex-col gap-4 group" key={index}>
            <img src={pic} className="rounded-lg h-[20rem] object-cover"></img>
            <div className="pr-6 flex flex-col gap-2">
              <p className="text-sm font-semibold">April 1, 2024</p>
              <p className="text-xl font-semibold">
                1 DAYS REFRESHER TRAINING AT FULBARI, MYADI
              </p>
              <p className="text-sm">
                1 days Refresher training was conducted on 27th June 2023 at
                fullbari, Myadi. We reflected on Depression and Suicide
                prevention . More then 45 participants participated in it.
              </p>
            </div>

            <Button
              variant="outline"
              className="group w-full flex cursor-pointer items-center  justify-center rounded-md text-sm transition hover:border-2 hover:border-secondaryColor group-hover:bg-white  md:text-base  lg:p-3 lg:text-base"
            >
              <Link
                to="#"
                className="group ml-3 flex w-full items-center justify-center rounded py-1 text-center text-sm font-bold group-hover:text-secondaryColor md:text-base"
              >
                Read More
              </Link>
              <FaArrowRightLong className=" mx-2 h-6 w-0 transition-all group-hover:w-6 group-hover:text-secondaryColor" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
