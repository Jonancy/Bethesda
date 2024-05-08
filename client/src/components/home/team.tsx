import { TeamMembers } from "@/types";
import imag from "../../assets/hero.png";
import MainButton from "../buttons/mainButton";
import { useLocation } from "react-router-dom";
import MainHeader from "../header/mainHeader";

export default function Team({ teamMembers }: { teamMembers: TeamMembers[] }) {
  console.log(teamMembers, "ahahha");

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" px-4 bg-gray-100 sm:px-8 md:px-14 lg:px-16 xl:px-20 py-20">
      <div className="mb-14">
        <MainHeader text={"Meet Our Amazing Team"} />
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full md:gap-7 gap-3 sm:gap-5 lg:gap-8 xl:gap-12">
        {Array.isArray(teamMembers) &&
          teamMembers?.slice(0, 4)?.map((member, index) => (
            <div className="rounded-xl" key={index}>
              <img
                className="h-[20rem] w-full object-cover rounded-t-xl"
                src={member?.profile}
                alt={`${member?.name}'s profile`}
              />
              <div className="bg-primaryColor flex flex-col justify-center items-center p-4 rounded-b-xl">
                <p className="text-2xl text-white font-semibold">
                  {member?.name}
                </p>
                <p className="text-lime-500">{member?.post}</p>
              </div>
            </div>
          ))}
      </div>
      {location.pathname !== "/about-us" && (
        <div className="w-full flex justify-center items-center mt-10">
          <MainButton text={"Meet the Team"} />
        </div>
      )}
    </div>
  );
}
