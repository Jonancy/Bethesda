import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";
import service from "../../assets/Service.png";

export default function OfferedServices() {
  return (
    <div className="bg-gray-100 px-20 pb-10 ">
      <div className="flex items-center justify-center py-16">
        <p className="text-4xl font-semibold">Services We Offer</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {[1, 2, 3, 4].map((index) => (
          <div className="relative mb-56" key={index}>
            <img className="rounded-3xl h-[30rem]" src={service}></img>
            <div className="bg-white rounded-3xl left-16 p-10 absolute -bottom-44 w-[45rem] flex flex-col gap-10">
              <div className="">
                <h1 className="text-3xl font-semibold pb-4">
                  English Conversation Classes
                </h1>
                <p className="line-clamp-6">
                  Bethesda is also offering conversation classes in English to
                  the public in the municipality of Pokhara. In Nepal, as in all
                  parts of the world, there is a demand for assistance to attain
                  a good grasp of the English language. Be it for studies in the
                  country (often in English medium) or for people aspiring to
                  study or work overseas, the demand for learning English is
                  growing by the hour. Many have learnt English in school but
                  the opportunities to practice spoken English are often
                  limited, which is why Bethesda is the right place to meet such
                  need...
                </p>
              </div>
              <div className="flex gap-2 items-center text-xl">
                <p>Read More</p>
                <BiRightArrow />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center text-xl font-semibold p-6 rounded-lg border-2 border-black">
            <p>View All Services</p>
            <BiRightArrowAlt />
        </div>
        </div>
    </div>
  );
}
