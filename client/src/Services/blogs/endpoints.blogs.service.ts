import { url } from "../index/index.services";

export const getAllBlogs = () => {
  return url.get("/blogs/all");
};

export const getSpecificBlogs = (blog_id: string) => {
  return url.get(`/blogs/specificBlogs/${blog_id}`);
};
export const addBlogs = (form: FormData) => {
  return url.post("/blogs/add", form);
};

export const updateBlogs = (form: FormData, blog_id: string) => {
  return url.patch(`/blogs/edit/${blog_id}`, form);
};

export const deleteBlogs = (blog_id: number) => {
  return url.delete(`/blogs/delete/${blog_id}`);
};
