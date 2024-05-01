import { getSpecificService } from "@/Services/services/endpoint.services.service";
import img from "../../assets/Service.png";
import MainHeader from "@/components/header/mainHeader";
import SubHeader from "@/components/header/subHeader";
import { useEffect, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { Service } from "@/types";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/formatDate";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SpecificServices() {
  const { service_id } = useParams();
  const [serviceDetails, setServiceDetails] = useState<Service>();
  const [recommendationServices, setRecommendationServices] = useState<
    Service[]
  >([]);

  const getService = async () => {
    try {
      const res = await getSpecificService(service_id);
      console.log(res.data);
      setServiceDetails(res.data.specificService);
      setRecommendationServices(res.data.otherServices);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getService();
  }, [service_id]);

  return (
    <div className="flex flex-col mt-10">
      <div className="">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="flex flex-col justify-center items-center gap-2">
            <MainHeader text="English Conversation Classes" />
          </div>
          <div className="flex flex-col md:flex-row gap-10 my-20">
            <img
              className="w-full md:w-1/3 rounded-3xl h-auto md:h-80 object-cover"
              src={serviceDetails?.picture}
              alt="Service"
            ></img>
            <p className="md:w-2/3">{serviceDetails?.content}</p>
          </div>
        </div>
        <div className="bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-32 py-20">
          <SubHeader text="Other services That We Offer " />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {recommendationServices?.map((service, index) => (
              <Link
                to={`/services/specific-service/${service?.id}`}
                className="flex flex-col gap-4 group"
                key={index}
              >
                <img
                  src={service?.picture}
                  className="rounded-lg h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                  alt="Blog"
                ></img>
                <div className="pr-6 flex flex-col gap-2">
                  <p className="text-sm sm:text-base font-semibold">
                    {formatDate(new Date(service?.createdAt))}
                  </p>
                  <p className="text-lg sm:text-xl font-semibold">
                    {service?.title}
                  </p>
                  <p className="text-sm sm:text-base line-clamp-3">
                    {service?.content}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="group w-full flex cursor-pointer items-center justify-center rounded-md text-sm transition hover:border-2 hover:border-secondaryColor group-hover:bg-white md:text-base lg:p-3 lg:text-base"
                >
                  <Link
                    to="#"
                    className="group flex w-full items-center justify-center rounded py-1 text-center text-sm font-bold group-hover:text-secondaryColor md:text-base"
                  >
                    Read More
                  </Link>
                  <FaArrowRightLong className="mx-2 h-6 w-0 transition-all group-hover:w-6 group-hover:text-secondaryColor" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
