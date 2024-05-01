import { WhatWeDoDetails } from "@/types";
import MainHeader from "../header/mainHeader";
// import whatWe from "../../assets/whatWe.png";

export default function WhatWeDo({ whatWeDoImage, whatWeDo }: WhatWeDoDetails) {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center py-10 mx-5 md:mx-24 lg:mx-32">
      <img
        src={whatWeDoImage}
        className="w-[50rem] object-cover h-[20rem] md:h-[30rem] rounded-3xl"
      ></img>
      <div className="">
        <div className="mb-4 gap-2 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            What we do
          </h1>
          <hr className="w-12 sm:w-16 md:w-28 border-2 border-secondaryColor"></hr>
        </div>
        <p>{whatWeDo}</p>
      </div>
    </div>
  );
}
