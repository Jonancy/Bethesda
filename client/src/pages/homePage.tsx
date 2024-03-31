import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import OfferedServices from "@/components/home/offeredServices";
import WhatWeDo from "@/components/home/whatWeDo";
import what from "../assets/what.png";
import Team from "@/components/home/team";
import GalleryHome from "@/components/home/galleryHome";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <OfferedServices />
      <div
        className=" w-full h-[20rem]  bg-center bg-no-repeat bg-cover z-10 "
        style={{
          backgroundImage: `url(${what})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center flex justify-center gap-10 items-center flex-col h-full text-white ">
          <div>
            <p className="text-4xl font-semibold">Know Who We Are</p>
          </div>
            <div className="w-[90%]">
            <p>The Bethesda International Language and Leadership Development Centre Pvt. Ltd. (The Bethesda Centre) is an initiative to offer language classes to the public in Pokhara Municipality and to equip train and lay leaders of civil society, in areas related to Pastoral Care/Counseling, entrepreneurship and management. It was registered under the Department of Industry as a Private Limited Company on July 13, 2010.</p>
          </div>
        </div>
      </div>
      <Team />
      <GalleryHome />

    </div>
  );
}
