import { url } from "../index/index.services"

export const getAllArticles=()=>{
    return url.get("/news-article/allArticles")
}

