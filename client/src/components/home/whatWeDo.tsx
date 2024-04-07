import { WhatWeDoDetails } from "@/types";
// import whatWe from "../../assets/whatWe.png";

export default function WhatWeDo({ whatWeDoImage, whatWeDo }: WhatWeDoDetails) {
  return (
    <div className="flex gap-10 items-center py-10 px-32">
      <img src={whatWeDoImage} className="w-[50rem] rounded-3xl"></img>
      <div className="">
        <h1>What We do </h1>
        <p>
          {whatWeDo}
        </p>
      </div>
    </div>
  );
}
