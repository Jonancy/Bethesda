import { TeamMembers } from "@/types";
import imag from "../../assets/hero.png";
import MainButton from "../buttons/mainButton";
import { useLocation } from "react-router-dom";

export default function Team({ teamMembers }: { teamMembers: TeamMembers[] }) {
  console.log(teamMembers, "ahahha");

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="py-10 px-20">
      <h1 className="text-center text-4xl py-5 font-semibold">
        Meet Our Amazing Team
      </h1>
      <div className="grid grid-cols-4 w-full gap-10">
        {teamMembers?.map((member, index) => (
          <div className="rounded-xl" key={index}>
            <img
              className="h-[20rem] object-cover rounded-t-xl"
              src={imag}
              alt={`${member.name}'s profile`}
            />
            <div className="bg-primaryColor flex flex-col justify-center items-center p-4 rounded-b-xl">
              <p className="text-2xl text-white font-semibold">{member.name}</p>
              <p className="text-lime-500">{member.designation.type}</p>
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
