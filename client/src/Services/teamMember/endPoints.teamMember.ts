import { url } from "../index/index.services";

export function GetAllMemberAdminUrl() { 
    return url.get(`/team-member/all`);
  }
