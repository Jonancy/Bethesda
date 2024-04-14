// this service is used to get novel by id
import { useEffect, useState } from "react";
import { NewsArticle } from "@/types";
import { getAllArticles } from "./newsArticles.service";

function GetAllArticlesAdmin() {
    const [data, setdata] = useState<NewsArticle>();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    

    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await getAllArticles();
                console.log(response.data,"response.data")
                console.log(response.data.getAllArticles,"response.data.teamMembers")
                setdata(response.data.getAllArticles);
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

export default GetAllArticlesAdmin;