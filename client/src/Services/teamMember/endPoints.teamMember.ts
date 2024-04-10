import { url } from "../index/index.services";

export function GetAllMemberAdminUrl() { 
    return url.get(`/team-member/all`);
  }

export const addMember = (form: FormData) => {
  return url.post("/team-member/add", form);
};

export const updateMember = (form: FormData, id: number) => {
  return url.patch(`/team-member/edit/${id}`, form);
};

export const deleteMember = (id: number) => {
  return url.delete(`/team-member/edit/${id}`);
};
