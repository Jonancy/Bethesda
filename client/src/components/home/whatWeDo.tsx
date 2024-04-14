import { WhatWeDoDetails } from "@/types";
// import whatWe from "../../assets/whatWe.png";

export default function WhatWeDo({ whatWeDoImage, whatWeDo }: WhatWeDoDetails) {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center py-10 mx-5 md:mx-24 lg:mx-32">
      <img src={whatWeDoImage} className="w-[50rem] rounded-3xl"></img>
      <div className="">
        <h1 className="text-3xl font-semibold  mb-3">What We do </h1>
        <p>{whatWeDo}</p>
      </div>
    </div>
  );
}
