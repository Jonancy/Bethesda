import { getAllServices } from "@/Services/services/endpoint.services.service";
import pic from "../../assets/Service.png";
import { useEffect, useState } from "react";
import { Service } from "@/types";
import { Link } from "react-router-dom";

export default function Services() {
  const [serviceLists, setServiceLists] = useState<Service[]>([]);

  const getAllService = async () => {
    try {
      const res = await getAllServices();
      console.log(res.data);
      setServiceLists(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(serviceLists);

  useEffect(() => {
    getAllService();
  }, []);
  return (
    <div className=" px-10 sm:px-20 md:px-30 lg:px-40 py-10 flex flex-col gap-10">
      <div className="flex flex-col  items-center justify-center">
        <h1 className="text-3xl font-bold text-primaryColor">Our Services</h1>
        <p>
          We offer language instruction in English, Nepali, and Japanese, as
          well as leadership training for rural civil society leaders.
        </p>
      </div>
      <div className=" flex flex-col gap-8">
        {serviceLists?.map((service) => (
          <Link
            to={`/services/specific-service/${service.id}`}
            className="rounded-3xl w-full relative h-[15rem] hover:h-[500px] group duration-200  "
            key={service?.id}
          >
            <img
              src={service?.picture}
              className="absolute inset-0 w-full h-full rounded-3xl object-cover brightness-75"
            />
            <div className="absolute left-2 sm:left-5 md:left-10 lg:left-14 bottom-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:scale-125 origin-top-left text-white font-semibold duration-200 transition-all">
              <p className="w-[25rem]  duration-200">{service?.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
