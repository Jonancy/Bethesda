import { BiRightArrow } from "react-icons/bi";
import MainButton from "../buttons/mainButton";
import { Service } from "@/types";
import { Link, useNavigate } from "react-router-dom";

export default function OfferedServices({ services }: { services: Service[] }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-5 md:px-32 pb-10 ">
      <div className="flex items-center justify-center py-16">
        <p className="text-4xl font-semibold">Services We Offer</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 grid-cols-1 ">
        {services?.map((service, index) => (
          <Link
            to={`/services/specific-service/${service.id}`}
            className="relative mb-56"
            key={service?.id}
          >
            <img
              className="rounded-3xl h-[30rem] object-cover"
              src={service?.picture}
            ></img>
            <div className="bg-white rounded-3xl md:mx-7 p-8 absolute -bottom-44  flex flex-col gap-10 ">
              <div className="">
                <h1 className="text-3xl font-semibold pb-4">
                  {service?.title}
                </h1>
                <p className="line-clamp-6">{service?.content}</p>
              </div>
              <div className="flex gap-2 items-center text-xl">
                <p>Read More</p>
                <BiRightArrow />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="w-full flex justify-center items-center "
        onClick={() => navigate("/services")}
      >
        <MainButton text={"View All Services"} />
      </div>
    </div>
  );
}
