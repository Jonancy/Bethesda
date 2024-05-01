import { BiRightArrow } from "react-icons/bi";
import MainButton from "../buttons/mainButton";
import { Service } from "@/types";
import { Link, useNavigate } from "react-router-dom";
import MainHeader from "../header/mainHeader";

export default function OfferedServices({ services }: { services: Service[] }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-5 md:px-32 pb-10">
      <div className="my-14">
        <MainHeader text={"Services We Offer"} />
      </div>
      <div className="grid md:grid-cols-2 gap-10 grid-cols-1">
        {services?.map((service, index) => (
          <Link
            to={`/services/specific-service/${service.id}`}
            className="relative mb-56"
            key={index}
          >
            <img
              className="rounded-3xl h-[25rem] object-cover w-full"
              src={service?.picture}
            ></img>
            <div className=" w-full rounded-3xl p-3 md:p-6 lg:p-8 absolute -bottom-20 md:-bottom-32 flex flex-col gap-5">
              <div className=" bg-white p-8 rounded-3xl flex flex-col gap-5">
                <div>
                  <h1 className="text-3xl font-semibold pb-4">
                    {service?.title}
                  </h1>
                  <p className="line-clamp-4">{service?.content}</p>
                </div>
                <div className="w-full flex justify-end">
                  <div className="flex gap-2 items-center text-xl border-2 border-black w-fit p-3 rounded-2xl hover:bg-primaryColor hover:text-white">
                    <p>Read More</p>
                    <BiRightArrow />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="w-full flex justify-center items-center mb-6"
        onClick={() => navigate("/services")}
      >
        <MainButton text={"View All Services"} />
      </div>
    </div>
  );
}
