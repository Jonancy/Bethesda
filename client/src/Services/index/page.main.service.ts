import { MainDetails } from "@/types";
import { url } from "./index.services"

//!For updating on the dashboard
export const mainPageDetails=()=>{
    return url.get("/mainDetails/getAllDetails")
}

export const updateMainDetails = (form: FormData) => {
    return url.patch("/mainDetails/updateMainDetails", form);
  }
