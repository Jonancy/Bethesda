import { url } from "../index/index.services";

export const getAllArticles = () => {
  return url.get("/news-article/all");
};
export const getSpecificNews = (news_id: string) => {
  return url.get(`/news-article/specificNews/${news_id}`);
};

export const addNews = (form: FormData) => {
  return url.post("/news-article/add", form);
};

export const updateNews = (form: FormData, id: number) => {
  return url.patch(`/news-article/edit/${id}`, form);
};

export const deleteNews = (id: string) => {
  return url.delete(`/news-article/delete/${id}`);
};
