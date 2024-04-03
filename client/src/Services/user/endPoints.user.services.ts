import { url } from "../index/index.services";

export function loginUser(user: object) {
    return url.post(`/admin/login`, user);
  }