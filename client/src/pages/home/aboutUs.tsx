import Team from "@/components/home/team";
import { useEffect, useState } from "react";
import { getAboutUsServices } from "@/Services/aboutUs/aboutUs.service";

export default function AboutUs() {
  const [aboutUsDetails, setAboutUsDetails] = useState({});

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
    <div className="flex flex-col gap-10 px-5 md:px-20 mb-20">
      <div className="grid grid-cols-2   gap-10 items-center py-10 px-5 md:px-20">
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-semibold">About us</h1>
          <p className="mt-4">{aboutUsDetails?.whoWeAre}</p>
          <div className="p-4 rounded-full bg-primaryColor w-fit mt-4 text-white">
            <p>Contact Us</p>
          </div>
        </div>
        <img
          src={aboutUsDetails?.whatWeDoImage}
          className="w-full rounded-3xl object-cover h-full"
        ></img>
      </div>
      <Team teamMembers={aboutUsDetails?.teamMembers} />
    </div>
  );
}
