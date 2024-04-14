// this service is used to get novel by id
import { useEffect, useState } from "react";
import { TeamMembers } from "@/types";
import { getAllBlogs } from "@/Services/blogs/endpoints.blogs.service";

function GetAllBlogsAdmin() {
    const [data, setdata] = useState<TeamMembers>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getAllBlogs();
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

export default GetAllBlogsAdmin;