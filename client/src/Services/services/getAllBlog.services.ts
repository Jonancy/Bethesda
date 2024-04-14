// this service is used to get novel by id
import { useEffect, useState } from "react";
import { Service } from "@/types";
import { getAllServices } from "./endpoint.services.service";

function GetAllServicesAdmin() {
    const [data, setdata] = useState<Service>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getAllServices();
                console.log(response.data,"response.data")
                console.log(response.data,"response.data.teamMembers")
                setdata(response.data);
                console.log(data,"datatatta");
                setloading(false);
            } catch (error ) {
                if(error instanceof Error){
                    console.log(error.message,"eror");
                    seterror(error.message || "There was a problem");
            }
                setloading(false);
            }
        }
        fetchData();
    }, []);

    return { data, loading, error };

}

export default GetAllServicesAdmin;