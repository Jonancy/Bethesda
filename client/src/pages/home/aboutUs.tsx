import Team from "@/components/home/team";
import { useEffect, useState } from "react";
import { getAboutUsServices } from "@/Services/aboutUs/aboutUs.service";
import { AboutUsType } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [aboutUsDetails, setAboutUsDetails] = useState<AboutUsType>();

  const getAboutUs = async () => {
    try {
      const res = await getAboutUsServices();
      setAboutUsDetails(res.data.aboutUsDetails);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAboutUs();
  }, []);
  return (
    <div className="flex flex-col  px-5 md:px-10 mb-20">
      {/* <div className="grid grid-cols-2   gap-10 items-center py-10 px-5 md:px-20">
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-semibold">About us</h1>
          <p className="mt-4">{aboutUsDetails?.whoWeAre}</p>
          <Button className="p-5 py-6 rounded-full bg-primaryColor w-fit mt-4 text-white">
            <p>Contact Us</p>
          </Button>
        </div>
        <img
          src={aboutUsDetails?.whatWeDoImage}
          className="w-full rounded-3xl object-cover h-full"
        ></img>
      </div> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className=" lg:flex lg:flex-col lg:justify-center">
              {/* <p className="text-center font-bold text-green-500 md:text-left">
                Who we are
              </p> */}
              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                About Us
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                {aboutUsDetails?.aboutUs}
              </p>
              <div className="flex">
                <Link to="/contact-us" className="w-fit h-fit rounded-xl">
                  <Button className="p-5 py-6 hidden md:inline-flex  rounded-full bg-primaryColor w-fit mt-4 text-white">
                    <p>Contact Us</p>
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src={aboutUsDetails?.whatWeDoImage}
                  // src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            {/* <div className="md:col-span-2">
              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About us
              </h2>
              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt veritatis a suscipit similique cum obcaecati maxime,
                fugit officia sunt. Laudantium est repellendus, necessitatibus
                totam, deleniti distinctio aliquid assumenda dolore voluptas
                molestiae perspiciatis temporibus ex ea.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <Team teamMembers={aboutUsDetails?.teamMembers || []} />
    </div>
  );
}
