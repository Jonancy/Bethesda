import Team from "@/components/home/team";
import NewsArticles from "@/components/home/newsArticles";
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
    <div className=" flex flex-col gap-10 px-20 mb-20">
      <div className="flex gap-10 items-center py-10 px-20">
        <div className="">
          <h1>About us </h1>
          <p>
            {aboutUsDetails?.whoWeAre}
          </p>
          <div className="p-4 rounded-full bg-primaryColor w-fit mt-4 text-white ">
            <p>Contact Us</p>
          </div>
        </div>
        <img src={aboutUsDetails?.whatWeDoImage} className="w-[50rem] rounded-3xl"></img>
      </div>
      <Team  teamMembers={aboutUsDetails?.teamMembers}/>
    </div>
  );
}
