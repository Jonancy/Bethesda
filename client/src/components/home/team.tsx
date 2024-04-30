import { TeamMembers } from "@/types";
import imag from "../../assets/hero.png";
import MainButton from "../buttons/mainButton";
import { useLocation } from "react-router-dom";

export default function Team({ teamMembers }: { teamMembers: TeamMembers[] }) {
  console.log(teamMembers, "ahahha");

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="py- px-4 sm:px-8 md:px-14 lg:px-16 xl:px-20">
      <h1 className="text-center text-4xl py-5 font-semibold mb-5">
        Meet Our Amazing Team
      </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full md:gap-7 gap-3 sm:gap-5 lg:gap-8 xl:gap-12">
        {Array.isArray(teamMembers) &&
          teamMembers?.slice(0, 3)?.map((member, index) => (
            <div className="rounded-xl" key={index}>
              <img
                className="h-[20rem] object-cover rounded-t-xl"
                src={imag}
                alt={`${member?.name}'s profile`}
              />
              <div className="bg-primaryColor flex flex-col justify-center items-center p-4 rounded-b-xl">
                <p className="text-2xl text-white font-semibold">
                  {member?.name}
                </p>
                <p className="text-lime-500">{member.designation?.type}</p>
              </div>
            </div>
          ))}
        {Array.isArray(teamMembers) &&
          teamMembers?.map((member, index) => (
            <div className="rounded-xl" key={index}>
              <img
                className="h-[20rem] object-cover rounded-t-xl"
                src={imag}
                alt={`${member?.name}'s profile`}
              />
              <div className="bg-primaryColor flex flex-col justify-center items-center p-4 rounded-b-xl">
                <p className="text-2xl text-white font-semibold">
                  {member?.name}
                </p>
                <p className="text-lime-500">{member.designation?.type}</p>
              </div>
            </div>
          ))}
        {Array.isArray(teamMembers) &&
          teamMembers?.map((member, index) => (
            <div className="rounded-xl" key={index}>
              <img
                className="h-[20rem] object-cover rounded-t-xl"
                src={imag}
                alt={`${member?.name}'s profile`}
              />
              <div className="bg-primaryColor flex flex-col justify-center items-center p-4 rounded-b-xl">
                <p className="text-2xl text-white font-semibold">
                  {member?.name}
                </p>
                <p className="text-lime-500">{member.designation?.type}</p>
              </div>
            </div>
          ))}
        {Array.isArray(teamMembers) &&
          teamMembers?.map((member, index) => (
            <div className="rounded-xl" key={index}>
              <img
                className="h-[20rem] object-cover rounded-t-xl"
                src={imag}
                alt={`${member?.name}'s profile`}
              />
              <div className="bg-primaryColor flex flex-col justify-center items-center p-4 rounded-b-xl">
                <p className="text-2xl text-white font-semibold">
                  {member?.name}
                </p>
                <p className="text-lime-500">{member.designation?.type}</p>
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
