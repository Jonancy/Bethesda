import WhatWeDo from "@/components/home/whatWeDo";
import whatWe from "../../assets/whatWe.png";
import Team from "@/components/home/team";
import NewsArticles from "@/components/home/newsArticles";

export default function AboutUs() {
  return (
    <div className=" flex flex-col gap-10 px-20">
      <div className="flex gap-10 items-center py-10 px-20">
        <div className="">
          <h1>What We do </h1>
          <p>
            Founded in 2010, we do provide basic care and counseling training to
            equip civil society leaders, with preference to rural areas. This is
            done in three phase of 4 days each over a time period of one year
            and there is also a retreat as an integral part of the training.
          </p>
          <div className="p-4 rounded-full bg-primaryColor w-fit mt-4 text-white ">
            <p>Contact Us</p>
          </div>
        </div>
        <img src={whatWe} className="w-[50rem] rounded-3xl"></img>
      </div>
      <WhatWeDo />
      <Team />
      <NewsArticles />
    </div>
  );
}
