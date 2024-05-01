import Hero from "@/components/home/hero";
import OfferedServices from "@/components/home/offeredServices";
import WhatWeDo from "@/components/home/whatWeDo";
import Team from "@/components/home/team";
import GalleryHome from "@/components/home/galleryHome";
import { useEffect, useState } from "react";
import {
  Gallery,
  HeroDetails,
  NewsArticle,
  Service,
  TeamMembers,
  WhoWeareDetails,
} from "@/types";
import { WhatWeDoDetails } from "@/types";
import hehe from "../../assets/what.png";
import { getPage1Details } from "@/Services/pages/page1.service";
import NewsArticles from "@/components/home/newsArticles";
import MainHeader from "@/components/header/mainHeader";

export default function HomePage() {
  const [heroDetails, setHeroDetails] = useState<HeroDetails>({
    hero: "",
    welcome: "",
  });
  const [whatWeDoDetails, setWhatWeDoDetails] = useState<WhatWeDoDetails>({
    whatWeDo: "",
    whatWeDoImage: "",
  });
  const [whoWeAreDetails, setWhoWeAreDetails] = useState<WhoWeareDetails>();
  const [teamMembers, setTeamMembers] = useState<TeamMembers[]>([]);
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [gallery, setGallery] = useState<Gallery[]>([]);

  const getPageDetails = async () => {
    try {
      const res = await getPage1Details();
      console.log(res, "gaurav");
      const pageDetails = res.data.page1Details.basicDetails;
      setHeroDetails({
        hero: pageDetails?.hero,
        welcome: pageDetails?.welcome,
      });
      setWhatWeDoDetails({
        whatWeDo: pageDetails?.whatWeDo,
        whatWeDoImage: pageDetails?.whatWeDoImage,
      });
      setWhoWeAreDetails({
        whoWeAre: pageDetails?.whoWeAre,
        whoWeAreImage: hehe,
      });
      setTeamMembers(res.data?.page1Details?.teamMembers);
      setNewsArticles(res.data?.page1Details?.newsArticles);
      console.log(
        res.data?.page1Details?.newsArticles,
        "res.data?.page1Details?.newsArticles"
      );
      setServices(res.data?.page1Details?.services);
      setGallery(res.data?.page1Details?.gallery);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPageDetails();
  }, []);

  return (
    <div className="mb-20">
      <Hero hero={heroDetails.hero} welcome={heroDetails.welcome} />
      <WhatWeDo
        whatWeDoImage={whatWeDoDetails.whatWeDoImage}
        whatWeDo={whatWeDoDetails.whatWeDo}
      />
      <OfferedServices services={services} />
      <div
        className=" w-full h-[20rem]  bg-center bg-no-repeat bg-cover z-10 "
        style={{
          backgroundImage: `url(${whoWeAreDetails?.whoWeAreImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center flex justify-center gap-10 items-center flex-col h-full text-white ">
          {/* <div className="my-14">
            <MainHeader text={"Know Who We Are"} />
          </div> */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Know Who We Are
            </h1>
            <hr className="w-12 sm:w-16 md:w-20 border-2 border-white"></hr>
          </div>
          {/* <div>
            <p className="text-4xl font-semibold">Know Who We Are</p>
          </div> */}
          <div className="w-[80%] text-xs sm:text-sm lg:text-lg sm:w-[90%]">
            <p>{whoWeAreDetails?.whoWeAre}</p>
          </div>
        </div>
      </div>
      <Team teamMembers={teamMembers} />
      <GalleryHome gallery={gallery} />
      {/* <Mail /> */}
      <NewsArticles newsArticleLists={newsArticles} />
    </div>
  );
}
