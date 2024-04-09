import { url } from "../index/index.services"

export const getPage1Details=()=>{
    return url.get("/page-one/all")
}

