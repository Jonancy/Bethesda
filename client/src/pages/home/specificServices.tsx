import { getSpecificService } from "@/Services/services/services.service";
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
    <div className="flex flex-col  mt-10">
      <div className="">
        <div className="px-[15rem]">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <MainHeader text="English Conversation Classes" />
          </div>
          <div className="flex gap-10 my-20">
            <img
              className="w-[26rem] rounded-3xl h-[20rem] object-cover"
              src={serviceDetails?.picture}
            ></img>
            <p>{serviceDetails?.content}</p>
          </div>
        </div>
        <div className="bg-gray-100  px-[15rem] py-20 ">
          <SubHeader text="Other services That We Offer " />
          <div className="grid grid-cols-4 gap-8 mt-8">
            {recommendationServices?.map((service) => (
              <Link to={`/services/specific-service/${service.id}`}>
                <img
                  className="h-[10rem] rounded-3xl object-cover"
                  src={service?.picture}
                ></img>
                <div className="flex  items-center justify-between pt-2">
                  <p className="text-xl font-bold w-[10rem]">
                    {service?.title}
                  </p>
                  <IoIosArrowDropright className="text-5xl" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
