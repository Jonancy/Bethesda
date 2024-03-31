import { BiRightArrowAlt } from "react-icons/bi";
import imag from "../../assets/hero.png";

export default function Team() {
  return (
    <div className="py-10 px-20">
      <h1 className=" text-center text-3xl pb-16">Meet Our Amazing Team</h1>
      <div className="grid grid-cols-3 w-full gap-10">
        {[1, 2, 3].map(() => (
          <div className="rounded-xl">
            <img
              className="h-[30rem] object-cover rounded-t-xl"
              src={imag}
            ></img>
            <div className="bg-primaryColor flex flex-col justify-center items-center p-4 rounded-b-xl">
              <p className="text-2xl text-white font-semibold">
                Mukti nath Dakhal
              </p>
              <p className="text-lime-500">Chair person</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="flex gap-2 items-center text-xl font-semibold p-6 rounded-lg border-2 border-black">
            <p>Meet the Team</p>
            <BiRightArrowAlt />
        </div>
        </div>
    </div>
  );
}
