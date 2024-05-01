import { url } from "../index/index.services";

export function GetAllMemberAdminUrl() {
  return url.get(`/team-member/all`);
}

export const addMember = (form: FormData) => {
  return url.post("/team-member/add", form);
};

export function getSpecificMember(id: string) {
  return url.get(`/team-member/getSingleMember/${id}
  `);
}

export const updateMember = (form: FormData, id: string) => {
  return url.patch(`/team-member/edit/${id}`, form);
};

export const deleteMember = (id: string) => {
  return url.delete(`/team-member/delete/${id}`);
};
