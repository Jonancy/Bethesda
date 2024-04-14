// this service is used to get novel by id
import { useEffect, useState } from "react";
import { GetAllMemberAdminUrl } from "./endPoints.teamMember";
import { TeamMembers } from "@/types";

function GetAllMemberAdmin() {
  const [data, setdata] = useState<TeamMembers>();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllMemberAdminUrl();
        console.log(response.data, "response.data");
        console.log(response.data.teamMembers, "response.data.teamMembers");
        setdata(response.data.teamMembers);
        console.log(data);
        setloading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message, "eror");
          seterror(error.message || "There was a problem");
        }
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}

export default GetAllMemberAdmin;
