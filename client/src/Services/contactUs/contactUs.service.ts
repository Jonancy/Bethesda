import { url } from "../index/index.services";

export const contactUs = (form: FormData) => {
  return url.post("/contact-us", form);
};
