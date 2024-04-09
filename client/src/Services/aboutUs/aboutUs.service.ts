import { url } from "../index/index.services"

export const getAboutUsServices=()=>{
    return url.get("/about-us/getAboutUs")
}

