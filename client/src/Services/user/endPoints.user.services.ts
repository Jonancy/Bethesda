import { url } from "../index/index.services";

export function loginUser(user: object) {
    return url.post(`/admin/login`, user);
  }

export function getPage1Details(){
  return url.get(`/client/getPage1`)

}