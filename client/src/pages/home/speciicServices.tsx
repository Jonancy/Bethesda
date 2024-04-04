import { BiRightArrow } from "react-icons/bi";
import img from "../../assets/Service.png";
import MainHeader from "@/components/header/mainHeader";
import SubHeader from "@/components/header/subHeader";
import { IoIosArrowDropright } from "react-icons/io";

export default function SpeciicServices() {
  return (
    <div className="flex flex-col  mt-10">
      <div className="">
        <div className="px-[15rem]">

        <div className="flex flex-col justify-center items-center gap-2 ">
         <MainHeader text="English Conversation Classes"/>
        </div>
        <div className="flex gap-10 my-20">
          <img className="w-[26rem] rounded-3xl h-[20rem]" src={img}></img>
          <p>
            Bethesda is also offering conversation classes in English to the
            public in the municipality of Pokhara. In Nepal, as in all parts of
            the world, there is a demand for assistance to attain a good grasp
            of the English language. Be it for studies in the country (often in
            English medium) or for people aspiring to study or work overseas,
            the demand for learning English is growing by the hour. Many have
            learnt English in school but the opportunities to practice spoken
            English are often limited, which is why Bethesda is the right place
            to meet such need. Bethesda is from the month of September 2013
            offering English conversation classes to the public in the
            municipality of Pokhara. Courses will be designed for various
            professionals, business men, students, and house wives etc., who
            have a desire to improve their spoken English. The conversation
            classes will be carried out in small groups of 5-6 people to
            facilitate effective learning. Special emphasis will be given to
            grammar and pronunciation. Topics for discussion will be chosen
            according to the special interest and needs of the participants in
            each group. The Bethesda group leaders, of which several are native
            English speakers, others experienced English teachers, will be
            equipped and certified for the task through TESOL training or
            equivalent. Contact: bethesda.language@gmail.com 061-531211,
            9846624427
          </p>
        </div>
        </div>
        <div className="bg-gray-100  px-[15rem] py-20 ">
            <SubHeader text="Other services That We Offer "/>
          <div className="grid grid-cols-4 gap-8 mt-8">
            {[1, 2, 3, 4].map(() => (
              <div>
                <img className="h-[10rem] rounded-3xl" src={img}></img>
                <div className="flex  items-center justify-between pt-2">
                  <p className="text-xl font-bold w-[10rem]">Nepali Language Classes</p>
                  <IoIosArrowDropright className="text-5xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
