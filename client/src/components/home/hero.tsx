import { HeroDetails } from "@/types";

export default function Hero({ hero, welcome }: HeroDetails) {

  return (
    <div className="w-full h-[30rem] relative">
      <img src={hero} className="w-full h-full object-cover absolute inset-0"></img>
      <div className="flex flex-col items-center justify-center absolute top-1/2 w-full text-white text-4xl">
        <p className="w-[40%] text-center">{welcome}</p>
    </div>
    </div>
  )
}
