import { url } from "../index/index.services";

export const getAllGallery = (page: number) => {
  return url.get("/gallery/all", { params: { page: page } });
};

export const getAllGalleryAdmin = () => {
  return url.get("/gallery/allAdmin");
};

export const updateGallery = (gallery: FormData) => {
  return url.patch(`/gallery/update`, gallery);
};
