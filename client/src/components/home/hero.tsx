import { HeroDetails } from "@/types";

export default function Hero({ hero, welcome }: HeroDetails) {
  return (
    <div className="w-full h-[30rem] relative">
      <img
        src={hero}
        className="w-full h-full object-cover absolute inset-0"
      ></img>
      <div className="flex flex-col items-center justify-center absolute top-1/2 w-full text-white text-4xl">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">{welcome}</span>
          </span>{" "}
        </h2>
        <p className="w-[40%] text-center text"></p>
      </div>
    </div>
  );
}
