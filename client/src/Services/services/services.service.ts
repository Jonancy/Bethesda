import { url } from "../index/index.services";

export const getAllServices = () => {
  return url.get("/service/all");
};

export const getSpecificService = (blog_id: string) => {
  return url.get(`/service/specificService/${blog_id}`);
};
export const addService = (form: FormData) => {
  return url.post("/service/add", form);
};

export const updateService = (form: FormData, blog_id: number) => {
  return url.patch(`/service/edit/${blog_id}`, form);
};

export const deleteService = (blog_id: number) => {
  return url.delete(`/service/delete/${blog_id}`);
};
