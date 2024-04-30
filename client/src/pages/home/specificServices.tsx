import { getSpecificService } from "@/Services/services/endpoint.services.service";
import img from "../../assets/Service.png";
import MainHeader from "@/components/header/mainHeader";
import SubHeader from "@/components/header/subHeader";
import { useEffect, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { Service } from "@/types";

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
            {recommendationServices?.map((service) => (
              <Link
                key={service.id}
                to={`/services/specific-service/${service.id}`}
                className="flex flex-col"
              >
                <img
                  className="h-48 rounded-3xl object-cover"
                  src={service?.picture}
                  alt="Service"
                ></img>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-lg font-bold truncate">{service?.title}</p>
                  <IoIosArrowDropright className="text-3xl sm:text-4xl md:text-5xl" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
